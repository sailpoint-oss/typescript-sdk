# AccessRequestDynamicApproverRequestedItemsInnerBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique ID of the access item. | [default to undefined]
**name** | **string** | Human friendly name of the access item. | [default to undefined]
**description** | **string** | Extended description of the access item. | [optional] [default to undefined]
**type** | **object** | The type of access item being requested. | [default to undefined]
**operation** | **object** | Grant or revoke the access item | [default to undefined]
**comment** | **string** | A comment from the requestor on why the access is needed. | [optional] [default to undefined]



## Enum: AccessRequestDynamicApproverRequestedItemsInnerBetaTypeBeta


* `AccessProfile` (value: `'ACCESS_PROFILE'`)

* `Role` (value: `'ROLE'`)

* `Entitlement` (value: `'ENTITLEMENT'`)





## Enum: AccessRequestDynamicApproverRequestedItemsInnerBetaOperationBeta


* `Add` (value: `'Add'`)

* `Remove` (value: `'Remove'`)



