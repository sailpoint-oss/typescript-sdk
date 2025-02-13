---
title: UIMetadataBetaApi
pagination_label: UIMetadataBetaApi
sidebar_label: UIMetadataBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'UIMetadataBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'UIMetadataBetaApi']
---

# UIMetadataBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTenantUiMetadata**](UIMetadataBetaApi.md#getTenantUiMetadata) | **GET** /ui-metadata/tenant | Get a tenant UI metadata
[**setTenantUiMetadata**](UIMetadataBetaApi.md#setTenantUiMetadata) | **PUT** /ui-metadata/tenant | Update tenant UI metadata



## getTenantUiMetadata

> TenantUiMetadataItemResponseBeta getTenantUiMetadata()

Get a tenant UI metadata

This API endpoint retrieves UI metadata configured for your tenant. A token with ORG_ADMIN authority is required to call this API.

### Parameters

This endpoint does not need any parameter.

### Return type

[**TenantUiMetadataItemResponseBeta**](../Models/TenantUiMetadataItemResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, UIMetadataBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const uIMetadataBetaApi = new UIMetadataBetaApi(apiConfig);

{
  "usernameEmptyText" : "Please provide your work email address...",
  "usernameLabel" : "Email",
  "iframeWhiteList" : "http://example.com http://example2.com"
}



try {
    const val = await uIMetadataBetaApi.getTenantUiMetadata();
    
    // Below is a request that includes all optional parameters      
    // const val = await uIMetadataBetaApi.getTenantUiMetadata();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## setTenantUiMetadata

> TenantUiMetadataItemResponseBeta setTenantUiMetadata(tenantUiMetadataItemUpdateRequestBeta)

Update tenant UI metadata

This API endpoint updates UI metadata for your tenant. These changes may require up to 5 minutes to take effect on the UI. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantUiMetadataItemUpdateRequestBeta** | [**TenantUiMetadataItemUpdateRequestBeta**](../Models/TenantUiMetadataItemUpdateRequestBeta.md)|  | 

### Return type

[**TenantUiMetadataItemResponseBeta**](../Models/TenantUiMetadataItemResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, UIMetadataBetaApi, TenantUiMetadataItemUpdateRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const uIMetadataBetaApi = new UIMetadataBetaApi(apiConfig);

{
  "usernameEmptyText" : "Please provide your work email address...",
  "usernameLabel" : "Email",
  "iframeWhiteList" : "http://example.com http://example2.com"
}


const tenantUiMetadataItemUpdateRequestBeta : TenantUiMetadataItemUpdateRequestBeta = 

try {
    const val = await uIMetadataBetaApi.setTenantUiMetadata(tenantUiMetadataItemUpdateRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await uIMetadataBetaApi.setTenantUiMetadata(tenantUiMetadataItemUpdateRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

