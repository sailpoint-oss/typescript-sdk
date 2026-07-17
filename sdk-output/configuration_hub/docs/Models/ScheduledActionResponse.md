---
id: v1-scheduled-action-response
title: ScheduledActionResponse
pagination_label: ScheduledActionResponse
sidebar_label: ScheduledActionResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ScheduledActionResponse', 'v1ScheduledActionResponse']
slug: /tools/sdk/typescript/configuration_hub/models/scheduled-action-response
tags: ['SDK', 'Software Development Kit', 'ScheduledActionResponse', 'v1ScheduledActionResponse']
---

# ScheduledActionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier for this scheduled action. | [default to undefined]
**created** | **(optional)** `string` | The time when this scheduled action was created. | [default to undefined]
**jobType** | **(optional)** `string` | Type of the scheduled job. | [default to undefined]
**content** | **(optional)** `ScheduledActionResponseContent` |  | [default to undefined]
**startTime** | **(optional)** `string` | The time when this scheduled action should start. | [default to undefined]
**cronString** | **(optional)** `string` | Cron expression defining the schedule for this action. | [default to undefined]
**timeZoneId** | **(optional)** `string` | Time zone ID for interpreting the cron expression. | [default to undefined]

