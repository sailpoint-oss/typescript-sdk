---
title: AccountActivitiesBetaApi
pagination_label: AccountActivitiesBetaApi
sidebar_label: AccountActivitiesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccountActivitiesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccountActivitiesBetaApi']
---

# AccountActivitiesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountActivity**](AccountActivitiesBetaApi.md#getAccountActivity) | **GET** /account-activities/{id} | Get Account Activity
[**listAccountActivities**](AccountActivitiesBetaApi.md#listAccountActivities) | **GET** /account-activities | List Account Activities



## getAccountActivity

> CancelableAccountActivityBeta getAccountActivity(id)

Get Account Activity

This gets a single account activity by its id.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The account activity id | [default to undefined]

### Return type

[**CancelableAccountActivityBeta**](../Models/CancelableAccountActivityBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountActivitiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountActivitiesBetaApi = new AccountActivitiesBetaApi(apiConfig);

{
  "clientMetadata" : {
    "key" : "clientMetadata"
  },
  "cancelable" : true,
  "created" : "2017-07-11T18:45:37.098Z",
  "cancelComment" : {
    "date" : "2017-07-11T18:45:37.098Z",
    "commenterName" : "Adam Kennedy",
    "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
    "commenterId" : "2c918084660f45d6016617daa9210584"
  },
  "warnings" : [ "warnings", "warnings" ],
  "executionStatus" : "COMPLETED",
  "completed" : "2018-10-19T13:49:37.385Z",
  "type" : "appRequest",
  "targetIdentitySummary" : {
    "identityId" : "c15b9f5cca5a4e9599eaa0e64fa921bd",
    "name" : "SailPoint Services",
    "id" : "ff80818155fe8c080155fe8d925b0316",
    "completed" : true
  },
  "name" : "2c9180835d2e5168015d32f890ca1581",
  "requesterIdentitySummary" : {
    "identityId" : "c15b9f5cca5a4e9599eaa0e64fa921bd",
    "name" : "SailPoint Services",
    "id" : "ff80818155fe8c080155fe8d925b0316",
    "completed" : true
  },
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "completionStatus" : "SUCCESS",
  "items" : [ {
    "approvalStatus" : "PENDING",
    "reviewerComment" : {
      "date" : "2017-07-11T18:45:37.098Z",
      "commenterName" : "Adam Kennedy",
      "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
      "commenterId" : "2c918084660f45d6016617daa9210584"
    },
    "sourceId" : "2c91808363ef85290164000587130c0c",
    "clientMetadata" : {
      "customKey1" : "custom value 1",
      "customKey2" : "custom value 2"
    },
    "removeDate" : "2020-07-11T00:00:00Z",
    "reviewerIdentitySummary" : {
      "identityId" : "c15b9f5cca5a4e9599eaa0e64fa921bd",
      "name" : "SailPoint Services",
      "id" : "ff80818155fe8c080155fe8d925b0316",
      "completed" : true
    },
    "requesterComment" : {
      "date" : "2017-07-11T18:45:37.098Z",
      "commenterName" : "Adam Kennedy",
      "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
      "commenterId" : "2c918084660f45d6016617daa9210584"
    },
    "accountRequestInfo" : {
      "requestedObjectId" : "2c91808563ef85690164001c31140c0c",
      "requestedObjectName" : "Treasury Analyst",
      "requestedObjectType" : "ACCESS_PROFILE"
    },
    "nativeIdentity" : "Sandie.Camero",
    "requested" : "2017-07-11T18:45:37.098Z",
    "provisioningStatus" : "PENDING",
    "name" : "48c545831b264409a81befcabb0e3c5a",
    "id" : "48c545831b264409a81befcabb0e3c5a",
    "attribute" : "detectedRoles",
    "operation" : "ADD",
    "value" : "Treasury Analyst [AccessProfile-1529010191212]"
  }, {
    "approvalStatus" : "PENDING",
    "reviewerComment" : {
      "date" : "2017-07-11T18:45:37.098Z",
      "commenterName" : "Adam Kennedy",
      "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
      "commenterId" : "2c918084660f45d6016617daa9210584"
    },
    "sourceId" : "2c91808363ef85290164000587130c0c",
    "clientMetadata" : {
      "customKey1" : "custom value 1",
      "customKey2" : "custom value 2"
    },
    "removeDate" : "2020-07-11T00:00:00Z",
    "reviewerIdentitySummary" : {
      "identityId" : "c15b9f5cca5a4e9599eaa0e64fa921bd",
      "name" : "SailPoint Services",
      "id" : "ff80818155fe8c080155fe8d925b0316",
      "completed" : true
    },
    "requesterComment" : {
      "date" : "2017-07-11T18:45:37.098Z",
      "commenterName" : "Adam Kennedy",
      "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
      "commenterId" : "2c918084660f45d6016617daa9210584"
    },
    "accountRequestInfo" : {
      "requestedObjectId" : "2c91808563ef85690164001c31140c0c",
      "requestedObjectName" : "Treasury Analyst",
      "requestedObjectType" : "ACCESS_PROFILE"
    },
    "nativeIdentity" : "Sandie.Camero",
    "requested" : "2017-07-11T18:45:37.098Z",
    "provisioningStatus" : "PENDING",
    "name" : "48c545831b264409a81befcabb0e3c5a",
    "id" : "48c545831b264409a81befcabb0e3c5a",
    "attribute" : "detectedRoles",
    "operation" : "ADD",
    "value" : "Treasury Analyst [AccessProfile-1529010191212]"
  } ],
  "errors" : [ "sailpoint.connector.ConnectorException: java.lang.InterruptedException: Timeout waiting for response to message 0 from client 57a4ab97-ab3f-4aef-9fe2-0eaf15c73d26 after 60 seconds." ]
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The account activity id (default to undefined)

try {
    const val = await accountActivitiesBetaApi.getAccountActivity(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await accountActivitiesBetaApi.getAccountActivity(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listAccountActivities

> Array&lt;CancelableAccountActivityBeta&gt; listAccountActivities(requestedFor, requestedBy, regardingIdentity, type, limit, offset, count, filters, sorters)

List Account Activities

This gets a collection of account activities that satisfy the given query parameters.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string**| The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | [optional] [default to undefined]
 **requestedBy** | **string**| The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | [optional] [default to undefined]
 **regardingIdentity** | **string**| The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. | [optional] [default to undefined]
 **type** | **string**| The type of account activity. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;CancelableAccountActivityBeta&gt;**](../Models/CancelableAccountActivityBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountActivitiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountActivitiesBetaApi = new AccountActivitiesBetaApi(apiConfig);

[ {
  "clientMetadata" : {
    "key" : "clientMetadata"
  },
  "cancelable" : true,
  "created" : "2017-07-11T18:45:37.098Z",
  "cancelComment" : {
    "date" : "2017-07-11T18:45:37.098Z",
    "commenterName" : "Adam Kennedy",
    "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
    "commenterId" : "2c918084660f45d6016617daa9210584"
  },
  "warnings" : [ "warnings", "warnings" ],
  "executionStatus" : "COMPLETED",
  "completed" : "2018-10-19T13:49:37.385Z",
  "type" : "appRequest",
  "targetIdentitySummary" : {
    "identityId" : "c15b9f5cca5a4e9599eaa0e64fa921bd",
    "name" : "SailPoint Services",
    "id" : "ff80818155fe8c080155fe8d925b0316",
    "completed" : true
  },
  "name" : "2c9180835d2e5168015d32f890ca1581",
  "requesterIdentitySummary" : {
    "identityId" : "c15b9f5cca5a4e9599eaa0e64fa921bd",
    "name" : "SailPoint Services",
    "id" : "ff80818155fe8c080155fe8d925b0316",
    "completed" : true
  },
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "completionStatus" : "SUCCESS",
  "items" : [ {
    "approvalStatus" : "PENDING",
    "reviewerComment" : {
      "date" : "2017-07-11T18:45:37.098Z",
      "commenterName" : "Adam Kennedy",
      "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
      "commenterId" : "2c918084660f45d6016617daa9210584"
    },
    "sourceId" : "2c91808363ef85290164000587130c0c",
    "clientMetadata" : {
      "customKey1" : "custom value 1",
      "customKey2" : "custom value 2"
    },
    "removeDate" : "2020-07-11T00:00:00Z",
    "reviewerIdentitySummary" : {
      "identityId" : "c15b9f5cca5a4e9599eaa0e64fa921bd",
      "name" : "SailPoint Services",
      "id" : "ff80818155fe8c080155fe8d925b0316",
      "completed" : true
    },
    "requesterComment" : {
      "date" : "2017-07-11T18:45:37.098Z",
      "commenterName" : "Adam Kennedy",
      "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
      "commenterId" : "2c918084660f45d6016617daa9210584"
    },
    "accountRequestInfo" : {
      "requestedObjectId" : "2c91808563ef85690164001c31140c0c",
      "requestedObjectName" : "Treasury Analyst",
      "requestedObjectType" : "ACCESS_PROFILE"
    },
    "nativeIdentity" : "Sandie.Camero",
    "requested" : "2017-07-11T18:45:37.098Z",
    "provisioningStatus" : "PENDING",
    "name" : "48c545831b264409a81befcabb0e3c5a",
    "id" : "48c545831b264409a81befcabb0e3c5a",
    "attribute" : "detectedRoles",
    "operation" : "ADD",
    "value" : "Treasury Analyst [AccessProfile-1529010191212]"
  }, {
    "approvalStatus" : "PENDING",
    "reviewerComment" : {
      "date" : "2017-07-11T18:45:37.098Z",
      "commenterName" : "Adam Kennedy",
      "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
      "commenterId" : "2c918084660f45d6016617daa9210584"
    },
    "sourceId" : "2c91808363ef85290164000587130c0c",
    "clientMetadata" : {
      "customKey1" : "custom value 1",
      "customKey2" : "custom value 2"
    },
    "removeDate" : "2020-07-11T00:00:00Z",
    "reviewerIdentitySummary" : {
      "identityId" : "c15b9f5cca5a4e9599eaa0e64fa921bd",
      "name" : "SailPoint Services",
      "id" : "ff80818155fe8c080155fe8d925b0316",
      "completed" : true
    },
    "requesterComment" : {
      "date" : "2017-07-11T18:45:37.098Z",
      "commenterName" : "Adam Kennedy",
      "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
      "commenterId" : "2c918084660f45d6016617daa9210584"
    },
    "accountRequestInfo" : {
      "requestedObjectId" : "2c91808563ef85690164001c31140c0c",
      "requestedObjectName" : "Treasury Analyst",
      "requestedObjectType" : "ACCESS_PROFILE"
    },
    "nativeIdentity" : "Sandie.Camero",
    "requested" : "2017-07-11T18:45:37.098Z",
    "provisioningStatus" : "PENDING",
    "name" : "48c545831b264409a81befcabb0e3c5a",
    "id" : "48c545831b264409a81befcabb0e3c5a",
    "attribute" : "detectedRoles",
    "operation" : "ADD",
    "value" : "Treasury Analyst [AccessProfile-1529010191212]"
  } ],
  "errors" : [ "sailpoint.connector.ConnectorException: java.lang.InterruptedException: Timeout waiting for response to message 0 from client 57a4ab97-ab3f-4aef-9fe2-0eaf15c73d26 after 60 seconds." ]
}, {
  "clientMetadata" : {
    "key" : "clientMetadata"
  },
  "cancelable" : true,
  "created" : "2017-07-11T18:45:37.098Z",
  "cancelComment" : {
    "date" : "2017-07-11T18:45:37.098Z",
    "commenterName" : "Adam Kennedy",
    "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
    "commenterId" : "2c918084660f45d6016617daa9210584"
  },
  "warnings" : [ "warnings", "warnings" ],
  "executionStatus" : "COMPLETED",
  "completed" : "2018-10-19T13:49:37.385Z",
  "type" : "appRequest",
  "targetIdentitySummary" : {
    "identityId" : "c15b9f5cca5a4e9599eaa0e64fa921bd",
    "name" : "SailPoint Services",
    "id" : "ff80818155fe8c080155fe8d925b0316",
    "completed" : true
  },
  "name" : "2c9180835d2e5168015d32f890ca1581",
  "requesterIdentitySummary" : {
    "identityId" : "c15b9f5cca5a4e9599eaa0e64fa921bd",
    "name" : "SailPoint Services",
    "id" : "ff80818155fe8c080155fe8d925b0316",
    "completed" : true
  },
  "modified" : "2018-06-25T20:22:28.104Z",
  "id" : "2c9180835d2e5168015d32f890ca1581",
  "completionStatus" : "SUCCESS",
  "items" : [ {
    "approvalStatus" : "PENDING",
    "reviewerComment" : {
      "date" : "2017-07-11T18:45:37.098Z",
      "commenterName" : "Adam Kennedy",
      "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
      "commenterId" : "2c918084660f45d6016617daa9210584"
    },
    "sourceId" : "2c91808363ef85290164000587130c0c",
    "clientMetadata" : {
      "customKey1" : "custom value 1",
      "customKey2" : "custom value 2"
    },
    "removeDate" : "2020-07-11T00:00:00Z",
    "reviewerIdentitySummary" : {
      "identityId" : "c15b9f5cca5a4e9599eaa0e64fa921bd",
      "name" : "SailPoint Services",
      "id" : "ff80818155fe8c080155fe8d925b0316",
      "completed" : true
    },
    "requesterComment" : {
      "date" : "2017-07-11T18:45:37.098Z",
      "commenterName" : "Adam Kennedy",
      "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
      "commenterId" : "2c918084660f45d6016617daa9210584"
    },
    "accountRequestInfo" : {
      "requestedObjectId" : "2c91808563ef85690164001c31140c0c",
      "requestedObjectName" : "Treasury Analyst",
      "requestedObjectType" : "ACCESS_PROFILE"
    },
    "nativeIdentity" : "Sandie.Camero",
    "requested" : "2017-07-11T18:45:37.098Z",
    "provisioningStatus" : "PENDING",
    "name" : "48c545831b264409a81befcabb0e3c5a",
    "id" : "48c545831b264409a81befcabb0e3c5a",
    "attribute" : "detectedRoles",
    "operation" : "ADD",
    "value" : "Treasury Analyst [AccessProfile-1529010191212]"
  }, {
    "approvalStatus" : "PENDING",
    "reviewerComment" : {
      "date" : "2017-07-11T18:45:37.098Z",
      "commenterName" : "Adam Kennedy",
      "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
      "commenterId" : "2c918084660f45d6016617daa9210584"
    },
    "sourceId" : "2c91808363ef85290164000587130c0c",
    "clientMetadata" : {
      "customKey1" : "custom value 1",
      "customKey2" : "custom value 2"
    },
    "removeDate" : "2020-07-11T00:00:00Z",
    "reviewerIdentitySummary" : {
      "identityId" : "c15b9f5cca5a4e9599eaa0e64fa921bd",
      "name" : "SailPoint Services",
      "id" : "ff80818155fe8c080155fe8d925b0316",
      "completed" : true
    },
    "requesterComment" : {
      "date" : "2017-07-11T18:45:37.098Z",
      "commenterName" : "Adam Kennedy",
      "body" : "Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.",
      "commenterId" : "2c918084660f45d6016617daa9210584"
    },
    "accountRequestInfo" : {
      "requestedObjectId" : "2c91808563ef85690164001c31140c0c",
      "requestedObjectName" : "Treasury Analyst",
      "requestedObjectType" : "ACCESS_PROFILE"
    },
    "nativeIdentity" : "Sandie.Camero",
    "requested" : "2017-07-11T18:45:37.098Z",
    "provisioningStatus" : "PENDING",
    "name" : "48c545831b264409a81befcabb0e3c5a",
    "id" : "48c545831b264409a81befcabb0e3c5a",
    "attribute" : "detectedRoles",
    "operation" : "ADD",
    "value" : "Treasury Analyst [AccessProfile-1529010191212]"
  } ],
  "errors" : [ "sailpoint.connector.ConnectorException: java.lang.InterruptedException: Timeout waiting for response to message 0 from client 57a4ab97-ab3f-4aef-9fe2-0eaf15c73d26 after 60 seconds." ]
} ]


const requestedFor : string = "requestedFor_example"; // The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) (default to undefined)
const requestedBy : string = "requestedBy_example"; // The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) (default to undefined)
const regardingIdentity : string = "regardingIdentity_example"; // The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional) (default to undefined)
const type : string = "type_example"; // The type of account activity. (optional) (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "filters_example"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw* (optional) (default to undefined)
const sorters : string = "sorters_example"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified** (optional) (default to undefined)

try {
    const val = await accountActivitiesBetaApi.listAccountActivities();
    
    // Below is a request that includes all optional parameters      
    // const val = await accountActivitiesBetaApi.listAccountActivities(requestedFor, requestedBy, regardingIdentity, type, limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

