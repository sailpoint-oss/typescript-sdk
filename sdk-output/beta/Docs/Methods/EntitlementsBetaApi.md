---
title: EntitlementsBetaApi
pagination_label: EntitlementsBetaApi
sidebar_label: EntitlementsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'EntitlementsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'EntitlementsBetaApi']
---

# EntitlementsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccessModelMetadataForEntitlement**](EntitlementsBetaApi.md#createAccessModelMetadataForEntitlement) | **POST** /entitlements/{id}/access-model-metadata/{attributeKey}/values/{attributeValue} | Add metadata to an entitlement.
[**deleteAccessModelMetadataFromEntitlement**](EntitlementsBetaApi.md#deleteAccessModelMetadataFromEntitlement) | **DELETE** /entitlements/{id}/access-model-metadata/{attributeKey}/values/{attributeValue} | Remove metadata from an entitlement.
[**getEntitlement**](EntitlementsBetaApi.md#getEntitlement) | **GET** /entitlements/{id} | Get an entitlement
[**getEntitlementRequestConfig**](EntitlementsBetaApi.md#getEntitlementRequestConfig) | **GET** /entitlements/{id}/entitlement-request-config | Get Entitlement Request Config
[**importEntitlementsBySource**](EntitlementsBetaApi.md#importEntitlementsBySource) | **POST** /entitlements/aggregate/sources/{id} | Aggregate Entitlements
[**listEntitlementChildren**](EntitlementsBetaApi.md#listEntitlementChildren) | **GET** /entitlements/{id}/children | List of entitlements children
[**listEntitlementParents**](EntitlementsBetaApi.md#listEntitlementParents) | **GET** /entitlements/{id}/parents | List of entitlements parents
[**listEntitlements**](EntitlementsBetaApi.md#listEntitlements) | **GET** /entitlements | Gets a list of entitlements.
[**patchEntitlement**](EntitlementsBetaApi.md#patchEntitlement) | **PATCH** /entitlements/{id} | Patch an entitlement
[**putEntitlementRequestConfig**](EntitlementsBetaApi.md#putEntitlementRequestConfig) | **PUT** /entitlements/{id}/entitlement-request-config | Replace Entitlement Request Config
[**resetSourceEntitlements**](EntitlementsBetaApi.md#resetSourceEntitlements) | **POST** /entitlements/reset/sources/{id} | Reset Source Entitlements
[**updateEntitlementsInBulk**](EntitlementsBetaApi.md#updateEntitlementsInBulk) | **POST** /entitlements/bulk-update | Bulk update an entitlement list



## createAccessModelMetadataForEntitlement

> EntitlementBeta createAccessModelMetadataForEntitlement(id, attributeKey, attributeValue)

Add metadata to an entitlement.

Add single Access Model Metadata to an entitlement.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The entitlement id. | [default to undefined]
 **attributeKey** | **string**| Technical name of the Attribute. | [default to undefined]
 **attributeValue** | **string**| Technical name of the Attribute Value. | [default to undefined]

### Return type

[**EntitlementBeta**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);
const id : string = "2c91808c74ff913f0175097daa9d59cd"; // The entitlement id.
const attributeKey : string = "iscPrivacy"; // Technical name of the Attribute.
const attributeValue : string = "public"; // Technical name of the Attribute Value.
const val = await entitlementsBetaApi.createAccessModelMetadataForEntitlement(id, attributeKey, attributeValue);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteAccessModelMetadataFromEntitlement

> deleteAccessModelMetadataFromEntitlement(id, attributeKey, attributeValue)

Remove metadata from an entitlement.

Remove single Access Model Metadata from an entitlement.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The entitlement id. | [default to undefined]
 **attributeKey** | **string**| Technical name of the Attribute. | [default to undefined]
 **attributeValue** | **string**| Technical name of the Attribute Value. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);
const id : string = "2c91808c74ff913f0175097daa9d59cd"; // The entitlement id.
const attributeKey : string = "iscPrivacy"; // Technical name of the Attribute.
const attributeValue : string = "public"; // Technical name of the Attribute Value.
const val = await entitlementsBetaApi.deleteAccessModelMetadataFromEntitlement(id, attributeKey, attributeValue);
console.log('API called successfully.');
```
</details>


## getEntitlement

> EntitlementBeta getEntitlement(id)

Get an entitlement

This API returns an entitlement by its ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The entitlement ID | [default to undefined]

### Return type

[**EntitlementBeta**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);
const id : string = "2c91808874ff91550175097daaec161c"; // The entitlement ID
const val = await entitlementsBetaApi.getEntitlement(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getEntitlementRequestConfig

> EntitlementRequestConfigBeta getEntitlementRequestConfig(id)

Get Entitlement Request Config

This API returns the entitlement request config for a specified entitlement.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Entitlement Id | [default to undefined]

### Return type

[**EntitlementRequestConfigBeta**](../Models/EntitlementRequestConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);
const id : string = "2c91808874ff91550175097daaec161c"; // Entitlement Id
const val = await entitlementsBetaApi.getEntitlementRequestConfig(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## importEntitlementsBySource

> LoadEntitlementTaskBeta importEntitlementsBySource(id, csvFile)

Aggregate Entitlements

Starts an entitlement aggregation on the specified source. Though this endpoint has been deprecated, you can find its Beta equivalent [here](https://developer.sailpoint.com/docs/api/beta/import-entitlements).  If the target source is a direct connection, then the request body must be empty. You will also need to make sure the Content-Type header is not set. If you set the Content-Type header without specifying a body, then you will receive a 500 error.  If the target source is a delimited file source, then the CSV file needs to be included in the request body. You will also need to set the Content-Type header to `multipart/form-data`.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Source Id | [default to undefined]
 **csvFile** | **File**| The CSV file containing the source entitlements to aggregate. | [optional] [default to undefined]

### Return type

[**LoadEntitlementTaskBeta**](../Models/LoadEntitlementTaskBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // Source Id
const csvFile = BINARY_DATA_HERE; // File | The CSV file containing the source entitlements to aggregate.
const val = await entitlementsBetaApi.importEntitlementsBySource(id, csvFile);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listEntitlementChildren

> Array&lt;EntitlementBeta&gt; listEntitlementChildren(id, limit, offset, count, sorters, filters)

List of entitlements children

This API returns a list of all child entitlements of a given entitlement.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Entitlement Id | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | [optional] [default to undefined]

### Return type

[**Array&lt;EntitlementBeta&gt;**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);
const id : string = "2c91808874ff91550175097daaec161c"; // Entitlement Id
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "name,-modified", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id**
  filters = "attribute eq "memberOf""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*
const val = await entitlementsBetaApi.listEntitlementChildren(id, limit, offset, count, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listEntitlementParents

> Array&lt;EntitlementBeta&gt; listEntitlementParents(id, limit, offset, count, sorters, filters)

List of entitlements parents

This API returns a list of all parent entitlements of a given entitlement.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Entitlement Id | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | [optional] [default to undefined]

### Return type

[**Array&lt;EntitlementBeta&gt;**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);
const id : string = "2c91808c74ff913f0175097daa9d59cd"; // Entitlement Id
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "name,-modified", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id**
  filters = "attribute eq "memberOf""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*
const val = await entitlementsBetaApi.listEntitlementParents(id, limit, offset, count, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listEntitlements

> Array&lt;EntitlementBeta&gt; listEntitlements(accountId, segmentedForIdentity, forSegmentIds, includeUnsegmented, offset, limit, count, sorters, filters)

Gets a list of entitlements.

This API returns a list of entitlements.  This API can be used in one of the two following ways: either getting entitlements for a specific **account-id**, or getting via use of **filters** (those two options are exclusive).  Any authenticated token can call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **string**| The account ID. If specified, returns only entitlements associated with the given Account. Cannot be specified with the **filters**, **segmented-for-identity**, **for-segment-ids**, or **include-unsegmented** param(s). This parameter is deprecated. Please use [Account Entitlements API](https://developer.sailpoint.com/apis/beta/#operation/getAccountEntitlements) to get account entitlements. | [optional] [default to undefined]
 **segmentedForIdentity** | **string**| If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID. By convention, the value **me** can stand in for the current user\&#39;s Identity ID. Cannot be specified with the **account-id** or **for-segment-ids** param(s). It is also illegal to specify a value that refers to a different user\&#39;s Identity. | [optional] [default to undefined]
 **forSegmentIds** | **string**| If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. Cannot be specified with the **account-id** or **segmented-for-identity** param(s). | [optional] [default to undefined]
 **includeUnsegmented** | **boolean**| Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented&#x3D;false** results in an error. | [optional] [default to true]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* | [optional] [default to undefined]

### Return type

[**Array&lt;EntitlementBeta&gt;**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);
const accountId = "ef38f94347e94562b5bb8424a56397d8", // string | The account ID. If specified, returns only entitlements associated with the given Account. Cannot be specified with the **filters**, **segmented-for-identity**, **for-segment-ids**, or **include-unsegmented** param(s). This parameter is deprecated. Please use [Account Entitlements API](https://developer.sailpoint.com/apis/beta/#operation/getAccountEntitlements) to get account entitlements.
  segmentedForIdentity = "me", // string | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID. By convention, the value **me** can stand in for the current user\'s Identity ID. Cannot be specified with the **account-id** or **for-segment-ids** param(s). It is also illegal to specify a value that refers to a different user\'s Identity.
  forSegmentIds = "041727d4-7d95-4779-b891-93cf41e98249,a378c9fa-bae5-494c-804e-a1e30f69f649", // string | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. Cannot be specified with the **account-id** or **segmented-for-identity** param(s).
  includeUnsegmented = true, // boolean | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "name,-modified", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable**
  filters = "attribute eq "memberOf""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*
const val = await entitlementsBetaApi.listEntitlements(accountId, segmentedForIdentity, forSegmentIds, includeUnsegmented, offset, limit, count, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchEntitlement

> EntitlementBeta patchEntitlement(id, jsonPatchOperationBeta)

Patch an entitlement

This API updates an existing entitlement using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.  The following fields are patchable: **requestable**, **privileged**, **segments**, **owner**, **name**, **description**, and **manuallyUpdatedFields**  When you\'re patching owner, only owner type and owner id must be provided. Owner name is optional, and it won\'t be modified. If the owner name is provided, it should correspond to the real name. The only owner type currently supported is IDENTITY.  A token with ORG_ADMIN or SOURCE_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the entitlement to patch | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | [optional] 

### Return type

[**EntitlementBeta**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121e121518"; // ID of the entitlement to patch
const jsonPatchOperationBeta = [{op=replace, path=/requestable, value=true}, {op=replace, path=/privileged, value=true}]; // Array<JsonPatchOperationBeta> | 
const val = await entitlementsBetaApi.patchEntitlement(id, jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## putEntitlementRequestConfig

> EntitlementRequestConfigBeta putEntitlementRequestConfig(id, entitlementRequestConfigBeta)

Replace Entitlement Request Config

This API replaces the entitlement request config for a specified entitlement.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Entitlement ID | [default to undefined]
 **entitlementRequestConfigBeta** | [**EntitlementRequestConfigBeta**](../Models/EntitlementRequestConfigBeta.md)|  | 

### Return type

[**EntitlementRequestConfigBeta**](../Models/EntitlementRequestConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi, EntitlementRequestConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121e121518"; // Entitlement ID
const entitlementRequestConfigBeta : EntitlementRequestConfigBeta = ; // 
const val = await entitlementsBetaApi.putEntitlementRequestConfig(id, entitlementRequestConfigBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## resetSourceEntitlements

> EntitlementSourceResetBaseReferenceDtoBeta resetSourceEntitlements(id)

Reset Source Entitlements

Remove all entitlements from a specific source. To reload the accounts along with the entitlements you removed, you must run an unoptimized aggregation.  To do so, use [Import Accounts](https://developer.sailpoint.com/docs/api/beta/import-accounts/) with `disableOptimization` = `true`. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of source for the entitlement reset | [default to undefined]

### Return type

[**EntitlementSourceResetBaseReferenceDtoBeta**](../Models/EntitlementSourceResetBaseReferenceDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121919ecca"; // ID of source for the entitlement reset
const val = await entitlementsBetaApi.resetSourceEntitlements(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updateEntitlementsInBulk

> updateEntitlementsInBulk(entitlementBulkUpdateRequestBeta)

Bulk update an entitlement list

This API applies an update to every entitlement of the list.   The number of entitlements to update is limited to 50 items maximum.   The JsonPatch update follows the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. allowed operations : `**{ \"op\": \"replace\", \"path\": \"/privileged\", \"value\": boolean }**  **{ \"op\": \"replace\", \"path\": \"/requestable\",\"value\": boolean }**`   A token with ORG_ADMIN or API authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementBulkUpdateRequestBeta** | [**EntitlementBulkUpdateRequestBeta**](../Models/EntitlementBulkUpdateRequestBeta.md)|  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi, EntitlementBulkUpdateRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);
const entitlementBulkUpdateRequestBeta : EntitlementBulkUpdateRequestBeta = ; // 
const val = await entitlementsBetaApi.updateEntitlementsInBulk(entitlementBulkUpdateRequestBeta);
console.log('API called successfully.');
```
</details>

