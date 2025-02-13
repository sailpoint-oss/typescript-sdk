---
title: CertificationsBetaApi
pagination_label: CertificationsBetaApi
sidebar_label: CertificationsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'CertificationsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'CertificationsBetaApi']
---

# CertificationsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIdentityCertificationItemPermissions**](CertificationsBetaApi.md#getIdentityCertificationItemPermissions) | **GET** /certifications/{certificationId}/access-review-items/{itemId}/permissions | Permissions for Entitlement Certification Item
[**getIdentityCertificationPendingTasks**](CertificationsBetaApi.md#getIdentityCertificationPendingTasks) | **GET** /certifications/{id}/tasks-pending | Pending Certification Tasks
[**getIdentityCertificationTaskStatus**](CertificationsBetaApi.md#getIdentityCertificationTaskStatus) | **GET** /certifications/{id}/tasks/{taskId} | Certification Task Status
[**listCertificationReviewers**](CertificationsBetaApi.md#listCertificationReviewers) | **GET** /certifications/{id}/reviewers | List of Reviewers for certification
[**submitReassignCertsAsync**](CertificationsBetaApi.md#submitReassignCertsAsync) | **POST** /certifications/{id}/reassign-async | Reassign Certifications Asynchronously



## getIdentityCertificationItemPermissions

> Array&lt;PermissionDtoBeta&gt; getIdentityCertificationItemPermissions(certificationId, itemId, filters, limit, offset, count)

Permissions for Entitlement Certification Item

This API returns the permissions associated with an entitlement certification item based on the certification item\'s ID. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificationId** | **string**| The certification ID | [default to undefined]
 **itemId** | **string**| The certification item ID | [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: &#x60;?filters&#x3D;rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22&#x60;  The following is invalid: &#x60;?filters&#x3D;rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)&#x60; | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;PermissionDtoBeta&gt;**](../Models/PermissionDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationsBetaApi = new CertificationsBetaApi(apiConfig);

[ {
  "rights" : [ "SELECT", "SELECT" ],
  "target" : "SYS.GV_$TRANSACTION"
}, {
  "rights" : [ "SELECT", "SELECT" ],
  "target" : "SYS.GV_$TRANSACTION"
} ]


const certificationId : string = "ef38f94347e94562b5bb8424a56397d8"; // The certification ID (default to undefined)
const itemId : string = "2c91808671bcbab40171bd945d961227"; // The certification item ID (default to undefined)
const filters : string = "target eq "SYS.OBJAUTH2""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: `?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)` (optional) (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await certificationsBetaApi.getIdentityCertificationItemPermissions(certificationId, itemId);
    
    // Below is a request that includes all optional parameters      
    // const val = await certificationsBetaApi.getIdentityCertificationItemPermissions(certificationId, itemId, filters, limit, offset, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getIdentityCertificationPendingTasks

> Array&lt;IdentityCertificationTaskBeta&gt; getIdentityCertificationPendingTasks(id)

Pending Certification Tasks

This API returns the status of all pending (`QUEUED` or `IN_PROGRESS`) tasks for an identity campaign certification. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity campaign certification ID | [default to undefined]

### Return type

[**Array&lt;IdentityCertificationTaskBeta&gt;**](../Models/IdentityCertificationTaskBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationsBetaApi = new CertificationsBetaApi(apiConfig);

[ {
  "certificationId" : "ef38f94347e94562b5bb8424a56397d8",
  "id" : "abcd-ef12-3456",
  "type" : "REASSIGN",
  "errors" : [ ],
  "status" : "QUEUED"
}, {
  "certificationId" : "ef38f94347e94562b5bb8424a56397d8",
  "id" : "abcd-ef12-3456",
  "type" : "REASSIGN",
  "errors" : [ ],
  "status" : "QUEUED"
} ]


const id : string = "id_example"; // The identity campaign certification ID (default to undefined)

try {
    const val = await certificationsBetaApi.getIdentityCertificationPendingTasks(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await certificationsBetaApi.getIdentityCertificationPendingTasks(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getIdentityCertificationTaskStatus

> IdentityCertificationTaskBeta getIdentityCertificationTaskStatus(id, taskId)

Certification Task Status

This API returns the status of a certification task. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity campaign certification ID | [default to undefined]
 **taskId** | **string**| The certification task ID | [default to undefined]

### Return type

[**IdentityCertificationTaskBeta**](../Models/IdentityCertificationTaskBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationsBetaApi = new CertificationsBetaApi(apiConfig);

{
  "certificationId" : "ef38f94347e94562b5bb8424a56397d8",
  "id" : "abcd-ef12-3456",
  "type" : "REASSIGN",
  "errors" : [ ],
  "status" : "QUEUED"
}


const id : string = "id_example"; // The identity campaign certification ID (default to undefined)
const taskId : string = "taskId_example"; // The certification task ID (default to undefined)

try {
    const val = await certificationsBetaApi.getIdentityCertificationTaskStatus(id, taskId);
    
    // Below is a request that includes all optional parameters      
    // const val = await certificationsBetaApi.getIdentityCertificationTaskStatus(id, taskId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listCertificationReviewers

> Array&lt;IdentityReferenceWithNameAndEmailBeta&gt; listCertificationReviewers(id, limit, offset, count, filters, sorters)

List of Reviewers for certification

This API returns a list of reviewers for the certification. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The certification ID | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** | [optional] [default to undefined]

### Return type

[**Array&lt;IdentityReferenceWithNameAndEmailBeta&gt;**](../Models/IdentityReferenceWithNameAndEmailBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationsBetaApi = new CertificationsBetaApi(apiConfig);

[ {
  "name" : "Alison Ferguso",
  "id" : "5168015d32f890ca15812c9180835d2e",
  "type" : "IDENTITY",
  "email" : "alison.ferguso@identitysoon.com"
}, {
  "name" : "Alison Ferguso",
  "id" : "5168015d32f890ca15812c9180835d2e",
  "type" : "IDENTITY",
  "email" : "alison.ferguso@identitysoon.com"
} ]


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The certification ID (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "name eq "Bob""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw* (optional) (default to undefined)
const sorters : string = "name"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional) (default to undefined)

try {
    const val = await certificationsBetaApi.listCertificationReviewers(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await certificationsBetaApi.listCertificationReviewers(id, limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## submitReassignCertsAsync

> IdentityCertificationTaskBeta submitReassignCertsAsync(id, reviewReassignBeta)

Reassign Certifications Asynchronously

This API initiates a task to reassign up to 500 identities or items in an identity campaign certification to another reviewer. The `certification-tasks` API can be used to get an updated status on the task and determine when the reassignment is complete. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity campaign certification ID | [default to undefined]
 **reviewReassignBeta** | [**ReviewReassignBeta**](../Models/ReviewReassignBeta.md)|  | 

### Return type

[**IdentityCertificationTaskBeta**](../Models/IdentityCertificationTaskBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationsBetaApi, ReviewReassignBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationsBetaApi = new CertificationsBetaApi(apiConfig);

{
  "certificationId" : "ef38f94347e94562b5bb8424a56397d8",
  "id" : "abcd-ef12-3456",
  "type" : "REASSIGN",
  "errors" : [ ],
  "status" : "QUEUED"
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The identity campaign certification ID (default to undefined)
const reviewReassignBeta : ReviewReassignBeta = 

try {
    const val = await certificationsBetaApi.submitReassignCertsAsync(id, reviewReassignBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await certificationsBetaApi.submitReassignCertsAsync(id, reviewReassignBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

