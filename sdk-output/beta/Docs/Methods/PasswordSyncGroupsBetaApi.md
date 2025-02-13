---
title: PasswordSyncGroupsBetaApi
pagination_label: PasswordSyncGroupsBetaApi
sidebar_label: PasswordSyncGroupsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'PasswordSyncGroupsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'PasswordSyncGroupsBetaApi']
---

# PasswordSyncGroupsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPasswordSyncGroup**](PasswordSyncGroupsBetaApi.md#createPasswordSyncGroup) | **POST** /password-sync-groups | Create Password Sync Group
[**deletePasswordSyncGroup**](PasswordSyncGroupsBetaApi.md#deletePasswordSyncGroup) | **DELETE** /password-sync-groups/{id} | Delete Password Sync Group by ID
[**getPasswordSyncGroup**](PasswordSyncGroupsBetaApi.md#getPasswordSyncGroup) | **GET** /password-sync-groups/{id} | Get Password Sync Group by ID
[**getPasswordSyncGroups**](PasswordSyncGroupsBetaApi.md#getPasswordSyncGroups) | **GET** /password-sync-groups | Get Password Sync Group List
[**updatePasswordSyncGroup**](PasswordSyncGroupsBetaApi.md#updatePasswordSyncGroup) | **PUT** /password-sync-groups/{id} | Update Password Sync Group by ID



## createPasswordSyncGroup

> PasswordSyncGroupBeta createPasswordSyncGroup(passwordSyncGroupBeta)

Create Password Sync Group

This API creates a password sync group based on the specifications provided.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordSyncGroupBeta** | [**PasswordSyncGroupBeta**](../Models/PasswordSyncGroupBeta.md)|  | 

### Return type

[**PasswordSyncGroupBeta**](../Models/PasswordSyncGroupBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordSyncGroupsBetaApi, PasswordSyncGroupBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordSyncGroupsBetaApi = new PasswordSyncGroupsBetaApi(apiConfig);
const passwordSyncGroupBeta : PasswordSyncGroupBeta = {name=Password Sync Group 2, passwordPolicyId=2c91808d744ba0ce01746f93b6204501, sourceIds=[2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500]}; // 
const val = await passwordSyncGroupsBetaApi.createPasswordSyncGroup(passwordSyncGroupBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deletePasswordSyncGroup

> deletePasswordSyncGroup(id)

Delete Password Sync Group by ID

This API deletes the specified password sync group.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of password sync group to delete. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordSyncGroupsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordSyncGroupsBetaApi = new PasswordSyncGroupsBetaApi(apiConfig);
const id : string = "6881f631-3bd5-4213-9c75-8e05cc3e35dd"; // The ID of password sync group to delete.
const val = await passwordSyncGroupsBetaApi.deletePasswordSyncGroup(id);
console.log('API called successfully.');
```
</details>


## getPasswordSyncGroup

> PasswordSyncGroupBeta getPasswordSyncGroup(id)

Get Password Sync Group by ID

This API returns the sync group for the specified ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of password sync group to retrieve. | [default to undefined]

### Return type

[**PasswordSyncGroupBeta**](../Models/PasswordSyncGroupBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordSyncGroupsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordSyncGroupsBetaApi = new PasswordSyncGroupsBetaApi(apiConfig);
const id : string = "6881f631-3bd5-4213-9c75-8e05cc3e35dd"; // The ID of password sync group to retrieve.
const val = await passwordSyncGroupsBetaApi.getPasswordSyncGroup(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getPasswordSyncGroups

> Array&lt;PasswordSyncGroupBeta&gt; getPasswordSyncGroups(limit, offset, count)

Get Password Sync Group List

This API returns a list of password sync groups.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;PasswordSyncGroupBeta&gt;**](../Models/PasswordSyncGroupBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordSyncGroupsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordSyncGroupsBetaApi = new PasswordSyncGroupsBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await passwordSyncGroupsBetaApi.getPasswordSyncGroups(limit, offset, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updatePasswordSyncGroup

> PasswordSyncGroupBeta updatePasswordSyncGroup(id, passwordSyncGroupBeta)

Update Password Sync Group by ID

This API updates the specified password sync group.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of password sync group to update. | [default to undefined]
 **passwordSyncGroupBeta** | [**PasswordSyncGroupBeta**](../Models/PasswordSyncGroupBeta.md)|  | 

### Return type

[**PasswordSyncGroupBeta**](../Models/PasswordSyncGroupBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordSyncGroupsBetaApi, PasswordSyncGroupBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordSyncGroupsBetaApi = new PasswordSyncGroupsBetaApi(apiConfig);
const id : string = "6881f631-3bd5-4213-9c75-8e05cc3e35dd"; // The ID of password sync group to update.
const passwordSyncGroupBeta : PasswordSyncGroupBeta = {id=6881f631-3bd5-4213-9c75-8e05cc3e35dd, name=Password Sync Group 2, passwordPolicyId=2c91808d744ba0ce01746f93b6204501, sourceIds=[2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500]}; // 
const val = await passwordSyncGroupsBetaApi.updatePasswordSyncGroup(id, passwordSyncGroupBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

