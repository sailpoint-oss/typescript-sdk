# RoleMiningSessionDtoBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | [**RoleMiningSessionScopeBeta**](RoleMiningSessionScopeBeta.md) |  | [optional] [default to undefined]
**pruneThreshold** | **number** | The prune threshold to be used or null to calculate prescribedPruneThreshold | [optional] [default to undefined]
**prescribedPruneThreshold** | **number** | The calculated prescribedPruneThreshold | [optional] [default to undefined]
**minNumIdentitiesInPotentialRole** | **number** | Minimum number of identities in a potential role | [optional] [default to undefined]
**potentialRoleCount** | **number** | Number of potential roles | [optional] [default to undefined]
**potentialRolesReadyCount** | **number** | Number of potential roles ready | [optional] [default to undefined]
**type** | [**RoleMiningRoleTypeBeta**](RoleMiningRoleTypeBeta.md) |  | [optional] [default to undefined]
**emailRecipientId** | **string** | The id of the user who will receive an email about the role mining session | [optional] [default to undefined]
**identityCount** | **number** | Number of identities in the population which meet the search criteria or identity list provided | [optional] [default to undefined]
**saved** | **boolean** | The session\&#39;s saved status | [optional] [default to false]
**name** | **string** | The session\&#39;s saved name | [optional] [default to undefined]

