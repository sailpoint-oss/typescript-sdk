---
id: v1-approval-config-reminder-config
title: ApprovalConfigReminderConfig
pagination_label: ApprovalConfigReminderConfig
sidebar_label: ApprovalConfigReminderConfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApprovalConfigReminderConfig', 'v1ApprovalConfigReminderConfig']
slug: /tools/sdk/typescript/approvals/models/approval-config-reminder-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigReminderConfig', 'v1ApprovalConfigReminderConfig']
---

# ApprovalConfigReminderConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Indicates if reminders are enabled. | [default to false]
**daysUntilFirstReminder** | **(optional)** `number` | Number of days until the first reminder. | [default to undefined]
**reminderCronSchedule** | **(optional)** `string` | Cron schedule for reminders. | [default to undefined]
**maxReminders** | **(optional)** `number` | Maximum number of reminders. Max is 20. | [default to undefined]

