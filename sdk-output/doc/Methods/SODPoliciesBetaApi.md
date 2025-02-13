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

{
  "conflictingAccessCriteria" : {
    "leftCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    },
    "rightCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    }
  },
  "ownerRef" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "scheduled" : true,
  "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "description" : "This policy ensures compliance of xyz",
  "violationOwnerAssignmentConfig" : {
    "assignmentRule" : "MANAGER",
    "ownerRef" : {
      "name" : "Support",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    }
  },
  "correctionAdvice" : "Based on the role of the employee, managers should remove access that is not required for their job function.",
  "type" : "GENERAL",
  "tags" : [ "TAG1", "TAG2" ],
  "name" : "policy-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
  "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "state" : "ENFORCED",
  "externalPolicyReference" : "XYZ policy"
}


const sodPolicyBeta : SodPolicyBeta = 

try {
    const val = await sODPoliciesBetaApi.createSodPolicy(sodPolicyBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.createSodPolicy(sodPolicyBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the SOD Policy to delete. (default to undefined)
const logical : boolean = true; // Indicates whether this is a soft delete (logical true) or a hard delete. (optional) (default to true)

try {
    const val = await sODPoliciesBetaApi.deleteSodPolicy(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.deleteSodPolicy(id, logical);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the SOD policy the schedule must be deleted for. (default to undefined)

try {
    const val = await sODPoliciesBetaApi.deleteSodPolicySchedule(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.deleteSodPolicySchedule(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const reportResultId : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the report reference to download. (default to undefined)
const fileName : string = "custom-name"; // Custom Name for the  file. (default to undefined)

try {
    const val = await sODPoliciesBetaApi.getCustomViolationReport(reportResultId, fileName);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.getCustomViolationReport(reportResultId, fileName);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const reportResultId : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the report reference to download. (default to undefined)

try {
    const val = await sODPoliciesBetaApi.getDefaultViolationReport(reportResultId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.getDefaultViolationReport(reportResultId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "name" : "SOD Policy 1 Violation",
  "id" : "2c9180835d191a86015d28455b4b232a",
  "type" : "REPORT_RESULT",
  "status" : "PENDING"
}



try {
    const val = await sODPoliciesBetaApi.getSodAllReportRunStatus();
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.getSodAllReportRunStatus();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "conflictingAccessCriteria" : {
    "leftCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    },
    "rightCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    }
  },
  "ownerRef" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "scheduled" : true,
  "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "description" : "This policy ensures compliance of xyz",
  "violationOwnerAssignmentConfig" : {
    "assignmentRule" : "MANAGER",
    "ownerRef" : {
      "name" : "Support",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    }
  },
  "correctionAdvice" : "Based on the role of the employee, managers should remove access that is not required for their job function.",
  "type" : "GENERAL",
  "tags" : [ "TAG1", "TAG2" ],
  "name" : "policy-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
  "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "state" : "ENFORCED",
  "externalPolicyReference" : "XYZ policy"
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the object reference to retrieve. (default to undefined)

try {
    const val = await sODPoliciesBetaApi.getSodPolicy(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.getSodPolicy(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "schedule" : {
    "hours" : {
      "accountMatchConfig" : {
        "matchExpression" : {
          "and" : true,
          "matchTerms" : [ {
            "name" : "",
            "value" : "",
            "container" : true,
            "and" : false,
            "children" : [ {
              "name" : "businessCategory",
              "value" : "Service",
              "op" : "eq",
              "container" : false,
              "and" : false
            } ]
          } ]
        }
      },
      "applicationId" : "2c91808874ff91550175097daaec161c\""
    },
    "months" : {
      "accountMatchConfig" : {
        "matchExpression" : {
          "and" : true,
          "matchTerms" : [ {
            "name" : "",
            "value" : "",
            "container" : true,
            "and" : false,
            "children" : [ {
              "name" : "businessCategory",
              "value" : "Service",
              "op" : "eq",
              "container" : false,
              "and" : false
            } ]
          } ]
        }
      },
      "applicationId" : "2c91808874ff91550175097daaec161c\""
    },
    "timeZoneId" : "America/Chicago",
    "days" : {
      "accountMatchConfig" : {
        "matchExpression" : {
          "and" : true,
          "matchTerms" : [ {
            "name" : "",
            "value" : "",
            "container" : true,
            "and" : false,
            "children" : [ {
              "name" : "businessCategory",
              "value" : "Service",
              "op" : "eq",
              "container" : false,
              "and" : false
            } ]
          } ]
        }
      },
      "applicationId" : "2c91808874ff91550175097daaec161c\""
    },
    "expiration" : "2018-06-25T20:22:28.104Z",
    "type" : "WEEKLY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "recipients" : [ {
    "name" : "Michael Michaels",
    "id" : "2c7180a46faadee4016fb4e018c20642",
    "type" : "IDENTITY"
  }, {
    "name" : "Michael Michaels",
    "id" : "2c7180a46faadee4016fb4e018c20642",
    "type" : "IDENTITY"
  } ],
  "name" : "SCH-1584312283015",
  "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modified" : "2020-01-01T00:00:00Z",
  "description" : "Schedule for policy xyz",
  "emailEmptyResults" : false
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the object reference to retrieve. (default to undefined)

try {
    const val = await sODPoliciesBetaApi.getSodPolicySchedule(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.getSodPolicySchedule(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "name" : "SOD Policy 1 Violation",
  "id" : "2c9180835d191a86015d28455b4b232a",
  "type" : "REPORT_RESULT",
  "status" : "PENDING"
}


const reportResultId : string = "2e8d8180-24bc-4d21-91c6-7affdb473b0d"; // The ID of the report reference to retrieve. (default to undefined)

try {
    const val = await sODPoliciesBetaApi.getSodViolationReportRunStatus(reportResultId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.getSodViolationReportRunStatus(reportResultId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "name" : "SOD Policy 1 Violation",
  "id" : "2c9180835d191a86015d28455b4b232a",
  "type" : "REPORT_RESULT",
  "status" : "PENDING"
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the object reference to retrieve. (default to undefined)

try {
    const val = await sODPoliciesBetaApi.getSodViolationReportStatus(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.getSodViolationReportStatus(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "conflictingAccessCriteria" : {
    "leftCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    },
    "rightCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    }
  },
  "ownerRef" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "scheduled" : true,
  "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "description" : "This policy ensures compliance of xyz",
  "violationOwnerAssignmentConfig" : {
    "assignmentRule" : "MANAGER",
    "ownerRef" : {
      "name" : "Support",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    }
  },
  "correctionAdvice" : "Based on the role of the employee, managers should remove access that is not required for their job function.",
  "type" : "GENERAL",
  "tags" : [ "TAG1", "TAG2" ],
  "name" : "policy-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
  "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "state" : "ENFORCED",
  "externalPolicyReference" : "XYZ policy"
}, {
  "conflictingAccessCriteria" : {
    "leftCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    },
    "rightCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    }
  },
  "ownerRef" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "scheduled" : true,
  "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "description" : "This policy ensures compliance of xyz",
  "violationOwnerAssignmentConfig" : {
    "assignmentRule" : "MANAGER",
    "ownerRef" : {
      "name" : "Support",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    }
  },
  "correctionAdvice" : "Based on the role of the employee, managers should remove access that is not required for their job function.",
  "type" : "GENERAL",
  "tags" : [ "TAG1", "TAG2" ],
  "name" : "policy-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
  "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "state" : "ENFORCED",
  "externalPolicyReference" : "XYZ policy"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "id eq "bc693f07e7b645539626c25954c58554""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in* (optional) (default to undefined)
const sorters : string = "id,name"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description** (optional) (default to undefined)

try {
    const val = await sODPoliciesBetaApi.listSodPolicies();
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.listSodPolicies(limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "conflictingAccessCriteria" : {
    "leftCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    },
    "rightCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    }
  },
  "ownerRef" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "scheduled" : true,
  "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "description" : "This policy ensures compliance of xyz",
  "violationOwnerAssignmentConfig" : {
    "assignmentRule" : "MANAGER",
    "ownerRef" : {
      "name" : "Support",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    }
  },
  "correctionAdvice" : "Based on the role of the employee, managers should remove access that is not required for their job function.",
  "type" : "GENERAL",
  "tags" : [ "TAG1", "TAG2" ],
  "name" : "policy-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
  "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "state" : "ENFORCED",
  "externalPolicyReference" : "XYZ policy"
}


const id : string = "2c9180835d191a86015d28455b4a2329"; // The ID of the SOD policy being modified. (default to undefined)
const requestBody : Array<object> = [{op=replace, path=/description, value=Modified description}, {op=replace, path=/conflictingAccessCriteria/leftCriteria/name, value=money-in-modified}, {op=replace, path=/conflictingAccessCriteria/rightCriteria, value={name=money-out-modified, criteriaList=[{type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2}]}}]; // A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 

try {
    const val = await sODPoliciesBetaApi.patchSodPolicy(id, requestBody);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.patchSodPolicy(id, requestBody);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "schedule" : {
    "hours" : {
      "accountMatchConfig" : {
        "matchExpression" : {
          "and" : true,
          "matchTerms" : [ {
            "name" : "",
            "value" : "",
            "container" : true,
            "and" : false,
            "children" : [ {
              "name" : "businessCategory",
              "value" : "Service",
              "op" : "eq",
              "container" : false,
              "and" : false
            } ]
          } ]
        }
      },
      "applicationId" : "2c91808874ff91550175097daaec161c\""
    },
    "months" : {
      "accountMatchConfig" : {
        "matchExpression" : {
          "and" : true,
          "matchTerms" : [ {
            "name" : "",
            "value" : "",
            "container" : true,
            "and" : false,
            "children" : [ {
              "name" : "businessCategory",
              "value" : "Service",
              "op" : "eq",
              "container" : false,
              "and" : false
            } ]
          } ]
        }
      },
      "applicationId" : "2c91808874ff91550175097daaec161c\""
    },
    "timeZoneId" : "America/Chicago",
    "days" : {
      "accountMatchConfig" : {
        "matchExpression" : {
          "and" : true,
          "matchTerms" : [ {
            "name" : "",
            "value" : "",
            "container" : true,
            "and" : false,
            "children" : [ {
              "name" : "businessCategory",
              "value" : "Service",
              "op" : "eq",
              "container" : false,
              "and" : false
            } ]
          } ]
        }
      },
      "applicationId" : "2c91808874ff91550175097daaec161c\""
    },
    "expiration" : "2018-06-25T20:22:28.104Z",
    "type" : "WEEKLY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "recipients" : [ {
    "name" : "Michael Michaels",
    "id" : "2c7180a46faadee4016fb4e018c20642",
    "type" : "IDENTITY"
  }, {
    "name" : "Michael Michaels",
    "id" : "2c7180a46faadee4016fb4e018c20642",
    "type" : "IDENTITY"
  } ],
  "name" : "SCH-1584312283015",
  "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modified" : "2020-01-01T00:00:00Z",
  "description" : "Schedule for policy xyz",
  "emailEmptyResults" : false
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the SOD policy to update its schedule. (default to undefined)
const sodPolicyScheduleBeta : SodPolicyScheduleBeta = 

try {
    const val = await sODPoliciesBetaApi.putPolicySchedule(id, sodPolicyScheduleBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.putPolicySchedule(id, sodPolicyScheduleBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "conflictingAccessCriteria" : {
    "leftCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    },
    "rightCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    }
  },
  "ownerRef" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "scheduled" : true,
  "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "description" : "This policy ensures compliance of xyz",
  "violationOwnerAssignmentConfig" : {
    "assignmentRule" : "MANAGER",
    "ownerRef" : {
      "name" : "Support",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    }
  },
  "correctionAdvice" : "Based on the role of the employee, managers should remove access that is not required for their job function.",
  "type" : "GENERAL",
  "tags" : [ "TAG1", "TAG2" ],
  "name" : "policy-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
  "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "state" : "ENFORCED",
  "externalPolicyReference" : "XYZ policy"
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the SOD policy to update. (default to undefined)
const sodPolicyBeta : SodPolicyBeta = 

try {
    const val = await sODPoliciesBetaApi.putSodPolicy(id, sodPolicyBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.putSodPolicy(id, sodPolicyBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "name" : "SOD Policy 1 Violation",
  "id" : "2c9180835d191a86015d28455b4b232a",
  "type" : "REPORT_RESULT",
  "status" : "PENDING"
}


const multiPolicyRequestBeta : MultiPolicyRequestBeta = 

try {
    const val = await sODPoliciesBetaApi.startSodAllPoliciesForOrg();
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.startSodAllPoliciesForOrg(multiPolicyRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "name" : "SOD Policy 1 Violation",
  "id" : "2c9180835d191a86015d28455b4b232a",
  "type" : "REPORT_RESULT",
  "status" : "PENDING"
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The SOD policy ID to run. (default to undefined)

try {
    const val = await sODPoliciesBetaApi.startSodPolicy(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await sODPoliciesBetaApi.startSodPolicy(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

