---
title: PublicIdentitiesConfigBetaApi
pagination_label: PublicIdentitiesConfigBetaApi
sidebar_label: PublicIdentitiesConfigBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'PublicIdentitiesConfigBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'PublicIdentitiesConfigBetaApi']
---

# PublicIdentitiesConfigBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPublicIdentityConfig**](PublicIdentitiesConfigBetaApi.md#getPublicIdentityConfig) | **GET** /public-identities-config | Get Public Identity Config
[**updatePublicIdentityConfig**](PublicIdentitiesConfigBetaApi.md#updatePublicIdentityConfig) | **PUT** /public-identities-config | Update Public Identity Config



## getPublicIdentityConfig

> PublicIdentityConfigBeta getPublicIdentityConfig()

Get Public Identity Config

This gets details of public identity config.

### Parameters

This endpoint does not need any parameter.

### Return type

[**PublicIdentityConfigBeta**](../Models/PublicIdentityConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PublicIdentitiesConfigBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const publicIdentitiesConfigBetaApi = new PublicIdentitiesConfigBetaApi(apiConfig);
const val = await publicIdentitiesConfigBetaApi.getPublicIdentityConfig();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updatePublicIdentityConfig

> PublicIdentityConfigBeta updatePublicIdentityConfig(publicIdentityConfigBeta)

Update Public Identity Config

This updates the details of public identity config.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicIdentityConfigBeta** | [**PublicIdentityConfigBeta**](../Models/PublicIdentityConfigBeta.md)|  | 

### Return type

[**PublicIdentityConfigBeta**](../Models/PublicIdentityConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PublicIdentitiesConfigBetaApi, PublicIdentityConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const publicIdentitiesConfigBetaApi = new PublicIdentitiesConfigBetaApi(apiConfig);
const publicIdentityConfigBeta : PublicIdentityConfigBeta = ; // 
const val = await publicIdentitiesConfigBetaApi.updatePublicIdentityConfig(publicIdentityConfigBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

