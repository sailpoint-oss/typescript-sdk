---
title: IAIAccessRequestRecommendationsBetaApi
pagination_label: IAIAccessRequestRecommendationsBetaApi
sidebar_label: IAIAccessRequestRecommendationsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'IAIAccessRequestRecommendationsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'IAIAccessRequestRecommendationsBetaApi']
---

# IAIAccessRequestRecommendationsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAccessRequestRecommendationsIgnoredItem**](IAIAccessRequestRecommendationsBetaApi.md#addAccessRequestRecommendationsIgnoredItem) | **POST** /ai-access-request-recommendations/ignored-items | Notification of Ignored Access Request Recommendations
[**addAccessRequestRecommendationsRequestedItem**](IAIAccessRequestRecommendationsBetaApi.md#addAccessRequestRecommendationsRequestedItem) | **POST** /ai-access-request-recommendations/requested-items | Notification of Requested Access Request Recommendations
[**addAccessRequestRecommendationsViewedItem**](IAIAccessRequestRecommendationsBetaApi.md#addAccessRequestRecommendationsViewedItem) | **POST** /ai-access-request-recommendations/viewed-items | Notification of Viewed Access Request Recommendations
[**addAccessRequestRecommendationsViewedItems**](IAIAccessRequestRecommendationsBetaApi.md#addAccessRequestRecommendationsViewedItems) | **POST** /ai-access-request-recommendations/viewed-items/bulk-create | Notification of Viewed Access Request Recommendations in Bulk
[**getAccessRequestRecommendations**](IAIAccessRequestRecommendationsBetaApi.md#getAccessRequestRecommendations) | **GET** /ai-access-request-recommendations | Identity Access Request Recommendations
[**getAccessRequestRecommendationsIgnoredItems**](IAIAccessRequestRecommendationsBetaApi.md#getAccessRequestRecommendationsIgnoredItems) | **GET** /ai-access-request-recommendations/ignored-items | List of Ignored Access Request Recommendations
[**getAccessRequestRecommendationsRequestedItems**](IAIAccessRequestRecommendationsBetaApi.md#getAccessRequestRecommendationsRequestedItems) | **GET** /ai-access-request-recommendations/requested-items | List of Requested Access Request Recommendations
[**getAccessRequestRecommendationsViewedItems**](IAIAccessRequestRecommendationsBetaApi.md#getAccessRequestRecommendationsViewedItems) | **GET** /ai-access-request-recommendations/viewed-items | List of Viewed Access Request Recommendations



## addAccessRequestRecommendationsIgnoredItem

> AccessRequestRecommendationActionItemResponseDtoBeta addAccessRequestRecommendationsIgnoredItem(accessRequestRecommendationActionItemDtoBeta)

Notification of Ignored Access Request Recommendations

This API ignores a recommended access request item. Once an item is ignored, it will be marked as ignored=true if it is still a recommended item. The consumer can decide to hide ignored recommendations.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessRequestRecommendationActionItemDtoBeta** | [**AccessRequestRecommendationActionItemDtoBeta**](../Models/AccessRequestRecommendationActionItemDtoBeta.md)| The recommended access item to ignore for an identity. | 

### Return type

[**AccessRequestRecommendationActionItemResponseDtoBeta**](../Models/AccessRequestRecommendationActionItemResponseDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIAccessRequestRecommendationsBetaApi, AccessRequestRecommendationActionItemDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIAccessRequestRecommendationsBetaApi = new IAIAccessRequestRecommendationsBetaApi(apiConfig);

{
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9",
  "timestamp" : "2017-07-11T18:45:37.098Z"
}


const accessRequestRecommendationActionItemDtoBeta : AccessRequestRecommendationActionItemDtoBeta = 

try {
    const val = await iAIAccessRequestRecommendationsBetaApi.addAccessRequestRecommendationsIgnoredItem(accessRequestRecommendationActionItemDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIAccessRequestRecommendationsBetaApi.addAccessRequestRecommendationsIgnoredItem(accessRequestRecommendationActionItemDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## addAccessRequestRecommendationsRequestedItem

> AccessRequestRecommendationActionItemResponseDtoBeta addAccessRequestRecommendationsRequestedItem(accessRequestRecommendationActionItemDtoBeta)

Notification of Requested Access Request Recommendations

This API consumes a notification that a recommended access request item was requested. This API does not actually make the request, it is just a notification. This will help provide feedback in order to improve our recommendations.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessRequestRecommendationActionItemDtoBeta** | [**AccessRequestRecommendationActionItemDtoBeta**](../Models/AccessRequestRecommendationActionItemDtoBeta.md)| The recommended access item that was requested for an identity. | 

### Return type

[**AccessRequestRecommendationActionItemResponseDtoBeta**](../Models/AccessRequestRecommendationActionItemResponseDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIAccessRequestRecommendationsBetaApi, AccessRequestRecommendationActionItemDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIAccessRequestRecommendationsBetaApi = new IAIAccessRequestRecommendationsBetaApi(apiConfig);

{
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9",
  "timestamp" : "2017-07-11T18:45:37.098Z"
}


const accessRequestRecommendationActionItemDtoBeta : AccessRequestRecommendationActionItemDtoBeta = 

try {
    const val = await iAIAccessRequestRecommendationsBetaApi.addAccessRequestRecommendationsRequestedItem(accessRequestRecommendationActionItemDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIAccessRequestRecommendationsBetaApi.addAccessRequestRecommendationsRequestedItem(accessRequestRecommendationActionItemDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## addAccessRequestRecommendationsViewedItem

> AccessRequestRecommendationActionItemResponseDtoBeta addAccessRequestRecommendationsViewedItem(accessRequestRecommendationActionItemDtoBeta)

Notification of Viewed Access Request Recommendations

This API consumes a notification that a recommended access request item was viewed. Future recommendations with this item will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessRequestRecommendationActionItemDtoBeta** | [**AccessRequestRecommendationActionItemDtoBeta**](../Models/AccessRequestRecommendationActionItemDtoBeta.md)| The recommended access that was viewed for an identity. | 

### Return type

[**AccessRequestRecommendationActionItemResponseDtoBeta**](../Models/AccessRequestRecommendationActionItemResponseDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIAccessRequestRecommendationsBetaApi, AccessRequestRecommendationActionItemDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIAccessRequestRecommendationsBetaApi = new IAIAccessRequestRecommendationsBetaApi(apiConfig);

{
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9",
  "timestamp" : "2017-07-11T18:45:37.098Z"
}


const accessRequestRecommendationActionItemDtoBeta : AccessRequestRecommendationActionItemDtoBeta = 

try {
    const val = await iAIAccessRequestRecommendationsBetaApi.addAccessRequestRecommendationsViewedItem(accessRequestRecommendationActionItemDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIAccessRequestRecommendationsBetaApi.addAccessRequestRecommendationsViewedItem(accessRequestRecommendationActionItemDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## addAccessRequestRecommendationsViewedItems

> Array&lt;AccessRequestRecommendationActionItemResponseDtoBeta&gt; addAccessRequestRecommendationsViewedItems(accessRequestRecommendationActionItemDtoBeta)

Notification of Viewed Access Request Recommendations in Bulk

This API consumes a notification that a set of recommended access request item were viewed. Future recommendations with these items will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessRequestRecommendationActionItemDtoBeta** | [**Array&lt;AccessRequestRecommendationActionItemDtoBeta&gt;**](../Models/AccessRequestRecommendationActionItemDtoBeta.md)| The recommended access items that were viewed for an identity. | 

### Return type

[**Array&lt;AccessRequestRecommendationActionItemResponseDtoBeta&gt;**](../Models/AccessRequestRecommendationActionItemResponseDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIAccessRequestRecommendationsBetaApi, AccessRequestRecommendationActionItemDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIAccessRequestRecommendationsBetaApi = new IAIAccessRequestRecommendationsBetaApi(apiConfig);

[ {
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9",
  "timestamp" : "2017-07-11T18:45:37.098Z"
}, {
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9",
  "timestamp" : "2017-07-11T18:45:37.098Z"
} ]


const accessRequestRecommendationActionItemDtoBeta : Array<AccessRequestRecommendationActionItemDtoBeta> = ; // The recommended access items that were viewed for an identity.

try {
    const val = await iAIAccessRequestRecommendationsBetaApi.addAccessRequestRecommendationsViewedItems(accessRequestRecommendationActionItemDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIAccessRequestRecommendationsBetaApi.addAccessRequestRecommendationsViewedItems(accessRequestRecommendationActionItemDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getAccessRequestRecommendations

> Array&lt;AccessRequestRecommendationItemDetailBeta&gt; getAccessRequestRecommendations(identityId, limit, offset, count, includeTranslationMessages, filters, sorters)

Identity Access Request Recommendations

This API returns the access request recommendations for the specified identity. The default identity is *me* which indicates the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| Get access request recommendations for an identityId. *me* indicates the current user. | [optional] [default to &#39;me&#39;]
 **limit** | **number**| Max number of results to return. | [optional] [default to 15]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **includeTranslationMessages** | **boolean**| If *true* it will populate a list of translation messages in the response. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. | [optional] [default to undefined]

### Return type

[**Array&lt;AccessRequestRecommendationItemDetailBeta&gt;**](../Models/AccessRequestRecommendationItemDetailBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIAccessRequestRecommendationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIAccessRequestRecommendationsBetaApi = new IAIAccessRequestRecommendationsBetaApi(apiConfig);

[ {
  "ignored" : true,
  "requested" : true,
  "access" : {
    "name" : "Employee-database-read-write",
    "description" : "This item grants an employee read and write access to the database",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "translationMessages" : [ {
    "key" : "recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH",
    "values" : [ "75", "department" ]
  } ],
  "identityId" : "2c91808570313110017040b06f344ec9",
  "viewed" : true,
  "messages" : [ {
    "interpretation" : "95% of your peers have this access."
  }, {
    "interpretation" : "95% of your peers have this access."
  } ]
}, {
  "ignored" : true,
  "requested" : true,
  "access" : {
    "name" : "Employee-database-read-write",
    "description" : "This item grants an employee read and write access to the database",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "translationMessages" : [ {
    "key" : "recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH",
    "values" : [ "75", "department" ]
  } ],
  "identityId" : "2c91808570313110017040b06f344ec9",
  "viewed" : true,
  "messages" : [ {
    "interpretation" : "95% of your peers have this access."
  }, {
    "interpretation" : "95% of your peers have this access."
  } ]
} ]


const identityId : string = "2c91808570313110017040b06f344ec9"; // Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to 'me')
const limit : number = 56; // Max number of results to return. (optional) (default to 15)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const includeTranslationMessages : boolean = false; // If *true* it will populate a list of translation messages in the response. (optional) (default to false)
const filters : string = "access.name co "admin""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional) (default to undefined)
const sorters : string = "sorters_example"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional) (default to undefined)

try {
    const val = await iAIAccessRequestRecommendationsBetaApi.getAccessRequestRecommendations();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIAccessRequestRecommendationsBetaApi.getAccessRequestRecommendations(identityId, limit, offset, count, includeTranslationMessages, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getAccessRequestRecommendationsIgnoredItems

> Array&lt;AccessRequestRecommendationActionItemResponseDtoBeta&gt; getAccessRequestRecommendationsIgnoredItems(limit, offset, count, filters, sorters)

List of Ignored Access Request Recommendations

This API returns the list of ignored access request recommendations.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** | [optional] [default to undefined]

### Return type

[**Array&lt;AccessRequestRecommendationActionItemResponseDtoBeta&gt;**](../Models/AccessRequestRecommendationActionItemResponseDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIAccessRequestRecommendationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIAccessRequestRecommendationsBetaApi = new IAIAccessRequestRecommendationsBetaApi(apiConfig);

[ {
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9",
  "timestamp" : "2017-07-11T18:45:37.098Z"
}, {
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9",
  "timestamp" : "2017-07-11T18:45:37.098Z"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "identityId eq "2c9180846b0a0583016b299f210c1314""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) (default to undefined)
const sorters : string = "access.id"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) (default to undefined)

try {
    const val = await iAIAccessRequestRecommendationsBetaApi.getAccessRequestRecommendationsIgnoredItems();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIAccessRequestRecommendationsBetaApi.getAccessRequestRecommendationsIgnoredItems(limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getAccessRequestRecommendationsRequestedItems

> Array&lt;AccessRequestRecommendationActionItemResponseDtoBeta&gt; getAccessRequestRecommendationsRequestedItems(limit, offset, count, filters, sorters)

List of Requested Access Request Recommendations

This API returns a list of requested access request recommendations.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** | [optional] [default to undefined]

### Return type

[**Array&lt;AccessRequestRecommendationActionItemResponseDtoBeta&gt;**](../Models/AccessRequestRecommendationActionItemResponseDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIAccessRequestRecommendationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIAccessRequestRecommendationsBetaApi = new IAIAccessRequestRecommendationsBetaApi(apiConfig);

[ {
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9",
  "timestamp" : "2017-07-11T18:45:37.098Z"
}, {
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9",
  "timestamp" : "2017-07-11T18:45:37.098Z"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "access.id eq "2c9180846b0a0583016b299f210c1314""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) (default to undefined)
const sorters : string = "sorters_example"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) (default to undefined)

try {
    const val = await iAIAccessRequestRecommendationsBetaApi.getAccessRequestRecommendationsRequestedItems();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIAccessRequestRecommendationsBetaApi.getAccessRequestRecommendationsRequestedItems(limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getAccessRequestRecommendationsViewedItems

> Array&lt;AccessRequestRecommendationActionItemResponseDtoBeta&gt; getAccessRequestRecommendationsViewedItems(limit, offset, count, filters, sorters)

List of Viewed Access Request Recommendations

This API returns the list of viewed access request recommendations.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** | [optional] [default to undefined]

### Return type

[**Array&lt;AccessRequestRecommendationActionItemResponseDtoBeta&gt;**](../Models/AccessRequestRecommendationActionItemResponseDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIAccessRequestRecommendationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIAccessRequestRecommendationsBetaApi = new IAIAccessRequestRecommendationsBetaApi(apiConfig);

[ {
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9",
  "timestamp" : "2017-07-11T18:45:37.098Z"
}, {
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9",
  "timestamp" : "2017-07-11T18:45:37.098Z"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "access.id eq "2c9180846b0a0583016b299f210c1314""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) (default to undefined)
const sorters : string = "sorters_example"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) (default to undefined)

try {
    const val = await iAIAccessRequestRecommendationsBetaApi.getAccessRequestRecommendationsViewedItems();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIAccessRequestRecommendationsBetaApi.getAccessRequestRecommendationsViewedItems(limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

