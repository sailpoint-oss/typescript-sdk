---
id: v1-access-request-dynamic-approver
title: AccessRequestDynamicApprover
pagination_label: AccessRequestDynamicApprover
sidebar_label: AccessRequestDynamicApprover
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessRequestDynamicApprover', 'v1AccessRequestDynamicApprover']
slug: /tools/sdk/typescript/triggers/models/access-request-dynamic-approver
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApprover', 'v1AccessRequestDynamicApprover']
---

# AccessRequestDynamicApprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestId** | `string` | The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/idn/api/beta/list-access-request-status) to get the status of the request.  | [default to undefined]
**requestedFor** | `Array<AccessItemRequestedForDto>` | Identities access was requested for. | [default to undefined]
**requestedItems** | `Array<AccessRequestDynamicApproverRequestedItemsInner>` | The access items that are being requested. | [default to undefined]
**requestedBy** | `AccessItemRequesterDto` |  | [default to undefined]

