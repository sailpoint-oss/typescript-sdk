# EntitlementApprovalSchemeBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approverType** | **string** | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field | [optional] [default to undefined]
**approverId** | **string** | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP | [optional] [default to undefined]



## Enum: EntitlementApprovalSchemeBetaApproverTypeBeta


* `EntitlementOwner` (value: `'ENTITLEMENT_OWNER'`)

* `SourceOwner` (value: `'SOURCE_OWNER'`)

* `Manager` (value: `'MANAGER'`)

* `GovernanceGroup` (value: `'GOVERNANCE_GROUP'`)



