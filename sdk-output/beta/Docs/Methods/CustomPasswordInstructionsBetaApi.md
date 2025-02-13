---
title: CustomPasswordInstructionsBetaApi
pagination_label: CustomPasswordInstructionsBetaApi
sidebar_label: CustomPasswordInstructionsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'CustomPasswordInstructionsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'CustomPasswordInstructionsBetaApi']
---

# CustomPasswordInstructionsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomPasswordInstructions**](CustomPasswordInstructionsBetaApi.md#createCustomPasswordInstructions) | **POST** /custom-password-instructions | Create Custom Password Instructions
[**deleteCustomPasswordInstructions**](CustomPasswordInstructionsBetaApi.md#deleteCustomPasswordInstructions) | **DELETE** /custom-password-instructions/{pageId} | Delete Custom Password Instructions by page ID
[**getCustomPasswordInstructions**](CustomPasswordInstructionsBetaApi.md#getCustomPasswordInstructions) | **GET** /custom-password-instructions/{pageId} | Get Custom Password Instructions by Page ID



## createCustomPasswordInstructions

> CustomPasswordInstructionBeta createCustomPasswordInstructions(customPasswordInstructionBeta)

Create Custom Password Instructions

This API creates the custom password instructions for the specified page ID. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customPasswordInstructionBeta** | [**CustomPasswordInstructionBeta**](../Models/CustomPasswordInstructionBeta.md)|  | 

### Return type

[**CustomPasswordInstructionBeta**](../Models/CustomPasswordInstructionBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomPasswordInstructionsBetaApi, CustomPasswordInstructionBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customPasswordInstructionsBetaApi = new CustomPasswordInstructionsBetaApi(apiConfig);
const customPasswordInstructionBeta : CustomPasswordInstructionBeta = {pageId=reset-password:enter-password, pageContent=See company password policies for details by clicking <a href="url">here</a>}; // 
const val = await customPasswordInstructionsBetaApi.createCustomPasswordInstructions(customPasswordInstructionBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteCustomPasswordInstructions

> deleteCustomPasswordInstructions(pageId, locale)

Delete Custom Password Instructions by page ID

This API delete the custom password instructions for the specified page ID. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageId** | **&#39;change-password:enter-password&#39; | &#39;change-password:finish&#39; | &#39;flow-selection:select&#39; | &#39;forget-username:user-email&#39; | &#39;mfa:enter-code&#39; | &#39;mfa:enter-kba&#39; | &#39;mfa:select&#39; | &#39;reset-password:enter-password&#39; | &#39;reset-password:enter-username&#39; | &#39;reset-password:finish&#39; | &#39;unlock-account:enter-username&#39; | &#39;unlock-account:finish&#39;**| The page ID of custom password instructions to delete. | [default to undefined]
 **locale** | **string**| The locale for the custom instructions, a BCP47 language tag. The default value is \\\&quot;default\\\&quot;. | [optional] [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomPasswordInstructionsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customPasswordInstructionsBetaApi = new CustomPasswordInstructionsBetaApi(apiConfig);
const pageId : 'change-password:enter-password' | 'change-password:finish' | 'flow-selection:select' | 'forget-username:user-email' | 'mfa:enter-code' | 'mfa:enter-kba' | 'mfa:select' | 'reset-password:enter-password' | 'reset-password:enter-username' | 'reset-password:finish' | 'unlock-account:enter-username' | 'unlock-account:finish' = "mfa:select"; // The page ID of custom password instructions to delete.
const locale = "locale_example"; // string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\".
const val = await customPasswordInstructionsBetaApi.deleteCustomPasswordInstructions(pageId, locale);
console.log('API called successfully.');
```
</details>


## getCustomPasswordInstructions

> CustomPasswordInstructionBeta getCustomPasswordInstructions(pageId, locale)

Get Custom Password Instructions by Page ID

This API returns the custom password instructions for the specified page ID. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageId** | **&#39;change-password:enter-password&#39; | &#39;change-password:finish&#39; | &#39;flow-selection:select&#39; | &#39;forget-username:user-email&#39; | &#39;mfa:enter-code&#39; | &#39;mfa:enter-kba&#39; | &#39;mfa:select&#39; | &#39;reset-password:enter-password&#39; | &#39;reset-password:enter-username&#39; | &#39;reset-password:finish&#39; | &#39;unlock-account:enter-username&#39; | &#39;unlock-account:finish&#39;**| The page ID of custom password instructions to query. | [default to undefined]
 **locale** | **string**| The locale for the custom instructions, a BCP47 language tag. The default value is \\\&quot;default\\\&quot;. | [optional] [default to undefined]

### Return type

[**CustomPasswordInstructionBeta**](../Models/CustomPasswordInstructionBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CustomPasswordInstructionsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const customPasswordInstructionsBetaApi = new CustomPasswordInstructionsBetaApi(apiConfig);
const pageId : 'change-password:enter-password' | 'change-password:finish' | 'flow-selection:select' | 'forget-username:user-email' | 'mfa:enter-code' | 'mfa:enter-kba' | 'mfa:select' | 'reset-password:enter-password' | 'reset-password:enter-username' | 'reset-password:finish' | 'unlock-account:enter-username' | 'unlock-account:finish' = "mfa:select"; // The page ID of custom password instructions to query.
const locale = "locale_example"; // string | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\".
const val = await customPasswordInstructionsBetaApi.getCustomPasswordInstructions(pageId, locale);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

