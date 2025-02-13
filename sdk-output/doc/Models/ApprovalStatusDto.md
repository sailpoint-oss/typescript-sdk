# ApprovalStatusDtoBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalId** | **string** | Unique identifier for the approval. | [optional] [default to undefined]
**forwarded** | **boolean** | True if the request for this item was forwarded from one owner to another. | [optional] [default to false]
**originalOwner** | [**ApprovalStatusDtoOriginalOwnerBeta**](ApprovalStatusDtoOriginalOwnerBeta.md) |  | [optional] [default to undefined]
**currentOwner** | [**ApprovalStatusDtoCurrentOwnerBeta**](ApprovalStatusDtoCurrentOwnerBeta.md) |  | [optional] [default to undefined]
**modified** | **string** | Time at which item was modified. | [optional] [default to undefined]
**status** | [**ManualWorkItemStateBeta**](ManualWorkItemStateBeta.md) |  | [optional] [default to undefined]
**scheme** | [**ApprovalSchemeBeta**](ApprovalSchemeBeta.md) |  | [optional] [default to undefined]
**errorMessages** | [**Array&lt;ErrorMessageDtoBeta&gt;**](ErrorMessageDtoBeta.md) | If the request failed, includes any error messages that were generated. | [optional] [default to undefined]
**comment** | **string** | Comment, if any, provided by the approver. | [optional] [default to undefined]
**removeDate** | **string** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] [default to undefined]

