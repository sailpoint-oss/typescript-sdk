---
id: v1-approval-reminder-and-escalation-config
title: ApprovalReminderAndEscalationConfig
pagination_label: ApprovalReminderAndEscalationConfig
sidebar_label: ApprovalReminderAndEscalationConfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApprovalReminderAndEscalationConfig', 'v1ApprovalReminderAndEscalationConfig']
slug: /tools/sdk/typescript/access_requests/models/approval-reminder-and-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalReminderAndEscalationConfig', 'v1ApprovalReminderAndEscalationConfig']
---

# ApprovalReminderAndEscalationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daysUntilEscalation** | **(optional)** `number` | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [default to undefined]
**daysBetweenReminders** | **(optional)** `number` | Number of days to wait between reminder notifications. | [default to undefined]
**maxReminders** | **(optional)** `number` | Maximum number of reminder notifications to send to the reviewer before approval escalation. The maximum allowed value is 20. | [default to undefined]
**fallbackApproverRef** | **(optional)** `IdentityReferenceWithNameAndEmail` |  | [default to undefined]

