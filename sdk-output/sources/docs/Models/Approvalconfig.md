---
id: v1-approvalconfig
title: Approvalconfig
pagination_label: Approvalconfig
sidebar_label: Approvalconfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Approvalconfig', 'v1Approvalconfig']
slug: /tools/sdk/typescript/sources/models/approvalconfig
tags: ['SDK', 'Software Development Kit', 'Approvalconfig', 'v1Approvalconfig']
---

# Approvalconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reminderConfig** | **(optional)** `ApprovalconfigReminderConfig` |  | [default to undefined]
**escalationConfig** | **(optional)** `ApprovalconfigEscalationConfig` |  | [default to undefined]
**timeoutConfig** | **(optional)** `ApprovalconfigTimeoutConfig` |  | [default to undefined]
**cronTimezone** | **(optional)** `ApprovalconfigCronTimezone` |  | [default to undefined]
**serialChain** | **(optional)** `Array<ApprovalconfigSerialChainInner>` | If the approval request has an approvalCriteria of SERIAL this chain will be used to determine the assignment order. | [default to undefined]
**requiresComment** | **(optional)** `string` | Determines whether a comment is required when approving or rejecting the approval request. | [default to undefined]
**fallbackApprover** | **(optional)** `ApprovalconfigFallbackApprover` |  | [default to undefined]
**machineIdentityManagerAssignment** | **(optional)** `string` | Specifies how to treat the identity type \"MANAGER_OF\" when the requestee is a machine identity. | [default to MachineIdentityManagerAssignmentEnum_ManagerOfRequester]
**circumventApprovalProcess** | **(optional)** `boolean` | When true, all approvals will be created with the status \"PASSED\". | [default to false]
**autoApprove** | **(optional)** `string` | OFF will prevent the approval request from being assigned to the requester or requestee by assigning it to their manager instead. DIRECT will cause approval requests to be auto-approved when assigned directly and only to the requester. INDIRECT will auto-approve when the requester appears anywhere in the list of approvers, including in a governance group. This field will only be effective if requestedTarget.reauthRequired is set to false, otherwise the approval will have to be manually approved. | [default to undefined]

