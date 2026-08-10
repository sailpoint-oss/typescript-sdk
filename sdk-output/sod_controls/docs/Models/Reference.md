---
id: v1-reference
title: Reference
pagination_label: Reference
sidebar_label: Reference
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Reference', 'v1Reference']
slug: /tools/sdk/typescript/sod_controls/models/reference
tags: ['SDK', 'Software Development Kit', 'Reference', 'v1Reference']
---

# Reference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Opaque identifier in the exact form required by the owning service (case, dashes, etc. must be preserved).  | [default to undefined]
**type** | `string` | The type of object being referenced. | [default to undefined]
**name** | **(optional)** `string` | Human-readable name for the referenced identity or governance group when known. Omitted when unknown; null is allowed in the schema when clients send or receive explicit nulls.  | [default to undefined]

