---
title: AuthProfileBetaApi
pagination_label: AuthProfileBetaApi
sidebar_label: AuthProfileBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AuthProfileBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AuthProfileBetaApi']
---

# AuthProfileBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProfileConfig**](AuthProfileBetaApi.md#getProfileConfig) | **GET** /auth-profiles/{id} | Get Auth Profile.
[**getProfileConfigList**](AuthProfileBetaApi.md#getProfileConfigList) | **GET** /auth-profiles | Get list of Auth Profiles.
[**patchProfileConfig**](AuthProfileBetaApi.md#patchProfileConfig) | **PATCH** /auth-profiles/{id} | Patch a specified Auth Profile



## getProfileConfig

> AuthProfileBeta getProfileConfig()

Get Auth Profile.

This API returns auth profile information.

### Parameters

This endpoint does not need any parameter.

### Return type

[**AuthProfileBeta**](../Models/AuthProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AuthProfileBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const authProfileBetaApi = new AuthProfileBetaApi(apiConfig);
const val = await authProfileBetaApi.getProfileConfig();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getProfileConfigList

> Array&lt;AuthProfileSummaryBeta&gt; getProfileConfigList()

Get list of Auth Profiles.

This API returns a list of auth profiles.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;AuthProfileSummaryBeta&gt;**](../Models/AuthProfileSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AuthProfileBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const authProfileBetaApi = new AuthProfileBetaApi(apiConfig);
const val = await authProfileBetaApi.getProfileConfigList();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchProfileConfig

> AuthProfileBeta patchProfileConfig(id, jsonPatchOperationBeta)

Patch a specified Auth Profile

This API updates an existing Auth Profile. The following fields are patchable: **offNetwork**, **untrustedGeography**, **applicationId**, **applicationName**, **type**

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Auth Profile to patch. | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | 

### Return type

[**AuthProfileBeta**](../Models/AuthProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AuthProfileBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const authProfileBetaApi = new AuthProfileBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121919ecca"; // ID of the Auth Profile to patch.
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = ; // 
const val = await authProfileBetaApi.patchProfileConfig(id, jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

