# PendingApprovalBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The approval id. | [optional] [default to undefined]
**name** | **string** | The name of the approval. | [optional] [default to undefined]
**created** | **string** | When the approval was created. | [optional] [default to undefined]
**modified** | **string** | When the approval was modified last time. | [optional] [default to undefined]
**requestCreated** | **string** | When the access-request was created. | [optional] [default to undefined]
**requestType** | [**AccessRequestTypeBeta**](AccessRequestTypeBeta.md) |  | [optional] [default to undefined]
**requester** | [**AccessItemRequesterDtoBeta**](AccessItemRequesterDtoBeta.md) |  | [optional] [default to undefined]
**requestedFor** | [**Array&lt;AccessItemRequestedForDtoBeta&gt;**](AccessItemRequestedForDtoBeta.md) | Identities access was requested for. | [optional] [default to undefined]
**owner** | [**AccessItemOwnerDtoBeta**](AccessItemOwnerDtoBeta.md) |  | [optional] [default to undefined]
**requestedObject** | [**RequestableObjectReferenceBeta**](RequestableObjectReferenceBeta.md) |  | [optional] [default to undefined]
**requesterComment** | [**CommentDto1Beta**](CommentDto1Beta.md) |  | [optional] [default to undefined]
**previousReviewersComments** | [**Array&lt;CommentDto1Beta&gt;**](CommentDto1Beta.md) | The history of the previous reviewers comments. | [optional] [default to undefined]
**forwardHistory** | [**Array&lt;ApprovalForwardHistoryBeta&gt;**](ApprovalForwardHistoryBeta.md) | The history of approval forward action. | [optional] [default to undefined]
**commentRequiredWhenRejected** | **boolean** | When true the rejector has to provide comments when rejecting | [optional] [default to false]
**actionInProcess** | [**PendingApprovalActionBeta**](PendingApprovalActionBeta.md) |  | [optional] [default to undefined]
**removeDate** | **string** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] [default to undefined]
**removeDateUpdateRequested** | **boolean** | If true, then the request is to change the remove date or sunset date. | [optional] [default to false]
**currentRemoveDate** | **string** | The remove date or sunset date that was assigned at the time of the request. | [optional] [default to undefined]
**sodViolationContext** | [**SodViolationContextCheckCompleted1Beta**](SodViolationContextCheckCompleted1Beta.md) |  | [optional] [default to undefined]

