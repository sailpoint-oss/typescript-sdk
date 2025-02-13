---
title: LaunchersBetaApi
pagination_label: LaunchersBetaApi
sidebar_label: LaunchersBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'LaunchersBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'LaunchersBetaApi']
---

# LaunchersBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLauncher**](LaunchersBetaApi.md#createLauncher) | **POST** /launchers | Create launcher
[**deleteLauncher**](LaunchersBetaApi.md#deleteLauncher) | **DELETE** /launchers/{launcherID} | Delete Launcher
[**getLauncher**](LaunchersBetaApi.md#getLauncher) | **GET** /launchers/{launcherID} | Get Launcher by ID
[**getLaunchers**](LaunchersBetaApi.md#getLaunchers) | **GET** /launchers | List all Launchers for tenant
[**putLauncher**](LaunchersBetaApi.md#putLauncher) | **PUT** /launchers/{launcherID} | Replace Launcher
[**startLauncher**](LaunchersBetaApi.md#startLauncher) | **POST** /beta/launchers/{launcherID}/launch | Launch a Launcher



## createLauncher

> LauncherBeta createLauncher(launcherRequestBeta)

Create launcher

Create a Launcher with given information

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **launcherRequestBeta** | [**LauncherRequestBeta**](../Models/LauncherRequestBeta.md)| Payload to create a Launcher | 

### Return type

[**LauncherBeta**](../Models/LauncherBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, LaunchersBetaApi, LauncherRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const launchersBetaApi = new LaunchersBetaApi(apiConfig);
const launcherRequestBeta : LauncherRequestBeta = ; // Payload to create a Launcher
const val = await launchersBetaApi.createLauncher(launcherRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteLauncher

> deleteLauncher(launcherID)

Delete Launcher

Delete the given Launcher ID

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **launcherID** | **string**| ID of the Launcher to be deleted | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, LaunchersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const launchersBetaApi = new LaunchersBetaApi(apiConfig);
const launcherID : string = "e3012408-8b61-4564-ad41-c5ec131c325b"; // ID of the Launcher to be deleted
const val = await launchersBetaApi.deleteLauncher(launcherID);
console.log('API called successfully.');
```
</details>


## getLauncher

> LauncherBeta getLauncher(launcherID)

Get Launcher by ID

Get details for the given Launcher ID

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **launcherID** | **string**| ID of the Launcher to be retrieved | [default to undefined]

### Return type

[**LauncherBeta**](../Models/LauncherBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, LaunchersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const launchersBetaApi = new LaunchersBetaApi(apiConfig);
const launcherID : string = "e3012408-8b61-4564-ad41-c5ec131c325b"; // ID of the Launcher to be retrieved
const val = await launchersBetaApi.getLauncher(launcherID);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getLaunchers

> GetLaunchers200ResponseBeta getLaunchers(filters, next, limit)

List all Launchers for tenant

Return a list of Launchers for the authenticated tenant

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* | [optional] [default to undefined]
 **next** | **string**| Pagination marker | [optional] [default to undefined]
 **limit** | **number**| Number of Launchers to return | [optional] [default to 10]

### Return type

[**GetLaunchers200ResponseBeta**](../Models/GetLaunchers200ResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, LaunchersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const launchersBetaApi = new LaunchersBetaApi(apiConfig);
const filters = "disabled eq "true"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw*
  next = "eyJuZXh0IjoxMjN9Cg==", // string | Pagination marker
  limit = 42; // number | Number of Launchers to return
const val = await launchersBetaApi.getLaunchers(filters, next, limit);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## putLauncher

> LauncherBeta putLauncher(launcherID, launcherRequestBeta)

Replace Launcher

Replace the given Launcher ID with given payload

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **launcherID** | **string**| ID of the Launcher to be replaced | [default to undefined]
 **launcherRequestBeta** | [**LauncherRequestBeta**](../Models/LauncherRequestBeta.md)| Payload to replace Launcher | 

### Return type

[**LauncherBeta**](../Models/LauncherBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, LaunchersBetaApi, LauncherRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const launchersBetaApi = new LaunchersBetaApi(apiConfig);
const launcherID : string = "e3012408-8b61-4564-ad41-c5ec131c325b"; // ID of the Launcher to be replaced
const launcherRequestBeta : LauncherRequestBeta = ; // Payload to replace Launcher
const val = await launchersBetaApi.putLauncher(launcherID, launcherRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## startLauncher

> StartLauncher200ResponseBeta startLauncher(launcherID)

Launch a Launcher

Launch the given Launcher ID

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **launcherID** | **string**| ID of the Launcher to be launched | [default to undefined]

### Return type

[**StartLauncher200ResponseBeta**](../Models/StartLauncher200ResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, LaunchersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const launchersBetaApi = new LaunchersBetaApi(apiConfig);
const launcherID : string = "e3012408-8b61-4564-ad41-c5ec131c325b"; // ID of the Launcher to be launched
const val = await launchersBetaApi.startLauncher(launcherID);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

