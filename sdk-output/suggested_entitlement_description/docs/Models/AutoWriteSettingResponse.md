---
id: v1-auto-write-setting-response
title: AutoWriteSettingResponse
pagination_label: AutoWriteSettingResponse
sidebar_label: AutoWriteSettingResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AutoWriteSettingResponse', 'v1AutoWriteSettingResponse']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/auto-write-setting-response
tags: ['SDK', 'Software Development Kit', 'AutoWriteSettingResponse', 'v1AutoWriteSettingResponse']
---

# AutoWriteSettingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Whether auto-write is currently enabled for the tenant | [default to false]
**includedSourceIds** | **(optional)** `Array<string>` | Source IDs in the allowlist. Empty array means not in allowlist mode. | [default to undefined]
**excludedSourceIds** | **(optional)** `Array<string>` | Source IDs to exclude from auto-write. Always applied. | [default to undefined]
**createdAt** | **(optional)** `string` | When settings were first created | [default to undefined]
**updatedAt** | **(optional)** `string` | When settings were last modified | [default to undefined]

