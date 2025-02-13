# ApprovalSchemeForRoleBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approverType** | **string** | Describes the individual or group that is responsible for an approval step. Values are as follows.  **OWNER**: Owner of the associated Role  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field | [optional] [default to undefined]
**approverId** | **string** | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP | [optional] [default to undefined]



## Enum: ApprovalSchemeForRoleBetaApproverTypeBeta


* `Owner` (value: `'OWNER'`)

* `Manager` (value: `'MANAGER'`)

* `GovernanceGroup` (value: `'GOVERNANCE_GROUP'`)



