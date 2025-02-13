---
title: IconsBetaApi
pagination_label: IconsBetaApi
sidebar_label: IconsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'IconsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'IconsBetaApi']
---

# IconsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteIcon**](IconsBetaApi.md#deleteIcon) | **DELETE** /icons/{objectType}/{objectId} | Delete an icon
[**setIcon**](IconsBetaApi.md#setIcon) | **PUT** /icons/{objectType}/{objectId} | Update an icon



## deleteIcon

> deleteIcon(objectType, objectId)

Delete an icon

This API endpoint delete an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **&#39;application&#39;**| Object type | [default to undefined]
 **objectId** | **string**| Object id. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IconsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iconsBetaApi = new IconsBetaApi(apiConfig);

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


const objectType : 'application' = "application"; // Object type (default to undefined)
const objectId : string = "a291e870-48c3-4953-b656-fb5ce2a93169"; // Object id. (default to undefined)

try {
    const val = await iconsBetaApi.deleteIcon(objectType, objectId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iconsBetaApi.deleteIcon(objectType, objectId);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## setIcon

> SetIcon200ResponseBeta setIcon(objectType, objectId, image)

Update an icon

This API endpoint updates an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **&#39;application&#39;**| Object type | [default to undefined]
 **objectId** | **string**| Object id. | [default to undefined]
 **image** | **File**| file with icon. Allowed mime-types [\\\&#39;image/png\\\&#39;, \\\&#39;image/jpeg\\\&#39;] | [default to undefined]

### Return type

[**SetIcon200ResponseBeta**](../Models/SetIcon200ResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IconsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iconsBetaApi = new IconsBetaApi(apiConfig);

{
  "icon" : ""
}


const objectType : 'application' = "application"; // Object type (default to undefined)
const objectId : string = "a291e870-48c3-4953-b656-fb5ce2a93169"; // Object id. (default to undefined)
const image : File = BINARY_DATA_HERE; // file with icon. Allowed mime-types [\\\'image/png\\\', \\\'image/jpeg\\\'] (default to undefined)

try {
    const val = await iconsBetaApi.setIcon(objectType, objectId, image);
    
    // Below is a request that includes all optional parameters      
    // const val = await iconsBetaApi.setIcon(objectType, objectId, image);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

