---
id: v1-pendingapproval
title: Pendingapproval
pagination_label: Pendingapproval
sidebar_label: Pendingapproval
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Pendingapproval', 'v1Pendingapproval']
slug: /tools/sdk/typescript/access_request_approvals/models/pendingapproval
tags: ['SDK', 'Software Development Kit', 'Pendingapproval', 'v1Pendingapproval']
---

# Pendingapproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The approval id. | [default to undefined]
**accessRequestId** | **(optional)** `string` | This is the access request id. | [default to undefined]
**name** | **(optional)** `string` | The name of the approval. | [default to undefined]
**created** | **(optional)** `string` | When the approval was created. | [default to undefined]
**modified** | **(optional)** `string` | When the approval was modified last time. | [default to undefined]
**requestCreated** | **(optional)** `string` | When the access-request was created. | [default to undefined]
**requestType** | **(optional)** `Accessrequesttype` |  | [default to undefined]
**requester** | **(optional)** `Accessitemrequester` |  | [default to undefined]
**requestedFor** | **(optional)** `Accessitemrequestedfor` |  | [default to undefined]
**owner** | **(optional)** `PendingapprovalOwner` |  | [default to undefined]
**requestedObject** | **(optional)** `Requestableobjectreference` |  | [default to undefined]
**requesterComment** | **(optional)** `Commentdto` |  | [default to undefined]
**previousReviewersComments** | **(optional)** `Array<Commentdto>` | The history of the previous reviewers comments. | [default to undefined]
**forwardHistory** | **(optional)** `Array<Approvalforwardhistory>` | The history of approval forward action. | [default to undefined]
**commentRequiredWhenRejected** | **(optional)** `boolean` | When true the rejector has to provide comments when rejecting | [default to false]
**actionInProcess** | **(optional)** `Pendingapprovalaction` |  | [default to undefined]
**removeDate** | **(optional)** `string` | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [default to undefined]
**removeDateUpdateRequested** | **(optional)** `boolean` | If true, then the request is to change the remove date or sunset date. | [default to false]
**currentRemoveDate** | **(optional)** `string` | The remove date or sunset date that was assigned at the time of the request. | [default to undefined]
**startDate** | **(optional)** `string` | The date the role or access profile or entitlement is/will assigned to the specified identity. | [default to undefined]
**startUpdateRequested** | **(optional)** `boolean` | If true, then the request is to change the start date or sunrise date. | [default to false]
**currentStartDate** | **(optional)** `string` | The start date or sunrise date that was assigned at the time of the request. | [default to undefined]
**sodViolationContext** | **(optional)** `Sodviolationcontextcheckcompleted` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs, if any were included in the corresponding access request item | [default to undefined]
**requestedAccounts** | **(optional)** `Array<Requestedaccountref>` | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The privilege level of the requested access item, if applicable. | [default to undefined]
**maxPermittedAccessDuration** | **(optional)** `PendingapprovalMaxPermittedAccessDuration` |  | [default to undefined]
**jitDetails** | **(optional)** `Array<Entitlementstatesnapshotjitdetail>` | JIT (Just-In-Time) details for the requested access item, if applicable. | [default to undefined]

