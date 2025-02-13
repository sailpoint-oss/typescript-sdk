---
title: ApprovalsBetaApi
pagination_label: ApprovalsBetaApi
sidebar_label: ApprovalsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'ApprovalsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'ApprovalsBetaApi']
---

# ApprovalsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApproval**](ApprovalsBetaApi.md#getApproval) | **GET** /generic-approvals/{id} | Get Approval
[**getApprovals**](ApprovalsBetaApi.md#getApprovals) | **GET** /generic-approvals | Get Approvals



## getApproval

> ApprovalBeta getApproval(id)

Get Approval

Get a single approval for a given approval ID. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and doesn\'t include access-request-approvals.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the approval that to be returned. | [default to undefined]

### Return type

[**ApprovalBeta**](../Models/ApprovalBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ApprovalsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const approvalsBetaApi = new ApprovalsBetaApi(apiConfig);
const id : string = "38453251-6be2-5f8f-df93-5ce19e295837"; // ID of the approval that to be returned.
const val = await approvalsBetaApi.getApproval(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getApprovals

> Array&lt;ApprovalBeta&gt; getApprovals(mine, requesterId, filters)

Get Approvals

Get a list of approvals, which can be filtered by requester ID, status, or reference type. You can use the \"Mine\" query parameter to return all approvals for the current approver. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and does not include access-request-approvals.  Absence of all query parameters will will default to mine=true.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mine** | **boolean**| Returns the list of approvals for the current caller. | [optional] [default to undefined]
 **requesterId** | **string**| Returns the list of approvals for a given requester ID. | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;ApprovalBeta&gt;**](../Models/ApprovalBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ApprovalsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const approvalsBetaApi = new ApprovalsBetaApi(apiConfig);
const mine = true, // boolean | Returns the list of approvals for the current caller.
  requesterId = "17e633e7d57e481569df76323169deb6a", // string | Returns the list of approvals for a given requester ID.
  filters = "filters=status eq PENDING"; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*
const val = await approvalsBetaApi.getApprovals(mine, requesterId, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

