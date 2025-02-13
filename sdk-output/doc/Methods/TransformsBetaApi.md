---
title: TransformsBetaApi
pagination_label: TransformsBetaApi
sidebar_label: TransformsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'TransformsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'TransformsBetaApi']
---

# TransformsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTransform**](TransformsBetaApi.md#createTransform) | **POST** /transforms | Create transform
[**deleteTransform**](TransformsBetaApi.md#deleteTransform) | **DELETE** /transforms/{id} | Delete a transform
[**getTransform**](TransformsBetaApi.md#getTransform) | **GET** /transforms/{id} | Transform by ID
[**listTransforms**](TransformsBetaApi.md#listTransforms) | **GET** /transforms | List transforms
[**updateTransform**](TransformsBetaApi.md#updateTransform) | **PUT** /transforms/{id} | Update a transform



## createTransform

> TransformReadBeta createTransform(transformBeta)

Create transform

Creates a new transform object immediately. By default, the internal flag is set to false to indicate that this is a custom transform. Only SailPoint employees have the ability to create a transform with internal set to true. Newly created Transforms can be used in the Identity Profile mappings within the UI. A token with transform write authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transformBeta** | [**TransformBeta**](../Models/TransformBeta.md)| The transform to be created. | 

### Return type

[**TransformReadBeta**](../Models/TransformReadBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TransformsBetaApi, TransformBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const transformsBetaApi = new TransformsBetaApi(apiConfig);

{
  "internal" : false,
  "name" : "Timestamp To Date",
  "attributes" : {
    "input" : {
      "type" : "accountAttribute",
      "attributes" : {
        "attributeName" : "first_name",
        "sourceName" : "Source"
      }
    },
    "accountSortAttribute" : "created",
    "accountReturnFirstLink" : false,
    "requiresPeriodicRefresh" : false,
    "accountPropertyFilter" : "(groups.containsAll({'Admin'}) || location == 'Austin')",
    "attributeName" : "DEPARTMENT",
    "accountSortDescending" : false,
    "sourceName" : "Workday",
    "accountFilter" : "!(nativeIdentity.startsWith(\"*DELETED*\"))"
  },
  "id" : "2cd78adghjkja34jh2b1hkjhasuecd",
  "type" : "dateFormat"
}


const transformBeta : TransformBeta = 

try {
    const val = await transformsBetaApi.createTransform(transformBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await transformsBetaApi.createTransform(transformBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteTransform

> deleteTransform(id)

Delete a transform

Deletes the transform specified by the given ID. Attempting to delete a transform that is used in one or more Identity Profile mappings will result in an error. If this occurs, you must first remove the transform from all mappings before deleting the transform. A token with transform delete authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the transform to delete | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TransformsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const transformsBetaApi = new TransformsBetaApi(apiConfig);

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


const id : string = "2cd78adghjkja34jh2b1hkjhasuecd"; // ID of the transform to delete (default to undefined)

try {
    const val = await transformsBetaApi.deleteTransform(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await transformsBetaApi.deleteTransform(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getTransform

> TransformReadBeta getTransform(id)

Transform by ID

This API returns the transform specified by the given ID. A token with transform read authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the transform to retrieve | [default to undefined]

### Return type

[**TransformReadBeta**](../Models/TransformReadBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TransformsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const transformsBetaApi = new TransformsBetaApi(apiConfig);

{
  "internal" : false,
  "name" : "Timestamp To Date",
  "attributes" : {
    "input" : {
      "type" : "accountAttribute",
      "attributes" : {
        "attributeName" : "first_name",
        "sourceName" : "Source"
      }
    },
    "accountSortAttribute" : "created",
    "accountReturnFirstLink" : false,
    "requiresPeriodicRefresh" : false,
    "accountPropertyFilter" : "(groups.containsAll({'Admin'}) || location == 'Austin')",
    "attributeName" : "DEPARTMENT",
    "accountSortDescending" : false,
    "sourceName" : "Workday",
    "accountFilter" : "!(nativeIdentity.startsWith(\"*DELETED*\"))"
  },
  "id" : "2cd78adghjkja34jh2b1hkjhasuecd",
  "type" : "dateFormat"
}


const id : string = "2cd78adghjkja34jh2b1hkjhasuecd"; // ID of the transform to retrieve (default to undefined)

try {
    const val = await transformsBetaApi.getTransform(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await transformsBetaApi.getTransform(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listTransforms

> Array&lt;TransformReadBeta&gt; listTransforms(offset, limit, count, name, filters)

List transforms

Gets a list of all saved transform objects. A token with transforms-list read authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **name** | **string**| Name of the transform to retrieve from the list. | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* | [optional] [default to undefined]

### Return type

[**Array&lt;TransformReadBeta&gt;**](../Models/TransformReadBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TransformsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const transformsBetaApi = new TransformsBetaApi(apiConfig);

[ {
  "internal" : false,
  "name" : "Timestamp To Date",
  "attributes" : {
    "input" : {
      "type" : "accountAttribute",
      "attributes" : {
        "attributeName" : "first_name",
        "sourceName" : "Source"
      }
    },
    "accountSortAttribute" : "created",
    "accountReturnFirstLink" : false,
    "requiresPeriodicRefresh" : false,
    "accountPropertyFilter" : "(groups.containsAll({'Admin'}) || location == 'Austin')",
    "attributeName" : "DEPARTMENT",
    "accountSortDescending" : false,
    "sourceName" : "Workday",
    "accountFilter" : "!(nativeIdentity.startsWith(\"*DELETED*\"))"
  },
  "id" : "2cd78adghjkja34jh2b1hkjhasuecd",
  "type" : "dateFormat"
}, {
  "internal" : false,
  "name" : "Timestamp To Date",
  "attributes" : {
    "input" : {
      "type" : "accountAttribute",
      "attributes" : {
        "attributeName" : "first_name",
        "sourceName" : "Source"
      }
    },
    "accountSortAttribute" : "created",
    "accountReturnFirstLink" : false,
    "requiresPeriodicRefresh" : false,
    "accountPropertyFilter" : "(groups.containsAll({'Admin'}) || location == 'Austin')",
    "attributeName" : "DEPARTMENT",
    "accountSortDescending" : false,
    "sourceName" : "Workday",
    "accountFilter" : "!(nativeIdentity.startsWith(\"*DELETED*\"))"
  },
  "id" : "2cd78adghjkja34jh2b1hkjhasuecd",
  "type" : "dateFormat"
} ]


const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const name : string = "ExampleTransformName123"; // Name of the transform to retrieve from the list. (optional) (default to undefined)
const filters : string = "name eq "Uppercase""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* (optional) (default to undefined)

try {
    const val = await transformsBetaApi.listTransforms();
    
    // Below is a request that includes all optional parameters      
    // const val = await transformsBetaApi.listTransforms(offset, limit, count, name, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateTransform

> TransformReadBeta updateTransform(id, transformBeta)

Update a transform

Replaces the transform specified by the given ID with the transform provided in the request body. Only the \"attributes\" field is mutable. Attempting to change other properties (ex. \"name\" and \"type\") will result in an error. A token with transform write authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the transform to update | [default to undefined]
 **transformBeta** | [**TransformBeta**](../Models/TransformBeta.md)| The updated transform object. Must include \&quot;name\&quot;, \&quot;type\&quot;, and \&quot;attributes\&quot; fields, but \&quot;name\&quot; and \&quot;type\&quot; must not be modified. | [optional] 

### Return type

[**TransformReadBeta**](../Models/TransformReadBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TransformsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const transformsBetaApi = new TransformsBetaApi(apiConfig);

{
  "internal" : false,
  "name" : "Timestamp To Date",
  "attributes" : {
    "input" : {
      "type" : "accountAttribute",
      "attributes" : {
        "attributeName" : "first_name",
        "sourceName" : "Source"
      }
    },
    "accountSortAttribute" : "created",
    "accountReturnFirstLink" : false,
    "requiresPeriodicRefresh" : false,
    "accountPropertyFilter" : "(groups.containsAll({'Admin'}) || location == 'Austin')",
    "attributeName" : "DEPARTMENT",
    "accountSortDescending" : false,
    "sourceName" : "Workday",
    "accountFilter" : "!(nativeIdentity.startsWith(\"*DELETED*\"))"
  },
  "id" : "2cd78adghjkja34jh2b1hkjhasuecd",
  "type" : "dateFormat"
}


const id : string = "2cd78adghjkja34jh2b1hkjhasuecd"; // ID of the transform to update (default to undefined)
const transformBeta : TransformBeta = 

try {
    const val = await transformsBetaApi.updateTransform(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await transformsBetaApi.updateTransform(id, transformBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

