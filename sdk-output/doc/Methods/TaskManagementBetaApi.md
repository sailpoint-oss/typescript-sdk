---
title: TaskManagementBetaApi
pagination_label: TaskManagementBetaApi
sidebar_label: TaskManagementBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'TaskManagementBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'TaskManagementBetaApi']
---

# TaskManagementBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPendingTaskHeaders**](TaskManagementBetaApi.md#getPendingTaskHeaders) | **HEAD** /task-status/pending-tasks | Retrieve Pending Task List Headers
[**getPendingTasks**](TaskManagementBetaApi.md#getPendingTasks) | **GET** /task-status/pending-tasks | Retrieve Pending Task Status List
[**getTaskStatus**](TaskManagementBetaApi.md#getTaskStatus) | **GET** /task-status/{id} | Get Task Status by ID
[**getTaskStatusList**](TaskManagementBetaApi.md#getTaskStatusList) | **GET** /task-status | Retrieve Task Status List
[**updateTaskStatus**](TaskManagementBetaApi.md#updateTaskStatus) | **PATCH** /task-status/{id} | Update Task Status by ID



## getPendingTaskHeaders

> getPendingTaskHeaders(offset, limit, count)

Retrieve Pending Task List Headers

Responds with headers only for list of task statuses for pending tasks.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaskManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taskManagementBetaApi = new TaskManagementBetaApi(apiConfig);

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


const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await taskManagementBetaApi.getPendingTaskHeaders();
    
    // Below is a request that includes all optional parameters      
    // const val = await taskManagementBetaApi.getPendingTaskHeaders(offset, limit, count);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getPendingTasks

> Array&lt;TaskStatusBeta&gt; getPendingTasks(offset, limit, count)

Retrieve Pending Task Status List

Retrieve a list of statuses for pending tasks. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;TaskStatusBeta&gt;**](../Models/TaskStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaskManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taskManagementBetaApi = new TaskManagementBetaApi(apiConfig);

[ {
  "taskDefinitionSummary" : {
    "parentName" : "Cloud Account Aggregation",
    "uniqueName" : "Cloud Account Aggregation",
    "executor" : "sailpoint.task.ServiceTaskExecutor",
    "description" : "Aggregates from the specified application.",
    "arguments" : {
      "key" : ""
    },
    "id" : "2c91808475b4334b0175e1dff64b63c5"
  },
  "created" : "2020-07-11T21:23:15Z",
  "description" : "A Really Big Task",
  "completed" : "2020-07-11T21:23:15Z",
  "percentComplete" : 100,
  "type" : "QUARTZ",
  "launched" : "2020-07-11T21:23:15Z",
  "target" : {
    "name" : "Active Directory [source]",
    "id" : "c6dc37bf508149b28ce5b7d90ca4bbf9",
    "type" : "APPLICATION"
  },
  "parentName" : "Parent Task",
  "uniqueName" : "Big Task",
  "modified" : "2020-07-11T21:23:15Z",
  "messages" : [ {
    "type" : "INFO",
    "parameters" : [ {
      "name" : "value"
    } ],
    "key" : "akey",
    "localizedText" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  }, {
    "type" : "INFO",
    "parameters" : [ {
      "name" : "value"
    } ],
    "key" : "akey",
    "localizedText" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  } ],
  "progress" : "Started",
  "returns" : [ {
    "name" : "label",
    "attributeName" : "identityCount"
  }, {
    "name" : "label",
    "attributeName" : "identityCount"
  } ],
  "attributes" : {
    "identityCount" : 0
  },
  "id" : "id12345",
  "completionStatus" : "SUCCESS",
  "launcher" : "sweep"
}, {
  "taskDefinitionSummary" : {
    "parentName" : "Cloud Account Aggregation",
    "uniqueName" : "Cloud Account Aggregation",
    "executor" : "sailpoint.task.ServiceTaskExecutor",
    "description" : "Aggregates from the specified application.",
    "arguments" : {
      "key" : ""
    },
    "id" : "2c91808475b4334b0175e1dff64b63c5"
  },
  "created" : "2020-07-11T21:23:15Z",
  "description" : "A Really Big Task",
  "completed" : "2020-07-11T21:23:15Z",
  "percentComplete" : 100,
  "type" : "QUARTZ",
  "launched" : "2020-07-11T21:23:15Z",
  "target" : {
    "name" : "Active Directory [source]",
    "id" : "c6dc37bf508149b28ce5b7d90ca4bbf9",
    "type" : "APPLICATION"
  },
  "parentName" : "Parent Task",
  "uniqueName" : "Big Task",
  "modified" : "2020-07-11T21:23:15Z",
  "messages" : [ {
    "type" : "INFO",
    "parameters" : [ {
      "name" : "value"
    } ],
    "key" : "akey",
    "localizedText" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  }, {
    "type" : "INFO",
    "parameters" : [ {
      "name" : "value"
    } ],
    "key" : "akey",
    "localizedText" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  } ],
  "progress" : "Started",
  "returns" : [ {
    "name" : "label",
    "attributeName" : "identityCount"
  }, {
    "name" : "label",
    "attributeName" : "identityCount"
  } ],
  "attributes" : {
    "identityCount" : 0
  },
  "id" : "id12345",
  "completionStatus" : "SUCCESS",
  "launcher" : "sweep"
} ]


const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await taskManagementBetaApi.getPendingTasks();
    
    // Below is a request that includes all optional parameters      
    // const val = await taskManagementBetaApi.getPendingTasks(offset, limit, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getTaskStatus

> TaskStatusBeta getTaskStatus(id)

Get Task Status by ID

Get task status by task ID. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Task ID. | [default to undefined]

### Return type

[**TaskStatusBeta**](../Models/TaskStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaskManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taskManagementBetaApi = new TaskManagementBetaApi(apiConfig);

{
  "taskDefinitionSummary" : {
    "parentName" : "Cloud Account Aggregation",
    "uniqueName" : "Cloud Account Aggregation",
    "executor" : "sailpoint.task.ServiceTaskExecutor",
    "description" : "Aggregates from the specified application.",
    "arguments" : {
      "key" : ""
    },
    "id" : "2c91808475b4334b0175e1dff64b63c5"
  },
  "created" : "2020-07-11T21:23:15Z",
  "description" : "A Really Big Task",
  "completed" : "2020-07-11T21:23:15Z",
  "percentComplete" : 100,
  "type" : "QUARTZ",
  "launched" : "2020-07-11T21:23:15Z",
  "target" : {
    "name" : "Active Directory [source]",
    "id" : "c6dc37bf508149b28ce5b7d90ca4bbf9",
    "type" : "APPLICATION"
  },
  "parentName" : "Parent Task",
  "uniqueName" : "Big Task",
  "modified" : "2020-07-11T21:23:15Z",
  "messages" : [ {
    "type" : "INFO",
    "parameters" : [ {
      "name" : "value"
    } ],
    "key" : "akey",
    "localizedText" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  }, {
    "type" : "INFO",
    "parameters" : [ {
      "name" : "value"
    } ],
    "key" : "akey",
    "localizedText" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  } ],
  "progress" : "Started",
  "returns" : [ {
    "name" : "label",
    "attributeName" : "identityCount"
  }, {
    "name" : "label",
    "attributeName" : "identityCount"
  } ],
  "attributes" : {
    "identityCount" : 0
  },
  "id" : "id12345",
  "completionStatus" : "SUCCESS",
  "launcher" : "sweep"
}


const id : string = "00eebcf881994e419d72e757fd30dc0e"; // Task ID. (default to undefined)

try {
    const val = await taskManagementBetaApi.getTaskStatus(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await taskManagementBetaApi.getTaskStatus(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getTaskStatusList

> Array&lt;TaskStatusBeta&gt; getTaskStatusList(limit, offset, count, filters, sorters)

Retrieve Task Status List

Use this endpoint to get a list of statuses for **completed** tasks. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned. To get a list of statuses for **in-progress** tasks, please use the [retrieve pending task status list](https://developer.sailpoint.com/docs/api/beta/get-pending-tasks) endpoint. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in*  **type**: *eq, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** | [optional] [default to undefined]

### Return type

[**Array&lt;TaskStatusBeta&gt;**](../Models/TaskStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaskManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taskManagementBetaApi = new TaskManagementBetaApi(apiConfig);

[ {
  "taskDefinitionSummary" : {
    "parentName" : "Cloud Account Aggregation",
    "uniqueName" : "Cloud Account Aggregation",
    "executor" : "sailpoint.task.ServiceTaskExecutor",
    "description" : "Aggregates from the specified application.",
    "arguments" : {
      "key" : ""
    },
    "id" : "2c91808475b4334b0175e1dff64b63c5"
  },
  "created" : "2020-07-11T21:23:15Z",
  "description" : "A Really Big Task",
  "completed" : "2020-07-11T21:23:15Z",
  "percentComplete" : 100,
  "type" : "QUARTZ",
  "launched" : "2020-07-11T21:23:15Z",
  "target" : {
    "name" : "Active Directory [source]",
    "id" : "c6dc37bf508149b28ce5b7d90ca4bbf9",
    "type" : "APPLICATION"
  },
  "parentName" : "Parent Task",
  "uniqueName" : "Big Task",
  "modified" : "2020-07-11T21:23:15Z",
  "messages" : [ {
    "type" : "INFO",
    "parameters" : [ {
      "name" : "value"
    } ],
    "key" : "akey",
    "localizedText" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  }, {
    "type" : "INFO",
    "parameters" : [ {
      "name" : "value"
    } ],
    "key" : "akey",
    "localizedText" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  } ],
  "progress" : "Started",
  "returns" : [ {
    "name" : "label",
    "attributeName" : "identityCount"
  }, {
    "name" : "label",
    "attributeName" : "identityCount"
  } ],
  "attributes" : {
    "identityCount" : 0
  },
  "id" : "id12345",
  "completionStatus" : "SUCCESS",
  "launcher" : "sweep"
}, {
  "taskDefinitionSummary" : {
    "parentName" : "Cloud Account Aggregation",
    "uniqueName" : "Cloud Account Aggregation",
    "executor" : "sailpoint.task.ServiceTaskExecutor",
    "description" : "Aggregates from the specified application.",
    "arguments" : {
      "key" : ""
    },
    "id" : "2c91808475b4334b0175e1dff64b63c5"
  },
  "created" : "2020-07-11T21:23:15Z",
  "description" : "A Really Big Task",
  "completed" : "2020-07-11T21:23:15Z",
  "percentComplete" : 100,
  "type" : "QUARTZ",
  "launched" : "2020-07-11T21:23:15Z",
  "target" : {
    "name" : "Active Directory [source]",
    "id" : "c6dc37bf508149b28ce5b7d90ca4bbf9",
    "type" : "APPLICATION"
  },
  "parentName" : "Parent Task",
  "uniqueName" : "Big Task",
  "modified" : "2020-07-11T21:23:15Z",
  "messages" : [ {
    "type" : "INFO",
    "parameters" : [ {
      "name" : "value"
    } ],
    "key" : "akey",
    "localizedText" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  }, {
    "type" : "INFO",
    "parameters" : [ {
      "name" : "value"
    } ],
    "key" : "akey",
    "localizedText" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  } ],
  "progress" : "Started",
  "returns" : [ {
    "name" : "label",
    "attributeName" : "identityCount"
  }, {
    "name" : "label",
    "attributeName" : "identityCount"
  } ],
  "attributes" : {
    "identityCount" : 0
  },
  "id" : "id12345",
  "completionStatus" : "SUCCESS",
  "launcher" : "sweep"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "completionStatus eq "Success""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in*  **type**: *eq, in* (optional) (default to undefined)
const sorters : string = "-created"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** (optional) (default to undefined)

try {
    const val = await taskManagementBetaApi.getTaskStatusList();
    
    // Below is a request that includes all optional parameters      
    // const val = await taskManagementBetaApi.getTaskStatusList(limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateTaskStatus

> TaskStatusBeta updateTaskStatus(id, jsonPatchOperationBeta)

Update Task Status by ID

Update a current task status by task ID. Use this API to clear a pending task by updating the completionStatus and completed attributes.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Task ID. | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| The JSONPatch payload used to update the object. | 

### Return type

[**TaskStatusBeta**](../Models/TaskStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, TaskManagementBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const taskManagementBetaApi = new TaskManagementBetaApi(apiConfig);

{
  "taskDefinitionSummary" : {
    "parentName" : "Cloud Account Aggregation",
    "uniqueName" : "Cloud Account Aggregation",
    "executor" : "sailpoint.task.ServiceTaskExecutor",
    "description" : "Aggregates from the specified application.",
    "arguments" : {
      "key" : ""
    },
    "id" : "2c91808475b4334b0175e1dff64b63c5"
  },
  "created" : "2020-07-11T21:23:15Z",
  "description" : "A Really Big Task",
  "completed" : "2020-07-11T21:23:15Z",
  "percentComplete" : 100,
  "type" : "QUARTZ",
  "launched" : "2020-07-11T21:23:15Z",
  "target" : {
    "name" : "Active Directory [source]",
    "id" : "c6dc37bf508149b28ce5b7d90ca4bbf9",
    "type" : "APPLICATION"
  },
  "parentName" : "Parent Task",
  "uniqueName" : "Big Task",
  "modified" : "2020-07-11T21:23:15Z",
  "messages" : [ {
    "type" : "INFO",
    "parameters" : [ {
      "name" : "value"
    } ],
    "key" : "akey",
    "localizedText" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  }, {
    "type" : "INFO",
    "parameters" : [ {
      "name" : "value"
    } ],
    "key" : "akey",
    "localizedText" : {
      "locale" : "An error has occurred!",
      "message" : "Error has occurred!"
    }
  } ],
  "progress" : "Started",
  "returns" : [ {
    "name" : "label",
    "attributeName" : "identityCount"
  }, {
    "name" : "label",
    "attributeName" : "identityCount"
  } ],
  "attributes" : {
    "identityCount" : 0
  },
  "id" : "id12345",
  "completionStatus" : "SUCCESS",
  "launcher" : "sweep"
}


const id : string = "00eebcf881994e419d72e757fd30dc0e"; // Task ID. (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = ; // The JSONPatch payload used to update the object.

try {
    const val = await taskManagementBetaApi.updateTaskStatus(id, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await taskManagementBetaApi.updateTaskStatus(id, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

