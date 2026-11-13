---
id: v1-reminderescalationruleset
title: Reminderescalationruleset
pagination_label: Reminderescalationruleset
sidebar_label: Reminderescalationruleset
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Reminderescalationruleset', 'v1Reminderescalationruleset']
slug: /tools/sdk/typescript/reminder_escalations/models/reminderescalationruleset
tags: ['SDK', 'Software Development Kit', 'Reminderescalationruleset', 'v1Reminderescalationruleset']
---

# Reminderescalationruleset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reminders** | **(optional)** `Array<Reminderescalationreminder>` | Independent reminder schedules. Every entry must use the same predicate, either `beforeDeadLine` or `activeAfter`. | [default to undefined]
**escalations** | **(optional)** `Array<Reminderescalationescalation>` | Independent escalations. Each entry has its own trigger. | [default to undefined]
**fallback** | **(optional)** `Reminderescalationfallback` |  | [default to undefined]

