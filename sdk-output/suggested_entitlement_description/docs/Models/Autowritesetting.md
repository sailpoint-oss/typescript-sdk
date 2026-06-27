---
id: v1-autowritesetting
title: Autowritesetting
pagination_label: Autowritesetting
sidebar_label: Autowritesetting
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Autowritesetting', 'v1Autowritesetting']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/autowritesetting
tags: ['SDK', 'Software Development Kit', 'Autowritesetting', 'v1Autowritesetting']
---

# Autowritesetting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Whether auto-write is currently enabled for the tenant | [default to false]
**includedSourceIds** | **(optional)** `Array<string>` | Source IDs in the allowlist. Empty array means not in allowlist mode. | [default to undefined]
**excludedSourceIds** | **(optional)** `Array<string>` | Source IDs to exclude from auto-write. Always applied. | [default to undefined]

