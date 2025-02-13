# MultiHostIntegrationsCreateBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Multi-Host Integration\&#39;s human-readable name. | [default to undefined]
**description** | **string** | Multi-Host Integration\&#39;s human-readable description. | [default to undefined]
**owner** | [**MultiHostIntegrationsOwnerBeta**](MultiHostIntegrationsOwnerBeta.md) |  | [default to undefined]
**cluster** | [**MultiHostIntegrationsClusterBeta**](MultiHostIntegrationsClusterBeta.md) |  | [optional] [default to undefined]
**connector** | **string** | Connector script name. | [default to undefined]
**connectorAttributes** | **{ [key: string]: any; }** | Multi-Host Integration specific configuration. User can add any number of additional attributes. e.g. maxSourcesPerAggGroup, maxAllowedSources etc. | [optional] [default to undefined]
**managementWorkgroup** | [**MultiHostIntegrationsManagementWorkgroupBeta**](MultiHostIntegrationsManagementWorkgroupBeta.md) |  | [optional] [default to undefined]
**created** | **string** | Date-time when the source was created | [optional] [default to undefined]
**modified** | **string** | Date-time when the source was last modified. | [optional] [default to undefined]

