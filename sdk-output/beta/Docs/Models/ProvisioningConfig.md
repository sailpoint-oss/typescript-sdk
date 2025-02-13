# ProvisioningConfigBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**universalManager** | **boolean** | Specifies whether this configuration is used to manage provisioning requests for all sources from the org.  If true, no managedResourceRefs are allowed. | [optional] [readonly] [default to false]
**managedResourceRefs** | [**Array&lt;ProvisioningConfigManagedResourceRefsInnerBeta&gt;**](ProvisioningConfigManagedResourceRefsInnerBeta.md) | References to sources for the Service Desk integration template.  May only be specified if universalManager is false. | [optional] [default to undefined]
**planInitializerScript** | [**ProvisioningConfigPlanInitializerScriptBeta**](ProvisioningConfigPlanInitializerScriptBeta.md) |  | [optional] [default to undefined]
**noProvisioningRequests** | **boolean** | Name of an attribute that when true disables the saving of ProvisioningRequest objects whenever plans are sent through this integration. | [optional] [default to false]
**provisioningRequestExpiration** | **number** | When saving pending requests is enabled, this defines the number of hours the request is allowed to live before it is considered expired and no longer affects plan compilation. | [optional] [default to undefined]

