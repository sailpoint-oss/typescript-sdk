---
id: v1-scheduledactionpayload
title: Scheduledactionpayload
pagination_label: Scheduledactionpayload
sidebar_label: Scheduledactionpayload
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Scheduledactionpayload', 'v1Scheduledactionpayload']
slug: /tools/sdk/typescript/configuration_hub/models/scheduledactionpayload
tags: ['SDK', 'Software Development Kit', 'Scheduledactionpayload', 'v1Scheduledactionpayload']
---

# Scheduledactionpayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobType** | `string` | Type of the scheduled job. | [default to undefined]
**startTime** | **(optional)** `string` | The time when this scheduled action should start. Optional. | [default to undefined]
**cronString** | **(optional)** `string` | Cron expression defining the schedule for this action. Optional for repeated events. | [default to undefined]
**timeZoneId** | **(optional)** `string` | Time zone ID for interpreting the cron expression. Optional, will default to current time zone. | [default to undefined]
**content** | `ScheduledactionpayloadContent` |  | [default to undefined]

