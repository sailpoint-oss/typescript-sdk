---
id: v1-reminderescalationreminder
title: Reminderescalationreminder
pagination_label: Reminderescalationreminder
sidebar_label: Reminderescalationreminder
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Reminderescalationreminder', 'v1Reminderescalationreminder']
slug: /tools/sdk/typescript/reminder_escalations/models/reminderescalationreminder
tags: ['SDK', 'Software Development Kit', 'Reminderescalationreminder', 'v1Reminderescalationreminder']
---

# Reminderescalationreminder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | `string` | Five-field cron expression, evaluated in UTC. | [default to undefined]
**beforeDeadLine** | **(optional)** `string` | ISO-8601 duration. The reminder is active when `(deadline - now) <= beforeDeadLine`. A negative duration means the reminder starts after the deadline, for example `-P14D`. Mutually exclusive with `activeAfter`.  | [default to '']
**activeAfter** | **(optional)** `string` | ISO-8601 duration. The reminder is active when `(now - workflowStart) >= activeAfter`. Mutually exclusive with `beforeDeadLine`.  | [default to '']
**template** | `string` | Notification template key. | [default to undefined]
**maxFirings** | **(optional)** `number` | Maximum number of times this reminder fires before it deactivates. Null means the reminder keeps firing while its predicate is active. | [default to undefined]

