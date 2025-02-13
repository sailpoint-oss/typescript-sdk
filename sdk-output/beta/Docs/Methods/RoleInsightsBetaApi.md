---
title: RoleInsightsBetaApi
pagination_label: RoleInsightsBetaApi
sidebar_label: RoleInsightsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'RoleInsightsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'RoleInsightsBetaApi']
---

# RoleInsightsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRoleInsightRequests**](RoleInsightsBetaApi.md#createRoleInsightRequests) | **POST** /role-insights/requests | Generate insights for roles
[**downloadRoleInsightsEntitlementsChanges**](RoleInsightsBetaApi.md#downloadRoleInsightsEntitlementsChanges) | **GET** /role-insights/{insightId}/entitlement-changes/download | Download entitlement insights for a role
[**getEntitlementChangesIdentities**](RoleInsightsBetaApi.md#getEntitlementChangesIdentities) | **GET** /role-insights/{insightId}/entitlement-changes/{entitlementId}/identities | Get identities for a suggested entitlement (for a role)
[**getRoleInsight**](RoleInsightsBetaApi.md#getRoleInsight) | **GET** /role-insights/{insightId} | Get a single role insight
[**getRoleInsights**](RoleInsightsBetaApi.md#getRoleInsights) | **GET** /role-insights | Get role insights
[**getRoleInsightsCurrentEntitlements**](RoleInsightsBetaApi.md#getRoleInsightsCurrentEntitlements) | **GET** /role-insights/{insightId}/current-entitlements | Get current entitlement for a role
[**getRoleInsightsEntitlementsChanges**](RoleInsightsBetaApi.md#getRoleInsightsEntitlementsChanges) | **GET** /role-insights/{insightId}/entitlement-changes | Get entitlement insights for a role
[**getRoleInsightsRequests**](RoleInsightsBetaApi.md#getRoleInsightsRequests) | **GET** /role-insights/requests/{id} | Returns metadata from prior request.
[**getRoleInsightsSummary**](RoleInsightsBetaApi.md#getRoleInsightsSummary) | **GET** /role-insights/summary | Get role insights summary information



## createRoleInsightRequests

> RoleInsightsResponseBeta createRoleInsightRequests()

Generate insights for roles

Submits a create role insights request to the role insights application. At this time there are no parameters. All business roles will be processed for the customer.

### Parameters

This endpoint does not need any parameter.

### Return type

[**RoleInsightsResponseBeta**](../Models/RoleInsightsResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RoleInsightsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const roleInsightsBetaApi = new RoleInsightsBetaApi(apiConfig);
const val = await roleInsightsBetaApi.createRoleInsightRequests();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## downloadRoleInsightsEntitlementsChanges

> string downloadRoleInsightsEntitlementsChanges(insightId, sorters, filters)

Download entitlement insights for a role

This endpoint returns the entitlement insights for a role.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insightId** | **string**| The role insight id | [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* | [optional] [default to undefined]

### Return type

**string**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RoleInsightsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const roleInsightsBetaApi = new RoleInsightsBetaApi(apiConfig);
const insightId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role insight id
const sorters = "identitiesWithAccess", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order.
  filters = "name sw "r""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw*
const val = await roleInsightsBetaApi.downloadRoleInsightsEntitlementsChanges(insightId, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getEntitlementChangesIdentities

> Array&lt;RoleInsightsIdentitiesBeta&gt; getEntitlementChangesIdentities(insightId, entitlementId, hasEntitlement, offset, limit, count, sorters, filters)

Get identities for a suggested entitlement (for a role)

Role insights suggests entitlements to be added for a role. This endpoint returns a list of identities in the role, with or without the entitlements, for a suggested entitlement so that the user can see which identities would be affected if the suggested entitlement were to be added to the role.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insightId** | **string**| The role insight id | [default to undefined]
 **entitlementId** | **string**| The entitlement id | [default to undefined]
 **hasEntitlement** | **boolean**| Identity has this entitlement or not | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* | [optional] [default to undefined]

### Return type

[**Array&lt;RoleInsightsIdentitiesBeta&gt;**](../Models/RoleInsightsIdentitiesBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RoleInsightsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const roleInsightsBetaApi = new RoleInsightsBetaApi(apiConfig);
const insightId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role insight id
const entitlementId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The entitlement id
const hasEntitlement = true, // boolean | Identity has this entitlement or not
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "name", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  filters = "name sw "Jan""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*
const val = await roleInsightsBetaApi.getEntitlementChangesIdentities(insightId, entitlementId, hasEntitlement, offset, limit, count, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getRoleInsight

> RoleInsightBeta getRoleInsight(insightId)

Get a single role insight

This endpoint gets role insights information for a role.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insightId** | **string**| The role insight id | [default to undefined]

### Return type

[**RoleInsightBeta**](../Models/RoleInsightBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RoleInsightsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const roleInsightsBetaApi = new RoleInsightsBetaApi(apiConfig);
const insightId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role insight id
const val = await roleInsightsBetaApi.getRoleInsight(insightId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getRoleInsights

> Array&lt;RoleInsightBeta&gt; getRoleInsights(offset, limit, count, sorters, filters)

Get role insights

This method returns detailed role insights for each role.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* | [optional] [default to undefined]

### Return type

[**Array&lt;RoleInsightBeta&gt;**](../Models/RoleInsightBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RoleInsightsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const roleInsightsBetaApi = new RoleInsightsBetaApi(apiConfig);
const offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "numberOfUpdates", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities**
  filters = "name sw "John""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw*
const val = await roleInsightsBetaApi.getRoleInsights(offset, limit, count, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getRoleInsightsCurrentEntitlements

> Array&lt;RoleInsightsEntitlementBeta&gt; getRoleInsightsCurrentEntitlements(insightId, filters)

Get current entitlement for a role

This endpoint gets the entitlements for a role. The term \"current\" is to distinguish from the entitlement(s) an insight might recommend adding.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insightId** | **string**| The role insight id | [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* | [optional] [default to undefined]

### Return type

[**Array&lt;RoleInsightsEntitlementBeta&gt;**](../Models/RoleInsightsEntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RoleInsightsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const roleInsightsBetaApi = new RoleInsightsBetaApi(apiConfig);
const insightId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role insight id
const filters = "name sw "r""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw*
const val = await roleInsightsBetaApi.getRoleInsightsCurrentEntitlements(insightId, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getRoleInsightsEntitlementsChanges

> Array&lt;RoleInsightsEntitlementChangesBeta&gt; getRoleInsightsEntitlementsChanges(insightId, sorters, filters)

Get entitlement insights for a role

This endpoint returns entitlement insights for a role.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insightId** | **string**| The role insight id | [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* | [optional] [default to undefined]

### Return type

[**Array&lt;RoleInsightsEntitlementChangesBeta&gt;**](../Models/RoleInsightsEntitlementChangesBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RoleInsightsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const roleInsightsBetaApi = new RoleInsightsBetaApi(apiConfig);
const insightId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role insight id
const sorters = "sorters_example", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name**
  filters = "name sw "Admin""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw*
const val = await roleInsightsBetaApi.getRoleInsightsEntitlementsChanges(insightId, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getRoleInsightsRequests

> RoleInsightsResponseBeta getRoleInsightsRequests(id)

Returns metadata from prior request.

This endpoint returns details of a prior role insights request. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The role insights request id | [default to undefined]

### Return type

[**RoleInsightsResponseBeta**](../Models/RoleInsightsResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RoleInsightsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const roleInsightsBetaApi = new RoleInsightsBetaApi(apiConfig);
const id : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role insights request id
const val = await roleInsightsBetaApi.getRoleInsightsRequests(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getRoleInsightsSummary

> RoleInsightsSummaryBeta getRoleInsightsSummary()

Get role insights summary information

This method returns high level summary information for role insights for a customer.

### Parameters

This endpoint does not need any parameter.

### Return type

[**RoleInsightsSummaryBeta**](../Models/RoleInsightsSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RoleInsightsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const roleInsightsBetaApi = new RoleInsightsBetaApi(apiConfig);
const val = await roleInsightsBetaApi.getRoleInsightsSummary();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

