---
id: v1-approvalreminderandescalationconfig
title: Approvalreminderandescalationconfig
pagination_label: Approvalreminderandescalationconfig
sidebar_label: Approvalreminderandescalationconfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Approvalreminderandescalationconfig', 'v1Approvalreminderandescalationconfig']
slug: /tools/sdk/typescript/access_requests/models/approvalreminderandescalationconfig
tags: ['SDK', 'Software Development Kit', 'Approvalreminderandescalationconfig', 'v1Approvalreminderandescalationconfig']
---

# Approvalreminderandescalationconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daysUntilEscalation** | **(optional)** `number` | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [default to undefined]
**daysBetweenReminders** | **(optional)** `number` | Number of days to wait between reminder notifications. | [default to undefined]
**maxReminders** | **(optional)** `number` | Maximum number of reminder notifications to send to the reviewer before approval escalation. The maximum allowed value is 20. | [default to undefined]
**fallbackApproverRef** | **(optional)** `Identityreferencewithnameandemail` |  | [default to undefined]

