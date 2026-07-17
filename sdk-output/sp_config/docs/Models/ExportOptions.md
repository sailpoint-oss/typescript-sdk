---
id: v1-export-options
title: ExportOptions
pagination_label: ExportOptions
sidebar_label: ExportOptions
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ExportOptions', 'v1ExportOptions']
slug: /tools/sdk/typescript/sp_config/models/export-options
tags: ['SDK', 'Software Development Kit', 'ExportOptions', 'v1ExportOptions']
---

# ExportOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excludeTypes** | **(optional)** `Array<string>` | Object type names to be excluded from an sp-config export command. | [default to undefined]
**includeTypes** | **(optional)** `Array<string>` | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [default to undefined]
**objectOptions** | **(optional)**  | Additional options targeting specific objects related to each item in the includeTypes field | [default to undefined]

