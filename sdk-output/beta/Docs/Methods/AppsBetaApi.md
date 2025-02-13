---
title: AppsBetaApi
pagination_label: AppsBetaApi
sidebar_label: AppsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AppsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AppsBetaApi']
---

# AppsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSourceApp**](AppsBetaApi.md#createSourceApp) | **POST** /source-apps | Create source app
[**deleteAccessProfilesFromSourceAppByBulk**](AppsBetaApi.md#deleteAccessProfilesFromSourceAppByBulk) | **POST** /source-apps/{id}/access-profiles/bulk-remove | Bulk remove access profiles from the specified source app
[**deleteSourceApp**](AppsBetaApi.md#deleteSourceApp) | **DELETE** /source-apps/{id} | Delete source app by ID
[**getSourceApp**](AppsBetaApi.md#getSourceApp) | **GET** /source-apps/{id} | Get source app by ID
[**listAccessProfilesForSourceApp**](AppsBetaApi.md#listAccessProfilesForSourceApp) | **GET** /source-apps/{id}/access-profiles | List access profiles for the specified source app
[**listAllSourceApp**](AppsBetaApi.md#listAllSourceApp) | **GET** /source-apps/all | List all source apps
[**listAllUserApps**](AppsBetaApi.md#listAllUserApps) | **GET** /user-apps/all | List all user apps
[**listAssignedSourceApp**](AppsBetaApi.md#listAssignedSourceApp) | **GET** /source-apps/assigned | List assigned source apps
[**listAvailableAccountsForUserApp**](AppsBetaApi.md#listAvailableAccountsForUserApp) | **GET** /user-apps/{id}/available-accounts | List available accounts for user app
[**listAvailableSourceApps**](AppsBetaApi.md#listAvailableSourceApps) | **GET** /source-apps | List available source apps
[**listOwnedUserApps**](AppsBetaApi.md#listOwnedUserApps) | **GET** /user-apps | List owned user apps
[**patchSourceApp**](AppsBetaApi.md#patchSourceApp) | **PATCH** /source-apps/{id} | Patch source app by ID
[**patchUserApp**](AppsBetaApi.md#patchUserApp) | **PATCH** /user-apps/{id} | Patch user app by ID
[**updateSourceAppsInBulk**](AppsBetaApi.md#updateSourceAppsInBulk) | **POST** /source-apps/bulk-update | Bulk update source apps



## createSourceApp

> SourceAppBeta createSourceApp(sourceAppCreateDtoBeta)

Create source app

This endpoint creates a source app using the given source app payload

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceAppCreateDtoBeta** | [**SourceAppCreateDtoBeta**](../Models/SourceAppCreateDtoBeta.md)|  | 

### Return type

[**SourceAppBeta**](../Models/SourceAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi, SourceAppCreateDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const sourceAppCreateDtoBeta : SourceAppCreateDtoBeta = {name=new app name, description=app description, matchAllAccounts=true, accountSource={id=edcb0951812949d085b60cd8bf35bc78}}; // 
const val = await appsBetaApi.createSourceApp(sourceAppCreateDtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteAccessProfilesFromSourceAppByBulk

> Array&lt;AccessProfileDetailsBeta&gt; deleteAccessProfilesFromSourceAppByBulk(id, requestBody, limit)

Bulk remove access profiles from the specified source app

This API returns the final list of access profiles for the specified source app after removing

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the source app | [default to undefined]
 **requestBody** | [**Array&lt;string&gt;**](../Models/string.md)|  | 
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

[**Array&lt;AccessProfileDetailsBeta&gt;**](../Models/AccessProfileDetailsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi, string } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121e121518"; // ID of the source app
const requestBody : Array<string> = ; // 
const limit = 250; // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await appsBetaApi.deleteAccessProfilesFromSourceAppByBulk(id, requestBody, limit);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteSourceApp

> SourceAppBeta deleteSourceApp(id)

Delete source app by ID

Use this API to delete a specific source app

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| source app ID. | [default to undefined]

### Return type

[**SourceAppBeta**](../Models/SourceAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const id : string = "2c9180835d191a86015d28455b4a2329"; // source app ID.
const val = await appsBetaApi.deleteSourceApp(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSourceApp

> SourceAppBeta getSourceApp(id)

Get source app by ID

This API returns a source app by its ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the source app | [default to undefined]

### Return type

[**SourceAppBeta**](../Models/SourceAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121e121518"; // ID of the source app
const val = await appsBetaApi.getSourceApp(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listAccessProfilesForSourceApp

> Array&lt;AccessProfileDetailsBeta&gt; listAccessProfilesForSourceApp(id, limit, offset, filters)

List access profiles for the specified source app

This API returns the list of access profiles for the specified source app

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the source app | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | [optional] [default to undefined]

### Return type

[**Array&lt;AccessProfileDetailsBeta&gt;**](../Models/AccessProfileDetailsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121e121518"; // ID of the source app
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "name eq "developer access profile""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*
const val = await appsBetaApi.listAccessProfilesForSourceApp(id, limit, offset, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listAllSourceApp

> Array&lt;SourceAppBeta&gt; listAllSourceApp(limit, count, offset, sorters, filters)

List all source apps

This API returns the list of all source apps for the org.  A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **accountSource.id**: *eq, in*  **enabled**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;SourceAppBeta&gt;**](../Models/SourceAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "name,-modified", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id**
  filters = "enabled eq true"; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **accountSource.id**: *eq, in*  **enabled**: *eq*
const val = await appsBetaApi.listAllSourceApp(limit, count, offset, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listAllUserApps

> Array&lt;UserAppBeta&gt; listAllUserApps(filters, limit, count, offset)

List all user apps

This API returns the list of all user apps with specified filters. This API must be used with **filters** query parameter.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerId**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq* | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

[**Array&lt;UserAppBeta&gt;**](../Models/UserAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const filters : string = "name eq "user app name""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerId**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq*
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0; // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await appsBetaApi.listAllUserApps(filters, limit, count, offset);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listAssignedSourceApp

> Array&lt;SourceAppBeta&gt; listAssignedSourceApp(limit, count, offset, sorters, filters)

List assigned source apps

This API returns the list of source apps assigned for logged in user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, accountSource.id** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in* | [optional] [default to undefined]

### Return type

[**Array&lt;SourceAppBeta&gt;**](../Models/SourceAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "name,-modified", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, accountSource.id**
  filters = "name eq "source app name""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in*
const val = await appsBetaApi.listAssignedSourceApp(limit, count, offset, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listAvailableAccountsForUserApp

> Array&lt;AppAccountDetailsBeta&gt; listAvailableAccountsForUserApp(id, limit, count, offset)

List available accounts for user app

This API returns the list of available accounts for the specified user app. The user app needs to belong lo logged in user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the user app | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

[**Array&lt;AppAccountDetailsBeta&gt;**](../Models/AppAccountDetailsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121e121518"; // ID of the user app
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0; // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await appsBetaApi.listAvailableAccountsForUserApp(id, limit, count, offset);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listAvailableSourceApps

> Array&lt;SourceAppBeta&gt; listAvailableSourceApps(limit, count, offset, sorters, filters)

List available source apps

This API returns the list of source apps available for access request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in* | [optional] [default to undefined]

### Return type

[**Array&lt;SourceAppBeta&gt;**](../Models/SourceAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "name,-modified", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id**
  filters = "name eq "source app name""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in*
const val = await appsBetaApi.listAvailableSourceApps(limit, count, offset, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listOwnedUserApps

> Array&lt;UserAppBeta&gt; listOwnedUserApps(limit, count, offset, filters)

List owned user apps

This API returns the list of user apps assigned to logged in user

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;UserAppBeta&gt;**](../Models/UserAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "name eq "user app name""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq*
const val = await appsBetaApi.listOwnedUserApps(limit, count, offset, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchSourceApp

> SourceAppPatchDtoBeta patchSourceApp(id, jsonPatchOperationBeta)

Patch source app by ID

This API updates an existing source app using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax. The following fields are patchable: **name**, **description**, **enabled**, **owner**, **provisionRequestEnabled**, **appCenterEnabled**, **accountSource**,  **matchAllAccounts** and **accessProfiles**. Name, description and owner can\'t be empty or null.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the source app to patch | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | [optional] 

### Return type

[**SourceAppPatchDtoBeta**](../Models/SourceAppPatchDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121e121518"; // ID of the source app to patch
const jsonPatchOperationBeta = [{op=replace, path=/enabled, value=true}, {op=replace, path=/matchAllAccounts, value=true}]; // Array<JsonPatchOperationBeta> | 
const val = await appsBetaApi.patchSourceApp(id, jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchUserApp

> UserAppBeta patchUserApp(id, jsonPatchOperationBeta)

Patch user app by ID

This API updates an existing user app using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax. The following fields are patchable: **account**

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the user app to patch | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | [optional] 

### Return type

[**UserAppBeta**](../Models/UserAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121e121518"; // ID of the user app to patch
const jsonPatchOperationBeta = ; // Array<JsonPatchOperationBeta> | 
const val = await appsBetaApi.patchUserApp(id, jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updateSourceAppsInBulk

> updateSourceAppsInBulk(sourceAppBulkUpdateRequestBeta)

Bulk update source apps

This API updates source apps using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.  It can update up to 50 source apps in a batch. The following fields can be updated: **name**, **description**, **enabled**, **owner**, **provisionRequestEnabled**, **appCenterEnabled**, **accountSource**,  **matchAllAccounts**, and **accessProfiles**. Name, description and owner can\'t be empty or null.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceAppBulkUpdateRequestBeta** | [**SourceAppBulkUpdateRequestBeta**](../Models/SourceAppBulkUpdateRequestBeta.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);
const sourceAppBulkUpdateRequestBeta = ; // SourceAppBulkUpdateRequestBeta | 
const val = await appsBetaApi.updateSourceAppsInBulk(sourceAppBulkUpdateRequestBeta);
console.log('API called successfully.');
```
</details>

