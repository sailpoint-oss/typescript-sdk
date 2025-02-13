---
title: AccessRequestsBetaApi
pagination_label: AccessRequestsBetaApi
sidebar_label: AccessRequestsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccessRequestsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccessRequestsBetaApi']
---

# AccessRequestsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelAccessRequest**](AccessRequestsBetaApi.md#cancelAccessRequest) | **POST** /access-requests/cancel | Cancel Access Request
[**closeAccessRequest**](AccessRequestsBetaApi.md#closeAccessRequest) | **POST** /access-requests/close | Close Access Request
[**createAccessRequest**](AccessRequestsBetaApi.md#createAccessRequest) | **POST** /access-requests | Submit Access Request
[**getAccessRequestConfig**](AccessRequestsBetaApi.md#getAccessRequestConfig) | **GET** /access-request-config | Get Access Request Configuration
[**listAccessRequestStatus**](AccessRequestsBetaApi.md#listAccessRequestStatus) | **GET** /access-request-status | Access Request Status
[**setAccessRequestConfig**](AccessRequestsBetaApi.md#setAccessRequestConfig) | **PUT** /access-request-config | Update Access Request Configuration



## cancelAccessRequest

> object cancelAccessRequest(cancelAccessRequestBeta)

Cancel Access Request

This API endpoint cancels a pending access request. An access request can be cancelled only if it has not passed the approval step. In addition to users with ORG_ADMIN, any user who originally submitted the access request may cancel it.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelAccessRequestBeta** | [**CancelAccessRequestBeta**](../Models/CancelAccessRequestBeta.md)|  | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestsBetaApi, CancelAccessRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestsBetaApi = new AccessRequestsBetaApi(apiConfig);
const cancelAccessRequestBeta : CancelAccessRequestBeta = {accountActivityId=2c91808568c529c60168cca6f90c1313, comment=I requested this role by mistake.}; // 
const val = await accessRequestsBetaApi.cancelAccessRequest(cancelAccessRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## closeAccessRequest

> object closeAccessRequest(closeAccessRequestBeta)

Close Access Request

This endpoint closes access requests that are stuck in a pending state. It can be used throughout a request\'s lifecycle even after the approval state, unlike the [Cancel Access Request endpoint](https://developer.sailpoint.com/idn/api/v3/cancel-access-request/).  To find pending access requests with the UI, navigate to Search and use this query: status: Pending AND \"Access Request\". Use the Column Chooser to select \'Tracking Number\', and use the \'Download\' button to export a CSV containing the tracking numbers.  To find pending access requests with the API, use the [List Account Activities endpoint](https://developer.sailpoint.com/idn/api/v3/list-account-activities/).  Input the IDs from either source.  To track the status of endpoint requests, navigate to Search and use this query: name:\"Close Identity Requests\". Search will include \"Close Identity Requests Started\" audits when requests are initiated and \"Close Identity Requests Completed\" audits when requests are completed. The completion audit will list the identity request IDs that finished in error.  This API triggers the [Provisioning Completed event trigger](https://developer.sailpoint.com/idn/docs/event-triggers/triggers/provisioning-completed/) for each access request that is closed. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **closeAccessRequestBeta** | [**CloseAccessRequestBeta**](../Models/CloseAccessRequestBeta.md)|  | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestsBetaApi, CloseAccessRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestsBetaApi = new AccessRequestsBetaApi(apiConfig);
const closeAccessRequestBeta : CloseAccessRequestBeta = {accessRequestIds=[2c90ad2a70ace7d50170acf22ca90010], executionStatus=Terminated, completionStatus=Failure, message=The IdentityNow Administrator manually closed this request.}; // 
const val = await accessRequestsBetaApi.closeAccessRequest(closeAccessRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## createAccessRequest

> AccessRequestResponseBeta createAccessRequest(accessRequestBeta)

Submit Access Request

Use this API to submit an access request in Identity Security Cloud (ISC), where it follows any ISC approval processes.  Access requests are processed asynchronously by ISC. A successful response from this endpoint means that the request has been submitted to ISC and is queued for processing. Because this endpoint is asynchronous, it doesn\'t return an error if you submit duplicate access requests in quick succession or submit an access request for access that is already in progress, approved, or rejected.  It\'s best practice to check for any existing access requests that reference the same access items before submitting a new access request. This can be accomplished by using the [List Access Request Status](https://developer.sailpoint.com/idn/api/v3/list-access-request-status) or the [Pending Access Request Approvals](https://developer.sailpoint.com/idn/api/v3/list-pending-approvals) APIs. You can also use the [Search API](https://developer.sailpoint.com/idn/api/v3/search) to check the existing access items an identity has before submitting an access request to ensure that you aren\'t requesting access that is already granted. If you use this API to request access that an identity already has, the API will ignore the request.  These ignored requests do not display when you use the [List Access Request Status](https://developer.sailpoint.com/idn/api/v3/list-access-request-status) API.  There are two types of access request:  __GRANT_ACCESS__ * Can be requested for multiple identities in a single request. * Supports self request and request on behalf of other users. Refer to the [Get Access Request Configuration](https://developer.sailpoint.com/idn/api/v3/get-access-request-config) endpoint for request configuration options.   * Allows any authenticated token (except API) to call this endpoint to request to grant access to themselves. Depending on the configuration, a user can request access for others. * Roles, access profiles and entitlements can be requested. * While requesting entitlements, maximum of 25 entitlements and 10 recipients are allowed in a request.   __REVOKE_ACCESS__ * Can only be requested for a single identity at a time. * You cannot use an access request to revoke access from an identity if that access has been granted by role membership or by birthright provisioning.  * Does not support self request. Only manager can request to revoke access for their directly managed employees. * If a `removeDate` is specified, then the access will be removed on that date and time only for roles, access profiles and entitlements. * Roles, access profiles, and entitlements can be requested for revocation. * Revoke requests for entitlements are limited to 1 entitlement per access request currently. * You can specify a `removeDate` if the access doesn\'t already have a sunset date. The `removeDate` must be a future date, in the UTC timezone.  * Allows a manager to request to revoke access for direct employees. A user with ORG_ADMIN authority can also request to revoke access from anyone. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessRequestBeta** | [**AccessRequestBeta**](../Models/AccessRequestBeta.md)|  | 

### Return type

[**AccessRequestResponseBeta**](../Models/AccessRequestResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestsBetaApi, AccessRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestsBetaApi = new AccessRequestsBetaApi(apiConfig);
const accessRequestBeta : AccessRequestBeta = ; // 
const val = await accessRequestsBetaApi.createAccessRequest(accessRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getAccessRequestConfig

> AccessRequestConfigBeta getAccessRequestConfig()

Get Access Request Configuration

This endpoint returns the current access-request configuration.

### Parameters

This endpoint does not need any parameter.

### Return type

[**AccessRequestConfigBeta**](../Models/AccessRequestConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestsBetaApi = new AccessRequestsBetaApi(apiConfig);
const val = await accessRequestsBetaApi.getAccessRequestConfig();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listAccessRequestStatus

> Array&lt;RequestedItemStatusBeta&gt; listAccessRequestStatus(requestedFor, requestedBy, regardingIdentity, assignedTo, count, limit, offset, filters, sorters, requestState)

Access Request Status

Use this API to return a list of access request statuses based on the specified query parameters. If an access request was made for access that an identity already has, the API ignores the access request.  These ignored requests do not display in the list of access request statuses. Any user with any user level can get the status of their own access requests. A user with ORG_ADMIN is required to call this API to get a list of statuses for other users.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string**| Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | [optional] [default to undefined]
 **requestedBy** | **string**| Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | [optional] [default to undefined]
 **regardingIdentity** | **string**| Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. | [optional] [default to undefined]
 **assignedTo** | **string**| Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. | [optional] [default to undefined]
 **count** | **boolean**| If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. | [optional] [default to false]
 **limit** | **number**| Max number of results to return. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *in*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** | [optional] [default to undefined]
 **requestState** | **string**| Filter the results by the state of the request. The only valid value is *EXECUTING*. | [optional] [default to undefined]

### Return type

[**Array&lt;RequestedItemStatusBeta&gt;**](../Models/RequestedItemStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestsBetaApi = new AccessRequestsBetaApi(apiConfig);
const requestedFor = "2c9180877b2b6ea4017b2c545f971429", // string | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  requestedBy = "2c9180877b2b6ea4017b2c545f971429", // string | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  regardingIdentity = "2c9180877b2b6ea4017b2c545f971429", // string | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
  assignedTo = "2c9180877b2b6ea4017b2c545f971429", // string | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user.
  count = false, // boolean | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored.
  limit = 100, // number | Max number of results to return.
  offset = 10, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified.
  filters = "accountActivityItemId eq "2c918086771c86df0177401efcdf54c0"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *in*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw*
  sorters = "created", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name**
  requestState = "request-state=EXECUTING"; // string | Filter the results by the state of the request. The only valid value is *EXECUTING*.
const val = await accessRequestsBetaApi.listAccessRequestStatus(requestedFor, requestedBy, regardingIdentity, assignedTo, count, limit, offset, filters, sorters, requestState);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## setAccessRequestConfig

> AccessRequestConfigBeta setAccessRequestConfig(accessRequestConfigBeta)

Update Access Request Configuration

This endpoint replaces the current access-request configuration.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessRequestConfigBeta** | [**AccessRequestConfigBeta**](../Models/AccessRequestConfigBeta.md)|  | 

### Return type

[**AccessRequestConfigBeta**](../Models/AccessRequestConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestsBetaApi, AccessRequestConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestsBetaApi = new AccessRequestsBetaApi(apiConfig);
const accessRequestConfigBeta : AccessRequestConfigBeta = ; // 
const val = await accessRequestsBetaApi.setAccessRequestConfig(accessRequestConfigBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

