---
title: ServiceDeskIntegrationBetaApi
pagination_label: ServiceDeskIntegrationBetaApi
sidebar_label: ServiceDeskIntegrationBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'ServiceDeskIntegrationBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationBetaApi']
---

# ServiceDeskIntegrationBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServiceDeskIntegration**](ServiceDeskIntegrationBetaApi.md#createServiceDeskIntegration) | **POST** /service-desk-integrations | Create new Service Desk integration
[**deleteServiceDeskIntegration**](ServiceDeskIntegrationBetaApi.md#deleteServiceDeskIntegration) | **DELETE** /service-desk-integrations/{id} | Delete a Service Desk integration
[**getServiceDeskIntegration**](ServiceDeskIntegrationBetaApi.md#getServiceDeskIntegration) | **GET** /service-desk-integrations/{id} | Get a Service Desk integration
[**getServiceDeskIntegrationList**](ServiceDeskIntegrationBetaApi.md#getServiceDeskIntegrationList) | **GET** /service-desk-integrations | List existing Service Desk integrations
[**getServiceDeskIntegrationTemplate**](ServiceDeskIntegrationBetaApi.md#getServiceDeskIntegrationTemplate) | **GET** /service-desk-integrations/templates/{scriptName} | Service Desk integration template by scriptName
[**getServiceDeskIntegrationTypes**](ServiceDeskIntegrationBetaApi.md#getServiceDeskIntegrationTypes) | **GET** /service-desk-integrations/types | List Service Desk integration types
[**getStatusCheckDetails**](ServiceDeskIntegrationBetaApi.md#getStatusCheckDetails) | **GET** /service-desk-integrations/status-check-configuration | Get the time check configuration
[**patchServiceDeskIntegration**](ServiceDeskIntegrationBetaApi.md#patchServiceDeskIntegration) | **PATCH** /service-desk-integrations/{id} | Patch a Service Desk Integration
[**putServiceDeskIntegration**](ServiceDeskIntegrationBetaApi.md#putServiceDeskIntegration) | **PUT** /service-desk-integrations/{id} | Update a Service Desk integration
[**updateStatusCheckDetails**](ServiceDeskIntegrationBetaApi.md#updateStatusCheckDetails) | **PUT** /service-desk-integrations/status-check-configuration | Update the time check configuration



## createServiceDeskIntegration

> ServiceDeskIntegrationDtoBeta createServiceDeskIntegration(serviceDeskIntegrationDtoBeta)

Create new Service Desk integration

Create a new Service Desk integration.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceDeskIntegrationDtoBeta** | [**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)| The specifics of a new integration to create | 

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi, ServiceDeskIntegrationDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);
const serviceDeskIntegrationDtoBeta : ServiceDeskIntegrationDtoBeta = ; // The specifics of a new integration to create
const val = await serviceDeskIntegrationBetaApi.createServiceDeskIntegration(serviceDeskIntegrationDtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteServiceDeskIntegration

> deleteServiceDeskIntegration(id)

Delete a Service Desk integration

Delete an existing Service Desk integration by ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of Service Desk integration to delete | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);
const id : string = "anId"; // ID of Service Desk integration to delete
const val = await serviceDeskIntegrationBetaApi.deleteServiceDeskIntegration(id);
console.log('API called successfully.');
```
</details>


## getServiceDeskIntegration

> ServiceDeskIntegrationDtoBeta getServiceDeskIntegration(id)

Get a Service Desk integration

Get an existing Service Desk integration by ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Service Desk integration to get | [default to undefined]

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);
const id : string = "anId"; // ID of the Service Desk integration to get
const val = await serviceDeskIntegrationBetaApi.getServiceDeskIntegration(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getServiceDeskIntegrationList

> Array&lt;ServiceDeskIntegrationDtoBeta&gt; getServiceDeskIntegrationList(offset, limit, sorters, filters, count)

List existing Service Desk integrations

Get a list of Service Desk integration objects.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* | [optional] [default to undefined]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;ServiceDeskIntegrationDtoBeta&gt;**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);
const offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "name", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  filters = "id eq 2c91808b6ef1d43e016efba0ce470904", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in*
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await serviceDeskIntegrationBetaApi.getServiceDeskIntegrationList(offset, limit, sorters, filters, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getServiceDeskIntegrationTemplate

> ServiceDeskIntegrationTemplateDtoBeta getServiceDeskIntegrationTemplate(scriptName)

Service Desk integration template by scriptName

This API endpoint returns an existing Service Desk integration template by scriptName.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scriptName** | **string**| The scriptName value of the Service Desk integration template to get | [default to undefined]

### Return type

[**ServiceDeskIntegrationTemplateDtoBeta**](../Models/ServiceDeskIntegrationTemplateDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);
const scriptName : string = "aScriptName"; // The scriptName value of the Service Desk integration template to get
const val = await serviceDeskIntegrationBetaApi.getServiceDeskIntegrationTemplate(scriptName);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getServiceDeskIntegrationTypes

> Array&lt;ServiceDeskIntegrationTemplateTypeBeta&gt; getServiceDeskIntegrationTypes()

List Service Desk integration types

This API endpoint returns the current list of supported Service Desk integration types.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ServiceDeskIntegrationTemplateTypeBeta&gt;**](../Models/ServiceDeskIntegrationTemplateTypeBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);
const val = await serviceDeskIntegrationBetaApi.getServiceDeskIntegrationTypes();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getStatusCheckDetails

> QueuedCheckConfigDetailsBeta getStatusCheckDetails()

Get the time check configuration

Get the time check configuration of queued SDIM tickets.

### Parameters

This endpoint does not need any parameter.

### Return type

[**QueuedCheckConfigDetailsBeta**](../Models/QueuedCheckConfigDetailsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);
const val = await serviceDeskIntegrationBetaApi.getStatusCheckDetails();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchServiceDeskIntegration

> ServiceDeskIntegrationDtoBeta patchServiceDeskIntegration(id, patchServiceDeskIntegrationRequestBeta)

Patch a Service Desk Integration

Update an existing Service Desk integration by ID with a PATCH request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Service Desk integration to update | [default to undefined]
 **patchServiceDeskIntegrationRequestBeta** | [**PatchServiceDeskIntegrationRequestBeta**](../Models/PatchServiceDeskIntegrationRequestBeta.md)| A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only &#x60;replace&#x60; operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed.  | 

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi, PatchServiceDeskIntegrationRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);
const id : string = "anId"; // ID of the Service Desk integration to update
const patchServiceDeskIntegrationRequestBeta : PatchServiceDeskIntegrationRequestBeta = ; // A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only `replace` operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed. 
const val = await serviceDeskIntegrationBetaApi.patchServiceDeskIntegration(id, patchServiceDeskIntegrationRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## putServiceDeskIntegration

> ServiceDeskIntegrationDtoBeta putServiceDeskIntegration(id, serviceDeskIntegrationDtoBeta)

Update a Service Desk integration

Update an existing Service Desk integration by ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Service Desk integration to update | [default to undefined]
 **serviceDeskIntegrationDtoBeta** | [**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)| The specifics of the integration to update | 

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi, ServiceDeskIntegrationDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);
const id : string = "anId"; // ID of the Service Desk integration to update
const serviceDeskIntegrationDtoBeta : ServiceDeskIntegrationDtoBeta = ; // The specifics of the integration to update
const val = await serviceDeskIntegrationBetaApi.putServiceDeskIntegration(id, serviceDeskIntegrationDtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updateStatusCheckDetails

> QueuedCheckConfigDetailsBeta updateStatusCheckDetails(queuedCheckConfigDetailsBeta)

Update the time check configuration

Update the time check configuration of queued SDIM tickets.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queuedCheckConfigDetailsBeta** | [**QueuedCheckConfigDetailsBeta**](../Models/QueuedCheckConfigDetailsBeta.md)| The modified time check configuration | 

### Return type

[**QueuedCheckConfigDetailsBeta**](../Models/QueuedCheckConfigDetailsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi, QueuedCheckConfigDetailsBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);
const queuedCheckConfigDetailsBeta : QueuedCheckConfigDetailsBeta = ; // The modified time check configuration
const val = await serviceDeskIntegrationBetaApi.updateStatusCheckDetails(queuedCheckConfigDetailsBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

