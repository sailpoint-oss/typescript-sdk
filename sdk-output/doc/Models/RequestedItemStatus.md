# RequestedItemStatusBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Human-readable display name of the item being requested. | [optional] [default to undefined]
**type** | **string** | Type of requested object. | [optional] [default to undefined]
**cancelledRequestDetails** | [**RequestedItemStatusCancelledRequestDetailsBeta**](RequestedItemStatusCancelledRequestDetailsBeta.md) |  | [optional] [default to undefined]
**errorMessages** | **Array&lt;Array&lt;ErrorMessageDtoBeta&gt;&gt;** | List of list of localized error messages, if any, encountered during the approval/provisioning process. | [optional] [default to undefined]
**state** | [**RequestedItemStatusRequestStateBeta**](RequestedItemStatusRequestStateBeta.md) |  | [optional] [default to undefined]
**approvalDetails** | [**Array&lt;ApprovalStatusDtoBeta&gt;**](ApprovalStatusDtoBeta.md) | Approval details for each item. | [optional] [default to undefined]
**approvalIds** | **Array&lt;string&gt;** | List of approval IDs associated with the request. | [optional] [default to undefined]
**manualWorkItemDetails** | [**Array&lt;ManualWorkItemDetailsBeta&gt;**](ManualWorkItemDetailsBeta.md) | Manual work items created for provisioning the item. | [optional] [default to undefined]
**accountActivityItemId** | **string** | Id of associated account activity item. | [optional] [default to undefined]
**requestType** | [**AccessRequestTypeBeta**](AccessRequestTypeBeta.md) |  | [optional] [default to undefined]
**modified** | **string** | When the request was last modified. | [optional] [default to undefined]
**created** | **string** | When the request was created. | [optional] [default to undefined]
**requester** | [**AccessItemRequesterBeta**](AccessItemRequesterBeta.md) |  | [optional] [default to undefined]
**requestedFor** | [**RequestedItemStatusRequestedForBeta**](RequestedItemStatusRequestedForBeta.md) |  | [optional] [default to undefined]
**requesterComment** | [**RequestedItemStatusRequesterCommentBeta**](RequestedItemStatusRequesterCommentBeta.md) |  | [optional] [default to undefined]
**sodViolationContext** | [**RequestedItemStatusSodViolationContextBeta**](RequestedItemStatusSodViolationContextBeta.md) |  | [optional] [default to undefined]
**provisioningDetails** | [**RequestedItemStatusProvisioningDetailsBeta**](RequestedItemStatusProvisioningDetailsBeta.md) |  | [optional] [default to undefined]
**preApprovalTriggerDetails** | [**RequestedItemStatusPreApprovalTriggerDetailsBeta**](RequestedItemStatusPreApprovalTriggerDetailsBeta.md) |  | [optional] [default to undefined]
**accessRequestPhases** | [**Array&lt;AccessRequestPhasesBeta&gt;**](AccessRequestPhasesBeta.md) | A list of Phases that the Access Request has gone through in order, to help determine the status of the request. | [optional] [default to undefined]
**description** | **string** | Description associated to the requested object. | [optional] [default to undefined]
**removeDate** | **string** | When the role access is scheduled for removal. | [optional] [default to undefined]
**cancelable** | **boolean** | True if the request can be canceled. | [optional] [default to false]
**accessRequestId** | **string** | This is the account activity id. | [optional] [default to undefined]
**clientMetadata** | **{ [key: string]: string; }** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] [default to undefined]



## Enum: RequestedItemStatusBetaTypeBeta


* `AccessProfile` (value: `'ACCESS_PROFILE'`)

* `Role` (value: `'ROLE'`)

* `Entitlement` (value: `'ENTITLEMENT'`)



