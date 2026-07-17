---
id: v1-approval-status-dto
title: ApprovalStatusDto
pagination_label: ApprovalStatusDto
sidebar_label: ApprovalStatusDto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApprovalStatusDto', 'v1ApprovalStatusDto']
slug: /tools/sdk/typescript/access_requests/models/approval-status-dto
tags: ['SDK', 'Software Development Kit', 'ApprovalStatusDto', 'v1ApprovalStatusDto']
---

# ApprovalStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **(optional)** `boolean` | True if the request for this item was forwarded from one owner to another. | [default to false]
**originalOwner** | **(optional)** `ApprovalStatusDtoOriginalOwner` |  | [default to undefined]
**currentOwner** | **(optional)** `ApprovalStatusDtoCurrentOwner` |  | [default to undefined]
**modified** | **(optional)** `string` | Time at which item was modified. | [default to undefined]
**status** | **(optional)** `ManualWorkItemState` |  | [default to undefined]
**scheme** | **(optional)** `ApprovalScheme` |  | [default to undefined]
**errorMessages** | **(optional)** `Array<ErrorMessageDto>` | If the request failed, includes any error messages that were generated. | [default to undefined]
**comment** | **(optional)** `string` | Comment, if any, provided by the approver. | [default to undefined]
**removeDate** | **(optional)** `string` | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [default to undefined]

