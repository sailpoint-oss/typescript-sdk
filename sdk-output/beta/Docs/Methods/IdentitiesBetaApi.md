---
title: IdentitiesBetaApi
pagination_label: IdentitiesBetaApi
sidebar_label: IdentitiesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'IdentitiesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'IdentitiesBetaApi']
---

# IdentitiesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteIdentity**](IdentitiesBetaApi.md#deleteIdentity) | **DELETE** /identities/{id} | Delete identity
[**getIdentity**](IdentitiesBetaApi.md#getIdentity) | **GET** /identities/{id} | Identity Details
[**getIdentityOwnershipDetails**](IdentitiesBetaApi.md#getIdentityOwnershipDetails) | **GET** /identities/{identityId}/ownership | Get ownership details
[**getRoleAssignment**](IdentitiesBetaApi.md#getRoleAssignment) | **GET** /identities/{identityId}/role-assignments/{assignmentId} | Role assignment details
[**getRoleAssignments**](IdentitiesBetaApi.md#getRoleAssignments) | **GET** /identities/{identityId}/role-assignments | List role assignments
[**listIdentities**](IdentitiesBetaApi.md#listIdentities) | **GET** /identities | List Identities
[**resetIdentity**](IdentitiesBetaApi.md#resetIdentity) | **POST** /identities/{id}/reset | Reset an identity
[**sendIdentityVerificationAccountToken**](IdentitiesBetaApi.md#sendIdentityVerificationAccountToken) | **POST** /identities/{id}/verification/account/send | Send password reset email
[**startIdentitiesInvite**](IdentitiesBetaApi.md#startIdentitiesInvite) | **POST** /identities/invite | Invite identities to register
[**startIdentityProcessing**](IdentitiesBetaApi.md#startIdentityProcessing) | **POST** /identities/process | Process a list of identityIds
[**synchronizeAttributesForIdentity**](IdentitiesBetaApi.md#synchronizeAttributesForIdentity) | **POST** /identities/{identityId}/synchronize-attributes | Attribute synchronization for single identity.



## deleteIdentity

> deleteIdentity(id)

Delete identity

The API returns successful response if the requested identity was deleted.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Identity Id | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentitiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identitiesBetaApi = new IdentitiesBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // Identity Id
const val = await identitiesBetaApi.deleteIdentity(id);
console.log('API called successfully.');
```
</details>


## getIdentity

> IdentityBeta getIdentity(id)

Identity Details

This API returns a single identity using the Identity ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Identity Id | [default to undefined]

### Return type

[**IdentityBeta**](../Models/IdentityBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentitiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identitiesBetaApi = new IdentitiesBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // Identity Id
const val = await identitiesBetaApi.getIdentity(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getIdentityOwnershipDetails

> IdentityOwnershipAssociationDetailsBeta getIdentityOwnershipDetails(identityId)

Get ownership details

Use this API to return an identity\'s owned objects that will cause problems for deleting the identity.  Use this API as a checklist of objects that you need to reassign to a different identity before you can delete the identity.  For a full list of objects owned by an identity, use the [Search API](https://developer.sailpoint.com/docs/api/v3/search-post/).  When you search for identities, the returned identities have a property, `owns`, that contains a more comprehensive list of identity\'s owned objects.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| Identity ID. | [default to undefined]

### Return type

[**IdentityOwnershipAssociationDetailsBeta**](../Models/IdentityOwnershipAssociationDetailsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentitiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identitiesBetaApi = new IdentitiesBetaApi(apiConfig);
const identityId : string = "ff8081814d2a8036014d701f3fbf53fa"; // Identity ID.
const val = await identitiesBetaApi.getIdentityOwnershipDetails(identityId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getRoleAssignment

> RoleAssignmentDtoBeta getRoleAssignment(identityId, assignmentId)

Role assignment details

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| Identity Id | [default to undefined]
 **assignmentId** | **string**| Assignment Id | [default to undefined]

### Return type

[**RoleAssignmentDtoBeta**](../Models/RoleAssignmentDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentitiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identitiesBetaApi = new IdentitiesBetaApi(apiConfig);
const identityId : string = "ef38f94347e94562b5bb8424a56397d8"; // Identity Id
const assignmentId : string = "1cbb0705b38c4226b1334eadd8874086"; // Assignment Id
const val = await identitiesBetaApi.getRoleAssignment(identityId, assignmentId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getRoleAssignments

> Array&lt;GetRoleAssignments200ResponseInnerBeta&gt; getRoleAssignments(identityId, roleId, roleName)

List role assignments

This returns either a list of Role Assignments when querying with either a Role Id or Role Name, or a list of Role Assignment References if querying with only identity Id.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| Identity Id to get the role assignments for | [default to undefined]
 **roleId** | **string**| Role Id to filter the role assignments with | [optional] [default to undefined]
 **roleName** | **string**| Role name to filter the role assignments with | [optional] [default to undefined]

### Return type

[**Array&lt;GetRoleAssignments200ResponseInnerBeta&gt;**](../Models/GetRoleAssignments200ResponseInnerBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentitiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identitiesBetaApi = new IdentitiesBetaApi(apiConfig);
const identityId : string = "ef38f94347e94562b5bb8424a56397d8"; // Identity Id to get the role assignments for
const roleId = "e7697a1e96d04db1ac7b0f4544915d2c", // string | Role Id to filter the role assignments with
  roleName = "Engineer"; // string | Role name to filter the role assignments with
const val = await identitiesBetaApi.getRoleAssignments(identityId, roleId, roleName);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listIdentities

> Array&lt;IdentityBeta&gt; listIdentities(filters, sorters, defaultFilter, count, limit, offset)

List Identities

This API returns a list of identities.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus** | [optional] [default to undefined]
 **defaultFilter** | **&#39;CORRELATED_ONLY&#39; | &#39;NONE&#39;**| Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated&#x3D;true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter. | [optional] [default to &#39;CORRELATED_ONLY&#39;]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

[**Array&lt;IdentityBeta&gt;**](../Models/IdentityBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentitiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identitiesBetaApi = new IdentitiesBetaApi(apiConfig);
const filters = "id eq "6c9079b270a266a60170a2779fcb0006" or correlated eq false", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq*
  sorters = "name,-cloudStatus", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus**
  defaultFilter = "NONE", // 'CORRELATED_ONLY' | 'NONE' | Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated=true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0; // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await identitiesBetaApi.listIdentities(filters, sorters, defaultFilter, count, limit, offset);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## resetIdentity

> resetIdentity(identityId)

Reset an identity

Use this endpoint to reset a user\'s identity if they have forgotten their authentication information like their answers to knowledge-based questions. Resetting an identity de-registers the user and removes any elevated user levels they have.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| Identity Id | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentitiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identitiesBetaApi = new IdentitiesBetaApi(apiConfig);
const identityId : string = "ef38f94347e94562b5bb8424a56397d8"; // Identity Id
const val = await identitiesBetaApi.resetIdentity(identityId);
console.log('API called successfully.');
```
</details>


## sendIdentityVerificationAccountToken

> sendIdentityVerificationAccountToken(id, sendAccountVerificationRequestBeta)

Send password reset email

This API sends an email with the link to start Password Reset. After selecting the link an identity will be able to set up a new password. Emails expire after 2 hours. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Identity ID | [default to undefined]
 **sendAccountVerificationRequestBeta** | [**SendAccountVerificationRequestBeta**](../Models/SendAccountVerificationRequestBeta.md)|  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentitiesBetaApi, SendAccountVerificationRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identitiesBetaApi = new IdentitiesBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // Identity ID
const sendAccountVerificationRequestBeta : SendAccountVerificationRequestBeta = ; // 
const val = await identitiesBetaApi.sendIdentityVerificationAccountToken(id, sendAccountVerificationRequestBeta);
console.log('API called successfully.');
```
</details>


## startIdentitiesInvite

> TaskStatusBeta startIdentitiesInvite(inviteIdentitiesRequestBeta)

Invite identities to register

This API submits a task for inviting given identities via email to complete registration. The invitation email will include the link. After selecting the link an identity will be able to set up password and log in into the system. Invitations expire after 7 days. By default invitations send to the work identity email. It can be changed in Admin > Identities > Identity Profiles by selecting corresponding profile and editing Invitation Options.  This task will send an invitation email only for unregistered identities.  The executed task status can be checked by Task Management > [Get task status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status). 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteIdentitiesRequestBeta** | [**InviteIdentitiesRequestBeta**](../Models/InviteIdentitiesRequestBeta.md)|  | 

### Return type

[**TaskStatusBeta**](../Models/TaskStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentitiesBetaApi, InviteIdentitiesRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identitiesBetaApi = new IdentitiesBetaApi(apiConfig);
const inviteIdentitiesRequestBeta : InviteIdentitiesRequestBeta = ; // 
const val = await identitiesBetaApi.startIdentitiesInvite(inviteIdentitiesRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## startIdentityProcessing

> TaskResultResponseBeta startIdentityProcessing(processIdentitiesRequestBeta)

Process a list of identityIds

This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant\'s timezone to keep your identities synchronized.   This endpoint will perform the following tasks: 1. Calculate identity attributes, including applying or running any rules or transforms (e.g. calculate Lifecycle State at a point-in-time it\'s expected to change). 2. Evaluate role assignments, leading to assignment of new roles and removal of existing roles. 3. Enforce provisioning for any assigned accesses that haven\'t been fulfilled (e.g. failure due to source health). 4. Recalculate manager relationships. 5. Potentially clean-up identity processing errors, assuming the error has been resolved.  A token with ORG_ADMIN or HELPDESK authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processIdentitiesRequestBeta** | [**ProcessIdentitiesRequestBeta**](../Models/ProcessIdentitiesRequestBeta.md)|  | 

### Return type

[**TaskResultResponseBeta**](../Models/TaskResultResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentitiesBetaApi, ProcessIdentitiesRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identitiesBetaApi = new IdentitiesBetaApi(apiConfig);
const processIdentitiesRequestBeta : ProcessIdentitiesRequestBeta = ; // 
const val = await identitiesBetaApi.startIdentityProcessing(processIdentitiesRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## synchronizeAttributesForIdentity

> IdentitySyncJobBeta synchronizeAttributesForIdentity(identityId)

Attribute synchronization for single identity.

This end-point performs attribute synchronization for a selected identity. The endpoint can be called once in 10 seconds per identity. A token with ORG_ADMIN or API authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| The Identity id | [default to undefined]

### Return type

[**IdentitySyncJobBeta**](../Models/IdentitySyncJobBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentitiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identitiesBetaApi = new IdentitiesBetaApi(apiConfig);
const identityId : string = "identityId_example"; // The Identity id
const val = await identitiesBetaApi.synchronizeAttributesForIdentity(identityId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

