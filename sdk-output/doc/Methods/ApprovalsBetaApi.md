---
title: ApprovalsBetaApi
pagination_label: ApprovalsBetaApi
sidebar_label: ApprovalsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'ApprovalsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'ApprovalsBetaApi']
---

# ApprovalsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApproval**](ApprovalsBetaApi.md#getApproval) | **GET** /generic-approvals/{id} | Get Approval
[**getApprovals**](ApprovalsBetaApi.md#getApprovals) | **GET** /generic-approvals | Get Approvals



## getApproval

> ApprovalBeta getApproval(id)

Get Approval

Get a single approval for a given approval ID. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and doesn\'t include access-request-approvals.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the approval that to be returned. | [default to undefined]

### Return type

[**ApprovalBeta**](../Models/ApprovalBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ApprovalsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const approvalsBetaApi = new ApprovalsBetaApi(apiConfig);

{
  "requester" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "comments" : [ {
    "createdDate" : "2023-04-12T23:20:50.52Z",
    "author" : {
      "name" : "John Doe",
      "id" : "85d173e7d57e496569df763231d6deb6a",
      "type" : "IDENTITY"
    },
    "comment" : "Looks good"
  }, {
    "createdDate" : "2023-04-12T23:20:50.52Z",
    "author" : {
      "name" : "John Doe",
      "id" : "85d173e7d57e496569df763231d6deb6a",
      "type" : "IDENTITY"
    },
    "comment" : "Looks good"
  } ],
  "approvedBy" : [ {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  }, {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  } ],
  "approvers" : [ {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  }, {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  } ],
  "description" : [ {
    "locale" : "en_US",
    "value" : "This access allows viewing and editing of workflow resource"
  }, {
    "locale" : "en_US",
    "value" : "This access allows viewing and editing of workflow resource"
  } ],
  "type" : "ENTITLEMENT_DESCRIPTIONS",
  "priority" : "HIGH",
  "completedDate" : "2023-04-12T23:20:50.52Z",
  "referenceData" : [ {
    "id" : "64012350-8fd9-4f6c-a170-1fe123683899",
    "type" : "AccessRequestId"
  }, {
    "id" : "64012350-8fd9-4f6c-a170-1fe123683899",
    "type" : "AccessRequestId"
  } ],
  "rejectedBy" : [ {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  }, {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  } ],
  "createdDate" : "2023-04-12T23:20:50.52Z",
  "name" : [ {
    "locale" : "en_US",
    "value" : "Audit DB Access"
  }, {
    "locale" : "en_US",
    "value" : "Audit DB Access"
  } ],
  "approvalId" : "38453251-6be2-5f8f-df93-5ce19e295837",
  "batchRequest" : {
    "batchId" : "38453251-6be2-5f8f-df93-5ce19e295837",
    "batchSize" : 100
  },
  "approvalCriteria" : "SINGLE",
  "status" : "PENDING",
  "additionalAttributes" : "{ \"llm_description\": \"generated description\" }"
}


const id : string = "38453251-6be2-5f8f-df93-5ce19e295837"; // ID of the approval that to be returned. (default to undefined)

try {
    const val = await approvalsBetaApi.getApproval(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await approvalsBetaApi.getApproval(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getApprovals

> Array&lt;ApprovalBeta&gt; getApprovals(mine, requesterId, filters)

Get Approvals

Get a list of approvals, which can be filtered by requester ID, status, or reference type. You can use the \"Mine\" query parameter to return all approvals for the current approver. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and does not include access-request-approvals.  Absence of all query parameters will will default to mine=true.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mine** | **boolean**| Returns the list of approvals for the current caller. | [optional] [default to undefined]
 **requesterId** | **string**| Returns the list of approvals for a given requester ID. | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;ApprovalBeta&gt;**](../Models/ApprovalBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ApprovalsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const approvalsBetaApi = new ApprovalsBetaApi(apiConfig);

[ {
  "requester" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "comments" : [ {
    "createdDate" : "2023-04-12T23:20:50.52Z",
    "author" : {
      "name" : "John Doe",
      "id" : "85d173e7d57e496569df763231d6deb6a",
      "type" : "IDENTITY"
    },
    "comment" : "Looks good"
  }, {
    "createdDate" : "2023-04-12T23:20:50.52Z",
    "author" : {
      "name" : "John Doe",
      "id" : "85d173e7d57e496569df763231d6deb6a",
      "type" : "IDENTITY"
    },
    "comment" : "Looks good"
  } ],
  "approvedBy" : [ {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  }, {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  } ],
  "approvers" : [ {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  }, {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  } ],
  "description" : [ {
    "locale" : "en_US",
    "value" : "This access allows viewing and editing of workflow resource"
  }, {
    "locale" : "en_US",
    "value" : "This access allows viewing and editing of workflow resource"
  } ],
  "type" : "ENTITLEMENT_DESCRIPTIONS",
  "priority" : "HIGH",
  "completedDate" : "2023-04-12T23:20:50.52Z",
  "referenceData" : [ {
    "id" : "64012350-8fd9-4f6c-a170-1fe123683899",
    "type" : "AccessRequestId"
  }, {
    "id" : "64012350-8fd9-4f6c-a170-1fe123683899",
    "type" : "AccessRequestId"
  } ],
  "rejectedBy" : [ {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  }, {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  } ],
  "createdDate" : "2023-04-12T23:20:50.52Z",
  "name" : [ {
    "locale" : "en_US",
    "value" : "Audit DB Access"
  }, {
    "locale" : "en_US",
    "value" : "Audit DB Access"
  } ],
  "approvalId" : "38453251-6be2-5f8f-df93-5ce19e295837",
  "batchRequest" : {
    "batchId" : "38453251-6be2-5f8f-df93-5ce19e295837",
    "batchSize" : 100
  },
  "approvalCriteria" : "SINGLE",
  "status" : "PENDING",
  "additionalAttributes" : "{ \"llm_description\": \"generated description\" }"
}, {
  "requester" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "comments" : [ {
    "createdDate" : "2023-04-12T23:20:50.52Z",
    "author" : {
      "name" : "John Doe",
      "id" : "85d173e7d57e496569df763231d6deb6a",
      "type" : "IDENTITY"
    },
    "comment" : "Looks good"
  }, {
    "createdDate" : "2023-04-12T23:20:50.52Z",
    "author" : {
      "name" : "John Doe",
      "id" : "85d173e7d57e496569df763231d6deb6a",
      "type" : "IDENTITY"
    },
    "comment" : "Looks good"
  } ],
  "approvedBy" : [ {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  }, {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  } ],
  "approvers" : [ {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  }, {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  } ],
  "description" : [ {
    "locale" : "en_US",
    "value" : "This access allows viewing and editing of workflow resource"
  }, {
    "locale" : "en_US",
    "value" : "This access allows viewing and editing of workflow resource"
  } ],
  "type" : "ENTITLEMENT_DESCRIPTIONS",
  "priority" : "HIGH",
  "completedDate" : "2023-04-12T23:20:50.52Z",
  "referenceData" : [ {
    "id" : "64012350-8fd9-4f6c-a170-1fe123683899",
    "type" : "AccessRequestId"
  }, {
    "id" : "64012350-8fd9-4f6c-a170-1fe123683899",
    "type" : "AccessRequestId"
  } ],
  "rejectedBy" : [ {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  }, {
    "name" : "John Doe",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY"
  } ],
  "createdDate" : "2023-04-12T23:20:50.52Z",
  "name" : [ {
    "locale" : "en_US",
    "value" : "Audit DB Access"
  }, {
    "locale" : "en_US",
    "value" : "Audit DB Access"
  } ],
  "approvalId" : "38453251-6be2-5f8f-df93-5ce19e295837",
  "batchRequest" : {
    "batchId" : "38453251-6be2-5f8f-df93-5ce19e295837",
    "batchSize" : 100
  },
  "approvalCriteria" : "SINGLE",
  "status" : "PENDING",
  "additionalAttributes" : "{ \"llm_description\": \"generated description\" }"
} ]


const mine : boolean = true; // Returns the list of approvals for the current caller. (optional) (default to undefined)
const requesterId : string = "17e633e7d57e481569df76323169deb6a"; // Returns the list of approvals for a given requester ID. (optional) (default to undefined)
const filters : string = "filters=status eq PENDING"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq* (optional) (default to undefined)

try {
    const val = await approvalsBetaApi.getApprovals();
    
    // Below is a request that includes all optional parameters      
    // const val = await approvalsBetaApi.getApprovals(mine, requesterId, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

