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
const identityAttributeBeta : IdentityAttributeBeta = ; // 
const val = await identityAttributesBetaApi.createIdentityAttribute(identityAttributeBeta);
console.log('API called successfully. Returned data: ' + val.data);
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
const name : string = "displayName"; // The attribute\'s technical name.
const val = await identityAttributesBetaApi.deleteIdentityAttribute(name);
console.log('API called successfully.');
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
const identityAttributeNamesBeta : IdentityAttributeNamesBeta = ; // 
const val = await identityAttributesBetaApi.deleteIdentityAttributesInBulk(identityAttributeNamesBeta);
console.log('API called successfully.');
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
const name : string = "displayName"; // The attribute\'s technical name.
const val = await identityAttributesBetaApi.getIdentityAttribute(name);
console.log('API called successfully. Returned data: ' + val.data);
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
const includeSystem = false, // boolean | Include \'system\' attributes in the response.
  includeSilent = false, // boolean | Include \'silent\' attributes in the response.
  searchableOnly = false, // boolean | Include only \'searchable\' attributes in the response.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await identityAttributesBetaApi.listIdentityAttributes(includeSystem, includeSilent, searchableOnly, count);
console.log('API called successfully. Returned data: ' + val.data);
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
const name : string = "displayName"; // The attribute\'s technical name.
const identityAttributeBeta : IdentityAttributeBeta = ; // 
const val = await identityAttributesBetaApi.putIdentityAttribute(name, identityAttributeBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

