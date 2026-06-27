---
id: v1-sodpolicyschedule
title: Sodpolicyschedule
pagination_label: Sodpolicyschedule
sidebar_label: Sodpolicyschedule
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Sodpolicyschedule', 'v1Sodpolicyschedule']
slug: /tools/sdk/typescript/sod_policies/models/sodpolicyschedule
tags: ['SDK', 'Software Development Kit', 'Sodpolicyschedule', 'v1Sodpolicyschedule']
---

# Sodpolicyschedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | SOD Policy schedule name | [default to undefined]
**created** | **(optional)** `string` | The time when this SOD policy schedule is created. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | The time when this SOD policy schedule is modified. | [readonly] [default to undefined]
**description** | **(optional)** `string` | SOD Policy schedule description | [default to undefined]
**schedule** | **(optional)** `Schedule` |  | [default to undefined]
**recipients** | **(optional)** `Array<Sodrecipient>` |  | [default to undefined]
**emailEmptyResults** | **(optional)** `boolean` | Indicates if empty results need to be emailed | [default to false]
**creatorId** | **(optional)** `string` | Policy\'s creator ID | [readonly] [default to undefined]
**modifierId** | **(optional)** `string` | Policy\'s modifier ID | [readonly] [default to undefined]

