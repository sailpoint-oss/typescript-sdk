# IdentityProfileBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | System-generated unique ID of the Object | [optional] [readonly] [default to undefined]
**name** | **string** | Name of the Object | [default to undefined]
**created** | **string** | Creation date of the Object | [optional] [readonly] [default to undefined]
**modified** | **string** | Last modification date of the Object | [optional] [readonly] [default to undefined]
**description** | **string** | The description of the Identity Profile. | [optional] [default to undefined]
**owner** | [**IdentityProfileAllOfOwnerBeta**](IdentityProfileAllOfOwnerBeta.md) |  | [optional] [default to undefined]
**priority** | **number** | The priority for an Identity Profile. | [optional] [default to undefined]
**authoritativeSource** | [**IdentityProfileAllOfAuthoritativeSourceBeta**](IdentityProfileAllOfAuthoritativeSourceBeta.md) |  | [default to undefined]
**identityRefreshRequired** | **boolean** | True if a identity refresh is needed. Typically triggered when a change on the source has been made | [optional] [default to false]
**identityCount** | **number** | The number of identities that belong to the Identity Profile. | [optional] [default to undefined]
**identityAttributeConfig** | [**IdentityAttributeConfigBeta**](IdentityAttributeConfigBeta.md) |  | [optional] [default to undefined]
**identityExceptionReportReference** | [**IdentityExceptionReportReferenceBeta**](IdentityExceptionReportReferenceBeta.md) |  | [optional] [default to undefined]
**hasTimeBasedAttr** | **boolean** | Indicates the value of requiresPeriodicRefresh attribute for the Identity Profile. | [optional] [default to true]

