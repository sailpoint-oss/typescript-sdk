---
title: SuggestedEntitlementDescriptionBetaApi
pagination_label: SuggestedEntitlementDescriptionBetaApi
sidebar_label: SuggestedEntitlementDescriptionBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'SuggestedEntitlementDescriptionBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'SuggestedEntitlementDescriptionBetaApi']
---

# SuggestedEntitlementDescriptionBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSedBatchStats**](SuggestedEntitlementDescriptionBetaApi.md#getSedBatchStats) | **GET** /suggested-entitlement-description-batches/{batchId}/stats | Submit Sed Batch Stats Request
[**getSedBatches**](SuggestedEntitlementDescriptionBetaApi.md#getSedBatches) | **GET** /suggested-entitlement-description-batches | List Sed Batch Request
[**listSeds**](SuggestedEntitlementDescriptionBetaApi.md#listSeds) | **GET** /suggested-entitlement-descriptions | List Suggested Entitlement Descriptions
[**patchSed**](SuggestedEntitlementDescriptionBetaApi.md#patchSed) | **PATCH** /suggested-entitlement-descriptions | Patch Suggested Entitlement Description
[**submitSedApproval**](SuggestedEntitlementDescriptionBetaApi.md#submitSedApproval) | **POST** /suggested-entitlement-description-approvals | Submit Bulk Approval Request
[**submitSedAssignment**](SuggestedEntitlementDescriptionBetaApi.md#submitSedAssignment) | **POST** /suggested-entitlement-description-assignments | Submit Sed Assignment Request
[**submitSedBatchRequest**](SuggestedEntitlementDescriptionBetaApi.md#submitSedBatchRequest) | **POST** /suggested-entitlement-description-batches | Submit Sed Batch Request



## getSedBatchStats

> SedBatchStatsBeta getSedBatchStats(batchId)

Submit Sed Batch Stats Request

Submit Sed Batch Stats Request.  Submits batchId in the path param `(e.g. {batchId}/stats)`. API responses with stats of the batchId. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchId** | **string**| Batch Id | [default to undefined]

### Return type

[**SedBatchStatsBeta**](../Models/SedBatchStatsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SuggestedEntitlementDescriptionBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const suggestedEntitlementDescriptionBetaApi = new SuggestedEntitlementDescriptionBetaApi(apiConfig);
const batchId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // Batch Id
const val = await suggestedEntitlementDescriptionBetaApi.getSedBatchStats(batchId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSedBatches

> SedBatchStatusBeta getSedBatches()

List Sed Batch Request

List Sed Batches. API responses with Sed Batch Status

### Parameters

This endpoint does not need any parameter.

### Return type

[**SedBatchStatusBeta**](../Models/SedBatchStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SuggestedEntitlementDescriptionBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const suggestedEntitlementDescriptionBetaApi = new SuggestedEntitlementDescriptionBetaApi(apiConfig);
const val = await suggestedEntitlementDescriptionBetaApi.getSedBatches();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listSeds

> Array&lt;SedBeta&gt; listSeds(limit, filters, sorters, count, countOnly, requestedByAnyone, showPendingStatusOnly)

List Suggested Entitlement Descriptions

List of Suggested Entitlement Descriptions (SED)  SED field descriptions:  **batchId**: the ID of the batch of entitlements that are submitted for description generation  **displayName**: the display name of the entitlement that we are generating a description for  **sourceName**: the name of the source associated with the entitlement that we are generating the description for  **sourceId**: the ID of the source associated with the entitlement that we are generating the description for  **status**: the status of the suggested entitlement description, valid status options: \"requested\", \"suggested\", \"not_suggested\", \"failed\", \"assigned\", \"approved\", \"denied\"  **fullText**: will filter suggested entitlement description records by text found in any of the following fields: entitlement name, entitlement display name, suggested description, source name

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Integer specifying the maximum number of records to return in a single API call.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** | [optional] [default to undefined]
 **count** | **boolean**| If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send &#x60;count&#x3D;true&#x60; if that value will not be used. | [optional] [default to undefined]
 **countOnly** | **boolean**| If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored. This parameter differs from the Coun parameter in that this one skip executing the actual query and always return an empty array. | [optional] [default to undefined]
 **requestedByAnyone** | **boolean**| By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested | [optional] [default to undefined]
 **showPendingStatusOnly** | **boolean**| Will limit records to items that are in \&quot;suggested\&quot; or \&quot;approved\&quot; status | [optional] [default to undefined]

### Return type

[**Array&lt;SedBeta&gt;**](../Models/SedBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SuggestedEntitlementDescriptionBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const suggestedEntitlementDescriptionBetaApi = new SuggestedEntitlementDescriptionBetaApi(apiConfig);
const limit = limit=25, // number | Integer specifying the maximum number of records to return in a single API call.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.
  filters = "displayName co "Read and Write"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co*
  sorters = "sorters=displayName", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status**
  count = count=true, // boolean | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send `count=true` if that value will not be used.
  countOnly = count-only=true, // boolean | If `true` it will populate the `X-Total-Count` response header with the number of results that would be returned if `limit` and `offset` were ignored. This parameter differs from the Coun parameter in that this one skip executing the actual query and always return an empty array.
  requestedByAnyone = requested-by-anyone=true, // boolean | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested
  showPendingStatusOnly = show-pending-status-only=true; // boolean | Will limit records to items that are in \"suggested\" or \"approved\" status
const val = await suggestedEntitlementDescriptionBetaApi.listSeds(limit, filters, sorters, count, countOnly, requestedByAnyone, showPendingStatusOnly);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchSed

> SedBeta patchSed(id, sedPatchBeta)

Patch Suggested Entitlement Description

Patch Suggested Entitlement Description

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| id is sed id | [default to undefined]
 **sedPatchBeta** | [**Array&lt;SedPatchBeta&gt;**](../Models/SedPatchBeta.md)| Sed Patch Request | 

### Return type

[**SedBeta**](../Models/SedBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SuggestedEntitlementDescriptionBetaApi, SedPatchBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const suggestedEntitlementDescriptionBetaApi = new SuggestedEntitlementDescriptionBetaApi(apiConfig);
const id : string = "ebab396f-0af1-4050-89b7-dafc63ec70e7"; // id is sed id
const sedPatchBeta : Array<SedPatchBeta> = ; // Sed Patch Request
const val = await suggestedEntitlementDescriptionBetaApi.patchSed(id, sedPatchBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## submitSedApproval

> Array&lt;SedApprovalStatusBeta&gt; submitSedApproval(sedApprovalBeta)

Submit Bulk Approval Request

Submit Bulk Approval Request for SED. Request body takes list of SED Ids. API responses with list of SED Approval Status

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sedApprovalBeta** | [**Array&lt;SedApprovalBeta&gt;**](../Models/SedApprovalBeta.md)| Sed Approval | 

### Return type

[**Array&lt;SedApprovalStatusBeta&gt;**](../Models/SedApprovalStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SuggestedEntitlementDescriptionBetaApi, SedApprovalBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const suggestedEntitlementDescriptionBetaApi = new SuggestedEntitlementDescriptionBetaApi(apiConfig);
const sedApprovalBeta : Array<SedApprovalBeta> = ; // Sed Approval
const val = await suggestedEntitlementDescriptionBetaApi.submitSedApproval(sedApprovalBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## submitSedAssignment

> SedAssignmentResponseBeta submitSedAssignment(sedAssignmentBeta)

Submit Sed Assignment Request

Submit Assignment Request. Request body has an assignee, and list of SED Ids that are assigned to that assignee API responses with batchId that groups all approval requests together

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sedAssignmentBeta** | [**SedAssignmentBeta**](../Models/SedAssignmentBeta.md)| Sed Assignment Request | 

### Return type

[**SedAssignmentResponseBeta**](../Models/SedAssignmentResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SuggestedEntitlementDescriptionBetaApi, SedAssignmentBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const suggestedEntitlementDescriptionBetaApi = new SuggestedEntitlementDescriptionBetaApi(apiConfig);
const sedAssignmentBeta : SedAssignmentBeta = ; // Sed Assignment Request
const val = await suggestedEntitlementDescriptionBetaApi.submitSedAssignment(sedAssignmentBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## submitSedBatchRequest

> SedBatchResponseBeta submitSedBatchRequest(sedBatchRequestBeta)

Submit Sed Batch Request

Submit Sed Batch Request. Request body has one of the following:   - a list of entitlement Ids   - a list of SED Ids that user wants to have description generated by LLM.  API responses with batchId that groups Ids together

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sedBatchRequestBeta** | [**SedBatchRequestBeta**](../Models/SedBatchRequestBeta.md)| Sed Batch Request | [optional] 

### Return type

[**SedBatchResponseBeta**](../Models/SedBatchResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SuggestedEntitlementDescriptionBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const suggestedEntitlementDescriptionBetaApi = new SuggestedEntitlementDescriptionBetaApi(apiConfig);
const sedBatchRequestBeta = ; // SedBatchRequestBeta | Sed Batch Request
const val = await suggestedEntitlementDescriptionBetaApi.submitSedBatchRequest(sedBatchRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

