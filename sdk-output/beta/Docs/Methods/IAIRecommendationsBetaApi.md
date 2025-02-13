---
title: IAIRecommendationsBetaApi
pagination_label: IAIRecommendationsBetaApi
sidebar_label: IAIRecommendationsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'IAIRecommendationsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'IAIRecommendationsBetaApi']
---

# IAIRecommendationsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRecommendations**](IAIRecommendationsBetaApi.md#getRecommendations) | **POST** /recommendations/request | Returns a Recommendation Based on Object
[**getRecommendationsConfig**](IAIRecommendationsBetaApi.md#getRecommendationsConfig) | **GET** /recommendations/config | Get certification recommendation config values
[**updateRecommendationsConfig**](IAIRecommendationsBetaApi.md#updateRecommendationsConfig) | **PUT** /recommendations/config | Update certification recommendation config values



## getRecommendations

> RecommendationResponseDtoBeta getRecommendations(recommendationRequestDtoBeta)

Returns a Recommendation Based on Object

The getRecommendations API returns recommendations based on the requested object. The recommendations are invoked by IdentityIQ and IdentityNow plug-ins that retrieve recommendations based on the performed calculations.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recommendationRequestDtoBeta** | [**RecommendationRequestDtoBeta**](../Models/RecommendationRequestDtoBeta.md)|  | 

### Return type

[**RecommendationResponseDtoBeta**](../Models/RecommendationResponseDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRecommendationsBetaApi, RecommendationRequestDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRecommendationsBetaApi = new IAIRecommendationsBetaApi(apiConfig);
const recommendationRequestDtoBeta : RecommendationRequestDtoBeta = ; // 
const val = await iAIRecommendationsBetaApi.getRecommendations(recommendationRequestDtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getRecommendationsConfig

> RecommendationConfigDtoBeta getRecommendationsConfig()

Get certification recommendation config values

Retrieves configuration attributes used by certification recommendations.

### Parameters

This endpoint does not need any parameter.

### Return type

[**RecommendationConfigDtoBeta**](../Models/RecommendationConfigDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRecommendationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRecommendationsBetaApi = new IAIRecommendationsBetaApi(apiConfig);
const val = await iAIRecommendationsBetaApi.getRecommendationsConfig();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updateRecommendationsConfig

> RecommendationConfigDtoBeta updateRecommendationsConfig(recommendationConfigDtoBeta)

Update certification recommendation config values

Updates configuration attributes used by certification recommendations.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recommendationConfigDtoBeta** | [**RecommendationConfigDtoBeta**](../Models/RecommendationConfigDtoBeta.md)|  | 

### Return type

[**RecommendationConfigDtoBeta**](../Models/RecommendationConfigDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRecommendationsBetaApi, RecommendationConfigDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRecommendationsBetaApi = new IAIRecommendationsBetaApi(apiConfig);
const recommendationConfigDtoBeta : RecommendationConfigDtoBeta = ; // 
const val = await iAIRecommendationsBetaApi.updateRecommendationsConfig(recommendationConfigDtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

