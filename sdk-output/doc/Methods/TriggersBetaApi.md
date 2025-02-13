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


const id : string = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"; // The ID of the invocation to complete. (default to undefined)
const completeInvocationBeta : CompleteInvocationBeta = 

try {
    const val = await triggersBetaApi.completeTriggerInvocation(id, completeInvocationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await triggersBetaApi.completeTriggerInvocation(id, completeInvocationBeta);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "filter" : "$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]",
  "httpConfig" : {
    "bearerTokenAuthConfig" : {
      "bearerToken" : "bearerToken"
    },
    "httpAuthenticationType" : "BASIC_AUTH",
    "httpDispatchMode" : "SYNC",
    "basicAuthConfig" : {
      "password" : "password",
      "userName" : "user@example.com"
    },
    "url" : "https://www.example.com"
  },
  "triggerName" : "Access Requested",
  "triggerId" : "idn:access-request-post-approval",
  "name" : "Access request subscription",
  "description" : "Access requested to site xyz",
  "eventBridgeConfig" : {
    "awsRegion" : "us-west-1",
    "awsAccount" : "123456789012"
  },
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "responseDeadline" : "PT1H",
  "type" : "HTTP",
  "enabled" : true
}


const subscriptionPostRequestBeta : SubscriptionPostRequestBeta = 

try {
    const val = await triggersBetaApi.createSubscription(subscriptionPostRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await triggersBetaApi.createSubscription(subscriptionPostRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const id : string = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"; // Subscription ID (default to undefined)

try {
    const val = await triggersBetaApi.deleteSubscription(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await triggersBetaApi.deleteSubscription(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "filter" : "$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]",
  "httpConfig" : {
    "bearerTokenAuthConfig" : {
      "bearerToken" : "bearerToken"
    },
    "httpAuthenticationType" : "BASIC_AUTH",
    "httpDispatchMode" : "SYNC",
    "basicAuthConfig" : {
      "password" : "password",
      "userName" : "user@example.com"
    },
    "url" : "https://www.example.com"
  },
  "triggerName" : "Access Requested",
  "triggerId" : "idn:access-request-post-approval",
  "name" : "Access request subscription",
  "description" : "Access requested to site xyz",
  "eventBridgeConfig" : {
    "awsRegion" : "us-west-1",
    "awsAccount" : "123456789012"
  },
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "responseDeadline" : "PT1H",
  "type" : "HTTP",
  "enabled" : true
}, {
  "filter" : "$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]",
  "httpConfig" : {
    "bearerTokenAuthConfig" : {
      "bearerToken" : "bearerToken"
    },
    "httpAuthenticationType" : "BASIC_AUTH",
    "httpDispatchMode" : "SYNC",
    "basicAuthConfig" : {
      "password" : "password",
      "userName" : "user@example.com"
    },
    "url" : "https://www.example.com"
  },
  "triggerName" : "Access Requested",
  "triggerId" : "idn:access-request-post-approval",
  "name" : "Access request subscription",
  "description" : "Access requested to site xyz",
  "eventBridgeConfig" : {
    "awsRegion" : "us-west-1",
    "awsAccount" : "123456789012"
  },
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "responseDeadline" : "PT1H",
  "type" : "HTTP",
  "enabled" : true
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "id eq "12cff757-c0c0-413b-8ad7-2a47956d1e89""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le* (optional) (default to undefined)
const sorters : string = "triggerName"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName** (optional) (default to undefined)

try {
    const val = await triggersBetaApi.listSubscriptions();
    
    // Below is a request that includes all optional parameters      
    // const val = await triggersBetaApi.listSubscriptions(limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "startInvocationInput" : {
    "input" : {
      "identityId" : "201327fda1c44704ac01181e963d463c"
    },
    "triggerId" : "idn:access-requested",
    "contentJson" : {
      "workflowId" : 1234
    }
  },
  "created" : "2020-03-27T20:40:10.738Z",
  "triggerId" : "idn:access-request-post-approval",
  "subscriptionName" : "Access request subscription",
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "completed" : "2020-03-27T20:42:14.738Z",
  "completeInvocationInput" : {
    "output" : {
      "approved" : false
    },
    "localizedError" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  },
  "subscriptionId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "type" : "TEST"
}, {
  "startInvocationInput" : {
    "input" : {
      "identityId" : "201327fda1c44704ac01181e963d463c"
    },
    "triggerId" : "idn:access-requested",
    "contentJson" : {
      "workflowId" : 1234
    }
  },
  "created" : "2020-03-27T20:40:10.738Z",
  "triggerId" : "idn:access-request-post-approval",
  "subscriptionName" : "Access request subscription",
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "completed" : "2020-03-27T20:42:14.738Z",
  "completeInvocationInput" : {
    "output" : {
      "approved" : false
    },
    "localizedError" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  },
  "subscriptionId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "type" : "TEST"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "triggerId eq "idn:access-request-dynamic-approver""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* (optional) (default to undefined)
const sorters : string = "created"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** (optional) (default to undefined)

try {
    const val = await triggersBetaApi.listTriggerInvocationStatus();
    
    // Below is a request that includes all optional parameters      
    // const val = await triggersBetaApi.listTriggerInvocationStatus(limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "outputSchema" : "{\"definitions\":{\"record:AccessRequestDynamicApproverOutput\":{\"type\":[\"null\",\"object\"],\"required\":[\"id\",\"name\",\"type\"],\"additionalProperties\":true,\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"}}}},\"$ref\":\"#/definitions/record:AccessRequestDynamicApproverOutput\"}",
  "inputSchema" : "{\"definitions\":{\"record:AccessRequestDynamicApproverInput\":{\"type\":\"object\",\"required\":[\"accessRequestId\",\"requestedFor\",\"requestedItems\",\"requestedBy\"],\"additionalProperties\":true,\"properties\":{\"accessRequestId\":{\"type\":\"string\"},\"requestedFor\":{\"$ref\":\"#/definitions/record:requestedForIdentityRef\"},\"requestedItems\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/record:requestedObjectRef\"}},\"requestedBy\":{\"$ref\":\"#/definitions/record:requestedByIdentityRef\"}}},\"record:requestedForIdentityRef\":{\"type\":\"object\",\"required\":[\"id\",\"name\",\"type\"],\"additionalProperties\":true,\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"}}},\"record:requestedObjectRef\":{\"type\":\"object\",\"optional\":[\"description\",\"comment\"],\"required\":[\"id\",\"name\",\"type\",\"operation\"],\"additionalProperties\":true,\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"description\":{\"oneOf\":[{\"type\":\"null\"},{\"type\":\"string\"}]},\"type\":{\"type\":\"string\"},\"operation\":{\"type\":\"string\"},\"comment\":{\"oneOf\":[{\"type\":\"null\"},{\"type\":\"string\"}]}}},\"record:requestedByIdentityRef\":{\"type\":\"object\",\"required\":[\"type\",\"id\",\"name\"],\"additionalProperties\":true,\"properties\":{\"type\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}}}},\"$ref\":\"#/definitions/record:AccessRequestDynamicApproverInput\"}",
  "exampleOutput" : {
    "name" : "Adam Adams",
    "id" : "2c91808b6ef1d43e016efba0ce470906",
    "type" : "IDENTITY"
  },
  "exampleInput" : {
    "requestedFor" : [ {
      "name" : "Robert Robinson",
      "id" : "2c4180a46faadee4016fb4e018c20626",
      "type" : "IDENTITY"
    }, {
      "name" : "Robert Robinson",
      "id" : "2c4180a46faadee4016fb4e018c20626",
      "type" : "IDENTITY"
    }, {
      "name" : "Robert Robinson",
      "id" : "2c4180a46faadee4016fb4e018c20626",
      "type" : "IDENTITY"
    }, {
      "name" : "Robert Robinson",
      "id" : "2c4180a46faadee4016fb4e018c20626",
      "type" : "IDENTITY"
    }, {
      "name" : "Robert Robinson",
      "id" : "2c4180a46faadee4016fb4e018c20626",
      "type" : "IDENTITY"
    } ],
    "requestedBy" : "",
    "accessRequestId" : "4b4d982dddff4267ab12f0f1e72b5a6d",
    "requestedItems" : [ {
      "name" : "Engineering Access",
      "description" : "Engineering Access",
      "comment" : "William needs this access for his day to day job activities.",
      "id" : "2c91808b6ef1d43e016efba0ce470904",
      "type" : "ACCESS_PROFILE",
      "operation" : "Add"
    }, {
      "name" : "Engineering Access",
      "description" : "Engineering Access",
      "comment" : "William needs this access for his day to day job activities.",
      "id" : "2c91808b6ef1d43e016efba0ce470904",
      "type" : "ACCESS_PROFILE",
      "operation" : "Add"
    }, {
      "name" : "Engineering Access",
      "description" : "Engineering Access",
      "comment" : "William needs this access for his day to day job activities.",
      "id" : "2c91808b6ef1d43e016efba0ce470904",
      "type" : "ACCESS_PROFILE",
      "operation" : "Add"
    }, {
      "name" : "Engineering Access",
      "description" : "Engineering Access",
      "comment" : "William needs this access for his day to day job activities.",
      "id" : "2c91808b6ef1d43e016efba0ce470904",
      "type" : "ACCESS_PROFILE",
      "operation" : "Add"
    }, {
      "name" : "Engineering Access",
      "description" : "Engineering Access",
      "comment" : "William needs this access for his day to day job activities.",
      "id" : "2c91808b6ef1d43e016efba0ce470904",
      "type" : "ACCESS_PROFILE",
      "operation" : "Add"
    } ]
  },
  "name" : "Access Request Dynamic Approver",
  "description" : "Trigger for getting a dynamic approver.",
  "id" : "idn:access-request-dynamic-approver",
  "type" : "FIRE_AND_FORGET"
}, {
  "outputSchema" : "{\"definitions\":{\"record:AccessRequestDynamicApproverOutput\":{\"type\":[\"null\",\"object\"],\"required\":[\"id\",\"name\",\"type\"],\"additionalProperties\":true,\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"}}}},\"$ref\":\"#/definitions/record:AccessRequestDynamicApproverOutput\"}",
  "inputSchema" : "{\"definitions\":{\"record:AccessRequestDynamicApproverInput\":{\"type\":\"object\",\"required\":[\"accessRequestId\",\"requestedFor\",\"requestedItems\",\"requestedBy\"],\"additionalProperties\":true,\"properties\":{\"accessRequestId\":{\"type\":\"string\"},\"requestedFor\":{\"$ref\":\"#/definitions/record:requestedForIdentityRef\"},\"requestedItems\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/record:requestedObjectRef\"}},\"requestedBy\":{\"$ref\":\"#/definitions/record:requestedByIdentityRef\"}}},\"record:requestedForIdentityRef\":{\"type\":\"object\",\"required\":[\"id\",\"name\",\"type\"],\"additionalProperties\":true,\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"}}},\"record:requestedObjectRef\":{\"type\":\"object\",\"optional\":[\"description\",\"comment\"],\"required\":[\"id\",\"name\",\"type\",\"operation\"],\"additionalProperties\":true,\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"description\":{\"oneOf\":[{\"type\":\"null\"},{\"type\":\"string\"}]},\"type\":{\"type\":\"string\"},\"operation\":{\"type\":\"string\"},\"comment\":{\"oneOf\":[{\"type\":\"null\"},{\"type\":\"string\"}]}}},\"record:requestedByIdentityRef\":{\"type\":\"object\",\"required\":[\"type\",\"id\",\"name\"],\"additionalProperties\":true,\"properties\":{\"type\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}}}},\"$ref\":\"#/definitions/record:AccessRequestDynamicApproverInput\"}",
  "exampleOutput" : {
    "name" : "Adam Adams",
    "id" : "2c91808b6ef1d43e016efba0ce470906",
    "type" : "IDENTITY"
  },
  "exampleInput" : {
    "requestedFor" : [ {
      "name" : "Robert Robinson",
      "id" : "2c4180a46faadee4016fb4e018c20626",
      "type" : "IDENTITY"
    }, {
      "name" : "Robert Robinson",
      "id" : "2c4180a46faadee4016fb4e018c20626",
      "type" : "IDENTITY"
    }, {
      "name" : "Robert Robinson",
      "id" : "2c4180a46faadee4016fb4e018c20626",
      "type" : "IDENTITY"
    }, {
      "name" : "Robert Robinson",
      "id" : "2c4180a46faadee4016fb4e018c20626",
      "type" : "IDENTITY"
    }, {
      "name" : "Robert Robinson",
      "id" : "2c4180a46faadee4016fb4e018c20626",
      "type" : "IDENTITY"
    } ],
    "requestedBy" : "",
    "accessRequestId" : "4b4d982dddff4267ab12f0f1e72b5a6d",
    "requestedItems" : [ {
      "name" : "Engineering Access",
      "description" : "Engineering Access",
      "comment" : "William needs this access for his day to day job activities.",
      "id" : "2c91808b6ef1d43e016efba0ce470904",
      "type" : "ACCESS_PROFILE",
      "operation" : "Add"
    }, {
      "name" : "Engineering Access",
      "description" : "Engineering Access",
      "comment" : "William needs this access for his day to day job activities.",
      "id" : "2c91808b6ef1d43e016efba0ce470904",
      "type" : "ACCESS_PROFILE",
      "operation" : "Add"
    }, {
      "name" : "Engineering Access",
      "description" : "Engineering Access",
      "comment" : "William needs this access for his day to day job activities.",
      "id" : "2c91808b6ef1d43e016efba0ce470904",
      "type" : "ACCESS_PROFILE",
      "operation" : "Add"
    }, {
      "name" : "Engineering Access",
      "description" : "Engineering Access",
      "comment" : "William needs this access for his day to day job activities.",
      "id" : "2c91808b6ef1d43e016efba0ce470904",
      "type" : "ACCESS_PROFILE",
      "operation" : "Add"
    }, {
      "name" : "Engineering Access",
      "description" : "Engineering Access",
      "comment" : "William needs this access for his day to day job activities.",
      "id" : "2c91808b6ef1d43e016efba0ce470904",
      "type" : "ACCESS_PROFILE",
      "operation" : "Add"
    } ]
  },
  "name" : "Access Request Dynamic Approver",
  "description" : "Trigger for getting a dynamic approver.",
  "id" : "idn:access-request-dynamic-approver",
  "type" : "FIRE_AND_FORGET"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "id eq "idn:access-request-post-approval""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le* (optional) (default to undefined)
const sorters : string = "name"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name** (optional) (default to undefined)

try {
    const val = await triggersBetaApi.listTriggers();
    
    // Below is a request that includes all optional parameters      
    // const val = await triggersBetaApi.listTriggers(limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "filter" : "$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]",
  "httpConfig" : {
    "bearerTokenAuthConfig" : {
      "bearerToken" : "bearerToken"
    },
    "httpAuthenticationType" : "BASIC_AUTH",
    "httpDispatchMode" : "SYNC",
    "basicAuthConfig" : {
      "password" : "password",
      "userName" : "user@example.com"
    },
    "url" : "https://www.example.com"
  },
  "triggerName" : "Access Requested",
  "triggerId" : "idn:access-request-post-approval",
  "name" : "Access request subscription",
  "description" : "Access requested to site xyz",
  "eventBridgeConfig" : {
    "awsRegion" : "us-west-1",
    "awsAccount" : "123456789012"
  },
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "responseDeadline" : "PT1H",
  "type" : "HTTP",
  "enabled" : true
}


const id : string = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"; // ID of the Subscription to patch (default to undefined)
const subscriptionPatchRequestInnerBeta : Array<SubscriptionPatchRequestInnerBeta> = ; // 

try {
    const val = await triggersBetaApi.patchSubscription(id, subscriptionPatchRequestInnerBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await triggersBetaApi.patchSubscription(id, subscriptionPatchRequestInnerBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "triggerId" : "idn:access-requested",
  "contentJson" : {
    "workflowId" : 1234
  },
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "secret" : "0f979022-08be-44f2-b6f9-7393ec73ed9b"
}, {
  "triggerId" : "idn:access-requested",
  "contentJson" : {
    "workflowId" : 1234
  },
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "secret" : "0f979022-08be-44f2-b6f9-7393ec73ed9b"
} ]


const testInvocationBeta : TestInvocationBeta = 

try {
    const val = await triggersBetaApi.startTestTriggerInvocation(testInvocationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await triggersBetaApi.startTestTriggerInvocation(testInvocationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "isValid" : true,
  "isPathExist" : true,
  "isValidJSONPath" : true
}


const validateFilterInputDtoBeta : ValidateFilterInputDtoBeta = 

try {
    const val = await triggersBetaApi.testSubscriptionFilter(validateFilterInputDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await triggersBetaApi.testSubscriptionFilter(validateFilterInputDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "filter" : "$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]",
  "httpConfig" : {
    "bearerTokenAuthConfig" : {
      "bearerToken" : "bearerToken"
    },
    "httpAuthenticationType" : "BASIC_AUTH",
    "httpDispatchMode" : "SYNC",
    "basicAuthConfig" : {
      "password" : "password",
      "userName" : "user@example.com"
    },
    "url" : "https://www.example.com"
  },
  "triggerName" : "Access Requested",
  "triggerId" : "idn:access-request-post-approval",
  "name" : "Access request subscription",
  "description" : "Access requested to site xyz",
  "eventBridgeConfig" : {
    "awsRegion" : "us-west-1",
    "awsAccount" : "123456789012"
  },
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "responseDeadline" : "PT1H",
  "type" : "HTTP",
  "enabled" : true
}


const id : string = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"; // Subscription ID (default to undefined)
const subscriptionPutRequestBeta : SubscriptionPutRequestBeta = 

try {
    const val = await triggersBetaApi.updateSubscription(id, subscriptionPutRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await triggersBetaApi.updateSubscription(id, subscriptionPutRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

