---
title: NonEmployeeLifecycleManagementBetaApi
pagination_label: NonEmployeeLifecycleManagementBetaApi
sidebar_label: NonEmployeeLifecycleManagementBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'NonEmployeeLifecycleManagementBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'NonEmployeeLifecycleManagementBetaApi']
---

# NonEmployeeLifecycleManagementBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveNonEmployeeRequest**](NonEmployeeLifecycleManagementBetaApi.md#approveNonEmployeeRequest) | **POST** /non-employee-approvals/{id}/approve | Approve a Non-Employee Request
[**createNonEmployeeRecord**](NonEmployeeLifecycleManagementBetaApi.md#createNonEmployeeRecord) | **POST** /non-employee-records | Create Non-Employee Record
[**createNonEmployeeRequest**](NonEmployeeLifecycleManagementBetaApi.md#createNonEmployeeRequest) | **POST** /non-employee-requests | Create Non-Employee Request
[**createNonEmployeeSource**](NonEmployeeLifecycleManagementBetaApi.md#createNonEmployeeSource) | **POST** /non-employee-sources | Create Non-Employee Source
[**createNonEmployeeSourceSchemaAttributes**](NonEmployeeLifecycleManagementBetaApi.md#createNonEmployeeSourceSchemaAttributes) | **POST** /non-employee-sources/{sourceId}/schema-attributes | Create Non-Employee Source Schema Attribute
[**deleteNonEmployeeRecord**](NonEmployeeLifecycleManagementBetaApi.md#deleteNonEmployeeRecord) | **DELETE** /non-employee-records/{id} | Delete Non-Employee Record
[**deleteNonEmployeeRecordInBulk**](NonEmployeeLifecycleManagementBetaApi.md#deleteNonEmployeeRecordInBulk) | **POST** /non-employee-records/bulk-delete | Delete Multiple Non-Employee Records
[**deleteNonEmployeeRequest**](NonEmployeeLifecycleManagementBetaApi.md#deleteNonEmployeeRequest) | **DELETE** /non-employee-requests/{id} | Delete Non-Employee Request
[**deleteNonEmployeeSchemaAttribute**](NonEmployeeLifecycleManagementBetaApi.md#deleteNonEmployeeSchemaAttribute) | **DELETE** /non-employee-sources/{sourceId}/schema-attributes/{attributeId} | Delete Non-Employee Source\&#39;s Schema Attribute
[**deleteNonEmployeeSource**](NonEmployeeLifecycleManagementBetaApi.md#deleteNonEmployeeSource) | **DELETE** /non-employee-sources/{sourceId} | Delete Non-Employee Source
[**deleteNonEmployeeSourceSchemaAttributes**](NonEmployeeLifecycleManagementBetaApi.md#deleteNonEmployeeSourceSchemaAttributes) | **DELETE** /non-employee-sources/{sourceId}/schema-attributes | Delete all custom schema attributes
[**exportNonEmployeeRecords**](NonEmployeeLifecycleManagementBetaApi.md#exportNonEmployeeRecords) | **GET** /non-employee-sources/{id}/non-employees/download | Exports Non-Employee Records to CSV
[**exportNonEmployeeSourceSchemaTemplate**](NonEmployeeLifecycleManagementBetaApi.md#exportNonEmployeeSourceSchemaTemplate) | **GET** /non-employee-sources/{id}/schema-attributes-template/download | Exports Source Schema Template
[**getNonEmployeeApproval**](NonEmployeeLifecycleManagementBetaApi.md#getNonEmployeeApproval) | **GET** /non-employee-approvals/{id} | Get a non-employee approval item detail
[**getNonEmployeeApprovalSummary**](NonEmployeeLifecycleManagementBetaApi.md#getNonEmployeeApprovalSummary) | **GET** /non-employee-approvals/summary/{requested-for} | Get Summary of Non-Employee Approval Requests
[**getNonEmployeeBulkUploadStatus**](NonEmployeeLifecycleManagementBetaApi.md#getNonEmployeeBulkUploadStatus) | **GET** /non-employee-sources/{id}/non-employee-bulk-upload/status | Bulk upload status on source
[**getNonEmployeeRecord**](NonEmployeeLifecycleManagementBetaApi.md#getNonEmployeeRecord) | **GET** /non-employee-records/{id} | Get a Non-Employee Record
[**getNonEmployeeRequest**](NonEmployeeLifecycleManagementBetaApi.md#getNonEmployeeRequest) | **GET** /non-employee-requests/{id} | Get a Non-Employee Request
[**getNonEmployeeRequestSummary**](NonEmployeeLifecycleManagementBetaApi.md#getNonEmployeeRequestSummary) | **GET** /non-employee-requests/summary/{requested-for} | Get Summary of Non-Employee Requests
[**getNonEmployeeSchemaAttribute**](NonEmployeeLifecycleManagementBetaApi.md#getNonEmployeeSchemaAttribute) | **GET** /non-employee-sources/{sourceId}/schema-attributes/{attributeId} | Get Schema Attribute Non-Employee Source
[**getNonEmployeeSource**](NonEmployeeLifecycleManagementBetaApi.md#getNonEmployeeSource) | **GET** /non-employee-sources/{sourceId} | Get a Non-Employee Source
[**getNonEmployeeSourceSchemaAttributes**](NonEmployeeLifecycleManagementBetaApi.md#getNonEmployeeSourceSchemaAttributes) | **GET** /non-employee-sources/{sourceId}/schema-attributes | List Schema Attributes Non-Employee Source
[**importNonEmployeeRecordsInBulk**](NonEmployeeLifecycleManagementBetaApi.md#importNonEmployeeRecordsInBulk) | **POST** /non-employee-sources/{id}/non-employee-bulk-upload | Imports, or Updates, Non-Employee Records
[**listNonEmployeeApproval**](NonEmployeeLifecycleManagementBetaApi.md#listNonEmployeeApproval) | **GET** /non-employee-approvals | Get List of Non-Employee Approval Requests
[**listNonEmployeeRecords**](NonEmployeeLifecycleManagementBetaApi.md#listNonEmployeeRecords) | **GET** /non-employee-records | List Non-Employee Records
[**listNonEmployeeRequests**](NonEmployeeLifecycleManagementBetaApi.md#listNonEmployeeRequests) | **GET** /non-employee-requests | List Non-Employee Requests
[**listNonEmployeeSources**](NonEmployeeLifecycleManagementBetaApi.md#listNonEmployeeSources) | **GET** /non-employee-sources | List Non-Employee Sources
[**patchNonEmployeeRecord**](NonEmployeeLifecycleManagementBetaApi.md#patchNonEmployeeRecord) | **PATCH** /non-employee-records/{id} | Patch Non-Employee Record
[**patchNonEmployeeSchemaAttribute**](NonEmployeeLifecycleManagementBetaApi.md#patchNonEmployeeSchemaAttribute) | **PATCH** /non-employee-sources/{sourceId}/schema-attributes/{attributeId} | Patch Non-Employee Source\&#39;s Schema Attribute
[**patchNonEmployeeSource**](NonEmployeeLifecycleManagementBetaApi.md#patchNonEmployeeSource) | **PATCH** /non-employee-sources/{sourceId} | Patch a Non-Employee Source
[**rejectNonEmployeeRequest**](NonEmployeeLifecycleManagementBetaApi.md#rejectNonEmployeeRequest) | **POST** /non-employee-approvals/{id}/reject | Reject a Non-Employee Request
[**updateNonEmployeeRecord**](NonEmployeeLifecycleManagementBetaApi.md#updateNonEmployeeRecord) | **PUT** /non-employee-records/{id} | Update Non-Employee Record



## approveNonEmployeeRequest

> NonEmployeeApprovalItemBeta approveNonEmployeeRequest(id, nonEmployeeApprovalDecisionBeta)

Approve a Non-Employee Request

Approves a non-employee approval request and notifies the next approver.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Non-Employee approval item id (UUID) | [default to undefined]
 **nonEmployeeApprovalDecisionBeta** | [**NonEmployeeApprovalDecisionBeta**](../Models/NonEmployeeApprovalDecisionBeta.md)|  | 

### Return type

[**NonEmployeeApprovalItemBeta**](../Models/NonEmployeeApprovalItemBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi, NonEmployeeApprovalDecisionBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "id_example"; // Non-Employee approval item id (UUID)
const nonEmployeeApprovalDecisionBeta : NonEmployeeApprovalDecisionBeta = ; // 
const val = await nonEmployeeLifecycleManagementBetaApi.approveNonEmployeeRequest(id, nonEmployeeApprovalDecisionBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## createNonEmployeeRecord

> NonEmployeeRecordBeta createNonEmployeeRecord(nonEmployeeRequestBodyBeta)

Create Non-Employee Record

This request will create a non-employee record. Request will require the following security scope: \'idn:nesr:create\'

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonEmployeeRequestBodyBeta** | [**NonEmployeeRequestBodyBeta**](../Models/NonEmployeeRequestBodyBeta.md)| Non-Employee record creation request body. | 

### Return type

[**NonEmployeeRecordBeta**](../Models/NonEmployeeRecordBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi, NonEmployeeRequestBodyBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const nonEmployeeRequestBodyBeta : NonEmployeeRequestBodyBeta = ; // Non-Employee record creation request body.
const val = await nonEmployeeLifecycleManagementBetaApi.createNonEmployeeRecord(nonEmployeeRequestBodyBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## createNonEmployeeRequest

> NonEmployeeRequestBeta createNonEmployeeRequest(nonEmployeeRequestBodyBeta)

Create Non-Employee Request

This request will create a non-employee request and notify the approver

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonEmployeeRequestBodyBeta** | [**NonEmployeeRequestBodyBeta**](../Models/NonEmployeeRequestBodyBeta.md)| Non-Employee creation request body | 

### Return type

[**NonEmployeeRequestBeta**](../Models/NonEmployeeRequestBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi, NonEmployeeRequestBodyBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const nonEmployeeRequestBodyBeta : NonEmployeeRequestBodyBeta = ; // Non-Employee creation request body
const val = await nonEmployeeLifecycleManagementBetaApi.createNonEmployeeRequest(nonEmployeeRequestBodyBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## createNonEmployeeSource

> NonEmployeeSourceWithCloudExternalIdBeta createNonEmployeeSource(nonEmployeeSourceRequestBodyBeta)

Create Non-Employee Source

This request will create a non-employee source. Request will require the following security scope: \'idn:nesr:create\'

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonEmployeeSourceRequestBodyBeta** | [**NonEmployeeSourceRequestBodyBeta**](../Models/NonEmployeeSourceRequestBodyBeta.md)| Non-Employee source creation request body. | 

### Return type

[**NonEmployeeSourceWithCloudExternalIdBeta**](../Models/NonEmployeeSourceWithCloudExternalIdBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi, NonEmployeeSourceRequestBodyBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const nonEmployeeSourceRequestBodyBeta : NonEmployeeSourceRequestBodyBeta = ; // Non-Employee source creation request body.
const val = await nonEmployeeLifecycleManagementBetaApi.createNonEmployeeSource(nonEmployeeSourceRequestBodyBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## createNonEmployeeSourceSchemaAttributes

> NonEmployeeSchemaAttributeBeta createNonEmployeeSourceSchemaAttributes(sourceId, nonEmployeeSchemaAttributeBodyBeta)

Create Non-Employee Source Schema Attribute

This API creates a new schema attribute for Non-Employee Source. The schema technical name must be unique in the source. Attempts to create a schema attribute with an existing name will result in a \"400.1.409 Reference conflict\" response. At most, 10 custom attributes can be created per schema. Attempts to create more than 10 will result in a \"400.1.4 Limit violation\" response.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]
 **nonEmployeeSchemaAttributeBodyBeta** | [**NonEmployeeSchemaAttributeBodyBeta**](../Models/NonEmployeeSchemaAttributeBodyBeta.md)|  | 

### Return type

[**NonEmployeeSchemaAttributeBeta**](../Models/NonEmployeeSchemaAttributeBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi, NonEmployeeSchemaAttributeBodyBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const sourceId : string = "2c91808b6ef1d43e016efba0ce470904"; // The Source id
const nonEmployeeSchemaAttributeBodyBeta : NonEmployeeSchemaAttributeBodyBeta = ; // 
const val = await nonEmployeeLifecycleManagementBetaApi.createNonEmployeeSourceSchemaAttributes(sourceId, nonEmployeeSchemaAttributeBodyBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteNonEmployeeRecord

> deleteNonEmployeeRecord(id)

Delete Non-Employee Record

This request will delete a non-employee record.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Non-Employee record id (UUID) | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "2c91808b6ef1d43e016efba0ce470904"; // Non-Employee record id (UUID)
const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeRecord(id);
console.log('API called successfully.');
```
</details>


## deleteNonEmployeeRecordInBulk

> deleteNonEmployeeRecordInBulk(deleteNonEmployeeRecordInBulkRequestBeta)

Delete Multiple Non-Employee Records

This request will delete multiple non-employee records based on the non-employee ids provided. Request will require the following scope: \'idn:nesr:delete\'

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteNonEmployeeRecordInBulkRequestBeta** | [**DeleteNonEmployeeRecordInBulkRequestBeta**](../Models/DeleteNonEmployeeRecordInBulkRequestBeta.md)| Non-Employee bulk delete request body. | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi, DeleteNonEmployeeRecordInBulkRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const deleteNonEmployeeRecordInBulkRequestBeta : DeleteNonEmployeeRecordInBulkRequestBeta = ; // Non-Employee bulk delete request body.
const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeRecordInBulk(deleteNonEmployeeRecordInBulkRequestBeta);
console.log('API called successfully.');
```
</details>


## deleteNonEmployeeRequest

> deleteNonEmployeeRequest(id)

Delete Non-Employee Request

This request will delete a non-employee request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Non-Employee request id in the UUID format | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "2c91808b6ef1d43e016efba0ce470904"; // Non-Employee request id in the UUID format
const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeRequest(id);
console.log('API called successfully.');
```
</details>


## deleteNonEmployeeSchemaAttribute

> deleteNonEmployeeSchemaAttribute(attributeId, sourceId)

Delete Non-Employee Source\'s Schema Attribute

This end-point deletes a specific schema attribute for a non-employee source. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **string**| The Schema Attribute Id (UUID) | [default to undefined]
 **sourceId** | **string**| The Source id | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const attributeId : string = "2c91808b6ef1d43e016efba0ce470904"; // The Schema Attribute Id (UUID)
const sourceId : string = "2c91808b6ef1d43e016efba0ce470904"; // The Source id
const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeSchemaAttribute(attributeId, sourceId);
console.log('API called successfully.');
```
</details>


## deleteNonEmployeeSource

> deleteNonEmployeeSource(sourceId)

Delete Non-Employee Source

This request will delete a non-employee source.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| Source Id | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const sourceId : string = "2c91808b6ef1d43e016efba0ce470904"; // Source Id
const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeSource(sourceId);
console.log('API called successfully.');
```
</details>


## deleteNonEmployeeSourceSchemaAttributes

> deleteNonEmployeeSourceSchemaAttributes(sourceId)

Delete all custom schema attributes

This end-point deletes all custom schema attributes for a non-employee source.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const sourceId : string = "2c91808b6ef1d43e016efba0ce470904"; // The Source id
const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeSourceSchemaAttributes(sourceId);
console.log('API called successfully.');
```
</details>


## exportNonEmployeeRecords

> exportNonEmployeeRecords(id)

Exports Non-Employee Records to CSV

This requests a CSV download for all non-employees from a provided source.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Source Id (UUID) | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "2c918085842e69ae018432d22ccb212f"; // Source Id (UUID)
const val = await nonEmployeeLifecycleManagementBetaApi.exportNonEmployeeRecords(id);
console.log('API called successfully.');
```
</details>


## exportNonEmployeeSourceSchemaTemplate

> exportNonEmployeeSourceSchemaTemplate(id)

Exports Source Schema Template

This requests a download for the Source Schema Template for a provided source. Request will require the following security scope: idn:nesr:read\'

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Source Id (UUID) | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "2c918085842e69ae018432d22ccb212f"; // Source Id (UUID)
const val = await nonEmployeeLifecycleManagementBetaApi.exportNonEmployeeSourceSchemaTemplate(id);
console.log('API called successfully.');
```
</details>


## getNonEmployeeApproval

> NonEmployeeApprovalItemDetailBeta getNonEmployeeApproval(id, includeDetail)

Get a non-employee approval item detail

Approves a non-employee approval request and notifies the next approver.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Non-Employee approval item id (UUID) | [default to undefined]
 **includeDetail** | **string**| The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* | [optional] [default to undefined]

### Return type

[**NonEmployeeApprovalItemDetailBeta**](../Models/NonEmployeeApprovalItemDetailBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "ac10d20a-841e-1e7d-8184-32d2e22c0179"; // Non-Employee approval item id (UUID)
const includeDetail = "include-detail=false"; // string | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true*
const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeApproval(id, includeDetail);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getNonEmployeeApprovalSummary

> NonEmployeeApprovalSummaryBeta getNonEmployeeApprovalSummary(requestedFor)

Get Summary of Non-Employee Approval Requests

This request will retrieve a summary of non-employee approval requests. There are two contextual uses for the `requested-for` path parameter: 1. The current user is the Org Admin, in which case he or she may request a summary of all non-employee approval requests assigned to a particular approver by passing in that approver\'s id. 2. The current user is an approver, in which case \"me\" should be provided as the `requested-for` value. This will provide the approver with a summary of the approval items assigned to him or her.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string**| The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \&quot;me\&quot; instead to indicate the current user. | [default to undefined]

### Return type

[**NonEmployeeApprovalSummaryBeta**](../Models/NonEmployeeApprovalSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const requestedFor : string = "ac10d20a-841e-1e7d-8184-32d2e22c0179"; // The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.
const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeApprovalSummary(requestedFor);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getNonEmployeeBulkUploadStatus

> NonEmployeeBulkUploadStatusBeta getNonEmployeeBulkUploadStatus(id)

Bulk upload status on source

The nonEmployeeBulkUploadStatus API returns the status of the newest bulk upload job for the specified source. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Source ID (UUID) | [default to undefined]

### Return type

[**NonEmployeeBulkUploadStatusBeta**](../Models/NonEmployeeBulkUploadStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "2c918085842e69ae018432d22ccb212f"; // Source ID (UUID)
const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeBulkUploadStatus(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getNonEmployeeRecord

> NonEmployeeRecordBeta getNonEmployeeRecord(id)

Get a Non-Employee Record

This gets a non-employee record.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Non-Employee record id (UUID) | [default to undefined]

### Return type

[**NonEmployeeRecordBeta**](../Models/NonEmployeeRecordBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "2c91808b6ef1d43e016efba0ce470904"; // Non-Employee record id (UUID)
const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeRecord(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getNonEmployeeRequest

> NonEmployeeRequestBeta getNonEmployeeRequest(id)

Get a Non-Employee Request

This gets a non-employee request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Non-Employee request id (UUID) | [default to undefined]

### Return type

[**NonEmployeeRequestBeta**](../Models/NonEmployeeRequestBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "2c91808b6ef1d43e016efba0ce470904"; // Non-Employee request id (UUID)
const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeRequest(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getNonEmployeeRequestSummary

> NonEmployeeRequestSummaryBeta getNonEmployeeRequestSummary(requestedFor)

Get Summary of Non-Employee Requests

This request will retrieve a summary of non-employee requests. There are two contextual uses for the `requested-for` path parameter: 1. The current user is the Org Admin, in which case he or she may request a summary of all non-employee approval requests assigned to a particular account manager by passing in that manager\'s id. 2. The current user is an account manager, in which case \"me\" should be provided as the `requested-for` value. This will provide the user with a summary of the non-employee requests in the source(s) he or she manages.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string**| The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \&quot;me\&quot; instead to indicate the current user. | [default to undefined]

### Return type

[**NonEmployeeRequestSummaryBeta**](../Models/NonEmployeeRequestSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const requestedFor : string = "ac10d20a-841e-1e7d-8184-32d2e22c0179"; // The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.
const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeRequestSummary(requestedFor);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getNonEmployeeSchemaAttribute

> NonEmployeeSchemaAttributeBeta getNonEmployeeSchemaAttribute(attributeId, sourceId)

Get Schema Attribute Non-Employee Source

This API gets a schema attribute by Id for the specified Non-Employee SourceId.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **string**| The Schema Attribute Id (UUID) | [default to undefined]
 **sourceId** | **string**| The Source id | [default to undefined]

### Return type

[**NonEmployeeSchemaAttributeBeta**](../Models/NonEmployeeSchemaAttributeBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const attributeId : string = "2c918085842e69ae018432d22ccb212f"; // The Schema Attribute Id (UUID)
const sourceId : string = "2c918085842e69ae018432d22ccb212f"; // The Source id
const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeSchemaAttribute(attributeId, sourceId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getNonEmployeeSource

> NonEmployeeSourceBeta getNonEmployeeSource(sourceId)

Get a Non-Employee Source

This gets a non-employee source.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| Source Id | [default to undefined]

### Return type

[**NonEmployeeSourceBeta**](../Models/NonEmployeeSourceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const sourceId : string = "2c91808b7c28b350017c2a2ec5790aa1"; // Source Id
const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeSource(sourceId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getNonEmployeeSourceSchemaAttributes

> Array&lt;NonEmployeeSchemaAttributeBeta&gt; getNonEmployeeSourceSchemaAttributes(sourceId)

List Schema Attributes Non-Employee Source

This API gets the list of schema attributes for the specified Non-Employee SourceId. There are 8 mandatory attributes added to each new Non-Employee Source automatically. Additionaly, user can add up to 10 custom attributes. This interface returns all the mandatory attributes followed by any custom attributes. At most, a total of 18 attributes will be returned.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]

### Return type

[**Array&lt;NonEmployeeSchemaAttributeBeta&gt;**](../Models/NonEmployeeSchemaAttributeBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const sourceId : string = "2c918085842e69ae018432d22ccb212f"; // The Source id
const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeSourceSchemaAttributes(sourceId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## importNonEmployeeRecordsInBulk

> NonEmployeeBulkUploadJobBeta importNonEmployeeRecordsInBulk(id, data)

Imports, or Updates, Non-Employee Records

This post will import, or update, Non-Employee records found in the CSV. Request will need the following security scope: \'idn:nesr:create\'

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Source Id (UUID) | [default to undefined]
 **data** | **File**|  | [default to undefined]

### Return type

[**NonEmployeeBulkUploadJobBeta**](../Models/NonEmployeeBulkUploadJobBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "e136567de87e4d029e60b3c3c55db56d"; // Source Id (UUID)
const data : File = BINARY_DATA_HERE; // 
const val = await nonEmployeeLifecycleManagementBetaApi.importNonEmployeeRecordsInBulk(id, data);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listNonEmployeeApproval

> Array&lt;NonEmployeeApprovalItemBeta&gt; listNonEmployeeApproval(requestedFor, limit, offset, count, filters, sorters)

Get List of Non-Employee Approval Requests

This gets a list of non-employee approval requests.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string**| The identity for whom the request was made. *me* indicates the current user. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;NonEmployeeApprovalItemBeta&gt;**](../Models/NonEmployeeApprovalItemBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const requestedFor = "ac10d20a-841e-1e7d-8184-32d2e22c0179", // string | The identity for whom the request was made. *me* indicates the current user.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "approvalStatus eq "PENDING"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq*
  sorters = "created"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified**
const val = await nonEmployeeLifecycleManagementBetaApi.listNonEmployeeApproval(requestedFor, limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listNonEmployeeRecords

> Array&lt;NonEmployeeRecordBeta&gt; listNonEmployeeRecords(limit, offset, count, sorters, filters)

List Non-Employee Records

This gets a list of non-employee records.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;NonEmployeeRecordBeta&gt;**](../Models/NonEmployeeRecordBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "accountName,sourceId", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified**
  filters = "sourceId eq "2c91808568c529c60168cca6f90c1313""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*
const val = await nonEmployeeLifecycleManagementBetaApi.listNonEmployeeRecords(limit, offset, count, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listNonEmployeeRequests

> Array&lt;NonEmployeeRequestBeta&gt; listNonEmployeeRequests(requestedFor, limit, offset, count, sorters, filters)

List Non-Employee Requests

This gets a list of non-employee requests.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string**| The identity for whom the request was made. *me* indicates the current user. | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;NonEmployeeRequestBeta&gt;**](../Models/NonEmployeeRequestBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const requestedFor : string = "me"; // The identity for whom the request was made. *me* indicates the current user.
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "approvalStatus,firstName", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate**
  filters = "sourceId eq "2c91808568c529c60168cca6f90c1313""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*
const val = await nonEmployeeLifecycleManagementBetaApi.listNonEmployeeRequests(requestedFor, limit, offset, count, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listNonEmployeeSources

> Array&lt;NonEmployeeSourceWithNECountBeta&gt; listNonEmployeeSources(requestedFor, nonEmployeeCount, limit, offset, count, sorters)

List Non-Employee Sources

This gets a list of non-employee sources.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string**| The identity for whom the request was made. *me* indicates the current user. | [default to undefined]
 **nonEmployeeCount** | **boolean**| The flag to determine whether return a non-employee count associate with source. | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** | [optional] [default to undefined]

### Return type

[**Array&lt;NonEmployeeSourceWithNECountBeta&gt;**](../Models/NonEmployeeSourceWithNECountBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const requestedFor : string = "me"; // The identity for whom the request was made. *me* indicates the current user.
const nonEmployeeCount : boolean = false; // The flag to determine whether return a non-employee count associate with source.
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "name,created"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId**
const val = await nonEmployeeLifecycleManagementBetaApi.listNonEmployeeSources(requestedFor, nonEmployeeCount, limit, offset, count, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchNonEmployeeRecord

> NonEmployeeRecordBeta patchNonEmployeeRecord(id, jsonPatchOperationBeta)

Patch Non-Employee Record

This request will patch a non-employee record.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Non-employee record id (UUID) | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields. | 

### Return type

[**NonEmployeeRecordBeta**](../Models/NonEmployeeRecordBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "2c91808b6ef1d43e016efba0ce470904"; // Non-employee record id (UUID)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/endDate, value={2019-08-23T18:40:35.772Z=null}}]; // A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.
const val = await nonEmployeeLifecycleManagementBetaApi.patchNonEmployeeRecord(id, jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchNonEmployeeSchemaAttribute

> NonEmployeeSchemaAttributeBeta patchNonEmployeeSchemaAttribute(attributeId, sourceId, jsonPatchOperationBeta)

Patch Non-Employee Source\'s Schema Attribute

This end-point patches a specific schema attribute for a non-employee SourceId. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **string**| The Schema Attribute Id (UUID) | [default to undefined]
 **sourceId** | **string**| The Source id | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update \&#39;:\&#39; \&#39;label\&#39;, \&#39;helpText\&#39;, \&#39;placeholder\&#39;, \&#39;required\&#39;. | 

### Return type

[**NonEmployeeSchemaAttributeBeta**](../Models/NonEmployeeSchemaAttributeBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const attributeId : string = "2c91808b6ef1d43e016efba0ce470904"; // The Schema Attribute Id (UUID)
const sourceId : string = "2c91808b6ef1d43e016efba0ce470904"; // The Source id
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/label, value={new attribute label=null}}]; // A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update \':\' \'label\', \'helpText\', \'placeholder\', \'required\'.
const val = await nonEmployeeLifecycleManagementBetaApi.patchNonEmployeeSchemaAttribute(attributeId, sourceId, jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchNonEmployeeSource

> NonEmployeeSourceBeta patchNonEmployeeSource(sourceId, jsonPatchOperationBeta)

Patch a Non-Employee Source

patch a non-employee source. (Partial Update)  Patchable field: **name, description, approvers, accountManagers**

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| Source Id | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**NonEmployeeSourceBeta**](../Models/NonEmployeeSourceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const sourceId : string = "2c91808b6ef1d43e016efba0ce470904"; // Source Id
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/name, value={new name=null}}, {op=replace, path=/approvers, value=[2c91809f703bb37a017040a2fe8748c7, 48b1f463c9e8427db5a5071bd81914b8]}]; // A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const val = await nonEmployeeLifecycleManagementBetaApi.patchNonEmployeeSource(sourceId, jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## rejectNonEmployeeRequest

> NonEmployeeApprovalItemBeta rejectNonEmployeeRequest(id, nonEmployeeRejectApprovalDecisionBeta)

Reject a Non-Employee Request

This endpoint will reject an approval item request and notify user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Non-Employee approval item id (UUID) | [default to undefined]
 **nonEmployeeRejectApprovalDecisionBeta** | [**NonEmployeeRejectApprovalDecisionBeta**](../Models/NonEmployeeRejectApprovalDecisionBeta.md)|  | 

### Return type

[**NonEmployeeApprovalItemBeta**](../Models/NonEmployeeApprovalItemBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi, NonEmployeeRejectApprovalDecisionBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "id_example"; // Non-Employee approval item id (UUID)
const nonEmployeeRejectApprovalDecisionBeta : NonEmployeeRejectApprovalDecisionBeta = ; // 
const val = await nonEmployeeLifecycleManagementBetaApi.rejectNonEmployeeRequest(id, nonEmployeeRejectApprovalDecisionBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updateNonEmployeeRecord

> NonEmployeeRecordBeta updateNonEmployeeRecord(id, nonEmployeeRequestBodyBeta)

Update Non-Employee Record

This request will update a non-employee record.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Non-employee record id (UUID) | [default to undefined]
 **nonEmployeeRequestBodyBeta** | [**NonEmployeeRequestBodyBeta**](../Models/NonEmployeeRequestBodyBeta.md)| Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields. | 

### Return type

[**NonEmployeeRecordBeta**](../Models/NonEmployeeRecordBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NonEmployeeLifecycleManagementBetaApi, NonEmployeeRequestBodyBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const nonEmployeeLifecycleManagementBetaApi = new NonEmployeeLifecycleManagementBetaApi(apiConfig);
const id : string = "2c91808b6ef1d43e016efba0ce470904"; // Non-employee record id (UUID)
const nonEmployeeRequestBodyBeta : NonEmployeeRequestBodyBeta = ; // Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.
const val = await nonEmployeeLifecycleManagementBetaApi.updateNonEmployeeRecord(id, nonEmployeeRequestBodyBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

