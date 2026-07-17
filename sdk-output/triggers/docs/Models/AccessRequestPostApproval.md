---
id: v1-access-request-post-approval
title: AccessRequestPostApproval
pagination_label: AccessRequestPostApproval
sidebar_label: AccessRequestPostApproval
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessRequestPostApproval', 'v1AccessRequestPostApproval']
slug: /tools/sdk/typescript/triggers/models/access-request-post-approval
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApproval', 'v1AccessRequestPostApproval']
---

# AccessRequestPostApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestId** | `string` | The unique ID of the access request. | [default to undefined]
**requestedFor** | `Array<AccessItemRequestedForDto>` | Identities access was requested for. | [default to undefined]
**requestedItemsStatus** | `Array<AccessRequestPostApprovalRequestedItemsStatusInner>` | Details on the outcome of each access item. | [default to undefined]
**requestedBy** | `AccessItemRequesterDto` |  | [default to undefined]

