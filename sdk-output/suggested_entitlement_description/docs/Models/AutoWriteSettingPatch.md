---
id: v1-auto-write-setting-patch
title: AutoWriteSettingPatch
pagination_label: AutoWriteSettingPatch
sidebar_label: AutoWriteSettingPatch
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AutoWriteSettingPatch', 'v1AutoWriteSettingPatch']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/auto-write-setting-patch
tags: ['SDK', 'Software Development Kit', 'AutoWriteSettingPatch', 'v1AutoWriteSettingPatch']
---

# AutoWriteSettingPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | `string` | The operation to perform. Only \"replace\" is supported. | [default to undefined]
**path** | `string` | The field to update. Allowed values: /enabled, /includedSourceIds, /excludedSourceIds | [default to undefined]
**value** | `AutoWriteSettingPatchValue` |  | [default to undefined]

