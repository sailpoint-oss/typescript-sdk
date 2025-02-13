---
title: GovernanceGroupsBetaApi
pagination_label: GovernanceGroupsBetaApi
sidebar_label: GovernanceGroupsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'GovernanceGroupsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'GovernanceGroupsBetaApi']
---

# GovernanceGroupsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkgroup**](GovernanceGroupsBetaApi.md#createWorkgroup) | **POST** /workgroups | Create a new Governance Group.
[**deleteWorkgroup**](GovernanceGroupsBetaApi.md#deleteWorkgroup) | **DELETE** /workgroups/{id} | Delete a Governance Group
[**deleteWorkgroupMembers**](GovernanceGroupsBetaApi.md#deleteWorkgroupMembers) | **POST** /workgroups/{workgroupId}/members/bulk-delete | Remove members from Governance Group
[**deleteWorkgroupsInBulk**](GovernanceGroupsBetaApi.md#deleteWorkgroupsInBulk) | **POST** /workgroups/bulk-delete | Delete Governance Group(s)
[**getWorkgroup**](GovernanceGroupsBetaApi.md#getWorkgroup) | **GET** /workgroups/{id} | Get Governance Group by Id
[**listConnections**](GovernanceGroupsBetaApi.md#listConnections) | **GET** /workgroups/{workgroupId}/connections | List connections for Governance Group
[**listWorkgroupMembers**](GovernanceGroupsBetaApi.md#listWorkgroupMembers) | **GET** /workgroups/{workgroupId}/members | List Governance Group Members
[**listWorkgroups**](GovernanceGroupsBetaApi.md#listWorkgroups) | **GET** /workgroups | List Governance Groups
[**patchWorkgroup**](GovernanceGroupsBetaApi.md#patchWorkgroup) | **PATCH** /workgroups/{id} | Patch a Governance Group
[**updateWorkgroupMembers**](GovernanceGroupsBetaApi.md#updateWorkgroupMembers) | **POST** /workgroups/{workgroupId}/members/bulk-add | Add members to Governance Group



## createWorkgroup

> WorkgroupDtoBeta createWorkgroup(workgroupDtoBeta)

Create a new Governance Group.

This API creates a new Governance Group.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workgroupDtoBeta** | [**WorkgroupDtoBeta**](../Models/WorkgroupDtoBeta.md)|  | 

### Return type

[**WorkgroupDtoBeta**](../Models/WorkgroupDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, GovernanceGroupsBetaApi, WorkgroupDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const governanceGroupsBetaApi = new GovernanceGroupsBetaApi(apiConfig);

{
  "owner" : {
    "emailAddress" : "support@sailpoint.com",
    "displayName" : "Support",
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "connectionCount" : 1641498673000,
  "created" : "2022-01-06T19:51:13Z",
  "memberCount" : 1641498673000,
  "name" : "DB Access Governance Group",
  "description" : "Description of the Governance Group",
  "modified" : "2022-01-06T19:51:13Z",
  "id" : "2c91808568c529c60168cca6f90c1313"
}


const workgroupDtoBeta : WorkgroupDtoBeta = 

try {
    const val = await governanceGroupsBetaApi.createWorkgroup(workgroupDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await governanceGroupsBetaApi.createWorkgroup(workgroupDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteWorkgroup

> deleteWorkgroup(id)

Delete a Governance Group

This API deletes a Governance Group by its ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Governance Group | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, GovernanceGroupsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const governanceGroupsBetaApi = new GovernanceGroupsBetaApi(apiConfig);

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


const id : string = "2c9180837ca6693d017ca8d097500149"; // ID of the Governance Group (default to undefined)

try {
    const val = await governanceGroupsBetaApi.deleteWorkgroup(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await governanceGroupsBetaApi.deleteWorkgroup(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteWorkgroupMembers

> Array&lt;WorkgroupMemberDeleteItemBeta&gt; deleteWorkgroupMembers(workgroupId, bulkWorkgroupMembersRequestInnerBeta)

Remove members from Governance Group

This API removes one or more  members from a Governance Group.  A token with API, ORG_ADMIN authority is required to call this API.  >  **Following field of Identity is an optional field in the request.**  >  **name**

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workgroupId** | **string**| ID of the Governance Group. | [default to undefined]
 **bulkWorkgroupMembersRequestInnerBeta** | [**Array&lt;BulkWorkgroupMembersRequestInnerBeta&gt;**](../Models/BulkWorkgroupMembersRequestInnerBeta.md)| List of identities to be removed from  a Governance Group members list. | 

### Return type

[**Array&lt;WorkgroupMemberDeleteItemBeta&gt;**](../Models/WorkgroupMemberDeleteItemBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, GovernanceGroupsBetaApi, BulkWorkgroupMembersRequestInnerBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const governanceGroupsBetaApi = new GovernanceGroupsBetaApi(apiConfig);

[ {
  "id" : "464ae7bf791e49fdb74606a2e4a89635",
  "status" : 204,
  "description" : "Identity deleted from Governance Group members list."
} ]


const workgroupId : string = "2c91808a7813090a017814121919ecca"; // ID of the Governance Group. (default to undefined)
const bulkWorkgroupMembersRequestInnerBeta : Array<BulkWorkgroupMembersRequestInnerBeta> = ; // List of identities to be removed from  a Governance Group members list.

try {
    const val = await governanceGroupsBetaApi.deleteWorkgroupMembers(workgroupId, bulkWorkgroupMembersRequestInnerBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await governanceGroupsBetaApi.deleteWorkgroupMembers(workgroupId, bulkWorkgroupMembersRequestInnerBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteWorkgroupsInBulk

> Array&lt;WorkgroupDeleteItemBeta&gt; deleteWorkgroupsInBulk(workgroupBulkDeleteRequestBeta)

Delete Governance Group(s)

 This API initiates a bulk deletion of one or more Governance Groups.  >  If any of the indicated Governance Groups have one or more connections associated with it,then those Governance Groups will be added in  **inUse** list of the response. Governance Group(s) marked as **inUse** can not be deleted.  >  If any of the indicated Governance Groups is not does not exists in Organization,then those Governance Groups will be added in **notFound** list of the response. Governance Groups marked as **notFound** will not be deleted.  >  If any of the indicated Governance Groups does not have any connections associated with it,then those Governance Groups will be added in **deleted** list of the response. A Governance Group marked as **deleted** will be deleted from current Organization.  >  If the request contains any **inUse** or **notFound** Governance Group IDs then it skips only these Governance Groups for deletion and deletes the rest of Governance Groups which have no connections associated with it.   >  **This API has limit number of Governance Groups can be deleted at one time. If the request contains more then 100 Governance Groups IDs to be deleted then the API will throw an exception.**

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workgroupBulkDeleteRequestBeta** | [**WorkgroupBulkDeleteRequestBeta**](../Models/WorkgroupBulkDeleteRequestBeta.md)|  | 

### Return type

[**Array&lt;WorkgroupDeleteItemBeta&gt;**](../Models/WorkgroupDeleteItemBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, GovernanceGroupsBetaApi, WorkgroupBulkDeleteRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const governanceGroupsBetaApi = new GovernanceGroupsBetaApi(apiConfig);

[ {
  "id" : "464ae7bf791e49fdb74606a2e4a89635",
  "status" : 204,
  "description" : "Governance Group deleted successfully."
} ]


const workgroupBulkDeleteRequestBeta : WorkgroupBulkDeleteRequestBeta = 

try {
    const val = await governanceGroupsBetaApi.deleteWorkgroupsInBulk(workgroupBulkDeleteRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await governanceGroupsBetaApi.deleteWorkgroupsInBulk(workgroupBulkDeleteRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getWorkgroup

> WorkgroupDtoBeta getWorkgroup(id)

Get Governance Group by Id

This API returns a Governance Groups by its ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Governance Group | [default to undefined]

### Return type

[**WorkgroupDtoBeta**](../Models/WorkgroupDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, GovernanceGroupsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const governanceGroupsBetaApi = new GovernanceGroupsBetaApi(apiConfig);

{
  "owner" : {
    "emailAddress" : "support@sailpoint.com",
    "displayName" : "Support",
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "connectionCount" : 1641498673000,
  "created" : "2022-01-06T19:51:13Z",
  "memberCount" : 1641498673000,
  "name" : "DB Access Governance Group",
  "description" : "Description of the Governance Group",
  "modified" : "2022-01-06T19:51:13Z",
  "id" : "2c91808568c529c60168cca6f90c1313"
}


const id : string = "2c9180837ca6693d017ca8d097500149"; // ID of the Governance Group (default to undefined)

try {
    const val = await governanceGroupsBetaApi.getWorkgroup(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await governanceGroupsBetaApi.getWorkgroup(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listConnections

> Array&lt;WorkgroupConnectionDtoBeta&gt; listConnections(workgroupId, offset, limit, count, sorters)

List connections for Governance Group

This API returns list of connections associated with a Governance Group.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workgroupId** | **string**| ID of the Governance Group. | [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;WorkgroupConnectionDtoBeta&gt;**](../Models/WorkgroupConnectionDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, GovernanceGroupsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const governanceGroupsBetaApi = new GovernanceGroupsBetaApi(apiConfig);

[ {
  "connectionType" : "AccessRequestReviewer",
  "object" : {
    "name" : "Employee-database-read-write",
    "description" : "Collection of entitlements to read/write the employee database.",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "ACCESS_PROFILE"
  }
}, {
  "connectionType" : "AccessRequestReviewer",
  "object" : {
    "name" : "Employee-database-read-write",
    "description" : "Collection of entitlements to read/write the employee database.",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "ACCESS_PROFILE"
  }
} ]


const workgroupId : string = "2c91808a7813090a017814121919ecca"; // ID of the Governance Group. (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 50; // Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const sorters : string = "name,-modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) (default to undefined)

try {
    const val = await governanceGroupsBetaApi.listConnections(workgroupId);
    
    // Below is a request that includes all optional parameters      
    // const val = await governanceGroupsBetaApi.listConnections(workgroupId, offset, limit, count, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listWorkgroupMembers

> Array&lt;ListWorkgroupMembers200ResponseInnerBeta&gt; listWorkgroupMembers(workgroupId, offset, limit, count, sorters)

List Governance Group Members

This API returns list of members associated with a Governance Group.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workgroupId** | **string**| ID of the Governance Group. | [default to undefined]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;ListWorkgroupMembers200ResponseInnerBeta&gt;**](../Models/ListWorkgroupMembers200ResponseInnerBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, GovernanceGroupsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const governanceGroupsBetaApi = new GovernanceGroupsBetaApi(apiConfig);

[ {
  "name" : "Michael Michaels",
  "id" : "2c7180a46faadee4016fb4e018c20642",
  "type" : "IDENTITY",
  "email" : "michael.michaels@sailpoint.com"
}, {
  "name" : "Michael Michaels",
  "id" : "2c7180a46faadee4016fb4e018c20642",
  "type" : "IDENTITY",
  "email" : "michael.michaels@sailpoint.com"
} ]


const workgroupId : string = "2c91808a7813090a017814121919ecca"; // ID of the Governance Group. (default to undefined)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 50; // Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const sorters : string = "name,-modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) (default to undefined)

try {
    const val = await governanceGroupsBetaApi.listWorkgroupMembers(workgroupId);
    
    // Below is a request that includes all optional parameters      
    // const val = await governanceGroupsBetaApi.listWorkgroupMembers(workgroupId, offset, limit, count, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listWorkgroups

> Array&lt;WorkgroupDtoBeta&gt; listWorkgroups(offset, limit, count, filters, sorters)

List Governance Groups

This API returns list of Governance Groups

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** | [optional] [default to undefined]

### Return type

[**Array&lt;WorkgroupDtoBeta&gt;**](../Models/WorkgroupDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, GovernanceGroupsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const governanceGroupsBetaApi = new GovernanceGroupsBetaApi(apiConfig);

[ {
  "owner" : {
    "emailAddress" : "support@sailpoint.com",
    "displayName" : "Support",
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "connectionCount" : 1641498673000,
  "created" : "2022-01-06T19:51:13Z",
  "memberCount" : 1641498673000,
  "name" : "DB Access Governance Group",
  "description" : "Description of the Governance Group",
  "modified" : "2022-01-06T19:51:13Z",
  "id" : "2c91808568c529c60168cca6f90c1313"
}, {
  "owner" : {
    "emailAddress" : "support@sailpoint.com",
    "displayName" : "Support",
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "connectionCount" : 1641498673000,
  "created" : "2022-01-06T19:51:13Z",
  "memberCount" : 1641498673000,
  "name" : "DB Access Governance Group",
  "description" : "Description of the Governance Group",
  "modified" : "2022-01-06T19:51:13Z",
  "id" : "2c91808568c529c60168cca6f90c1313"
} ]


const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 50; // Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "name sw "Test""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* (optional) (default to undefined)
const sorters : string = "name,-modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** (optional) (default to undefined)

try {
    const val = await governanceGroupsBetaApi.listWorkgroups();
    
    // Below is a request that includes all optional parameters      
    // const val = await governanceGroupsBetaApi.listWorkgroups(offset, limit, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchWorkgroup

> WorkgroupDtoBeta patchWorkgroup(id, jsonPatchOperationBeta)

Patch a Governance Group

This API updates an existing governance group by ID.  The following fields and objects are patchable:   * name   * description   * owner  A token with API or ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Governance Group | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | [optional] 

### Return type

[**WorkgroupDtoBeta**](../Models/WorkgroupDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, GovernanceGroupsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const governanceGroupsBetaApi = new GovernanceGroupsBetaApi(apiConfig);

{
  "owner" : {
    "emailAddress" : "support@sailpoint.com",
    "displayName" : "Support",
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "connectionCount" : 1641498673000,
  "created" : "2022-01-06T19:51:13Z",
  "memberCount" : 1641498673000,
  "name" : "DB Access Governance Group",
  "description" : "Description of the Governance Group",
  "modified" : "2022-01-06T19:51:13Z",
  "id" : "2c91808568c529c60168cca6f90c1313"
}


const id : string = "2c9180837ca6693d017ca8d097500149"; // ID of the Governance Group (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/description, value=Governance Group new description.}]; //  (optional)

try {
    const val = await governanceGroupsBetaApi.patchWorkgroup(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await governanceGroupsBetaApi.patchWorkgroup(id, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateWorkgroupMembers

> Array&lt;WorkgroupMemberAddItemBeta&gt; updateWorkgroupMembers(workgroupId, bulkWorkgroupMembersRequestInnerBeta)

Add members to Governance Group

This API adds one or more members to a Governance Group.  A token with API, ORG_ADMIN authority is required to call this API.  >  **Following field of Identity is an optional field in the request.**  >  **name**

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workgroupId** | **string**| ID of the Governance Group. | [default to undefined]
 **bulkWorkgroupMembersRequestInnerBeta** | [**Array&lt;BulkWorkgroupMembersRequestInnerBeta&gt;**](../Models/BulkWorkgroupMembersRequestInnerBeta.md)| List of identities to be added to a Governance Group members list. | 

### Return type

[**Array&lt;WorkgroupMemberAddItemBeta&gt;**](../Models/WorkgroupMemberAddItemBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, GovernanceGroupsBetaApi, BulkWorkgroupMembersRequestInnerBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const governanceGroupsBetaApi = new GovernanceGroupsBetaApi(apiConfig);

[ {
  "id" : "464ae7bf791e49fdb74606a2e4a89635",
  "status" : 201,
  "description" : "Identity added to Governance Group members list."
} ]


const workgroupId : string = "2c91808a7813090a017814121919ecca"; // ID of the Governance Group. (default to undefined)
const bulkWorkgroupMembersRequestInnerBeta : Array<BulkWorkgroupMembersRequestInnerBeta> = ; // List of identities to be added to a Governance Group members list.

try {
    const val = await governanceGroupsBetaApi.updateWorkgroupMembers(workgroupId, bulkWorkgroupMembersRequestInnerBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await governanceGroupsBetaApi.updateWorkgroupMembers(workgroupId, bulkWorkgroupMembersRequestInnerBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

