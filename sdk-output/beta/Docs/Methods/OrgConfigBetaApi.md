---
title: OrgConfigBetaApi
pagination_label: OrgConfigBetaApi
sidebar_label: OrgConfigBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'OrgConfigBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'OrgConfigBetaApi']
---

# OrgConfigBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrgConfig**](OrgConfigBetaApi.md#getOrgConfig) | **GET** /org-config | Get Org configuration settings
[**getValidTimeZones**](OrgConfigBetaApi.md#getValidTimeZones) | **GET** /org-config/valid-time-zones | Get list of time zones
[**patchOrgConfig**](OrgConfigBetaApi.md#patchOrgConfig) | **PATCH** /org-config | Patch an Org configuration property



## getOrgConfig

> OrgConfigBeta getOrgConfig()

Get Org configuration settings

Get org configuration with only external (org admin) accessible properties for the current org.

### Parameters

This endpoint does not need any parameter.

### Return type

[**OrgConfigBeta**](../Models/OrgConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, OrgConfigBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const orgConfigBetaApi = new OrgConfigBetaApi(apiConfig);
const val = await orgConfigBetaApi.getOrgConfig();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getValidTimeZones

> Array&lt;string&gt; getValidTimeZones()

Get list of time zones

Get a list of valid time zones that can be set in org configurations.

### Parameters

This endpoint does not need any parameter.

### Return type

**Array&lt;string&gt;**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, OrgConfigBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const orgConfigBetaApi = new OrgConfigBetaApi(apiConfig);
const val = await orgConfigBetaApi.getValidTimeZones();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchOrgConfig

> OrgConfigBeta patchOrgConfig(jsonPatchOperationBeta)

Patch an Org configuration property

Patch configuration of the current org using http://jsonpatch.com/ syntax.  Commonly used for changing the time zone of an org.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**OrgConfigBeta**](../Models/OrgConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, OrgConfigBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const orgConfigBetaApi = new OrgConfigBetaApi(apiConfig);
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/timeZone, value=America/Toronto}]; // A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const val = await orgConfigBetaApi.patchOrgConfig(jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

