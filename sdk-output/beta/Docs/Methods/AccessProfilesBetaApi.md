---
title: AccessProfilesBetaApi
pagination_label: AccessProfilesBetaApi
sidebar_label: AccessProfilesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccessProfilesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccessProfilesBetaApi']
---

# AccessProfilesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccessProfile**](AccessProfilesBetaApi.md#createAccessProfile) | **POST** /access-profiles | Create Access Profile
[**deleteAccessProfile**](AccessProfilesBetaApi.md#deleteAccessProfile) | **DELETE** /access-profiles/{id} | Delete the specified Access Profile
[**deleteAccessProfilesInBulk**](AccessProfilesBetaApi.md#deleteAccessProfilesInBulk) | **POST** /access-profiles/bulk-delete | Delete Access Profile(s)
[**getAccessProfile**](AccessProfilesBetaApi.md#getAccessProfile) | **GET** /access-profiles/{id} | Get an Access Profile
[**getAccessProfileEntitlements**](AccessProfilesBetaApi.md#getAccessProfileEntitlements) | **GET** /access-profiles/{id}/entitlements | List Access Profile\&#39;s Entitlements
[**listAccessProfiles**](AccessProfilesBetaApi.md#listAccessProfiles) | **GET** /access-profiles | List Access Profiles
[**patchAccessProfile**](AccessProfilesBetaApi.md#patchAccessProfile) | **PATCH** /access-profiles/{id} | Patch a specified Access Profile
[**updateAccessProfilesInBulk**](AccessProfilesBetaApi.md#updateAccessProfilesInBulk) | **POST** /access-profiles/bulk-update-requestable | Update Access Profile(s) requestable field.



## createAccessProfile

> AccessProfileBeta createAccessProfile(accessProfileBeta)

Create Access Profile

Use this API to create an access profile. A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API. In addition, a token with only ROLE_SUBADMIN or SOURCE_SUBADMIN authority must be associated with the access profile\'s Source. The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfileBeta** | [**AccessProfileBeta**](../Models/AccessProfileBeta.md)|  | 

### Return type

[**AccessProfileBeta**](../Models/AccessProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi, AccessProfileBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);
const accessProfileBeta : AccessProfileBeta = ; // 
const val = await accessProfilesBetaApi.createAccessProfile(accessProfileBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteAccessProfile

> deleteAccessProfile(id)

Delete the specified Access Profile

This API deletes an existing Access Profile.  The Access Profile must not be in use, for example, Access Profile can not be deleted if they belong to an Application, Life Cycle State or a Role. If it is, a 400 error is returned.  A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to invoke this API. In addition, a SOURCE_SUBADMIN token must be able to administer the Source associated with the Access Profile.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Access Profile to delete | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121919ecca"; // ID of the Access Profile to delete
const val = await accessProfilesBetaApi.deleteAccessProfile(id);
console.log('API called successfully.');
```
</details>


## deleteAccessProfilesInBulk

> AccessProfileBulkDeleteResponseBeta deleteAccessProfilesInBulk(accessProfileBulkDeleteRequestBeta)

Delete Access Profile(s)

This endpoint initiates a bulk deletion of one or more access profiles. When the request is successful, the endpoint returns the bulk delete\'s task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result\'s status and information.  This endpoint can only bulk delete up to a limit of 50 access profiles per request.  By default, if any of the indicated access profiles are in use, no deletions will be performed and the **inUse** field of the response indicates the usages that must be removed first. If the request field **bestEffortOnly** is **true**, however, usages are reported in the **inUse** response field but all other indicated access profiles will be deleted.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfileBulkDeleteRequestBeta** | [**AccessProfileBulkDeleteRequestBeta**](../Models/AccessProfileBulkDeleteRequestBeta.md)|  | 

### Return type

[**AccessProfileBulkDeleteResponseBeta**](../Models/AccessProfileBulkDeleteResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi, AccessProfileBulkDeleteRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);
const accessProfileBulkDeleteRequestBeta : AccessProfileBulkDeleteRequestBeta = {bestEffortOnly=true, accessProfileIds=[2c91808876438bb2017668b91919ecca, 2c91808876438ba801766e129f151816]}; // 
const val = await accessProfilesBetaApi.deleteAccessProfilesInBulk(accessProfileBulkDeleteRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getAccessProfile

> AccessProfileBeta getAccessProfile(id)

Get an Access Profile

This API returns an Access Profile by its ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Access Profile | [default to undefined]

### Return type

[**AccessProfileBeta**](../Models/AccessProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);
const id : string = "2c9180837ca6693d017ca8d097500149"; // ID of the Access Profile
const val = await accessProfilesBetaApi.getAccessProfile(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getAccessProfileEntitlements

> Array&lt;EntitlementBeta&gt; getAccessProfileEntitlements(id, limit, offset, count, filters, sorters)

List Access Profile\'s Entitlements

Use this API to get a list of an access profile\'s entitlements.  A user with SOURCE_SUBADMIN authority must have access to the source associated with the specified access profile.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the access profile containing the entitlements. | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the \&#39;+\&#39; symbol in their names.   | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;EntitlementBeta&gt;**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121919ecca"; // ID of the access profile containing the entitlements.
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "attribute eq "memberOf"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the \'+\' symbol in their names.  
  sorters = "name,-modified"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified**
const val = await accessProfilesBetaApi.getAccessProfileEntitlements(id, limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listAccessProfiles

> Array&lt;AccessProfileBeta&gt; listAccessProfiles(forSubadmin, limit, offset, count, filters, sorters, forSegmentIds, includeUnsegmented)

List Access Profiles

Use this API to get a list of access profiles. A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forSubadmin** | **string**| If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID, or the special value **me**, which is shorthand for the calling identity\&#39;s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an identity that is not a subadmin. | [optional] [default to undefined]
 **limit** | **number**| Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the \&#39;+\&#39; symbol in their names.  | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]
 **forSegmentIds** | **string**| If present and not empty, additionally filters access profiles to those which are assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. | [optional] [default to undefined]
 **includeUnsegmented** | **boolean**| Indicates whether the response list should contain unsegmented access profiles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. | [optional] [default to true]

### Return type

[**Array&lt;AccessProfileBeta&gt;**](../Models/AccessProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);
const forSubadmin = "8c190e6787aa4ed9a90bd9d5344523fb", // string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID, or the special value **me**, which is shorthand for the calling identity\'s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an identity that is not a subadmin.
  limit = 50, // number | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "name eq "SailPoint Support"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the \'+\' symbol in their names. 
  sorters = "name,-modified", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  forSegmentIds = "0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d", // string | If present and not empty, additionally filters access profiles to those which are assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error.
  includeUnsegmented = false; // boolean | Indicates whether the response list should contain unsegmented access profiles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error.
const val = await accessProfilesBetaApi.listAccessProfiles(forSubadmin, limit, offset, count, filters, sorters, forSegmentIds, includeUnsegmented);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchAccessProfile

> AccessProfileBeta patchAccessProfile(id, jsonPatchOperationBeta)

Patch a specified Access Profile

This API updates an existing Access Profile. The following fields are patchable: **name**, **description**, **enabled**, **owner**, **requestable**, **accessRequestConfig**, **revokeRequestConfig**, **segments**, **entitlements**, **provisioningCriteria** A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API. In addition, a SOURCE_SUBADMIN may only use this API to patch Access Profiles which are associated with Sources they are able to administer. >  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.  > You can only add or replace **entitlements** that exist on the source that the access profile is attached to. You can use the **list entitlements** endpoint with the **filters** query parameter to get a list of available entitlements on the access profile\'s source.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Access Profile to patch | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | 

### Return type

[**AccessProfileBeta**](../Models/AccessProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);
const id : string = "2c91808a7813090a017814121919ecca"; // ID of the Access Profile to patch
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=add, path=/entitlements, value=[{id=2c9180857725c14301772a93bb77242d, type=ENTITLEMENT, name=AD User Group}]}]; // 
const val = await accessProfilesBetaApi.patchAccessProfile(id, jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updateAccessProfilesInBulk

> Array&lt;AccessProfileUpdateItemBeta&gt; updateAccessProfilesInBulk(accessProfileBulkUpdateRequestInnerBeta)

Update Access Profile(s) requestable field.

This API initiates a bulk update of field requestable for one or more Access Profiles.  >  If any of the indicated Access Profiles is exists in Organization,then those Access Profiles will be added in **updated**     list of the response.Requestable field of these Access Profiles marked as **true** or **false**.  >  If any of the indicated Access Profiles is not does not exists in Organization,then those Access Profiles will be added in **notFound** list of the response. Access Profiles marked as **notFound** will not be updated. A SOURCE_SUBADMIN user may only use this API to update Access Profiles which are associated with Sources they are able to administer.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfileBulkUpdateRequestInnerBeta** | [**Array&lt;AccessProfileBulkUpdateRequestInnerBeta&gt;**](../Models/AccessProfileBulkUpdateRequestInnerBeta.md)|  | 

### Return type

[**Array&lt;AccessProfileUpdateItemBeta&gt;**](../Models/AccessProfileUpdateItemBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi, AccessProfileBulkUpdateRequestInnerBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);
const accessProfileBulkUpdateRequestInnerBeta : Array<AccessProfileBulkUpdateRequestInnerBeta> = [{id=464ae7bf-791e-49fd-b746-06a2e4a89635, requestable=false}]; // 
const val = await accessProfilesBetaApi.updateAccessProfilesInBulk(accessProfileBulkUpdateRequestInnerBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

