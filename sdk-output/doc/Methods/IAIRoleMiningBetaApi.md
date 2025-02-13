---
title: IAIRoleMiningBetaApi
pagination_label: IAIRoleMiningBetaApi
sidebar_label: IAIRoleMiningBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'IAIRoleMiningBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'IAIRoleMiningBetaApi']
---

# IAIRoleMiningBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPotentialRoleProvisionRequest**](IAIRoleMiningBetaApi.md#createPotentialRoleProvisionRequest) | **POST** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/provision | Create request to provision a potential role into an actual role.
[**createRoleMiningSessions**](IAIRoleMiningBetaApi.md#createRoleMiningSessions) | **POST** /role-mining-sessions | Create a role mining session
[**downloadRoleMiningPotentialRoleZip**](IAIRoleMiningBetaApi.md#downloadRoleMiningPotentialRoleZip) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}/download | Export (download) details for a potential role in a role mining session
[**exportRoleMiningPotentialRole**](IAIRoleMiningBetaApi.md#exportRoleMiningPotentialRole) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export | Export (download) details for a potential role in a role mining session
[**exportRoleMiningPotentialRoleAsync**](IAIRoleMiningBetaApi.md#exportRoleMiningPotentialRoleAsync) | **POST** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async | Asynchronously export details for a potential role in a role mining session and upload to S3
[**exportRoleMiningPotentialRoleStatus**](IAIRoleMiningBetaApi.md#exportRoleMiningPotentialRoleStatus) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId} | Retrieve status of a potential role export job
[**getAllPotentialRoleSummaries**](IAIRoleMiningBetaApi.md#getAllPotentialRoleSummaries) | **GET** /role-mining-potential-roles | Retrieves all potential role summaries
[**getEntitlementDistributionPotentialRole**](IAIRoleMiningBetaApi.md#getEntitlementDistributionPotentialRole) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularity-distribution | Retrieves entitlement popularity distribution for a potential role in a role mining session
[**getEntitlementsPotentialRole**](IAIRoleMiningBetaApi.md#getEntitlementsPotentialRole) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularities | Retrieves entitlements for a potential role in a role mining session
[**getExcludedEntitlementsPotentialRole**](IAIRoleMiningBetaApi.md#getExcludedEntitlementsPotentialRole) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/excluded-entitlements | Retrieves excluded entitlements for a potential role in a role mining session
[**getIdentitiesPotentialRole**](IAIRoleMiningBetaApi.md#getIdentitiesPotentialRole) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/identities | Retrieves identities for a potential role in a role mining session
[**getPotentialRole**](IAIRoleMiningBetaApi.md#getPotentialRole) | **GET** /role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId} | Retrieve potential role in session
[**getPotentialRoleApplications**](IAIRoleMiningBetaApi.md#getPotentialRoleApplications) | **GET** /role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/applications | Retrieves the applications of a potential role for a role mining session
[**getPotentialRoleEntitlements**](IAIRoleMiningBetaApi.md#getPotentialRoleEntitlements) | **GET** /role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/entitlements | Retrieves the entitlements of a potential role for a role mining session
[**getPotentialRoleSourceIdentityUsage**](IAIRoleMiningBetaApi.md#getPotentialRoleSourceIdentityUsage) | **GET** /role-mining-potential-roles/{potentialRoleId}/sources/{sourceId}/identityUsage | Retrieves potential role source usage
[**getPotentialRoleSummaries**](IAIRoleMiningBetaApi.md#getPotentialRoleSummaries) | **GET** /role-mining-sessions/{sessionId}/potential-role-summaries | Retrieve session\&#39;s potential role summaries
[**getRoleMiningPotentialRole**](IAIRoleMiningBetaApi.md#getRoleMiningPotentialRole) | **GET** /role-mining-potential-roles/{potentialRoleId} | Retrieves a specific potential role
[**getRoleMiningSession**](IAIRoleMiningBetaApi.md#getRoleMiningSession) | **GET** /role-mining-sessions/{sessionId} | Get a role mining session
[**getRoleMiningSessionStatus**](IAIRoleMiningBetaApi.md#getRoleMiningSessionStatus) | **GET** /role-mining-sessions/{sessionId}/status | Get role mining session status state
[**getRoleMiningSessions**](IAIRoleMiningBetaApi.md#getRoleMiningSessions) | **GET** /role-mining-sessions | Retrieves all role mining sessions
[**getSavedPotentialRoles**](IAIRoleMiningBetaApi.md#getSavedPotentialRoles) | **GET** /role-mining-potential-roles/saved | Retrieves all saved potential roles
[**patchPotentialRole**](IAIRoleMiningBetaApi.md#patchPotentialRole) | **PATCH** /role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId} | Update a potential role in session
[**patchRoleMiningPotentialRole**](IAIRoleMiningBetaApi.md#patchRoleMiningPotentialRole) | **PATCH** /role-mining-potential-roles/{potentialRoleId} | Update a potential role
[**patchRoleMiningSession**](IAIRoleMiningBetaApi.md#patchRoleMiningSession) | **PATCH** /role-mining-sessions/{sessionId} | Patch a role mining session
[**updateEntitlementsPotentialRole**](IAIRoleMiningBetaApi.md#updateEntitlementsPotentialRole) | **POST** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/edit-entitlements | Edit entitlements for a potential role to exclude some entitlements



## createPotentialRoleProvisionRequest

> RoleMiningPotentialRoleSummaryBeta createPotentialRoleProvisionRequest(sessionId, potentialRoleId, minEntitlementPopularity, includeCommonAccess, roleMiningPotentialRoleProvisionRequestBeta)

Create request to provision a potential role into an actual role.

This method starts a job to provision a potential role

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]
 **minEntitlementPopularity** | **number**| Minimum popularity required for an entitlement to be included in the provisioned role. | [optional] [default to 0]
 **includeCommonAccess** | **boolean**| Boolean determining whether common access entitlements will be included in the provisioned role. | [optional] [default to true]
 **roleMiningPotentialRoleProvisionRequestBeta** | [**RoleMiningPotentialRoleProvisionRequestBeta**](../Models/RoleMiningPotentialRoleProvisionRequestBeta.md)| Required information to create a new role | [optional] 

### Return type

[**RoleMiningPotentialRoleSummaryBeta**](../Models/RoleMiningPotentialRoleSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

{
  "entitlementCount" : 15,
  "density" : 90,
  "saved" : true,
  "roleId" : "2a4be6fbcf3c4e66b95a0c15ffd591",
  "session" : {
    "pruneThreshold" : 5,
    "saved" : true,
    "scope" : {
      "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
      "attributeFilterCriteria" : {
        "displayName" : {
          "untranslated" : "Location: Miami"
        },
        "ariaLabel" : {
          "untranslated" : "Location: Miami"
        },
        "data" : {
          "displayName" : {
            "translateKey" : "IDN.IDENTITY_ATTRIBUTES.LOCATION"
          },
          "name" : "location",
          "operator" : "EQUALS",
          "values" : [ "Miami" ]
        }
      },
      "criteria" : "source.name:DataScienceDataset"
    },
    "name" : "Saved RM Session - 07/10",
    "minNumIdentitiesInPotentialRole" : 20,
    "id" : "9f36f5e5-1e81-4eca-b087-548959d91c71",
    "state" : "CREATED",
    "scopingMethod" : "MANUAL",
    "type" : "SPECIALIZED"
  },
  "provisionState" : "POTENTIAL",
  "description" : "description",
  "identityCount" : 25,
  "freshness" : 70,
  "type" : "SPECIALIZED",
  "potentialRoleRef" : {
    "name" : "Potential Role - e0cc5d",
    "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923"
  },
  "quality" : 80,
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "createdBy" : {
    "displayName" : "Ashley.Pierce",
    "id" : "2c918090761a5aac0176215c46a62d58"
  },
  "name" : "Potential Role - e0cc5d",
  "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923",
  "identityGroupStatus" : "OBTAINED"
}


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // A potential role id in a role mining session (default to undefined)
const minEntitlementPopularity : number = 56; // Minimum popularity required for an entitlement to be included in the provisioned role. (optional) (default to 0)
const includeCommonAccess : boolean = true; // Boolean determining whether common access entitlements will be included in the provisioned role. (optional) (default to true)
const roleMiningPotentialRoleProvisionRequestBeta : RoleMiningPotentialRoleProvisionRequestBeta = 

try {
    const val = await iAIRoleMiningBetaApi.createPotentialRoleProvisionRequest(sessionId, potentialRoleId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.createPotentialRoleProvisionRequest(sessionId, potentialRoleId, minEntitlementPopularity, includeCommonAccess, roleMiningPotentialRoleProvisionRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## createRoleMiningSessions

> RoleMiningSessionResponseBeta createRoleMiningSessions(roleMiningSessionDtoBeta)

Create a role mining session

This submits a create role mining session request to the role mining application.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleMiningSessionDtoBeta** | [**RoleMiningSessionDtoBeta**](../Models/RoleMiningSessionDtoBeta.md)| Role mining session parameters | 

### Return type

[**RoleMiningSessionResponseBeta**](../Models/RoleMiningSessionResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi, RoleMiningSessionDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

{
  "scope" : {
    "identityIds" : [ ],
    "criteria" : "source.name:DataScienceDataset"
  },
  "scopingMethod" : "AUTO_RM",
  "minNumIdentitiesInPotentialRole" : 20,
  "pruneThreshold" : 70,
  "prescribedPruneThreshold" : 83,
  "potentialRoleCount" : 8,
  "potentialRolesReadyCount" : 4,
  "status" : {
    "state" : "POTENTIAL_ROLES_PROCESSING"
  },
  "type" : "SPECIALIZED",
  "identityCount" : 0,
  "saved" : false,
  "id" : "602ba738-cf48-499b-a780-7b67b3fc1ecf",
  "createdDate" : "2021-09-08T16:11:05.348Z",
  "modifiedDate" : "2021-09-08T16:11:05.348Z"
}


const roleMiningSessionDtoBeta : RoleMiningSessionDtoBeta = 

try {
    const val = await iAIRoleMiningBetaApi.createRoleMiningSessions(roleMiningSessionDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.createRoleMiningSessions(roleMiningSessionDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## downloadRoleMiningPotentialRoleZip

> File downloadRoleMiningPotentialRoleZip(sessionId, potentialRoleId, exportId)

Export (download) details for a potential role in a role mining session

This endpoint downloads a completed export of information for a potential role in a role mining session.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]
 **exportId** | **string**| The id of a previously run export job for this potential role | [default to undefined]

### Return type

**File**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

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


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "278359a6-04b7-4669-9468-924cf580964a"; // A potential role id in a role mining session (default to undefined)
const exportId : string = "4940ffd4-836f-48a3-b2b0-6d498c3fdf40"; // The id of a previously run export job for this potential role (default to undefined)

try {
    const val = await iAIRoleMiningBetaApi.downloadRoleMiningPotentialRoleZip(sessionId, potentialRoleId, exportId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.downloadRoleMiningPotentialRoleZip(sessionId, potentialRoleId, exportId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## exportRoleMiningPotentialRole

> File exportRoleMiningPotentialRole(sessionId, potentialRoleId)

Export (download) details for a potential role in a role mining session

This endpoint downloads all the information for a potential role in a role mining session. Includes identities and entitlements in the potential role.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]

### Return type

**File**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

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


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // A potential role id in a role mining session (default to undefined)

try {
    const val = await iAIRoleMiningBetaApi.exportRoleMiningPotentialRole(sessionId, potentialRoleId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.exportRoleMiningPotentialRole(sessionId, potentialRoleId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## exportRoleMiningPotentialRoleAsync

> RoleMiningPotentialRoleExportResponseBeta exportRoleMiningPotentialRoleAsync(sessionId, potentialRoleId, roleMiningPotentialRoleExportRequestBeta)

Asynchronously export details for a potential role in a role mining session and upload to S3

This endpoint uploads all the information for a potential role in a role mining session to S3 as a downloadable zip archive.  Includes identities and entitlements in the potential role.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]
 **roleMiningPotentialRoleExportRequestBeta** | [**RoleMiningPotentialRoleExportRequestBeta**](../Models/RoleMiningPotentialRoleExportRequestBeta.md)|  | [optional] 

### Return type

[**RoleMiningPotentialRoleExportResponseBeta**](../Models/RoleMiningPotentialRoleExportResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

{
  "exportId" : "0c6cdb76-1227-4aaf-af21-192dbdfbfa04",
  "status" : "QUEUED",
  "minEntitlementPopularity" : 0,
  "includeCommonAccess" : true
}


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "278359a6-04b7-4669-9468-924cf580964a"; // A potential role id in a role mining session (default to undefined)
const roleMiningPotentialRoleExportRequestBeta : RoleMiningPotentialRoleExportRequestBeta = 

try {
    const val = await iAIRoleMiningBetaApi.exportRoleMiningPotentialRoleAsync(sessionId, potentialRoleId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.exportRoleMiningPotentialRoleAsync(sessionId, potentialRoleId, roleMiningPotentialRoleExportRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## exportRoleMiningPotentialRoleStatus

> RoleMiningPotentialRoleExportResponseBeta exportRoleMiningPotentialRoleStatus(sessionId, potentialRoleId, exportId)

Retrieve status of a potential role export job

This endpoint retrieves information about the current status of a potential role export.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]
 **exportId** | **string**| The id of a previously run export job for this potential role | [default to undefined]

### Return type

[**RoleMiningPotentialRoleExportResponseBeta**](../Models/RoleMiningPotentialRoleExportResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

{
  "exportId" : "0c6cdb76-1227-4aaf-af21-192dbdfbfa04",
  "status" : "QUEUED",
  "minEntitlementPopularity" : 0,
  "includeCommonAccess" : true
}


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "278359a6-04b7-4669-9468-924cf580964a"; // A potential role id in a role mining session (default to undefined)
const exportId : string = "4940ffd4-836f-48a3-b2b0-6d498c3fdf40"; // The id of a previously run export job for this potential role (default to undefined)

try {
    const val = await iAIRoleMiningBetaApi.exportRoleMiningPotentialRoleStatus(sessionId, potentialRoleId, exportId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.exportRoleMiningPotentialRoleStatus(sessionId, potentialRoleId, exportId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getAllPotentialRoleSummaries

> Array&lt;RoleMiningPotentialRoleSummaryBeta&gt; getAllPotentialRoleSummaries(sorters, filters, offset, limit, count)

Retrieves all potential role summaries

Returns all potential role summaries that match the query parameters

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* | [optional] [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;RoleMiningPotentialRoleSummaryBeta&gt;**](../Models/RoleMiningPotentialRoleSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

[ {
  "entitlementCount" : 15,
  "density" : 90,
  "saved" : true,
  "roleId" : "2a4be6fbcf3c4e66b95a0c15ffd591",
  "session" : {
    "pruneThreshold" : 5,
    "saved" : true,
    "scope" : {
      "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
      "attributeFilterCriteria" : {
        "displayName" : {
          "untranslated" : "Location: Miami"
        },
        "ariaLabel" : {
          "untranslated" : "Location: Miami"
        },
        "data" : {
          "displayName" : {
            "translateKey" : "IDN.IDENTITY_ATTRIBUTES.LOCATION"
          },
          "name" : "location",
          "operator" : "EQUALS",
          "values" : [ "Miami" ]
        }
      },
      "criteria" : "source.name:DataScienceDataset"
    },
    "name" : "Saved RM Session - 07/10",
    "minNumIdentitiesInPotentialRole" : 20,
    "id" : "9f36f5e5-1e81-4eca-b087-548959d91c71",
    "state" : "CREATED",
    "scopingMethod" : "MANUAL",
    "type" : "SPECIALIZED"
  },
  "provisionState" : "POTENTIAL",
  "description" : "description",
  "identityCount" : 25,
  "freshness" : 70,
  "type" : "SPECIALIZED",
  "potentialRoleRef" : {
    "name" : "Potential Role - e0cc5d",
    "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923"
  },
  "quality" : 80,
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "createdBy" : {
    "displayName" : "Ashley.Pierce",
    "id" : "2c918090761a5aac0176215c46a62d58"
  },
  "name" : "Potential Role - e0cc5d",
  "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923",
  "identityGroupStatus" : "OBTAINED"
}, {
  "entitlementCount" : 15,
  "density" : 90,
  "saved" : true,
  "roleId" : "2a4be6fbcf3c4e66b95a0c15ffd591",
  "session" : {
    "pruneThreshold" : 5,
    "saved" : true,
    "scope" : {
      "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
      "attributeFilterCriteria" : {
        "displayName" : {
          "untranslated" : "Location: Miami"
        },
        "ariaLabel" : {
          "untranslated" : "Location: Miami"
        },
        "data" : {
          "displayName" : {
            "translateKey" : "IDN.IDENTITY_ATTRIBUTES.LOCATION"
          },
          "name" : "location",
          "operator" : "EQUALS",
          "values" : [ "Miami" ]
        }
      },
      "criteria" : "source.name:DataScienceDataset"
    },
    "name" : "Saved RM Session - 07/10",
    "minNumIdentitiesInPotentialRole" : 20,
    "id" : "9f36f5e5-1e81-4eca-b087-548959d91c71",
    "state" : "CREATED",
    "scopingMethod" : "MANUAL",
    "type" : "SPECIALIZED"
  },
  "provisionState" : "POTENTIAL",
  "description" : "description",
  "identityCount" : 25,
  "freshness" : 70,
  "type" : "SPECIALIZED",
  "potentialRoleRef" : {
    "name" : "Potential Role - e0cc5d",
    "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923"
  },
  "quality" : 80,
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "createdBy" : {
    "displayName" : "Ashley.Pierce",
    "id" : "2c918090761a5aac0176215c46a62d58"
  },
  "name" : "Potential Role - e0cc5d",
  "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923",
  "identityGroupStatus" : "OBTAINED"
} ]


const sorters : string = "createdDate"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional) (default to undefined)
const filters : string = "(createdByName co "int") and (createdById sw "2c9180907") and (type eq "COMMON") and ((name co "entt") or (saved eq true))"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional) (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await iAIRoleMiningBetaApi.getAllPotentialRoleSummaries();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getAllPotentialRoleSummaries(sorters, filters, offset, limit, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getEntitlementDistributionPotentialRole

> { [key: string]: number; } getEntitlementDistributionPotentialRole(sessionId, potentialRoleId, includeCommonAccess)

Retrieves entitlement popularity distribution for a potential role in a role mining session

This method returns entitlement popularity distribution for a potential role in a role mining session.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]
 **includeCommonAccess** | **boolean**| Boolean determining whether common access entitlements will be included or not | [optional] [default to undefined]

### Return type

**{ [key: string]: number; }**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

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


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // A potential role id in a role mining session (default to undefined)
const includeCommonAccess : boolean = true; // Boolean determining whether common access entitlements will be included or not (optional) (default to undefined)

try {
    const val = await iAIRoleMiningBetaApi.getEntitlementDistributionPotentialRole(sessionId, potentialRoleId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getEntitlementDistributionPotentialRole(sessionId, potentialRoleId, includeCommonAccess);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getEntitlementsPotentialRole

> Array&lt;RoleMiningEntitlementBeta&gt; getEntitlementsPotentialRole(sessionId, potentialRoleId, includeCommonAccess, sorters, filters, offset, limit, count)

Retrieves entitlements for a potential role in a role mining session

This method returns entitlements for a potential role in a role mining session.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]
 **includeCommonAccess** | **boolean**| Boolean determining whether common access entitlements will be included or not | [optional] [default to true]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* | [optional] [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;RoleMiningEntitlementBeta&gt;**](../Models/RoleMiningEntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

[ {
  "sourceId" : "2c9180877620c1460176267f336a106f",
  "popularity" : 65.2,
  "name" : "Add/modify/delete users",
  "identityCount" : 45,
  "activitySourceState" : "complete",
  "entitlementRef" : {
    "name" : "App.entitlement.1",
    "description" : "Entitlement 1",
    "id" : "2c91808a7e95e6e0017e96e2086206c8",
    "attribute" : "groups"
  },
  "sourceUsagePercent" : 65.6,
  "applicationName" : "AppName",
  "popularityInOrg" : 35.8
}, {
  "sourceId" : "2c9180877620c1460176267f336a106f",
  "popularity" : 65.2,
  "name" : "Add/modify/delete users",
  "identityCount" : 45,
  "activitySourceState" : "complete",
  "entitlementRef" : {
    "name" : "App.entitlement.1",
    "description" : "Entitlement 1",
    "id" : "2c91808a7e95e6e0017e96e2086206c8",
    "attribute" : "groups"
  },
  "sourceUsagePercent" : 65.6,
  "applicationName" : "AppName",
  "popularityInOrg" : 35.8
} ]


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // A potential role id in a role mining session (default to undefined)
const includeCommonAccess : boolean = true; // Boolean determining whether common access entitlements will be included or not (optional) (default to true)
const sorters : string = "popularity"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  (optional) (default to undefined)
const filters : string = "applicationName sw "AD""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional) (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await iAIRoleMiningBetaApi.getEntitlementsPotentialRole(sessionId, potentialRoleId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getEntitlementsPotentialRole(sessionId, potentialRoleId, includeCommonAccess, sorters, filters, offset, limit, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getExcludedEntitlementsPotentialRole

> Array&lt;RoleMiningEntitlementBeta&gt; getExcludedEntitlementsPotentialRole(sessionId, potentialRoleId, sorters, filters, offset, limit, count)

Retrieves excluded entitlements for a potential role in a role mining session

This method returns excluded entitlements for a potential role in a role mining session.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* | [optional] [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;RoleMiningEntitlementBeta&gt;**](../Models/RoleMiningEntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

[ {
  "sourceId" : "2c9180877620c1460176267f336a106f",
  "popularity" : 65.2,
  "name" : "Add/modify/delete users",
  "identityCount" : 45,
  "activitySourceState" : "complete",
  "entitlementRef" : {
    "name" : "App.entitlement.1",
    "description" : "Entitlement 1",
    "id" : "2c91808a7e95e6e0017e96e2086206c8",
    "attribute" : "groups"
  },
  "sourceUsagePercent" : 65.6,
  "applicationName" : "AppName",
  "popularityInOrg" : 35.8
}, {
  "sourceId" : "2c9180877620c1460176267f336a106f",
  "popularity" : 65.2,
  "name" : "Add/modify/delete users",
  "identityCount" : 45,
  "activitySourceState" : "complete",
  "entitlementRef" : {
    "name" : "App.entitlement.1",
    "description" : "Entitlement 1",
    "id" : "2c91808a7e95e6e0017e96e2086206c8",
    "attribute" : "groups"
  },
  "sourceUsagePercent" : 65.6,
  "applicationName" : "AppName",
  "popularityInOrg" : 35.8
} ]


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // A potential role id in a role mining session (default to undefined)
const sorters : string = "populariity"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** (optional) (default to undefined)
const filters : string = "applicationName sw "AD""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional) (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await iAIRoleMiningBetaApi.getExcludedEntitlementsPotentialRole(sessionId, potentialRoleId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getExcludedEntitlementsPotentialRole(sessionId, potentialRoleId, sorters, filters, offset, limit, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getIdentitiesPotentialRole

> Array&lt;RoleMiningIdentityBeta&gt; getIdentitiesPotentialRole(sessionId, potentialRoleId, sorters, filters, offset, limit, count)

Retrieves identities for a potential role in a role mining session

This method returns identities for a potential role in a role mining session.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* | [optional] [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;RoleMiningIdentityBeta&gt;**](../Models/RoleMiningIdentityBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

[ {
  "id" : "2c9180877212632a017228d5934525e6",
  "name" : "Allene Abernathy-Welch",
  "attributes" : {
    "jobTitle" : "SQL Developer",
    "department" : "IT",
    "location" : "NYC",
    "firstName" : "Allene"
  }
}, {
  "id" : "2c9180877212632a017228d5934525e6",
  "name" : "Allene Abernathy-Welch",
  "attributes" : {
    "jobTitle" : "SQL Developer",
    "department" : "IT",
    "location" : "NYC",
    "firstName" : "Allene"
  }
} ]


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // A potential role id in a role mining session (default to undefined)
const sorters : string = "name"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) (default to undefined)
const filters : string = "filters_example"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional) (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await iAIRoleMiningBetaApi.getIdentitiesPotentialRole(sessionId, potentialRoleId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getIdentitiesPotentialRole(sessionId, potentialRoleId, sorters, filters, offset, limit, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getPotentialRole

> RoleMiningPotentialRoleBeta getPotentialRole(sessionId, potentialRoleId)

Retrieve potential role in session

This method returns a specific potential role for a role mining session.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]

### Return type

[**RoleMiningPotentialRoleBeta**](../Models/RoleMiningPotentialRoleBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

{
  "entitlementCount" : 25,
  "identityIds" : [ "07a0b4e2", "13b4e2a0" ],
  "density" : 75,
  "saved" : true,
  "roleId" : "07a0b4e2-7a76-44fa-bd0b-c64654b66519",
  "session" : {
    "pruneThreshold" : 5,
    "saved" : true,
    "scope" : {
      "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
      "attributeFilterCriteria" : {
        "displayName" : {
          "untranslated" : "Location: Miami"
        },
        "ariaLabel" : {
          "untranslated" : "Location: Miami"
        },
        "data" : {
          "displayName" : {
            "translateKey" : "IDN.IDENTITY_ATTRIBUTES.LOCATION"
          },
          "name" : "location",
          "operator" : "EQUALS",
          "values" : [ "Miami" ]
        }
      },
      "criteria" : "source.name:DataScienceDataset"
    },
    "name" : "Saved RM Session - 07/10",
    "minNumIdentitiesInPotentialRole" : 20,
    "id" : "9f36f5e5-1e81-4eca-b087-548959d91c71",
    "state" : "CREATED",
    "scopingMethod" : "MANUAL",
    "type" : "SPECIALIZED"
  },
  "provisionState" : "POTENTIAL",
  "description" : "Potential Role for Accounting dept",
  "identityCount" : 25,
  "freshness" : 75,
  "type" : "SPECIALIZED",
  "quality" : 100,
  "identityDistribution" : [ {
    "attributeName" : "department",
    "distribution" : [ {
      "attributeValue" : "NM Tier 3",
      "count" : 6
    } ]
  }, {
    "attributeName" : "department",
    "distribution" : [ {
      "attributeValue" : "NM Tier 3",
      "count" : 6
    } ]
  } ],
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "createdBy" : {
    "displayName" : "Ashley.Pierce",
    "id" : "2c918090761a5aac0176215c46a62d58"
  },
  "name" : "Saved Potential Role - 07/10",
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923",
  "excludedEntitlements" : [ "07a0b4e2", "13b4e2a0" ]
}


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // A potential role id in a role mining session (default to undefined)

try {
    const val = await iAIRoleMiningBetaApi.getPotentialRole(sessionId, potentialRoleId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getPotentialRole(sessionId, potentialRoleId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getPotentialRoleApplications

> Array&lt;RoleMiningPotentialRoleApplicationBeta&gt; getPotentialRoleApplications(sessionId, potentialRoleId, filters, offset, limit, count)

Retrieves the applications of a potential role for a role mining session

This method returns the applications of a potential role for a role mining session.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* | [optional] [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;RoleMiningPotentialRoleApplicationBeta&gt;**](../Models/RoleMiningPotentialRoleApplicationBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

[ {
  "name" : "{name=Slack}",
  "id" : "{id=2c9180877212632a017228d5a796292b}"
}, {
  "name" : "{name=Slack}",
  "id" : "{id=2c9180877212632a017228d5a796292b}"
} ]


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "62f28d91-7d9f-4d17-be15-666d5b41d77f"; // A potential role id in a role mining session (default to undefined)
const filters : string = "applicationName sw "test""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional) (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await iAIRoleMiningBetaApi.getPotentialRoleApplications(sessionId, potentialRoleId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getPotentialRoleApplications(sessionId, potentialRoleId, filters, offset, limit, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getPotentialRoleEntitlements

> Array&lt;RoleMiningPotentialRoleEntitlementsBeta&gt; getPotentialRoleEntitlements(sessionId, potentialRoleId, filters, offset, limit, count)

Retrieves the entitlements of a potential role for a role mining session

This method returns the entitlements of a potential role for a role mining session.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* | [optional] [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;RoleMiningPotentialRoleEntitlementsBeta&gt;**](../Models/RoleMiningPotentialRoleEntitlementsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

[ {
  "name" : "{name=LauncherTest2}",
  "id" : "{id=2c9180877212632a017228d5a796292c}"
}, {
  "name" : "{name=LauncherTest2}",
  "id" : "{id=2c9180877212632a017228d5a796292c}"
} ]


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "62f28d91-7d9f-4d17-be15-666d5b41d77f"; // A potential role id in a role mining session (default to undefined)
const filters : string = "entitlementRef.name sw "test""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional) (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await iAIRoleMiningBetaApi.getPotentialRoleEntitlements(sessionId, potentialRoleId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getPotentialRoleEntitlements(sessionId, potentialRoleId, filters, offset, limit, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getPotentialRoleSourceIdentityUsage

> Array&lt;RoleMiningPotentialRoleSourceUsageBeta&gt; getPotentialRoleSourceIdentityUsage(potentialRoleId, sourceId, sorters, offset, limit, count)

Retrieves potential role source usage

This method returns source usageCount (as number of days in the last 90 days) for each identity in a potential role.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **potentialRoleId** | **string**| A potential role id | [default to undefined]
 **sourceId** | **string**| A source id | [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** | [optional] [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;RoleMiningPotentialRoleSourceUsageBeta&gt;**](../Models/RoleMiningPotentialRoleSourceUsageBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

[ {
  "displayName" : "Kirk Koepp",
  "id" : "2c918089762475180176267f894b54dc",
  "email" : "kirk.koepp@testmail.identitynow.com",
  "usageCount" : 25
}, {
  "displayName" : "Kirk Koepp",
  "id" : "2c918089762475180176267f894b54dc",
  "email" : "kirk.koepp@testmail.identitynow.com",
  "usageCount" : 25
} ]


const potentialRoleId : string = "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923"; // A potential role id (default to undefined)
const sourceId : string = "2c9180877620c1460176267f336a106f"; // A source id (default to undefined)
const sorters : string = "-usageCount"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional) (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await iAIRoleMiningBetaApi.getPotentialRoleSourceIdentityUsage(potentialRoleId, sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getPotentialRoleSourceIdentityUsage(potentialRoleId, sourceId, sorters, offset, limit, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getPotentialRoleSummaries

> Array&lt;RoleMiningPotentialRoleSummaryBeta&gt; getPotentialRoleSummaries(sessionId, sorters, filters, offset, limit, count)

Retrieve session\'s potential role summaries

This method returns the potential role summaries for a role mining session.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* | [optional] [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;RoleMiningPotentialRoleSummaryBeta&gt;**](../Models/RoleMiningPotentialRoleSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

[ {
  "entitlementCount" : 15,
  "density" : 90,
  "saved" : true,
  "roleId" : "2a4be6fbcf3c4e66b95a0c15ffd591",
  "session" : {
    "pruneThreshold" : 5,
    "saved" : true,
    "scope" : {
      "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
      "attributeFilterCriteria" : {
        "displayName" : {
          "untranslated" : "Location: Miami"
        },
        "ariaLabel" : {
          "untranslated" : "Location: Miami"
        },
        "data" : {
          "displayName" : {
            "translateKey" : "IDN.IDENTITY_ATTRIBUTES.LOCATION"
          },
          "name" : "location",
          "operator" : "EQUALS",
          "values" : [ "Miami" ]
        }
      },
      "criteria" : "source.name:DataScienceDataset"
    },
    "name" : "Saved RM Session - 07/10",
    "minNumIdentitiesInPotentialRole" : 20,
    "id" : "9f36f5e5-1e81-4eca-b087-548959d91c71",
    "state" : "CREATED",
    "scopingMethod" : "MANUAL",
    "type" : "SPECIALIZED"
  },
  "provisionState" : "POTENTIAL",
  "description" : "description",
  "identityCount" : 25,
  "freshness" : 70,
  "type" : "SPECIALIZED",
  "potentialRoleRef" : {
    "name" : "Potential Role - e0cc5d",
    "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923"
  },
  "quality" : 80,
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "createdBy" : {
    "displayName" : "Ashley.Pierce",
    "id" : "2c918090761a5aac0176215c46a62d58"
  },
  "name" : "Potential Role - e0cc5d",
  "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923",
  "identityGroupStatus" : "OBTAINED"
}, {
  "entitlementCount" : 15,
  "density" : 90,
  "saved" : true,
  "roleId" : "2a4be6fbcf3c4e66b95a0c15ffd591",
  "session" : {
    "pruneThreshold" : 5,
    "saved" : true,
    "scope" : {
      "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
      "attributeFilterCriteria" : {
        "displayName" : {
          "untranslated" : "Location: Miami"
        },
        "ariaLabel" : {
          "untranslated" : "Location: Miami"
        },
        "data" : {
          "displayName" : {
            "translateKey" : "IDN.IDENTITY_ATTRIBUTES.LOCATION"
          },
          "name" : "location",
          "operator" : "EQUALS",
          "values" : [ "Miami" ]
        }
      },
      "criteria" : "source.name:DataScienceDataset"
    },
    "name" : "Saved RM Session - 07/10",
    "minNumIdentitiesInPotentialRole" : 20,
    "id" : "9f36f5e5-1e81-4eca-b087-548959d91c71",
    "state" : "CREATED",
    "scopingMethod" : "MANUAL",
    "type" : "SPECIALIZED"
  },
  "provisionState" : "POTENTIAL",
  "description" : "description",
  "identityCount" : 25,
  "freshness" : 70,
  "type" : "SPECIALIZED",
  "potentialRoleRef" : {
    "name" : "Potential Role - e0cc5d",
    "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923"
  },
  "quality" : 80,
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "createdBy" : {
    "displayName" : "Ashley.Pierce",
    "id" : "2c918090761a5aac0176215c46a62d58"
  },
  "name" : "Potential Role - e0cc5d",
  "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923",
  "identityGroupStatus" : "OBTAINED"
} ]


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const sorters : string = "createdDate"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional) (default to undefined)
const filters : string = "(createdByName co "int")and (createdById sw "2c9180907")and (type eq "COMMON")and ((name co "entt")or (saved eq true))"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional) (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await iAIRoleMiningBetaApi.getPotentialRoleSummaries(sessionId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getPotentialRoleSummaries(sessionId, sorters, filters, offset, limit, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getRoleMiningPotentialRole

> RoleMiningPotentialRoleBeta getRoleMiningPotentialRole(potentialRoleId)

Retrieves a specific potential role

This method returns a specific potential role.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **potentialRoleId** | **string**| A potential role id | [default to undefined]

### Return type

[**RoleMiningPotentialRoleBeta**](../Models/RoleMiningPotentialRoleBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

{
  "entitlementCount" : 25,
  "identityIds" : [ "07a0b4e2", "13b4e2a0" ],
  "density" : 75,
  "saved" : true,
  "roleId" : "07a0b4e2-7a76-44fa-bd0b-c64654b66519",
  "session" : {
    "pruneThreshold" : 5,
    "saved" : true,
    "scope" : {
      "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
      "attributeFilterCriteria" : {
        "displayName" : {
          "untranslated" : "Location: Miami"
        },
        "ariaLabel" : {
          "untranslated" : "Location: Miami"
        },
        "data" : {
          "displayName" : {
            "translateKey" : "IDN.IDENTITY_ATTRIBUTES.LOCATION"
          },
          "name" : "location",
          "operator" : "EQUALS",
          "values" : [ "Miami" ]
        }
      },
      "criteria" : "source.name:DataScienceDataset"
    },
    "name" : "Saved RM Session - 07/10",
    "minNumIdentitiesInPotentialRole" : 20,
    "id" : "9f36f5e5-1e81-4eca-b087-548959d91c71",
    "state" : "CREATED",
    "scopingMethod" : "MANUAL",
    "type" : "SPECIALIZED"
  },
  "provisionState" : "POTENTIAL",
  "description" : "Potential Role for Accounting dept",
  "identityCount" : 25,
  "freshness" : 75,
  "type" : "SPECIALIZED",
  "quality" : 100,
  "identityDistribution" : [ {
    "attributeName" : "department",
    "distribution" : [ {
      "attributeValue" : "NM Tier 3",
      "count" : 6
    } ]
  }, {
    "attributeName" : "department",
    "distribution" : [ {
      "attributeValue" : "NM Tier 3",
      "count" : 6
    } ]
  } ],
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "createdBy" : {
    "displayName" : "Ashley.Pierce",
    "id" : "2c918090761a5aac0176215c46a62d58"
  },
  "name" : "Saved Potential Role - 07/10",
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923",
  "excludedEntitlements" : [ "07a0b4e2", "13b4e2a0" ]
}


const potentialRoleId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // A potential role id (default to undefined)

try {
    const val = await iAIRoleMiningBetaApi.getRoleMiningPotentialRole(potentialRoleId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getRoleMiningPotentialRole(potentialRoleId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getRoleMiningSession

> RoleMiningSessionResponseBeta getRoleMiningSession(sessionId)

Get a role mining session

The method retrieves a role mining session.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id to be retrieved. | [default to undefined]

### Return type

[**RoleMiningSessionResponseBeta**](../Models/RoleMiningSessionResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

{
  "scope" : {
    "identityIds" : [ ],
    "criteria" : "source.name:DataScienceDataset"
  },
  "scopingMethod" : "AUTO_RM",
  "minNumIdentitiesInPotentialRole" : 20,
  "pruneThreshold" : 70,
  "prescribedPruneThreshold" : 83,
  "potentialRoleCount" : 8,
  "potentialRolesReadyCount" : 4,
  "status" : {
    "state" : "POTENTIAL_ROLES_PROCESSING"
  },
  "type" : "SPECIALIZED",
  "identityCount" : 0,
  "saved" : false,
  "id" : "602ba738-cf48-499b-a780-7b67b3fc1ecf",
  "createdDate" : "2021-09-08T16:11:05.348Z",
  "modifiedDate" : "2021-09-08T16:11:05.348Z"
}


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id to be retrieved. (default to undefined)

try {
    const val = await iAIRoleMiningBetaApi.getRoleMiningSession(sessionId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getRoleMiningSession(sessionId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getRoleMiningSessionStatus

> RoleMiningSessionStatusBeta getRoleMiningSessionStatus(sessionId)

Get role mining session status state

This method returns a role mining session status for a customer.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]

### Return type

[**RoleMiningSessionStatusBeta**](../Models/RoleMiningSessionStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

{
  "state" : "CREATED"
}


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)

try {
    const val = await iAIRoleMiningBetaApi.getRoleMiningSessionStatus(sessionId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getRoleMiningSessionStatus(sessionId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getRoleMiningSessions

> Array&lt;RoleMiningSessionResponseBeta&gt; getRoleMiningSessions(filters, sorters, offset, limit, count)

Retrieves all role mining sessions

Returns all role mining sessions that match the query parameters

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** | [optional] [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;RoleMiningSessionResponseBeta&gt;**](../Models/RoleMiningSessionResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

[ {
  "scope" : {
    "identityIds" : [ ],
    "criteria" : "source.name:DataScienceDataset"
  },
  "scopingMethod" : "AUTO_RM",
  "minNumIdentitiesInPotentialRole" : 20,
  "pruneThreshold" : 70,
  "prescribedPruneThreshold" : 83,
  "potentialRoleCount" : 8,
  "potentialRolesReadyCount" : 4,
  "status" : {
    "state" : "POTENTIAL_ROLES_PROCESSING"
  },
  "type" : "SPECIALIZED",
  "identityCount" : 0,
  "saved" : false,
  "id" : "602ba738-cf48-499b-a780-7b67b3fc1ecf",
  "createdDate" : "2021-09-08T16:11:05.348Z",
  "modifiedDate" : "2021-09-08T16:11:05.348Z"
}, {
  "scope" : {
    "identityIds" : [ ],
    "criteria" : "source.name:DataScienceDataset"
  },
  "scopingMethod" : "AUTO_RM",
  "minNumIdentitiesInPotentialRole" : 20,
  "pruneThreshold" : 70,
  "prescribedPruneThreshold" : 83,
  "potentialRoleCount" : 8,
  "potentialRolesReadyCount" : 4,
  "status" : {
    "state" : "POTENTIAL_ROLES_PROCESSING"
  },
  "type" : "SPECIALIZED",
  "identityCount" : 0,
  "saved" : false,
  "id" : "602ba738-cf48-499b-a780-7b67b3fc1ecf",
  "createdDate" : "2021-09-08T16:11:05.348Z",
  "modifiedDate" : "2021-09-08T16:11:05.348Z"
} ]


const filters : string = "saved eq "true" and name sw "RM Session""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional) (default to undefined)
const sorters : string = "createdBy,createdDate"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional) (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await iAIRoleMiningBetaApi.getRoleMiningSessions();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getRoleMiningSessions(filters, sorters, offset, limit, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSavedPotentialRoles

> Array&lt;RoleMiningSessionDraftRoleDtoBeta&gt; getSavedPotentialRoles(sorters, offset, limit, count)

Retrieves all saved potential roles

This method returns all saved potential roles (draft roles).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** | [optional] [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;RoleMiningSessionDraftRoleDtoBeta&gt;**](../Models/RoleMiningSessionDraftRoleDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

[ {
  "entitlementIds" : [ "2c91808a7624751a01762f19d665220d", "2c91808a7624751a01762f19d67c220e" ],
  "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "Saved RM Session - 07/10",
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "description" : "Person who develops software",
  "modified" : "2020-09-16T18:49:32.15Z",
  "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923",
  "excludedEntitlements" : [ "07a0b4e2", "13b4e2a0" ],
  "type" : "SPECIALIZED"
}, {
  "entitlementIds" : [ "2c91808a7624751a01762f19d665220d", "2c91808a7624751a01762f19d67c220e" ],
  "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "Saved RM Session - 07/10",
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "description" : "Person who develops software",
  "modified" : "2020-09-16T18:49:32.15Z",
  "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923",
  "excludedEntitlements" : [ "07a0b4e2", "13b4e2a0" ],
  "type" : "SPECIALIZED"
} ]


const sorters : string = "modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional) (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await iAIRoleMiningBetaApi.getSavedPotentialRoles();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.getSavedPotentialRoles(sorters, offset, limit, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchPotentialRole

> object patchPotentialRole(sessionId, potentialRoleId, patchPotentialRoleRequestInnerBeta)

Update a potential role in session

This method updates an existing potential role using the role mining session id and the potential role summary id.  The following fields can be modified:  * `description`  * `name`  * `saved`   >**NOTE: All other fields cannot be modified.** 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| The potential role summary id | [default to undefined]
 **patchPotentialRoleRequestInnerBeta** | [**Array&lt;PatchPotentialRoleRequestInnerBeta&gt;**](../Models/PatchPotentialRoleRequestInnerBeta.md)|  | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi, PatchPotentialRoleRequestInnerBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

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


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The potential role summary id (default to undefined)
const patchPotentialRoleRequestInnerBeta : Array<PatchPotentialRoleRequestInnerBeta> = [{op=remove, path=/description}, {op=replace, path=/description, value=Acct I - Potential Role}, {op=remove, path=/saved}, {op=replace, path=/saved, value=false}, {op=remove, path=/name}, {op=replace, path=/name, value=Potential Role Accounting}]; // 

try {
    const val = await iAIRoleMiningBetaApi.patchPotentialRole(sessionId, potentialRoleId, patchPotentialRoleRequestInnerBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.patchPotentialRole(sessionId, potentialRoleId, patchPotentialRoleRequestInnerBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchRoleMiningPotentialRole

> object patchRoleMiningPotentialRole(potentialRoleId, patchPotentialRoleRequestInnerBeta)

Update a potential role

This method updates an existing potential role.  The following fields can be modified:  * `description`  * `name`  * `saved`   >**NOTE: All other fields cannot be modified.** 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **potentialRoleId** | **string**| The potential role summary id | [default to undefined]
 **patchPotentialRoleRequestInnerBeta** | [**Array&lt;PatchPotentialRoleRequestInnerBeta&gt;**](../Models/PatchPotentialRoleRequestInnerBeta.md)|  | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi, PatchPotentialRoleRequestInnerBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

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


const potentialRoleId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The potential role summary id (default to undefined)
const patchPotentialRoleRequestInnerBeta : Array<PatchPotentialRoleRequestInnerBeta> = [{op=remove, path=/description}, {op=replace, path=/description, value=Acct I - Potential Role}, {op=remove, path=/saved}, {op=replace, path=/saved, value=false}, {op=remove, path=/name}, {op=replace, path=/name, value=Potential Role Accounting}]; // 

try {
    const val = await iAIRoleMiningBetaApi.patchRoleMiningPotentialRole(potentialRoleId, patchPotentialRoleRequestInnerBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.patchRoleMiningPotentialRole(potentialRoleId, patchPotentialRoleRequestInnerBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchRoleMiningSession

> object patchRoleMiningSession(sessionId, jsonPatchOperationBeta)

Patch a role mining session

The  method updates an existing role mining session using PATCH. Supports op in {\"replace\"} and changes to pruneThreshold and/or minNumIdentitiesInPotentialRole. The potential roles in this role mining session is then re-calculated.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id to be patched | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session. | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

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


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id to be patched (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/pruneThreshold, value=83}, {op=replace, path=/minNumIdentitiesInPotentialRole, value=10}, {op=replace, path=/saved, value=false}, {op=replace, path=/name, value=RM Session - 07/10/22}, {op=add, path=/name, value=RM Session - 07/10/22}]; // Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.

try {
    const val = await iAIRoleMiningBetaApi.patchRoleMiningSession(sessionId, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.patchRoleMiningSession(sessionId, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateEntitlementsPotentialRole

> RoleMiningPotentialRoleBeta updateEntitlementsPotentialRole(sessionId, potentialRoleId, roleMiningPotentialRoleEditEntitlementsBeta)

Edit entitlements for a potential role to exclude some entitlements

This endpoint adds or removes entitlements from an exclusion list for a potential role.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| The role mining session id | [default to undefined]
 **potentialRoleId** | **string**| A potential role id in a role mining session | [default to undefined]
 **roleMiningPotentialRoleEditEntitlementsBeta** | [**RoleMiningPotentialRoleEditEntitlementsBeta**](../Models/RoleMiningPotentialRoleEditEntitlementsBeta.md)| Role mining session parameters | 

### Return type

[**RoleMiningPotentialRoleBeta**](../Models/RoleMiningPotentialRoleBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIRoleMiningBetaApi, RoleMiningPotentialRoleEditEntitlementsBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIRoleMiningBetaApi = new IAIRoleMiningBetaApi(apiConfig);

{
  "entitlementCount" : 25,
  "identityIds" : [ "07a0b4e2", "13b4e2a0" ],
  "density" : 75,
  "saved" : true,
  "roleId" : "07a0b4e2-7a76-44fa-bd0b-c64654b66519",
  "session" : {
    "pruneThreshold" : 5,
    "saved" : true,
    "scope" : {
      "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
      "attributeFilterCriteria" : {
        "displayName" : {
          "untranslated" : "Location: Miami"
        },
        "ariaLabel" : {
          "untranslated" : "Location: Miami"
        },
        "data" : {
          "displayName" : {
            "translateKey" : "IDN.IDENTITY_ATTRIBUTES.LOCATION"
          },
          "name" : "location",
          "operator" : "EQUALS",
          "values" : [ "Miami" ]
        }
      },
      "criteria" : "source.name:DataScienceDataset"
    },
    "name" : "Saved RM Session - 07/10",
    "minNumIdentitiesInPotentialRole" : 20,
    "id" : "9f36f5e5-1e81-4eca-b087-548959d91c71",
    "state" : "CREATED",
    "scopingMethod" : "MANUAL",
    "type" : "SPECIALIZED"
  },
  "provisionState" : "POTENTIAL",
  "description" : "Potential Role for Accounting dept",
  "identityCount" : 25,
  "freshness" : 75,
  "type" : "SPECIALIZED",
  "quality" : 100,
  "identityDistribution" : [ {
    "attributeName" : "department",
    "distribution" : [ {
      "attributeValue" : "NM Tier 3",
      "count" : 6
    } ]
  }, {
    "attributeName" : "department",
    "distribution" : [ {
      "attributeValue" : "NM Tier 3",
      "count" : 6
    } ]
  } ],
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "createdBy" : {
    "displayName" : "Ashley.Pierce",
    "id" : "2c918090761a5aac0176215c46a62d58"
  },
  "name" : "Saved Potential Role - 07/10",
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "id" : "e0cc5d7d-bf7f-4f81-b2af-8885b09d9923",
  "excludedEntitlements" : [ "07a0b4e2", "13b4e2a0" ]
}


const sessionId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // The role mining session id (default to undefined)
const potentialRoleId : string = "8c190e67-87aa-4ed9-a90b-d9d5344523fb"; // A potential role id in a role mining session (default to undefined)
const roleMiningPotentialRoleEditEntitlementsBeta : RoleMiningPotentialRoleEditEntitlementsBeta = 

try {
    const val = await iAIRoleMiningBetaApi.updateEntitlementsPotentialRole(sessionId, potentialRoleId, roleMiningPotentialRoleEditEntitlementsBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIRoleMiningBetaApi.updateEntitlementsPotentialRole(sessionId, potentialRoleId, roleMiningPotentialRoleEditEntitlementsBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

