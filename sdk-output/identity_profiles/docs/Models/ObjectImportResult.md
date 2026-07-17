---
id: v1-object-import-result
title: ObjectImportResult
pagination_label: ObjectImportResult
sidebar_label: ObjectImportResult
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ObjectImportResult', 'v1ObjectImportResult']
slug: /tools/sdk/typescript/identity_profiles/models/object-import-result
tags: ['SDK', 'Software Development Kit', 'ObjectImportResult', 'v1ObjectImportResult']
---

# ObjectImportResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**infos** | `Array<SpConfigMessage>` | Informational messages returned from the target service on import. | [default to undefined]
**warnings** | `Array<SpConfigMessage>` | Warning messages returned from the target service on import. | [default to undefined]
**errors** | `Array<SpConfigMessage>` | Error messages returned from the target service on import. | [default to undefined]
**importedObjects** | `Array<ImportObject>` | References to objects that were created or updated by the import. | [default to undefined]

