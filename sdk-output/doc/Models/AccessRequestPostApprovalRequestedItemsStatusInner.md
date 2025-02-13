# AccessRequestPostApprovalRequestedItemsStatusInnerBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique ID of the access item being requested. | [default to undefined]
**name** | **string** | The human friendly name of the access item. | [default to undefined]
**description** | **string** | Detailed description of the access item. | [optional] [default to undefined]
**type** | **object** | The type of access item. | [default to undefined]
**operation** | **object** | The action to perform on the access item. | [default to undefined]
**comment** | **string** | A comment from the identity requesting the access. | [optional] [default to undefined]
**clientMetadata** | **{ [key: string]: any; }** | Additional customer defined metadata about the access item. | [optional] [default to undefined]
**approvalInfo** | [**Array&lt;AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerBeta&gt;**](AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerBeta.md) | A list of one or more approvers for the access request. | [default to undefined]



## Enum: AccessRequestPostApprovalRequestedItemsStatusInnerBetaTypeBeta


* `AccessProfile` (value: `'ACCESS_PROFILE'`)

* `Role` (value: `'ROLE'`)

* `Entitlement` (value: `'ENTITLEMENT'`)





## Enum: AccessRequestPostApprovalRequestedItemsStatusInnerBetaOperationBeta


* `Add` (value: `'Add'`)

* `Remove` (value: `'Remove'`)



