# RoleMiningPotentialRoleSummaryBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Id of the potential role | [optional] [default to undefined]
**name** | **string** | Name of the potential role | [optional] [default to undefined]
**potentialRoleRef** | [**RoleMiningPotentialRoleRefBeta**](RoleMiningPotentialRoleRefBeta.md) |  | [optional] [default to undefined]
**identityCount** | **number** | The number of identities in a potential role. | [optional] [default to undefined]
**entitlementCount** | **number** | The number of entitlements in a potential role. | [optional] [default to undefined]
**identityGroupStatus** | **string** | The status for this identity group which can be \&quot;REQUESTED\&quot; or \&quot;OBTAINED\&quot; | [optional] [default to undefined]
**provisionState** | [**RoleMiningPotentialRoleProvisionStateBeta**](RoleMiningPotentialRoleProvisionStateBeta.md) |  | [optional] [default to undefined]
**roleId** | **string** | ID of the provisioned role in IIQ or IDN.  Null if this potential role has not been provisioned. | [optional] [default to undefined]
**density** | **number** | The density metric (0-100) of this potential role. Higher density values indicate higher similarity amongst the identities. | [optional] [default to undefined]
**freshness** | **number** | The freshness metric (0-100) of this potential role. Higher freshness values indicate this potential role is more distinctive compared to existing roles. | [optional] [default to undefined]
**quality** | **number** | The quality metric (0-100) of this potential role. Higher quality values indicate this potential role has high density and freshness. | [optional] [default to undefined]
**type** | [**RoleMiningRoleTypeBeta**](RoleMiningRoleTypeBeta.md) |  | [optional] [default to undefined]
**createdBy** | [**RoleMiningPotentialRoleSummaryCreatedByBeta**](RoleMiningPotentialRoleSummaryCreatedByBeta.md) |  | [optional] [default to undefined]
**createdDate** | **string** | The date-time when this potential role was created. | [optional] [default to undefined]
**saved** | **boolean** | The potential role\&#39;s saved status | [optional] [default to false]
**description** | **string** | Description of the potential role | [optional] [default to undefined]
**session** | [**RoleMiningSessionParametersDtoBeta**](RoleMiningSessionParametersDtoBeta.md) |  | [optional] [default to undefined]

