---
title: SODViolationsBetaApi
pagination_label: SODViolationsBetaApi
sidebar_label: SODViolationsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'SODViolationsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'SODViolationsBetaApi']
---

# SODViolationsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**startPredictSodViolations**](SODViolationsBetaApi.md#startPredictSodViolations) | **POST** /sod-violations/predict | Predict SOD violations for identity.



## startPredictSodViolations

> ViolationPredictionBeta startPredictSodViolations(identityWithNewAccessBeta)

Predict SOD violations for identity.

This API is used to check if granting some additional accesses would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.  A token with ORG_ADMIN or API authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityWithNewAccessBeta** | [**IdentityWithNewAccessBeta**](../Models/IdentityWithNewAccessBeta.md)|  | 

### Return type

[**ViolationPredictionBeta**](../Models/ViolationPredictionBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODViolationsBetaApi, IdentityWithNewAccessBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODViolationsBetaApi = new SODViolationsBetaApi(apiConfig);

{
  "violationContexts" : [ {
    "conflictingAccessCriteria" : {
      "leftCriteria" : {
        "criteriaList" : [ {
          "type" : "ENTITLEMENT",
          "id" : "2c9180866166b5b0016167c32ef31a66",
          "existing" : true
        }, {
          "type" : "ENTITLEMENT",
          "id" : "2c9180866166b5b0016167c32ef31a67",
          "existing" : false
        } ]
      },
      "rightCriteria" : {
        "criteriaList" : [ {
          "type" : "ENTITLEMENT",
          "id" : "2c9180866166b5b0016167c32ef31a66",
          "existing" : true
        }, {
          "type" : "ENTITLEMENT",
          "id" : "2c9180866166b5b0016167c32ef31a67",
          "existing" : false
        } ]
      }
    },
    "policy" : {
      "type" : "ENTITLEMENT"
    }
  }, {
    "conflictingAccessCriteria" : {
      "leftCriteria" : {
        "criteriaList" : [ {
          "type" : "ENTITLEMENT",
          "id" : "2c9180866166b5b0016167c32ef31a66",
          "existing" : true
        }, {
          "type" : "ENTITLEMENT",
          "id" : "2c9180866166b5b0016167c32ef31a67",
          "existing" : false
        } ]
      },
      "rightCriteria" : {
        "criteriaList" : [ {
          "type" : "ENTITLEMENT",
          "id" : "2c9180866166b5b0016167c32ef31a66",
          "existing" : true
        }, {
          "type" : "ENTITLEMENT",
          "id" : "2c9180866166b5b0016167c32ef31a67",
          "existing" : false
        } ]
      }
    },
    "policy" : {
      "type" : "ENTITLEMENT"
    }
  } ]
}


const identityWithNewAccessBeta : IdentityWithNewAccessBeta = 

try {
    const val = await sODViolationsBetaApi.startPredictSodViolations(identityWithNewAccessBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODViolationsBetaApi.startPredictSodViolations(identityWithNewAccessBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

