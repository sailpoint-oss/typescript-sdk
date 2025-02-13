---
title: PasswordConfigurationBetaApi
pagination_label: PasswordConfigurationBetaApi
sidebar_label: PasswordConfigurationBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'PasswordConfigurationBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'PasswordConfigurationBetaApi']
---

# PasswordConfigurationBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPasswordOrgConfig**](PasswordConfigurationBetaApi.md#createPasswordOrgConfig) | **POST** /password-org-config | Create Password Org Config
[**getPasswordOrgConfig**](PasswordConfigurationBetaApi.md#getPasswordOrgConfig) | **GET** /password-org-config | Get Password Org Config
[**putPasswordOrgConfig**](PasswordConfigurationBetaApi.md#putPasswordOrgConfig) | **PUT** /password-org-config | Update Password Org Config



## createPasswordOrgConfig

> PasswordOrgConfigBeta createPasswordOrgConfig(passwordOrgConfigBeta)

Create Password Org Config

This API creates the password org config. Unspecified fields will use default value. To be able to use the custom password instructions, you must set the `customInstructionsEnabled` field to \"true\". Requires ORG_ADMIN, API role or authorization scope of \'idn:password-org-config:write\'

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordOrgConfigBeta** | [**PasswordOrgConfigBeta**](../Models/PasswordOrgConfigBeta.md)|  | 

### Return type

[**PasswordOrgConfigBeta**](../Models/PasswordOrgConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordConfigurationBetaApi, PasswordOrgConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordConfigurationBetaApi = new PasswordConfigurationBetaApi(apiConfig);

{
  "digitTokenLength" : 9,
  "digitTokenEnabled" : true,
  "digitTokenDurationMinutes" : 10,
  "customInstructionsEnabled" : true
}


const passwordOrgConfigBeta : PasswordOrgConfigBeta = 

try {
    const val = await passwordConfigurationBetaApi.createPasswordOrgConfig(passwordOrgConfigBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordConfigurationBetaApi.createPasswordOrgConfig(passwordOrgConfigBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getPasswordOrgConfig

> PasswordOrgConfigBeta getPasswordOrgConfig()

Get Password Org Config

This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of \'idn:password-org-config:read\'

### Parameters

This endpoint does not need any parameter.

### Return type

[**PasswordOrgConfigBeta**](../Models/PasswordOrgConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordConfigurationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordConfigurationBetaApi = new PasswordConfigurationBetaApi(apiConfig);

{
  "digitTokenLength" : 9,
  "digitTokenEnabled" : true,
  "digitTokenDurationMinutes" : 10,
  "customInstructionsEnabled" : true
}



try {
    const val = await passwordConfigurationBetaApi.getPasswordOrgConfig();
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordConfigurationBetaApi.getPasswordOrgConfig();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## putPasswordOrgConfig

> PasswordOrgConfigBeta putPasswordOrgConfig(passwordOrgConfigBeta)

Update Password Org Config

This API updates the password org config for specified fields. Other fields will keep original value. You must set the `customInstructionsEnabled` field to \"true\" to be able to use custom password instructions.  Requires ORG_ADMIN, API role or authorization scope of \'idn:password-org-config:write\'

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordOrgConfigBeta** | [**PasswordOrgConfigBeta**](../Models/PasswordOrgConfigBeta.md)|  | 

### Return type

[**PasswordOrgConfigBeta**](../Models/PasswordOrgConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordConfigurationBetaApi, PasswordOrgConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordConfigurationBetaApi = new PasswordConfigurationBetaApi(apiConfig);

{
  "digitTokenLength" : 9,
  "digitTokenEnabled" : true,
  "digitTokenDurationMinutes" : 10,
  "customInstructionsEnabled" : true
}


const passwordOrgConfigBeta : PasswordOrgConfigBeta = 

try {
    const val = await passwordConfigurationBetaApi.putPasswordOrgConfig(passwordOrgConfigBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordConfigurationBetaApi.putPasswordOrgConfig(passwordOrgConfigBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

