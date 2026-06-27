---
id: v1-schedule
title: Schedule
pagination_label: Schedule
sidebar_label: Schedule
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Schedule', 'v1Schedule']
slug: /tools/sdk/typescript/sod_policies/models/schedule
tags: ['SDK', 'Software Development Kit', 'Schedule', 'v1Schedule']
---

# Schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `Scheduletype` |  | [default to undefined]
**months** | **(optional)** `ScheduleMonths` |  | [default to undefined]
**days** | **(optional)** `ScheduleDays` |  | [default to undefined]
**hours** | `ScheduleHours` |  | [default to undefined]
**expiration** | **(optional)** `string` | A date-time in ISO-8601 format | [default to undefined]
**timeZoneId** | **(optional)** `string` | The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org\'s default timezone is used. | [default to undefined]

