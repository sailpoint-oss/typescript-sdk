#!/usr/bin/env node
/**
 * build-versioned-sdk.js
 *
 * TypeScript-axios adaptation of the Go versioned SDK builder.
 * Builds one TypeScript SDK sub-directory per resource partition found in
 * the apis/ directory.  New partitions are discovered automatically — no
 * script updates required when new endpoints are added.
 *
 * Pipeline for each partition:
 *   1. Copy apis/ to .sdk-build-tmp/  (git-ignored, so source files stay clean)
 *   2. Apply prescript YAML fixes to the temp copy
 *   3. Bundle the partition openapi.yaml with redocly (resolves shared/ $refs)
 *   4. Run openapi-generator-cli with a dynamically generated config
 *   5. Run postscript.js on the generated output
 *
 * After all partitions are built:
 *   6. Regenerate sdk-output/index.ts to re-export from every partition package
 *
 * On failure, structured error logs are written to build-errors/:
 *   build-errors/summary.md              — overview of all failures
 *   build-errors/<partition>-error.md    — self-contained per-partition report
 *                                          with error output + spec file contents
 *                                          (designed to be fed directly to an AI)
 *
 * Usage:
 *   node sdk-resources/build-versioned-sdk.js <path-to-apis-dir> [--partition <name>] [--keep-tmp]
 *
 * Options:
 *   --partition <name>   Build only the named partition (default: all)
 *   --keep-tmp           Do not delete .sdk-build-tmp after the build
 */

"use strict";

const fs   = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SDK_ROOT     = path.resolve(__dirname, "..");
const SDK_OUTPUT   = path.join(SDK_ROOT, "sdk-output");
const TEMP_DIR     = path.join(SDK_ROOT, ".sdk-build-tmp");
const BUNDLED_DIR  = path.join(TEMP_DIR, "bundled");
const ERROR_DIR    = path.join(SDK_ROOT, "build-errors");
const JAR          = path.join(SDK_ROOT, "openapi-generator-cli.jar");
const POSTSCRIPT   = path.join(__dirname, "postscript.js");
const TEMPLATE_DIR = path.join(__dirname, "resources");

const NPM_NAME     = "sailpoint-api-client";
const NPM_VERSION  = "1.0.0";
const API_VERSION  = "v1";

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
if (args.length === 0 || args[0].startsWith("--")) {
  console.error("Usage: node sdk-resources/build-versioned-sdk.js <path-to-apis-dir> [--partition <name>] [--keep-tmp]");
  process.exit(1);
}

const apisDir       = path.resolve(args[0]);
const keepTmp       = args.includes("--keep-tmp");
const partitionIdx  = args.indexOf("--partition");
const onlyPartition = partitionIdx !== -1 ? args[partitionIdx + 1] : null;

// ---------------------------------------------------------------------------
// Utility: copy directory recursively
// ---------------------------------------------------------------------------

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath  = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// ---------------------------------------------------------------------------
// Utility: walk directory, return all file paths
// ---------------------------------------------------------------------------

function walkSync(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkSync(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

// ---------------------------------------------------------------------------
// Utility: read a file safely (returns empty string if missing)
// ---------------------------------------------------------------------------

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

// ---------------------------------------------------------------------------
// Prescript fixes (applied to the temp copy of apis/)
// ---------------------------------------------------------------------------

function applyPrescriptFixes(tempApisDir) {
  const files = walkSync(tempApisDir);
  let fixed = 0;

  for (const file of files) {
    if (!file.endsWith(".yaml") && !file.endsWith(".yml")) continue;

    let rawdata = fs.readFileSync(file, "utf8");
    let lines   = rawdata.split("\n");
    let out     = [];
    let changed = false;

    // Fix X-SailPoint-Experimental headers (TypeScript prescript.js logic)
    const experimentalFixed = rawdata.replace(
      /(- name: X-SailPoint-Experimental[\s\S]*?required: )true/g,
      "$1false"
    );
    if (experimentalFixed !== rawdata) {
      rawdata = experimentalFixed;
      lines   = rawdata.split("\n");
      changed = true;
    }

    // Fix transforms and sources transform schemas
    if (file.includes(path.join("transforms", "schemas", "transform.yaml")) ||
        file.includes(path.join("sources",    "schemas", "transform.yaml"))) {
      for (let line of lines) {
        if (line.includes("oneOf")) { line = line.replaceAll("oneOf:", "type: object"); changed = true; }
        if (!line.includes("- $ref:")) out.push(line);
      }
      lines = out; out = [];
    }

    // Fix workflow trigger schemas
    if (file.includes(path.join("workflows", "schemas", "workflowtrigger.yaml"))) {
      for (let line of lines) {
        if (line.includes("anyOf")) { line = line.replaceAll("anyOf:", "type: object"); changed = true; }
        if (!line.includes("- $ref:")) out.push(line);
      }
      lines = out; out = [];
    }

    // Fix search document schemas (TypeScript generator does not handle discriminated unions well)
    if (file.includes(path.join("search", "schemas", "searchdocument.yaml")) ||
        file.includes(path.join("search", "schemas", "searchdocuments.yaml"))) {
      lines = ["type: object"];
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(file, lines.join("\n"), "utf8");
      fixed++;
    }
  }

  console.log(`  prescript: fixed ${fixed} file(s) in temp copy`);
}

// ---------------------------------------------------------------------------
// Bundle a single partition's openapi.yaml with redocly
// ---------------------------------------------------------------------------

function bundlePartition(partitionName, tempApisDir) {
  const inputSpec  = path.join(tempApisDir, partitionName, "openapi.yaml");
  const outputSpec = path.join(BUNDLED_DIR, `${partitionName}.yaml`);

  fs.mkdirSync(BUNDLED_DIR, { recursive: true });

  const result = spawnSync(
    "redocly",
    ["bundle", inputSpec, "-o", outputSpec, "--force"],
    { encoding: "utf8" }
  );

  return {
    ok:     result.status === 0,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
    outputSpec,
  };
}

// ---------------------------------------------------------------------------
// Generate per-partition config YAML (TypeScript-specific)
// ---------------------------------------------------------------------------

function writePartitionConfig(partitionName) {
  const config = [
    `templateDir: ${TEMPLATE_DIR}`,
    `files:`,
    `  package.mustache:`,
    `    templateType: SupportingFiles`,
    `    destinationFilename: package.json`,
    `npmName: ${NPM_NAME}`,
    `npmRepository: sailpoint.com`,
    `npmVersion: ${NPM_VERSION}`,
    `useSingleRequestParameter: true`,
    `apiVersion: ${API_VERSION}`,
    `enumNameSuffix: V1`,
  ].join("\n");

  const configPath = path.join(TEMP_DIR, `${partitionName}-config.yaml`);
  fs.writeFileSync(configPath, config, "utf8");
  return configPath;
}

// ---------------------------------------------------------------------------
// Run openapi-generator for a single partition
// ---------------------------------------------------------------------------

function generatePartition(partitionName, bundledSpec, configPath) {
  const packageDir = `${partitionName.replaceAll("-", "_")}_v1`;
  const outputDir  = path.join(SDK_OUTPUT, packageDir);

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }

  const result = spawnSync(
    "java",
    [
      "-jar", JAR,
      "generate",
      "-i", bundledSpec,
      "-g", "typescript-axios",
      "-o", outputDir,
      "--global-property", "skipFormModel=false",
      "--config", configPath,
      "--api-name-suffix", "V1Api",
      "--model-name-suffix", "V1",
    ],
    { encoding: "utf8" }
  );

  return {
    ok:        result.status === 0,
    stdout:    result.stdout || "",
    stderr:    result.stderr || "",
    outputDir,
    packageDir,
  };
}

// ---------------------------------------------------------------------------
// Run postscript.js on the generated output
// ---------------------------------------------------------------------------

function runPostscript(outputDir) {
  const result = spawnSync(
    "node",
    [POSTSCRIPT, outputDir],
    { encoding: "utf8" }
  );

  return {
    ok:     result.status === 0,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
  };
}

// ---------------------------------------------------------------------------
// Error logging
// ---------------------------------------------------------------------------

const MAX_FILE_BYTES = 20_000;

function collectSpecFiles(partitionName, tempApisDir) {
  const partDir = path.join(tempApisDir, partitionName);
  if (!fs.existsSync(partDir)) return {};

  const collected = {};
  const files = walkSync(partDir).filter(f => f.endsWith(".yaml"));

  for (const f of files) {
    const relPath = path.relative(path.join(tempApisDir, ".."), f);
    let content = readFileSafe(f);
    if (Buffer.byteLength(content, "utf8") > MAX_FILE_BYTES) {
      content = content.slice(0, MAX_FILE_BYTES) + "\n\n[... truncated — file exceeds 20 KB ...]";
    }
    collected[relPath] = content;
  }

  return collected;
}

function writeErrorReport(partitionName, step, errorOutput, tempApisDir, apisSourceDir) {
  fs.mkdirSync(ERROR_DIR, { recursive: true });

  const specFiles  = collectSpecFiles(partitionName, path.join(tempApisDir, "apis"));
  const sourceDir  = path.join(apisSourceDir, partitionName);
  const reportPath = path.join(ERROR_DIR, `${partitionName}-error.md`);

  const fileBlocks = Object.entries(specFiles)
    .map(([relPath, content]) => `### \`${relPath}\`\n\`\`\`yaml\n${content}\n\`\`\``)
    .join("\n\n");

  const report = `# SDK Build Error: \`${partitionName}\`

## Context for AI

This file is a self-contained error report for the \`${partitionName}\` API partition.
It contains the build error and all relevant OpenAPI spec files needed to diagnose and fix the problem.

**Source directory to fix:** \`${sourceDir}\`
**Failed step:** ${step}

---

## Error Output

\`\`\`
${errorOutput.trim()}
\`\`\`

---

## Fix Instructions

1. Read the error output above carefully.
2. Identify which spec file(s) below are causing the problem.
3. Apply fixes directly to the source files under \`${sourceDir}\`.
4. Do **not** edit files in \`.sdk-build-tmp/\` — those are generated copies.
5. After fixing, re-run the build for just this partition:
   \`\`\`bash
   node sdk-resources/build-versioned-sdk.js <path-to-apis> --partition ${partitionName}
   \`\`\`

---

## Spec Files

${fileBlocks || "_No spec files found._"}
`;

  fs.writeFileSync(reportPath, report, "utf8");
  return reportPath;
}

function writeSummaryReport(results, apisSourceDir) {
  fs.mkdirSync(ERROR_DIR, { recursive: true });

  const failureLines = results.failed.map(({ partition, step, reportPath }) =>
    `| \`${partition}\` | ${step} | [${path.basename(reportPath)}](./${path.basename(reportPath)}) |`
  ).join("\n");

  const summary = `# SDK Build Error Summary

**Date:** ${new Date().toISOString()}
**APIs directory:** \`${apisSourceDir}\`
**Total partitions:** ${results.total}
**Succeeded:** ${results.success.length}
**Failed:** ${results.failed.length}

## Failed Partitions

| Partition | Failed Step | Error Report |
|-----------|-------------|--------------|
${failureLines || "_(none)_"}

## How to Fix

Each error report in this directory is self-contained and can be given directly to an AI.
It includes the full error output and all relevant spec file contents.

Fix partitions one at a time:
\`\`\`bash
# Fix a single partition
node sdk-resources/build-versioned-sdk.js <path-to-apis> --partition <partition-name>

# Re-run all after fixes
node sdk-resources/build-versioned-sdk.js <path-to-apis>
\`\`\`
`;

  const summaryPath = path.join(ERROR_DIR, "summary.md");
  fs.writeFileSync(summaryPath, summary, "utf8");
  return summaryPath;
}

// ---------------------------------------------------------------------------
// Regenerate sdk-output/index.ts from discovered partition packages
//
// Naming convention in the SailPoint namespace:
//   Generated class  AccountsV1Api  →  SailPoint.AccountsApi
//   Generated class  AccountsV2Api  →  still SailPoint.AccountsApi  (combined)
//
// The version suffix is stripped from the namespace name so the import never
// changes as new versions land.  Method names carry the version suffix
// (listAccountsV1, listAccountsV2) so you always know which version you're
// calling.
//
// Single-version resource  →  const AccountsApi = _AccountsV1Api
// Multi-version resource   →  generated combined class that extends the
//   latest version and copies older-version prototype methods, with
//   TypeScript interface merging for full type safety on all methods.
//
// TS2308 note: export * across 100+ partitions collides on shared error model
// names (Redocly inlines them into every partition).  Only API classes are
// exported from the root — models are imported directly from sub-paths:
//   import type { AccountV1 } from "sailpoint-api-client/accounts_v1/api"
// ---------------------------------------------------------------------------

/** AccountsV1Api  →  AccountsApi */
function toResourceApiName(className) {
  return className.replace(/V\d+Api$/, "Api");
}

/** Extract the numeric version from a class name: AccountsV1Api → 1 */
function classVersion(className) {
  return parseInt(className.match(/V(\d+)Api$/)?.[1] ?? "1", 10);
}

function generateIndexTs() {
  const partitionDirs = fs.readdirSync(SDK_OUTPUT)
    .filter(d => /^[a-z].+_v\d+$/.test(d) && fs.statSync(path.join(SDK_OUTPUT, d)).isDirectory())
    .sort();

  if (partitionDirs.length === 0) {
    console.log("  No *_v1 partition packages found, skipping index.ts regeneration.");
    return;
  }

  // Collect { dir, className } for every partition
  const partitions = partitionDirs.map(d => {
    const apiTsPath = path.join(SDK_OUTPUT, d, "api.ts");
    const content   = fs.existsSync(apiTsPath) ? fs.readFileSync(apiTsPath, "utf8") : "";
    const match     = content.match(/^export class (\w+) extends BaseAPI/m);
    return match ? { dir: d, className: match[1] } : null;
  }).filter(Boolean);

  // Group by resource name, sorted oldest→newest within each group
  const byResource = new Map();
  for (const p of partitions) {
    const key = toResourceApiName(p.className);
    if (!byResource.has(key)) byResource.set(key, []);
    byResource.get(key).push(p);
  }
  for (const group of byResource.values()) {
    group.sort((a, b) => classVersion(a.className) - classVersion(b.className));
  }

  // Build the three output sections
  const importLines   = [];  // import { X as _X } from "..."
  const exportLines   = [];  // export { _X as X }  (named / backward-compat)
  const combinedBlocks = []; // combined class declarations for multi-version resources
  const nsLines       = [];  // lines inside `export namespace SailPoint { ... }`

  for (const [resourceApiName, group] of byResource.entries()) {
    // --- import every versioned class ---
    for (const p of group) {
      importLines.push(`import { ${p.className} as _${p.className} } from "./${p.dir}/api";`);
      exportLines.push(`export { _${p.className} as ${p.className} };`);
    }

    if (group.length === 1) {
      // Single version — simple alias in namespace
      nsLines.push(`  export const ${resourceApiName} = _${group[0].className};`);
    } else {
      // Multi-version — generate a combined class:
      //   • extends the latest version (newest methods available natively)
      //   • interface-merges older versions (TypeScript knows all method signatures)
      //   • copies older prototype methods at runtime (runtime correctness)
      const latest  = group[group.length - 1];
      const older   = group.slice(0, -1);
      const implVar = `_${resourceApiName}Impl`; // e.g. _AccountsApiImpl

      const interfaceMerges = older
        .map(p => `interface ${implVar} extends _${p.className} {}`)
        .join("\n");

      const protoCopyArgs = older.map(p => `_${p.className}`).join(", ");

      combinedBlocks.push(
        `// ${resourceApiName}: combined ${group.map(p => p.className).join(" + ")}`,
        `class ${implVar} extends _${latest.className} {}`,
        interfaceMerges,
        `(function(target: any, ...sources: Function[]) {`,
        `  for (const src of sources) {`,
        `    for (const key of Object.getOwnPropertyNames((src as any).prototype)) {`,
        `      if (key !== "constructor" && !(key in target.prototype)) {`,
        `        const d = Object.getOwnPropertyDescriptor((src as any).prototype, key);`,
        `        if (d) Object.defineProperty(target.prototype, key, d);`,
        `      }`,
        `    }`,
        `  }`,
        `})(${implVar}, ${protoCopyArgs});`,
        "",
      );

      nsLines.push(`  export const ${resourceApiName} = ${implVar};`);
    }
  }

  const fileContent = `/* tslint:disable */
/* eslint-disable */
// Code generated by build-versioned-sdk.js; DO NOT EDIT.
//
// Named imports — backward-compatible, version-explicit:
//   import { AccountsV1Api, Configuration } from "sailpoint-api-client"
//
// Namespace — resource-named, version-agnostic (preferred):
//   import { SailPoint, Configuration } from "sailpoint-api-client"
//   const api = new SailPoint.AccountsApi(config)   // works for v1, v2, v3 …
//   api.listAccountsV1(...)                          // method name shows version
//   api.listAccountsV2(...)                          // when v2 partition lands
//
// Models — import directly from the partition sub-path:
//   import type { AccountV1 } from "sailpoint-api-client/accounts_v1/api"

// --- Partition imports (private _ alias avoids TS1194 / TS2303 in namespace) ---
${importLines.join("\n")}

// --- Named exports (versioned class names, backward-compatible) ---
${exportLines.join("\n")}

// --- Generic / NERM / shared exports ---
export * from "./generic/api";

export * from "./nerm/api";
export { Configuration as ConfigurationNerm, ConfigurationParameters as ConfigurationParametersNerm } from "./nerm/configuration";

export * from "./nermv2025/api";
export { Configuration as ConfigurationNermV2025, ConfigurationParameters as ConfigurationParametersNermV2025 } from "./nermv2025/configuration";

export { Configuration, ConfigurationParameters } from "./configuration";

export * from "./paginator";
export { axiosRetry };

    import * as axiosRetry from "axios-retry";

${combinedBlocks.length > 0 ? "// --- Combined multi-version API classes ---\n" + combinedBlocks.join("\n") : ""}
// --- SailPoint namespace (resource-named, all versions combined) ---
export namespace SailPoint {
${nsLines.join("\n")}
}
`;

  fs.writeFileSync(path.join(SDK_OUTPUT, "index.ts"), fileContent, "utf8");
  console.log(`  Wrote index.ts — ${partitions.length} partition(s), ${byResource.size} resource(s) in SailPoint namespace`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!fs.existsSync(apisDir)) {
    console.error(`Error: apis directory not found: ${apisDir}`);
    process.exit(1);
  }

  if (!fs.existsSync(JAR)) {
    console.error(`Error: openapi-generator-cli.jar not found at ${JAR}`);
    console.error("  Download it with:");
    console.error("  wget -q https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/7.12.0/openapi-generator-cli-7.12.0.jar -O openapi-generator-cli.jar");
    process.exit(1);
  }

  const allPartitions = fs.readdirSync(apisDir, { withFileTypes: true })
    .filter(e => e.isDirectory() && e.name !== "shared")
    .map(e => e.name)
    .sort();

  const partitions = onlyPartition
    ? allPartitions.filter(p => p === onlyPartition)
    : allPartitions;

  if (partitions.length === 0) {
    console.error(`No partitions found${onlyPartition ? ` matching '${onlyPartition}'` : ""} in ${apisDir}`);
    process.exit(1);
  }

  console.log(`\nFound ${partitions.length} partition(s) to build\n`);

  // Set up temp directory
  console.log(`[SETUP] Copying apis/ → ${path.relative(SDK_ROOT, TEMP_DIR)}/`);
  if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  copyDirSync(apisDir, path.join(TEMP_DIR, "apis"));

  console.log("[SETUP] Applying prescript fixes to temp copy ...");
  applyPrescriptFixes(path.join(TEMP_DIR, "apis"));

  // Clear any previous error reports
  if (fs.existsSync(ERROR_DIR)) fs.rmSync(ERROR_DIR, { recursive: true, force: true });

  const results = {
    total:   partitions.length,
    success: [],
    failed:  [],
  };

  for (const partition of partitions) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`  Building: ${partition}`);
    console.log(`${"=".repeat(60)}`);

    // --- Step 1: Bundle ---
    console.log("  [1/4] Bundling spec ...");
    const bundle = bundlePartition(partition, path.join(TEMP_DIR, "apis"));
    if (!bundle.ok) {
      const errorOutput = [bundle.stdout, bundle.stderr].filter(Boolean).join("\n");
      console.error(`  ✗ bundling failed`);
      const reportPath = writeErrorReport(partition, "bundling", errorOutput, TEMP_DIR, apisDir);
      results.failed.push({ partition, step: "bundling", reportPath });
      continue;
    }

    // --- Step 2: Config ---
    console.log("  [2/4] Writing generator config ...");
    const configPath = writePartitionConfig(partition);

    // --- Step 3: Generate ---
    console.log("  [3/4] Generating TypeScript SDK ...");
    const gen = generatePartition(partition, bundle.outputSpec, configPath);
    if (!gen.ok) {
      const errorOutput = [gen.stdout, gen.stderr].filter(Boolean).join("\n");
      console.error(`  ✗ generation failed`);
      const reportPath = writeErrorReport(partition, "generation", errorOutput, TEMP_DIR, apisDir);
      results.failed.push({ partition, step: "generation", reportPath });
      continue;
    }

    // --- Step 4: Postscript ---
    console.log("  [4/4] Running postscript ...");
    const post = runPostscript(gen.outputDir);
    if (!post.ok) {
      const errorOutput = [post.stdout, post.stderr].filter(Boolean).join("\n");
      console.error(`  ✗ postscript failed`);
      const reportPath = writeErrorReport(partition, "postscript", errorOutput, TEMP_DIR, apisDir);
      results.failed.push({ partition, step: "postscript", reportPath });
      continue;
    }

    results.success.push(partition);
    console.log(`  ✓ ${partition} → sdk-output/${gen.packageDir}/`);
  }

  // Cleanup
  if (!keepTmp) {
    console.log("\n[CLEANUP] Removing .sdk-build-tmp/ ...");
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }

  // Regenerate index.ts to include all current *_v1 packages
  console.log("\n[INDEX] Regenerating sdk-output/index.ts ...");
  generateIndexTs();

  // Write error reports
  if (results.failed.length > 0) {
    const summaryPath = writeSummaryReport(results, apisDir);
    console.log(`\n[ERRORS] ${results.failed.length} partition(s) failed.`);
    console.log(`  Summary:  ${path.relative(SDK_ROOT, summaryPath)}`);
    console.log(`  Reports:  ${path.relative(SDK_ROOT, ERROR_DIR)}/`);
    console.log(`\n  Failed partitions:`);
    for (const { partition, step, reportPath } of results.failed) {
      console.log(`    ✗ ${partition} (${step}) → ${path.relative(SDK_ROOT, reportPath)}`);
    }
  }

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("BUILD SUMMARY");
  console.log("=".repeat(60));
  console.log(`  Success: ${results.success.length} / ${results.total}`);
  console.log(`  Failed:  ${results.failed.length} / ${results.total}`);

  if (results.failed.length > 0) {
    process.exit(1);
  }
}

main().catch(err => {
  console.error(`Unexpected error: ${err.message}`);
  process.exit(1);
});
