# MultiHostIntegrationsConnectorAttributesBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxAllowedSources** | **number** | Maximum sources allowed count of a Multi-Host Integration | [optional] [default to undefined]
**lastSourceUploadCount** | **number** | Last upload sources count of a Multi-Host Integration | [optional] [default to undefined]
**connectorFileUploadHistory** | [**MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistoryBeta**](MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistoryBeta.md) |  | [optional] [default to undefined]
**multihost_status** | **string** | Multi-Host integration status. | [optional] [default to undefined]
**showAccountSchema** | **boolean** | Show account schema | [optional] [default to true]
**showEntitlementSchema** | **boolean** | Show entitlement schema | [optional] [default to true]
**multiHostAttributes** | [**MultiHostIntegrationsConnectorAttributesMultiHostAttributesBeta**](MultiHostIntegrationsConnectorAttributesMultiHostAttributesBeta.md) |  | [optional] [default to undefined]



## Enum: MultiHostIntegrationsConnectorAttributesBetaMultihostStatusBeta


* `Ready` (value: `'ready'`)

* `Processing` (value: `'processing'`)

* `FileUploadInProgress` (value: `'fileUploadInProgress'`)

* `SourceCreationInProgress` (value: `'sourceCreationInProgress'`)

* `AggregationGroupingInProgress` (value: `'aggregationGroupingInProgress'`)

* `AggregationScheduleInProgress` (value: `'aggregationScheduleInProgress'`)

* `DeleteInProgress` (value: `'deleteInProgress'`)

* `DeleteFailed` (value: `'deleteFailed'`)



