---
id: v1-approval-config-escalation-config
title: ApprovalConfigEscalationConfig
pagination_label: ApprovalConfigEscalationConfig
sidebar_label: ApprovalConfigEscalationConfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApprovalConfigEscalationConfig', 'v1ApprovalConfigEscalationConfig']
slug: /tools/sdk/typescript/approvals/models/approval-config-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigEscalationConfig', 'v1ApprovalConfigEscalationConfig']
---

# ApprovalConfigEscalationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Indicates if escalations are enabled. | [default to false]
**daysUntilFirstEscalation** | **(optional)** `number` | Number of days until the first escalation. | [default to undefined]
**escalationCronSchedule** | **(optional)** `string` | Cron schedule for escalations. | [default to undefined]
**escalationChain** | **(optional)** `Array<ApprovalConfigEscalationConfigEscalationChainInner>` | Escalation chain configuration. | [default to undefined]

