---
title: AccessRequestIdentityMetricsBetaApi
pagination_label: AccessRequestIdentityMetricsBetaApi
sidebar_label: AccessRequestIdentityMetricsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccessRequestIdentityMetricsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccessRequestIdentityMetricsBetaApi']
---

# AccessRequestIdentityMetricsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccessRequestIdentityMetrics**](AccessRequestIdentityMetricsBetaApi.md#getAccessRequestIdentityMetrics) | **GET** /access-request-identity-metrics/{identityId}/requested-objects/{requestedObjectId}/type/{type} | Return access request identity metrics



## getAccessRequestIdentityMetrics

> object getAccessRequestIdentityMetrics(identityId, requestedObjectId, type)

Return access request identity metrics

Use this API to return information access metrics.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| Manager\&#39;s identity ID. | [default to undefined]
 **requestedObjectId** | **string**| Requested access item\&#39;s ID. | [default to undefined]
 **type** | **&#39;ENTITLEMENT&#39; | &#39;ACCESS_PROFILE&#39; | &#39;ROLE&#39;**| Requested access item\&#39;s type. | [default to undefined]

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestIdentityMetricsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestIdentityMetricsBetaApi = new AccessRequestIdentityMetricsBetaApi(apiConfig);

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


const identityId : string = "7025c863-c270-4ba6-beea-edf3cb091573"; // Manager\'s identity ID. (default to undefined)
const requestedObjectId : string = "2db501be-f0fb-4cc5-a695-334133c52891"; // Requested access item\'s ID. (default to undefined)
const type : 'ENTITLEMENT' | 'ACCESS_PROFILE' | 'ROLE' = "ENTITLEMENT"; // Requested access item\'s type. (default to undefined)

try {
    const val = await accessRequestIdentityMetricsBetaApi.getAccessRequestIdentityMetrics(identityId, requestedObjectId, type);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestIdentityMetricsBetaApi.getAccessRequestIdentityMetrics(identityId, requestedObjectId, type);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

