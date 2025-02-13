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

{
  "owner" : {
    "id" : "123180847373330f0173c7e1756b6890",
    "type" : "IDENTITY"
  },
  "reference" : {
    "id" : "2fd6ff94-2081-4d29-acbc-83a0a2f744a5",
    "type" : "WORKFLOW"
  },
  "created" : "2024-04-16T20:07:30.601016489Z",
  "name" : "Group Create",
  "modified" : "2024-04-17T18:02:07.320143194Z",
  "description" : "Create a new Active Directory Group",
  "disabled" : false,
  "id" : "1b630bed-0941-4792-a712-57a5868ca34d",
  "type" : "INTERACTIVE_PROCESS",
  "config" : "{\"workflowId\" : \"6b42d9be-61b6-46af-827e-ea29ba8aa3d9\"}"
}


const launcherRequestBeta : LauncherRequestBeta = 

try {
    const val = await launchersBetaApi.createLauncher(launcherRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await launchersBetaApi.createLauncher(launcherRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const launcherID : string = "e3012408-8b61-4564-ad41-c5ec131c325b"; // ID of the Launcher to be deleted (default to undefined)

try {
    const val = await launchersBetaApi.deleteLauncher(launcherID);
    
    // Below is a request that includes all optional parameters      
    // const val = await launchersBetaApi.deleteLauncher(launcherID);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "owner" : {
    "id" : "123180847373330f0173c7e1756b6890",
    "type" : "IDENTITY"
  },
  "reference" : {
    "id" : "2fd6ff94-2081-4d29-acbc-83a0a2f744a5",
    "type" : "WORKFLOW"
  },
  "created" : "2024-04-16T20:07:30.601016489Z",
  "name" : "Group Create",
  "modified" : "2024-04-17T18:02:07.320143194Z",
  "description" : "Create a new Active Directory Group",
  "disabled" : false,
  "id" : "1b630bed-0941-4792-a712-57a5868ca34d",
  "type" : "INTERACTIVE_PROCESS",
  "config" : "{\"workflowId\" : \"6b42d9be-61b6-46af-827e-ea29ba8aa3d9\"}"
}


const launcherID : string = "e3012408-8b61-4564-ad41-c5ec131c325b"; // ID of the Launcher to be retrieved (default to undefined)

try {
    const val = await launchersBetaApi.getLauncher(launcherID);
    
    // Below is a request that includes all optional parameters      
    // const val = await launchersBetaApi.getLauncher(launcherID);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "next" : "next",
  "items" : [ {
    "owner" : {
      "id" : "123180847373330f0173c7e1756b6890",
      "type" : "IDENTITY"
    },
    "reference" : {
      "id" : "2fd6ff94-2081-4d29-acbc-83a0a2f744a5",
      "type" : "WORKFLOW"
    },
    "created" : "2024-04-16T20:07:30.601016489Z",
    "name" : "Group Create",
    "modified" : "2024-04-17T18:02:07.320143194Z",
    "description" : "Create a new Active Directory Group",
    "disabled" : false,
    "id" : "1b630bed-0941-4792-a712-57a5868ca34d",
    "type" : "INTERACTIVE_PROCESS",
    "config" : "{\"workflowId\" : \"6b42d9be-61b6-46af-827e-ea29ba8aa3d9\"}"
  }, {
    "owner" : {
      "id" : "123180847373330f0173c7e1756b6890",
      "type" : "IDENTITY"
    },
    "reference" : {
      "id" : "2fd6ff94-2081-4d29-acbc-83a0a2f744a5",
      "type" : "WORKFLOW"
    },
    "created" : "2024-04-16T20:07:30.601016489Z",
    "name" : "Group Create",
    "modified" : "2024-04-17T18:02:07.320143194Z",
    "description" : "Create a new Active Directory Group",
    "disabled" : false,
    "id" : "1b630bed-0941-4792-a712-57a5868ca34d",
    "type" : "INTERACTIVE_PROCESS",
    "config" : "{\"workflowId\" : \"6b42d9be-61b6-46af-827e-ea29ba8aa3d9\"}"
  } ]
}


const filters : string = "disabled eq "true""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional) (default to undefined)
const next : string = "eyJuZXh0IjoxMjN9Cg=="; // Pagination marker (optional) (default to undefined)
const limit : number = 42; // Number of Launchers to return (optional) (default to 10)

try {
    const val = await launchersBetaApi.getLaunchers();
    
    // Below is a request that includes all optional parameters      
    // const val = await launchersBetaApi.getLaunchers(filters, next, limit);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "owner" : {
    "id" : "123180847373330f0173c7e1756b6890",
    "type" : "IDENTITY"
  },
  "reference" : {
    "id" : "2fd6ff94-2081-4d29-acbc-83a0a2f744a5",
    "type" : "WORKFLOW"
  },
  "created" : "2024-04-16T20:07:30.601016489Z",
  "name" : "Group Create",
  "modified" : "2024-04-17T18:02:07.320143194Z",
  "description" : "Create a new Active Directory Group",
  "disabled" : false,
  "id" : "1b630bed-0941-4792-a712-57a5868ca34d",
  "type" : "INTERACTIVE_PROCESS",
  "config" : "{\"workflowId\" : \"6b42d9be-61b6-46af-827e-ea29ba8aa3d9\"}"
}


const launcherID : string = "e3012408-8b61-4564-ad41-c5ec131c325b"; // ID of the Launcher to be replaced (default to undefined)
const launcherRequestBeta : LauncherRequestBeta = 

try {
    const val = await launchersBetaApi.putLauncher(launcherID, launcherRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await launchersBetaApi.putLauncher(launcherID, launcherRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "interactiveProcessId" : "5da68cfe-2d60-4b09-858f-0d03acd2f47a"
}


const launcherID : string = "e3012408-8b61-4564-ad41-c5ec131c325b"; // ID of the Launcher to be launched (default to undefined)

try {
    const val = await launchersBetaApi.startLauncher(launcherID);
    
    // Below is a request that includes all optional parameters      
    // const val = await launchersBetaApi.startLauncher(launcherID);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

