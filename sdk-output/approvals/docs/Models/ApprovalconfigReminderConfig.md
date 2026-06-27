---
id: v1-approvalconfig-reminder-config
title: ApprovalconfigReminderConfig
pagination_label: ApprovalconfigReminderConfig
sidebar_label: ApprovalconfigReminderConfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApprovalconfigReminderConfig', 'v1ApprovalconfigReminderConfig']
slug: /tools/sdk/typescript/approvals/models/approvalconfig-reminder-config
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigReminderConfig', 'v1ApprovalconfigReminderConfig']
---

# ApprovalconfigReminderConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Indicates if reminders are enabled. | [default to false]
**daysUntilFirstReminder** | **(optional)** `number` | Number of days until the first reminder. | [default to undefined]
**reminderCronSchedule** | **(optional)** `string` | Cron schedule for reminders. | [default to undefined]
**maxReminders** | **(optional)** `number` | Maximum number of reminders. Max is 20. | [default to undefined]

