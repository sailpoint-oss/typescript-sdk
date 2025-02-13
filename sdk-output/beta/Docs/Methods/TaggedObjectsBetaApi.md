---
title: TaggedObjectsBetaApi
pagination_label: TaggedObjectsBetaApi
sidebar_label: TaggedObjectsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'TaggedObjectsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'TaggedObjectsBetaApi']
---

# TaggedObjectsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTaggedObject**](TaggedObjectsBetaApi.md#deleteTaggedObject) | **DELETE** /tagged-objects/{type}/{id} | Delete Object Tags
[**deleteTagsToManyObject**](TaggedObjectsBetaApi.md#deleteTagsToManyObject) | **POST** /tagged-objects/bulk-remove | Remove Tags from Multiple Objects
[**getTaggedObject**](TaggedObjectsBetaApi.md#getTaggedObject) | **GET** /tagged-objects/{type}/{id} | Get Tagged Object
[**listTaggedObjects**](TaggedObjectsBetaApi.md#listTaggedObjects) | **GET** /tagged-objects | List Tagged Objects
[**listTaggedObjectsByType**](TaggedObjectsBetaApi.md#listTaggedObjectsByType) | **GET** /tagged-objects/{type} | List Tagged Objects by Type
[**putTaggedObject**](TaggedObjectsBetaApi.md#putTaggedObject) | **PUT** /tagged-objects/{type}/{id} | Update Tagged Object
[**setTagToObject**](TaggedObjectsBetaApi.md#setTagToObject) | **POST** /tagged-objects | Add Tag to Object
[**setTagsToManyObjects**](TaggedObjectsBetaApi.md#setTagsToManyObjects) | **POST** /tagged-objects/bulk-add | Tag Multiple Objects



## deleteTaggedObject

> deleteTaggedObject(type, id)

Delete Object Tags

Delete all tags from a tagged object.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **&#39;ACCESS_PROFILE&#39; | &#39;APPLICATION&#39; | &#39;CAMPAIGN&#39; | &#39;ENTITLEMENT&#39; | &#39;IDENTITY&#39; | &#39;ROLE&#39; | &#39;SOD_POLICY&#39; | &#39;SOURCE&#39;**| The type of object to delete tags from. | [default to undefined]
 **id** | **string**| The ID of the object to delete tags from. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaggedObjectsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taggedObjectsBetaApi = new TaggedObjectsBetaApi(apiConfig);
const type : 'ACCESS_PROFILE' | 'APPLICATION' | 'CAMPAIGN' | 'ENTITLEMENT' | 'IDENTITY' | 'ROLE' | 'SOD_POLICY' | 'SOURCE' = "ROLE"; // The type of object to delete tags from.
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the object to delete tags from.
const val = await taggedObjectsBetaApi.deleteTaggedObject(type, id);
console.log('API called successfully.');
```
</details>


## deleteTagsToManyObject

> deleteTagsToManyObject(bulkTaggedObjectBeta)

Remove Tags from Multiple Objects

This API removes tags from multiple objects.  A token with API, CERT_ADMIN, ORG_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkTaggedObjectBeta** | [**BulkTaggedObjectBeta**](../Models/BulkTaggedObjectBeta.md)| Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE. | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaggedObjectsBetaApi, BulkTaggedObjectBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taggedObjectsBetaApi = new TaggedObjectsBetaApi(apiConfig);
const bulkTaggedObjectBeta : BulkTaggedObjectBeta = ; // Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.
const val = await taggedObjectsBetaApi.deleteTagsToManyObject(bulkTaggedObjectBeta);
console.log('API called successfully.');
```
</details>


## getTaggedObject

> TaggedObjectBeta getTaggedObject(type, id)

Get Tagged Object

This gets a tagged object for the specified type.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **&#39;ACCESS_PROFILE&#39; | &#39;APPLICATION&#39; | &#39;CAMPAIGN&#39; | &#39;ENTITLEMENT&#39; | &#39;IDENTITY&#39; | &#39;ROLE&#39; | &#39;SOD_POLICY&#39; | &#39;SOURCE&#39;**| The type of tagged object to retrieve. | [default to undefined]
 **id** | **string**| The ID of the object reference to retrieve. | [default to undefined]

### Return type

[**TaggedObjectBeta**](../Models/TaggedObjectBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaggedObjectsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taggedObjectsBetaApi = new TaggedObjectsBetaApi(apiConfig);
const type : 'ACCESS_PROFILE' | 'APPLICATION' | 'CAMPAIGN' | 'ENTITLEMENT' | 'IDENTITY' | 'ROLE' | 'SOD_POLICY' | 'SOURCE' = "ROLE"; // The type of tagged object to retrieve.
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the object reference to retrieve.
const val = await taggedObjectsBetaApi.getTaggedObject(type, id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listTaggedObjects

> Array&lt;TaggedObjectBeta&gt; listTaggedObjects(limit, offset, count, filters)

List Tagged Objects

This API returns a list of all tagged objects.  Any authenticated token may be used to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* | [optional] [default to undefined]

### Return type

[**Array&lt;TaggedObjectBeta&gt;**](../Models/TaggedObjectBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaggedObjectsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taggedObjectsBetaApi = new TaggedObjectsBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "tagName eq "BU_FINANCE""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in*
const val = await taggedObjectsBetaApi.listTaggedObjects(limit, offset, count, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listTaggedObjectsByType

> Array&lt;TaggedObjectBeta&gt; listTaggedObjectsByType(type, limit, offset, count, filters)

List Tagged Objects by Type

This API returns a list of all tagged objects by type.  Any authenticated token may be used to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **&#39;ACCESS_PROFILE&#39; | &#39;APPLICATION&#39; | &#39;CAMPAIGN&#39; | &#39;ENTITLEMENT&#39; | &#39;IDENTITY&#39; | &#39;ROLE&#39; | &#39;SOD_POLICY&#39; | &#39;SOURCE&#39;**| The type of tagged object to retrieve. | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;TaggedObjectBeta&gt;**](../Models/TaggedObjectBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaggedObjectsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taggedObjectsBetaApi = new TaggedObjectsBetaApi(apiConfig);
const type : 'ACCESS_PROFILE' | 'APPLICATION' | 'CAMPAIGN' | 'ENTITLEMENT' | 'IDENTITY' | 'ROLE' | 'SOD_POLICY' | 'SOURCE' = "ROLE"; // The type of tagged object to retrieve.
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "objectRef.id eq "2c91808568c529c60168cca6f90c1313""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq*
const val = await taggedObjectsBetaApi.listTaggedObjectsByType(type, limit, offset, count, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## putTaggedObject

> TaggedObjectBeta putTaggedObject(type, id, taggedObjectBeta)

Update Tagged Object

This updates a tagged object for the specified type.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **&#39;ACCESS_PROFILE&#39; | &#39;APPLICATION&#39; | &#39;CAMPAIGN&#39; | &#39;ENTITLEMENT&#39; | &#39;IDENTITY&#39; | &#39;ROLE&#39; | &#39;SOD_POLICY&#39; | &#39;SOURCE&#39;**| The type of tagged object to update. | [default to undefined]
 **id** | **string**| The ID of the object reference to update. | [default to undefined]
 **taggedObjectBeta** | [**TaggedObjectBeta**](../Models/TaggedObjectBeta.md)|  | 

### Return type

[**TaggedObjectBeta**](../Models/TaggedObjectBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaggedObjectsBetaApi, TaggedObjectBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taggedObjectsBetaApi = new TaggedObjectsBetaApi(apiConfig);
const type : 'ACCESS_PROFILE' | 'APPLICATION' | 'CAMPAIGN' | 'ENTITLEMENT' | 'IDENTITY' | 'ROLE' | 'SOD_POLICY' | 'SOURCE' = "ROLE"; // The type of tagged object to update.
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the object reference to update.
const taggedObjectBeta : TaggedObjectBeta = ; // 
const val = await taggedObjectsBetaApi.putTaggedObject(type, id, taggedObjectBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## setTagToObject

> setTagToObject(taggedObjectBeta)

Add Tag to Object

This adds a tag to an object.  Any authenticated token may be used to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taggedObjectBeta** | [**TaggedObjectBeta**](../Models/TaggedObjectBeta.md)|  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaggedObjectsBetaApi, TaggedObjectBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taggedObjectsBetaApi = new TaggedObjectsBetaApi(apiConfig);
const taggedObjectBeta : TaggedObjectBeta = ; // 
const val = await taggedObjectsBetaApi.setTagToObject(taggedObjectBeta);
console.log('API called successfully.');
```
</details>


## setTagsToManyObjects

> BulkTaggedObjectBeta setTagsToManyObjects(bulkTaggedObjectBeta)

Tag Multiple Objects

This API adds tags to multiple objects.  A token with API, CERT_ADMIN, ORG_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkTaggedObjectBeta** | [**BulkTaggedObjectBeta**](../Models/BulkTaggedObjectBeta.md)| Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE. | 

### Return type

[**BulkTaggedObjectBeta**](../Models/BulkTaggedObjectBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaggedObjectsBetaApi, BulkTaggedObjectBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taggedObjectsBetaApi = new TaggedObjectsBetaApi(apiConfig);
const bulkTaggedObjectBeta : BulkTaggedObjectBeta = ; // Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.
const val = await taggedObjectsBetaApi.setTagsToManyObjects(bulkTaggedObjectBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

