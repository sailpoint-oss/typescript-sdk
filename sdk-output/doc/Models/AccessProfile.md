# AccessProfileBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the Access Profile | [optional] [readonly] [default to undefined]
**name** | **string** | Name of the Access Profile | [default to undefined]
**description** | **string** | Information about the Access Profile | [optional] [default to undefined]
**created** | **string** | Date the Access Profile was created | [optional] [readonly] [default to undefined]
**modified** | **string** | Date the Access Profile was last modified. | [optional] [readonly] [default to undefined]
**enabled** | **boolean** | Whether the Access Profile is enabled. If the Access Profile is enabled then you must include at least one Entitlement. | [optional] [default to true]
**owner** | [**OwnerReferenceBeta**](OwnerReferenceBeta.md) |  | [default to undefined]
**source** | [**AccessProfileSourceRefBeta**](AccessProfileSourceRefBeta.md) |  | [default to undefined]
**entitlements** | [**Array&lt;EntitlementRefBeta&gt;**](EntitlementRefBeta.md) | A list of entitlements associated with the Access Profile. If enabled is false this is allowed to be empty otherwise it needs to contain at least one Entitlement. | [optional] [default to undefined]
**requestable** | **boolean** | Whether the Access Profile is requestable via access request. Currently, making an Access Profile non-requestable is only supported  for customers enabled with the new Request Center. Otherwise, attempting to create an Access Profile with a value  **false** in this field results in a 400 error. | [optional] [default to true]
**accessRequestConfig** | [**RequestabilityBeta**](RequestabilityBeta.md) |  | [optional] [default to undefined]
**revocationRequestConfig** | [**RevocabilityBeta**](RevocabilityBeta.md) |  | [optional] [default to undefined]
**segments** | **Array&lt;string&gt;** | List of IDs of segments, if any, to which this Access Profile is assigned. | [optional] [default to undefined]
**provisioningCriteria** | [**ProvisioningCriteriaLevel1Beta**](ProvisioningCriteriaLevel1Beta.md) |  | [optional] [default to undefined]

