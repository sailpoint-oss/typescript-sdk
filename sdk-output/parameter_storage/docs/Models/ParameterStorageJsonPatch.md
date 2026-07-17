---
id: v1-parameter-storage-json-patch
title: ParameterStorageJsonPatch
pagination_label: ParameterStorageJsonPatch
sidebar_label: ParameterStorageJsonPatch
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ParameterStorageJsonPatch', 'v1ParameterStorageJsonPatch']
slug: /tools/sdk/typescript/parameter_storage/models/parameter-storage-json-patch
tags: ['SDK', 'Software Development Kit', 'ParameterStorageJsonPatch', 'v1ParameterStorageJsonPatch']
---

# ParameterStorageJsonPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | `string` | The operation to perform (add, remove, replace, move, copy, test) | [default to undefined]
**path** | `string` | A JSON-Pointer describing the target location | [default to undefined]
**value** | **(optional)** `any` | The value to be used within the operations. Required for add/replace/test. | [default to undefined]
**from** | **(optional)** `string` | A JSON-Pointer describing the source location for move/copy. | [default to undefined]

