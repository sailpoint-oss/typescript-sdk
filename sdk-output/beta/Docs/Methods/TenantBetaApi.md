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
const val = await tenantBetaApi.getTenant();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

