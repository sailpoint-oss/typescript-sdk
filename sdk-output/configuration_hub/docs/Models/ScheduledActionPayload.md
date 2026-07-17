---
id: v1-scheduled-action-payload
title: ScheduledActionPayload
pagination_label: ScheduledActionPayload
sidebar_label: ScheduledActionPayload
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ScheduledActionPayload', 'v1ScheduledActionPayload']
slug: /tools/sdk/typescript/configuration_hub/models/scheduled-action-payload
tags: ['SDK', 'Software Development Kit', 'ScheduledActionPayload', 'v1ScheduledActionPayload']
---

# ScheduledActionPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobType** | `string` | Type of the scheduled job. | [default to undefined]
**startTime** | **(optional)** `string` | The time when this scheduled action should start. Optional. | [default to undefined]
**cronString** | **(optional)** `string` | Cron expression defining the schedule for this action. Optional for repeated events. | [default to undefined]
**timeZoneId** | **(optional)** `string` | Time zone ID for interpreting the cron expression. Optional, will default to current time zone. | [default to undefined]
**content** | `ScheduledActionPayloadContent` |  | [default to undefined]

