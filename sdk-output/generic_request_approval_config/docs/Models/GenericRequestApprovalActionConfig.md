---
id: v1-generic-request-approval-action-config
title: GenericRequestApprovalActionConfig
pagination_label: GenericRequestApprovalActionConfig
sidebar_label: GenericRequestApprovalActionConfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'GenericRequestApprovalActionConfig', 'v1GenericRequestApprovalActionConfig']
slug: /tools/sdk/typescript/generic_request_approval_config/models/generic-request-approval-action-config
tags: ['SDK', 'Software Development Kit', 'GenericRequestApprovalActionConfig', 'v1GenericRequestApprovalActionConfig']
---

# GenericRequestApprovalActionConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheme** | **(optional)** `string` | How the request is approved. Omitted when the action inherits the organization-level configuration. | [default to undefined]
**approvers** | **(optional)** `string` | APPROVAL scheme only. A comma-separated list of approver tokens: `sourceOwner`, `manager`, `machineIdentityPrimaryOwner`, `machineIdentitySecondaryOwners`, `machineIdentityAllOwners`, `workgroup:{governanceGroupId}`, and `identity:{identityId}`. `accountOwner` is also allowed for the SUBTYPE DELETE action. | [default to undefined]
**comments** | **(optional)** `string` | APPROVAL scheme only. When approvers must comment: on both decisions (ALL), on approval only (APPROVAL), on rejection only (REJECTION), or never (OFF). | [default to undefined]
**workflowId** | **(optional)** `string` | WORKFLOW scheme only. The ID of the workflow that approves the request. | [default to undefined]

