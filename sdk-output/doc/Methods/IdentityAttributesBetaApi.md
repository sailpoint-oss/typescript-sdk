---
title: IdentityAttributesBetaApi
pagination_label: IdentityAttributesBetaApi
sidebar_label: IdentityAttributesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'IdentityAttributesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesBetaApi']
---

# IdentityAttributesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIdentityAttribute**](IdentityAttributesBetaApi.md#createIdentityAttribute) | **POST** /identity-attributes | Create Identity Attribute
[**deleteIdentityAttribute**](IdentityAttributesBetaApi.md#deleteIdentityAttribute) | **DELETE** /identity-attributes/{name} | Delete Identity Attribute
[**deleteIdentityAttributesInBulk**](IdentityAttributesBetaApi.md#deleteIdentityAttributesInBulk) | **DELETE** /identity-attributes/bulk-delete | Bulk delete Identity Attributes
[**getIdentityAttribute**](IdentityAttributesBetaApi.md#getIdentityAttribute) | **GET** /identity-attributes/{name} | Get Identity Attribute
[**listIdentityAttributes**](IdentityAttributesBetaApi.md#listIdentityAttributes) | **GET** /identity-attributes | List Identity Attributes
[**putIdentityAttribute**](IdentityAttributesBetaApi.md#putIdentityAttribute) | **PUT** /identity-attributes/{name} | Update Identity Attribute



## createIdentityAttribute

> IdentityAttributeBeta createIdentityAttribute(identityAttributeBeta)

Create Identity Attribute

Use this API to create a new identity attribute.   A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityAttributeBeta** | [**IdentityAttributeBeta**](../Models/IdentityAttributeBeta.md)|  | 

### Return type

[**IdentityAttributeBeta**](../Models/IdentityAttributeBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityAttributesBetaApi, IdentityAttributeBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityAttributesBetaApi = new IdentityAttributesBetaApi(apiConfig);

{
  "standard" : false,
  "system" : false,
  "sources" : [ {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  }, {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  } ],
  "displayName" : "Cost Center",
  "name" : "costCenter",
  "type" : "string",
  "searchable" : false,
  "multi" : false
}


const identityAttributeBeta : IdentityAttributeBeta = 

try {
    const val = await identityAttributesBetaApi.createIdentityAttribute(identityAttributeBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityAttributesBetaApi.createIdentityAttribute(identityAttributeBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteIdentityAttribute

> deleteIdentityAttribute(name)

Delete Identity Attribute

This deletes an identity attribute with the given name.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.   A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The attribute\&#39;s technical name. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityAttributesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityAttributesBetaApi = new IdentityAttributesBetaApi(apiConfig);

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


const name : string = "displayName"; // The attribute\'s technical name. (default to undefined)

try {
    const val = await identityAttributesBetaApi.deleteIdentityAttribute(name);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityAttributesBetaApi.deleteIdentityAttribute(name);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteIdentityAttributesInBulk

> deleteIdentityAttributesInBulk(identityAttributeNamesBeta)

Bulk delete Identity Attributes

Use this API to bulk delete identity attributes for a given set of names. Attributes that are currently mapped in an identity profile cannot be deleted.  The `system` and `standard` properties must be set to \'false\' before you can delete an identity attribute.   A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityAttributeNamesBeta** | [**IdentityAttributeNamesBeta**](../Models/IdentityAttributeNamesBeta.md)|  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityAttributesBetaApi, IdentityAttributeNamesBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityAttributesBetaApi = new IdentityAttributesBetaApi(apiConfig);

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


const identityAttributeNamesBeta : IdentityAttributeNamesBeta = 

try {
    const val = await identityAttributesBetaApi.deleteIdentityAttributesInBulk(identityAttributeNamesBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityAttributesBetaApi.deleteIdentityAttributesInBulk(identityAttributeNamesBeta);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getIdentityAttribute

> IdentityAttributeBeta getIdentityAttribute(name)

Get Identity Attribute

This gets an identity attribute for a given technical name.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The attribute\&#39;s technical name. | [default to undefined]

### Return type

[**IdentityAttributeBeta**](../Models/IdentityAttributeBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityAttributesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityAttributesBetaApi = new IdentityAttributesBetaApi(apiConfig);

{
  "standard" : false,
  "system" : false,
  "sources" : [ {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  }, {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  } ],
  "displayName" : "Cost Center",
  "name" : "costCenter",
  "type" : "string",
  "searchable" : false,
  "multi" : false
}


const name : string = "displayName"; // The attribute\'s technical name. (default to undefined)

try {
    const val = await identityAttributesBetaApi.getIdentityAttribute(name);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityAttributesBetaApi.getIdentityAttribute(name);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listIdentityAttributes

> Array&lt;IdentityAttributeBeta&gt; listIdentityAttributes(includeSystem, includeSilent, searchableOnly, count)

List Identity Attributes

Use this API to get a collection of identity attributes.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeSystem** | **boolean**| Include \&#39;system\&#39; attributes in the response. | [optional] [default to false]
 **includeSilent** | **boolean**| Include \&#39;silent\&#39; attributes in the response. | [optional] [default to false]
 **searchableOnly** | **boolean**| Include only \&#39;searchable\&#39; attributes in the response. | [optional] [default to false]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;IdentityAttributeBeta&gt;**](../Models/IdentityAttributeBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityAttributesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityAttributesBetaApi = new IdentityAttributesBetaApi(apiConfig);

[ {
  "standard" : false,
  "system" : false,
  "sources" : [ {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  }, {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  } ],
  "displayName" : "Cost Center",
  "name" : "costCenter",
  "type" : "string",
  "searchable" : false,
  "multi" : false
}, {
  "standard" : false,
  "system" : false,
  "sources" : [ {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  }, {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  } ],
  "displayName" : "Cost Center",
  "name" : "costCenter",
  "type" : "string",
  "searchable" : false,
  "multi" : false
} ]


const includeSystem : boolean = false; // Include \'system\' attributes in the response. (optional) (default to false)
const includeSilent : boolean = false; // Include \'silent\' attributes in the response. (optional) (default to false)
const searchableOnly : boolean = false; // Include only \'searchable\' attributes in the response. (optional) (default to false)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await identityAttributesBetaApi.listIdentityAttributes();
    
    // Below is a request that includes all optional parameters      
    // const val = await identityAttributesBetaApi.listIdentityAttributes(includeSystem, includeSilent, searchableOnly, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## putIdentityAttribute

> IdentityAttributeBeta putIdentityAttribute(name, identityAttributeBeta)

Update Identity Attribute

This updates an existing identity attribute.  Making an attribute searchable requires that the `system`, `standard`, and `multi` properties be set to false.   A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The attribute\&#39;s technical name. | [default to undefined]
 **identityAttributeBeta** | [**IdentityAttributeBeta**](../Models/IdentityAttributeBeta.md)|  | 

### Return type

[**IdentityAttributeBeta**](../Models/IdentityAttributeBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityAttributesBetaApi, IdentityAttributeBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityAttributesBetaApi = new IdentityAttributesBetaApi(apiConfig);

{
  "standard" : false,
  "system" : false,
  "sources" : [ {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  }, {
    "type" : "rule",
    "properties" : {
      "ruleType" : "IdentityAttribute",
      "ruleName" : "Cloud Promote Identity Attribute"
    }
  } ],
  "displayName" : "Cost Center",
  "name" : "costCenter",
  "type" : "string",
  "searchable" : false,
  "multi" : false
}


const name : string = "displayName"; // The attribute\'s technical name. (default to undefined)
const identityAttributeBeta : IdentityAttributeBeta = 

try {
    const val = await identityAttributesBetaApi.putIdentityAttribute(name, identityAttributeBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityAttributesBetaApi.putIdentityAttribute(name, identityAttributeBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

