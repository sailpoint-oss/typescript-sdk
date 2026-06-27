---
id: v1-accessrequestpostapproval-requested-items-status-inner
title: AccessrequestpostapprovalRequestedItemsStatusInner
pagination_label: AccessrequestpostapprovalRequestedItemsStatusInner
sidebar_label: AccessrequestpostapprovalRequestedItemsStatusInner
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessrequestpostapprovalRequestedItemsStatusInner', 'v1AccessrequestpostapprovalRequestedItemsStatusInner']
slug: /tools/sdk/typescript/triggers/models/accessrequestpostapproval-requested-items-status-inner
tags: ['SDK', 'Software Development Kit', 'AccessrequestpostapprovalRequestedItemsStatusInner', 'v1AccessrequestpostapprovalRequestedItemsStatusInner']
---

# AccessrequestpostapprovalRequestedItemsStatusInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique ID of the access item being requested. | [default to undefined]
**name** | `string` | The human friendly name of the access item. | [default to undefined]
**description** | **(optional)** `string` | Detailed description of the access item. | [default to undefined]
**type** | `string` | The type of access item. | [default to undefined]
**operation** | `string` | The action to perform on the access item. | [default to undefined]
**comment** | **(optional)** `string` | A comment from the identity requesting the access. | [default to undefined]
**clientMetadata** | **(optional)**  | Additional customer defined metadata about the access item. | [default to undefined]
**approvalInfo** | `Array<AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner>` | A list of one or more approvers for the access request. | [default to undefined]

