---
id: v1-exportpayload
title: Exportpayload
pagination_label: Exportpayload
sidebar_label: Exportpayload
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Exportpayload', 'v1Exportpayload']
slug: /tools/sdk/typescript/sp_config/models/exportpayload
tags: ['SDK', 'Software Development Kit', 'Exportpayload', 'v1Exportpayload']
---

# Exportpayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **(optional)** `string` | Optional user defined description/name for export job. | [default to undefined]
**excludeTypes** | **(optional)** `Array<string>` | Object type names to be excluded from an sp-config export command. | [default to undefined]
**includeTypes** | **(optional)** `Array<string>` | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [default to undefined]
**objectOptions** | **(optional)**  | Additional options targeting specific objects related to each item in the includeTypes field | [default to undefined]

