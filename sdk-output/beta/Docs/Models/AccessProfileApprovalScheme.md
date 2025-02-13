# AccessProfileApprovalSchemeBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approverType** | **string** | Describes the individual or group that is responsible for an approval step. Values are as follows. **APP_OWNER**: The owner of the Application  **OWNER**: Owner of the associated Access Profile or Role  **SOURCE_OWNER**: Owner of the Source associated with an Access Profile  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field | [optional] [default to undefined]
**approverId** | **string** | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP | [optional] [default to undefined]



## Enum: AccessProfileApprovalSchemeBetaApproverTypeBeta


* `AppOwner` (value: `'APP_OWNER'`)

* `Owner` (value: `'OWNER'`)

* `SourceOwner` (value: `'SOURCE_OWNER'`)

* `Manager` (value: `'MANAGER'`)

* `GovernanceGroup` (value: `'GOVERNANCE_GROUP'`)



