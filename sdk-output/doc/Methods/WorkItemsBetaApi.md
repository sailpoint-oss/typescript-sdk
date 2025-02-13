---
title: WorkItemsBetaApi
pagination_label: WorkItemsBetaApi
sidebar_label: WorkItemsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'WorkItemsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'WorkItemsBetaApi']
---

# WorkItemsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveApprovalItem**](WorkItemsBetaApi.md#approveApprovalItem) | **POST** /work-items/{id}/approve/{approvalItemId} | Approve an Approval Item
[**approveApprovalItemsInBulk**](WorkItemsBetaApi.md#approveApprovalItemsInBulk) | **POST** /work-items/bulk-approve/{id} | Bulk approve Approval Items
[**completeWorkItem**](WorkItemsBetaApi.md#completeWorkItem) | **POST** /work-items/{id} | Complete a Work Item
[**forwardWorkItem**](WorkItemsBetaApi.md#forwardWorkItem) | **POST** /work-items/{id}/forward | Forward a Work Item
[**getCompletedWorkItems**](WorkItemsBetaApi.md#getCompletedWorkItems) | **GET** /work-items/completed | Completed Work Items
[**getCountCompletedWorkItems**](WorkItemsBetaApi.md#getCountCompletedWorkItems) | **GET** /work-items/completed/count | Count Completed Work Items
[**getCountWorkItems**](WorkItemsBetaApi.md#getCountWorkItems) | **GET** /work-items/count | Count Work Items
[**getWorkItem**](WorkItemsBetaApi.md#getWorkItem) | **GET** /work-items/{id} | Get a Work Item
[**getWorkItemsSummary**](WorkItemsBetaApi.md#getWorkItemsSummary) | **GET** /work-items/summary | Work Items Summary
[**listWorkItems**](WorkItemsBetaApi.md#listWorkItems) | **GET** /work-items | List Work Items
[**rejectApprovalItem**](WorkItemsBetaApi.md#rejectApprovalItem) | **POST** /work-items/{id}/reject/{approvalItemId} | Reject an Approval Item
[**rejectApprovalItemsInBulk**](WorkItemsBetaApi.md#rejectApprovalItemsInBulk) | **POST** /work-items/bulk-reject/{id} | Bulk reject Approval Items
[**submitAccountSelection**](WorkItemsBetaApi.md#submitAccountSelection) | **POST** /work-items/{id}/submit-account-selection | Submit Account Selections



## approveApprovalItem

> WorkItemsBeta approveApprovalItem(id, approvalItemId)

Approve an Approval Item

This API approves an Approval Item. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]
 **approvalItemId** | **string**| The ID of the approval item. | [default to undefined]

### Return type

[**WorkItemsBeta**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

{
  "requesterDisplayName" : "John Smith",
  "requesterId" : "2c9180835d2e5168015d32f890ca1581",
  "created" : "2017-07-11T18:45:37.098Z",
  "approvalItems" : [ {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  }, {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  } ],
  "description" : "Create account on source 'AD'",
  "completed" : "2018-10-19T13:49:37.385Z",
  "ownerId" : "2c9180835d2e5168015d32f890ca1581",
  "type" : "Generic",
  "numItems" : 19,
  "ownerName" : "Jason Smith",
  "form" : {
    "subtitle" : "Please select from the following",
    "name" : "AccountSelection Form",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "title" : "Account Selection for John.Doe",
    "targetUser" : "Jane.Doe",
    "sections" : [ {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    }, {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    } ]
  },
  "remediationItems" : [ {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  }, {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  } ],
  "name" : "Account Create",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "state" : "Pending",
  "errors" : [ "The work item ID that was specified was not found." ]
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item (default to undefined)
const approvalItemId : string = "1211bcaa32112bcef6122adb21cef1ac"; // The ID of the approval item. (default to undefined)

try {
    const val = await workItemsBetaApi.approveApprovalItem(id, approvalItemId);
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.approveApprovalItem(id, approvalItemId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## approveApprovalItemsInBulk

> WorkItemsBeta approveApprovalItemsInBulk(id)

Bulk approve Approval Items

This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]

### Return type

[**WorkItemsBeta**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

{
  "requesterDisplayName" : "John Smith",
  "requesterId" : "2c9180835d2e5168015d32f890ca1581",
  "created" : "2017-07-11T18:45:37.098Z",
  "approvalItems" : [ {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  }, {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  } ],
  "description" : "Create account on source 'AD'",
  "completed" : "2018-10-19T13:49:37.385Z",
  "ownerId" : "2c9180835d2e5168015d32f890ca1581",
  "type" : "Generic",
  "numItems" : 19,
  "ownerName" : "Jason Smith",
  "form" : {
    "subtitle" : "Please select from the following",
    "name" : "AccountSelection Form",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "title" : "Account Selection for John.Doe",
    "targetUser" : "Jane.Doe",
    "sections" : [ {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    }, {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    } ]
  },
  "remediationItems" : [ {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  }, {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  } ],
  "name" : "Account Create",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "state" : "Pending",
  "errors" : [ "The work item ID that was specified was not found." ]
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item (default to undefined)

try {
    const val = await workItemsBetaApi.approveApprovalItemsInBulk(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.approveApprovalItemsInBulk(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## completeWorkItem

> WorkItemsBeta completeWorkItem(id)

Complete a Work Item

This API completes a work item. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]

### Return type

[**WorkItemsBeta**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

{
  "requesterDisplayName" : "John Smith",
  "requesterId" : "2c9180835d2e5168015d32f890ca1581",
  "created" : "2017-07-11T18:45:37.098Z",
  "approvalItems" : [ {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  }, {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  } ],
  "description" : "Create account on source 'AD'",
  "completed" : "2018-10-19T13:49:37.385Z",
  "ownerId" : "2c9180835d2e5168015d32f890ca1581",
  "type" : "Generic",
  "numItems" : 19,
  "ownerName" : "Jason Smith",
  "form" : {
    "subtitle" : "Please select from the following",
    "name" : "AccountSelection Form",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "title" : "Account Selection for John.Doe",
    "targetUser" : "Jane.Doe",
    "sections" : [ {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    }, {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    } ]
  },
  "remediationItems" : [ {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  }, {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  } ],
  "name" : "Account Create",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "state" : "Pending",
  "errors" : [ "The work item ID that was specified was not found." ]
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item (default to undefined)

try {
    const val = await workItemsBetaApi.completeWorkItem(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.completeWorkItem(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## forwardWorkItem

> forwardWorkItem(id, workItemForwardBeta)

Forward a Work Item

This API forwards a work item to a new owner. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]
 **workItemForwardBeta** | [**WorkItemForwardBeta**](../Models/WorkItemForwardBeta.md)|  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi, WorkItemForwardBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

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


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item (default to undefined)
const workItemForwardBeta : WorkItemForwardBeta = 

try {
    const val = await workItemsBetaApi.forwardWorkItem(id, workItemForwardBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.forwardWorkItem(id, workItemForwardBeta);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getCompletedWorkItems

> Array&lt;WorkItemsBeta&gt; getCompletedWorkItems(ownerId, limit, offset, count)

Completed Work Items

This gets a collection of completed work items belonging to either the specified user(admin required), or the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;WorkItemsBeta&gt;**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

[ {
  "requesterDisplayName" : "John Smith",
  "requesterId" : "2c9180835d2e5168015d32f890ca1581",
  "created" : "2017-07-11T18:45:37.098Z",
  "approvalItems" : [ {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  }, {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  } ],
  "description" : "Create account on source 'AD'",
  "completed" : "2018-10-19T13:49:37.385Z",
  "ownerId" : "2c9180835d2e5168015d32f890ca1581",
  "type" : "Generic",
  "numItems" : 19,
  "ownerName" : "Jason Smith",
  "form" : {
    "subtitle" : "Please select from the following",
    "name" : "AccountSelection Form",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "title" : "Account Selection for John.Doe",
    "targetUser" : "Jane.Doe",
    "sections" : [ {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    }, {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    } ]
  },
  "remediationItems" : [ {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  }, {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  } ],
  "name" : "Account Create",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "state" : "Pending",
  "errors" : [ "The work item ID that was specified was not found." ]
}, {
  "requesterDisplayName" : "John Smith",
  "requesterId" : "2c9180835d2e5168015d32f890ca1581",
  "created" : "2017-07-11T18:45:37.098Z",
  "approvalItems" : [ {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  }, {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  } ],
  "description" : "Create account on source 'AD'",
  "completed" : "2018-10-19T13:49:37.385Z",
  "ownerId" : "2c9180835d2e5168015d32f890ca1581",
  "type" : "Generic",
  "numItems" : 19,
  "ownerName" : "Jason Smith",
  "form" : {
    "subtitle" : "Please select from the following",
    "name" : "AccountSelection Form",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "title" : "Account Selection for John.Doe",
    "targetUser" : "Jane.Doe",
    "sections" : [ {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    }, {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    } ]
  },
  "remediationItems" : [ {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  }, {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  } ],
  "name" : "Account Create",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "state" : "Pending",
  "errors" : [ "The work item ID that was specified was not found." ]
} ]


const ownerId : string = "ownerId_example"; // The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional) (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await workItemsBetaApi.getCompletedWorkItems();
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.getCompletedWorkItems(ownerId, limit, offset, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getCountCompletedWorkItems

> Array&lt;WorkItemsCountBeta&gt; getCountCompletedWorkItems(ownerId)

Count Completed Work Items

This gets a count of completed work items belonging to either the specified user(admin required), or the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| ID of the work item owner. | [optional] [default to undefined]

### Return type

[**Array&lt;WorkItemsCountBeta&gt;**](../Models/WorkItemsCountBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

[ {
  "count" : 29
}, {
  "count" : 29
} ]


const ownerId : string = "ownerId_example"; // ID of the work item owner. (optional) (default to undefined)

try {
    const val = await workItemsBetaApi.getCountCompletedWorkItems();
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.getCountCompletedWorkItems(ownerId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getCountWorkItems

> WorkItemsCountBeta getCountWorkItems(ownerId)

Count Work Items

This gets a count of work items belonging to either the specified user(admin required), or the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| ID of the work item owner. | [optional] [default to undefined]

### Return type

[**WorkItemsCountBeta**](../Models/WorkItemsCountBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

{
  "count" : 29
}


const ownerId : string = "ownerId_example"; // ID of the work item owner. (optional) (default to undefined)

try {
    const val = await workItemsBetaApi.getCountWorkItems();
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.getCountWorkItems(ownerId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getWorkItem

> Array&lt;WorkItemsBeta&gt; getWorkItem(id, ownerId)

Get a Work Item

This gets the details of a Work Item belonging to either the specified user(admin required), or the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the work item. | [default to undefined]
 **ownerId** | **string**| ID of the work item owner. | [optional] [default to undefined]

### Return type

[**Array&lt;WorkItemsBeta&gt;**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

[ {
  "requesterDisplayName" : "John Smith",
  "requesterId" : "2c9180835d2e5168015d32f890ca1581",
  "created" : "2017-07-11T18:45:37.098Z",
  "approvalItems" : [ {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  }, {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  } ],
  "description" : "Create account on source 'AD'",
  "completed" : "2018-10-19T13:49:37.385Z",
  "ownerId" : "2c9180835d2e5168015d32f890ca1581",
  "type" : "Generic",
  "numItems" : 19,
  "ownerName" : "Jason Smith",
  "form" : {
    "subtitle" : "Please select from the following",
    "name" : "AccountSelection Form",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "title" : "Account Selection for John.Doe",
    "targetUser" : "Jane.Doe",
    "sections" : [ {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    }, {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    } ]
  },
  "remediationItems" : [ {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  }, {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  } ],
  "name" : "Account Create",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "state" : "Pending",
  "errors" : [ "The work item ID that was specified was not found." ]
}, {
  "requesterDisplayName" : "John Smith",
  "requesterId" : "2c9180835d2e5168015d32f890ca1581",
  "created" : "2017-07-11T18:45:37.098Z",
  "approvalItems" : [ {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  }, {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  } ],
  "description" : "Create account on source 'AD'",
  "completed" : "2018-10-19T13:49:37.385Z",
  "ownerId" : "2c9180835d2e5168015d32f890ca1581",
  "type" : "Generic",
  "numItems" : 19,
  "ownerName" : "Jason Smith",
  "form" : {
    "subtitle" : "Please select from the following",
    "name" : "AccountSelection Form",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "title" : "Account Selection for John.Doe",
    "targetUser" : "Jane.Doe",
    "sections" : [ {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    }, {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    } ]
  },
  "remediationItems" : [ {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  }, {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  } ],
  "name" : "Account Create",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "state" : "Pending",
  "errors" : [ "The work item ID that was specified was not found." ]
} ]


const id : string = "id_example"; // ID of the work item. (default to undefined)
const ownerId : string = "ownerId_example"; // ID of the work item owner. (optional) (default to undefined)

try {
    const val = await workItemsBetaApi.getWorkItem(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.getWorkItem(id, ownerId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getWorkItemsSummary

> WorkItemsSummaryBeta getWorkItemsSummary(ownerId)

Work Items Summary

This gets a summary of work items belonging to either the specified user(admin required), or the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| ID of the work item owner. | [optional] [default to undefined]

### Return type

[**WorkItemsSummaryBeta**](../Models/WorkItemsSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

{
  "total" : 30,
  "completed" : 1,
  "open" : 29
}


const ownerId : string = "ownerId_example"; // ID of the work item owner. (optional) (default to undefined)

try {
    const val = await workItemsBetaApi.getWorkItemsSummary();
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.getWorkItemsSummary(ownerId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listWorkItems

> Array&lt;WorkItemsBeta&gt; listWorkItems(limit, offset, count, ownerId)

List Work Items

This gets a collection of work items belonging to either the specified user(admin required), or the current user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **ownerId** | **string**| ID of the work item owner. | [optional] [default to undefined]

### Return type

[**Array&lt;WorkItemsBeta&gt;**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

[ {
  "requesterDisplayName" : "John Smith",
  "requesterId" : "2c9180835d2e5168015d32f890ca1581",
  "created" : "2017-07-11T18:45:37.098Z",
  "approvalItems" : [ {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  }, {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  } ],
  "description" : "Create account on source 'AD'",
  "completed" : "2018-10-19T13:49:37.385Z",
  "ownerId" : "2c9180835d2e5168015d32f890ca1581",
  "type" : "Generic",
  "numItems" : 19,
  "ownerName" : "Jason Smith",
  "form" : {
    "subtitle" : "Please select from the following",
    "name" : "AccountSelection Form",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "title" : "Account Selection for John.Doe",
    "targetUser" : "Jane.Doe",
    "sections" : [ {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    }, {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    } ]
  },
  "remediationItems" : [ {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  }, {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  } ],
  "name" : "Account Create",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "state" : "Pending",
  "errors" : [ "The work item ID that was specified was not found." ]
}, {
  "requesterDisplayName" : "John Smith",
  "requesterId" : "2c9180835d2e5168015d32f890ca1581",
  "created" : "2017-07-11T18:45:37.098Z",
  "approvalItems" : [ {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  }, {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  } ],
  "description" : "Create account on source 'AD'",
  "completed" : "2018-10-19T13:49:37.385Z",
  "ownerId" : "2c9180835d2e5168015d32f890ca1581",
  "type" : "Generic",
  "numItems" : 19,
  "ownerName" : "Jason Smith",
  "form" : {
    "subtitle" : "Please select from the following",
    "name" : "AccountSelection Form",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "title" : "Account Selection for John.Doe",
    "targetUser" : "Jane.Doe",
    "sections" : [ {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    }, {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    } ]
  },
  "remediationItems" : [ {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  }, {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  } ],
  "name" : "Account Create",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "state" : "Pending",
  "errors" : [ "The work item ID that was specified was not found." ]
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const ownerId : string = "ownerId_example"; // ID of the work item owner. (optional) (default to undefined)

try {
    const val = await workItemsBetaApi.listWorkItems();
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.listWorkItems(limit, offset, count, ownerId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## rejectApprovalItem

> WorkItemsBeta rejectApprovalItem(id, approvalItemId)

Reject an Approval Item

This API rejects an Approval Item. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]
 **approvalItemId** | **string**| The ID of the approval item. | [default to undefined]

### Return type

[**WorkItemsBeta**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

{
  "requesterDisplayName" : "John Smith",
  "requesterId" : "2c9180835d2e5168015d32f890ca1581",
  "created" : "2017-07-11T18:45:37.098Z",
  "approvalItems" : [ {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  }, {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  } ],
  "description" : "Create account on source 'AD'",
  "completed" : "2018-10-19T13:49:37.385Z",
  "ownerId" : "2c9180835d2e5168015d32f890ca1581",
  "type" : "Generic",
  "numItems" : 19,
  "ownerName" : "Jason Smith",
  "form" : {
    "subtitle" : "Please select from the following",
    "name" : "AccountSelection Form",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "title" : "Account Selection for John.Doe",
    "targetUser" : "Jane.Doe",
    "sections" : [ {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    }, {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    } ]
  },
  "remediationItems" : [ {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  }, {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  } ],
  "name" : "Account Create",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "state" : "Pending",
  "errors" : [ "The work item ID that was specified was not found." ]
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item (default to undefined)
const approvalItemId : string = "1211bcaa32112bcef6122adb21cef1ac"; // The ID of the approval item. (default to undefined)

try {
    const val = await workItemsBetaApi.rejectApprovalItem(id, approvalItemId);
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.rejectApprovalItem(id, approvalItemId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## rejectApprovalItemsInBulk

> WorkItemsBeta rejectApprovalItemsInBulk(id)

Bulk reject Approval Items

This API bulk rejects Approval Items. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]

### Return type

[**WorkItemsBeta**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

{
  "requesterDisplayName" : "John Smith",
  "requesterId" : "2c9180835d2e5168015d32f890ca1581",
  "created" : "2017-07-11T18:45:37.098Z",
  "approvalItems" : [ {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  }, {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  } ],
  "description" : "Create account on source 'AD'",
  "completed" : "2018-10-19T13:49:37.385Z",
  "ownerId" : "2c9180835d2e5168015d32f890ca1581",
  "type" : "Generic",
  "numItems" : 19,
  "ownerName" : "Jason Smith",
  "form" : {
    "subtitle" : "Please select from the following",
    "name" : "AccountSelection Form",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "title" : "Account Selection for John.Doe",
    "targetUser" : "Jane.Doe",
    "sections" : [ {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    }, {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    } ]
  },
  "remediationItems" : [ {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  }, {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  } ],
  "name" : "Account Create",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "state" : "Pending",
  "errors" : [ "The work item ID that was specified was not found." ]
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item (default to undefined)

try {
    const val = await workItemsBetaApi.rejectApprovalItemsInBulk(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.rejectApprovalItemsInBulk(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## submitAccountSelection

> WorkItemsBeta submitAccountSelection(id, requestBody)

Submit Account Selections

This API submits account selections. Either an admin, or the owning/current user must make this request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the work item | [default to undefined]
 **requestBody** | [**{ [key: string]: any; }**](../Models/any.md)| Account Selection Data map, keyed on fieldName | 

### Return type

[**WorkItemsBeta**](../Models/WorkItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkItemsBetaApi, any } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workItemsBetaApi = new WorkItemsBetaApi(apiConfig);

{
  "requesterDisplayName" : "John Smith",
  "requesterId" : "2c9180835d2e5168015d32f890ca1581",
  "created" : "2017-07-11T18:45:37.098Z",
  "approvalItems" : [ {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  }, {
    "application" : "Active Directory",
    "name" : "emailAddress",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "state" : "Pending",
    "operation" : "update",
    "value" : "a@b.com",
    "account" : "john.smith"
  } ],
  "description" : "Create account on source 'AD'",
  "completed" : "2018-10-19T13:49:37.385Z",
  "ownerId" : "2c9180835d2e5168015d32f890ca1581",
  "type" : "Generic",
  "numItems" : 19,
  "ownerName" : "Jason Smith",
  "form" : {
    "subtitle" : "Please select from the following",
    "name" : "AccountSelection Form",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "title" : "Account Selection for John.Doe",
    "targetUser" : "Jane.Doe",
    "sections" : [ {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    }, {
      "formItems" : [ ],
      "name" : "Field1",
      "label" : "Section 1"
    } ]
  },
  "remediationItems" : [ {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  }, {
    "targetName" : "john.smith",
    "targetId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeValue" : "512-555-1212",
    "targetDisplayName" : "emailAddress",
    "attributeName" : "phoneNumber",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "applicationName" : "Active Directory",
    "attributeOperation" : "update",
    "nativeIdentity" : "jason.smith2"
  } ],
  "name" : "Account Create",
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "state" : "Pending",
  "errors" : [ "The work item ID that was specified was not found." ]
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the work item (default to undefined)
const requestBody : { [key: string]: any; } = {fieldName=fieldValue}; // Account Selection Data map, keyed on fieldName

try {
    const val = await workItemsBetaApi.submitAccountSelection(id, requestBody);
    
    // Below is a request that includes all optional parameters      
    // const val = await workItemsBetaApi.submitAccountSelection(id, requestBody);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

