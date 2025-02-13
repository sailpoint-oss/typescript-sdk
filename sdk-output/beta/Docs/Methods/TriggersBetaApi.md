---
title: TriggersBetaApi
pagination_label: TriggersBetaApi
sidebar_label: TriggersBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'TriggersBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'TriggersBetaApi']
---

# TriggersBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeTriggerInvocation**](TriggersBetaApi.md#completeTriggerInvocation) | **POST** /trigger-invocations/{id}/complete | Complete Trigger Invocation
[**createSubscription**](TriggersBetaApi.md#createSubscription) | **POST** /trigger-subscriptions | Create a Subscription
[**deleteSubscription**](TriggersBetaApi.md#deleteSubscription) | **DELETE** /trigger-subscriptions/{id} | Delete a Subscription
[**listSubscriptions**](TriggersBetaApi.md#listSubscriptions) | **GET** /trigger-subscriptions | List Subscriptions
[**listTriggerInvocationStatus**](TriggersBetaApi.md#listTriggerInvocationStatus) | **GET** /trigger-invocations/status | List Latest Invocation Statuses
[**listTriggers**](TriggersBetaApi.md#listTriggers) | **GET** /triggers | List Triggers
[**patchSubscription**](TriggersBetaApi.md#patchSubscription) | **PATCH** /trigger-subscriptions/{id} | Patch a Subscription
[**startTestTriggerInvocation**](TriggersBetaApi.md#startTestTriggerInvocation) | **POST** /trigger-invocations/test | Start a Test Invocation
[**testSubscriptionFilter**](TriggersBetaApi.md#testSubscriptionFilter) | **POST** /trigger-subscriptions/validate-filter | Validate a Subscription Filter
[**updateSubscription**](TriggersBetaApi.md#updateSubscription) | **PUT** /trigger-subscriptions/{id} | Update a Subscription



## completeTriggerInvocation

> completeTriggerInvocation(id, completeInvocationBeta)

Complete Trigger Invocation

Completes an invocation to a REQUEST_RESPONSE type trigger.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the invocation to complete. | [default to undefined]
 **completeInvocationBeta** | [**CompleteInvocationBeta**](../Models/CompleteInvocationBeta.md)|  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TriggersBetaApi, CompleteInvocationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const triggersBetaApi = new TriggersBetaApi(apiConfig);
const id : string = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"; // The ID of the invocation to complete.
const completeInvocationBeta : CompleteInvocationBeta = {secret=0f11f2a4-7c94-4bf3-a2bd-742580fe3bde, output={approved=false}}; // 
const val = await triggersBetaApi.completeTriggerInvocation(id, completeInvocationBeta);
console.log('API called successfully.');
```
</details>


## createSubscription

> SubscriptionBeta createSubscription(subscriptionPostRequestBeta)

Create a Subscription

This API creates a new subscription to a trigger and defines trigger invocation details. The type of subscription determines which config object is required: * HTTP subscriptions require httpConfig * EventBridge subscriptions require eventBridgeConfig

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionPostRequestBeta** | [**SubscriptionPostRequestBeta**](../Models/SubscriptionPostRequestBeta.md)|  | 

### Return type

[**SubscriptionBeta**](../Models/SubscriptionBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TriggersBetaApi, SubscriptionPostRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const triggersBetaApi = new TriggersBetaApi(apiConfig);
const subscriptionPostRequestBeta : SubscriptionPostRequestBeta = {name=Access request subscription, description=Access requested to site xyz, triggerId=idn:access-requested, type=HTTP, httpConfig={url=https://www.example.com, httpDispatchMode=SYNC, httpAuthenticationType=BASIC_AUTH, basicAuthConfig={userName=user@example.com, password=eRtg4%6yuI!}}, enabled=true, filter=$[?($.identityId == "201327fda1c44704ac01181e963d463c")]}; // 
const val = await triggersBetaApi.createSubscription(subscriptionPostRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteSubscription

> deleteSubscription(id)

Delete a Subscription

Deletes an existing subscription to a trigger.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Subscription ID | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TriggersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const triggersBetaApi = new TriggersBetaApi(apiConfig);
const id : string = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"; // Subscription ID
const val = await triggersBetaApi.deleteSubscription(id);
console.log('API called successfully.');
```
</details>


## listSubscriptions

> Array&lt;SubscriptionBeta&gt; listSubscriptions(limit, offset, count, filters, sorters)

List Subscriptions

Gets a list of all trigger subscriptions.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName** | [optional] [default to undefined]

### Return type

[**Array&lt;SubscriptionBeta&gt;**](../Models/SubscriptionBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TriggersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const triggersBetaApi = new TriggersBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "id eq "12cff757-c0c0-413b-8ad7-2a47956d1e89"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le*
  sorters = "triggerName"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName**
const val = await triggersBetaApi.listSubscriptions(limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listTriggerInvocationStatus

> Array&lt;InvocationStatusBeta&gt; listTriggerInvocationStatus(limit, offset, count, filters, sorters)

List Latest Invocation Statuses

Gets a list of latest invocation statuses. Statuses of successful invocations are available for up to 24 hours. Statuses of failed invocations are available for up to 48 hours. This endpoint may only fetch up to 2000 invocations, and should not be treated as a representation of the full history of invocations.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** | [optional] [default to undefined]

### Return type

[**Array&lt;InvocationStatusBeta&gt;**](../Models/InvocationStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TriggersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const triggersBetaApi = new TriggersBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "triggerId eq "idn:access-request-dynamic-approver"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq*
  sorters = "created"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed**
const val = await triggersBetaApi.listTriggerInvocationStatus(limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listTriggers

> Array&lt;TriggerBeta&gt; listTriggers(limit, offset, count, filters, sorters)

List Triggers

Gets a list of triggers that are available in the tenant.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name** | [optional] [default to undefined]

### Return type

[**Array&lt;TriggerBeta&gt;**](../Models/TriggerBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TriggersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const triggersBetaApi = new TriggersBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "id eq "idn:access-request-post-approval"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le*
  sorters = "name"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name**
const val = await triggersBetaApi.listTriggers(limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchSubscription

> SubscriptionBeta patchSubscription(id, subscriptionPatchRequestInnerBeta)

Patch a Subscription

This API updates a trigger subscription in IdentityNow, using a set of instructions to modify a subscription partially. The following fields are patchable:  **name**, **description**, **enabled**, **type**, **filter**, **responseDeadline**, **httpConfig**, **eventBridgeConfig**, **workflowConfig**

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Subscription to patch | [default to undefined]
 **subscriptionPatchRequestInnerBeta** | [**Array&lt;SubscriptionPatchRequestInnerBeta&gt;**](../Models/SubscriptionPatchRequestInnerBeta.md)|  | 

### Return type

[**SubscriptionBeta**](../Models/SubscriptionBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TriggersBetaApi, SubscriptionPatchRequestInnerBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const triggersBetaApi = new TriggersBetaApi(apiConfig);
const id : string = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"; // ID of the Subscription to patch
const subscriptionPatchRequestInnerBeta : Array<SubscriptionPatchRequestInnerBeta> = ; // 
const val = await triggersBetaApi.patchSubscription(id, subscriptionPatchRequestInnerBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## startTestTriggerInvocation

> Array&lt;InvocationBeta&gt; startTestTriggerInvocation(testInvocationBeta)

Start a Test Invocation

Initiate a test event for all subscribers of the specified event trigger.  If there are no subscribers to the specified trigger in the tenant, then no test event will be sent.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testInvocationBeta** | [**TestInvocationBeta**](../Models/TestInvocationBeta.md)|  | 

### Return type

[**Array&lt;InvocationBeta&gt;**](../Models/InvocationBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TriggersBetaApi, TestInvocationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const triggersBetaApi = new TriggersBetaApi(apiConfig);
const testInvocationBeta : TestInvocationBeta = {triggerId=idn:access-requested, input={identityId=201327fda1c44704ac01181e963d463c}, contentJson={workflowId=1234}}; // 
const val = await triggersBetaApi.startTestTriggerInvocation(testInvocationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## testSubscriptionFilter

> ValidateFilterOutputDtoBeta testSubscriptionFilter(validateFilterInputDtoBeta)

Validate a Subscription Filter

Validates a JSONPath filter expression against a provided mock input. Request requires a security scope of: 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validateFilterInputDtoBeta** | [**ValidateFilterInputDtoBeta**](../Models/ValidateFilterInputDtoBeta.md)|  | 

### Return type

[**ValidateFilterOutputDtoBeta**](../Models/ValidateFilterOutputDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TriggersBetaApi, ValidateFilterInputDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const triggersBetaApi = new TriggersBetaApi(apiConfig);
const validateFilterInputDtoBeta : ValidateFilterInputDtoBeta = {input={identityId=201327fda1c44704ac01181e963d463c}, filter=$[?($.identityId == "201327fda1c44704ac01181e963d463c")]}; // 
const val = await triggersBetaApi.testSubscriptionFilter(validateFilterInputDtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updateSubscription

> SubscriptionBeta updateSubscription(id, subscriptionPutRequestBeta)

Update a Subscription

This API updates a trigger subscription in IdentityNow, using a full object representation. In other words, the existing   Subscription is completely replaced. The following fields are immutable:     * id    * triggerId     Attempts to modify these fields result in 400.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Subscription ID | [default to undefined]
 **subscriptionPutRequestBeta** | [**SubscriptionPutRequestBeta**](../Models/SubscriptionPutRequestBeta.md)|  | 

### Return type

[**SubscriptionBeta**](../Models/SubscriptionBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TriggersBetaApi, SubscriptionPutRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const triggersBetaApi = new TriggersBetaApi(apiConfig);
const id : string = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"; // Subscription ID
const subscriptionPutRequestBeta : SubscriptionPutRequestBeta = {name=Access request subscription, description=Access requested to site xyz, type=HTTP, httpConfig={url=https://www.example.com, httpDispatchMode=SYNC, httpAuthenticationType=BASIC_AUTH, basicAuthConfig={userName=user@example.com, password=eRtg4%6yuI!}}, enabled=true, filter=$[?($.identityId == "201327fda1c44704ac01181e963d463c")]}; // 
const val = await triggersBetaApi.updateSubscription(id, subscriptionPutRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

