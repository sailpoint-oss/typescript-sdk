# EntitlementAccessRequestConfigBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalSchemes** | [**Array&lt;EntitlementApprovalSchemeBeta&gt;**](EntitlementApprovalSchemeBeta.md) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] [default to undefined]
**requestCommentRequired** | **boolean** | If the requester must provide a comment during access request. | [optional] [default to false]
**denialCommentRequired** | **boolean** | If the reviewer must provide a comment when denying the access request. | [optional] [default to false]

