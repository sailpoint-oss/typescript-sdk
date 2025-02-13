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

{
  "response" : [ {
    "request" : {
      "item" : {
        "id" : "2c938083633d259901633d2623ec0375",
        "type" : "ENTITLEMENT"
      },
      "identityId" : "2c938083633d259901633d25c68c00fa"
    },
    "recommenderCalculations" : {
      "identityId" : "2c91808457d8f3ab0157e3e62cb4213c",
      "entitlementId" : "2c91809050db617d0150e0bf3215385e",
      "overallWeightedScore" : 0.8008281904610115,
      "featureWeightedScores" : {
        "key" : 6.027456183070403
      },
      "recommendation" : "YES",
      "threshold" : 1.4658129805029452,
      "identityAttributes" : {
        "key" : {
          "value" : "value"
        }
      },
      "featureValues" : {
        "feature" : "department",
        "numerator" : 14,
        "denominator" : 14
      }
    },
    "translationMessages" : [ {
      "key" : "recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH",
      "values" : [ "75", "department" ]
    } ],
    "recommendation" : "true",
    "interpretations" : [ "75% of identities with the same department have this access. This information had a high impact on the overall score.", "67% of identities with the same peer group have this access. This information had a low impact on the overall score.", "42% of identities with the same location have this access. This information had a low impact on the overall score." ]
  }, {
    "request" : {
      "item" : {
        "id" : "2c938083633d259901633d2623ec0375",
        "type" : "ENTITLEMENT"
      },
      "identityId" : "2c938083633d259901633d25c68c00fa"
    },
    "recommenderCalculations" : {
      "identityId" : "2c91808457d8f3ab0157e3e62cb4213c",
      "entitlementId" : "2c91809050db617d0150e0bf3215385e",
      "overallWeightedScore" : 0.8008281904610115,
      "featureWeightedScores" : {
        "key" : 6.027456183070403
      },
      "recommendation" : "YES",
      "threshold" : 1.4658129805029452,
      "identityAttributes" : {
        "key" : {
          "value" : "value"
        }
      },
      "featureValues" : {
        "feature" : "department",
        "numerator" : 14,
        "denominator" : 14
      }
    },
    "translationMessages" : [ {
      "key" : "recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH",
      "values" : [ "75", "department" ]
    } ],
    "recommendation" : "true",
    "interpretations" : [ "75% of identities with the same department have this access. This information had a high impact on the overall score.", "67% of identities with the same peer group have this access. This information had a low impact on the overall score.", "42% of identities with the same location have this access. This information had a low impact on the overall score." ]
  } ]
}


const recommendationRequestDtoBeta : RecommendationRequestDtoBeta = 

try {
    const val = await iAIRecommendationsBetaApi.getRecommendations(recommendationRequestDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRecommendationsBetaApi.getRecommendations(recommendationRequestDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "recommenderFeatures" : [ "jobTitle", "location", "peer_group", "department", "active" ],
  "peerGroupPercentageThreshold" : 0.5,
  "runAutoSelectOnce" : false,
  "onlyTuneThreshold" : false
}



try {
    const val = await iAIRecommendationsBetaApi.getRecommendationsConfig();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRecommendationsBetaApi.getRecommendationsConfig();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "recommenderFeatures" : [ "jobTitle", "location", "peer_group", "department", "active" ],
  "peerGroupPercentageThreshold" : 0.5,
  "runAutoSelectOnce" : false,
  "onlyTuneThreshold" : false
}


const recommendationConfigDtoBeta : RecommendationConfigDtoBeta = 

try {
    const val = await iAIRecommendationsBetaApi.updateRecommendationsConfig(recommendationConfigDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRecommendationsBetaApi.updateRecommendationsConfig(recommendationConfigDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

