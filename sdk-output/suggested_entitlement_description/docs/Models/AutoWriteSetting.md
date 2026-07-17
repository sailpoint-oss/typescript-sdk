---
id: v1-auto-write-setting
title: AutoWriteSetting
pagination_label: AutoWriteSetting
sidebar_label: AutoWriteSetting
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AutoWriteSetting', 'v1AutoWriteSetting']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/auto-write-setting
tags: ['SDK', 'Software Development Kit', 'AutoWriteSetting', 'v1AutoWriteSetting']
---

# AutoWriteSetting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Whether auto-write is currently enabled for the tenant | [default to false]
**includedSourceIds** | **(optional)** `Array<string>` | Source IDs in the allowlist. Empty array means not in allowlist mode. | [default to undefined]
**excludedSourceIds** | **(optional)** `Array<string>` | Source IDs to exclude from auto-write. Always applied. | [default to undefined]

