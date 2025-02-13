---
title: TaskManagementBetaApi
pagination_label: TaskManagementBetaApi
sidebar_label: TaskManagementBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'TaskManagementBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'TaskManagementBetaApi']
---

# TaskManagementBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPendingTaskHeaders**](TaskManagementBetaApi.md#getPendingTaskHeaders) | **HEAD** /task-status/pending-tasks | Retrieve Pending Task List Headers
[**getPendingTasks**](TaskManagementBetaApi.md#getPendingTasks) | **GET** /task-status/pending-tasks | Retrieve Pending Task Status List
[**getTaskStatus**](TaskManagementBetaApi.md#getTaskStatus) | **GET** /task-status/{id} | Get Task Status by ID
[**getTaskStatusList**](TaskManagementBetaApi.md#getTaskStatusList) | **GET** /task-status | Retrieve Task Status List
[**updateTaskStatus**](TaskManagementBetaApi.md#updateTaskStatus) | **PATCH** /task-status/{id} | Update Task Status by ID



## getPendingTaskHeaders

> getPendingTaskHeaders(offset, limit, count)

Retrieve Pending Task List Headers

Responds with headers only for list of task statuses for pending tasks.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaskManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taskManagementBetaApi = new TaskManagementBetaApi(apiConfig);
const offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await taskManagementBetaApi.getPendingTaskHeaders(offset, limit, count);
console.log('API called successfully.');
```
</details>


## getPendingTasks

> Array&lt;TaskStatusBeta&gt; getPendingTasks(offset, limit, count)

Retrieve Pending Task Status List

Retrieve a list of statuses for pending tasks. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;TaskStatusBeta&gt;**](../Models/TaskStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaskManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taskManagementBetaApi = new TaskManagementBetaApi(apiConfig);
const offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await taskManagementBetaApi.getPendingTasks(offset, limit, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getTaskStatus

> TaskStatusBeta getTaskStatus(id)

Get Task Status by ID

Get task status by task ID. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Task ID. | [default to undefined]

### Return type

[**TaskStatusBeta**](../Models/TaskStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaskManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taskManagementBetaApi = new TaskManagementBetaApi(apiConfig);
const id : string = "00eebcf881994e419d72e757fd30dc0e"; // Task ID.
const val = await taskManagementBetaApi.getTaskStatus(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getTaskStatusList

> Array&lt;TaskStatusBeta&gt; getTaskStatusList(limit, offset, count, filters, sorters)

Retrieve Task Status List

Use this endpoint to get a list of statuses for **completed** tasks. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned. To get a list of statuses for **in-progress** tasks, please use the [retrieve pending task status list](https://developer.sailpoint.com/docs/api/beta/get-pending-tasks) endpoint. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in*  **type**: *eq, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** | [optional] [default to undefined]

### Return type

[**Array&lt;TaskStatusBeta&gt;**](../Models/TaskStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaskManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taskManagementBetaApi = new TaskManagementBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "completionStatus eq "Success"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in*  **type**: *eq, in*
  sorters = "-created"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created**
const val = await taskManagementBetaApi.getTaskStatusList(limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updateTaskStatus

> TaskStatusBeta updateTaskStatus(id, jsonPatchOperationBeta)

Update Task Status by ID

Update a current task status by task ID. Use this API to clear a pending task by updating the completionStatus and completed attributes.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Task ID. | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| The JSONPatch payload used to update the object. | 

### Return type

[**TaskStatusBeta**](../Models/TaskStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaskManagementBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taskManagementBetaApi = new TaskManagementBetaApi(apiConfig);
const id : string = "00eebcf881994e419d72e757fd30dc0e"; // Task ID.
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = ; // The JSONPatch payload used to update the object.
const val = await taskManagementBetaApi.updateTaskStatus(id, jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

