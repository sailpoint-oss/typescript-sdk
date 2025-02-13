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

{
  "armAuth" : "epiYNTRYA2S7swisDWk1Zv4VMNgvqEjiBh5_ufuCWsma2m-5XADijqBg0ijXLby5nS6lxZNXabhGnAPGeDGc4V3jQKrhwV-UHypRLs8ZLgOjiQNus9NimS0uPdKomRW6TFWqXyfnYd-znNgbbVuwUy9GyD9ebDVJSntPastxSx7UcyGuWBqfNZYpuxKRWe_7TVY60qL55jUqyz8N4XUbbdcxdbZ0uik6ut-Bv90MKTbZexBW_PR4qcgIkaEs4kIenLyBxnGziYo7AO0tJ8bGHO8FJRkibCpAQIt7PISLo7Gg_Xf9j10dKq2YDgy4pPTvz3fE2ZHYnXCXvXFSA-vVag==",
  "armCustomerId" : "DE38E75A-5FF6-4A65-5DC7-08D64426B09E",
  "orgName" : "acme-solar",
  "lcsChangeHonorsSourceEnableFeature" : false,
  "armDb" : "EU",
  "iaiEnableCertificationRecommendations" : true,
  "timeZone" : "America/Toronto",
  "armSsoUrl" : "https://your-arm-sso-url",
  "sodReportConfigs" : [ {
    "included" : false,
    "required" : true,
    "columnName" : "SOD Business Name",
    "order" : 2
  }, {
    "included" : false,
    "required" : true,
    "columnName" : "SOD Business Name",
    "order" : 2
  } ],
  "armSapSystemIdMappings" : "[{sourceId=2c91808c791a94e501792388b0d62659, systemId=1556}, {sourceId=2_2c91808c791a94e501792388b0d62659, systemId=2_1556}, {sourceId=3_2c91808c791a94e501792388b0d62659, systemId=3_1556}]"
}



try {
    const val = await orgConfigBetaApi.getOrgConfig();
    
    // Below is a request that includes all optional parameters      
    // const val = await orgConfigBetaApi.getOrgConfig();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ "", "" ]



try {
    const val = await orgConfigBetaApi.getValidTimeZones();
    
    // Below is a request that includes all optional parameters      
    // const val = await orgConfigBetaApi.getValidTimeZones();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "armAuth" : "epiYNTRYA2S7swisDWk1Zv4VMNgvqEjiBh5_ufuCWsma2m-5XADijqBg0ijXLby5nS6lxZNXabhGnAPGeDGc4V3jQKrhwV-UHypRLs8ZLgOjiQNus9NimS0uPdKomRW6TFWqXyfnYd-znNgbbVuwUy9GyD9ebDVJSntPastxSx7UcyGuWBqfNZYpuxKRWe_7TVY60qL55jUqyz8N4XUbbdcxdbZ0uik6ut-Bv90MKTbZexBW_PR4qcgIkaEs4kIenLyBxnGziYo7AO0tJ8bGHO8FJRkibCpAQIt7PISLo7Gg_Xf9j10dKq2YDgy4pPTvz3fE2ZHYnXCXvXFSA-vVag==",
  "armCustomerId" : "DE38E75A-5FF6-4A65-5DC7-08D64426B09E",
  "orgName" : "acme-solar",
  "lcsChangeHonorsSourceEnableFeature" : false,
  "armDb" : "EU",
  "iaiEnableCertificationRecommendations" : true,
  "timeZone" : "America/Toronto",
  "armSsoUrl" : "https://your-arm-sso-url",
  "sodReportConfigs" : [ {
    "included" : false,
    "required" : true,
    "columnName" : "SOD Business Name",
    "order" : 2
  }, {
    "included" : false,
    "required" : true,
    "columnName" : "SOD Business Name",
    "order" : 2
  } ],
  "armSapSystemIdMappings" : "[{sourceId=2c91808c791a94e501792388b0d62659, systemId=1556}, {sourceId=2_2c91808c791a94e501792388b0d62659, systemId=2_1556}, {sourceId=3_2c91808c791a94e501792388b0d62659, systemId=3_1556}]"
}


const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/timeZone, value=America/Toronto}]; // A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

try {
    const val = await orgConfigBetaApi.patchOrgConfig(jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await orgConfigBetaApi.patchOrgConfig(jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

