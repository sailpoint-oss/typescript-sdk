---
title: MultiHostIntegrationBetaApi
pagination_label: MultiHostIntegrationBetaApi
sidebar_label: MultiHostIntegrationBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'MultiHostIntegrationBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationBetaApi']
---

# MultiHostIntegrationBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMultiHostIntegration**](MultiHostIntegrationBetaApi.md#createMultiHostIntegration) | **POST** /multihosts | Create Multi-Host Integration
[**createSourcesWithinMultiHost**](MultiHostIntegrationBetaApi.md#createSourcesWithinMultiHost) | **POST** /multihosts/{multihostId} | Create Sources Within Multi-Host Integration
[**deleteMultiHost**](MultiHostIntegrationBetaApi.md#deleteMultiHost) | **DELETE** /multihosts/{multihostId} | Delete Multi-Host Integration
[**getAcctAggregationGroups**](MultiHostIntegrationBetaApi.md#getAcctAggregationGroups) | **GET** /multihosts/{multihostId}/acctAggregationGroups | Get Account Aggregation Groups Within Multi-Host Integration ID
[**getEntitlementAggregationGroups**](MultiHostIntegrationBetaApi.md#getEntitlementAggregationGroups) | **GET** /multihosts/{multiHostId}/entitlementAggregationGroups | Get Entitlement Aggregation Groups Within Multi-Host Integration ID
[**getMultiHostIntegrations**](MultiHostIntegrationBetaApi.md#getMultiHostIntegrations) | **GET** /multihosts/{multihostId} | Get Multi-Host Integration By ID
[**getMultiHostIntegrationsList**](MultiHostIntegrationBetaApi.md#getMultiHostIntegrationsList) | **GET** /multihosts | List All Existing Multi-Host Integrations
[**getMultiHostSourceCreationErrors**](MultiHostIntegrationBetaApi.md#getMultiHostSourceCreationErrors) | **GET** /multihosts/{multiHostId}/sources/errors | List Multi-Host Source Creation Errors
[**getMultihostIntegrationTypes**](MultiHostIntegrationBetaApi.md#getMultihostIntegrationTypes) | **GET** /multihosts/types | List Multi-Host Integration Types
[**getSourcesWithinMultiHost**](MultiHostIntegrationBetaApi.md#getSourcesWithinMultiHost) | **GET** /multihosts/{multihostId}/sources | List Sources Within Multi-Host Integration
[**testConnectionMultiHostSources**](MultiHostIntegrationBetaApi.md#testConnectionMultiHostSources) | **POST** /multihosts/{multihostId}/sources/testConnection | Test Configuration For Multi-Host Integration
[**testSourceConnectionMultihost**](MultiHostIntegrationBetaApi.md#testSourceConnectionMultihost) | **GET** /multihosts/{multihostId}/sources/{sourceId}/testConnection | Test Configuration For Multi-Host Integration\&#39;s Single Source
[**updateMultiHostSources**](MultiHostIntegrationBetaApi.md#updateMultiHostSources) | **PATCH** /multihosts/{multihostId} | Update Multi-Host Integration



## createMultiHostIntegration

> MultiHostIntegrationsBeta createMultiHostIntegration(multiHostIntegrationsCreateBeta)

Create Multi-Host Integration

This API is used to create Multi-Host Integration. Multi-host Integration holds similar types of sources.  A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multiHostIntegrationsCreateBeta** | [**MultiHostIntegrationsCreateBeta**](../Models/MultiHostIntegrationsCreateBeta.md)| The specifics of the Multi-Host Integration to create | 

### Return type

[**MultiHostIntegrationsBeta**](../Models/MultiHostIntegrationsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi, MultiHostIntegrationsCreateBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

{
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "multihost-microsoft-sql-server",
  "description" : "This is a Multi-Host Integration.",
  "type" : "Multi-Host - Microsoft SQL Server",
  "connectorClass" : "sailpoint.connector.OpenConnectorAdapter",
  "connectionType" : "direct",
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "multihost-microsoft-sql-server",
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "lastSourceUploadSuccessCount" : 50,
  "authoritative" : false,
  "maxSourcesPerAggGroup" : 10,
  "connectorAttributes" : {
    "multiHostAttributes" : {
      "password" : "Password",
      "user" : "Username",
      "connector_files" : "mssql-jdbc-8.4.1.jre8.jar",
      "authType" : "SQLAuthentication"
    },
    "connectorFileUploadHistory" : {
      "connectorFileNameUploadedDate" : "2024-08-29T10:20:38.896479Z"
    },
    "maxAllowedSources" : 30,
    "lastSourceUploadCount" : 50,
    "showEntitlementSchema" : true,
    "showAccountSchema" : true,
    "multihost_status" : "ready"
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "credentialProviderEnabled" : false,
  "connector" : "multihost-microsoft-sql-server",
  "healthy" : true,
  "name" : "My Multi-Host Integration",
  "connectorName" : "Multi-Host Microsoft SQL Server",
  "category" : "CredentialProvider",
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2000-01-23T04:56:07.000+00:00"
}


const multiHostIntegrationsCreateBeta : MultiHostIntegrationsCreateBeta = 

try {
    const val = await multiHostIntegrationBetaApi.createMultiHostIntegration(multiHostIntegrationsCreateBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.createMultiHostIntegration(multiHostIntegrationsCreateBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## createSourcesWithinMultiHost

> createSourcesWithinMultiHost(multihostId, multiHostIntegrationsCreateSourcesBeta)

Create Sources Within Multi-Host Integration

This API is used to create sources within Multi-Host Integration. Multi-Host Integration holds similar types of sources.  A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multihostId** | **string**| ID of the Multi-Host Integration. | [default to undefined]
 **multiHostIntegrationsCreateSourcesBeta** | [**Array&lt;MultiHostIntegrationsCreateSourcesBeta&gt;**](../Models/MultiHostIntegrationsCreateSourcesBeta.md)| The specifics of the sources to create within Multi-Host Integration. | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi, MultiHostIntegrationsCreateSourcesBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

{
  "causes" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "messages" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "detailCode" : "400.1 Bad Request Content",
  "trackingId" : "e7eab60924f64aa284175b9fa3309599"
}


const multihostId : string = "2c91808568c529c60168cca6f90c1326"; // ID of the Multi-Host Integration. (default to undefined)
const multiHostIntegrationsCreateSourcesBeta : Array<MultiHostIntegrationsCreateSourcesBeta> = ; // The specifics of the sources to create within Multi-Host Integration.

try {
    const val = await multiHostIntegrationBetaApi.createSourcesWithinMultiHost(multihostId, multiHostIntegrationsCreateSourcesBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.createSourcesWithinMultiHost(multihostId, multiHostIntegrationsCreateSourcesBeta);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteMultiHost

> deleteMultiHost(multihostId)

Delete Multi-Host Integration

Delete an existing Multi-Host Integration by ID.    A token with Org Admin or Multi Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multihostId** | **string**| ID of Multi-Host Integration to delete. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

{
  "causes" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "messages" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "detailCode" : "400.1 Bad Request Content",
  "trackingId" : "e7eab60924f64aa284175b9fa3309599"
}


const multihostId : string = "2c91808568c529c60168cca6f90c1326"; // ID of Multi-Host Integration to delete. (default to undefined)

try {
    const val = await multiHostIntegrationBetaApi.deleteMultiHost(multihostId);
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.deleteMultiHost(multihostId);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getAcctAggregationGroups

> MultiHostIntegrationsAggScheduleUpdateBeta getAcctAggregationGroups(multihostId)

Get Account Aggregation Groups Within Multi-Host Integration ID

This API will return array of account aggregation groups within provided Multi-Host Integration ID.  A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multihostId** | **string**| ID of the Multi-Host Integration to update | [default to undefined]

### Return type

[**MultiHostIntegrationsAggScheduleUpdateBeta**](../Models/MultiHostIntegrationsAggScheduleUpdateBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

{
  "aggregation_cron_schedule" : "0 0 0 * * ?",
  "created" : "2024-01-23T18:08:50.897Z",
  "modified" : "2024-01-23T18:08:50.897Z",
  "aggregation_grp_id" : "004091cb79b04636b88662afa50a4448",
  "aggregation_grp_name" : "Multi-Host Integration aggregation group name",
  "multihostId" : "004091cb79b04636b88662afa50a4456",
  "source_id_list" : [ "004091cb79b04636b88662afa50a4440", "00af6d0d562a49b591c47be908740542" ],
  "enableSchedule" : false
}


const multihostId : string = "aMultiHostId"; // ID of the Multi-Host Integration to update (default to undefined)

try {
    const val = await multiHostIntegrationBetaApi.getAcctAggregationGroups(multihostId);
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.getAcctAggregationGroups(multihostId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getEntitlementAggregationGroups

> MultiHostIntegrationsAggScheduleUpdateBeta getEntitlementAggregationGroups(multiHostId)

Get Entitlement Aggregation Groups Within Multi-Host Integration ID

This API will return array of aggregation groups within provided Multi-Host Integration ID.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multiHostId** | **string**| ID of the Multi-Host Integration to update | [default to undefined]

### Return type

[**MultiHostIntegrationsAggScheduleUpdateBeta**](../Models/MultiHostIntegrationsAggScheduleUpdateBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

{
  "aggregation_cron_schedule" : "0 0 0 * * ?",
  "created" : "2024-01-23T18:08:50.897Z",
  "modified" : "2024-01-23T18:08:50.897Z",
  "aggregation_grp_id" : "004091cb79b04636b88662afa50a4448",
  "aggregation_grp_name" : "Multi-Host Integration aggregation group name",
  "multihostId" : "004091cb79b04636b88662afa50a4456",
  "source_id_list" : [ "004091cb79b04636b88662afa50a4440", "00af6d0d562a49b591c47be908740542" ],
  "enableSchedule" : false
}


const multiHostId : string = "aMultiHostId"; // ID of the Multi-Host Integration to update (default to undefined)

try {
    const val = await multiHostIntegrationBetaApi.getEntitlementAggregationGroups(multiHostId);
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.getEntitlementAggregationGroups(multiHostId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getMultiHostIntegrations

> MultiHostIntegrationsBeta getMultiHostIntegrations(multihostId)

Get Multi-Host Integration By ID

Get an existing Multi-Host Integration.   A token with Org Admin or Multi-Host Integration Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multihostId** | **string**| ID of the Multi-Host Integration. | [default to undefined]

### Return type

[**MultiHostIntegrationsBeta**](../Models/MultiHostIntegrationsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

{
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "multihost-microsoft-sql-server",
  "description" : "This is a Multi-Host Integration.",
  "type" : "Multi-Host - Microsoft SQL Server",
  "connectorClass" : "sailpoint.connector.OpenConnectorAdapter",
  "connectionType" : "direct",
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "multihost-microsoft-sql-server",
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "lastSourceUploadSuccessCount" : 50,
  "authoritative" : false,
  "maxSourcesPerAggGroup" : 10,
  "connectorAttributes" : {
    "multiHostAttributes" : {
      "password" : "Password",
      "user" : "Username",
      "connector_files" : "mssql-jdbc-8.4.1.jre8.jar",
      "authType" : "SQLAuthentication"
    },
    "connectorFileUploadHistory" : {
      "connectorFileNameUploadedDate" : "2024-08-29T10:20:38.896479Z"
    },
    "maxAllowedSources" : 30,
    "lastSourceUploadCount" : 50,
    "showEntitlementSchema" : true,
    "showAccountSchema" : true,
    "multihost_status" : "ready"
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "credentialProviderEnabled" : false,
  "connector" : "multihost-microsoft-sql-server",
  "healthy" : true,
  "name" : "My Multi-Host Integration",
  "connectorName" : "Multi-Host Microsoft SQL Server",
  "category" : "CredentialProvider",
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2000-01-23T04:56:07.000+00:00"
}


const multihostId : string = "2c91808568c529c60168cca6f90c1326"; // ID of the Multi-Host Integration. (default to undefined)

try {
    const val = await multiHostIntegrationBetaApi.getMultiHostIntegrations(multihostId);
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.getMultiHostIntegrations(multihostId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getMultiHostIntegrationsList

> Array&lt;MultiHostIntegrationsBeta&gt; getMultiHostIntegrationsList(offset, limit, sorters, filters, count, forSubadmin)

List All Existing Multi-Host Integrations

Get a list of Multi-Host Integrations.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* | [optional] [default to undefined]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **forSubadmin** | **string**| If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\&#39;s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | [optional] [default to undefined]

### Return type

[**Array&lt;MultiHostIntegrationsBeta&gt;**](../Models/MultiHostIntegrationsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

[ {
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "multihost-microsoft-sql-server",
  "description" : "This is a Multi-Host Integration.",
  "type" : "Multi-Host - Microsoft SQL Server",
  "connectorClass" : "sailpoint.connector.OpenConnectorAdapter",
  "connectionType" : "direct",
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "multihost-microsoft-sql-server",
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "lastSourceUploadSuccessCount" : 50,
  "authoritative" : false,
  "maxSourcesPerAggGroup" : 10,
  "connectorAttributes" : {
    "multiHostAttributes" : {
      "password" : "Password",
      "user" : "Username",
      "connector_files" : "mssql-jdbc-8.4.1.jre8.jar",
      "authType" : "SQLAuthentication"
    },
    "connectorFileUploadHistory" : {
      "connectorFileNameUploadedDate" : "2024-08-29T10:20:38.896479Z"
    },
    "maxAllowedSources" : 30,
    "lastSourceUploadCount" : 50,
    "showEntitlementSchema" : true,
    "showAccountSchema" : true,
    "multihost_status" : "ready"
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "credentialProviderEnabled" : false,
  "connector" : "multihost-microsoft-sql-server",
  "healthy" : true,
  "name" : "My Multi-Host Integration",
  "connectorName" : "Multi-Host Microsoft SQL Server",
  "category" : "CredentialProvider",
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2000-01-23T04:56:07.000+00:00"
}, {
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "multihost-microsoft-sql-server",
  "description" : "This is a Multi-Host Integration.",
  "type" : "Multi-Host - Microsoft SQL Server",
  "connectorClass" : "sailpoint.connector.OpenConnectorAdapter",
  "connectionType" : "direct",
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "multihost-microsoft-sql-server",
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "lastSourceUploadSuccessCount" : 50,
  "authoritative" : false,
  "maxSourcesPerAggGroup" : 10,
  "connectorAttributes" : {
    "multiHostAttributes" : {
      "password" : "Password",
      "user" : "Username",
      "connector_files" : "mssql-jdbc-8.4.1.jre8.jar",
      "authType" : "SQLAuthentication"
    },
    "connectorFileUploadHistory" : {
      "connectorFileNameUploadedDate" : "2024-08-29T10:20:38.896479Z"
    },
    "maxAllowedSources" : 30,
    "lastSourceUploadCount" : 50,
    "showEntitlementSchema" : true,
    "showAccountSchema" : true,
    "multihost_status" : "ready"
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "credentialProviderEnabled" : false,
  "connector" : "multihost-microsoft-sql-server",
  "healthy" : true,
  "name" : "My Multi-Host Integration",
  "connectorName" : "Multi-Host Microsoft SQL Server",
  "category" : "CredentialProvider",
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2000-01-23T04:56:07.000+00:00"
} ]


const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const sorters : string = "name"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) (default to undefined)
const filters : string = "id eq 2c91808b6ef1d43e016efba0ce470904"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* (optional) (default to undefined)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const forSubadmin : string = "5168015d32f890ca15812c9180835d2e"; // If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\'s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) (default to undefined)

try {
    const val = await multiHostIntegrationBetaApi.getMultiHostIntegrationsList();
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.getMultiHostIntegrationsList(offset, limit, sorters, filters, count, forSubadmin);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getMultiHostSourceCreationErrors

> Array&lt;SourceCreationErrorsBeta&gt; getMultiHostSourceCreationErrors(multiHostId)

List Multi-Host Source Creation Errors

Get a list of sources creation errors within Multi-Host Integration ID.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multiHostId** | **string**| ID of the Multi-Host Integration | [default to undefined]

### Return type

[**Array&lt;SourceCreationErrorsBeta&gt;**](../Models/SourceCreationErrorsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

[ {
  "created" : "2022-02-08T14:50:03.827Z",
  "modified" : "2024-01-23T18:08:50.897Z",
  "multihostId" : "2c91808568c529c60168cca6f90c1324",
  "operation" : "DELETE",
  "source_name" : "My Source",
  "source_error" : "Source with internal name \"My Source [source]\" already exists."
}, {
  "created" : "2022-02-08T14:50:03.827Z",
  "modified" : "2024-01-23T18:08:50.897Z",
  "multihostId" : "2c91808568c529c60168cca6f90c1324",
  "operation" : "DELETE",
  "source_name" : "My Source",
  "source_error" : "Source with internal name \"My Source [source]\" already exists."
} ]


const multiHostId : string = "004091cb79b04636b88662afa50a4440"; // ID of the Multi-Host Integration (default to undefined)

try {
    const val = await multiHostIntegrationBetaApi.getMultiHostSourceCreationErrors(multiHostId);
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.getMultiHostSourceCreationErrors(multiHostId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getMultihostIntegrationTypes

> Array&lt;MultiHostIntegrationTemplateTypeBeta&gt; getMultihostIntegrationTypes()

List Multi-Host Integration Types

This API endpoint returns the current list of supported Multi-Host Integration types.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;MultiHostIntegrationTemplateTypeBeta&gt;**](../Models/MultiHostIntegrationTemplateTypeBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

[ {
  "name" : "aName",
  "scriptName" : "aScriptName",
  "type" : "aType"
}, {
  "name" : "aName",
  "scriptName" : "aScriptName",
  "type" : "aType"
} ]



try {
    const val = await multiHostIntegrationBetaApi.getMultihostIntegrationTypes();
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.getMultihostIntegrationTypes();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSourcesWithinMultiHost

> Array&lt;MultiHostSourcesBeta&gt; getSourcesWithinMultiHost(multihostId, offset, limit, sorters, filters, count)

List Sources Within Multi-Host Integration

Get a list of sources within Multi-Host Integration ID.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multihostId** | **string**| ID of the Multi-Host Integration to update | [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* | [optional] [default to undefined]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;MultiHostSourcesBeta&gt;**](../Models/MultiHostSourcesBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

[ {
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "multihost-microsoft-sql-server",
  "description" : "This is the Source.",
  "type" : "Multi-Host - Microsoft SQL Server",
  "connectorClass" : "sailpoint.connector.OpenConnectorAdapter",
  "connectionType" : "file",
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "passwordPolicies" : [ {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb053980",
    "name" : "Corporate Password Policy"
  }, {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb057777",
    "name" : "Vendor Password Policy"
  } ],
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "multihost-microsoft-sql-server",
  "managerCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "accountCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "authoritative" : false,
  "connectorAttributes" : {
    "healthCheckTimeout" : 30,
    "authSearchAttributes" : [ "cn", "uid", "mail" ]
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "managerCorrelationMapping" : {
    "accountAttributeName" : "manager",
    "identityAttributeName" : "manager"
  },
  "credentialProviderEnabled" : false,
  "accountCorrelationConfig" : {
    "name" : "Directory [source-62867] Account Correlation",
    "id" : "2c9180855d191c59015d28583727245a",
    "type" : "ACCOUNT_CORRELATION_CONFIG"
  },
  "connector" : "multihost-microsoft-sql-server",
  "healthy" : true,
  "schemas" : [ {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "name" : "account"
  }, {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232b",
    "name" : "group"
  } ],
  "name" : "My Source",
  "connectorName" : "Multi-Host Microsoft SQL Server",
  "category" : "CredentialProvider",
  "beforeProvisioningRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2000-01-23T04:56:07.000+00:00"
}, {
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "multihost-microsoft-sql-server",
  "description" : "This is the Source.",
  "type" : "Multi-Host - Microsoft SQL Server",
  "connectorClass" : "sailpoint.connector.OpenConnectorAdapter",
  "connectionType" : "file",
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "passwordPolicies" : [ {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb053980",
    "name" : "Corporate Password Policy"
  }, {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb057777",
    "name" : "Vendor Password Policy"
  } ],
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "multihost-microsoft-sql-server",
  "managerCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "accountCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "authoritative" : false,
  "connectorAttributes" : {
    "healthCheckTimeout" : 30,
    "authSearchAttributes" : [ "cn", "uid", "mail" ]
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "managerCorrelationMapping" : {
    "accountAttributeName" : "manager",
    "identityAttributeName" : "manager"
  },
  "credentialProviderEnabled" : false,
  "accountCorrelationConfig" : {
    "name" : "Directory [source-62867] Account Correlation",
    "id" : "2c9180855d191c59015d28583727245a",
    "type" : "ACCOUNT_CORRELATION_CONFIG"
  },
  "connector" : "multihost-microsoft-sql-server",
  "healthy" : true,
  "schemas" : [ {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "name" : "account"
  }, {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232b",
    "name" : "group"
  } ],
  "name" : "My Source",
  "connectorName" : "Multi-Host Microsoft SQL Server",
  "category" : "CredentialProvider",
  "beforeProvisioningRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2000-01-23T04:56:07.000+00:00"
} ]


const multihostId : string = "aMultiHostId"; // ID of the Multi-Host Integration to update (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const sorters : string = "name"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) (default to undefined)
const filters : string = "id eq 2c91808b6ef1d43e016efba0ce470904"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* (optional) (default to undefined)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await multiHostIntegrationBetaApi.getSourcesWithinMultiHost(multihostId);
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.getSourcesWithinMultiHost(multihostId, offset, limit, sorters, filters, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## testConnectionMultiHostSources

> testConnectionMultiHostSources(multihostId)

Test Configuration For Multi-Host Integration

This endpoint performs a more detailed validation of the Multi-Host Integration\'s configuration.  A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multihostId** | **string**| ID of the Multi-Host Integration | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

{
  "causes" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "messages" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "detailCode" : "400.1 Bad Request Content",
  "trackingId" : "e7eab60924f64aa284175b9fa3309599"
}


const multihostId : string = "2c91808568c529c60168cca6f90c1324"; // ID of the Multi-Host Integration (default to undefined)

try {
    const val = await multiHostIntegrationBetaApi.testConnectionMultiHostSources(multihostId);
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.testConnectionMultiHostSources(multihostId);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## testSourceConnectionMultihost

> TestSourceConnectionMultihost200ResponseBeta testSourceConnectionMultihost(multihostId, sourceId)

Test Configuration For Multi-Host Integration\'s Single Source

This endpoint performs a more detailed validation of the source\'s configuration.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multihostId** | **string**| ID of the Multi-Host Integration | [default to undefined]
 **sourceId** | **string**| ID of the source within the Multi-Host Integration | [default to undefined]

### Return type

[**TestSourceConnectionMultihost200ResponseBeta**](../Models/TestSourceConnectionMultihost200ResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

{
  "success" : true,
  "timing" : 0,
  "testConnectionDetails" : "testConnectionDetails",
  "message" : "Tes.",
  "resultType" : "SOURCE_STATE_HEALTHY"
}


const multihostId : string = "2c91808568c529c60168cca6f90c1326"; // ID of the Multi-Host Integration (default to undefined)
const sourceId : string = "2c91808568c529f60168cca6f90c1324"; // ID of the source within the Multi-Host Integration (default to undefined)

try {
    const val = await multiHostIntegrationBetaApi.testSourceConnectionMultihost(multihostId, sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.testSourceConnectionMultihost(multihostId, sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateMultiHostSources

> updateMultiHostSources(multihostId, updateMultiHostSourcesRequestInnerBeta)

Update Multi-Host Integration

Update existing sources within Multi-Host Integration.  A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multihostId** | **string**| ID of the Multi-Host Integration to update. | [default to undefined]
 **updateMultiHostSourcesRequestInnerBeta** | [**Array&lt;UpdateMultiHostSourcesRequestInnerBeta&gt;**](../Models/UpdateMultiHostSourcesRequestInnerBeta.md)| This endpoint allows you to update a Multi-Host Integration.  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MultiHostIntegrationBetaApi, UpdateMultiHostSourcesRequestInnerBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const multiHostIntegrationBetaApi = new MultiHostIntegrationBetaApi(apiConfig);

{
  "causes" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "messages" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "detailCode" : "400.1 Bad Request Content",
  "trackingId" : "e7eab60924f64aa284175b9fa3309599"
}


const multihostId : string = "anId"; // ID of the Multi-Host Integration to update. (default to undefined)
const updateMultiHostSourcesRequestInnerBeta : Array<UpdateMultiHostSourcesRequestInnerBeta> = [{op=add, path=/description, value=MDK Multi-Host Integration 222 description}]; // This endpoint allows you to update a Multi-Host Integration. 

try {
    const val = await multiHostIntegrationBetaApi.updateMultiHostSources(multihostId, updateMultiHostSourcesRequestInnerBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await multiHostIntegrationBetaApi.updateMultiHostSources(multihostId, updateMultiHostSourcesRequestInnerBeta);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

