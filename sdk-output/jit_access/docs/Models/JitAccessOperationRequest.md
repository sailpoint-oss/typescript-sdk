---
id: v1-jit-access-operation-request
title: JitAccessOperationRequest
pagination_label: JitAccessOperationRequest
sidebar_label: JitAccessOperationRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'JitAccessOperationRequest', 'v1JitAccessOperationRequest']
slug: /tools/sdk/typescript/jit_access/models/jit-access-operation-request
tags: ['SDK', 'Software Development Kit', 'JitAccessOperationRequest', 'v1JitAccessOperationRequest']
---

# JitAccessOperationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **(optional)** `string` | Operation type. Defaults to `replace` if omitted. | [default to OpEnum_Replace]
**path** | `string` | Path to replace. Only the following JSON Pointer-style paths are supported.  | [default to undefined]
**value** | `JitAccessOperationRequestValue` |  | [default to undefined]

