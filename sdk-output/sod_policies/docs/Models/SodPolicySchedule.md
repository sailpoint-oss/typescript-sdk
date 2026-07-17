---
id: v1-sod-policy-schedule
title: SodPolicySchedule
pagination_label: SodPolicySchedule
sidebar_label: SodPolicySchedule
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SodPolicySchedule', 'v1SodPolicySchedule']
slug: /tools/sdk/typescript/sod_policies/models/sod-policy-schedule
tags: ['SDK', 'Software Development Kit', 'SodPolicySchedule', 'v1SodPolicySchedule']
---

# SodPolicySchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | SOD Policy schedule name | [default to undefined]
**created** | **(optional)** `string` | The time when this SOD policy schedule is created. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | The time when this SOD policy schedule is modified. | [readonly] [default to undefined]
**description** | **(optional)** `string` | SOD Policy schedule description | [default to undefined]
**schedule** | **(optional)** `Schedule` |  | [default to undefined]
**recipients** | **(optional)** `Array<SodRecipient>` |  | [default to undefined]
**emailEmptyResults** | **(optional)** `boolean` | Indicates if empty results need to be emailed | [default to false]
**creatorId** | **(optional)** `string` | Policy\'s creator ID | [readonly] [default to undefined]
**modifierId** | **(optional)** `string` | Policy\'s modifier ID | [readonly] [default to undefined]

