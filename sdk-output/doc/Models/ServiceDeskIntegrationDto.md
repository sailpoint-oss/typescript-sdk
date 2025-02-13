# ServiceDeskIntegrationDtoBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Service Desk integration\&#39;s name. The name must be unique. | [default to undefined]
**description** | **string** | Service Desk integration\&#39;s description. | [default to undefined]
**type** | **string** | Service Desk integration types:  - ServiceNowSDIM - ServiceNow  | [default to &#39;ServiceNowSDIM&#39;]
**ownerRef** | [**OwnerDtoBeta**](OwnerDtoBeta.md) |  | [optional] [default to undefined]
**clusterRef** | [**SourceClusterDtoBeta**](SourceClusterDtoBeta.md) |  | [optional] [default to undefined]
**cluster** | **string** | Cluster ID for the Service Desk integration (replaced by clusterRef, retained for backward compatibility). | [optional] [default to undefined]
**managedSources** | **Array&lt;string&gt;** | Source IDs for the Service Desk integration (replaced by provisioningConfig.managedSResourceRefs, but retained here for backward compatibility). | [optional] [default to undefined]
**provisioningConfig** | [**ProvisioningConfigBeta**](ProvisioningConfigBeta.md) |  | [optional] [default to undefined]
**attributes** | **{ [key: string]: any; }** | Service Desk integration\&#39;s attributes. Validation constraints enforced by the implementation. | [default to undefined]
**beforeProvisioningRule** | [**BeforeProvisioningRuleDtoBeta**](BeforeProvisioningRuleDtoBeta.md) |  | [optional] [default to undefined]

