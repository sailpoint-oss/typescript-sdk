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


const type : 'ACCESS_PROFILE' | 'APPLICATION' | 'CAMPAIGN' | 'ENTITLEMENT' | 'IDENTITY' | 'ROLE' | 'SOD_POLICY' | 'SOURCE' = "ROLE"; // The type of object to delete tags from. (default to undefined)
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the object to delete tags from. (default to undefined)

try {
    const val = await taggedObjectsBetaApi.deleteTaggedObject(type, id);
    
    // Below is a request that includes all optional parameters      
    // const val = await taggedObjectsBetaApi.deleteTaggedObject(type, id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const bulkTaggedObjectBeta : BulkTaggedObjectBeta = 

try {
    const val = await taggedObjectsBetaApi.deleteTagsToManyObject(bulkTaggedObjectBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await taggedObjectsBetaApi.deleteTagsToManyObject(bulkTaggedObjectBeta);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "objectRef" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "tags" : [ "BU_FINANCE", "PCI" ]
}


const type : 'ACCESS_PROFILE' | 'APPLICATION' | 'CAMPAIGN' | 'ENTITLEMENT' | 'IDENTITY' | 'ROLE' | 'SOD_POLICY' | 'SOURCE' = "ROLE"; // The type of tagged object to retrieve. (default to undefined)
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the object reference to retrieve. (default to undefined)

try {
    const val = await taggedObjectsBetaApi.getTaggedObject(type, id);
    
    // Below is a request that includes all optional parameters      
    // const val = await taggedObjectsBetaApi.getTaggedObject(type, id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "objectRef" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "tags" : [ "BU_FINANCE", "PCI" ]
}, {
  "objectRef" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "tags" : [ "BU_FINANCE", "PCI" ]
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "tagName eq "BU_FINANCE""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* (optional) (default to undefined)

try {
    const val = await taggedObjectsBetaApi.listTaggedObjects();
    
    // Below is a request that includes all optional parameters      
    // const val = await taggedObjectsBetaApi.listTaggedObjects(limit, offset, count, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "objectRef" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "tags" : [ "BU_FINANCE", "PCI" ]
}, {
  "objectRef" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "tags" : [ "BU_FINANCE", "PCI" ]
} ]


const type : 'ACCESS_PROFILE' | 'APPLICATION' | 'CAMPAIGN' | 'ENTITLEMENT' | 'IDENTITY' | 'ROLE' | 'SOD_POLICY' | 'SOURCE' = "ROLE"; // The type of tagged object to retrieve. (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "objectRef.id eq "2c91808568c529c60168cca6f90c1313""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* (optional) (default to undefined)

try {
    const val = await taggedObjectsBetaApi.listTaggedObjectsByType(type);
    
    // Below is a request that includes all optional parameters      
    // const val = await taggedObjectsBetaApi.listTaggedObjectsByType(type, limit, offset, count, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "objectRef" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "tags" : [ "BU_FINANCE", "PCI" ]
}


const type : 'ACCESS_PROFILE' | 'APPLICATION' | 'CAMPAIGN' | 'ENTITLEMENT' | 'IDENTITY' | 'ROLE' | 'SOD_POLICY' | 'SOURCE' = "ROLE"; // The type of tagged object to update. (default to undefined)
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the object reference to update. (default to undefined)
const taggedObjectBeta : TaggedObjectBeta = 

try {
    const val = await taggedObjectsBetaApi.putTaggedObject(type, id, taggedObjectBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await taggedObjectsBetaApi.putTaggedObject(type, id, taggedObjectBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const taggedObjectBeta : TaggedObjectBeta = 

try {
    const val = await taggedObjectsBetaApi.setTagToObject(taggedObjectBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await taggedObjectsBetaApi.setTagToObject(taggedObjectBeta);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "objectRefs" : [ {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  }, {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  } ],
  "operation" : "MERGE",
  "tags" : [ "BU_FINANCE", "PCI" ]
}


const bulkTaggedObjectBeta : BulkTaggedObjectBeta = 

try {
    const val = await taggedObjectsBetaApi.setTagsToManyObjects(bulkTaggedObjectBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await taggedObjectsBetaApi.setTagsToManyObjects(bulkTaggedObjectBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

