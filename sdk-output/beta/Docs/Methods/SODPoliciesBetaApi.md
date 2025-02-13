---
title: SODPoliciesBetaApi
pagination_label: SODPoliciesBetaApi
sidebar_label: SODPoliciesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'SODPoliciesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'SODPoliciesBetaApi']
---

# SODPoliciesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSodPolicy**](SODPoliciesBetaApi.md#createSodPolicy) | **POST** /sod-policies | Create SOD policy
[**deleteSodPolicy**](SODPoliciesBetaApi.md#deleteSodPolicy) | **DELETE** /sod-policies/{id} | Delete SOD policy by ID
[**deleteSodPolicySchedule**](SODPoliciesBetaApi.md#deleteSodPolicySchedule) | **DELETE** /sod-policies/{id}/schedule | Delete SOD policy schedule
[**getCustomViolationReport**](SODPoliciesBetaApi.md#getCustomViolationReport) | **GET** /sod-violation-report/{reportResultId}/download/{fileName} | Download custom violation report
[**getDefaultViolationReport**](SODPoliciesBetaApi.md#getDefaultViolationReport) | **GET** /sod-violation-report/{reportResultId}/download | Download violation report
[**getSodAllReportRunStatus**](SODPoliciesBetaApi.md#getSodAllReportRunStatus) | **GET** /sod-violation-report | Get multi-report run task status
[**getSodPolicy**](SODPoliciesBetaApi.md#getSodPolicy) | **GET** /sod-policies/{id} | Get SOD policy by ID
[**getSodPolicySchedule**](SODPoliciesBetaApi.md#getSodPolicySchedule) | **GET** /sod-policies/{id}/schedule | Get SOD policy schedule
[**getSodViolationReportRunStatus**](SODPoliciesBetaApi.md#getSodViolationReportRunStatus) | **GET** /sod-policies/sod-violation-report-status/{reportResultId} | Get violation report run status
[**getSodViolationReportStatus**](SODPoliciesBetaApi.md#getSodViolationReportStatus) | **GET** /sod-policies/{id}/violation-report | Get SOD violation report status
[**listSodPolicies**](SODPoliciesBetaApi.md#listSodPolicies) | **GET** /sod-policies | List SOD policies
[**patchSodPolicy**](SODPoliciesBetaApi.md#patchSodPolicy) | **PATCH** /sod-policies/{id} | Patch a SOD policy
[**putPolicySchedule**](SODPoliciesBetaApi.md#putPolicySchedule) | **PUT** /sod-policies/{id}/schedule | Update SOD Policy schedule
[**putSodPolicy**](SODPoliciesBetaApi.md#putSodPolicy) | **PUT** /sod-policies/{id} | Update SOD policy by ID
[**startSodAllPoliciesForOrg**](SODPoliciesBetaApi.md#startSodAllPoliciesForOrg) | **POST** /sod-violation-report/run | Runs all policies for org
[**startSodPolicy**](SODPoliciesBetaApi.md#startSodPolicy) | **POST** /sod-policies/{id}/violation-report/run | Runs SOD policy violation report



## createSodPolicy

> SodPolicyBeta createSodPolicy(sodPolicyBeta)

Create SOD policy

This creates both General and Conflicting Access Based policy, with a limit of 50 entitlements for each (left & right) criteria for Conflicting Access Based SOD policy. Requires role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sodPolicyBeta** | [**SodPolicyBeta**](../Models/SodPolicyBeta.md)|  | 

### Return type

[**SodPolicyBeta**](../Models/SodPolicyBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi, SodPolicyBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const sodPolicyBeta : SodPolicyBeta = {name=Conflicting-Policy-Name, description=This policy ensures compliance of xyz, ownerRef={type=IDENTITY, id=2c91808568c529c60168cca6f90c1313, name=Owner Name}, externalPolicyReference=XYZ policy, compensatingControls=Have a manager review the transaction decisions for their "out of compliance" employee, correctionAdvice=Based on the role of the employee, managers should remove access that is not required for their job function., state=ENFORCED, tags=[string], creatorId=0f11f2a4-7c94-4bf3-a2bd-742580fe3bde, modifierId=0f11f2a4-7c94-4bf3-a2bd-742580fe3bde, violationOwnerAssignmentConfig={assignmentRule=MANAGER, ownerRef={type=IDENTITY, id=2c91808568c529c60168cca6f90c1313, name=Violation Owner Name}}, scheduled=true, type=CONFLICTING_ACCESS_BASED, conflictingAccessCriteria={leftCriteria={name=money-in, criteriaList=[{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67}]}, rightCriteria={name=money-out, criteriaList=[{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a68}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a69}]}}}; // 
const val = await sODPoliciesBetaApi.createSodPolicy(sodPolicyBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteSodPolicy

> deleteSodPolicy(id, logical)

Delete SOD policy by ID

This deletes a specified SOD policy. Requires role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the SOD Policy to delete. | [default to undefined]
 **logical** | **boolean**| Indicates whether this is a soft delete (logical true) or a hard delete. | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the SOD Policy to delete.
const logical = true; // boolean | Indicates whether this is a soft delete (logical true) or a hard delete.
const val = await sODPoliciesBetaApi.deleteSodPolicy(id, logical);
console.log('API called successfully.');
```
</details>


## deleteSodPolicySchedule

> deleteSodPolicySchedule(id)

Delete SOD policy schedule

This deletes schedule for a specified SOD policy. Requires role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the SOD policy the schedule must be deleted for. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the SOD policy the schedule must be deleted for.
const val = await sODPoliciesBetaApi.deleteSodPolicySchedule(id);
console.log('API called successfully.');
```
</details>


## getCustomViolationReport

> File getCustomViolationReport(reportResultId, fileName)

Download custom violation report

This allows to download a specified named violation report for a given report reference. Requires role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportResultId** | **string**| The ID of the report reference to download. | [default to undefined]
 **fileName** | **string**| Custom Name for the  file. | [default to undefined]

### Return type

**File**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const reportResultId : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the report reference to download.
const fileName : string = "custom-name"; // Custom Name for the  file.
const val = await sODPoliciesBetaApi.getCustomViolationReport(reportResultId, fileName);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getDefaultViolationReport

> File getDefaultViolationReport(reportResultId)

Download violation report

This allows to download a violation report for a given report reference. Requires role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportResultId** | **string**| The ID of the report reference to download. | [default to undefined]

### Return type

**File**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const reportResultId : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the report reference to download.
const val = await sODPoliciesBetaApi.getDefaultViolationReport(reportResultId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSodAllReportRunStatus

> ReportResultReferenceBeta getSodAllReportRunStatus()

Get multi-report run task status

This endpoint gets the status for a violation report for all policy run. Requires role of ORG_ADMIN.

### Parameters

This endpoint does not need any parameter.

### Return type

[**ReportResultReferenceBeta**](../Models/ReportResultReferenceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const val = await sODPoliciesBetaApi.getSodAllReportRunStatus();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSodPolicy

> SodPolicyBeta getSodPolicy(id)

Get SOD policy by ID

This gets specified SOD policy. Requires role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the object reference to retrieve. | [default to undefined]

### Return type

[**SodPolicyBeta**](../Models/SodPolicyBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the object reference to retrieve.
const val = await sODPoliciesBetaApi.getSodPolicy(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSodPolicySchedule

> SodPolicyScheduleBeta getSodPolicySchedule(id)

Get SOD policy schedule

This endpoint gets a specified SOD policy\'s schedule. Requires the role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the object reference to retrieve. | [default to undefined]

### Return type

[**SodPolicyScheduleBeta**](../Models/SodPolicyScheduleBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the object reference to retrieve.
const val = await sODPoliciesBetaApi.getSodPolicySchedule(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSodViolationReportRunStatus

> ReportResultReferenceBeta getSodViolationReportRunStatus(reportResultId)

Get violation report run status

This gets the status for a violation report run task that has already been invoked. Requires role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportResultId** | **string**| The ID of the report reference to retrieve. | [default to undefined]

### Return type

[**ReportResultReferenceBeta**](../Models/ReportResultReferenceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const reportResultId : string = "2e8d8180-24bc-4d21-91c6-7affdb473b0d"; // The ID of the report reference to retrieve.
const val = await sODPoliciesBetaApi.getSodViolationReportRunStatus(reportResultId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSodViolationReportStatus

> ReportResultReferenceBeta getSodViolationReportStatus(id)

Get SOD violation report status

This gets the status for a violation report run task that has already been invoked. Requires role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the object reference to retrieve. | [default to undefined]

### Return type

[**ReportResultReferenceBeta**](../Models/ReportResultReferenceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the object reference to retrieve.
const val = await sODPoliciesBetaApi.getSodViolationReportStatus(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listSodPolicies

> Array&lt;SodPolicyBeta&gt; listSodPolicies(limit, offset, count, filters, sorters)

List SOD policies

This gets list of all SOD policies. Requires role of ORG_ADMIN

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description** | [optional] [default to undefined]

### Return type

[**Array&lt;SodPolicyBeta&gt;**](../Models/SodPolicyBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "id eq "bc693f07e7b645539626c25954c58554"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in*
  sorters = "id,name"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description**
const val = await sODPoliciesBetaApi.listSodPolicies(limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchSodPolicy

> SodPolicyBeta patchSodPolicy(id, requestBody)

Patch a SOD policy

Allows updating SOD Policy fields other than [\"id\",\"created\",\"creatorId\",\"policyQuery\",\"type\"] using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Requires role of ORG_ADMIN. This endpoint can only patch CONFLICTING_ACCESS_BASED type policies. Do not use this endpoint to patch general policies - doing so will build an API exception.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the SOD policy being modified. | [default to undefined]
 **requestBody** | [**Array&lt;object&gt;**](../Models/object.md)| A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria  | 

### Return type

[**SodPolicyBeta**](../Models/SodPolicyBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi, object } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const id : string = "2c9180835d191a86015d28455b4a2329"; // The ID of the SOD policy being modified.
const requestBody : Array<object> = [{op=replace, path=/description, value=Modified description}, {op=replace, path=/conflictingAccessCriteria/leftCriteria/name, value=money-in-modified}, {op=replace, path=/conflictingAccessCriteria/rightCriteria, value={name=money-out-modified, criteriaList=[{type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2}]}}]; // A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 
const val = await sODPoliciesBetaApi.patchSodPolicy(id, requestBody);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## putPolicySchedule

> SodPolicyScheduleBeta putPolicySchedule(id, sodPolicyScheduleBeta)

Update SOD Policy schedule

This updates schedule for a specified SOD policy. Requires role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the SOD policy to update its schedule. | [default to undefined]
 **sodPolicyScheduleBeta** | [**SodPolicyScheduleBeta**](../Models/SodPolicyScheduleBeta.md)|  | 

### Return type

[**SodPolicyScheduleBeta**](../Models/SodPolicyScheduleBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi, SodPolicyScheduleBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the SOD policy to update its schedule.
const sodPolicyScheduleBeta : SodPolicyScheduleBeta = ; // 
const val = await sODPoliciesBetaApi.putPolicySchedule(id, sodPolicyScheduleBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## putSodPolicy

> SodPolicyBeta putSodPolicy(id, sodPolicyBeta)

Update SOD policy by ID

This updates a specified SOD policy. Requires role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the SOD policy to update. | [default to undefined]
 **sodPolicyBeta** | [**SodPolicyBeta**](../Models/SodPolicyBeta.md)|  | 

### Return type

[**SodPolicyBeta**](../Models/SodPolicyBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi, SodPolicyBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the SOD policy to update.
const sodPolicyBeta : SodPolicyBeta = {id=0f11f2a4-7c94-4bf3-a2bd-742580fe3bde, name=Conflicting-Policy-Name, created=2020-01-01T00:00:00.000000Z, modified=2020-01-01T00:00:00.000000Z, description=Modified Description, ownerRef={type=IDENTITY, id=2c91808568c529c60168cca6f90c1313, name=Owner Name}, externalPolicyReference=XYZ policy, compensatingControls=Have a manager review the transaction decisions for their "out of compliance" employee, correctionAdvice=Based on the role of the employee, managers should remove access that is not required for their job function., state=ENFORCED, tags=[string], creatorId=0f11f2a4-7c94-4bf3-a2bd-742580fe3bde, modifierId=0f11f2a4-7c94-4bf3-a2bd-742580fe3bde, violationOwnerAssignmentConfig={assignmentRule=MANAGER, ownerRef={type=IDENTITY, id=2c91808568c529c60168cca6f90c1313, name=Violation Owner Name}}, scheduled=true, type=CONFLICTING_ACCESS_BASED, conflictingAccessCriteria={leftCriteria={name=money-in, criteriaList=[{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67}]}, rightCriteria={name=money-out, criteriaList=[{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a68}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a69}]}}}; // 
const val = await sODPoliciesBetaApi.putSodPolicy(id, sodPolicyBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## startSodAllPoliciesForOrg

> ReportResultReferenceBeta startSodAllPoliciesForOrg(multiPolicyRequestBeta)

Runs all policies for org

Runs multi-policy report for the org. If a policy reports more than 5000 violations, the report mentions that the violation limit was exceeded for that policy. If the request is empty, the report runs for all policies. Otherwise, the report runs for only the filtered policy list provided. Requires role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multiPolicyRequestBeta** | [**MultiPolicyRequestBeta**](../Models/MultiPolicyRequestBeta.md)|  | [optional] 

### Return type

[**ReportResultReferenceBeta**](../Models/ReportResultReferenceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const multiPolicyRequestBeta = {filteredPolicyList=[b868cd40-ffa4-4337-9c07-1a51846cfa94, 63a07a7b-39a4-48aa-956d-50c827deba2a]}; // MultiPolicyRequestBeta | 
const val = await sODPoliciesBetaApi.startSodAllPoliciesForOrg(multiPolicyRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## startSodPolicy

> ReportResultReferenceBeta startSodPolicy(id)

Runs SOD policy violation report

This invokes processing of violation report for given SOD policy. If the policy reports more than 5000 violations, the report returns with violation limit exceeded message. Requires role of ORG_ADMIN.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The SOD policy ID to run. | [default to undefined]

### Return type

[**ReportResultReferenceBeta**](../Models/ReportResultReferenceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SODPoliciesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sODPoliciesBetaApi = new SODPoliciesBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The SOD policy ID to run.
const val = await sODPoliciesBetaApi.startSodPolicy(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

