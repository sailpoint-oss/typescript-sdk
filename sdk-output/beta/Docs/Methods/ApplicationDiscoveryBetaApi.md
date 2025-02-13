---
title: ApplicationDiscoveryBetaApi
pagination_label: ApplicationDiscoveryBetaApi
sidebar_label: ApplicationDiscoveryBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'ApplicationDiscoveryBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'ApplicationDiscoveryBetaApi']
---

# ApplicationDiscoveryBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDiscoveredApplicationByID**](ApplicationDiscoveryBetaApi.md#getDiscoveredApplicationByID) | **GET** /discovered-applications/{id} | Get Discovered Application by ID
[**getDiscoveredApplications**](ApplicationDiscoveryBetaApi.md#getDiscoveredApplications) | **GET** /discovered-applications | Retrieve discovered applications for tenant
[**getManualDiscoverApplicationsCsvTemplate**](ApplicationDiscoveryBetaApi.md#getManualDiscoverApplicationsCsvTemplate) | **GET** /manual-discover-applications-template | Download CSV Template for Discovery
[**patchDiscoveredApplicationByID**](ApplicationDiscoveryBetaApi.md#patchDiscoveredApplicationByID) | **PATCH** /discovered-applications/{id} | Patch Discovered Application by ID
[**sendManualDiscoverApplicationsCsvTemplate**](ApplicationDiscoveryBetaApi.md#sendManualDiscoverApplicationsCsvTemplate) | **POST** /manual-discover-applications | Upload CSV to Discover Applications



## getDiscoveredApplicationByID

> getDiscoveredApplicationByID(id)

Get Discovered Application by ID

Get the discovered application, along with with its associated sources, based on the provided ID. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Discovered application\&#39;s ID. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ApplicationDiscoveryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const applicationDiscoveryBetaApi = new ApplicationDiscoveryBetaApi(apiConfig);
const id : string = "123e4567-e89b-12d3-a456-426655440000"; // Discovered application\'s ID.
const val = await applicationDiscoveryBetaApi.getDiscoveredApplicationByID(id);
console.log('API called successfully.');
```
</details>


## getDiscoveredApplications

> Array&lt;GetDiscoveredApplications200ResponseInnerBeta&gt; getDiscoveredApplications(limit, offset, detail, filter, sorters)

Retrieve discovered applications for tenant

Get a list of applications that have been identified within the environment. This includes details such as application names, discovery dates, potential correlated saas_vendors and related suggested connectors. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **detail** | **&#39;SLIM&#39; | &#39;FULL&#39;**| Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. | [optional] [default to undefined]
 **filter** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)       Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource** | [optional] [default to undefined]

### Return type

[**Array&lt;GetDiscoveredApplications200ResponseInnerBeta&gt;**](../Models/GetDiscoveredApplications200ResponseInnerBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ApplicationDiscoveryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const applicationDiscoveryBetaApi = new ApplicationDiscoveryBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  detail = "FULL", // 'SLIM' | 'FULL' | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior.
  filter = "name eq "Okta" and description co "Okta" and discoverySource in ("csv", "Okta Saas")", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)       Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in* 
  sorters = "name"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource**
const val = await applicationDiscoveryBetaApi.getDiscoveredApplications(limit, offset, detail, filter, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getManualDiscoverApplicationsCsvTemplate

> ManualDiscoverApplicationsTemplateBeta getManualDiscoverApplicationsCsvTemplate()

Download CSV Template for Discovery

Download an example CSV file with two columns `application_name` and `description`.  The CSV file contains a single row with the values \'Example Application\' and \'Example Description\'.  The downloaded template is specifically designed for use with the `/manual-discover-applications` endpoint. 

### Parameters

This endpoint does not need any parameter.

### Return type

[**ManualDiscoverApplicationsTemplateBeta**](../Models/ManualDiscoverApplicationsTemplateBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ApplicationDiscoveryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const applicationDiscoveryBetaApi = new ApplicationDiscoveryBetaApi(apiConfig);
const val = await applicationDiscoveryBetaApi.getManualDiscoverApplicationsCsvTemplate();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchDiscoveredApplicationByID

> patchDiscoveredApplicationByID(id, jsonPatchOperationsBeta)

Patch Discovered Application by ID

Update an existing discovered application by using a limited version of the [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax. You can patch these fields: - **associatedSources** - **dismissed**

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Discovered application\&#39;s ID. | [default to undefined]
 **jsonPatchOperationsBeta** | [**Array&lt;JsonPatchOperationsBeta&gt;**](../Models/JsonPatchOperationsBeta.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ApplicationDiscoveryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const applicationDiscoveryBetaApi = new ApplicationDiscoveryBetaApi(apiConfig);
const id : string = "123e4567-e89b-12d3-a456-426655440000"; // Discovered application\'s ID.
const jsonPatchOperationsBeta = [{op=replace, path=/dismissed, value=true}]; // Array<JsonPatchOperationsBeta> | 
const val = await applicationDiscoveryBetaApi.patchDiscoveredApplicationByID(id, jsonPatchOperationsBeta);
console.log('API called successfully.');
```
</details>


## sendManualDiscoverApplicationsCsvTemplate

> sendManualDiscoverApplicationsCsvTemplate(file)

Upload CSV to Discover Applications

Upload a CSV file with application data for manual correlation to specific ISC connectors.  If a suitable ISC connector is unavailable, the system will recommend generic connectors instead.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The CSV file to upload containing &#x60;application_name&#x60; and &#x60;description&#x60; columns. Each row represents an application to be discovered. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ApplicationDiscoveryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const applicationDiscoveryBetaApi = new ApplicationDiscoveryBetaApi(apiConfig);
const file : File = BINARY_DATA_HERE; // The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered.
const val = await applicationDiscoveryBetaApi.sendManualDiscoverApplicationsCsvTemplate(file);
console.log('API called successfully.');
```
</details>

