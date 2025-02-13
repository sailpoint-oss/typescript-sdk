---
title: PasswordPoliciesBetaApi
pagination_label: PasswordPoliciesBetaApi
sidebar_label: PasswordPoliciesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'PasswordPoliciesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'PasswordPoliciesBetaApi']
---

# PasswordPoliciesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPasswordPolicy**](PasswordPoliciesBetaApi.md#createPasswordPolicy) | **POST** /password-policies | Create Password Policy
[**deletePasswordPolicy**](PasswordPoliciesBetaApi.md#deletePasswordPolicy) | **DELETE** /password-policies/{id} | Delete Password Policy by ID
[**getPasswordPolicyById**](PasswordPoliciesBetaApi.md#getPasswordPolicyById) | **GET** /password-policies/{id} | Get Password Policy by ID
[**listPasswordPolicies**](PasswordPoliciesBetaApi.md#listPasswordPolicies) | **GET** /password-policies | List Password Policies
[**setPasswordPolicy**](PasswordPoliciesBetaApi.md#setPasswordPolicy) | **PUT** /password-policies/{id} | Update Password Policy by ID



## createPasswordPolicy

> PasswordPolicyV3DtoBeta createPasswordPolicy(passwordPolicyV3DtoBeta)

Create Password Policy

This API creates the specified password policy.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordPolicyV3DtoBeta** | [**PasswordPolicyV3DtoBeta**](../Models/PasswordPolicyV3DtoBeta.md)|  | 

### Return type

[**PasswordPolicyV3DtoBeta**](../Models/PasswordPolicyV3DtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordPoliciesBetaApi, PasswordPolicyV3DtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordPoliciesBetaApi = new PasswordPoliciesBetaApi(apiConfig);
const passwordPolicyV3DtoBeta : PasswordPolicyV3DtoBeta = {description=New Password Policy with high requirements to password complexity., id=null, name=High security Password Policy, dateCreated=1639056206564, lastUpdated=1662385430753, firstExpirationReminder=90, accountIdMinWordLength=3, accountNameMinWordLength=3, maxLength=0, maxRepeatedChars=4, minAlpha=1, minCharacterTypes=-1, minLength=8, minLower=0, minNumeric=1, minSpecial=0, minUpper=0, passwordExpiration=90, defaultPolicy=false, enablePasswdExpiration=false, requireStrongAuthn=false, requireStrongAuthOffNetwork=false, requireStrongAuthUntrustedGeographies=false, useAccountAttributes=false, useDictionary=false, useIdentityAttributes=false, validateAgainstAccountId=true, validateAgainstAccountName=true, sourceIds=[2c91808382ffee0b01830de154f14034, 2c91808582ffee0c01830de36511405f]}; // 
const val = await passwordPoliciesBetaApi.createPasswordPolicy(passwordPolicyV3DtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deletePasswordPolicy

> deletePasswordPolicy(id)

Delete Password Policy by ID

This API deletes the specified password policy.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of password policy to delete. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordPoliciesBetaApi = new PasswordPoliciesBetaApi(apiConfig);
const id : string = "ff808081838d9e9d01838da6a03e0002"; // The ID of password policy to delete.
const val = await passwordPoliciesBetaApi.deletePasswordPolicy(id);
console.log('API called successfully.');
```
</details>


## getPasswordPolicyById

> PasswordPolicyV3DtoBeta getPasswordPolicyById(id)

Get Password Policy by ID

This API returns the password policy for the specified ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of password policy to retrieve. | [default to undefined]

### Return type

[**PasswordPolicyV3DtoBeta**](../Models/PasswordPolicyV3DtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordPoliciesBetaApi = new PasswordPoliciesBetaApi(apiConfig);
const id : string = "ff808081838d9e9d01838da6a03e0005"; // The ID of password policy to retrieve.
const val = await passwordPoliciesBetaApi.getPasswordPolicyById(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listPasswordPolicies

> Array&lt;PasswordPolicyV3DtoBeta&gt; listPasswordPolicies(limit, offset, count)

List Password Policies

This gets list of all Password Policies. Requires role of ORG_ADMIN

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;PasswordPolicyV3DtoBeta&gt;**](../Models/PasswordPolicyV3DtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordPoliciesBetaApi = new PasswordPoliciesBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await passwordPoliciesBetaApi.listPasswordPolicies(limit, offset, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## setPasswordPolicy

> PasswordPolicyV3DtoBeta setPasswordPolicy(id, passwordPolicyV3DtoBeta)

Update Password Policy by ID

This API updates the specified password policy.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of password policy to update. | [default to undefined]
 **passwordPolicyV3DtoBeta** | [**PasswordPolicyV3DtoBeta**](../Models/PasswordPolicyV3DtoBeta.md)|  | 

### Return type

[**PasswordPolicyV3DtoBeta**](../Models/PasswordPolicyV3DtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordPoliciesBetaApi, PasswordPolicyV3DtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordPoliciesBetaApi = new PasswordPoliciesBetaApi(apiConfig);
const id : string = "ff808081838d9e9d01838da6a03e0007"; // The ID of password policy to update.
const passwordPolicyV3DtoBeta : PasswordPolicyV3DtoBeta = {description=Password Policy after update., id=2c91808e7d976f3b017d9f5ceae440c8, name=Improved Password Policy, dateCreated=1639056206564, lastUpdated=1662385430753, firstExpirationReminder=90, accountIdMinWordLength=3, accountNameMinWordLength=3, maxLength=0, maxRepeatedChars=4, minAlpha=1, minCharacterTypes=-1, minLength=8, minLower=0, minNumeric=1, minSpecial=0, minUpper=0, passwordExpiration=90, defaultPolicy=false, enablePasswdExpiration=false, requireStrongAuthn=false, requireStrongAuthOffNetwork=false, requireStrongAuthUntrustedGeographies=false, useAccountAttributes=false, useDictionary=false, useIdentityAttributes=false, validateAgainstAccountId=true, validateAgainstAccountName=true, sourceIds=[2c91808382ffee0b01830de154f14034, 2c91808582ffee0c01830de36511405f]}; // 
const val = await passwordPoliciesBetaApi.setPasswordPolicy(id, passwordPolicyV3DtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

