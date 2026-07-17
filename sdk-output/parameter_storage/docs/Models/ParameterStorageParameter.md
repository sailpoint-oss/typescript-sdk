---
id: v1-parameter-storage-parameter
title: ParameterStorageParameter
pagination_label: ParameterStorageParameter
sidebar_label: ParameterStorageParameter
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ParameterStorageParameter', 'v1ParameterStorageParameter']
slug: /tools/sdk/typescript/parameter_storage/models/parameter-storage-parameter
tags: ['SDK', 'Software Development Kit', 'ParameterStorageParameter', 'v1ParameterStorageParameter']
---

# ParameterStorageParameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The ID of the reference | [default to undefined]
**ownerId** | `string` | The ID of the user who owns the parameter. | [default to undefined]
**type** | **(optional)** `string` | The type of the parameter. This cannot be changed after being set. Please see the types document for more information. | [default to undefined]
**name** | `string` | The human-readable name of the parameter. | [default to undefined]
**primaryField** | **(optional)** `string` | The name of the primary field in the public fields. | [default to undefined]
**publicFields** | `object` | The public fields stored for this parameter. See the types document for information about what can be stored. | [default to undefined]
**description** | **(optional)** `string` | Describe the parameter | [default to undefined]
**lastModifiedAt** | **(optional)** `string` | ISO8606 format datetime of the last time any field of the parameter was changed. | [default to undefined]
**lastModifiedBy** | **(optional)** `string` | The ID of the user who last modified the parameter. Empty when identity is not known. | [default to undefined]
**privateFieldsLastModifiedAt** | **(optional)** `string` | ISO8606 format datetime of the time the secret fields were changed on the parameter. | [default to undefined]
**privateFieldsLastModifiedBy** | **(optional)** `string` | The ID of the user who last modified the private fields. Empty when identity is not known. | [default to undefined]

