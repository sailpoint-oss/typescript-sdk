# RoleMiningSessionResponseBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | [**RoleMiningSessionScopeBeta**](RoleMiningSessionScopeBeta.md) |  | [optional] [default to undefined]
**minNumIdentitiesInPotentialRole** | **number** | Minimum number of identities in a potential role | [optional] [default to undefined]
**scopingMethod** | **string** | The scoping method of the role mining session | [optional] [default to undefined]
**prescribedPruneThreshold** | **number** | The computed (or prescribed) prune threshold for this session | [optional] [default to undefined]
**pruneThreshold** | **number** | The prune threshold to be used for this role mining session | [optional] [default to undefined]
**potentialRoleCount** | **number** | The number of potential roles | [optional] [default to undefined]
**potentialRolesReadyCount** | **number** | The number of potential roles which have completed processing | [optional] [default to undefined]
**status** | [**RoleMiningSessionStatusBeta**](RoleMiningSessionStatusBeta.md) |  | [optional] [default to undefined]
**emailRecipientId** | **string** | The id of the user who will receive an email about the role mining session | [optional] [default to undefined]
**createdBy** | [**RoleMiningSessionResponseCreatedByBeta**](RoleMiningSessionResponseCreatedByBeta.md) |  | [optional] [default to undefined]
**identityCount** | **number** | The number of identities | [optional] [default to undefined]
**saved** | **boolean** | The session\&#39;s saved status | [optional] [default to false]
**name** | **string** | The session\&#39;s saved name | [optional] [default to undefined]
**dataFilePath** | **string** | The data file path of the role mining session | [optional] [default to undefined]
**id** | **string** | Session Id for this role mining session | [optional] [default to undefined]
**createdDate** | **string** | The date-time when this role mining session was created. | [optional] [default to undefined]
**modifiedDate** | **string** | The date-time when this role mining session was completed. | [optional] [default to undefined]
**type** | [**RoleMiningRoleTypeBeta**](RoleMiningRoleTypeBeta.md) |  | [optional] [default to undefined]

