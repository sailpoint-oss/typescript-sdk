---
title: IAICommonAccessBetaApi
pagination_label: IAICommonAccessBetaApi
sidebar_label: IAICommonAccessBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'IAICommonAccessBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'IAICommonAccessBetaApi']
---

# IAICommonAccessBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCommonAccess**](IAICommonAccessBetaApi.md#createCommonAccess) | **POST** /common-access | Create common access items
[**getCommonAccess**](IAICommonAccessBetaApi.md#getCommonAccess) | **GET** /common-access | Get a paginated list of common access
[**updateCommonAccessStatusInBulk**](IAICommonAccessBetaApi.md#updateCommonAccessStatusInBulk) | **POST** /common-access/update-status | Bulk update common access status



## createCommonAccess

> CommonAccessItemResponseBeta createCommonAccess(commonAccessItemRequestBeta)

Create common access items

This API is used to add roles/access profiles to the list of common access for a customer. Requires authorization scope of iai:access-modeling:create

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commonAccessItemRequestBeta** | [**CommonAccessItemRequestBeta**](../Models/CommonAccessItemRequestBeta.md)|  | 

### Return type

[**CommonAccessItemResponseBeta**](../Models/CommonAccessItemResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAICommonAccessBetaApi, CommonAccessItemRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAICommonAccessBetaApi = new IAICommonAccessBetaApi(apiConfig);
const commonAccessItemRequestBeta : CommonAccessItemRequestBeta = ; // 
const val = await iAICommonAccessBetaApi.createCommonAccess(commonAccessItemRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getCommonAccess

> Array&lt;CommonAccessResponseBeta&gt; getCommonAccess(offset, limit, count, filters, sorters)

Get a paginated list of common access

This endpoint returns the current common access for a customer. The returned items can be filtered and sorted. Requires authorization scope of iai:access-modeling:read

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, sw*  **reviewedByUser** *eq*  **access.id**: *eq, sw*  **access.type**: *eq*  **access.name**: *sw, eq*  **access.description**: *sw, eq* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, status**  By default the common access items are sorted by name, ascending. | [optional] [default to undefined]

### Return type

[**Array&lt;CommonAccessResponseBeta&gt;**](../Models/CommonAccessResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAICommonAccessBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAICommonAccessBetaApi = new IAICommonAccessBetaApi(apiConfig);
const offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "access.type eq "ROLE"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, sw*  **reviewedByUser** *eq*  **access.id**: *eq, sw*  **access.type**: *eq*  **access.name**: *sw, eq*  **access.description**: *sw, eq*
  sorters = "access.name"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, status**  By default the common access items are sorted by name, ascending.
const val = await iAICommonAccessBetaApi.getCommonAccess(offset, limit, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updateCommonAccessStatusInBulk

> object updateCommonAccessStatusInBulk(commonAccessIDStatusBeta)

Bulk update common access status

This submits an update request to the common access application. At this time there are no parameters. Requires authorization scope of iai:access-modeling:update

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commonAccessIDStatusBeta** | [**Array&lt;CommonAccessIDStatusBeta&gt;**](../Models/CommonAccessIDStatusBeta.md)| Confirm or deny in bulk the common access ids that are (or aren\&#39;t) common access | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAICommonAccessBetaApi, CommonAccessIDStatusBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAICommonAccessBetaApi = new IAICommonAccessBetaApi(apiConfig);
const commonAccessIDStatusBeta : Array<CommonAccessIDStatusBeta> = ; // Confirm or deny in bulk the common access ids that are (or aren\'t) common access
const val = await iAICommonAccessBetaApi.updateCommonAccessStatusInBulk(commonAccessIDStatusBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

