---
title: PersonalAccessTokensBetaApi
pagination_label: PersonalAccessTokensBetaApi
sidebar_label: PersonalAccessTokensBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'PersonalAccessTokensBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'PersonalAccessTokensBetaApi']
---

# PersonalAccessTokensBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPersonalAccessToken**](PersonalAccessTokensBetaApi.md#createPersonalAccessToken) | **POST** /personal-access-tokens | Create Personal Access Token
[**deletePersonalAccessToken**](PersonalAccessTokensBetaApi.md#deletePersonalAccessToken) | **DELETE** /personal-access-tokens/{id} | Delete Personal Access Token
[**listPersonalAccessTokens**](PersonalAccessTokensBetaApi.md#listPersonalAccessTokens) | **GET** /personal-access-tokens | List Personal Access Tokens
[**patchPersonalAccessToken**](PersonalAccessTokensBetaApi.md#patchPersonalAccessToken) | **PATCH** /personal-access-tokens/{id} | Patch Personal Access Token



## createPersonalAccessToken

> CreatePersonalAccessTokenResponseBeta createPersonalAccessToken(createPersonalAccessTokenRequestBeta)

Create Personal Access Token

This creates a personal access token.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPersonalAccessTokenRequestBeta** | [**CreatePersonalAccessTokenRequestBeta**](../Models/CreatePersonalAccessTokenRequestBeta.md)| Name and scope of personal access token. | 

### Return type

[**CreatePersonalAccessTokenResponseBeta**](../Models/CreatePersonalAccessTokenResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PersonalAccessTokensBetaApi, CreatePersonalAccessTokenRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const personalAccessTokensBetaApi = new PersonalAccessTokensBetaApi(apiConfig);

{
  "owner" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2017-07-11T18:45:37.098Z",
  "scope" : [ "demo:personal-access-token-scope:first", "demo:personal-access-token-scope:second" ],
  "accessTokenValiditySeconds" : 36900,
  "name" : "NodeJS Integration",
  "id" : "86f1dc6fe8f54414950454cbb11278fa",
  "secret" : "1d1bef2b9f426383447f64f69349fc7cac176042578d205c256ba3f37c59adb9"
}


const createPersonalAccessTokenRequestBeta : CreatePersonalAccessTokenRequestBeta = 

try {
    const val = await personalAccessTokensBetaApi.createPersonalAccessToken(createPersonalAccessTokenRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await personalAccessTokensBetaApi.createPersonalAccessToken(createPersonalAccessTokenRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deletePersonalAccessToken

> deletePersonalAccessToken(id)

Delete Personal Access Token

This deletes a personal access token.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The personal access token id | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PersonalAccessTokensBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const personalAccessTokensBetaApi = new PersonalAccessTokensBetaApi(apiConfig);

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


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The personal access token id (default to undefined)

try {
    const val = await personalAccessTokensBetaApi.deletePersonalAccessToken(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await personalAccessTokensBetaApi.deletePersonalAccessToken(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listPersonalAccessTokens

> Array&lt;GetPersonalAccessTokenResponseBeta&gt; listPersonalAccessTokens(ownerId, filters)

List Personal Access Tokens

This gets a collection of personal access tokens associated with the optional `owner-id`.  query parameter. If the `owner-id` query parameter is omitted, all personal access tokens  for a tenant will be retrieved, but the caller must have the \'idn:all-personal-access-tokens:read\' right.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| The identity ID of the owner whose personal access tokens should be listed.  If \&quot;me\&quot;, the caller should have the following right: \&#39;idn:my-personal-access-tokens:read\&#39; If an actual owner ID or if the &#x60;owner-id&#x60; parameter is omitted in the request,  the caller should have the following right: \&#39;idn:all-personal-access-tokens:read\&#39;.  If the caller has the following right, then managed personal access tokens associated with &#x60;owner-id&#x60; will be retrieved: \&#39;idn:managed-personal-access-tokens:read\&#39; | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* | [optional] [default to undefined]

### Return type

[**Array&lt;GetPersonalAccessTokenResponseBeta&gt;**](../Models/GetPersonalAccessTokenResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PersonalAccessTokensBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const personalAccessTokensBetaApi = new PersonalAccessTokensBetaApi(apiConfig);

[ {
  "owner" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "lastUsed" : "2017-07-11T18:45:37.098Z",
  "created" : "2017-07-11T18:45:37.098Z",
  "managed" : false,
  "scope" : [ "demo:personal-access-token-scope:first", "demo:personal-access-token-scope:second" ],
  "name" : "NodeJS Integration",
  "id" : "86f1dc6fe8f54414950454cbb11278fa"
}, {
  "owner" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "lastUsed" : "2017-07-11T18:45:37.098Z",
  "created" : "2017-07-11T18:45:37.098Z",
  "managed" : false,
  "scope" : [ "demo:personal-access-token-scope:first", "demo:personal-access-token-scope:second" ],
  "name" : "NodeJS Integration",
  "id" : "86f1dc6fe8f54414950454cbb11278fa"
} ]


const ownerId : string = "2c9180867b50d088017b554662fb281e"; // The identity ID of the owner whose personal access tokens should be listed.  If \"me\", the caller should have the following right: \'idn:my-personal-access-tokens:read\' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: \'idn:all-personal-access-tokens:read\'.  If the caller has the following right, then managed personal access tokens associated with `owner-id` will be retrieved: \'idn:managed-personal-access-tokens:read\' (optional) (default to undefined)
const filters : string = "lastUsed le 2023-02-05T10:59:27.214Z"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional) (default to undefined)

try {
    const val = await personalAccessTokensBetaApi.listPersonalAccessTokens();
    
    // Below is a request that includes all optional parameters      
    // const val = await personalAccessTokensBetaApi.listPersonalAccessTokens(ownerId, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchPersonalAccessToken

> GetPersonalAccessTokenResponseBeta patchPersonalAccessToken(id, jsonPatchOperationBeta)

Patch Personal Access Token

This performs a targeted update to the field(s) of a Personal Access Token.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The Personal Access Token id | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope  | 

### Return type

[**GetPersonalAccessTokenResponseBeta**](../Models/GetPersonalAccessTokenResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PersonalAccessTokensBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const personalAccessTokensBetaApi = new PersonalAccessTokensBetaApi(apiConfig);

{
  "owner" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "lastUsed" : "2017-07-11T18:45:37.098Z",
  "created" : "2017-07-11T18:45:37.098Z",
  "managed" : false,
  "scope" : [ "demo:personal-access-token-scope:first", "demo:personal-access-token-scope:second" ],
  "name" : "NodeJS Integration",
  "id" : "86f1dc6fe8f54414950454cbb11278fa"
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The Personal Access Token id (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/name, value=New name}, {op=replace, path=/scope, value=[sp:scopes:all]}]; // A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope 

try {
    const val = await personalAccessTokensBetaApi.patchPersonalAccessToken(id, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await personalAccessTokensBetaApi.patchPersonalAccessToken(id, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

