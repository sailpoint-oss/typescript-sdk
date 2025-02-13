---
title: RolesBetaApi
pagination_label: RolesBetaApi
sidebar_label: RolesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'RolesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'RolesBetaApi']
---

# RolesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRole**](RolesBetaApi.md#createRole) | **POST** /roles | Create a Role
[**deleteBulkRoles**](RolesBetaApi.md#deleteBulkRoles) | **POST** /roles/bulk-delete | Delete Role(s)
[**deleteRole**](RolesBetaApi.md#deleteRole) | **DELETE** /roles/{id} | Delete a Role
[**getRole**](RolesBetaApi.md#getRole) | **GET** /roles/{id} | Get a Role
[**getRoleAssignedIdentities**](RolesBetaApi.md#getRoleAssignedIdentities) | **GET** /roles/{id}/assigned-identities | Identities assigned a Role
[**getRoleEntitlements**](RolesBetaApi.md#getRoleEntitlements) | **GET** /roles/{id}/entitlements | List role\&#39;s Entitlements
[**listRoles**](RolesBetaApi.md#listRoles) | **GET** /roles | List Roles
[**patchRole**](RolesBetaApi.md#patchRole) | **PATCH** /roles/{id} | Patch a specified Role



## createRole

> RoleBeta createRole(roleBeta)

Create a Role

This API creates a role.  You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API.   In addition, a ROLE_SUBADMIN may not create a role including an access profile if that access profile is associated with a source the ROLE_SUBADMIN is not associated with themselves.   The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles. However, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleBeta** | [**RoleBeta**](../Models/RoleBeta.md)|  | 

### Return type

[**RoleBeta**](../Models/RoleBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RolesBetaApi, RoleBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const rolesBetaApi = new RolesBetaApi(apiConfig);
const roleBeta : RoleBeta = ; // 
const val = await rolesBetaApi.createRole(roleBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteBulkRoles

> TaskResultDtoBeta deleteBulkRoles(roleBulkDeleteRequestBeta)

Delete Role(s)

This endpoint initiates a bulk deletion of one or more roles. When the request is successful, the endpoint returns the bulk delete\'s task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result\'s status and information.  This endpoint can only bulk delete up to a limit of 50 roles per request.  A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this endpoint. In addition, a token with ROLE_SUBADMIN authority can only call this endpoint if all roles included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleBulkDeleteRequestBeta** | [**RoleBulkDeleteRequestBeta**](../Models/RoleBulkDeleteRequestBeta.md)|  | 

### Return type

[**TaskResultDtoBeta**](../Models/TaskResultDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RolesBetaApi, RoleBulkDeleteRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const rolesBetaApi = new RolesBetaApi(apiConfig);
const roleBulkDeleteRequestBeta : RoleBulkDeleteRequestBeta = {roleIds=[2c91808876438bb2017668b91919ecca, 2c91808876438ba801766e129f151816]}; // 
const val = await rolesBetaApi.deleteBulkRoles(roleBulkDeleteRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteRole

> deleteRole(id)

Delete a Role

This API deletes a Role by its ID.  A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Role | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RolesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const rolesBetaApi = new RolesBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121e121518"; // ID of the Role
const val = await rolesBetaApi.deleteRole(id);
console.log('API called successfully.');
```
</details>


## getRole

> RoleBeta getRole(id)

Get a Role

This API returns a Role by its ID. A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Role | [default to undefined]

### Return type

[**RoleBeta**](../Models/RoleBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RolesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const rolesBetaApi = new RolesBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121e121518"; // ID of the Role
const val = await rolesBetaApi.getRole(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getRoleAssignedIdentities

> Array&lt;RoleIdentityBeta&gt; getRoleAssignedIdentities(id, limit, offset, count, filters, sorters)

Identities assigned a Role

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Role for which the assigned Identities are to be listed | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email** | [optional] [default to undefined]

### Return type

[**Array&lt;RoleIdentityBeta&gt;**](../Models/RoleIdentityBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RolesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const rolesBetaApi = new RolesBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121e121518"; // ID of the Role for which the assigned Identities are to be listed
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "name sw Joe", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co*
  sorters = "aliasName,name"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email**
const val = await rolesBetaApi.getRoleAssignedIdentities(id, limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getRoleEntitlements

> Array&lt;EntitlementBeta&gt; getRoleEntitlements(id, limit, offset, count, filters, sorters)

List role\'s Entitlements

This API lists the Entitlements associated with a given role.  A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the containing role | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;EntitlementBeta&gt;**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RolesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const rolesBetaApi = new RolesBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121919ecca"; // ID of the containing role
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "attribute eq "memberOf"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*
  sorters = "name,-modified"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified**
const val = await rolesBetaApi.getRoleEntitlements(id, limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listRoles

> Array&lt;RoleBeta&gt; listRoles(forSubadmin, limit, offset, count, filters, sorters, forSegmentIds, includeUnsegmented)

List Roles

This API returns a list of Roles.  A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forSubadmin** | **string**| If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\&#39;s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | [optional] [default to undefined]
 **limit** | **number**| Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]
 **forSegmentIds** | **string**| If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. | [optional] [default to undefined]
 **includeUnsegmented** | **boolean**| Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. | [optional] [default to true]

### Return type

[**Array&lt;RoleBeta&gt;**](../Models/RoleBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RolesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const rolesBetaApi = new RolesBetaApi(apiConfig);
const forSubadmin = "5168015d32f890ca15812c9180835d2e", // string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\'s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin.
  limit = 50, // number | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "requestable eq false", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*
  sorters = "name,-modified", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  forSegmentIds = "0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d", // string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error.
  includeUnsegmented = false; // boolean | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error.
const val = await rolesBetaApi.listRoles(forSubadmin, limit, offset, count, filters, sorters, forSegmentIds, includeUnsegmented);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchRole

> RoleBeta patchRole(id, jsonPatchOperationBeta)

Patch a specified Role

This API updates an existing role using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.  The following fields are patchable:  * name * description * enabled * owner * accessProfiles * entitlements * membership * requestable * accessRequestConfig * revokeRequestConfig * segments * accessModelMetadata    A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all access profiles included in the role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles, however, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.  When you use this API to modify a role\'s membership identities, you can only modify up to a limit of 500 membership identities at a time. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Role to patch | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | 

### Return type

[**RoleBeta**](../Models/RoleBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RolesBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const rolesBetaApi = new RolesBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121e121518"; // ID of the Role to patch
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/requestable, value=true}, {op=replace, path=/enabled, value=true}]; // 
const val = await rolesBetaApi.patchRole(id, jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

