---
title: WorkflowsBetaApi
pagination_label: WorkflowsBetaApi
sidebar_label: WorkflowsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'WorkflowsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'WorkflowsBetaApi']
---

# WorkflowsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelWorkflowExecution**](WorkflowsBetaApi.md#cancelWorkflowExecution) | **POST** /workflow-executions/{id}/cancel | Cancel Workflow Execution by ID
[**createWorkflow**](WorkflowsBetaApi.md#createWorkflow) | **POST** /workflows | Create Workflow
[**deleteWorkflow**](WorkflowsBetaApi.md#deleteWorkflow) | **DELETE** /workflows/{id} | Delete Workflow By Id
[**getWorkflow**](WorkflowsBetaApi.md#getWorkflow) | **GET** /workflows/{id} | Get Workflow By Id
[**getWorkflowExecution**](WorkflowsBetaApi.md#getWorkflowExecution) | **GET** /workflow-executions/{id} | Get Workflow Execution
[**getWorkflowExecutionHistory**](WorkflowsBetaApi.md#getWorkflowExecutionHistory) | **GET** /workflow-executions/{id}/history | Get Workflow Execution History
[**getWorkflowExecutions**](WorkflowsBetaApi.md#getWorkflowExecutions) | **GET** /workflows/{id}/executions | List Workflow Executions
[**listCompleteWorkflowLibrary**](WorkflowsBetaApi.md#listCompleteWorkflowLibrary) | **GET** /workflow-library | List Complete Workflow Library
[**listWorkflowLibraryActions**](WorkflowsBetaApi.md#listWorkflowLibraryActions) | **GET** /workflow-library/actions | List Workflow Library Actions
[**listWorkflowLibraryOperators**](WorkflowsBetaApi.md#listWorkflowLibraryOperators) | **GET** /workflow-library/operators | List Workflow Library Operators
[**listWorkflowLibraryTriggers**](WorkflowsBetaApi.md#listWorkflowLibraryTriggers) | **GET** /workflow-library/triggers | List Workflow Library Triggers
[**listWorkflows**](WorkflowsBetaApi.md#listWorkflows) | **GET** /workflows | List Workflows
[**patchWorkflow**](WorkflowsBetaApi.md#patchWorkflow) | **PATCH** /workflows/{id} | Patch Workflow
[**postExternalExecuteWorkflow**](WorkflowsBetaApi.md#postExternalExecuteWorkflow) | **POST** /workflows/execute/external/{id} | Execute Workflow via External Trigger
[**postWorkflowExternalTrigger**](WorkflowsBetaApi.md#postWorkflowExternalTrigger) | **POST** /workflows/{id}/external/oauth-clients | Generate External Trigger OAuth Client
[**testExternalExecuteWorkflow**](WorkflowsBetaApi.md#testExternalExecuteWorkflow) | **POST** /workflows/execute/external/{id}/test | Test Workflow via External Trigger
[**testWorkflow**](WorkflowsBetaApi.md#testWorkflow) | **POST** /workflows/{id}/test | Test Workflow By Id
[**updateWorkflow**](WorkflowsBetaApi.md#updateWorkflow) | **PUT** /workflows/{id} | Update Workflow



## cancelWorkflowExecution

> cancelWorkflowExecution(id)

Cancel Workflow Execution by ID

Use this API to cancel a running workflow execution.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The workflow execution ID | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

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


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // The workflow execution ID (default to undefined)

try {
    const val = await workflowsBetaApi.cancelWorkflowExecution(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.cancelWorkflowExecution(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## createWorkflow

> WorkflowBeta createWorkflow(createWorkflowRequestBeta)

Create Workflow

Create a new workflow with the desired trigger and steps specified in the request body.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWorkflowRequestBeta** | [**CreateWorkflowRequestBeta**](../Models/CreateWorkflowRequestBeta.md)|  | 

### Return type

[**WorkflowBeta**](../Models/WorkflowBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi, CreateWorkflowRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

{
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "creator" : {
    "name" : "Michael Michaels",
    "id" : "2c7180a46faadee4016fb4e018c20642",
    "type" : "IDENTITY"
  },
  "created" : "2022-01-10T16:06:16.636381447Z",
  "description" : "Send an email to the identity who's attributes changed.",
  "trigger" : {
    "displayName" : "displayName",
    "attributes" : {
      "description" : "description",
      "id" : "idn:identity-attributes-changed",
      "filter.$" : "$.changes[?(@.attribute == 'manager')]"
    },
    "type" : "EVENT"
  },
  "enabled" : false,
  "name" : "Send Email",
  "modified" : "2023-12-05T15:18:27.699132301Z",
  "executionCount" : 2,
  "modifiedBy" : {
    "name" : "Thomas Edison",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "definition" : {
    "start" : "Send Email Test",
    "steps" : {
      "Send Email" : {
        "actionId" : "sp:send-email",
        "attributes" : {
          "body" : "This is a test",
          "from" : "sailpoint@sailpoint.com",
          "recipientId.$" : "$.identity.id",
          "subject" : "test"
        },
        "nextStep" : "success",
        "type" : "ACTION"
      },
      "success" : {
        "type" : "success"
      }
    }
  },
  "id" : "d201c5e9-d37b-4aff-af14-66414f39d569",
  "failureCount" : 0
}


const createWorkflowRequestBeta : CreateWorkflowRequestBeta = 

try {
    const val = await workflowsBetaApi.createWorkflow(createWorkflowRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.createWorkflow(createWorkflowRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteWorkflow

> deleteWorkflow(id)

Delete Workflow By Id

Delete a workflow.  **Enabled workflows cannot be deleted**.  They must first be disabled.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Id of the Workflow | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

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


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Id of the Workflow (default to undefined)

try {
    const val = await workflowsBetaApi.deleteWorkflow(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.deleteWorkflow(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getWorkflow

> WorkflowBeta getWorkflow(id)

Get Workflow By Id

Get a single workflow by id.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Id of the workflow | [default to undefined]

### Return type

[**WorkflowBeta**](../Models/WorkflowBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

{
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "creator" : {
    "name" : "Michael Michaels",
    "id" : "2c7180a46faadee4016fb4e018c20642",
    "type" : "IDENTITY"
  },
  "created" : "2022-01-10T16:06:16.636381447Z",
  "description" : "Send an email to the identity who's attributes changed.",
  "trigger" : {
    "displayName" : "displayName",
    "attributes" : {
      "description" : "description",
      "id" : "idn:identity-attributes-changed",
      "filter.$" : "$.changes[?(@.attribute == 'manager')]"
    },
    "type" : "EVENT"
  },
  "enabled" : false,
  "name" : "Send Email",
  "modified" : "2023-12-05T15:18:27.699132301Z",
  "executionCount" : 2,
  "modifiedBy" : {
    "name" : "Thomas Edison",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "definition" : {
    "start" : "Send Email Test",
    "steps" : {
      "Send Email" : {
        "actionId" : "sp:send-email",
        "attributes" : {
          "body" : "This is a test",
          "from" : "sailpoint@sailpoint.com",
          "recipientId.$" : "$.identity.id",
          "subject" : "test"
        },
        "nextStep" : "success",
        "type" : "ACTION"
      },
      "success" : {
        "type" : "success"
      }
    }
  },
  "id" : "d201c5e9-d37b-4aff-af14-66414f39d569",
  "failureCount" : 0
}


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Id of the workflow (default to undefined)

try {
    const val = await workflowsBetaApi.getWorkflow(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.getWorkflow(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getWorkflowExecution

> object getWorkflowExecution(id)

Get Workflow Execution

Use this API to get a single workflow execution. Workflow executions are available for up to 90 days before being archived. If you attempt to access a workflow execution that has been archived, you will receive a \"404 Not Found\" response.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Workflow execution ID. | [default to undefined]

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

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


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Workflow execution ID. (default to undefined)

try {
    const val = await workflowsBetaApi.getWorkflowExecution(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.getWorkflowExecution(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getWorkflowExecutionHistory

> Array&lt;WorkflowExecutionEventBeta&gt; getWorkflowExecutionHistory(id)

Get Workflow Execution History

Get a detailed history of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Id of the workflow execution | [default to undefined]

### Return type

[**Array&lt;WorkflowExecutionEventBeta&gt;**](../Models/WorkflowExecutionEventBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

[ {
  "attributes" : { },
  "type" : "WorkflowTaskScheduled",
  "timestamp" : "2022-02-07T20:13:31.640618296Z"
}, {
  "attributes" : { },
  "type" : "WorkflowTaskScheduled",
  "timestamp" : "2022-02-07T20:13:31.640618296Z"
} ]


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Id of the workflow execution (default to undefined)

try {
    const val = await workflowsBetaApi.getWorkflowExecutionHistory(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.getWorkflowExecutionHistory(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getWorkflowExecutions

> Array&lt;WorkflowExecutionBeta&gt; getWorkflowExecutions(id, limit, offset, count, filters)

List Workflow Executions

Use this API to list a specified workflow\'s executions. Workflow executions are available for up to 90 days before being archived. By default, you can get a maximum of 250 executions.  To get executions past the first 250 records, you can do the following:  1. Use the [Get Workflows](https://developer.sailpoint.com/idn/api/beta/list-workflows) endpoint to get your workflows.  2. Get your workflow ID from the response.  3. You can then do either of the following:     - Filter to find relevant workflow executions.   For example, you can filter for failed workflow executions: `GET /workflows/:workflowID/executions?filters=status eq \"Failed\"`    - Paginate through results with the `offset` parameter.    For example, you can page through 50 executions per page and use that as a way to get to the records past the first 250.    Refer to [Paginating Results](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results) for more information about the query parameters you can use to achieve pagination. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Workflow ID. | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **startTime**: *eq, lt, le, gt, ge*  **status**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;WorkflowExecutionBeta&gt;**](../Models/WorkflowExecutionBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

[ {
  "requestId" : "41e12a74fa7b4a6a98ae47887b64acdb",
  "closeTime" : "2022-02-07T20:13:31.682410165Z",
  "startTime" : "2022-02-07T20:13:29.356648026Z",
  "id" : "b393f4e2-4785-4d7f-ab27-3a6b8ded4c81",
  "workflowId" : "d201c5d9-d37b-4a2f-af14-66414f39d568",
  "status" : "Completed"
}, {
  "requestId" : "41e12a74fa7b4a6a98ae47887b64acdb",
  "closeTime" : "2022-02-07T20:13:31.682410165Z",
  "startTime" : "2022-02-07T20:13:29.356648026Z",
  "id" : "b393f4e2-4785-4d7f-ab27-3a6b8ded4c81",
  "workflowId" : "d201c5d9-d37b-4a2f-af14-66414f39d568",
  "status" : "Completed"
} ]


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Workflow ID. (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "status eq "Failed""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **startTime**: *eq, lt, le, gt, ge*  **status**: *eq* (optional) (default to undefined)

try {
    const val = await workflowsBetaApi.getWorkflowExecutions(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.getWorkflowExecutions(id, limit, offset, count, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listCompleteWorkflowLibrary

> Array&lt;ListCompleteWorkflowLibrary200ResponseInnerBeta&gt; listCompleteWorkflowLibrary(limit, offset)

List Complete Workflow Library

This lists all triggers, actions, and operators in the library

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

[**Array&lt;ListCompleteWorkflowLibrary200ResponseInnerBeta&gt;**](../Models/ListCompleteWorkflowLibrary200ResponseInnerBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

[ {
  "outputSchema" : {
    "definitions" : { },
    "properties" : {
      "autoRevokeAllowed" : {
        "$id" : "#sp:create-campaign/autoRevokeAllowed",
        "default" : true,
        "examples" : [ false ],
        "title" : "autoRevokeAllowed",
        "type" : "boolean"
      },
      "deadline" : {
        "$id" : "#sp:create-campaign/deadline",
        "default" : "",
        "examples" : [ "2020-12-25T06:00:00.468Z" ],
        "format" : "date-time",
        "pattern" : "^.*$",
        "title" : "deadline",
        "type" : "string"
      },
      "description" : {
        "$id" : "#sp:create-campaign/description",
        "default" : "",
        "examples" : [ "A review of everyone's access by their manager." ],
        "pattern" : "^.*$",
        "title" : "description",
        "type" : "string"
      },
      "emailNotificationEnabled" : {
        "$id" : "#sp:create-campaign/emailNotificationEnabled",
        "default" : true,
        "examples" : [ false ],
        "title" : "emailNotificationEnabled",
        "type" : "boolean"
      },
      "filter" : {
        "$id" : "#sp:create-campaign/filter",
        "properties" : {
          "id" : {
            "$id" : "#sp:create-campaign/filter/id",
            "default" : "",
            "examples" : [ "e0adaae69852e8fe8b8a3d48e5ce757c" ],
            "pattern" : "^.*$",
            "title" : "id",
            "type" : "string"
          },
          "type" : {
            "$id" : "#sp:create-campaign/filter/type",
            "default" : "",
            "examples" : [ "CAMPAIGN_FILTER" ],
            "pattern" : "^.*$",
            "title" : "type",
            "type" : "string"
          }
        },
        "title" : "filter",
        "type" : "object"
      },
      "id" : {
        "$id" : "#sp:create-campaign/id",
        "default" : "",
        "examples" : [ "2c918086719eec070171a7e3355a360a" ],
        "pattern" : "^.*$",
        "title" : "id",
        "type" : "string"
      },
      "name" : {
        "$id" : "#sp:create-campaign/name",
        "default" : "",
        "examples" : [ "Manager Review" ],
        "pattern" : "^.*$",
        "title" : "name",
        "type" : "string"
      },
      "recommendationsEnabled" : {
        "$id" : "#sp:create-campaign/recommendationsEnabled",
        "default" : true,
        "examples" : [ false ],
        "title" : "recommendationEnabled",
        "type" : "boolean"
      },
      "type" : {
        "$id" : "#sp:create-campaign/type",
        "default" : "",
        "examples" : [ "MANAGER" ],
        "pattern" : "^.*$",
        "title" : "type",
        "type" : "string"
      }
    },
    "title" : "sp:create-campaign",
    "type" : "object"
  },
  "exampleOutput" : "{}",
  "deprecated" : true,
  "isSimulationEnabled" : true,
  "name" : "Create Certification Campaign",
  "description" : "Generates a certification campaign.",
  "id" : "sp:create-campaign",
  "formFields" : [ {
    "helpText" : "The name to give to this certification campaign.",
    "name" : "name",
    "description" : "First value to compare",
    "label" : "Campaign Name",
    "type" : "text",
    "required" : false
  }, {
    "helpText" : "The name to give to this certification campaign.",
    "name" : "name",
    "description" : "First value to compare",
    "label" : "Campaign Name",
    "type" : "text",
    "required" : false
  } ],
  "deprecatedBy" : "2000-01-23T04:56:07.000+00:00",
  "type" : "ACTION",
  "isDynamicSchema" : false,
  "versionNumber" : 0
}, {
  "outputSchema" : {
    "definitions" : { },
    "properties" : {
      "autoRevokeAllowed" : {
        "$id" : "#sp:create-campaign/autoRevokeAllowed",
        "default" : true,
        "examples" : [ false ],
        "title" : "autoRevokeAllowed",
        "type" : "boolean"
      },
      "deadline" : {
        "$id" : "#sp:create-campaign/deadline",
        "default" : "",
        "examples" : [ "2020-12-25T06:00:00.468Z" ],
        "format" : "date-time",
        "pattern" : "^.*$",
        "title" : "deadline",
        "type" : "string"
      },
      "description" : {
        "$id" : "#sp:create-campaign/description",
        "default" : "",
        "examples" : [ "A review of everyone's access by their manager." ],
        "pattern" : "^.*$",
        "title" : "description",
        "type" : "string"
      },
      "emailNotificationEnabled" : {
        "$id" : "#sp:create-campaign/emailNotificationEnabled",
        "default" : true,
        "examples" : [ false ],
        "title" : "emailNotificationEnabled",
        "type" : "boolean"
      },
      "filter" : {
        "$id" : "#sp:create-campaign/filter",
        "properties" : {
          "id" : {
            "$id" : "#sp:create-campaign/filter/id",
            "default" : "",
            "examples" : [ "e0adaae69852e8fe8b8a3d48e5ce757c" ],
            "pattern" : "^.*$",
            "title" : "id",
            "type" : "string"
          },
          "type" : {
            "$id" : "#sp:create-campaign/filter/type",
            "default" : "",
            "examples" : [ "CAMPAIGN_FILTER" ],
            "pattern" : "^.*$",
            "title" : "type",
            "type" : "string"
          }
        },
        "title" : "filter",
        "type" : "object"
      },
      "id" : {
        "$id" : "#sp:create-campaign/id",
        "default" : "",
        "examples" : [ "2c918086719eec070171a7e3355a360a" ],
        "pattern" : "^.*$",
        "title" : "id",
        "type" : "string"
      },
      "name" : {
        "$id" : "#sp:create-campaign/name",
        "default" : "",
        "examples" : [ "Manager Review" ],
        "pattern" : "^.*$",
        "title" : "name",
        "type" : "string"
      },
      "recommendationsEnabled" : {
        "$id" : "#sp:create-campaign/recommendationsEnabled",
        "default" : true,
        "examples" : [ false ],
        "title" : "recommendationEnabled",
        "type" : "boolean"
      },
      "type" : {
        "$id" : "#sp:create-campaign/type",
        "default" : "",
        "examples" : [ "MANAGER" ],
        "pattern" : "^.*$",
        "title" : "type",
        "type" : "string"
      }
    },
    "title" : "sp:create-campaign",
    "type" : "object"
  },
  "exampleOutput" : "{}",
  "deprecated" : true,
  "isSimulationEnabled" : true,
  "name" : "Create Certification Campaign",
  "description" : "Generates a certification campaign.",
  "id" : "sp:create-campaign",
  "formFields" : [ {
    "helpText" : "The name to give to this certification campaign.",
    "name" : "name",
    "description" : "First value to compare",
    "label" : "Campaign Name",
    "type" : "text",
    "required" : false
  }, {
    "helpText" : "The name to give to this certification campaign.",
    "name" : "name",
    "description" : "First value to compare",
    "label" : "Campaign Name",
    "type" : "text",
    "required" : false
  } ],
  "deprecatedBy" : "2000-01-23T04:56:07.000+00:00",
  "type" : "ACTION",
  "isDynamicSchema" : false,
  "versionNumber" : 0
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

try {
    const val = await workflowsBetaApi.listCompleteWorkflowLibrary();
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.listCompleteWorkflowLibrary(limit, offset);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listWorkflowLibraryActions

> Array&lt;WorkflowLibraryActionBeta&gt; listWorkflowLibraryActions(limit, offset, filters)

List Workflow Library Actions

This lists the workflow actions available to you.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;WorkflowLibraryActionBeta&gt;**](../Models/WorkflowLibraryActionBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

[ {
  "outputSchema" : {
    "definitions" : { },
    "properties" : {
      "autoRevokeAllowed" : {
        "$id" : "#sp:create-campaign/autoRevokeAllowed",
        "default" : true,
        "examples" : [ false ],
        "title" : "autoRevokeAllowed",
        "type" : "boolean"
      },
      "deadline" : {
        "$id" : "#sp:create-campaign/deadline",
        "default" : "",
        "examples" : [ "2020-12-25T06:00:00.468Z" ],
        "format" : "date-time",
        "pattern" : "^.*$",
        "title" : "deadline",
        "type" : "string"
      },
      "description" : {
        "$id" : "#sp:create-campaign/description",
        "default" : "",
        "examples" : [ "A review of everyone's access by their manager." ],
        "pattern" : "^.*$",
        "title" : "description",
        "type" : "string"
      },
      "emailNotificationEnabled" : {
        "$id" : "#sp:create-campaign/emailNotificationEnabled",
        "default" : true,
        "examples" : [ false ],
        "title" : "emailNotificationEnabled",
        "type" : "boolean"
      },
      "filter" : {
        "$id" : "#sp:create-campaign/filter",
        "properties" : {
          "id" : {
            "$id" : "#sp:create-campaign/filter/id",
            "default" : "",
            "examples" : [ "e0adaae69852e8fe8b8a3d48e5ce757c" ],
            "pattern" : "^.*$",
            "title" : "id",
            "type" : "string"
          },
          "type" : {
            "$id" : "#sp:create-campaign/filter/type",
            "default" : "",
            "examples" : [ "CAMPAIGN_FILTER" ],
            "pattern" : "^.*$",
            "title" : "type",
            "type" : "string"
          }
        },
        "title" : "filter",
        "type" : "object"
      },
      "id" : {
        "$id" : "#sp:create-campaign/id",
        "default" : "",
        "examples" : [ "2c918086719eec070171a7e3355a360a" ],
        "pattern" : "^.*$",
        "title" : "id",
        "type" : "string"
      },
      "name" : {
        "$id" : "#sp:create-campaign/name",
        "default" : "",
        "examples" : [ "Manager Review" ],
        "pattern" : "^.*$",
        "title" : "name",
        "type" : "string"
      },
      "recommendationsEnabled" : {
        "$id" : "#sp:create-campaign/recommendationsEnabled",
        "default" : true,
        "examples" : [ false ],
        "title" : "recommendationEnabled",
        "type" : "boolean"
      },
      "type" : {
        "$id" : "#sp:create-campaign/type",
        "default" : "",
        "examples" : [ "MANAGER" ],
        "pattern" : "^.*$",
        "title" : "type",
        "type" : "string"
      }
    },
    "title" : "sp:create-campaign",
    "type" : "object"
  },
  "exampleOutput" : "{}",
  "deprecated" : true,
  "isSimulationEnabled" : true,
  "name" : "Create Certification Campaign",
  "description" : "Generates a certification campaign.",
  "id" : "sp:create-campaign",
  "formFields" : [ {
    "helpText" : "The name to give to this certification campaign.",
    "name" : "name",
    "description" : "First value to compare",
    "label" : "Campaign Name",
    "type" : "text",
    "required" : false
  }, {
    "helpText" : "The name to give to this certification campaign.",
    "name" : "name",
    "description" : "First value to compare",
    "label" : "Campaign Name",
    "type" : "text",
    "required" : false
  } ],
  "deprecatedBy" : "2000-01-23T04:56:07.000+00:00",
  "type" : "ACTION",
  "isDynamicSchema" : false,
  "versionNumber" : 0
}, {
  "outputSchema" : {
    "definitions" : { },
    "properties" : {
      "autoRevokeAllowed" : {
        "$id" : "#sp:create-campaign/autoRevokeAllowed",
        "default" : true,
        "examples" : [ false ],
        "title" : "autoRevokeAllowed",
        "type" : "boolean"
      },
      "deadline" : {
        "$id" : "#sp:create-campaign/deadline",
        "default" : "",
        "examples" : [ "2020-12-25T06:00:00.468Z" ],
        "format" : "date-time",
        "pattern" : "^.*$",
        "title" : "deadline",
        "type" : "string"
      },
      "description" : {
        "$id" : "#sp:create-campaign/description",
        "default" : "",
        "examples" : [ "A review of everyone's access by their manager." ],
        "pattern" : "^.*$",
        "title" : "description",
        "type" : "string"
      },
      "emailNotificationEnabled" : {
        "$id" : "#sp:create-campaign/emailNotificationEnabled",
        "default" : true,
        "examples" : [ false ],
        "title" : "emailNotificationEnabled",
        "type" : "boolean"
      },
      "filter" : {
        "$id" : "#sp:create-campaign/filter",
        "properties" : {
          "id" : {
            "$id" : "#sp:create-campaign/filter/id",
            "default" : "",
            "examples" : [ "e0adaae69852e8fe8b8a3d48e5ce757c" ],
            "pattern" : "^.*$",
            "title" : "id",
            "type" : "string"
          },
          "type" : {
            "$id" : "#sp:create-campaign/filter/type",
            "default" : "",
            "examples" : [ "CAMPAIGN_FILTER" ],
            "pattern" : "^.*$",
            "title" : "type",
            "type" : "string"
          }
        },
        "title" : "filter",
        "type" : "object"
      },
      "id" : {
        "$id" : "#sp:create-campaign/id",
        "default" : "",
        "examples" : [ "2c918086719eec070171a7e3355a360a" ],
        "pattern" : "^.*$",
        "title" : "id",
        "type" : "string"
      },
      "name" : {
        "$id" : "#sp:create-campaign/name",
        "default" : "",
        "examples" : [ "Manager Review" ],
        "pattern" : "^.*$",
        "title" : "name",
        "type" : "string"
      },
      "recommendationsEnabled" : {
        "$id" : "#sp:create-campaign/recommendationsEnabled",
        "default" : true,
        "examples" : [ false ],
        "title" : "recommendationEnabled",
        "type" : "boolean"
      },
      "type" : {
        "$id" : "#sp:create-campaign/type",
        "default" : "",
        "examples" : [ "MANAGER" ],
        "pattern" : "^.*$",
        "title" : "type",
        "type" : "string"
      }
    },
    "title" : "sp:create-campaign",
    "type" : "object"
  },
  "exampleOutput" : "{}",
  "deprecated" : true,
  "isSimulationEnabled" : true,
  "name" : "Create Certification Campaign",
  "description" : "Generates a certification campaign.",
  "id" : "sp:create-campaign",
  "formFields" : [ {
    "helpText" : "The name to give to this certification campaign.",
    "name" : "name",
    "description" : "First value to compare",
    "label" : "Campaign Name",
    "type" : "text",
    "required" : false
  }, {
    "helpText" : "The name to give to this certification campaign.",
    "name" : "name",
    "description" : "First value to compare",
    "label" : "Campaign Name",
    "type" : "text",
    "required" : false
  } ],
  "deprecatedBy" : "2000-01-23T04:56:07.000+00:00",
  "type" : "ACTION",
  "isDynamicSchema" : false,
  "versionNumber" : 0
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const filters : string = "id eq "sp:create-campaign""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional) (default to undefined)

try {
    const val = await workflowsBetaApi.listWorkflowLibraryActions();
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.listWorkflowLibraryActions(limit, offset, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listWorkflowLibraryOperators

> Array&lt;WorkflowLibraryOperatorBeta&gt; listWorkflowLibraryOperators()

List Workflow Library Operators

This lists the workflow operators available to you

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;WorkflowLibraryOperatorBeta&gt;**](../Models/WorkflowLibraryOperatorBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

[ {
  "deprecated" : true,
  "isSimulationEnabled" : true,
  "name" : "Compare Boolean Values",
  "description" : "Compare two boolean values and decide what happens based on the result.",
  "id" : "sp:compare-boolean",
  "deprecatedBy" : "2000-01-23T04:56:07.000+00:00",
  "formFields" : [ {
    "description" : "Enter the JSONPath to a value from the input to compare to Variable B.",
    "helpText" : "",
    "label" : "Variable A",
    "name" : "variableA.$",
    "required" : true,
    "type" : "text"
  }, {
    "helpText" : "Select an operation.",
    "label" : "Operation",
    "name" : "operator",
    "options" : [ {
      "label" : "Equals",
      "value" : "BooleanEquals"
    } ],
    "required" : true,
    "type" : "select"
  }, {
    "description" : "Enter the JSONPath to a value from the input to compare to Variable A.",
    "helpText" : "",
    "label" : "Variable B",
    "name" : "variableB.$",
    "required" : false,
    "type" : "text"
  }, {
    "description" : "Enter True or False.",
    "helpText" : "",
    "label" : "Variable B",
    "name" : "variableB",
    "required" : false,
    "type" : "text"
  } ],
  "type" : "OPERATOR",
  "isDynamicSchema" : false
}, {
  "deprecated" : true,
  "isSimulationEnabled" : true,
  "name" : "Compare Boolean Values",
  "description" : "Compare two boolean values and decide what happens based on the result.",
  "id" : "sp:compare-boolean",
  "deprecatedBy" : "2000-01-23T04:56:07.000+00:00",
  "formFields" : [ {
    "description" : "Enter the JSONPath to a value from the input to compare to Variable B.",
    "helpText" : "",
    "label" : "Variable A",
    "name" : "variableA.$",
    "required" : true,
    "type" : "text"
  }, {
    "helpText" : "Select an operation.",
    "label" : "Operation",
    "name" : "operator",
    "options" : [ {
      "label" : "Equals",
      "value" : "BooleanEquals"
    } ],
    "required" : true,
    "type" : "select"
  }, {
    "description" : "Enter the JSONPath to a value from the input to compare to Variable A.",
    "helpText" : "",
    "label" : "Variable B",
    "name" : "variableB.$",
    "required" : false,
    "type" : "text"
  }, {
    "description" : "Enter True or False.",
    "helpText" : "",
    "label" : "Variable B",
    "name" : "variableB",
    "required" : false,
    "type" : "text"
  } ],
  "type" : "OPERATOR",
  "isDynamicSchema" : false
} ]



try {
    const val = await workflowsBetaApi.listWorkflowLibraryOperators();
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.listWorkflowLibraryOperators();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listWorkflowLibraryTriggers

> Array&lt;WorkflowLibraryTriggerBeta&gt; listWorkflowLibraryTriggers(limit, offset, filters)

List Workflow Library Triggers

This lists the workflow triggers available to you

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;WorkflowLibraryTriggerBeta&gt;**](../Models/WorkflowLibraryTriggerBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

[ {
  "outputSchema" : "{}",
  "deprecated" : true,
  "isSimulationEnabled" : true,
  "name" : "Identity Attributes Changed",
  "description" : "One or more identity attributes changed.",
  "id" : "idn:identity-attributes-changed",
  "deprecatedBy" : "2000-01-23T04:56:07.000+00:00",
  "formFields" : [ ],
  "type" : "EVENT",
  "isDynamicSchema" : false,
  "inputExample" : {
    "changes" : [ {
      "attribute" : "department",
      "newValue" : "marketing",
      "oldValue" : "sales"
    }, {
      "attribute" : "manager",
      "newValue" : {
        "id" : "ee769173319b41d19ccec6c235423236c",
        "name" : "mean.guy",
        "type" : "IDENTITY"
      },
      "oldValue" : {
        "id" : "ee769173319b41d19ccec6c235423237b",
        "name" : "nice.guy",
        "type" : "IDENTITY"
      }
    }, {
      "attribute" : "email",
      "newValue" : "john.doe@gmail.com",
      "oldValue" : "john.doe@hotmail.com"
    } ],
    "identity" : {
      "id" : "ee769173319b41d19ccec6cea52f237b",
      "name" : "john.doe",
      "type" : "IDENTITY"
    }
  }
}, {
  "outputSchema" : "{}",
  "deprecated" : true,
  "isSimulationEnabled" : true,
  "name" : "Identity Attributes Changed",
  "description" : "One or more identity attributes changed.",
  "id" : "idn:identity-attributes-changed",
  "deprecatedBy" : "2000-01-23T04:56:07.000+00:00",
  "formFields" : [ ],
  "type" : "EVENT",
  "isDynamicSchema" : false,
  "inputExample" : {
    "changes" : [ {
      "attribute" : "department",
      "newValue" : "marketing",
      "oldValue" : "sales"
    }, {
      "attribute" : "manager",
      "newValue" : {
        "id" : "ee769173319b41d19ccec6c235423236c",
        "name" : "mean.guy",
        "type" : "IDENTITY"
      },
      "oldValue" : {
        "id" : "ee769173319b41d19ccec6c235423237b",
        "name" : "nice.guy",
        "type" : "IDENTITY"
      }
    }, {
      "attribute" : "email",
      "newValue" : "john.doe@gmail.com",
      "oldValue" : "john.doe@hotmail.com"
    } ],
    "identity" : {
      "id" : "ee769173319b41d19ccec6cea52f237b",
      "name" : "john.doe",
      "type" : "IDENTITY"
    }
  }
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const filters : string = "id eq "idn:identity-attributes-changed""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* (optional) (default to undefined)

try {
    const val = await workflowsBetaApi.listWorkflowLibraryTriggers();
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.listWorkflowLibraryTriggers(limit, offset, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listWorkflows

> Array&lt;WorkflowBeta&gt; listWorkflows()

List Workflows

List all workflows in the tenant.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;WorkflowBeta&gt;**](../Models/WorkflowBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

[ {
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "creator" : {
    "name" : "Michael Michaels",
    "id" : "2c7180a46faadee4016fb4e018c20642",
    "type" : "IDENTITY"
  },
  "created" : "2022-01-10T16:06:16.636381447Z",
  "description" : "Send an email to the identity who's attributes changed.",
  "trigger" : {
    "displayName" : "displayName",
    "attributes" : {
      "description" : "description",
      "id" : "idn:identity-attributes-changed",
      "filter.$" : "$.changes[?(@.attribute == 'manager')]"
    },
    "type" : "EVENT"
  },
  "enabled" : false,
  "name" : "Send Email",
  "modified" : "2023-12-05T15:18:27.699132301Z",
  "executionCount" : 2,
  "modifiedBy" : {
    "name" : "Thomas Edison",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "definition" : {
    "start" : "Send Email Test",
    "steps" : {
      "Send Email" : {
        "actionId" : "sp:send-email",
        "attributes" : {
          "body" : "This is a test",
          "from" : "sailpoint@sailpoint.com",
          "recipientId.$" : "$.identity.id",
          "subject" : "test"
        },
        "nextStep" : "success",
        "type" : "ACTION"
      },
      "success" : {
        "type" : "success"
      }
    }
  },
  "id" : "d201c5e9-d37b-4aff-af14-66414f39d569",
  "failureCount" : 0
}, {
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "creator" : {
    "name" : "Michael Michaels",
    "id" : "2c7180a46faadee4016fb4e018c20642",
    "type" : "IDENTITY"
  },
  "created" : "2022-01-10T16:06:16.636381447Z",
  "description" : "Send an email to the identity who's attributes changed.",
  "trigger" : {
    "displayName" : "displayName",
    "attributes" : {
      "description" : "description",
      "id" : "idn:identity-attributes-changed",
      "filter.$" : "$.changes[?(@.attribute == 'manager')]"
    },
    "type" : "EVENT"
  },
  "enabled" : false,
  "name" : "Send Email",
  "modified" : "2023-12-05T15:18:27.699132301Z",
  "executionCount" : 2,
  "modifiedBy" : {
    "name" : "Thomas Edison",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "definition" : {
    "start" : "Send Email Test",
    "steps" : {
      "Send Email" : {
        "actionId" : "sp:send-email",
        "attributes" : {
          "body" : "This is a test",
          "from" : "sailpoint@sailpoint.com",
          "recipientId.$" : "$.identity.id",
          "subject" : "test"
        },
        "nextStep" : "success",
        "type" : "ACTION"
      },
      "success" : {
        "type" : "success"
      }
    }
  },
  "id" : "d201c5e9-d37b-4aff-af14-66414f39d569",
  "failureCount" : 0
} ]



try {
    const val = await workflowsBetaApi.listWorkflows();
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.listWorkflows();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchWorkflow

> WorkflowBeta patchWorkflow(id, jsonPatchOperationBeta)

Patch Workflow

Partially update an existing Workflow using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Id of the Workflow | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | 

### Return type

[**WorkflowBeta**](../Models/WorkflowBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

{
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "creator" : {
    "name" : "Michael Michaels",
    "id" : "2c7180a46faadee4016fb4e018c20642",
    "type" : "IDENTITY"
  },
  "created" : "2022-01-10T16:06:16.636381447Z",
  "description" : "Send an email to the identity who's attributes changed.",
  "trigger" : {
    "displayName" : "displayName",
    "attributes" : {
      "description" : "description",
      "id" : "idn:identity-attributes-changed",
      "filter.$" : "$.changes[?(@.attribute == 'manager')]"
    },
    "type" : "EVENT"
  },
  "enabled" : false,
  "name" : "Send Email",
  "modified" : "2023-12-05T15:18:27.699132301Z",
  "executionCount" : 2,
  "modifiedBy" : {
    "name" : "Thomas Edison",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "definition" : {
    "start" : "Send Email Test",
    "steps" : {
      "Send Email" : {
        "actionId" : "sp:send-email",
        "attributes" : {
          "body" : "This is a test",
          "from" : "sailpoint@sailpoint.com",
          "recipientId.$" : "$.identity.id",
          "subject" : "test"
        },
        "nextStep" : "success",
        "type" : "ACTION"
      },
      "success" : {
        "type" : "success"
      }
    }
  },
  "id" : "d201c5e9-d37b-4aff-af14-66414f39d569",
  "failureCount" : 0
}


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Id of the Workflow (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/name, value=Send Email}, {op=replace, path=/owner, value={type=IDENTITY, id=2c91808568c529c60168cca6f90c1313, name=William Wilson}}, {op=replace, path=/description, value=Send an email to the identity who's attributes changed.}, {op=replace, path=/enabled, value=false}, {op=replace, path=/definition, value={start=Send Email Test, steps={Send Email={actionId=sp:send-email, attributes={body=This is a test, from=sailpoint@sailpoint.com, recipientId.$=$.identity.id, subject=test}, nextStep=success, selectResult=null, type=action}, success={type=success}}}}, {op=replace, path=/trigger, value={type=EVENT, attributes={id=idn:identity-attributes-changed}}}]; // 

try {
    const val = await workflowsBetaApi.patchWorkflow(id, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.patchWorkflow(id, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## postExternalExecuteWorkflow

> PostExternalExecuteWorkflow200ResponseBeta postExternalExecuteWorkflow(id, postExternalExecuteWorkflowRequestBeta)

Execute Workflow via External Trigger

This endpoint allows a service outside of IdentityNow to initiate a workflow that uses the \"External Trigger\" step.  The external service will invoke this endpoint with the input data it wants to send to the workflow in the body.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Id of the workflow | [default to undefined]
 **postExternalExecuteWorkflowRequestBeta** | [**PostExternalExecuteWorkflowRequestBeta**](../Models/PostExternalExecuteWorkflowRequestBeta.md)|  | [optional] 

### Return type

[**PostExternalExecuteWorkflow200ResponseBeta**](../Models/PostExternalExecuteWorkflow200ResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

{
  "workflowExecutionId" : "0e11cefa-96e7-4b67-90d0-065bc1da5753",
  "message" : "Workflow was not executed externally. Check enabled flag on workflow definition"
}


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Id of the workflow (default to undefined)
const postExternalExecuteWorkflowRequestBeta : PostExternalExecuteWorkflowRequestBeta = 

try {
    const val = await workflowsBetaApi.postExternalExecuteWorkflow(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.postExternalExecuteWorkflow(id, postExternalExecuteWorkflowRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## postWorkflowExternalTrigger

> WorkflowOAuthClientBeta postWorkflowExternalTrigger(id)

Generate External Trigger OAuth Client

Create OAuth client ID, client secret, and callback URL for use in an external trigger.  External triggers will need this information to generate an access token to authenticate to the callback URL and submit a trigger payload that will initiate the workflow.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Id of the workflow | [default to undefined]

### Return type

[**WorkflowOAuthClientBeta**](../Models/WorkflowOAuthClientBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

{
  "id" : "1a58c03a6bf64dc2876f6988c6e2c7b7",
  "secret" : "00cc24a7fe810fe06a7cb38bc168ae104d703c7abb296f9944dc68e69ddb578b",
  "url" : "https://tenant.api.identitynow.com/beta/workflows/execute/external/c17bea3a-574d-453c-9e04-4365fbf5af0b"
}


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Id of the workflow (default to undefined)

try {
    const val = await workflowsBetaApi.postWorkflowExternalTrigger(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.postWorkflowExternalTrigger(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## testExternalExecuteWorkflow

> TestExternalExecuteWorkflow200ResponseBeta testExternalExecuteWorkflow(id, testExternalExecuteWorkflowRequestBeta)

Test Workflow via External Trigger

Validate a workflow with an \"External Trigger\" can receive input.  The response includes the input that the workflow received, which can be used to validate that the input is intact when it reaches the workflow.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Id of the workflow | [default to undefined]
 **testExternalExecuteWorkflowRequestBeta** | [**TestExternalExecuteWorkflowRequestBeta**](../Models/TestExternalExecuteWorkflowRequestBeta.md)|  | [optional] 

### Return type

[**TestExternalExecuteWorkflow200ResponseBeta**](../Models/TestExternalExecuteWorkflow200ResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

{
  "payload" : {
    "test" : "hello world"
  }
}


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Id of the workflow (default to undefined)
const testExternalExecuteWorkflowRequestBeta : TestExternalExecuteWorkflowRequestBeta = 

try {
    const val = await workflowsBetaApi.testExternalExecuteWorkflow(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.testExternalExecuteWorkflow(id, testExternalExecuteWorkflowRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## testWorkflow

> TestWorkflow200ResponseBeta testWorkflow(id, testWorkflowRequestBeta)

Test Workflow By Id

Test a workflow with the provided input data.  The input data should resemble the input that the trigger will send the workflow.  See the [event trigger documentation](https://developer.sailpoint.com/idn/docs/event-triggers/available) for an example input for the trigger that initiates this workflow. This endpoint will return an execution ID, which can be used to lookup more information about the execution using the `Get a Workflow Execution` endpoint. **This will cause a live run of the workflow, which could result in unintended modifications to your IDN tenant.**

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Id of the workflow | [default to undefined]
 **testWorkflowRequestBeta** | [**TestWorkflowRequestBeta**](../Models/TestWorkflowRequestBeta.md)|  | 

### Return type

[**TestWorkflow200ResponseBeta**](../Models/TestWorkflow200ResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi, TestWorkflowRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

{
  "workflowExecutionId" : "0e11cefa-96e7-4b67-90d0-065bc1da5753"
}


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Id of the workflow (default to undefined)
const testWorkflowRequestBeta : TestWorkflowRequestBeta = 

try {
    const val = await workflowsBetaApi.testWorkflow(id, testWorkflowRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.testWorkflow(id, testWorkflowRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateWorkflow

> WorkflowBeta updateWorkflow(id, workflowBodyBeta)

Update Workflow

Perform a full update of a workflow.  The updated workflow object is returned in the response.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Id of the Workflow | [default to undefined]
 **workflowBodyBeta** | [**WorkflowBodyBeta**](../Models/WorkflowBodyBeta.md)|  | 

### Return type

[**WorkflowBeta**](../Models/WorkflowBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkflowsBetaApi, WorkflowBodyBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workflowsBetaApi = new WorkflowsBetaApi(apiConfig);

{
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "creator" : {
    "name" : "Michael Michaels",
    "id" : "2c7180a46faadee4016fb4e018c20642",
    "type" : "IDENTITY"
  },
  "created" : "2022-01-10T16:06:16.636381447Z",
  "description" : "Send an email to the identity who's attributes changed.",
  "trigger" : {
    "displayName" : "displayName",
    "attributes" : {
      "description" : "description",
      "id" : "idn:identity-attributes-changed",
      "filter.$" : "$.changes[?(@.attribute == 'manager')]"
    },
    "type" : "EVENT"
  },
  "enabled" : false,
  "name" : "Send Email",
  "modified" : "2023-12-05T15:18:27.699132301Z",
  "executionCount" : 2,
  "modifiedBy" : {
    "name" : "Thomas Edison",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "definition" : {
    "start" : "Send Email Test",
    "steps" : {
      "Send Email" : {
        "actionId" : "sp:send-email",
        "attributes" : {
          "body" : "This is a test",
          "from" : "sailpoint@sailpoint.com",
          "recipientId.$" : "$.identity.id",
          "subject" : "test"
        },
        "nextStep" : "success",
        "type" : "ACTION"
      },
      "success" : {
        "type" : "success"
      }
    }
  },
  "id" : "d201c5e9-d37b-4aff-af14-66414f39d569",
  "failureCount" : 0
}


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Id of the Workflow (default to undefined)
const workflowBodyBeta : WorkflowBodyBeta = 

try {
    const val = await workflowsBetaApi.updateWorkflow(id, workflowBodyBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await workflowsBetaApi.updateWorkflow(id, workflowBodyBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

