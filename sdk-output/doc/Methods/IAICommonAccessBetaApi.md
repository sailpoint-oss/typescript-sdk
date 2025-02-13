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

{
  "lastUpdated" : "lastUpdated",
  "access" : {
    "ownerName" : "ownerName",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "type" : "ACCESS_PROFILE",
    "ownerId" : "ownerId"
  },
  "createdByUser" : "createdByUser",
  "id" : "id",
  "reviewedByUser" : true,
  "status" : "CONFIRMED",
  "lastReviewed" : "lastReviewed"
}


const commonAccessItemRequestBeta : CommonAccessItemRequestBeta = 

try {
    const val = await iAICommonAccessBetaApi.createCommonAccess(commonAccessItemRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAICommonAccessBetaApi.createCommonAccess(commonAccessItemRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "lastUpdated" : "2000-01-23T04:56:07.000+00:00",
  "access" : {
    "ownerName" : "ownerName",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "type" : "ACCESS_PROFILE",
    "ownerId" : "ownerId"
  },
  "createdByUser" : false,
  "commonAccessType" : "UNSET",
  "id" : "555ab47a-0d32-4813-906f-adf3567de6a4",
  "reviewedByUser" : true,
  "status" : "status",
  "lastReviewed" : "2000-01-23T04:56:07.000+00:00"
}, {
  "lastUpdated" : "2000-01-23T04:56:07.000+00:00",
  "access" : {
    "ownerName" : "ownerName",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "type" : "ACCESS_PROFILE",
    "ownerId" : "ownerId"
  },
  "createdByUser" : false,
  "commonAccessType" : "UNSET",
  "id" : "555ab47a-0d32-4813-906f-adf3567de6a4",
  "reviewedByUser" : true,
  "status" : "status",
  "lastReviewed" : "2000-01-23T04:56:07.000+00:00"
} ]


const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "access.type eq "ROLE""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, sw*  **reviewedByUser** *eq*  **access.id**: *eq, sw*  **access.type**: *eq*  **access.name**: *sw, eq*  **access.description**: *sw, eq* (optional) (default to undefined)
const sorters : string = "access.name"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, status**  By default the common access items are sorted by name, ascending. (optional) (default to undefined)

try {
    const val = await iAICommonAccessBetaApi.getCommonAccess();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAICommonAccessBetaApi.getCommonAccess(offset, limit, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const commonAccessIDStatusBeta : Array<CommonAccessIDStatusBeta> = ; // Confirm or deny in bulk the common access ids that are (or aren\'t) common access

try {
    const val = await iAICommonAccessBetaApi.updateCommonAccessStatusInBulk(commonAccessIDStatusBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAICommonAccessBetaApi.updateCommonAccessStatusInBulk(commonAccessIDStatusBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

