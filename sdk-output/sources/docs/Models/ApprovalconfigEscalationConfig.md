---
id: v1-approvalconfig-escalation-config
title: ApprovalconfigEscalationConfig
pagination_label: ApprovalconfigEscalationConfig
sidebar_label: ApprovalconfigEscalationConfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApprovalconfigEscalationConfig', 'v1ApprovalconfigEscalationConfig']
slug: /tools/sdk/typescript/sources/models/approvalconfig-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigEscalationConfig', 'v1ApprovalconfigEscalationConfig']
---

# ApprovalconfigEscalationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Indicates if escalations are enabled. | [default to false]
**daysUntilFirstEscalation** | **(optional)** `number` | Number of days until the first escalation. | [default to undefined]
**escalationCronSchedule** | **(optional)** `string` | Cron schedule for escalations. | [default to undefined]
**escalationChain** | **(optional)** `Array<ApprovalconfigEscalationConfigEscalationChainInner>` | Escalation chain configuration. | [default to undefined]

