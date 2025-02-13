---
title: WorkItemsBetaApi
pagination_label: WorkItemsBetaApi
sidebar_label: WorkItemsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'WorkItemsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'WorkItemsBetaApi']
---

# WorkItemsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveApprovalItem**](WorkItemsBetaApi.md#approveApprovalItem) | **POST** /work-items/{id}/approve/{approvalItemId} | Approve an Approval Item
[**approveApprovalItemsInBulk**](WorkItemsBetaApi.md#approveApprovalItemsInBulk) | **POST** /work-items/bulk-approve/{id} | Bulk approve Approval Items
[**completeWorkItem**](WorkItemsBetaApi.md#completeWorkItem) | **POST** /work-items/{id} | Complete a Work Item
[**forwardWorkItem**](WorkItemsBetaApi.md#forwardWorkItem) | **POST** /work-items/{id}/forward | Forward a Work Item
[**getCompletedWorkItems**](WorkItemsBetaApi.md#getCompletedWorkItems) | **GET** /work-items/completed | Completed Work Items
[**getCountCompletedWorkItems**](WorkItemsBetaApi.md#getCountCompletedWorkItems) | **GET** /work-items/completed/count | Count Completed Work Items
[**getCountWorkItems**](WorkItemsBetaApi.md#getCountWorkItems) | **GET** /work-items/count | Count Work Items
[**getWorkItem**](WorkItemsBetaApi.md#getWorkItem) | **GET** /work-items/{id} | Get a Work Item
[**getWorkItemsSummary**](WorkItemsBetaApi.md#getWorkItemsSummary) | **GET** /work-items/summary | Work Items Summary
[**listWorkItems**](WorkItemsBetaApi.md#listWorkItems) | **GET** /work-items | List Work Items
[**rejectApprovalItem**](WorkItemsBetaApi.md#rejectApprovalItem) | **POST** /work-items/{id}/reject/{approvalItemId} | Reject an Approval Item
[**rejectApprovalItemsInBulk**](WorkItemsBetaApi.md#rejectApprovalItemsInBulk) | **POST** /work-items/bulk-reject/{id} | Bulk reject Approval Items
[**submitAccountSelection**](WorkItemsBetaApi.md#submitAccountSelection) | **POST** /work-items/{id}/submit-account-selection | Submit Account Selections



## approveApprovalItem

> WorkItemsBeta approveApprovalItem(id, approvalItemId)

Approve an Approval Item

This API approves an Approval Item. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]
 **approvalItemId** | **string**| The ID of the approval item. | [default to undefined]

### Return type

[**WorkItemsBeta**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item
const approvalItemId : string = "1211bcaa32112bcef6122adb21cef1ac"; // The ID of the approval item.
const val = await workItemsBetaApi.approveApprovalItem(id, approvalItemId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## approveApprovalItemsInBulk

> WorkItemsBeta approveApprovalItemsInBulk(id)

Bulk approve Approval Items

This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]

### Return type

[**WorkItemsBeta**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item
const val = await workItemsBetaApi.approveApprovalItemsInBulk(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## completeWorkItem

> WorkItemsBeta completeWorkItem(id)

Complete a Work Item

This API completes a work item. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]

### Return type

[**WorkItemsBeta**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item
const val = await workItemsBetaApi.completeWorkItem(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## forwardWorkItem

> forwardWorkItem(id, workItemForwardBeta)

Forward a Work Item

This API forwards a work item to a new owner. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]
 **workItemForwardBeta** | [**WorkItemForwardBeta**](../Models/WorkItemForwardBeta.md)|  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi, WorkItemForwardBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item
const workItemForwardBeta : WorkItemForwardBeta = ; // 
const val = await workItemsBetaApi.forwardWorkItem(id, workItemForwardBeta);
console.log('API called successfully.');
```
</details>


## getCompletedWorkItems

> Array&lt;WorkItemsBeta&gt; getCompletedWorkItems(ownerId, limit, offset, count)

Completed Work Items

This gets a collection of completed work items belonging to either the specified user(admin required), or the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;WorkItemsBeta&gt;**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const ownerId = "ownerId_example", // string | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await workItemsBetaApi.getCompletedWorkItems(ownerId, limit, offset, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getCountCompletedWorkItems

> Array&lt;WorkItemsCountBeta&gt; getCountCompletedWorkItems(ownerId)

Count Completed Work Items

This gets a count of completed work items belonging to either the specified user(admin required), or the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| ID of the work item owner. | [optional] [default to undefined]

### Return type

[**Array&lt;WorkItemsCountBeta&gt;**](../Models/WorkItemsCountBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const ownerId = "ownerId_example"; // string | ID of the work item owner.
const val = await workItemsBetaApi.getCountCompletedWorkItems(ownerId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getCountWorkItems

> WorkItemsCountBeta getCountWorkItems(ownerId)

Count Work Items

This gets a count of work items belonging to either the specified user(admin required), or the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| ID of the work item owner. | [optional] [default to undefined]

### Return type

[**WorkItemsCountBeta**](../Models/WorkItemsCountBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const ownerId = "ownerId_example"; // string | ID of the work item owner.
const val = await workItemsBetaApi.getCountWorkItems(ownerId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getWorkItem

> Array&lt;WorkItemsBeta&gt; getWorkItem(id, ownerId)

Get a Work Item

This gets the details of a Work Item belonging to either the specified user(admin required), or the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the work item. | [default to undefined]
 **ownerId** | **string**| ID of the work item owner. | [optional] [default to undefined]

### Return type

[**Array&lt;WorkItemsBeta&gt;**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const id : string = "id_example"; // ID of the work item.
const ownerId = "ownerId_example"; // string | ID of the work item owner.
const val = await workItemsBetaApi.getWorkItem(id, ownerId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getWorkItemsSummary

> WorkItemsSummaryBeta getWorkItemsSummary(ownerId)

Work Items Summary

This gets a summary of work items belonging to either the specified user(admin required), or the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| ID of the work item owner. | [optional] [default to undefined]

### Return type

[**WorkItemsSummaryBeta**](../Models/WorkItemsSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const ownerId = "ownerId_example"; // string | ID of the work item owner.
const val = await workItemsBetaApi.getWorkItemsSummary(ownerId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listWorkItems

> Array&lt;WorkItemsBeta&gt; listWorkItems(limit, offset, count, ownerId)

List Work Items

This gets a collection of work items belonging to either the specified user(admin required), or the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **ownerId** | **string**| ID of the work item owner. | [optional] [default to undefined]

### Return type

[**Array&lt;WorkItemsBeta&gt;**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  ownerId = "ownerId_example"; // string | ID of the work item owner.
const val = await workItemsBetaApi.listWorkItems(limit, offset, count, ownerId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## rejectApprovalItem

> WorkItemsBeta rejectApprovalItem(id, approvalItemId)

Reject an Approval Item

This API rejects an Approval Item. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]
 **approvalItemId** | **string**| The ID of the approval item. | [default to undefined]

### Return type

[**WorkItemsBeta**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item
const approvalItemId : string = "1211bcaa32112bcef6122adb21cef1ac"; // The ID of the approval item.
const val = await workItemsBetaApi.rejectApprovalItem(id, approvalItemId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## rejectApprovalItemsInBulk

> WorkItemsBeta rejectApprovalItemsInBulk(id)

Bulk reject Approval Items

This API bulk rejects Approval Items. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]

### Return type

[**WorkItemsBeta**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item
const val = await workItemsBetaApi.rejectApprovalItemsInBulk(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## submitAccountSelection

> WorkItemsBeta submitAccountSelection(id, requestBody)

Submit Account Selections

This API submits account selections. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]
 **requestBody** | [**{ [key: string]: any; }**](../Models/any.md)| Account Selection Data map, keyed on fieldName | 

### Return type

[**WorkItemsBeta**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi, any } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item
const requestBody : { [key: string]: any; } = {fieldName=fieldValue}; // Account Selection Data map, keyed on fieldName
const val = await workItemsBetaApi.submitAccountSelection(id, requestBody);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

