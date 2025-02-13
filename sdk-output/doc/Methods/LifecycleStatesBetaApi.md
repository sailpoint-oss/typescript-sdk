---
title: LifecycleStatesBetaApi
pagination_label: LifecycleStatesBetaApi
sidebar_label: LifecycleStatesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'LifecycleStatesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'LifecycleStatesBetaApi']
---

# LifecycleStatesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLifecycleStates**](LifecycleStatesBetaApi.md#getLifecycleStates) | **GET** /identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id} | Get Lifecycle State
[**updateLifecycleStates**](LifecycleStatesBetaApi.md#updateLifecycleStates) | **PATCH** /identity-profiles/{identity-profile-id}/lifecycle-states/{lifecycle-state-id} | Update Lifecycle State



## getLifecycleStates

> LifecycleStateBeta getLifecycleStates(identityProfileId, lifecycleStateId)

Get Lifecycle State

Use this endpoint to get a lifecycle state by its ID and its associated identity profile ID.   A token with ORG_ADMIN or API authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProfileId** | **string**| Identity Profile ID. | [default to undefined]
 **lifecycleStateId** | **string**| Lifecycle State ID. | [default to undefined]

### Return type

[**LifecycleStateBeta**](../Models/LifecycleStateBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, LifecycleStatesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const lifecycleStatesBetaApi = new LifecycleStatesBetaApi(apiConfig);

{
  "accessProfileIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ],
  "emailNotificationOption" : {
    "notifyManagers" : true,
    "notifySpecificUsers" : true,
    "emailAddressList" : [ "test@test.com", "test2@test.com" ],
    "notifyAllAdmins" : true
  },
  "created" : "2015-05-28T14:07:17Z",
  "name" : "Lifecycle Name",
  "description" : "LifecycleDescription",
  "modified" : "2015-05-28T14:07:17Z",
  "accountActions" : [ {
    "action" : "ENABLE",
    "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
  }, {
    "action" : "ENABLE",
    "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
  } ],
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "identityCount" : 12,
  "technicalName" : "lifecycleTechnicalName",
  "enabled" : true
}


const identityProfileId : string = "2b838de9-db9b-abcf-e646-d4f274ad4238"; // Identity Profile ID. (default to undefined)
const lifecycleStateId : string = "ef38f94347e94562b5bb8424a56397d8"; // Lifecycle State ID. (default to undefined)

try {
    const val = await lifecycleStatesBetaApi.getLifecycleStates(identityProfileId, lifecycleStateId);
    
    // Below is a request that includes all optional parameters      
    // const val = await lifecycleStatesBetaApi.getLifecycleStates(identityProfileId, lifecycleStateId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateLifecycleStates

> LifecycleStateBeta updateLifecycleStates(identityProfileId, lifecycleStateId, jsonPatchOperationBeta)

Update Lifecycle State

Use this endpoint to update individual lifecycle state fields, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  A token with ORG_ADMIN or API authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProfileId** | **string**| Identity Profile ID. | [default to undefined]
 **lifecycleStateId** | **string**| Lifecycle State ID. | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption  | 

### Return type

[**LifecycleStateBeta**](../Models/LifecycleStateBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, LifecycleStatesBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const lifecycleStatesBetaApi = new LifecycleStatesBetaApi(apiConfig);

{
  "accessProfileIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ],
  "emailNotificationOption" : {
    "notifyManagers" : true,
    "notifySpecificUsers" : true,
    "emailAddressList" : [ "test@test.com", "test2@test.com" ],
    "notifyAllAdmins" : true
  },
  "created" : "2015-05-28T14:07:17Z",
  "name" : "Lifecycle Name",
  "description" : "LifecycleDescription",
  "modified" : "2015-05-28T14:07:17Z",
  "accountActions" : [ {
    "action" : "ENABLE",
    "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
  }, {
    "action" : "ENABLE",
    "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
  } ],
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "identityCount" : 12,
  "technicalName" : "lifecycleTechnicalName",
  "enabled" : true
}


const identityProfileId : string = "2b838de9-db9b-abcf-e646-d4f274ad4238"; // Identity Profile ID. (default to undefined)
const lifecycleStateId : string = "ef38f94347e94562b5bb8424a56397d8"; // Lifecycle State ID. (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/description, value=Updated description!}, {op=replace, path=/accessProfileIds, value=[2c918087742bab150174407a80f3125e, 2c918087742bab150174407a80f3124f]}, {op=replace, path=/accountActions, value=[{action=ENABLE, sourceIds=[2c9180846a2f82fb016a481c1b1560c5, 2c9180846a2f82fb016a481c1b1560cc]}, {action=DISABLE, sourceIds=[2c91808869a0c9980169a207258513fb]}]}, {op=replace, path=/emailNotificationOption, value={notifyManagers=true, notifyAllAdmins=false, notifySpecificUsers=false, emailAddressList=[]}}]; // A list of lifecycle state update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields can be updated: * enabled * description * accountActions * accessProfileIds * emailNotificationOption 

try {
    const val = await lifecycleStatesBetaApi.updateLifecycleStates(identityProfileId, lifecycleStateId, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await lifecycleStatesBetaApi.updateLifecycleStates(identityProfileId, lifecycleStateId, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

