---
title: OAuthClientsBetaApi
pagination_label: OAuthClientsBetaApi
sidebar_label: OAuthClientsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'OAuthClientsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'OAuthClientsBetaApi']
---

# OAuthClientsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOauthClient**](OAuthClientsBetaApi.md#createOauthClient) | **POST** /oauth-clients | Create OAuth Client
[**deleteOauthClient**](OAuthClientsBetaApi.md#deleteOauthClient) | **DELETE** /oauth-clients/{id} | Delete OAuth Client
[**getOauthClient**](OAuthClientsBetaApi.md#getOauthClient) | **GET** /oauth-clients/{id} | Get OAuth Client
[**listOauthClients**](OAuthClientsBetaApi.md#listOauthClients) | **GET** /oauth-clients | List OAuth Clients
[**patchOauthClient**](OAuthClientsBetaApi.md#patchOauthClient) | **PATCH** /oauth-clients/{id} | Patch OAuth Client



## createOauthClient

> CreateOAuthClientResponseBeta createOauthClient(createOAuthClientRequestBeta)

Create OAuth Client

This creates an OAuth client.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOAuthClientRequestBeta** | [**CreateOAuthClientRequestBeta**](../Models/CreateOAuthClientRequestBeta.md)|  | 

### Return type

[**CreateOAuthClientResponseBeta**](../Models/CreateOAuthClientResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, OAuthClientsBetaApi, CreateOAuthClientRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const oAuthClientsBetaApi = new OAuthClientsBetaApi(apiConfig);

{
  "internal" : false,
  "created" : "2017-07-11T18:45:37.098Z",
  "businessName" : "Acme-Solar",
  "description" : "An API client used for the authorization_code, refresh_token, and client_credentials flows",
  "secret" : "5c32dd9b21adb51c77794d46e71de117a1d0ddb36a7ff941fa28014ab7de2cf3",
  "refreshTokenValiditySeconds" : 86400,
  "type" : "CONFIDENTIAL",
  "redirectUris" : [ "http://localhost:12345" ],
  "enabled" : true,
  "accessType" : "OFFLINE",
  "grantTypes" : [ "AUTHORIZATION_CODE", "CLIENT_CREDENTIALS", "REFRESH_TOKEN" ],
  "strongAuthSupported" : false,
  "homepageUrl" : "http://localhost:12345",
  "accessTokenValiditySeconds" : 750,
  "scope" : [ "demo:api-client-scope:first", "demo:api-client-scope:second" ],
  "name" : "Demo API Client",
  "claimsSupported" : false,
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581"
}


const createOAuthClientRequestBeta : CreateOAuthClientRequestBeta = 

try {
    const val = await oAuthClientsBetaApi.createOauthClient(createOAuthClientRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await oAuthClientsBetaApi.createOauthClient(createOAuthClientRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteOauthClient

> deleteOauthClient(id)

Delete OAuth Client

This deletes an OAuth client.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The OAuth client id | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, OAuthClientsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const oAuthClientsBetaApi = new OAuthClientsBetaApi(apiConfig);

{
  "causes" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "messages" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "detailCode" : "400.1 Bad Request Content",
  "trackingId" : "e7eab60924f64aa284175b9fa3309599"
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The OAuth client id (default to undefined)

try {
    const val = await oAuthClientsBetaApi.deleteOauthClient(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await oAuthClientsBetaApi.deleteOauthClient(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getOauthClient

> GetOAuthClientResponseBeta getOauthClient(id)

Get OAuth Client

This gets details of an OAuth client.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The OAuth client id | [default to undefined]

### Return type

[**GetOAuthClientResponseBeta**](../Models/GetOAuthClientResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, OAuthClientsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const oAuthClientsBetaApi = new OAuthClientsBetaApi(apiConfig);

{
  "internal" : false,
  "metadata" : "metadata",
  "created" : "2017-07-11T18:45:37.098Z",
  "businessName" : "Acme-Solar",
  "description" : "An API client used for the authorization_code, refresh_token, and client_credentials flows",
  "refreshTokenValiditySeconds" : 86400,
  "secret" : "secret",
  "type" : "CONFIDENTIAL",
  "redirectUris" : [ "http://localhost:12345" ],
  "enabled" : true,
  "accessType" : "OFFLINE",
  "lastUsed" : "2017-07-11T18:45:37.098Z",
  "grantTypes" : [ "AUTHORIZATION_CODE", "CLIENT_CREDENTIALS", "REFRESH_TOKEN" ],
  "strongAuthSupported" : false,
  "homepageUrl" : "http://localhost:12345",
  "accessTokenValiditySeconds" : 750,
  "scope" : [ "demo:api-client-scope:first", "demo:api-client-scope:second" ],
  "name" : "Demo API Client",
  "claimsSupported" : false,
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581"
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The OAuth client id (default to undefined)

try {
    const val = await oAuthClientsBetaApi.getOauthClient(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await oAuthClientsBetaApi.getOauthClient(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listOauthClients

> Array&lt;GetOAuthClientResponseBeta&gt; listOauthClients(filters)

List OAuth Clients

This gets a list of OAuth clients.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* | [optional] [default to undefined]

### Return type

[**Array&lt;GetOAuthClientResponseBeta&gt;**](../Models/GetOAuthClientResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, OAuthClientsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const oAuthClientsBetaApi = new OAuthClientsBetaApi(apiConfig);

[ {
  "internal" : false,
  "metadata" : "metadata",
  "created" : "2017-07-11T18:45:37.098Z",
  "businessName" : "Acme-Solar",
  "description" : "An API client used for the authorization_code, refresh_token, and client_credentials flows",
  "refreshTokenValiditySeconds" : 86400,
  "secret" : "secret",
  "type" : "CONFIDENTIAL",
  "redirectUris" : [ "http://localhost:12345" ],
  "enabled" : true,
  "accessType" : "OFFLINE",
  "lastUsed" : "2017-07-11T18:45:37.098Z",
  "grantTypes" : [ "AUTHORIZATION_CODE", "CLIENT_CREDENTIALS", "REFRESH_TOKEN" ],
  "strongAuthSupported" : false,
  "homepageUrl" : "http://localhost:12345",
  "accessTokenValiditySeconds" : 750,
  "scope" : [ "demo:api-client-scope:first", "demo:api-client-scope:second" ],
  "name" : "Demo API Client",
  "claimsSupported" : false,
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581"
}, {
  "internal" : false,
  "metadata" : "metadata",
  "created" : "2017-07-11T18:45:37.098Z",
  "businessName" : "Acme-Solar",
  "description" : "An API client used for the authorization_code, refresh_token, and client_credentials flows",
  "refreshTokenValiditySeconds" : 86400,
  "secret" : "secret",
  "type" : "CONFIDENTIAL",
  "redirectUris" : [ "http://localhost:12345" ],
  "enabled" : true,
  "accessType" : "OFFLINE",
  "lastUsed" : "2017-07-11T18:45:37.098Z",
  "grantTypes" : [ "AUTHORIZATION_CODE", "CLIENT_CREDENTIALS", "REFRESH_TOKEN" ],
  "strongAuthSupported" : false,
  "homepageUrl" : "http://localhost:12345",
  "accessTokenValiditySeconds" : 750,
  "scope" : [ "demo:api-client-scope:first", "demo:api-client-scope:second" ],
  "name" : "Demo API Client",
  "claimsSupported" : false,
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581"
} ]


const filters : string = "lastUsed le 2023-02-05T10:59:27.214Z"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional) (default to undefined)

try {
    const val = await oAuthClientsBetaApi.listOauthClients();
    
    // Below is a request that includes all optional parameters      
    // const val = await oAuthClientsBetaApi.listOauthClients(filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchOauthClient

> GetOAuthClientResponseBeta patchOauthClient(id, jsonPatchOperationBeta)

Patch OAuth Client

This performs a targeted update to the field(s) of an OAuth client. Request will require a security scope of  - sp:oauth-client:manage

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The OAuth client id | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported  | 

### Return type

[**GetOAuthClientResponseBeta**](../Models/GetOAuthClientResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, OAuthClientsBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const oAuthClientsBetaApi = new OAuthClientsBetaApi(apiConfig);

{
  "internal" : false,
  "metadata" : "metadata",
  "created" : "2017-07-11T18:45:37.098Z",
  "businessName" : "Acme-Solar",
  "description" : "An API client used for the authorization_code, refresh_token, and client_credentials flows",
  "refreshTokenValiditySeconds" : 86400,
  "secret" : "secret",
  "type" : "CONFIDENTIAL",
  "redirectUris" : [ "http://localhost:12345" ],
  "enabled" : true,
  "accessType" : "OFFLINE",
  "lastUsed" : "2017-07-11T18:45:37.098Z",
  "grantTypes" : [ "AUTHORIZATION_CODE", "CLIENT_CREDENTIALS", "REFRESH_TOKEN" ],
  "strongAuthSupported" : false,
  "homepageUrl" : "http://localhost:12345",
  "accessTokenValiditySeconds" : 750,
  "scope" : [ "demo:api-client-scope:first", "demo:api-client-scope:second" ],
  "name" : "Demo API Client",
  "claimsSupported" : false,
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581"
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The OAuth client id (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/strongAuthSupported, value=true}, {op=replace, path=/businessName, value=acme-solar}]; // A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported 

try {
    const val = await oAuthClientsBetaApi.patchOauthClient(id, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await oAuthClientsBetaApi.patchOauthClient(id, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

