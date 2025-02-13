# CompletedApprovalBeta

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
**requestedFor** | [**RequestedItemStatusRequestedForBeta**](RequestedItemStatusRequestedForBeta.md) |  | [optional] [default to undefined]
**reviewedBy** | [**CompletedApprovalReviewedByBeta**](CompletedApprovalReviewedByBeta.md) |  | [optional] [default to undefined]
**owner** | [**AccessItemOwnerDtoBeta**](AccessItemOwnerDtoBeta.md) |  | [optional] [default to undefined]
**requestedObject** | [**RequestableObjectReferenceBeta**](RequestableObjectReferenceBeta.md) |  | [optional] [default to undefined]
**requesterComment** | [**CommentDto1Beta**](CommentDto1Beta.md) |  | [optional] [default to undefined]
**reviewerComment** | [**CommentDtoBeta**](CommentDtoBeta.md) | The approval\&#39;s reviewer\&#39;s comment. | [optional] [default to undefined]
**previousReviewersComments** | [**Array&lt;CommentDto1Beta&gt;**](CommentDto1Beta.md) | The history of the previous reviewers comments. | [optional] [default to undefined]
**forwardHistory** | [**Array&lt;ApprovalForwardHistoryBeta&gt;**](ApprovalForwardHistoryBeta.md) | The history of approval forward action. | [optional] [default to undefined]
**commentRequiredWhenRejected** | **boolean** | When true the rejector has to provide comments when rejecting | [optional] [default to false]
**state** | [**CompletedApprovalStateBeta**](CompletedApprovalStateBeta.md) |  | [optional] [default to undefined]
**removeDate** | **string** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] [default to undefined]
**removeDateUpdateRequested** | **boolean** | If true, then the request was to change the remove date or sunset date. | [optional] [default to false]
**currentRemoveDate** | **string** | The remove date or sunset date that was assigned at the time of the request. | [optional] [default to undefined]
**sodViolationContext** | [**SodViolationContextCheckCompleted1Beta**](SodViolationContextCheckCompleted1Beta.md) |  | [optional] [default to undefined]
**preApprovalTriggerResult** | [**CompletedApprovalPreApprovalTriggerResultBeta**](CompletedApprovalPreApprovalTriggerResultBeta.md) |  | [optional] [default to undefined]
**clientMetadata** | **{ [key: string]: string; }** | Arbitrary key-value pairs provided during the request. | [optional] [default to undefined]

