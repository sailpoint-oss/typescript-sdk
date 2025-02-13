# ApprovalBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalId** | **string** | The Approval ID | [optional] [default to undefined]
**approvers** | [**Array&lt;ApprovalIdentityBeta&gt;**](ApprovalIdentityBeta.md) | Object representation of an approver of an approval | [optional] [default to undefined]
**createdDate** | **string** | Date the approval was created | [optional] [default to undefined]
**type** | **string** | Type of approval | [optional] [default to undefined]
**name** | [**Array&lt;ApprovalNameBeta&gt;**](ApprovalNameBeta.md) | The name of the approval for a given locale | [optional] [default to undefined]
**batchRequest** | [**ApprovalBatchBeta**](.md) | The name of the approval for a given locale | [optional] [default to undefined]
**description** | [**Array&lt;ApprovalDescriptionBeta&gt;**](ApprovalDescriptionBeta.md) | The description of the approval for a given locale | [optional] [default to undefined]
**priority** | **string** | The priority of the approval | [optional] [default to undefined]
**requester** | [**ApprovalIdentityBeta**](.md) | Object representation of the requester of the approval | [optional] [default to undefined]
**comments** | [**Array&lt;ApprovalCommentBeta&gt;**](ApprovalCommentBeta.md) | Object representation of a comment on the approval | [optional] [default to undefined]
**approvedBy** | [**Array&lt;ApprovalIdentityBeta&gt;**](ApprovalIdentityBeta.md) | Array of approvers who have approved the approval | [optional] [default to undefined]
**rejectedBy** | [**Array&lt;ApprovalIdentityBeta&gt;**](ApprovalIdentityBeta.md) | Array of approvers who have rejected the approval | [optional] [default to undefined]
**completedDate** | **string** | Date the approval was completed | [optional] [default to undefined]
**approvalCriteria** | **string** | Criteria that needs to be met for an approval to be marked as approved | [optional] [default to undefined]
**status** | **string** | The current status of the approval | [optional] [default to undefined]
**additionalAttributes** | **string** | Json string representing additional attributes known about the object to be approved. | [optional] [default to undefined]
**referenceData** | [**Array&lt;ApprovalReferenceBeta&gt;**](ApprovalReferenceBeta.md) | Reference data related to the approval | [optional] [default to undefined]



## Enum: ApprovalBetaPriorityBeta


* `High` (value: `'HIGH'`)

* `Medium` (value: `'MEDIUM'`)

* `Low` (value: `'LOW'`)





## Enum: ApprovalBetaApprovalCriteriaBeta


* `Single` (value: `'SINGLE'`)

* `Double` (value: `'DOUBLE'`)

* `Triple` (value: `'TRIPLE'`)

* `Quarter` (value: `'QUARTER'`)

* `Half` (value: `'HALF'`)

* `All` (value: `'ALL'`)





## Enum: ApprovalBetaStatusBeta


* `Pending` (value: `'PENDING'`)

* `Approved` (value: `'APPROVED'`)

* `Rejected` (value: `'REJECTED'`)



