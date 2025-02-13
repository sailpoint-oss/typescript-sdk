# SimIntegrationDetailsBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | System-generated unique ID of the Object | [optional] [readonly] [default to undefined]
**name** | **string** | Name of the Object | [default to undefined]
**created** | **string** | Creation date of the Object | [optional] [readonly] [default to undefined]
**modified** | **string** | Last modification date of the Object | [optional] [readonly] [default to undefined]
**description** | **string** | The description of the integration | [optional] [default to undefined]
**type** | **string** | The integration type | [optional] [default to undefined]
**attributes** | **object** | The attributes map containing the credentials used to configure the integration. | [optional] [default to undefined]
**sources** | **Array&lt;string&gt;** | The list of sources (managed resources) | [optional] [default to undefined]
**cluster** | **string** | The cluster/proxy | [optional] [default to undefined]
**statusMap** | **object** | Custom mapping between the integration result and the provisioning result | [optional] [default to undefined]
**request** | **object** | Request data to customize desc and body of the created ticket | [optional] [default to undefined]
**beforeProvisioningRule** | [**SimIntegrationDetailsAllOfBeforeProvisioningRuleBeta**](SimIntegrationDetailsAllOfBeforeProvisioningRuleBeta.md) |  | [optional] [default to undefined]

