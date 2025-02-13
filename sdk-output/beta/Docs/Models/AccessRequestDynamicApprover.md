# AccessRequestDynamicApproverBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestId** | **string** | The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/idn/api/beta/list-access-request-status) to get the status of the request.  | [default to undefined]
**requestedFor** | [**Array&lt;AccessItemRequestedForDtoBeta&gt;**](AccessItemRequestedForDtoBeta.md) | Identities access was requested for. | [default to undefined]
**requestedItems** | [**Array&lt;AccessRequestDynamicApproverRequestedItemsInnerBeta&gt;**](AccessRequestDynamicApproverRequestedItemsInnerBeta.md) | The access items that are being requested. | [default to undefined]
**requestedBy** | [**AccessItemRequesterDtoBeta**](AccessItemRequesterDtoBeta.md) |  | [default to undefined]

