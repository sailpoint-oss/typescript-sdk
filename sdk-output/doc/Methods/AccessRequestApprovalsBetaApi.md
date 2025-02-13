---
title: AccessRequestApprovalsBetaApi
pagination_label: AccessRequestApprovalsBetaApi
sidebar_label: AccessRequestApprovalsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccessRequestApprovalsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccessRequestApprovalsBetaApi']
---

# AccessRequestApprovalsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveAccessRequest**](AccessRequestApprovalsBetaApi.md#approveAccessRequest) | **POST** /access-request-approvals/{approvalId}/approve | Approve Access Request Approval
[**forwardAccessRequest**](AccessRequestApprovalsBetaApi.md#forwardAccessRequest) | **POST** /access-request-approvals/{approvalId}/forward | Forward Access Request Approval
[**getAccessRequestApprovalSummary**](AccessRequestApprovalsBetaApi.md#getAccessRequestApprovalSummary) | **GET** /access-request-approvals/approval-summary | Get Access Requests Approvals Number
[**listCompletedApprovals**](AccessRequestApprovalsBetaApi.md#listCompletedApprovals) | **GET** /access-request-approvals/completed | Completed Access Request Approvals List
[**listPendingApprovals**](AccessRequestApprovalsBetaApi.md#listPendingApprovals) | **GET** /access-request-approvals/pending | Pending Access Request Approvals List
[**rejectAccessRequest**](AccessRequestApprovalsBetaApi.md#rejectAccessRequest) | **POST** /access-request-approvals/{approvalId}/reject | Reject Access Request Approval



## approveAccessRequest

> object approveAccessRequest(approvalId, commentDtoBeta)

Approve Access Request Approval

Use this endpoint to approve an access request approval. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvalId** | **string**| Approval ID. | [default to undefined]
 **commentDtoBeta** | [**CommentDtoBeta**](../Models/CommentDtoBeta.md)| Reviewer\&#39;s comment. | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestApprovalsBetaApi, CommentDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestApprovalsBetaApi = new AccessRequestApprovalsBetaApi(apiConfig);

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


const approvalId : string = "2c91808b7294bea301729568c68c002e"; // Approval ID. (default to undefined)
const commentDtoBeta : CommentDtoBeta = 

try {
    const val = await accessRequestApprovalsBetaApi.approveAccessRequest(approvalId, commentDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestApprovalsBetaApi.approveAccessRequest(approvalId, commentDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## forwardAccessRequest

> object forwardAccessRequest(approvalId, forwardApprovalDtoBeta)

Forward Access Request Approval

Use this API to forward an access request approval to a new owner. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvalId** | **string**| Approval ID. | [default to undefined]
 **forwardApprovalDtoBeta** | [**ForwardApprovalDtoBeta**](../Models/ForwardApprovalDtoBeta.md)| Information about the forwarded approval. | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestApprovalsBetaApi, ForwardApprovalDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestApprovalsBetaApi = new AccessRequestApprovalsBetaApi(apiConfig);

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


const approvalId : string = "2c91808b7294bea301729568c68c002e"; // Approval ID. (default to undefined)
const forwardApprovalDtoBeta : ForwardApprovalDtoBeta = 

try {
    const val = await accessRequestApprovalsBetaApi.forwardAccessRequest(approvalId, forwardApprovalDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestApprovalsBetaApi.forwardAccessRequest(approvalId, forwardApprovalDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getAccessRequestApprovalSummary

> ApprovalSummaryBeta getAccessRequestApprovalSummary(ownerId, fromDate)

Get Access Requests Approvals Number

Use this API to return the number of pending, approved and rejected access requests approvals. See the \"owner-id\" query parameter for authorization information.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. | [optional] [default to undefined]
 **fromDate** | **string**| This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. | [optional] [default to undefined]

### Return type

[**ApprovalSummaryBeta**](../Models/ApprovalSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestApprovalsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestApprovalsBetaApi = new AccessRequestApprovalsBetaApi(apiConfig);

{
  "approved" : 6,
  "rejected" : 1,
  "pending" : 0
}


const ownerId : string = "2c91808568c529c60168cca6f90c1313"; // The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional) (default to undefined)
const fromDate : string = "from-date=2020-03-19T19:59:11Z"; // This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. (optional) (default to undefined)

try {
    const val = await accessRequestApprovalsBetaApi.getAccessRequestApprovalSummary();
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestApprovalsBetaApi.getAccessRequestApprovalSummary(ownerId, fromDate);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listCompletedApprovals

> Array&lt;CompletedApprovalBeta&gt; listCompletedApprovals(ownerId, limit, offset, count, filters, sorters)

Completed Access Request Approvals List

This endpoint returns list of completed approvals. See *owner-id* query parameter below for authorization info.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;CompletedApprovalBeta&gt;**](../Models/CompletedApprovalBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestApprovalsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestApprovalsBetaApi = new AccessRequestApprovalsBetaApi(apiConfig);

[ {
  "requester" : {
    "name" : "William Wilson",
    "id" : "2c7180a46faadee4016fb4e018c20648",
    "type" : "IDENTITY"
  },
  "requestedFor" : {
    "name" : "William Wilson",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "IDENTITY"
  },
  "owner" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "reviewerComment" : "{}",
  "removeDate" : "2020-07-11T00:00:00Z",
  "clientMetadata" : {
    "requestedAppName" : "test-app",
    "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
  },
  "requestType" : "GRANT_ACCESS",
  "commentRequiredWhenRejected" : true,
  "created" : "2017-07-11T18:45:37.098Z",
  "previousReviewersComments" : [ {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  }, {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  } ],
  "requesterComment" : {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  },
  "currentRemoveDate" : "2020-07-11T00:00:00Z",
  "reviewedBy" : {
    "name" : "Allen Albertson",
    "id" : "2c3780a46faadee4016fb4e018c20652",
    "type" : "IDENTITY"
  },
  "requestedObject" : {
    "name" : "Object Name",
    "description" : "Object Description",
    "id" : "2c938083633d259901633d25c68c00fa",
    "type" : "ROLE"
  },
  "sodViolationContext" : {
    "violationCheckResult" : {
      "clientMetadata" : {
        "requestedAppName" : "test-app",
        "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
      },
      "violationContexts" : [ {
        "conflictingAccessCriteria" : {
          "leftCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          },
          "rightCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          }
        },
        "policy" : {
          "name" : "Business SOD Policy",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "type" : "SOD_POLICY"
        }
      }, {
        "conflictingAccessCriteria" : {
          "leftCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          },
          "rightCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          }
        },
        "policy" : {
          "name" : "Business SOD Policy",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "type" : "SOD_POLICY"
        }
      } ],
      "violatedPolicies" : [ {
        "name" : "Business SOD Policy",
        "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
        "type" : "SOD_POLICY"
      }, {
        "name" : "Business SOD Policy",
        "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
        "type" : "SOD_POLICY"
      } ],
      "message" : {
        "localeOrigin" : "DEFAULT",
        "text" : "The request was syntactically correct but its content is semantically invalid.",
        "locale" : "en-US"
      }
    },
    "state" : "SUCCESS",
    "uuid" : "f73d16e9-a038-46c5-b217-1246e15fdbdd"
  },
  "requestCreated" : "2017-07-11T18:45:35.098Z",
  "name" : "Approval Name",
  "modified" : "2018-07-25T20:22:28.104Z",
  "id" : "2c938083633d259901633d25c68c00fa",
  "forwardHistory" : [ {
    "forwarderName" : "William Wilson",
    "reassignmentType" : "AUTOMATIC_REASSIGNMENT",
    "modified" : "2019-08-23T18:52:57.398Z",
    "oldApproverName" : "Frank Mir",
    "newApproverName" : "Al Volta",
    "comment" : "Forwarding from Frank to Al"
  }, {
    "forwarderName" : "William Wilson",
    "reassignmentType" : "AUTOMATIC_REASSIGNMENT",
    "modified" : "2019-08-23T18:52:57.398Z",
    "oldApproverName" : "Frank Mir",
    "newApproverName" : "Al Volta",
    "comment" : "Forwarding from Frank to Al"
  } ],
  "state" : "APPROVED",
  "removeDateUpdateRequested" : true,
  "preApprovalTriggerResult" : {
    "date" : "2022-06-07T19:18:40.748Z",
    "decision" : "APPROVED",
    "comment" : "This request was autoapproved by our automated ETS subscriber",
    "reviewer" : "Automated AR Approval"
  }
}, {
  "requester" : {
    "name" : "William Wilson",
    "id" : "2c7180a46faadee4016fb4e018c20648",
    "type" : "IDENTITY"
  },
  "requestedFor" : {
    "name" : "William Wilson",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "IDENTITY"
  },
  "owner" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "reviewerComment" : "{}",
  "removeDate" : "2020-07-11T00:00:00Z",
  "clientMetadata" : {
    "requestedAppName" : "test-app",
    "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
  },
  "requestType" : "GRANT_ACCESS",
  "commentRequiredWhenRejected" : true,
  "created" : "2017-07-11T18:45:37.098Z",
  "previousReviewersComments" : [ {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  }, {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  } ],
  "requesterComment" : {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  },
  "currentRemoveDate" : "2020-07-11T00:00:00Z",
  "reviewedBy" : {
    "name" : "Allen Albertson",
    "id" : "2c3780a46faadee4016fb4e018c20652",
    "type" : "IDENTITY"
  },
  "requestedObject" : {
    "name" : "Object Name",
    "description" : "Object Description",
    "id" : "2c938083633d259901633d25c68c00fa",
    "type" : "ROLE"
  },
  "sodViolationContext" : {
    "violationCheckResult" : {
      "clientMetadata" : {
        "requestedAppName" : "test-app",
        "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
      },
      "violationContexts" : [ {
        "conflictingAccessCriteria" : {
          "leftCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          },
          "rightCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          }
        },
        "policy" : {
          "name" : "Business SOD Policy",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "type" : "SOD_POLICY"
        }
      }, {
        "conflictingAccessCriteria" : {
          "leftCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          },
          "rightCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          }
        },
        "policy" : {
          "name" : "Business SOD Policy",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "type" : "SOD_POLICY"
        }
      } ],
      "violatedPolicies" : [ {
        "name" : "Business SOD Policy",
        "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
        "type" : "SOD_POLICY"
      }, {
        "name" : "Business SOD Policy",
        "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
        "type" : "SOD_POLICY"
      } ],
      "message" : {
        "localeOrigin" : "DEFAULT",
        "text" : "The request was syntactically correct but its content is semantically invalid.",
        "locale" : "en-US"
      }
    },
    "state" : "SUCCESS",
    "uuid" : "f73d16e9-a038-46c5-b217-1246e15fdbdd"
  },
  "requestCreated" : "2017-07-11T18:45:35.098Z",
  "name" : "Approval Name",
  "modified" : "2018-07-25T20:22:28.104Z",
  "id" : "2c938083633d259901633d25c68c00fa",
  "forwardHistory" : [ {
    "forwarderName" : "William Wilson",
    "reassignmentType" : "AUTOMATIC_REASSIGNMENT",
    "modified" : "2019-08-23T18:52:57.398Z",
    "oldApproverName" : "Frank Mir",
    "newApproverName" : "Al Volta",
    "comment" : "Forwarding from Frank to Al"
  }, {
    "forwarderName" : "William Wilson",
    "reassignmentType" : "AUTOMATIC_REASSIGNMENT",
    "modified" : "2019-08-23T18:52:57.398Z",
    "oldApproverName" : "Frank Mir",
    "newApproverName" : "Al Volta",
    "comment" : "Forwarding from Frank to Al"
  } ],
  "state" : "APPROVED",
  "removeDateUpdateRequested" : true,
  "preApprovalTriggerResult" : {
    "date" : "2022-06-07T19:18:40.748Z",
    "decision" : "APPROVED",
    "comment" : "This request was autoapproved by our automated ETS subscriber",
    "reviewer" : "Automated AR Approval"
  }
} ]


const ownerId : string = "ownerId_example"; // If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional) (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "filters_example"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw* (optional) (default to undefined)
const sorters : string = "sorters_example"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional) (default to undefined)

try {
    const val = await accessRequestApprovalsBetaApi.listCompletedApprovals();
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestApprovalsBetaApi.listCompletedApprovals(ownerId, limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listPendingApprovals

> Array&lt;PendingApprovalBeta&gt; listPendingApprovals(ownerId, limit, offset, count, filters, sorters)

Pending Access Request Approvals List

This endpoint returns a list of pending approvals. See \"owner-id\" query parameter below for authorization info.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string**| If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;PendingApprovalBeta&gt;**](../Models/PendingApprovalBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestApprovalsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestApprovalsBetaApi = new AccessRequestApprovalsBetaApi(apiConfig);

[ {
  "requester" : {
    "name" : "William Wilson",
    "id" : "2c7180a46faadee4016fb4e018c20648",
    "type" : "IDENTITY"
  },
  "requestedFor" : {
    "name" : "Robert Robinson",
    "id" : "2c4180a46faadee4016fb4e018c20626",
    "type" : "IDENTITY"
  },
  "owner" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "removeDate" : "2020-07-11T00:00:00Z",
  "requestType" : "GRANT_ACCESS",
  "commentRequiredWhenRejected" : true,
  "created" : "2017-07-11T18:45:37.098Z",
  "previousReviewersComments" : [ {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  }, {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  } ],
  "requesterComment" : {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  },
  "currentRemoveDate" : "2020-07-11T00:00:00Z",
  "requestedObject" : {
    "name" : "Object Name",
    "description" : "Object Description",
    "id" : "2c938083633d259901633d25c68c00fa",
    "type" : "ROLE"
  },
  "sodViolationContext" : {
    "violationCheckResult" : {
      "clientMetadata" : {
        "requestedAppName" : "test-app",
        "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
      },
      "violationContexts" : [ {
        "conflictingAccessCriteria" : {
          "leftCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          },
          "rightCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          }
        },
        "policy" : {
          "name" : "Business SOD Policy",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "type" : "SOD_POLICY"
        }
      }, {
        "conflictingAccessCriteria" : {
          "leftCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          },
          "rightCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          }
        },
        "policy" : {
          "name" : "Business SOD Policy",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "type" : "SOD_POLICY"
        }
      } ],
      "violatedPolicies" : [ {
        "name" : "Business SOD Policy",
        "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
        "type" : "SOD_POLICY"
      }, {
        "name" : "Business SOD Policy",
        "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
        "type" : "SOD_POLICY"
      } ],
      "message" : {
        "localeOrigin" : "DEFAULT",
        "text" : "The request was syntactically correct but its content is semantically invalid.",
        "locale" : "en-US"
      }
    },
    "state" : "SUCCESS",
    "uuid" : "f73d16e9-a038-46c5-b217-1246e15fdbdd"
  },
  "requestCreated" : "2017-07-11T18:45:35.098Z",
  "actionInProcess" : "APPROVED",
  "name" : "Pending approval name",
  "modified" : "2018-07-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "forwardHistory" : [ {
    "forwarderName" : "William Wilson",
    "reassignmentType" : "AUTOMATIC_REASSIGNMENT",
    "modified" : "2019-08-23T18:52:57.398Z",
    "oldApproverName" : "Frank Mir",
    "newApproverName" : "Al Volta",
    "comment" : "Forwarding from Frank to Al"
  }, {
    "forwarderName" : "William Wilson",
    "reassignmentType" : "AUTOMATIC_REASSIGNMENT",
    "modified" : "2019-08-23T18:52:57.398Z",
    "oldApproverName" : "Frank Mir",
    "newApproverName" : "Al Volta",
    "comment" : "Forwarding from Frank to Al"
  } ],
  "removeDateUpdateRequested" : true
}, {
  "requester" : {
    "name" : "William Wilson",
    "id" : "2c7180a46faadee4016fb4e018c20648",
    "type" : "IDENTITY"
  },
  "requestedFor" : {
    "name" : "Robert Robinson",
    "id" : "2c4180a46faadee4016fb4e018c20626",
    "type" : "IDENTITY"
  },
  "owner" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "removeDate" : "2020-07-11T00:00:00Z",
  "requestType" : "GRANT_ACCESS",
  "commentRequiredWhenRejected" : true,
  "created" : "2017-07-11T18:45:37.098Z",
  "previousReviewersComments" : [ {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  }, {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  } ],
  "requesterComment" : {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  },
  "currentRemoveDate" : "2020-07-11T00:00:00Z",
  "requestedObject" : {
    "name" : "Object Name",
    "description" : "Object Description",
    "id" : "2c938083633d259901633d25c68c00fa",
    "type" : "ROLE"
  },
  "sodViolationContext" : {
    "violationCheckResult" : {
      "clientMetadata" : {
        "requestedAppName" : "test-app",
        "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
      },
      "violationContexts" : [ {
        "conflictingAccessCriteria" : {
          "leftCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          },
          "rightCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          }
        },
        "policy" : {
          "name" : "Business SOD Policy",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "type" : "SOD_POLICY"
        }
      }, {
        "conflictingAccessCriteria" : {
          "leftCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          },
          "rightCriteria" : {
            "criteriaList" : [ {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            }, {
              "existing" : true,
              "name" : "My HR Entitlement",
              "id" : "2c918085771e9d3301773b3cb66f6398",
              "type" : "IDENTITY"
            } ]
          }
        },
        "policy" : {
          "name" : "Business SOD Policy",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "type" : "SOD_POLICY"
        }
      } ],
      "violatedPolicies" : [ {
        "name" : "Business SOD Policy",
        "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
        "type" : "SOD_POLICY"
      }, {
        "name" : "Business SOD Policy",
        "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
        "type" : "SOD_POLICY"
      } ],
      "message" : {
        "localeOrigin" : "DEFAULT",
        "text" : "The request was syntactically correct but its content is semantically invalid.",
        "locale" : "en-US"
      }
    },
    "state" : "SUCCESS",
    "uuid" : "f73d16e9-a038-46c5-b217-1246e15fdbdd"
  },
  "requestCreated" : "2017-07-11T18:45:35.098Z",
  "actionInProcess" : "APPROVED",
  "name" : "Pending approval name",
  "modified" : "2018-07-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "forwardHistory" : [ {
    "forwarderName" : "William Wilson",
    "reassignmentType" : "AUTOMATIC_REASSIGNMENT",
    "modified" : "2019-08-23T18:52:57.398Z",
    "oldApproverName" : "Frank Mir",
    "newApproverName" : "Al Volta",
    "comment" : "Forwarding from Frank to Al"
  }, {
    "forwarderName" : "William Wilson",
    "reassignmentType" : "AUTOMATIC_REASSIGNMENT",
    "modified" : "2019-08-23T18:52:57.398Z",
    "oldApproverName" : "Frank Mir",
    "newApproverName" : "Al Volta",
    "comment" : "Forwarding from Frank to Al"
  } ],
  "removeDateUpdateRequested" : true
} ]


const ownerId : string = "ownerId_example"; // If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional) (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "filters_example"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in* (optional) (default to undefined)
const sorters : string = "sorters_example"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional) (default to undefined)

try {
    const val = await accessRequestApprovalsBetaApi.listPendingApprovals();
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestApprovalsBetaApi.listPendingApprovals(ownerId, limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## rejectAccessRequest

> object rejectAccessRequest(approvalId, commentDtoBeta)

Reject Access Request Approval

Use this API to reject an access request approval. Only the owner of the approval and admin users are allowed to perform this action.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approvalId** | **string**| Approval ID. | [default to undefined]
 **commentDtoBeta** | [**CommentDtoBeta**](../Models/CommentDtoBeta.md)| Reviewer\&#39;s comment. | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestApprovalsBetaApi, CommentDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestApprovalsBetaApi = new AccessRequestApprovalsBetaApi(apiConfig);

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


const approvalId : string = "2c91808b7294bea301729568c68c002e"; // Approval ID. (default to undefined)
const commentDtoBeta : CommentDtoBeta = 

try {
    const val = await accessRequestApprovalsBetaApi.rejectAccessRequest(approvalId, commentDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestApprovalsBetaApi.rejectAccessRequest(approvalId, commentDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

