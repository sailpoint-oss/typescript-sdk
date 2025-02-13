---
title: AccountsBetaApi
pagination_label: AccountsBetaApi
sidebar_label: AccountsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccountsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccountsBetaApi']
---

# AccountsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccount**](AccountsBetaApi.md#createAccount) | **POST** /accounts | Create Account
[**deleteAccount**](AccountsBetaApi.md#deleteAccount) | **DELETE** /accounts/{id} | Delete Account
[**deleteAccountAsync**](AccountsBetaApi.md#deleteAccountAsync) | **POST** /accounts/{id}/remove | Remove Account
[**disableAccount**](AccountsBetaApi.md#disableAccount) | **POST** /accounts/{id}/disable | Disable Account
[**disableAccountForIdentity**](AccountsBetaApi.md#disableAccountForIdentity) | **POST** /identities-accounts/{id}/disable | Disable IDN Account for Identity
[**disableAccountsForIdentities**](AccountsBetaApi.md#disableAccountsForIdentities) | **POST** /identities-accounts/disable | Disable IDN Accounts for Identities
[**enableAccount**](AccountsBetaApi.md#enableAccount) | **POST** /accounts/{id}/enable | Enable Account
[**enableAccountForIdentity**](AccountsBetaApi.md#enableAccountForIdentity) | **POST** /identities-accounts/{id}/enable | Enable IDN Account for Identity
[**enableAccountsForIdentities**](AccountsBetaApi.md#enableAccountsForIdentities) | **POST** /identities-accounts/enable | Enable IDN Accounts for Identities
[**getAccount**](AccountsBetaApi.md#getAccount) | **GET** /accounts/{id} | Account Details
[**getAccountEntitlements**](AccountsBetaApi.md#getAccountEntitlements) | **GET** /accounts/{id}/entitlements | Account Entitlements
[**listAccounts**](AccountsBetaApi.md#listAccounts) | **GET** /accounts | Accounts List
[**putAccount**](AccountsBetaApi.md#putAccount) | **PUT** /accounts/{id} | Update Account
[**submitReloadAccount**](AccountsBetaApi.md#submitReloadAccount) | **POST** /accounts/{id}/reload | Reload Account
[**unlockAccount**](AccountsBetaApi.md#unlockAccount) | **POST** /accounts/{id}/unlock | Unlock Account
[**updateAccount**](AccountsBetaApi.md#updateAccount) | **PATCH** /accounts/{id} | Update Account



## createAccount

> AccountsAsyncResultBeta createAccount(accountAttributesCreateBeta)

Create Account

Submits an account creation task - the API then returns the task ID.    The `sourceId` where this account will be created must be included in the `attributes` object.  This endpoint creates an account on the source record in your ISC tenant. This is useful for Flat File (`DelimitedFile`) type sources because it allows you to aggregate new accounts without needing to import a new CSV file every time.   However, if you use this endpoint to create an account for a Direct Connection type source, you must ensure that the account also exists on the target source.  The endpoint doesn\'t actually provision the account on the target source, which means that if the account doesn\'t also exist on the target source, an aggregation between the source and your tenant will remove it from your tenant.   By providing the account ID of an existing account in the request body, this API will function as a PATCH operation and update the account. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountAttributesCreateBeta** | [**AccountAttributesCreateBeta**](../Models/AccountAttributesCreateBeta.md)|  | 

### Return type

[**AccountsAsyncResultBeta**](../Models/AccountsAsyncResultBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi, AccountAttributesCreateBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const accountAttributesCreateBeta : AccountAttributesCreateBeta = ; // 
const val = await accountsBetaApi.createAccount(accountAttributesCreateBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteAccount

> AccountsAsyncResultBeta deleteAccount(id)

Delete Account

Use this API to delete an account.  This endpoint submits an account delete task and returns the task ID.  This endpoint only deletes the account from IdentityNow, not the source itself, which can result in the account\'s returning with the next aggregation between the source and IdentityNow.  To avoid this scenario, it is recommended that you [disable accounts](https://developer.sailpoint.com/idn/api/v3/disable-account) rather than delete them. This will also allow you to reenable the accounts in the future.  A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API. >**NOTE:** You can only delete accounts from sources of the \"DelimitedFile\" type.**

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Account ID. | [default to undefined]

### Return type

[**AccountsAsyncResultBeta**](../Models/AccountsAsyncResultBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // Account ID.
const val = await accountsBetaApi.deleteAccount(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteAccountAsync

> TaskResultDtoBeta deleteAccountAsync(id)

Remove Account

Use this endpoint to remove accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.  This endpoint is good for: * Removing accounts that no longer exist on the source. * Removing accounts that won\'t be aggregated following updates to the source configuration. * Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The account id | [default to undefined]

### Return type

[**TaskResultDtoBeta**](../Models/TaskResultDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const id : string = "c350d6aa4f104c61b062cb632421ad10"; // The account id
const val = await accountsBetaApi.deleteAccountAsync(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## disableAccount

> AccountsAsyncResultBeta disableAccount(id, accountToggleRequestBeta)

Disable Account

This API submits a task to disable the account and returns the task ID.   A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or HELPDESK authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The account id | [default to undefined]
 **accountToggleRequestBeta** | [**AccountToggleRequestBeta**](../Models/AccountToggleRequestBeta.md)|  | 

### Return type

[**AccountsAsyncResultBeta**](../Models/AccountsAsyncResultBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi, AccountToggleRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The account id
const accountToggleRequestBeta : AccountToggleRequestBeta = ; // 
const val = await accountsBetaApi.disableAccount(id, accountToggleRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## disableAccountForIdentity

> object disableAccountForIdentity(id)

Disable IDN Account for Identity

This API submits a task to disable IDN account for a single identity.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity id. | [default to undefined]

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const id : string = "2c91808384203c2d018437e631158309"; // The identity id.
const val = await accountsBetaApi.disableAccountForIdentity(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## disableAccountsForIdentities

> Array&lt;BulkIdentitiesAccountsResponseBeta&gt; disableAccountsForIdentities(identitiesAccountsBulkRequestBeta)

Disable IDN Accounts for Identities

This API submits tasks to disable IDN account for each identity provided in the request body.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identitiesAccountsBulkRequestBeta** | [**IdentitiesAccountsBulkRequestBeta**](../Models/IdentitiesAccountsBulkRequestBeta.md)|  | 

### Return type

[**Array&lt;BulkIdentitiesAccountsResponseBeta&gt;**](../Models/BulkIdentitiesAccountsResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi, IdentitiesAccountsBulkRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const identitiesAccountsBulkRequestBeta : IdentitiesAccountsBulkRequestBeta = ; // 
const val = await accountsBetaApi.disableAccountsForIdentities(identitiesAccountsBulkRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## enableAccount

> AccountsAsyncResultBeta enableAccount(id, accountToggleRequestBeta)

Enable Account

This API submits a task to enable account and returns the task ID.   A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or HELPDESK authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The account id | [default to undefined]
 **accountToggleRequestBeta** | [**AccountToggleRequestBeta**](../Models/AccountToggleRequestBeta.md)|  | 

### Return type

[**AccountsAsyncResultBeta**](../Models/AccountsAsyncResultBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi, AccountToggleRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The account id
const accountToggleRequestBeta : AccountToggleRequestBeta = ; // 
const val = await accountsBetaApi.enableAccount(id, accountToggleRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## enableAccountForIdentity

> object enableAccountForIdentity(id)

Enable IDN Account for Identity

This API submits a task to enable IDN account for a single identity.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity id. | [default to undefined]

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const id : string = "2c91808384203c2d018437e631158309"; // The identity id.
const val = await accountsBetaApi.enableAccountForIdentity(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## enableAccountsForIdentities

> Array&lt;BulkIdentitiesAccountsResponseBeta&gt; enableAccountsForIdentities(identitiesAccountsBulkRequestBeta)

Enable IDN Accounts for Identities

This API submits tasks to enable IDN account for each identity provided in the request body.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identitiesAccountsBulkRequestBeta** | [**IdentitiesAccountsBulkRequestBeta**](../Models/IdentitiesAccountsBulkRequestBeta.md)|  | 

### Return type

[**Array&lt;BulkIdentitiesAccountsResponseBeta&gt;**](../Models/BulkIdentitiesAccountsResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi, IdentitiesAccountsBulkRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const identitiesAccountsBulkRequestBeta : IdentitiesAccountsBulkRequestBeta = ; // 
const val = await accountsBetaApi.enableAccountsForIdentities(identitiesAccountsBulkRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getAccount

> AccountBeta getAccount(id)

Account Details

Use this API to return the details for a single account by its ID.   A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or HELPDESK authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Account ID. | [default to undefined]

### Return type

[**AccountBeta**](../Models/AccountBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // Account ID.
const val = await accountsBetaApi.getAccount(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getAccountEntitlements

> Array&lt;EntitlementBeta&gt; getAccountEntitlements(id, offset, limit, count)

Account Entitlements

This API returns entitlements of the account.   A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or HELPDESK authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The account id | [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;EntitlementBeta&gt;**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The account id
const offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await accountsBetaApi.getAccountEntitlements(id, offset, limit, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listAccounts

> Array&lt;AccountBeta&gt; listAccounts(detailLevel, limit, offset, count, filters, sorters)

Accounts List

List accounts.  

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detailLevel** | **&#39;SLIM&#39; | &#39;FULL&#39;**| This value determines whether the API provides &#x60;SLIM&#x60; or increased level of detail (&#x60;FULL&#x60;) for each account in the returned list. &#x60;FULL&#x60; is the default behavior. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, identity.id, nativeIdentity, uuid, manuallyCorrelated, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType** | [optional] [default to undefined]

### Return type

[**Array&lt;AccountBeta&gt;**](../Models/AccountBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const detailLevel = "FULL", // 'SLIM' | 'FULL' | This value determines whether the API provides `SLIM` or increased level of detail (`FULL`) for each account in the returned list. `FULL` is the default behavior.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "identityId eq "2c9180858082150f0180893dbaf44201"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull*
  sorters = "id,name"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, identity.id, nativeIdentity, uuid, manuallyCorrelated, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType**
const val = await accountsBetaApi.listAccounts(detailLevel, limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## putAccount

> AccountsAsyncResultBeta putAccount(id, accountAttributesBeta)

Update Account

Use this API to update an account with a PUT request.   This endpoint submits an account update task and returns the task ID.    A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.  >**Note: You can only use this PUT endpoint to update accounts from flat file sources.** 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Account ID. | [default to undefined]
 **accountAttributesBeta** | [**AccountAttributesBeta**](../Models/AccountAttributesBeta.md)|  | 

### Return type

[**AccountsAsyncResultBeta**](../Models/AccountsAsyncResultBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi, AccountAttributesBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // Account ID.
const accountAttributesBeta : AccountAttributesBeta = ; // 
const val = await accountsBetaApi.putAccount(id, accountAttributesBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## submitReloadAccount

> AccountsAsyncResultBeta submitReloadAccount(id)

Reload Account

This API asynchronously reloads the account directly from the connector and performs a one-time aggregation process.   A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or HELPDESK authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The account id | [default to undefined]

### Return type

[**AccountsAsyncResultBeta**](../Models/AccountsAsyncResultBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The account id
const val = await accountsBetaApi.submitReloadAccount(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## unlockAccount

> AccountsAsyncResultBeta unlockAccount(id, accountUnlockRequestBeta)

Unlock Account

This API submits a task to unlock an account and returns the task ID.   To use this endpoint to unlock an account that has the `forceProvisioning` option set to true, the `idn:accounts-provisioning:manage` scope is required.  A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or HELPDESK authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The account ID. | [default to undefined]
 **accountUnlockRequestBeta** | [**AccountUnlockRequestBeta**](../Models/AccountUnlockRequestBeta.md)|  | 

### Return type

[**AccountsAsyncResultBeta**](../Models/AccountsAsyncResultBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi, AccountUnlockRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The account ID.
const accountUnlockRequestBeta : AccountUnlockRequestBeta = ; // 
const val = await accountsBetaApi.unlockAccount(id, accountUnlockRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updateAccount

> object updateAccount(id, requestBody)

Update Account

Use this API to update account details.  A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.  This API supports updating an account\'s correlation by modifying the `identityId` and `manuallyCorrelated` fields.  To reassign an account from one identity to another, replace the current `identityId` with a new value.  If the account you\'re assigning was provisioned by Identity Security Cloud (ISC), it\'s possible for ISC to create a new account  for the previous identity as soon as the account is moved. If the account you\'re assigning is authoritative,  this causes the previous identity to become uncorrelated and can even result in its deletion. All accounts that are reassigned will be set to `manuallyCorrelated: true` unless you specify otherwise.  >**Note:** The `attributes` field can only be modified for flat file accounts.  

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Account ID. | [default to undefined]
 **requestBody** | [**Array&lt;object&gt;**](../Models/object.md)| A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountsBetaApi, object } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountsBetaApi = new AccountsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // Account ID.
const requestBody : Array<object> = {Uncorrelate account={description=Remove account from Identity, value=[{op=remove, path=/identityId}]}, Reassign account={description=Move account from one Identity to another Identity, value=[{op=replace, path=/identityId, value=2c9180857725c14301772a93bb77242d}]}, Add account attribute={description=Add flat file account's attribute, value=[{op=add, path=/attributes/familyName, value=Smith}]}, Replace account attribute={description=Replace flat file account's attribute, value=[{op=replace, path=/attributes/familyName, value=Smith}]}, Remove account attribute={description=Remove flat file account's attribute, value=[{op=remove, path=/attributes/familyName}]}}; // A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const val = await accountsBetaApi.updateAccount(id, requestBody);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

