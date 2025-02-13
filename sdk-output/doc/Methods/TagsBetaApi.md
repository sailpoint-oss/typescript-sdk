---
title: TagsBetaApi
pagination_label: TagsBetaApi
sidebar_label: TagsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'TagsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'TagsBetaApi']
---

# TagsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagsBetaApi.md#createTag) | **POST** /tags | Create Tag
[**deleteTagById**](TagsBetaApi.md#deleteTagById) | **DELETE** /tags/{id} | Delete Tag
[**getTagById**](TagsBetaApi.md#getTagById) | **GET** /tags/{id} | Get Tag By Id
[**listTags**](TagsBetaApi.md#listTags) | **GET** /tags | List Tags



## createTag

> TagBeta createTag(tagBeta)

Create Tag

This API creates new tag.  A token with API, ORG_ADMIN, CERT_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagBeta** | [**TagBeta**](../Models/TagBeta.md)|  | 

### Return type

[**TagBeta**](../Models/TagBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TagsBetaApi, TagBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const tagsBetaApi = new TagsBetaApi(apiConfig);

{
  "created" : "2022-05-04T14:48:49Z",
  "tagCategoryRefs" : [ {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  }, {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  } ],
  "name" : "PCI",
  "modified" : "2022-07-14T16:31:11Z",
  "id" : "449ecdc0-d4ff-4341-acf6-92f6f7ce604f"
}


const tagBeta : TagBeta = 

try {
    const val = await tagsBetaApi.createTag(tagBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await tagsBetaApi.createTag(tagBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteTagById

> deleteTagById(id)

Delete Tag

This API deletes a tag by specified id.  A token with API, ORG_ADMIN, CERT_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the object reference to delete. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TagsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const tagsBetaApi = new TagsBetaApi(apiConfig);

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


const id : string = "329d96cf-3bdb-40a9-988a-b5037ab89022"; // The ID of the object reference to delete. (default to undefined)

try {
    const val = await tagsBetaApi.deleteTagById(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await tagsBetaApi.deleteTagById(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getTagById

> TagBeta getTagById(id)

Get Tag By Id

Returns a tag by its id.  A token with API, ORG_ADMIN, CERT_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the object reference to retrieve. | [default to undefined]

### Return type

[**TagBeta**](../Models/TagBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TagsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const tagsBetaApi = new TagsBetaApi(apiConfig);

{
  "created" : "2022-05-04T14:48:49Z",
  "tagCategoryRefs" : [ {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  }, {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  } ],
  "name" : "PCI",
  "modified" : "2022-07-14T16:31:11Z",
  "id" : "449ecdc0-d4ff-4341-acf6-92f6f7ce604f"
}


const id : string = "329d96cf-3bdb-40a9-988a-b5037ab89022"; // The ID of the object reference to retrieve. (default to undefined)

try {
    const val = await tagsBetaApi.getTagById(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await tagsBetaApi.getTagById(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listTags

> Array&lt;TagBeta&gt; listTags(limit, offset, count, filters, sorters)

List Tags

This API returns a list of tags.  A token with API, ORG_ADMIN, CERT_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;TagBeta&gt;**](../Models/TagBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TagsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const tagsBetaApi = new TagsBetaApi(apiConfig);

[ {
  "created" : "2022-05-04T14:48:49Z",
  "tagCategoryRefs" : [ {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  }, {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  } ],
  "name" : "PCI",
  "modified" : "2022-07-14T16:31:11Z",
  "id" : "449ecdc0-d4ff-4341-acf6-92f6f7ce604f"
}, {
  "created" : "2022-05-04T14:48:49Z",
  "tagCategoryRefs" : [ {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  }, {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  } ],
  "name" : "PCI",
  "modified" : "2022-07-14T16:31:11Z",
  "id" : "449ecdc0-d4ff-4341-acf6-92f6f7ce604f"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "id eq "27462f54-61c7-4140-b5da-d5dbe27fc6db""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw* (optional) (default to undefined)
const sorters : string = "name,-modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified** (optional) (default to undefined)

try {
    const val = await tagsBetaApi.listTags();
    
    // Below is a request that includes all optional parameters      
    // const val = await tagsBetaApi.listTags(limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

