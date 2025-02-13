---
title: SearchAttributeConfigurationBetaApi
pagination_label: SearchAttributeConfigurationBetaApi
sidebar_label: SearchAttributeConfigurationBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'SearchAttributeConfigurationBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'SearchAttributeConfigurationBetaApi']
---

# SearchAttributeConfigurationBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSearchAttributeConfig**](SearchAttributeConfigurationBetaApi.md#createSearchAttributeConfig) | **POST** /accounts/search-attribute-config | Create Extended Search Attributes
[**deleteSearchAttributeConfig**](SearchAttributeConfigurationBetaApi.md#deleteSearchAttributeConfig) | **DELETE** /accounts/search-attribute-config/{name} | Delete Extended Search Attribute
[**getSearchAttributeConfig**](SearchAttributeConfigurationBetaApi.md#getSearchAttributeConfig) | **GET** /accounts/search-attribute-config | List Extended Search Attributes
[**getSingleSearchAttributeConfig**](SearchAttributeConfigurationBetaApi.md#getSingleSearchAttributeConfig) | **GET** /accounts/search-attribute-config/{name} | Get Extended Search Attribute
[**patchSearchAttributeConfig**](SearchAttributeConfigurationBetaApi.md#patchSearchAttributeConfig) | **PATCH** /accounts/search-attribute-config/{name} | Update Extended Search Attribute



## createSearchAttributeConfig

> object createSearchAttributeConfig(searchAttributeConfigBeta)

Create Extended Search Attributes

Create and configure extended search attributes. This API accepts an attribute name, an attribute display name and a list of name/value pair associates of application IDs to attribute names. It will then validate the inputs and configure/create and attribute promotion configuration in the Link ObjectConfig. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchAttributeConfigBeta** | [**SearchAttributeConfigBeta**](../Models/SearchAttributeConfigBeta.md)|  | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SearchAttributeConfigurationBetaApi, SearchAttributeConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const searchAttributeConfigurationBetaApi = new SearchAttributeConfigurationBetaApi(apiConfig);
const searchAttributeConfigBeta : SearchAttributeConfigBeta = {name=newMailAttribute, displayName=New Mail Attribute, applicationAttributes={2c9180866166b5b0016167c32ef31a66=mail, 2c9180866166b5b0016167c32ef31a67=mail}}; // 
const val = await searchAttributeConfigurationBetaApi.createSearchAttributeConfig(searchAttributeConfigBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteSearchAttributeConfig

> deleteSearchAttributeConfig(name)

Delete Extended Search Attribute

Delete an extended attribute configuration by name.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Name of the extended search attribute configuration to delete. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SearchAttributeConfigurationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const searchAttributeConfigurationBetaApi = new SearchAttributeConfigurationBetaApi(apiConfig);
const name : string = "newMailAttribute"; // Name of the extended search attribute configuration to delete.
const val = await searchAttributeConfigurationBetaApi.deleteSearchAttributeConfig(name);
console.log('API called successfully.');
```
</details>


## getSearchAttributeConfig

> Array&lt;SearchAttributeConfigBeta&gt; getSearchAttributeConfig()

List Extended Search Attributes

Get a list of attribute/application associates currently configured in Identity Security Cloud (ISC). A token with ORG_ADMIN authority is required to call this API.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;SearchAttributeConfigBeta&gt;**](../Models/SearchAttributeConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SearchAttributeConfigurationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const searchAttributeConfigurationBetaApi = new SearchAttributeConfigurationBetaApi(apiConfig);
const val = await searchAttributeConfigurationBetaApi.getSearchAttributeConfig();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSingleSearchAttributeConfig

> Array&lt;SearchAttributeConfigBeta&gt; getSingleSearchAttributeConfig(name)

Get Extended Search Attribute

Get an extended attribute configuration by name.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Name of the extended search attribute configuration to get. | [default to undefined]

### Return type

[**Array&lt;SearchAttributeConfigBeta&gt;**](../Models/SearchAttributeConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SearchAttributeConfigurationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const searchAttributeConfigurationBetaApi = new SearchAttributeConfigurationBetaApi(apiConfig);
const name : string = "newMailAttribute"; // Name of the extended search attribute configuration to get.
const val = await searchAttributeConfigurationBetaApi.getSingleSearchAttributeConfig(name);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchSearchAttributeConfig

> SearchAttributeConfigBeta patchSearchAttributeConfig(name, jsonPatchOperationBeta)

Update Extended Search Attribute

Update an existing search attribute configuration.  You can patch these fields: * name  * displayName * applicationAttributes

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Name of the extended search attribute configuration to patch. | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | 

### Return type

[**SearchAttributeConfigBeta**](../Models/SearchAttributeConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SearchAttributeConfigurationBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const searchAttributeConfigurationBetaApi = new SearchAttributeConfigurationBetaApi(apiConfig);
const name : string = "promotedMailAttribute"; // Name of the extended search attribute configuration to patch.
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/name, value=newAttributeName}, {op=replace, path=/displayName, value=new attribute display name}, {op=add, path=/applicationAttributes, value={2c91808b79fd2422017a0b35d30f3968=employeeNumber}}]; // 
const val = await searchAttributeConfigurationBetaApi.patchSearchAttributeConfig(name, jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

