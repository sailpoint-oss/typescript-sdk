# MultiHostIntegrationsBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Multi-Host Integration ID. | [readonly] [default to undefined]
**name** | **string** | Multi-Host Integration\&#39;s human-readable name. | [default to undefined]
**description** | **string** | Multi-Host Integration\&#39;s human-readable description. | [default to undefined]
**owner** | [**MultiHostIntegrationsOwnerBeta**](MultiHostIntegrationsOwnerBeta.md) |  | [default to undefined]
**cluster** | [**MultiHostIntegrationsClusterBeta**](MultiHostIntegrationsClusterBeta.md) |  | [optional] [default to undefined]
**type** | **string** | Specifies the type of system being managed e.g. Workday, Multi-Host - Microsoft SQL Server, etc.. If you are creating a delimited file source, you must set the &#x60;provisionasCsv&#x60; query parameter to &#x60;true&#x60;.  | [optional] [default to undefined]
**connector** | **string** | Connector script name. | [default to undefined]
**lastSourceUploadSuccessCount** | **number** | Last successfully uploaded source count of given Multi-Host Integration. | [optional] [default to undefined]
**maxSourcesPerAggGroup** | **number** | Maximum sources that can contain in a aggregation group of Multi-Host Integration. | [optional] [default to undefined]
**connectorClass** | **string** | Fully qualified name of the Java class that implements the connector interface. | [optional] [default to undefined]
**connectorAttributes** | [**MultiHostIntegrationsConnectorAttributesBeta**](MultiHostIntegrationsConnectorAttributesBeta.md) |  | [optional] [default to undefined]
**deleteThreshold** | **number** | Number from 0 to 100 that specifies when to skip the delete phase. | [optional] [default to undefined]
**authoritative** | **boolean** | When this is true, it indicates that the source is referenced by an identity profile. | [optional] [default to false]
**managementWorkgroup** | [**MultiHostIntegrationsManagementWorkgroupBeta**](MultiHostIntegrationsManagementWorkgroupBeta.md) |  | [optional] [default to undefined]
**healthy** | **boolean** | When this is true, it indicates that the source is healthy. | [optional] [default to false]
**status** | **string** | Status identifier that gives specific information about why a source is or isn\&#39;t healthy.  | [optional] [default to undefined]
**since** | **string** | Timestamp that shows when a source health check was last performed. | [optional] [default to undefined]
**connectorId** | **string** | Connector ID | [optional] [default to undefined]
**connectorName** | **string** | Name of the connector that was chosen during source creation. | [optional] [default to undefined]
**connectionType** | **string** | Type of connection (direct or file). | [optional] [default to undefined]
**connectorImplementationId** | **string** | Connector implementation ID. | [optional] [default to undefined]
**created** | **string** | Date-time when the source was created | [optional] [default to undefined]
**modified** | **string** | Date-time when the source was last modified. | [optional] [default to undefined]
**credentialProviderEnabled** | **boolean** | If this is true, it enables a credential provider for the source. If credentialProvider is turned on,  then the source can use credential provider(s) to fetch credentials. | [optional] [default to false]
**category** | **string** | Source category (e.g. null, CredentialProvider). | [optional] [default to undefined]



## Enum: MultiHostIntegrationsBetaStatusBeta


* `SourceStateErrorAccountFileImport` (value: `'SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT'`)

* `SourceStateErrorCluster` (value: `'SOURCE_STATE_ERROR_CLUSTER'`)

* `SourceStateErrorSource` (value: `'SOURCE_STATE_ERROR_SOURCE'`)

* `SourceStateErrorVa` (value: `'SOURCE_STATE_ERROR_VA'`)

* `SourceStateFailureCluster` (value: `'SOURCE_STATE_FAILURE_CLUSTER'`)

* `SourceStateFailureSource` (value: `'SOURCE_STATE_FAILURE_SOURCE'`)

* `SourceStateHealthy` (value: `'SOURCE_STATE_HEALTHY'`)

* `SourceStateUncheckedCluster` (value: `'SOURCE_STATE_UNCHECKED_CLUSTER'`)

* `SourceStateUncheckedClusterNoSources` (value: `'SOURCE_STATE_UNCHECKED_CLUSTER_NO_SOURCES'`)

* `SourceStateUncheckedSource` (value: `'SOURCE_STATE_UNCHECKED_SOURCE'`)

* `SourceStateUncheckedSourceNoAccounts` (value: `'SOURCE_STATE_UNCHECKED_SOURCE_NO_ACCOUNTS'`)





## Enum: MultiHostIntegrationsBetaConnectionTypeBeta


* `Direct` (value: `'direct'`)

* `File` (value: `'file'`)



