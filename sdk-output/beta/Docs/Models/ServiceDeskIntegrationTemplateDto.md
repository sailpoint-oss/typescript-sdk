# ServiceDeskIntegrationTemplateDtoBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | System-generated unique ID of the Object | [optional] [readonly] [default to undefined]
**name** | **string** | Name of the Object | [default to undefined]
**created** | **string** | Creation date of the Object | [optional] [readonly] [default to undefined]
**modified** | **string** | Last modification date of the Object | [optional] [readonly] [default to undefined]
**type** | **string** | The \&#39;type\&#39; property specifies the type of the Service Desk integration template. | [default to &#39;Web Service SDIM&#39;]
**attributes** | **{ [key: string]: any; }** | The \&#39;attributes\&#39; property value is a map of attributes available for integrations using this Service Desk integration template. | [default to undefined]
**provisioningConfig** | [**ProvisioningConfigBeta**](ProvisioningConfigBeta.md) |  | [default to undefined]

