---
id: v1-parameterstoragejsonpatch
title: Parameterstoragejsonpatch
pagination_label: Parameterstoragejsonpatch
sidebar_label: Parameterstoragejsonpatch
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Parameterstoragejsonpatch', 'v1Parameterstoragejsonpatch']
slug: /tools/sdk/typescript/parameter_storage/models/parameterstoragejsonpatch
tags: ['SDK', 'Software Development Kit', 'Parameterstoragejsonpatch', 'v1Parameterstoragejsonpatch']
---

# Parameterstoragejsonpatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | `string` | The operation to perform (add, remove, replace, move, copy, test) | [default to undefined]
**path** | `string` | A JSON-Pointer describing the target location | [default to undefined]
**value** | **(optional)** `any` | The value to be used within the operations. Required for add/replace/test. | [default to undefined]
**from** | **(optional)** `string` | A JSON-Pointer describing the source location for move/copy. | [default to undefined]

