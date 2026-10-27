---
id: v1-machine-identity-daily-counts
title: MachineIdentityDailyCounts
pagination_label: MachineIdentityDailyCounts
sidebar_label: MachineIdentityDailyCounts
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineIdentityDailyCounts', 'v1MachineIdentityDailyCounts']
slug: /tools/sdk/typescript/machine_identities/models/machine-identity-daily-counts
tags: ['SDK', 'Software Development Kit', 'MachineIdentityDailyCounts', 'v1MachineIdentityDailyCounts']
---

# MachineIdentityDailyCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **(optional)** `string` | First day (UTC) of the window, inclusive. | [default to undefined]
**to** | **(optional)** `string` | Last day (UTC) of the window, inclusive. This is always the day before the current UTC date. | [default to undefined]
**days** | **(optional)** `Array<MachineIdentityDailyCountsDay>` | One entry for each calendar day in the window, in ascending order. | [default to undefined]

