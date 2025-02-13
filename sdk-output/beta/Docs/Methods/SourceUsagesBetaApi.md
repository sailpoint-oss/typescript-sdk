---
title: SourceUsagesBetaApi
pagination_label: SourceUsagesBetaApi
sidebar_label: SourceUsagesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'SourceUsagesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'SourceUsagesBetaApi']
---

# SourceUsagesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatusBySourceId**](SourceUsagesBetaApi.md#getStatusBySourceId) | **GET** /source-usages/{sourceId}/status | Finds status of source usage
[**getUsagesBySourceId**](SourceUsagesBetaApi.md#getUsagesBySourceId) | **GET** /source-usages/{sourceId}/summaries | Returns source usage insights



## getStatusBySourceId

> SourceUsageStatusBeta getStatusBySourceId(sourceId)

Finds status of source usage

This API returns the status of the source usage insights setup by IDN source ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| ID of IDN source | [default to undefined]

### Return type

[**SourceUsageStatusBeta**](../Models/SourceUsageStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourceUsagesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourceUsagesBetaApi = new SourceUsagesBetaApi(apiConfig);
const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // ID of IDN source
const val = await sourceUsagesBetaApi.getStatusBySourceId(sourceId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getUsagesBySourceId

> Array&lt;SourceUsageBeta&gt; getUsagesBySourceId(sourceId, limit, offset, count, sorters)

Returns source usage insights

This API returns a summary of source usage insights for past 12 months.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| ID of IDN source | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** | [optional] [default to undefined]

### Return type

[**Array&lt;SourceUsageBeta&gt;**](../Models/SourceUsageBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourceUsagesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourceUsagesBetaApi = new SourceUsagesBetaApi(apiConfig);
const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // ID of IDN source
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "-date"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date**
const val = await sourceUsagesBetaApi.getUsagesBySourceId(sourceId, limit, offset, count, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

