---
id: v1-import-options
title: ImportOptions
pagination_label: ImportOptions
sidebar_label: ImportOptions
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ImportOptions', 'v1ImportOptions']
slug: /tools/sdk/typescript/sp_config/models/import-options
tags: ['SDK', 'Software Development Kit', 'ImportOptions', 'v1ImportOptions']
---

# ImportOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excludeTypes** | **(optional)** `Array<string>` | Object type names to be excluded from an sp-config export command. | [default to undefined]
**includeTypes** | **(optional)** `Array<string>` | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [default to undefined]
**objectOptions** | **(optional)**  | Additional options targeting specific objects related to each item in the includeTypes field | [default to undefined]
**defaultReferences** | **(optional)** `Array<string>` | List of object types that can be used to resolve references on import. | [default to undefined]
**excludeBackup** | **(optional)** `boolean` | By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted. If excludeBackup is true, the backup will not be performed. | [default to false]

