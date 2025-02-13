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
const identityWithNewAccessBeta : IdentityWithNewAccessBeta = {identityId=2c91808568c529c60168cca6f90c1313, accessRefs=[{type=ENTITLEMENT, id=2c918087682f9a86016839c050861ab1, name=CN=Information Access,OU=test,OU=test-service,DC=TestAD,DC=local}, {type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2, name=CN=Information Technology,OU=test,OU=test-service,DC=TestAD,DC=local}]}; // 
const val = await sODViolationsBetaApi.startPredictSodViolations(identityWithNewAccessBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

