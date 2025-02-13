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

{
  "validateAgainstAccountName" : true,
  "minLength" : 8,
  "description" : "Information about the Password Policy",
  "requireStrongAuthUntrustedGeographies" : true,
  "enablePasswdExpiration" : true,
  "minNumeric" : 8,
  "lastUpdated" : "2000-01-23T04:56:07.000+00:00",
  "validateAgainstAccountId" : false,
  "dateCreated" : "2000-01-23T04:56:07.000+00:00",
  "accountNameMinWordLength" : 6,
  "minUpper" : 8,
  "firstExpirationReminder" : 45,
  "modified" : "modified",
  "id" : "2c91808e7d976f3b017d9f5ceae440c8",
  "requireStrongAuthn" : true,
  "useDictionary" : false,
  "minSpecial" : 8,
  "sourceIds" : [ "2c91808382ffee0b01830de154f14034", "2f98808382ffee0b01830de154f12134" ],
  "passwordExpiration" : 8,
  "maxRepeatedChars" : 3,
  "minCharacterTypes" : 5,
  "minAlpha" : 5,
  "created" : "created",
  "useAccountAttributes" : false,
  "accountIdMinWordLength" : 4,
  "minLower" : 8,
  "useIdentityAttributes" : false,
  "defaultPolicy" : true,
  "requireStrongAuthOffNetwork" : true,
  "name" : "PasswordPolicy Example",
  "maxLength" : 25
}


const passwordPolicyV3DtoBeta : PasswordPolicyV3DtoBeta = 

try {
    const val = await passwordPoliciesBetaApi.createPasswordPolicy(passwordPolicyV3DtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordPoliciesBetaApi.createPasswordPolicy(passwordPolicyV3DtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const id : string = "ff808081838d9e9d01838da6a03e0002"; // The ID of password policy to delete. (default to undefined)

try {
    const val = await passwordPoliciesBetaApi.deletePasswordPolicy(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordPoliciesBetaApi.deletePasswordPolicy(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "validateAgainstAccountName" : true,
  "minLength" : 8,
  "description" : "Information about the Password Policy",
  "requireStrongAuthUntrustedGeographies" : true,
  "enablePasswdExpiration" : true,
  "minNumeric" : 8,
  "lastUpdated" : "2000-01-23T04:56:07.000+00:00",
  "validateAgainstAccountId" : false,
  "dateCreated" : "2000-01-23T04:56:07.000+00:00",
  "accountNameMinWordLength" : 6,
  "minUpper" : 8,
  "firstExpirationReminder" : 45,
  "modified" : "modified",
  "id" : "2c91808e7d976f3b017d9f5ceae440c8",
  "requireStrongAuthn" : true,
  "useDictionary" : false,
  "minSpecial" : 8,
  "sourceIds" : [ "2c91808382ffee0b01830de154f14034", "2f98808382ffee0b01830de154f12134" ],
  "passwordExpiration" : 8,
  "maxRepeatedChars" : 3,
  "minCharacterTypes" : 5,
  "minAlpha" : 5,
  "created" : "created",
  "useAccountAttributes" : false,
  "accountIdMinWordLength" : 4,
  "minLower" : 8,
  "useIdentityAttributes" : false,
  "defaultPolicy" : true,
  "requireStrongAuthOffNetwork" : true,
  "name" : "PasswordPolicy Example",
  "maxLength" : 25
}


const id : string = "ff808081838d9e9d01838da6a03e0005"; // The ID of password policy to retrieve. (default to undefined)

try {
    const val = await passwordPoliciesBetaApi.getPasswordPolicyById(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordPoliciesBetaApi.getPasswordPolicyById(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "validateAgainstAccountName" : true,
  "minLength" : 8,
  "description" : "Information about the Password Policy",
  "requireStrongAuthUntrustedGeographies" : true,
  "enablePasswdExpiration" : true,
  "minNumeric" : 8,
  "lastUpdated" : "2000-01-23T04:56:07.000+00:00",
  "validateAgainstAccountId" : false,
  "dateCreated" : "2000-01-23T04:56:07.000+00:00",
  "accountNameMinWordLength" : 6,
  "minUpper" : 8,
  "firstExpirationReminder" : 45,
  "modified" : "modified",
  "id" : "2c91808e7d976f3b017d9f5ceae440c8",
  "requireStrongAuthn" : true,
  "useDictionary" : false,
  "minSpecial" : 8,
  "sourceIds" : [ "2c91808382ffee0b01830de154f14034", "2f98808382ffee0b01830de154f12134" ],
  "passwordExpiration" : 8,
  "maxRepeatedChars" : 3,
  "minCharacterTypes" : 5,
  "minAlpha" : 5,
  "created" : "created",
  "useAccountAttributes" : false,
  "accountIdMinWordLength" : 4,
  "minLower" : 8,
  "useIdentityAttributes" : false,
  "defaultPolicy" : true,
  "requireStrongAuthOffNetwork" : true,
  "name" : "PasswordPolicy Example",
  "maxLength" : 25
}, {
  "validateAgainstAccountName" : true,
  "minLength" : 8,
  "description" : "Information about the Password Policy",
  "requireStrongAuthUntrustedGeographies" : true,
  "enablePasswdExpiration" : true,
  "minNumeric" : 8,
  "lastUpdated" : "2000-01-23T04:56:07.000+00:00",
  "validateAgainstAccountId" : false,
  "dateCreated" : "2000-01-23T04:56:07.000+00:00",
  "accountNameMinWordLength" : 6,
  "minUpper" : 8,
  "firstExpirationReminder" : 45,
  "modified" : "modified",
  "id" : "2c91808e7d976f3b017d9f5ceae440c8",
  "requireStrongAuthn" : true,
  "useDictionary" : false,
  "minSpecial" : 8,
  "sourceIds" : [ "2c91808382ffee0b01830de154f14034", "2f98808382ffee0b01830de154f12134" ],
  "passwordExpiration" : 8,
  "maxRepeatedChars" : 3,
  "minCharacterTypes" : 5,
  "minAlpha" : 5,
  "created" : "created",
  "useAccountAttributes" : false,
  "accountIdMinWordLength" : 4,
  "minLower" : 8,
  "useIdentityAttributes" : false,
  "defaultPolicy" : true,
  "requireStrongAuthOffNetwork" : true,
  "name" : "PasswordPolicy Example",
  "maxLength" : 25
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await passwordPoliciesBetaApi.listPasswordPolicies();
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordPoliciesBetaApi.listPasswordPolicies(limit, offset, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "validateAgainstAccountName" : true,
  "minLength" : 8,
  "description" : "Information about the Password Policy",
  "requireStrongAuthUntrustedGeographies" : true,
  "enablePasswdExpiration" : true,
  "minNumeric" : 8,
  "lastUpdated" : "2000-01-23T04:56:07.000+00:00",
  "validateAgainstAccountId" : false,
  "dateCreated" : "2000-01-23T04:56:07.000+00:00",
  "accountNameMinWordLength" : 6,
  "minUpper" : 8,
  "firstExpirationReminder" : 45,
  "modified" : "modified",
  "id" : "2c91808e7d976f3b017d9f5ceae440c8",
  "requireStrongAuthn" : true,
  "useDictionary" : false,
  "minSpecial" : 8,
  "sourceIds" : [ "2c91808382ffee0b01830de154f14034", "2f98808382ffee0b01830de154f12134" ],
  "passwordExpiration" : 8,
  "maxRepeatedChars" : 3,
  "minCharacterTypes" : 5,
  "minAlpha" : 5,
  "created" : "created",
  "useAccountAttributes" : false,
  "accountIdMinWordLength" : 4,
  "minLower" : 8,
  "useIdentityAttributes" : false,
  "defaultPolicy" : true,
  "requireStrongAuthOffNetwork" : true,
  "name" : "PasswordPolicy Example",
  "maxLength" : 25
}


const id : string = "ff808081838d9e9d01838da6a03e0007"; // The ID of password policy to update. (default to undefined)
const passwordPolicyV3DtoBeta : PasswordPolicyV3DtoBeta = 

try {
    const val = await passwordPoliciesBetaApi.setPasswordPolicy(id, passwordPolicyV3DtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordPoliciesBetaApi.setPasswordPolicy(id, passwordPolicyV3DtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

