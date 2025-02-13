---
title: AccessRequestsBetaApi
pagination_label: AccessRequestsBetaApi
sidebar_label: AccessRequestsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccessRequestsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccessRequestsBetaApi']
---

# AccessRequestsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelAccessRequest**](AccessRequestsBetaApi.md#cancelAccessRequest) | **POST** /access-requests/cancel | Cancel Access Request
[**closeAccessRequest**](AccessRequestsBetaApi.md#closeAccessRequest) | **POST** /access-requests/close | Close Access Request
[**createAccessRequest**](AccessRequestsBetaApi.md#createAccessRequest) | **POST** /access-requests | Submit Access Request
[**getAccessRequestConfig**](AccessRequestsBetaApi.md#getAccessRequestConfig) | **GET** /access-request-config | Get Access Request Configuration
[**listAccessRequestStatus**](AccessRequestsBetaApi.md#listAccessRequestStatus) | **GET** /access-request-status | Access Request Status
[**setAccessRequestConfig**](AccessRequestsBetaApi.md#setAccessRequestConfig) | **PUT** /access-request-config | Update Access Request Configuration



## cancelAccessRequest

> object cancelAccessRequest(cancelAccessRequestBeta)

Cancel Access Request

This API endpoint cancels a pending access request. An access request can be cancelled only if it has not passed the approval step. In addition to users with ORG_ADMIN, any user who originally submitted the access request may cancel it.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelAccessRequestBeta** | [**CancelAccessRequestBeta**](../Models/CancelAccessRequestBeta.md)|  | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestsBetaApi, CancelAccessRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestsBetaApi = new AccessRequestsBetaApi(apiConfig);

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


const cancelAccessRequestBeta : CancelAccessRequestBeta = 

try {
    const val = await accessRequestsBetaApi.cancelAccessRequest(cancelAccessRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestsBetaApi.cancelAccessRequest(cancelAccessRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## closeAccessRequest

> object closeAccessRequest(closeAccessRequestBeta)

Close Access Request

This endpoint closes access requests that are stuck in a pending state. It can be used throughout a request\'s lifecycle even after the approval state, unlike the [Cancel Access Request endpoint](https://developer.sailpoint.com/idn/api/v3/cancel-access-request/).  To find pending access requests with the UI, navigate to Search and use this query: status: Pending AND \"Access Request\". Use the Column Chooser to select \'Tracking Number\', and use the \'Download\' button to export a CSV containing the tracking numbers.  To find pending access requests with the API, use the [List Account Activities endpoint](https://developer.sailpoint.com/idn/api/v3/list-account-activities/).  Input the IDs from either source.  To track the status of endpoint requests, navigate to Search and use this query: name:\"Close Identity Requests\". Search will include \"Close Identity Requests Started\" audits when requests are initiated and \"Close Identity Requests Completed\" audits when requests are completed. The completion audit will list the identity request IDs that finished in error.  This API triggers the [Provisioning Completed event trigger](https://developer.sailpoint.com/idn/docs/event-triggers/triggers/provisioning-completed/) for each access request that is closed. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **closeAccessRequestBeta** | [**CloseAccessRequestBeta**](../Models/CloseAccessRequestBeta.md)|  | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestsBetaApi, CloseAccessRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestsBetaApi = new AccessRequestsBetaApi(apiConfig);

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


const closeAccessRequestBeta : CloseAccessRequestBeta = 

try {
    const val = await accessRequestsBetaApi.closeAccessRequest(closeAccessRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestsBetaApi.closeAccessRequest(closeAccessRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## createAccessRequest

> AccessRequestResponseBeta createAccessRequest(accessRequestBeta)

Submit Access Request

Use this API to submit an access request in Identity Security Cloud (ISC), where it follows any ISC approval processes.  Access requests are processed asynchronously by ISC. A successful response from this endpoint means that the request has been submitted to ISC and is queued for processing. Because this endpoint is asynchronous, it doesn\'t return an error if you submit duplicate access requests in quick succession or submit an access request for access that is already in progress, approved, or rejected.  It\'s best practice to check for any existing access requests that reference the same access items before submitting a new access request. This can be accomplished by using the [List Access Request Status](https://developer.sailpoint.com/idn/api/v3/list-access-request-status) or the [Pending Access Request Approvals](https://developer.sailpoint.com/idn/api/v3/list-pending-approvals) APIs. You can also use the [Search API](https://developer.sailpoint.com/idn/api/v3/search) to check the existing access items an identity has before submitting an access request to ensure that you aren\'t requesting access that is already granted. If you use this API to request access that an identity already has, the API will ignore the request.  These ignored requests do not display when you use the [List Access Request Status](https://developer.sailpoint.com/idn/api/v3/list-access-request-status) API.  There are two types of access request:  __GRANT_ACCESS__ * Can be requested for multiple identities in a single request. * Supports self request and request on behalf of other users. Refer to the [Get Access Request Configuration](https://developer.sailpoint.com/idn/api/v3/get-access-request-config) endpoint for request configuration options.   * Allows any authenticated token (except API) to call this endpoint to request to grant access to themselves. Depending on the configuration, a user can request access for others. * Roles, access profiles and entitlements can be requested. * While requesting entitlements, maximum of 25 entitlements and 10 recipients are allowed in a request.   __REVOKE_ACCESS__ * Can only be requested for a single identity at a time. * You cannot use an access request to revoke access from an identity if that access has been granted by role membership or by birthright provisioning.  * Does not support self request. Only manager can request to revoke access for their directly managed employees. * If a `removeDate` is specified, then the access will be removed on that date and time only for roles, access profiles and entitlements. * Roles, access profiles, and entitlements can be requested for revocation. * Revoke requests for entitlements are limited to 1 entitlement per access request currently. * You can specify a `removeDate` if the access doesn\'t already have a sunset date. The `removeDate` must be a future date, in the UTC timezone.  * Allows a manager to request to revoke access for direct employees. A user with ORG_ADMIN authority can also request to revoke access from anyone. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessRequestBeta** | [**AccessRequestBeta**](../Models/AccessRequestBeta.md)|  | 

### Return type

[**AccessRequestResponseBeta**](../Models/AccessRequestResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestsBetaApi, AccessRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestsBetaApi = new AccessRequestsBetaApi(apiConfig);

{
  "newRequests" : [ {
    "requestedFor" : "899fd612ecfc4cf3bf48f14d0afdef89",
    "requestedItemsDetails" : [ {
      "type" : "ENTITLEMENT",
      "id" : "779c6fd7171540bba1184e5946112c28"
    } ],
    "attributesHash" : -1928438224,
    "accessRequestIds" : [ "5d3118c518a44ec7805450d53479ccdb" ]
  } ],
  "existingRequests" : [ {
    "requestedFor" : "899fd612ecfc4cf3bf48f14d0afdef89",
    "requestedItemsDetails" : [ {
      "type" : "ROLE",
      "id" : "779c6fd7171540bbc1184e5946112c28"
    } ],
    "attributesHash" : 2843118224,
    "accessRequestIds" : [ "5d3118c518a44ec7805450d53479ccdc" ]
  } ]
}


const accessRequestBeta : AccessRequestBeta = 

try {
    const val = await accessRequestsBetaApi.createAccessRequest(accessRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestsBetaApi.createAccessRequest(accessRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getAccessRequestConfig

> AccessRequestConfigBeta getAccessRequestConfig()

Get Access Request Configuration

This endpoint returns the current access-request configuration.

### Parameters

This endpoint does not need any parameter.

### Return type

[**AccessRequestConfigBeta**](../Models/AccessRequestConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestsBetaApi = new AccessRequestsBetaApi(apiConfig);

{
  "requestOnBehalfOfConfig" : {
    "allowRequestOnBehalfOfEmployeeByManager" : true,
    "allowRequestOnBehalfOfAnyoneByAnyone" : true
  },
  "approvalReminderAndEscalationConfig" : {
    "fallbackApproverRef" : {
      "name" : "Alison Ferguso",
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY",
      "email" : "alison.ferguso@identitysoon.com"
    },
    "maxReminders" : 1,
    "daysUntilEscalation" : 0,
    "daysBetweenReminders" : 0
  },
  "autoApprovalEnabled" : true,
  "entitlementRequestConfig" : {
    "requestCommentsRequired" : false,
    "deniedCommentsRequired" : false,
    "allowEntitlementRequest" : true,
    "grantRequestApprovalSchemes" : "entitlementOwner, sourceOwner, manager, workgroup:2c918084660f45d6016617daa9210584"
  },
  "reauthorizationEnabled" : true,
  "approvalsMustBeExternal" : true
}



try {
    const val = await accessRequestsBetaApi.getAccessRequestConfig();
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestsBetaApi.getAccessRequestConfig();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listAccessRequestStatus

> Array&lt;RequestedItemStatusBeta&gt; listAccessRequestStatus(requestedFor, requestedBy, regardingIdentity, assignedTo, count, limit, offset, filters, sorters, requestState)

Access Request Status

Use this API to return a list of access request statuses based on the specified query parameters. If an access request was made for access that an identity already has, the API ignores the access request.  These ignored requests do not display in the list of access request statuses. Any user with any user level can get the status of their own access requests. A user with ORG_ADMIN is required to call this API to get a list of statuses for other users.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string**| Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | [optional] [default to undefined]
 **requestedBy** | **string**| Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | [optional] [default to undefined]
 **regardingIdentity** | **string**| Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. | [optional] [default to undefined]
 **assignedTo** | **string**| Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. | [optional] [default to undefined]
 **count** | **boolean**| If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. | [optional] [default to false]
 **limit** | **number**| Max number of results to return. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *in*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** | [optional] [default to undefined]
 **requestState** | **string**| Filter the results by the state of the request. The only valid value is *EXECUTING*. | [optional] [default to undefined]

### Return type

[**Array&lt;RequestedItemStatusBeta&gt;**](../Models/RequestedItemStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestsBetaApi = new AccessRequestsBetaApi(apiConfig);

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
  "removeDate" : "2019-10-23T00:00:00Z",
  "clientMetadata" : {
    "key1" : "value1",
    "key2" : "value2"
  },
  "approvalDetails" : [ {
    "errorMessages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "The request was syntactically correct but its content is semantically invalid.",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "The request was syntactically correct but its content is semantically invalid.",
      "locale" : "en-US"
    } ],
    "removeDate" : "2020-07-11T00:00:00Z",
    "originalOwner" : {
      "name" : "Michael Michaels",
      "id" : "2c7180a46faadee4016fb4e018c20642",
      "type" : "IDENTITY"
    },
    "scheme" : "MANAGER",
    "currentOwner" : {
      "name" : "Allen Albertson",
      "id" : "2c3780a46faadee4016fb4e018c20652",
      "type" : "IDENTITY"
    },
    "modified" : "2019-08-23T18:52:57.398Z",
    "approvalId" : "2c9180877b2b6ea4017b2c545f971429",
    "comment" : "I approve this request",
    "forwarded" : false,
    "status" : "PENDING"
  }, {
    "errorMessages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "The request was syntactically correct but its content is semantically invalid.",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "The request was syntactically correct but its content is semantically invalid.",
      "locale" : "en-US"
    } ],
    "removeDate" : "2020-07-11T00:00:00Z",
    "originalOwner" : {
      "name" : "Michael Michaels",
      "id" : "2c7180a46faadee4016fb4e018c20642",
      "type" : "IDENTITY"
    },
    "scheme" : "MANAGER",
    "currentOwner" : {
      "name" : "Allen Albertson",
      "id" : "2c3780a46faadee4016fb4e018c20652",
      "type" : "IDENTITY"
    },
    "modified" : "2019-08-23T18:52:57.398Z",
    "approvalId" : "2c9180877b2b6ea4017b2c545f971429",
    "comment" : "I approve this request",
    "forwarded" : false,
    "status" : "PENDING"
  } ],
  "cancelable" : true,
  "requestType" : "GRANT_ACCESS",
  "created" : "2019-08-23T18:40:35.772Z",
  "requesterComment" : {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  },
  "preApprovalTriggerDetails" : {
    "decision" : "APPROVED",
    "comment" : "Access is Approved",
    "reviewer" : "John Doe"
  },
  "description" : "This is the Engineering role that engineers are granted.",
  "type" : "ACCESS_PROFILE",
  "approvalIds" : [ "85f0cf482dd44327b593624c07906c21", "fa57e1bfa36f41ee85e33ee59fcbeac5" ],
  "errorMessages" : [ [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ], [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ] ],
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
  "cancelledRequestDetails" : {
    "owner" : {
      "name" : "Support",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    },
    "modified" : "2019-12-20T09:17:12.192Z",
    "comment" : "This request must be cancelled."
  },
  "accessRequestId" : "2b838de9-db9b-abcf-e646-d4f274ad4238",
  "provisioningDetails" : {
    "orderedSubPhaseReferences" : "manualWorkItemDetails"
  },
  "accountActivityItemId" : "2c9180926cbfbddd016cbfc7c3b10010",
  "name" : "AccessProfile1",
  "manualWorkItemDetails" : [ {
    "originalOwner" : {
      "name" : "Michael Michaels",
      "id" : "2c7180a46faadee4016fb4e018c20642",
      "type" : "IDENTITY"
    },
    "currentOwner" : {
      "name" : "Allen Albertson",
      "id" : "2c3780a46faadee4016fb4e018c20652",
      "type" : "IDENTITY"
    },
    "modified" : "2019-08-23T18:52:57.398Z",
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
    "forwarded" : true,
    "status" : "PENDING"
  }, {
    "originalOwner" : {
      "name" : "Michael Michaels",
      "id" : "2c7180a46faadee4016fb4e018c20642",
      "type" : "IDENTITY"
    },
    "currentOwner" : {
      "name" : "Allen Albertson",
      "id" : "2c3780a46faadee4016fb4e018c20652",
      "type" : "IDENTITY"
    },
    "modified" : "2019-08-23T18:52:57.398Z",
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
    "forwarded" : true,
    "status" : "PENDING"
  } ],
  "modified" : "2019-08-23T18:52:59.162Z",
  "state" : "EXECUTING",
  "accessRequestPhases" : [ {
    "result" : "SUCCESSFUL",
    "phaseReference" : "approvalDetails",
    "name" : "APPROVAL_PHASE",
    "started" : "2020-07-11T00:00:00Z",
    "finished" : "2020-07-12T00:00:00Z",
    "state" : "COMPLETED"
  }, {
    "result" : "SUCCESSFUL",
    "phaseReference" : "approvalDetails",
    "name" : "APPROVAL_PHASE",
    "started" : "2020-07-11T00:00:00Z",
    "finished" : "2020-07-12T00:00:00Z",
    "state" : "COMPLETED"
  } ]
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
  "removeDate" : "2019-10-23T00:00:00Z",
  "clientMetadata" : {
    "key1" : "value1",
    "key2" : "value2"
  },
  "approvalDetails" : [ {
    "errorMessages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "The request was syntactically correct but its content is semantically invalid.",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "The request was syntactically correct but its content is semantically invalid.",
      "locale" : "en-US"
    } ],
    "removeDate" : "2020-07-11T00:00:00Z",
    "originalOwner" : {
      "name" : "Michael Michaels",
      "id" : "2c7180a46faadee4016fb4e018c20642",
      "type" : "IDENTITY"
    },
    "scheme" : "MANAGER",
    "currentOwner" : {
      "name" : "Allen Albertson",
      "id" : "2c3780a46faadee4016fb4e018c20652",
      "type" : "IDENTITY"
    },
    "modified" : "2019-08-23T18:52:57.398Z",
    "approvalId" : "2c9180877b2b6ea4017b2c545f971429",
    "comment" : "I approve this request",
    "forwarded" : false,
    "status" : "PENDING"
  }, {
    "errorMessages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "The request was syntactically correct but its content is semantically invalid.",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "The request was syntactically correct but its content is semantically invalid.",
      "locale" : "en-US"
    } ],
    "removeDate" : "2020-07-11T00:00:00Z",
    "originalOwner" : {
      "name" : "Michael Michaels",
      "id" : "2c7180a46faadee4016fb4e018c20642",
      "type" : "IDENTITY"
    },
    "scheme" : "MANAGER",
    "currentOwner" : {
      "name" : "Allen Albertson",
      "id" : "2c3780a46faadee4016fb4e018c20652",
      "type" : "IDENTITY"
    },
    "modified" : "2019-08-23T18:52:57.398Z",
    "approvalId" : "2c9180877b2b6ea4017b2c545f971429",
    "comment" : "I approve this request",
    "forwarded" : false,
    "status" : "PENDING"
  } ],
  "cancelable" : true,
  "requestType" : "GRANT_ACCESS",
  "created" : "2019-08-23T18:40:35.772Z",
  "requesterComment" : {
    "created" : "2017-07-11T18:45:37.098Z",
    "author" : {
      "name" : "john.doe",
      "id" : "2c9180847e25f377017e2ae8cae4650b",
      "type" : "IDENTITY"
    },
    "comment" : "This is a comment."
  },
  "preApprovalTriggerDetails" : {
    "decision" : "APPROVED",
    "comment" : "Access is Approved",
    "reviewer" : "John Doe"
  },
  "description" : "This is the Engineering role that engineers are granted.",
  "type" : "ACCESS_PROFILE",
  "approvalIds" : [ "85f0cf482dd44327b593624c07906c21", "fa57e1bfa36f41ee85e33ee59fcbeac5" ],
  "errorMessages" : [ [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ], [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ] ],
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
  "cancelledRequestDetails" : {
    "owner" : {
      "name" : "Support",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    },
    "modified" : "2019-12-20T09:17:12.192Z",
    "comment" : "This request must be cancelled."
  },
  "accessRequestId" : "2b838de9-db9b-abcf-e646-d4f274ad4238",
  "provisioningDetails" : {
    "orderedSubPhaseReferences" : "manualWorkItemDetails"
  },
  "accountActivityItemId" : "2c9180926cbfbddd016cbfc7c3b10010",
  "name" : "AccessProfile1",
  "manualWorkItemDetails" : [ {
    "originalOwner" : {
      "name" : "Michael Michaels",
      "id" : "2c7180a46faadee4016fb4e018c20642",
      "type" : "IDENTITY"
    },
    "currentOwner" : {
      "name" : "Allen Albertson",
      "id" : "2c3780a46faadee4016fb4e018c20652",
      "type" : "IDENTITY"
    },
    "modified" : "2019-08-23T18:52:57.398Z",
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
    "forwarded" : true,
    "status" : "PENDING"
  }, {
    "originalOwner" : {
      "name" : "Michael Michaels",
      "id" : "2c7180a46faadee4016fb4e018c20642",
      "type" : "IDENTITY"
    },
    "currentOwner" : {
      "name" : "Allen Albertson",
      "id" : "2c3780a46faadee4016fb4e018c20652",
      "type" : "IDENTITY"
    },
    "modified" : "2019-08-23T18:52:57.398Z",
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
    "forwarded" : true,
    "status" : "PENDING"
  } ],
  "modified" : "2019-08-23T18:52:59.162Z",
  "state" : "EXECUTING",
  "accessRequestPhases" : [ {
    "result" : "SUCCESSFUL",
    "phaseReference" : "approvalDetails",
    "name" : "APPROVAL_PHASE",
    "started" : "2020-07-11T00:00:00Z",
    "finished" : "2020-07-12T00:00:00Z",
    "state" : "COMPLETED"
  }, {
    "result" : "SUCCESSFUL",
    "phaseReference" : "approvalDetails",
    "name" : "APPROVAL_PHASE",
    "started" : "2020-07-11T00:00:00Z",
    "finished" : "2020-07-12T00:00:00Z",
    "state" : "COMPLETED"
  } ]
} ]


const requestedFor : string = "2c9180877b2b6ea4017b2c545f971429"; // Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) (default to undefined)
const requestedBy : string = "2c9180877b2b6ea4017b2c545f971429"; // Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) (default to undefined)
const regardingIdentity : string = "2c9180877b2b6ea4017b2c545f971429"; // Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional) (default to undefined)
const assignedTo : string = "2c9180877b2b6ea4017b2c545f971429"; // Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional) (default to undefined)
const count : boolean = false; // If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false)
const limit : number = 100; // Max number of results to return. (optional) (default to 250)
const offset : number = 10; // Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) (default to undefined)
const filters : string = "accountActivityItemId eq "2c918086771c86df0177401efcdf54c0""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *in*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional) (default to undefined)
const sorters : string = "created"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional) (default to undefined)
const requestState : string = "request-state=EXECUTING"; // Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional) (default to undefined)

try {
    const val = await accessRequestsBetaApi.listAccessRequestStatus();
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestsBetaApi.listAccessRequestStatus(requestedFor, requestedBy, regardingIdentity, assignedTo, count, limit, offset, filters, sorters, requestState);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## setAccessRequestConfig

> AccessRequestConfigBeta setAccessRequestConfig(accessRequestConfigBeta)

Update Access Request Configuration

This endpoint replaces the current access-request configuration.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessRequestConfigBeta** | [**AccessRequestConfigBeta**](../Models/AccessRequestConfigBeta.md)|  | 

### Return type

[**AccessRequestConfigBeta**](../Models/AccessRequestConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessRequestsBetaApi, AccessRequestConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessRequestsBetaApi = new AccessRequestsBetaApi(apiConfig);

{
  "requestOnBehalfOfConfig" : {
    "allowRequestOnBehalfOfEmployeeByManager" : true,
    "allowRequestOnBehalfOfAnyoneByAnyone" : true
  },
  "approvalReminderAndEscalationConfig" : {
    "fallbackApproverRef" : {
      "name" : "Alison Ferguso",
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY",
      "email" : "alison.ferguso@identitysoon.com"
    },
    "maxReminders" : 1,
    "daysUntilEscalation" : 0,
    "daysBetweenReminders" : 0
  },
  "autoApprovalEnabled" : true,
  "entitlementRequestConfig" : {
    "requestCommentsRequired" : false,
    "deniedCommentsRequired" : false,
    "allowEntitlementRequest" : true,
    "grantRequestApprovalSchemes" : "entitlementOwner, sourceOwner, manager, workgroup:2c918084660f45d6016617daa9210584"
  },
  "reauthorizationEnabled" : true,
  "approvalsMustBeExternal" : true
}


const accessRequestConfigBeta : AccessRequestConfigBeta = 

try {
    const val = await accessRequestsBetaApi.setAccessRequestConfig(accessRequestConfigBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessRequestsBetaApi.setAccessRequestConfig(accessRequestConfigBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

