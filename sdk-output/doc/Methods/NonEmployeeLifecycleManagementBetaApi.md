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

{
  "approver" : {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  },
  "approvalStatus" : "APPROVED",
  "accountName" : "test.account",
  "approvalOrder" : 1,
  "created" : "2019-08-23T18:40:35.772Z",
  "modified" : "2019-08-23T18:52:59.162Z",
  "comment" : "true",
  "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c",
  "nonEmployeeRequest" : {
    "requester" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "id" : "ac10e21c-931c-1ef2-8193-1c51e7ff0003"
  }
}


const id : string = "id_example"; // Non-Employee approval item id (UUID) (default to undefined)
const nonEmployeeApprovalDecisionBeta : NonEmployeeApprovalDecisionBeta = 

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.approveNonEmployeeRequest(id, nonEmployeeApprovalDecisionBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.approveNonEmployeeRequest(id, nonEmployeeApprovalDecisionBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "endDate" : "2020-08-23T18:52:59.162Z",
  "created" : "2019-08-23T18:40:35.772Z",
  "firstName" : "William",
  "phone" : "5125555555",
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "ac10e21c-931c-1ef2-8193-1c51e7ff0003",
  "email" : "william.smith@example.com",
  "startDate" : "2019-08-23T18:52:59.162Z"
}


const nonEmployeeRequestBodyBeta : NonEmployeeRequestBodyBeta = 

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.createNonEmployeeRecord(nonEmployeeRequestBodyBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.createNonEmployeeRecord(nonEmployeeRequestBodyBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "approvalStatus" : "APPROVED",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "endDate" : "2021-03-25T00:00:00-05:00",
  "created" : "2020-03-24T11:11:41.139-05:00",
  "approvalItems" : [ {
    "approver" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "approvalStatus" : "APPROVED",
    "accountName" : "test.account",
    "approvalOrder" : 1,
    "created" : "2019-08-23T18:40:35.772Z",
    "modified" : "2019-08-23T18:52:59.162Z",
    "comment" : "true",
    "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c"
  }, {
    "approver" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "approvalStatus" : "APPROVED",
    "accountName" : "test.account",
    "approvalOrder" : 1,
    "created" : "2019-08-23T18:40:35.772Z",
    "modified" : "2019-08-23T18:52:59.162Z",
    "comment" : "true",
    "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c"
  } ],
  "description" : "Source description",
  "nonEmployeeSource" : {
    "sourceId" : "2c91808568c529c60168cca6f90c1313",
    "name" : "Retail",
    "description" : "Source description",
    "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1"
  },
  "firstName" : "William",
  "phone" : "5125555555",
  "name" : "Retail",
  "modified" : "2020-03-24T11:11:41.139-05:00",
  "comment" : "approved",
  "completionDate" : "2020-03-24T11:11:41.139-05:00",
  "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1",
  "email" : "william.smith@example.com",
  "startDate" : "2020-03-24T00:00:00-05:00"
}


const nonEmployeeRequestBodyBeta : NonEmployeeRequestBodyBeta = 

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.createNonEmployeeRequest(nonEmployeeRequestBodyBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.createNonEmployeeRequest(nonEmployeeRequestBodyBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "created" : "2019-08-23T18:40:35.772Z",
  "accountManagers" : [ {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  }, {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  } ],
  "name" : "Retail",
  "description" : "Source description",
  "approvers" : [ {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  }, {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  } ],
  "modified" : "2019-08-23T18:52:59.162Z",
  "cloudExternalId" : "99999",
  "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1",
  "nonEmployeeCount" : 2
}


const nonEmployeeSourceRequestBodyBeta : NonEmployeeSourceRequestBodyBeta = 

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.createNonEmployeeSource(nonEmployeeSourceRequestBodyBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.createNonEmployeeSource(nonEmployeeSourceRequestBodyBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "system" : true,
  "helpText" : "The unique identifier for the account",
  "created" : "2019-08-23T18:40:35.772Z",
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "ac110005-7156-1150-8171-5b292e3e0084",
  "label" : "Account Name",
  "placeholder" : "Enter a unique user name for this account.",
  "type" : "TEXT",
  "technicalName" : "account.name",
  "required" : true
}


const sourceId : string = "2c91808b6ef1d43e016efba0ce470904"; // The Source id (default to undefined)
const nonEmployeeSchemaAttributeBodyBeta : NonEmployeeSchemaAttributeBodyBeta = 

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.createNonEmployeeSourceSchemaAttributes(sourceId, nonEmployeeSchemaAttributeBodyBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.createNonEmployeeSourceSchemaAttributes(sourceId, nonEmployeeSchemaAttributeBodyBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const id : string = "2c91808b6ef1d43e016efba0ce470904"; // Non-Employee record id (UUID) (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeRecord(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeRecord(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const deleteNonEmployeeRecordInBulkRequestBeta : DeleteNonEmployeeRecordInBulkRequestBeta = 

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeRecordInBulk(deleteNonEmployeeRecordInBulkRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeRecordInBulk(deleteNonEmployeeRecordInBulkRequestBeta);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const id : string = "2c91808b6ef1d43e016efba0ce470904"; // Non-Employee request id in the UUID format (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeRequest(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeRequest(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const attributeId : string = "2c91808b6ef1d43e016efba0ce470904"; // The Schema Attribute Id (UUID) (default to undefined)
const sourceId : string = "2c91808b6ef1d43e016efba0ce470904"; // The Source id (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeSchemaAttribute(attributeId, sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeSchemaAttribute(attributeId, sourceId);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const sourceId : string = "2c91808b6ef1d43e016efba0ce470904"; // Source Id (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeSource(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeSource(sourceId);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const sourceId : string = "2c91808b6ef1d43e016efba0ce470904"; // The Source id (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeSourceSchemaAttributes(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.deleteNonEmployeeSourceSchemaAttributes(sourceId);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const id : string = "2c918085842e69ae018432d22ccb212f"; // Source Id (UUID) (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.exportNonEmployeeRecords(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.exportNonEmployeeRecords(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const id : string = "2c918085842e69ae018432d22ccb212f"; // Source Id (UUID) (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.exportNonEmployeeSourceSchemaTemplate(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.exportNonEmployeeSourceSchemaTemplate(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "approver" : {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  },
  "approvalStatus" : "APPROVED",
  "accountName" : "test.account",
  "approvalOrder" : 1,
  "created" : "2019-08-23T18:40:35.772Z",
  "modified" : "2019-08-23T18:52:59.162Z",
  "comment" : "true",
  "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c",
  "nonEmployeeRequest" : {
    "requester" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "approvalStatus" : "APPROVED",
    "lastName" : "Smith",
    "manager" : "jane.doe",
    "data" : {
      "description" : "Auditing"
    },
    "accountName" : "william.smith",
    "endDate" : "2021-03-25",
    "created" : "2020-03-24T11:11:41.139-05:00",
    "nonEmployeeSource" : {
      "sourceId" : "2c91808568c529c60168cca6f90c1313",
      "name" : "Retail",
      "description" : "Source description",
      "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1",
      "schemaAttributes" : [ {
        "system" : true,
        "helpText" : "The unique identifier for the account",
        "created" : "2019-08-23T18:40:35.772Z",
        "modified" : "2019-08-23T18:52:59.162Z",
        "id" : "ac110005-7156-1150-8171-5b292e3e0084",
        "label" : "Account Name",
        "placeholder" : "Enter a unique user name for this account.",
        "type" : "TEXT",
        "technicalName" : "account.name",
        "required" : true
      }, {
        "system" : true,
        "helpText" : "The unique identifier for the account",
        "created" : "2019-08-23T18:40:35.772Z",
        "modified" : "2019-08-23T18:52:59.162Z",
        "id" : "ac110005-7156-1150-8171-5b292e3e0084",
        "label" : "Account Name",
        "placeholder" : "Enter a unique user name for this account.",
        "type" : "TEXT",
        "technicalName" : "account.name",
        "required" : true
      } ]
    },
    "firstName" : "William",
    "phone" : "5125555555",
    "modified" : "2020-03-24T11:11:41.139-05:00",
    "comment" : "approved",
    "completionDate" : "2020-03-24T11:11:41.139-05:00",
    "id" : "ac10e21c-931c-1ef2-8193-1c51e7ff0003",
    "email" : "william.smith@example.com",
    "startDate" : "2020-03-24"
  }
}


const id : string = "ac10d20a-841e-1e7d-8184-32d2e22c0179"; // Non-Employee approval item id (UUID) (default to undefined)
const includeDetail : string = "include-detail=false"; // The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional) (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeApproval(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeApproval(id, includeDetail);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "approved" : 0.8008281904610115,
  "rejected" : 1.4658129805029452,
  "pending" : 6.027456183070403
}


const requestedFor : string = "ac10d20a-841e-1e7d-8184-32d2e22c0179"; // The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user. (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeApprovalSummary(requestedFor);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeApprovalSummary(requestedFor);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "status" : "PENDING"
}


const id : string = "2c918085842e69ae018432d22ccb212f"; // Source ID (UUID) (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeBulkUploadStatus(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeBulkUploadStatus(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "endDate" : "2020-08-23T18:52:59.162Z",
  "created" : "2019-08-23T18:40:35.772Z",
  "firstName" : "William",
  "phone" : "5125555555",
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "ac10e21c-931c-1ef2-8193-1c51e7ff0003",
  "email" : "william.smith@example.com",
  "startDate" : "2019-08-23T18:52:59.162Z"
}


const id : string = "2c91808b6ef1d43e016efba0ce470904"; // Non-Employee record id (UUID) (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeRecord(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeRecord(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "approvalStatus" : "APPROVED",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "endDate" : "2021-03-25T00:00:00-05:00",
  "created" : "2020-03-24T11:11:41.139-05:00",
  "approvalItems" : [ {
    "approver" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "approvalStatus" : "APPROVED",
    "accountName" : "test.account",
    "approvalOrder" : 1,
    "created" : "2019-08-23T18:40:35.772Z",
    "modified" : "2019-08-23T18:52:59.162Z",
    "comment" : "true",
    "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c"
  }, {
    "approver" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "approvalStatus" : "APPROVED",
    "accountName" : "test.account",
    "approvalOrder" : 1,
    "created" : "2019-08-23T18:40:35.772Z",
    "modified" : "2019-08-23T18:52:59.162Z",
    "comment" : "true",
    "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c"
  } ],
  "description" : "Source description",
  "nonEmployeeSource" : {
    "sourceId" : "2c91808568c529c60168cca6f90c1313",
    "name" : "Retail",
    "description" : "Source description",
    "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1"
  },
  "firstName" : "William",
  "phone" : "5125555555",
  "name" : "Retail",
  "modified" : "2020-03-24T11:11:41.139-05:00",
  "comment" : "approved",
  "completionDate" : "2020-03-24T11:11:41.139-05:00",
  "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1",
  "email" : "william.smith@example.com",
  "startDate" : "2020-03-24T00:00:00-05:00"
}


const id : string = "2c91808b6ef1d43e016efba0ce470904"; // Non-Employee request id (UUID) (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeRequest(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeRequest(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "approved" : 0.8008281904610115,
  "rejected" : 6.027456183070403,
  "pending" : 1.4658129805029452,
  "nonEmployeeCount" : 5.962133916683182
}


const requestedFor : string = "ac10d20a-841e-1e7d-8184-32d2e22c0179"; // The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user. (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeRequestSummary(requestedFor);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeRequestSummary(requestedFor);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "system" : true,
  "helpText" : "The unique identifier for the account",
  "created" : "2019-08-23T18:40:35.772Z",
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "ac110005-7156-1150-8171-5b292e3e0084",
  "label" : "Account Name",
  "placeholder" : "Enter a unique user name for this account.",
  "type" : "TEXT",
  "technicalName" : "account.name",
  "required" : true
}


const attributeId : string = "2c918085842e69ae018432d22ccb212f"; // The Schema Attribute Id (UUID) (default to undefined)
const sourceId : string = "2c918085842e69ae018432d22ccb212f"; // The Source id (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeSchemaAttribute(attributeId, sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeSchemaAttribute(attributeId, sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "created" : "2019-08-23T18:40:35.772Z",
  "accountManagers" : [ {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  }, {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  } ],
  "name" : "Retail",
  "description" : "Source description",
  "approvers" : [ {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  }, {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  } ],
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1",
  "nonEmployeeCount" : 2
}


const sourceId : string = "2c91808b7c28b350017c2a2ec5790aa1"; // Source Id (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeSource(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeSource(sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "type" : "TEXT",
  "label" : "string",
  "technicalName" : "string",
  "helpText" : "string",
  "placeholder" : "string",
  "required" : true
} ]


const sourceId : string = "2c918085842e69ae018432d22ccb212f"; // The Source id (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeSourceSchemaAttributes(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.getNonEmployeeSourceSchemaAttributes(sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "created" : "2019-08-23T18:52:59.162Z",
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "2c91808568c529c60168cca6f90cffff",
  "status" : "PENDING"
}


const id : string = "e136567de87e4d029e60b3c3c55db56d"; // Source Id (UUID) (default to undefined)
const data : File = BINARY_DATA_HERE; //  (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.importNonEmployeeRecordsInBulk(id, data);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.importNonEmployeeRecordsInBulk(id, data);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "approver" : {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  },
  "approvalStatus" : "APPROVED",
  "accountName" : "test.account",
  "approvalOrder" : 1,
  "created" : "2019-08-23T18:40:35.772Z",
  "modified" : "2019-08-23T18:52:59.162Z",
  "comment" : "true",
  "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c",
  "nonEmployeeRequest" : {
    "requester" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "id" : "ac10e21c-931c-1ef2-8193-1c51e7ff0003"
  }
}, {
  "approver" : {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  },
  "approvalStatus" : "APPROVED",
  "accountName" : "test.account",
  "approvalOrder" : 1,
  "created" : "2019-08-23T18:40:35.772Z",
  "modified" : "2019-08-23T18:52:59.162Z",
  "comment" : "true",
  "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c",
  "nonEmployeeRequest" : {
    "requester" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "id" : "ac10e21c-931c-1ef2-8193-1c51e7ff0003"
  }
} ]


const requestedFor : string = "ac10d20a-841e-1e7d-8184-32d2e22c0179"; // The identity for whom the request was made. *me* indicates the current user. (optional) (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "approvalStatus eq "PENDING""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq* (optional) (default to undefined)
const sorters : string = "created"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional) (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.listNonEmployeeApproval();
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.listNonEmployeeApproval(requestedFor, limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "endDate" : "2020-08-23T18:52:59.162Z",
  "created" : "2019-08-23T18:40:35.772Z",
  "firstName" : "William",
  "phone" : "5125555555",
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "ac10e21c-931c-1ef2-8193-1c51e7ff0003",
  "email" : "william.smith@example.com",
  "startDate" : "2019-08-23T18:52:59.162Z"
}, {
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "endDate" : "2020-08-23T18:52:59.162Z",
  "created" : "2019-08-23T18:40:35.772Z",
  "firstName" : "William",
  "phone" : "5125555555",
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "ac10e21c-931c-1ef2-8193-1c51e7ff0003",
  "email" : "william.smith@example.com",
  "startDate" : "2019-08-23T18:52:59.162Z"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const sorters : string = "accountName,sourceId"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** (optional) (default to undefined)
const filters : string = "sourceId eq "2c91808568c529c60168cca6f90c1313""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional) (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.listNonEmployeeRecords();
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.listNonEmployeeRecords(limit, offset, count, sorters, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "approvalStatus" : "APPROVED",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "endDate" : "2021-03-25T00:00:00-05:00",
  "created" : "2020-03-24T11:11:41.139-05:00",
  "approvalItems" : [ {
    "approver" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "approvalStatus" : "APPROVED",
    "accountName" : "test.account",
    "approvalOrder" : 1,
    "created" : "2019-08-23T18:40:35.772Z",
    "modified" : "2019-08-23T18:52:59.162Z",
    "comment" : "true",
    "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c"
  }, {
    "approver" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "approvalStatus" : "APPROVED",
    "accountName" : "test.account",
    "approvalOrder" : 1,
    "created" : "2019-08-23T18:40:35.772Z",
    "modified" : "2019-08-23T18:52:59.162Z",
    "comment" : "true",
    "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c"
  } ],
  "description" : "Source description",
  "nonEmployeeSource" : {
    "sourceId" : "2c91808568c529c60168cca6f90c1313",
    "name" : "Retail",
    "description" : "Source description",
    "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1"
  },
  "firstName" : "William",
  "phone" : "5125555555",
  "name" : "Retail",
  "modified" : "2020-03-24T11:11:41.139-05:00",
  "comment" : "approved",
  "completionDate" : "2020-03-24T11:11:41.139-05:00",
  "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1",
  "email" : "william.smith@example.com",
  "startDate" : "2020-03-24T00:00:00-05:00"
}, {
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "approvalStatus" : "APPROVED",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "endDate" : "2021-03-25T00:00:00-05:00",
  "created" : "2020-03-24T11:11:41.139-05:00",
  "approvalItems" : [ {
    "approver" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "approvalStatus" : "APPROVED",
    "accountName" : "test.account",
    "approvalOrder" : 1,
    "created" : "2019-08-23T18:40:35.772Z",
    "modified" : "2019-08-23T18:52:59.162Z",
    "comment" : "true",
    "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c"
  }, {
    "approver" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "approvalStatus" : "APPROVED",
    "accountName" : "test.account",
    "approvalOrder" : 1,
    "created" : "2019-08-23T18:40:35.772Z",
    "modified" : "2019-08-23T18:52:59.162Z",
    "comment" : "true",
    "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c"
  } ],
  "description" : "Source description",
  "nonEmployeeSource" : {
    "sourceId" : "2c91808568c529c60168cca6f90c1313",
    "name" : "Retail",
    "description" : "Source description",
    "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1"
  },
  "firstName" : "William",
  "phone" : "5125555555",
  "name" : "Retail",
  "modified" : "2020-03-24T11:11:41.139-05:00",
  "comment" : "approved",
  "completionDate" : "2020-03-24T11:11:41.139-05:00",
  "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1",
  "email" : "william.smith@example.com",
  "startDate" : "2020-03-24T00:00:00-05:00"
} ]


const requestedFor : string = "me"; // The identity for whom the request was made. *me* indicates the current user. (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const sorters : string = "approvalStatus,firstName"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate** (optional) (default to undefined)
const filters : string = "sourceId eq "2c91808568c529c60168cca6f90c1313""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional) (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.listNonEmployeeRequests(requestedFor);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.listNonEmployeeRequests(requestedFor, limit, offset, count, sorters, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "created" : "2019-08-23T18:40:35.772Z",
  "accountManagers" : [ {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  }, {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  } ],
  "name" : "Retail",
  "description" : "Source description",
  "approvers" : [ {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  }, {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  } ],
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1",
  "nonEmployeeCount" : 2
}, {
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "created" : "2019-08-23T18:40:35.772Z",
  "accountManagers" : [ {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  }, {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  } ],
  "name" : "Retail",
  "description" : "Source description",
  "approvers" : [ {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  }, {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  } ],
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1",
  "nonEmployeeCount" : 2
} ]


const requestedFor : string = "me"; // The identity for whom the request was made. *me* indicates the current user. (default to undefined)
const nonEmployeeCount : boolean = false; // The flag to determine whether return a non-employee count associate with source. (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const sorters : string = "name,created"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** (optional) (default to undefined)

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.listNonEmployeeSources(requestedFor, nonEmployeeCount);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.listNonEmployeeSources(requestedFor, nonEmployeeCount, limit, offset, count, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "endDate" : "2020-08-23T18:52:59.162Z",
  "created" : "2019-08-23T18:40:35.772Z",
  "firstName" : "William",
  "phone" : "5125555555",
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "ac10e21c-931c-1ef2-8193-1c51e7ff0003",
  "email" : "william.smith@example.com",
  "startDate" : "2019-08-23T18:52:59.162Z"
}


const id : string = "2c91808b6ef1d43e016efba0ce470904"; // Non-employee record id (UUID) (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/endDate, value={2019-08-23T18:40:35.772Z=null}}]; // A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.patchNonEmployeeRecord(id, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.patchNonEmployeeRecord(id, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "system" : true,
  "helpText" : "The unique identifier for the account",
  "created" : "2019-08-23T18:40:35.772Z",
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "ac110005-7156-1150-8171-5b292e3e0084",
  "label" : "Account Name",
  "placeholder" : "Enter a unique user name for this account.",
  "type" : "TEXT",
  "technicalName" : "account.name",
  "required" : true
}


const attributeId : string = "2c91808b6ef1d43e016efba0ce470904"; // The Schema Attribute Id (UUID) (default to undefined)
const sourceId : string = "2c91808b6ef1d43e016efba0ce470904"; // The Source id (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/label, value={new attribute label=null}}]; // A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update \':\' \'label\', \'helpText\', \'placeholder\', \'required\'.

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.patchNonEmployeeSchemaAttribute(attributeId, sourceId, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.patchNonEmployeeSchemaAttribute(attributeId, sourceId, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "created" : "2019-08-23T18:40:35.772Z",
  "accountManagers" : [ {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  }, {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  } ],
  "name" : "Retail",
  "description" : "Source description",
  "approvers" : [ {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  }, {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  } ],
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "a0303682-5e4a-44f7-bdc2-6ce6112549c1",
  "nonEmployeeCount" : 2
}


const sourceId : string = "2c91808b6ef1d43e016efba0ce470904"; // Source Id (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/name, value={new name=null}}, {op=replace, path=/approvers, value=[2c91809f703bb37a017040a2fe8748c7, 48b1f463c9e8427db5a5071bd81914b8]}]; // A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.patchNonEmployeeSource(sourceId, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.patchNonEmployeeSource(sourceId, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "approver" : {
    "id" : "5168015d32f890ca15812c9180835d2e",
    "type" : "IDENTITY"
  },
  "approvalStatus" : "APPROVED",
  "accountName" : "test.account",
  "approvalOrder" : 1,
  "created" : "2019-08-23T18:40:35.772Z",
  "modified" : "2019-08-23T18:52:59.162Z",
  "comment" : "true",
  "id" : "2c1e388b-1e55-4b0a-ab5c-897f1204159c",
  "nonEmployeeRequest" : {
    "requester" : {
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY"
    },
    "id" : "ac10e21c-931c-1ef2-8193-1c51e7ff0003"
  }
}


const id : string = "id_example"; // Non-Employee approval item id (UUID) (default to undefined)
const nonEmployeeRejectApprovalDecisionBeta : NonEmployeeRejectApprovalDecisionBeta = 

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.rejectNonEmployeeRequest(id, nonEmployeeRejectApprovalDecisionBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.rejectNonEmployeeRequest(id, nonEmployeeRejectApprovalDecisionBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "endDate" : "2020-08-23T18:52:59.162Z",
  "created" : "2019-08-23T18:40:35.772Z",
  "firstName" : "William",
  "phone" : "5125555555",
  "modified" : "2019-08-23T18:52:59.162Z",
  "id" : "ac10e21c-931c-1ef2-8193-1c51e7ff0003",
  "email" : "william.smith@example.com",
  "startDate" : "2019-08-23T18:52:59.162Z"
}


const id : string = "2c91808b6ef1d43e016efba0ce470904"; // Non-employee record id (UUID) (default to undefined)
const nonEmployeeRequestBodyBeta : NonEmployeeRequestBodyBeta = 

try {
    const val = await nonEmployeeLifecycleManagementBetaApi.updateNonEmployeeRecord(id, nonEmployeeRequestBodyBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await nonEmployeeLifecycleManagementBetaApi.updateNonEmployeeRecord(id, nonEmployeeRequestBodyBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

