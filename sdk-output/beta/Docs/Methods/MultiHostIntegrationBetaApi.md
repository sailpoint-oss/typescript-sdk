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
[**createSourcesWithinMultiHost**](MultiHostIntegrationBetaApi.md#createSourcesWithinMultiHost) | **POST** /multihosts/{id} | Create Sources Within Multi-Host Integration
[**deleteMultiHost**](MultiHostIntegrationBetaApi.md#deleteMultiHost) | **DELETE** /multihosts/{id} | Delete Multi-Host Integration
[**getAcctAggregationGroups**](MultiHostIntegrationBetaApi.md#getAcctAggregationGroups) | **GET** /multihosts/{multihostId}/acctAggregationGroups | Get Account Aggregation Groups Within Multi-Host Integration ID
[**getEntitlementAggregationGroups**](MultiHostIntegrationBetaApi.md#getEntitlementAggregationGroups) | **GET** /multihosts/{multiHostId}/entitlementAggregationGroups | Get Entitlement Aggregation Groups Within Multi-Host Integration ID
[**getMultiHostIntegrations**](MultiHostIntegrationBetaApi.md#getMultiHostIntegrations) | **GET** /multihosts/{id} | Get Multi-Host Integration By ID
[**getMultiHostIntegrationsList**](MultiHostIntegrationBetaApi.md#getMultiHostIntegrationsList) | **GET** /multihosts | List All Existing Multi-Host Integrations
[**getMultiHostSourceCreationErrors**](MultiHostIntegrationBetaApi.md#getMultiHostSourceCreationErrors) | **GET** /multihosts/{multiHostId}/sources/errors | List Multi-Host Source Creation Errors
[**getMultihostIntegrationTypes**](MultiHostIntegrationBetaApi.md#getMultihostIntegrationTypes) | **GET** /multihosts/types | List Multi-Host Integration Types
[**getSourcesWithinMultiHost**](MultiHostIntegrationBetaApi.md#getSourcesWithinMultiHost) | **GET** /multihosts/{id}/sources | List Sources Within Multi-Host Integration
[**testConnectionMultiHostSources**](MultiHostIntegrationBetaApi.md#testConnectionMultiHostSources) | **POST** /multihosts/{multihost_id}/sources/testConnection | Test Configuration For Multi-Host Integration
[**testSourceConnectionMultihost**](MultiHostIntegrationBetaApi.md#testSourceConnectionMultihost) | **GET** /multihosts/{multihost_id}/sources/{sourceId}/testConnection | Test Configuration For Multi-Host Integration\&#39;s Single Source
[**updateMultiHostSources**](MultiHostIntegrationBetaApi.md#updateMultiHostSources) | **PATCH** /multihosts/{id} | Update Multi-Host Integration



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
const multiHostIntegrationsCreateBeta : MultiHostIntegrationsCreateBeta = ; // The specifics of the Multi-Host Integration to create
const val = await multiHostIntegrationBetaApi.createMultiHostIntegration(multiHostIntegrationsCreateBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## createSourcesWithinMultiHost

> createSourcesWithinMultiHost(id, multiHostIntegrationsCreateSourcesBeta)

Create Sources Within Multi-Host Integration

This API is used to create sources within Multi-Host Integration. Multi-Host Integration holds similar types of sources.  A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Multi-Host Integration. | [default to undefined]
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
const id : string = "2c91808568c529c60168cca6f90c1326"; // ID of the Multi-Host Integration.
const multiHostIntegrationsCreateSourcesBeta : Array<MultiHostIntegrationsCreateSourcesBeta> = ; // The specifics of the sources to create within Multi-Host Integration.
const val = await multiHostIntegrationBetaApi.createSourcesWithinMultiHost(id, multiHostIntegrationsCreateSourcesBeta);
console.log('API called successfully.');
```
</details>


## deleteMultiHost

> deleteMultiHost(id)

Delete Multi-Host Integration

Delete an existing Multi-Host Integration by ID.    A token with Org Admin or Multi Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of Multi-Host Integration to delete. | [default to undefined]

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
const id : string = "2c91808568c529c60168cca6f90c1326"; // ID of Multi-Host Integration to delete.
const val = await multiHostIntegrationBetaApi.deleteMultiHost(id);
console.log('API called successfully.');
```
</details>


## getAcctAggregationGroups

> MultiHostIntegrationsAggScheduleUpdateBeta getAcctAggregationGroups(multiHostId)

Get Account Aggregation Groups Within Multi-Host Integration ID

This API will return array of account aggregation groups within provided Multi-Host Integration ID.  A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

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
const multiHostId : string = "aMultiHostId"; // ID of the Multi-Host Integration to update
const val = await multiHostIntegrationBetaApi.getAcctAggregationGroups(multiHostId);
console.log('API called successfully. Returned data: ' + val.data);
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
const multiHostId : string = "aMultiHostId"; // ID of the Multi-Host Integration to update
const val = await multiHostIntegrationBetaApi.getEntitlementAggregationGroups(multiHostId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getMultiHostIntegrations

> MultiHostIntegrationsBeta getMultiHostIntegrations(id)

Get Multi-Host Integration By ID

Get an existing Multi-Host Integration.   A token with Org Admin or Multi-Host Integration Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Multi-Host Integration. | [default to undefined]

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
const id : string = "2c91808568c529c60168cca6f90c1326"; // ID of the Multi-Host Integration.
const val = await multiHostIntegrationBetaApi.getMultiHostIntegrations(id);
console.log('API called successfully. Returned data: ' + val.data);
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
const offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "name", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  filters = "id eq 2c91808b6ef1d43e016efba0ce470904", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in*
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  forSubadmin = "5168015d32f890ca15812c9180835d2e"; // string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\'s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin.
const val = await multiHostIntegrationBetaApi.getMultiHostIntegrationsList(offset, limit, sorters, filters, count, forSubadmin);
console.log('API called successfully. Returned data: ' + val.data);
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
const multiHostId : string = "004091cb79b04636b88662afa50a4440"; // ID of the Multi-Host Integration
const val = await multiHostIntegrationBetaApi.getMultiHostSourceCreationErrors(multiHostId);
console.log('API called successfully. Returned data: ' + val.data);
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
const val = await multiHostIntegrationBetaApi.getMultihostIntegrationTypes();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSourcesWithinMultiHost

> Array&lt;MultiHostSourcesBeta&gt; getSourcesWithinMultiHost(offset, limit, sorters, filters, count)

List Sources Within Multi-Host Integration

Get a list of sources within Multi-Host Integration ID.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
const offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "name", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  filters = "id eq 2c91808b6ef1d43e016efba0ce470904", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in*
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await multiHostIntegrationBetaApi.getSourcesWithinMultiHost(offset, limit, sorters, filters, count);
console.log('API called successfully. Returned data: ' + val.data);
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
const multihostId : string = "2c91808568c529c60168cca6f90c1324"; // ID of the Multi-Host Integration
const val = await multiHostIntegrationBetaApi.testConnectionMultiHostSources(multihostId);
console.log('API called successfully.');
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
const multihostId : string = "2c91808568c529c60168cca6f90c1326"; // ID of the Multi-Host Integration
const sourceId : string = "2c91808568c529f60168cca6f90c1324"; // ID of the source within the Multi-Host Integration
const val = await multiHostIntegrationBetaApi.testSourceConnectionMultihost(multihostId, sourceId);
console.log('API called successfully. Returned data: ' + val.data);
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
const multihostId : string = "anId"; // ID of the Multi-Host Integration to update.
const updateMultiHostSourcesRequestInnerBeta : Array<UpdateMultiHostSourcesRequestInnerBeta> = [{op=add, path=/description, value=MDK Multi-Host Integration 222 description}]; // This endpoint allows you to update a Multi-Host Integration. 
const val = await multiHostIntegrationBetaApi.updateMultiHostSources(multihostId, updateMultiHostSourcesRequestInnerBeta);
console.log('API called successfully.');
```
</details>

