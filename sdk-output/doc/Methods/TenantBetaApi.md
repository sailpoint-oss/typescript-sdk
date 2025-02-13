---
title: TenantBetaApi
pagination_label: TenantBetaApi
sidebar_label: TenantBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'TenantBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'TenantBetaApi']
---

# TenantBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTenant**](TenantBetaApi.md#getTenant) | **GET** /tenant | Get Tenant Information.



## getTenant

> TenantBeta getTenant()

Get Tenant Information.

This rest endpoint can be used to retrieve tenant details.

### Parameters

This endpoint does not need any parameter.

### Return type

[**TenantBeta**](../Models/TenantBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TenantBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const tenantBetaApi = new TenantBetaApi(apiConfig);

{
  "pod" : "example-pod",
  "name" : "acme",
  "fullName" : "Acme, Inc",
  "description" : "Description of the Tenant",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "region" : "us-east-1",
  "products" : [ {
    "productRegion" : "us-east-1",
    "reason" : "Reason",
    "notes" : "Example notes",
    "productTenantId" : "tenant#product",
    "productName" : "idn",
    "url" : "https://tenant-name.identitynow.com",
    "productRight" : "idn:ui:view",
    "lastUpdated" : "2020-05-19T13:49:37.385Z",
    "orgType" : "test",
    "licenses" : [ {
      "legacyFeatureName" : "ACCESS_REQUEST",
      "licenseId" : "idn:access-request"
    }, {
      "legacyFeatureName" : "ACCESS_REQUEST",
      "licenseId" : "idn:access-request"
    } ],
    "dateCreated" : "2020-05-19T13:49:37.385Z",
    "apiUrl" : "https://tenant-name.api.identitynow.com",
    "zone" : "Deployment zone for the Product",
    "statusDateTime" : "2020-05-19T13:49:37.385Z",
    "attributes" : {
      "domain" : "https://tenant-name.identitynow.com",
      "maxRegisteredUsers" : 250
    },
    "status" : "active"
  }, {
    "productRegion" : "us-east-1",
    "reason" : "Reason",
    "notes" : "Example notes",
    "productTenantId" : "tenant#product",
    "productName" : "idn",
    "url" : "https://tenant-name.identitynow.com",
    "productRight" : "idn:ui:view",
    "lastUpdated" : "2020-05-19T13:49:37.385Z",
    "orgType" : "test",
    "licenses" : [ {
      "legacyFeatureName" : "ACCESS_REQUEST",
      "licenseId" : "idn:access-request"
    }, {
      "legacyFeatureName" : "ACCESS_REQUEST",
      "licenseId" : "idn:access-request"
    } ],
    "dateCreated" : "2020-05-19T13:49:37.385Z",
    "apiUrl" : "https://tenant-name.api.identitynow.com",
    "zone" : "Deployment zone for the Product",
    "statusDateTime" : "2020-05-19T13:49:37.385Z",
    "attributes" : {
      "domain" : "https://tenant-name.identitynow.com",
      "maxRegisteredUsers" : 250
    },
    "status" : "active"
  } ]
}



try {
    const val = await tenantBetaApi.getTenant();
    
    // Below is a request that includes all optional parameters      
    // const val = await tenantBetaApi.getTenant();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

