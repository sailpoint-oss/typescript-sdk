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

{
  "id" : "c9aa02f7-86b0-4bc4-84bd-3116a6131e77",
  "createdDate" : "2020-09-16T18:49:32.150Z",
  "lastGenerated" : "2020-09-16T18:49:32.150Z",
  "numberOfUpdates" : 0,
  "roleIds" : [ "2c91808e720e94f8017253287c0a44f4", "2c918087723ac2800172532191540e03", "2c9180986e4c8592016e6b15eaef447c" ],
  "status" : "CREATED"
}



try {
    const val = await roleInsightsBetaApi.createRoleInsightRequests();
    
    // Below is a request that includes all optional parameters      
    // const val = await roleInsightsBetaApi.createRoleInsightRequests();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const insightId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role insight id (default to undefined)
const sorters : string = "identitiesWithAccess"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. (optional) (default to undefined)
const filters : string = "name sw "r""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional) (default to undefined)

try {
    const val = await roleInsightsBetaApi.downloadRoleInsightsEntitlementsChanges(insightId);
    
    // Below is a request that includes all optional parameters      
    // const val = await roleInsightsBetaApi.downloadRoleInsightsEntitlementsChanges(insightId, sorters, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "id" : "8c190e67-87aa-4ed9-a90b-d9d5344523fb",
  "name" : "Adam Smith",
  "attributes" : {
    "department" : "Human Resources-tah-mgb-dnd",
    "firstName" : "Adam",
    "jobTitle" : "Sales Analyst",
    "location" : "Mexico"
  }
}, {
  "id" : "8c190e67-87aa-4ed9-a90b-d9d5344523fb",
  "name" : "Adam Smith",
  "attributes" : {
    "department" : "Human Resources-tah-mgb-dnd",
    "firstName" : "Adam",
    "jobTitle" : "Sales Analyst",
    "location" : "Mexico"
  }
} ]


const insightId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role insight id (default to undefined)
const entitlementId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The entitlement id (default to undefined)
const hasEntitlement : boolean = true; // Identity has this entitlement or not (optional) (default to false)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const sorters : string = "name"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) (default to undefined)
const filters : string = "name sw "Jan""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional) (default to undefined)

try {
    const val = await roleInsightsBetaApi.getEntitlementChangesIdentities(insightId, entitlementId);
    
    // Below is a request that includes all optional parameters      
    // const val = await roleInsightsBetaApi.getEntitlementChangesIdentities(insightId, entitlementId, hasEntitlement, offset, limit, count, sorters, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "insight" : {
    "identitiesWithAccess" : 850,
    "totalNumberOfIdentities" : 1000,
    "impactedIdentityNames" : "impactedIdentityNames",
    "identitiesImpacted" : 150,
    "type" : "ADD"
  },
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "role" : {
    "ownerName" : "Bob",
    "name" : "Software Engineer",
    "description" : "Person who develops software",
    "id" : "1467e61e-f284-439c-ba2d-c6cc11cf0941",
    "ownerId" : "1467e61e-f284-439c-ba2d-c6cc11cf0941"
  },
  "modifiedDate" : "2020-05-19T13:49:37.385Z",
  "id" : "1467e61e-f284-439c-ba2d-c6cc11cf0941",
  "numberOfUpdates" : 5
}


const insightId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role insight id (default to undefined)

try {
    const val = await roleInsightsBetaApi.getRoleInsight(insightId);
    
    // Below is a request that includes all optional parameters      
    // const val = await roleInsightsBetaApi.getRoleInsight(insightId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "insight" : {
    "identitiesWithAccess" : 850,
    "totalNumberOfIdentities" : 1000,
    "impactedIdentityNames" : "impactedIdentityNames",
    "identitiesImpacted" : 150,
    "type" : "ADD"
  },
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "role" : {
    "ownerName" : "Bob",
    "name" : "Software Engineer",
    "description" : "Person who develops software",
    "id" : "1467e61e-f284-439c-ba2d-c6cc11cf0941",
    "ownerId" : "1467e61e-f284-439c-ba2d-c6cc11cf0941"
  },
  "modifiedDate" : "2020-05-19T13:49:37.385Z",
  "id" : "1467e61e-f284-439c-ba2d-c6cc11cf0941",
  "numberOfUpdates" : 5
}, {
  "insight" : {
    "identitiesWithAccess" : 850,
    "totalNumberOfIdentities" : 1000,
    "impactedIdentityNames" : "impactedIdentityNames",
    "identitiesImpacted" : 150,
    "type" : "ADD"
  },
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "role" : {
    "ownerName" : "Bob",
    "name" : "Software Engineer",
    "description" : "Person who develops software",
    "id" : "1467e61e-f284-439c-ba2d-c6cc11cf0941",
    "ownerId" : "1467e61e-f284-439c-ba2d-c6cc11cf0941"
  },
  "modifiedDate" : "2020-05-19T13:49:37.385Z",
  "id" : "1467e61e-f284-439c-ba2d-c6cc11cf0941",
  "numberOfUpdates" : 5
} ]


const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const sorters : string = "numberOfUpdates"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** (optional) (default to undefined)
const filters : string = "name sw "John""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* (optional) (default to undefined)

try {
    const val = await roleInsightsBetaApi.getRoleInsights();
    
    // Below is a request that includes all optional parameters      
    // const val = await roleInsightsBetaApi.getRoleInsights(offset, limit, count, sorters, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "name" : "Administrator",
  "id" : "8c190e67-87aa-4ed9-a90b-d9d5344523fb",
  "description" : "Full administrative access to IdentityNow",
  "source" : "IdentityNow",
  "attribute" : "assignedGroups",
  "value" : "ORG_ADMIN"
}, {
  "name" : "Administrator",
  "id" : "8c190e67-87aa-4ed9-a90b-d9d5344523fb",
  "description" : "Full administrative access to IdentityNow",
  "source" : "IdentityNow",
  "attribute" : "assignedGroups",
  "value" : "ORG_ADMIN"
} ]


const insightId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role insight id (default to undefined)
const filters : string = "name sw "r""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional) (default to undefined)

try {
    const val = await roleInsightsBetaApi.getRoleInsightsCurrentEntitlements(insightId);
    
    // Below is a request that includes all optional parameters      
    // const val = await roleInsightsBetaApi.getRoleInsightsCurrentEntitlements(insightId, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "insight" : {
    "identitiesWithAccess" : 850,
    "totalNumberOfIdentities" : 1000,
    "impactedIdentityNames" : "impactedIdentityNames",
    "identitiesImpacted" : 150,
    "type" : "ADD"
  },
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "attribute" : "attribute",
  "source" : "source",
  "value" : "value"
}, {
  "insight" : {
    "identitiesWithAccess" : 850,
    "totalNumberOfIdentities" : 1000,
    "impactedIdentityNames" : "impactedIdentityNames",
    "identitiesImpacted" : 150,
    "type" : "ADD"
  },
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "attribute" : "attribute",
  "source" : "source",
  "value" : "value"
} ]


const insightId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role insight id (default to undefined)
const sorters : string = "sorters_example"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** (optional) (default to undefined)
const filters : string = "name sw "Admin""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional) (default to undefined)

try {
    const val = await roleInsightsBetaApi.getRoleInsightsEntitlementsChanges(insightId);
    
    // Below is a request that includes all optional parameters      
    // const val = await roleInsightsBetaApi.getRoleInsightsEntitlementsChanges(insightId, sorters, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "id" : "c9aa02f7-86b0-4bc4-84bd-3116a6131e77",
  "createdDate" : "2020-09-16T18:49:32.150Z",
  "lastGenerated" : "2020-09-16T18:49:32.150Z",
  "numberOfUpdates" : 0,
  "roleIds" : [ "2c91808e720e94f8017253287c0a44f4", "2c918087723ac2800172532191540e03", "2c9180986e4c8592016e6b15eaef447c" ],
  "status" : "CREATED"
}


const id : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role insights request id (default to undefined)

try {
    const val = await roleInsightsBetaApi.getRoleInsightsRequests(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await roleInsightsBetaApi.getRoleInsightsRequests(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "totalNumberOfEntitlements" : 250,
  "totalNumberOfIdentities" : 980,
  "identitiesWithAccessViaRoles" : 550,
  "entitlementsIncludedInRoles" : 45,
  "numberOfUpdates" : 0,
  "lastGenerated" : "2020-05-19T13:49:37.385Z"
}



try {
    const val = await roleInsightsBetaApi.getRoleInsightsSummary();
    
    // Below is a request that includes all optional parameters      
    // const val = await roleInsightsBetaApi.getRoleInsightsSummary();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

