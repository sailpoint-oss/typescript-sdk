# RoleBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The id of the Role. This field must be left null when creating an Role, otherwise a 400 Bad Request error will result. | [optional] [default to undefined]
**name** | **string** | The human-readable display name of the Role | [default to undefined]
**created** | **string** | Date the Role was created | [optional] [readonly] [default to undefined]
**modified** | **string** | Date the Role was last modified. | [optional] [readonly] [default to undefined]
**description** | **string** | A human-readable description of the Role | [optional] [default to undefined]
**owner** | [**OwnerReferenceBeta**](OwnerReferenceBeta.md) |  | [default to undefined]
**accessProfiles** | [**Array&lt;AccessProfileRefBeta&gt;**](AccessProfileRefBeta.md) |  | [optional] [default to undefined]
**entitlements** | [**Array&lt;EntitlementRefBeta&gt;**](EntitlementRefBeta.md) |  | [optional] [default to undefined]
**membership** | [**RoleMembershipSelectorBeta**](RoleMembershipSelectorBeta.md) |  | [optional] [default to undefined]
**legacyMembershipInfo** | **{ [key: string]: any; }** | This field is not directly modifiable and is generally expected to be *null*. In very rare instances, some Roles may have been created using membership selection criteria that are no longer fully supported. While these Roles will still work, they should be migrated to STANDARD or IDENTITY_LIST selection criteria. This field exists for informational purposes as an aid to such migration. | [optional] [default to undefined]
**enabled** | **boolean** | Whether the Role is enabled or not. | [optional] [default to false]
**requestable** | **boolean** | Whether the Role can be the target of access requests. | [optional] [default to false]
**accessRequestConfig** | [**RequestabilityForRoleBeta**](RequestabilityForRoleBeta.md) |  | [optional] [default to undefined]
**revocationRequestConfig** | [**RevocabilityForRoleBeta**](RevocabilityForRoleBeta.md) |  | [optional] [default to undefined]
**segments** | **Array&lt;string&gt;** | List of IDs of segments, if any, to which this Role is assigned. | [optional] [default to undefined]
**dimensional** | **boolean** | Whether the Role is dimensional. | [optional] [default to false]
**dimensionRefs** | [**Array&lt;DimensionRefBeta&gt;**](DimensionRefBeta.md) | List of references to dimensions to which this Role is assigned. This field is only relevant if the Role is dimensional. | [optional] [default to undefined]
**accessModelMetadata** | [**AttributeDTOListBeta**](AttributeDTOListBeta.md) |  | [optional] [default to undefined]

