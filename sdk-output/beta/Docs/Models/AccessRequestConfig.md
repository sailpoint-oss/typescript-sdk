# AccessRequestConfigBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalsMustBeExternal** | **boolean** | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn\&#39;t an org admin. | [optional] [default to false]
**autoApprovalEnabled** | **boolean** | If this is true and the requester and reviewer are the same, the request is automatically approved. | [optional] [default to false]
**reauthorizationEnabled** | **boolean** | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [optional] [default to false]
**requestOnBehalfOfConfig** | [**RequestOnBehalfOfConfigBeta**](RequestOnBehalfOfConfigBeta.md) |  | [optional] [default to undefined]
**approvalReminderAndEscalationConfig** | [**ApprovalReminderAndEscalationConfigBeta**](ApprovalReminderAndEscalationConfigBeta.md) |  | [optional] [default to undefined]
**entitlementRequestConfig** | [**EntitlementRequestConfig1Beta**](EntitlementRequestConfig1Beta.md) |  | [optional] [default to undefined]

