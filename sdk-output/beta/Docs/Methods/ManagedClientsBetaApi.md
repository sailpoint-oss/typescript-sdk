---
title: ManagedClientsBetaApi
pagination_label: ManagedClientsBetaApi
sidebar_label: ManagedClientsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'ManagedClientsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'ManagedClientsBetaApi']
---

# ManagedClientsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getManagedClientStatus**](ManagedClientsBetaApi.md#getManagedClientStatus) | **GET** /managed-clients/{id}/status | Specified Managed Client Status.
[**updateManagedClientStatus**](ManagedClientsBetaApi.md#updateManagedClientStatus) | **POST** /managed-clients/{id}/status | Handle status request from client



## getManagedClientStatus

> ManagedClientStatusBeta getManagedClientStatus(id, type)

Specified Managed Client Status.

Retrieve Managed Client Status by ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Managed Client Status to get | [default to undefined]
 **type** | [**ManagedClientTypeBeta**](../Models/.md)| Type of the Managed Client Status to get | [default to undefined]

### Return type

[**ManagedClientStatusBeta**](../Models/ManagedClientStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ManagedClientsBetaApi,  } from "sailpoint-api-client";
const apiConfig = new Configuration();
const managedClientsBetaApi = new ManagedClientsBetaApi(apiConfig);
const id : string = "aClientId"; // ID of the Managed Client Status to get
const type : ManagedClientTypeBeta = ; // Type of the Managed Client Status to get
const val = await managedClientsBetaApi.getManagedClientStatus(id, type);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updateManagedClientStatus

> ManagedClientStatusAggResponseBeta updateManagedClientStatus(id, managedClientStatusBeta)

Handle status request from client

Update a status detail passed in from the client

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Managed Client Status to update | [default to undefined]
 **managedClientStatusBeta** | [**ManagedClientStatusBeta**](../Models/ManagedClientStatusBeta.md)|  | 

### Return type

[**ManagedClientStatusAggResponseBeta**](../Models/ManagedClientStatusAggResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ManagedClientsBetaApi, ManagedClientStatusBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const managedClientsBetaApi = new ManagedClientsBetaApi(apiConfig);
const id : string = "aClientId"; // ID of the Managed Client Status to update
const managedClientStatusBeta : ManagedClientStatusBeta = ; // 
const val = await managedClientsBetaApi.updateManagedClientStatus(id, managedClientStatusBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

