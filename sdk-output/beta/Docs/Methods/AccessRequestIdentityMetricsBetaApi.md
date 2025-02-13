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
 **type** | **string**| Requested access item\&#39;s type. | [default to undefined]

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
const identityId : string = "7025c863-c270-4ba6-beea-edf3cb091573"; // Manager\'s identity ID.
const requestedObjectId : string = "2db501be-f0fb-4cc5-a695-334133c52891"; // Requested access item\'s ID.
const type : string = "ENTITLEMENT"; // Requested access item\'s type.
const val = await accessRequestIdentityMetricsBetaApi.getAccessRequestIdentityMetrics(identityId, requestedObjectId, type);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

