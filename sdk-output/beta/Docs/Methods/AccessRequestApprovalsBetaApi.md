---
title: AccessRequestApprovalsBetaApi
pagination_label: AccessRequestApprovalsBetaApi
sidebar_label: AccessRequestApprovalsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccessRequestApprovalsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccessRequestApprovalsBetaApi']
---

# AccessRequestApprovalsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveAccessRequest**](AccessRequestApprovalsBetaApi.md#approveAccessRequest) | **POST** /access-request-approvals/{approvalId}/approve | Approve Access Request Approval
[**forwardAccessRequest**](AccessRequestApprovalsBetaApi.md#forwardAccessRequest) | **POST** /access-request-approvals/{approvalId}/forward | Forward Access Request Approval
[**getAccessRequestApprovalSummary**](AccessRequestApprovalsBetaApi.md#getAccessRequestApprovalSummary) | **GET** /access-request-approvals/approval-summary | Get Access Requests Approvals Number
[**listCompletedApprovals**](AccessRequestApprovalsBetaApi.md#listCompletedApprovals) | **GET** /access-request-approvals/completed | Completed Access Request Approvals List
[**listPendingApprovals**](AccessRequestApprovalsBetaApi.md#listPendingApprovals) | **GET** /access-request-approvals/pending | Pending Access Request Approvals List
[**rejectAccessRequest**](AccessRequestApprovalsBetaApi.md#rejectAccessRequest) | **POST** /access-request-approvals/{approvalId}/reject | Reject Access Request Approval



## approveAccessRequest

> object approveAccessRequest(approvalId, commentDtoBeta)

Approve Access Request Approval

Use this endpoint to approve an access request approval. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvalId** | **string**| Approval ID. | [default to undefined]
 **commentDtoBeta** | [**CommentDtoBeta**](../Models/CommentDtoBeta.md)| Reviewer\&#39;s comment. | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestApprovalsBetaApi, CommentDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestApprovalsBetaApi = new AccessRequestApprovalsBetaApi(apiConfig);
const approvalId : string = "2c91808b7294bea301729568c68c002e"; // Approval ID.
const commentDtoBeta : CommentDtoBeta = ; // Reviewer\'s comment.
const val = await accessRequestApprovalsBetaApi.approveAccessRequest(approvalId, commentDtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## forwardAccessRequest

> object forwardAccessRequest(approvalId, forwardApprovalDtoBeta)

Forward Access Request Approval

Use this API to forward an access request approval to a new owner. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvalId** | **string**| Approval ID. | [default to undefined]
 **forwardApprovalDtoBeta** | [**ForwardApprovalDtoBeta**](../Models/ForwardApprovalDtoBeta.md)| Information about the forwarded approval. | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestApprovalsBetaApi, ForwardApprovalDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestApprovalsBetaApi = new AccessRequestApprovalsBetaApi(apiConfig);
const approvalId : string = "2c91808b7294bea301729568c68c002e"; // Approval ID.
const forwardApprovalDtoBeta : ForwardApprovalDtoBeta = ; // Information about the forwarded approval.
const val = await accessRequestApprovalsBetaApi.forwardAccessRequest(approvalId, forwardApprovalDtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getAccessRequestApprovalSummary

> ApprovalSummaryBeta getAccessRequestApprovalSummary(ownerId, fromDate)

Get Access Requests Approvals Number

Use this API to return the number of pending, approved and rejected access requests approvals. See the \"owner-id\" query parameter for authorization information.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. | [optional] [default to undefined]
 **fromDate** | **string**| This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. | [optional] [default to undefined]

### Return type

[**ApprovalSummaryBeta**](../Models/ApprovalSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestApprovalsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestApprovalsBetaApi = new AccessRequestApprovalsBetaApi(apiConfig);
const ownerId = "2c91808568c529c60168cca6f90c1313", // string | The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value.
  fromDate = "from-date=2020-03-19T19:59:11Z"; // string | This is the date and time the results will be shown from. It must be in a valid ISO-8601 format.
const val = await accessRequestApprovalsBetaApi.getAccessRequestApprovalSummary(ownerId, fromDate);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listCompletedApprovals

> Array&lt;CompletedApprovalBeta&gt; listCompletedApprovals(ownerId, limit, offset, count, filters, sorters)

Completed Access Request Approvals List

This endpoint returns list of completed approvals. See *owner-id* query parameter below for authorization info.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;CompletedApprovalBeta&gt;**](../Models/CompletedApprovalBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestApprovalsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestApprovalsBetaApi = new AccessRequestApprovalsBetaApi(apiConfig);
const ownerId = "ownerId_example", // string | If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "filters_example", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw*
  sorters = "sorters_example"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified**
const val = await accessRequestApprovalsBetaApi.listCompletedApprovals(ownerId, limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listPendingApprovals

> Array&lt;PendingApprovalBeta&gt; listPendingApprovals(ownerId, limit, offset, count, filters, sorters)

Pending Access Request Approvals List

This endpoint returns a list of pending approvals. See \"owner-id\" query parameter below for authorization info.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;PendingApprovalBeta&gt;**](../Models/PendingApprovalBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestApprovalsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestApprovalsBetaApi = new AccessRequestApprovalsBetaApi(apiConfig);
const ownerId = "ownerId_example", // string | If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "filters_example", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in*
  sorters = "sorters_example"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified**
const val = await accessRequestApprovalsBetaApi.listPendingApprovals(ownerId, limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## rejectAccessRequest

> object rejectAccessRequest(approvalId, commentDtoBeta)

Reject Access Request Approval

Use this API to reject an access request approval. Only the owner of the approval and admin users are allowed to perform this action.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvalId** | **string**| Approval ID. | [default to undefined]
 **commentDtoBeta** | [**CommentDtoBeta**](../Models/CommentDtoBeta.md)| Reviewer\&#39;s comment. | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestApprovalsBetaApi, CommentDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestApprovalsBetaApi = new AccessRequestApprovalsBetaApi(apiConfig);
const approvalId : string = "2c91808b7294bea301729568c68c002e"; // Approval ID.
const commentDtoBeta : CommentDtoBeta = ; // Reviewer\'s comment.
const val = await accessRequestApprovalsBetaApi.rejectAccessRequest(approvalId, commentDtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

