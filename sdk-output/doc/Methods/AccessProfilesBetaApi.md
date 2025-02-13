---
title: AccessProfilesBetaApi
pagination_label: AccessProfilesBetaApi
sidebar_label: AccessProfilesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccessProfilesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccessProfilesBetaApi']
---

# AccessProfilesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccessProfile**](AccessProfilesBetaApi.md#createAccessProfile) | **POST** /access-profiles | Create Access Profile
[**deleteAccessProfile**](AccessProfilesBetaApi.md#deleteAccessProfile) | **DELETE** /access-profiles/{id} | Delete the specified Access Profile
[**deleteAccessProfilesInBulk**](AccessProfilesBetaApi.md#deleteAccessProfilesInBulk) | **POST** /access-profiles/bulk-delete | Delete Access Profile(s)
[**getAccessProfile**](AccessProfilesBetaApi.md#getAccessProfile) | **GET** /access-profiles/{id} | Get an Access Profile
[**getAccessProfileEntitlements**](AccessProfilesBetaApi.md#getAccessProfileEntitlements) | **GET** /access-profiles/{id}/entitlements | List Access Profile\&#39;s Entitlements
[**listAccessProfiles**](AccessProfilesBetaApi.md#listAccessProfiles) | **GET** /access-profiles | List Access Profiles
[**patchAccessProfile**](AccessProfilesBetaApi.md#patchAccessProfile) | **PATCH** /access-profiles/{id} | Patch a specified Access Profile
[**updateAccessProfilesInBulk**](AccessProfilesBetaApi.md#updateAccessProfilesInBulk) | **POST** /access-profiles/bulk-update-requestable | Update Access Profile(s) requestable field.



## createAccessProfile

> AccessProfileBeta createAccessProfile(accessProfileBeta)

Create Access Profile

Use this API to create an access profile. A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API. In addition, a token with only ROLE_SUBADMIN or SOURCE_SUBADMIN authority must be associated with the access profile\'s Source. The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfileBeta** | [**AccessProfileBeta**](../Models/AccessProfileBeta.md)|  | 

### Return type

[**AccessProfileBeta**](../Models/AccessProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi, AccessProfileBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);

{
  "owner" : {
    "name" : "support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "entitlements" : [ {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  }, {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  } ],
  "created" : "2021-03-01T22:32:58.104Z",
  "description" : "Collection of entitlements to read/write the employee database",
  "source" : {
    "name" : "ODS-AD-SOURCE",
    "id" : "2c91809773dee3610173fdb0b6061ef4",
    "type" : "SOURCE"
  },
  "enabled" : true,
  "revocationRequestConfig" : {
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ]
  },
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
  "accessRequestConfig" : {
    "commentsRequired" : true,
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ],
    "denialCommentsRequired" : true
  },
  "name" : "Employee-database-read-write",
  "provisioningCriteria" : {
    "children" : [ {
      "children" : [ {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      }, {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      } ],
      "attribute" : "email",
      "operation" : "EQUALS",
      "value" : "carlee.cert1c9f9b6fd@mailinator.com"
    }, {
      "children" : [ {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      }, {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      } ],
      "attribute" : "email",
      "operation" : "EQUALS",
      "value" : "carlee.cert1c9f9b6fd@mailinator.com"
    } ],
    "attribute" : "email",
    "operation" : "EQUALS",
    "value" : "carlee.cert1c9f9b6fd@mailinator.com"
  },
  "modified" : "2021-03-02T20:22:28.104Z",
  "id" : "2c91808a7190d06e01719938fcd20792",
  "requestable" : true
}


const accessProfileBeta : AccessProfileBeta = 

try {
    const val = await accessProfilesBetaApi.createAccessProfile(accessProfileBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessProfilesBetaApi.createAccessProfile(accessProfileBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteAccessProfile

> deleteAccessProfile(id)

Delete the specified Access Profile

This API deletes an existing Access Profile.  The Access Profile must not be in use, for example, Access Profile can not be deleted if they belong to an Application, Life Cycle State or a Role. If it is, a 400 error is returned.  A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to invoke this API. In addition, a SOURCE_SUBADMIN token must be able to administer the Source associated with the Access Profile.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Access Profile to delete | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);

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


const id : string = "2c91808a7813090a017814121919ecca"; // ID of the Access Profile to delete (default to undefined)

try {
    const val = await accessProfilesBetaApi.deleteAccessProfile(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessProfilesBetaApi.deleteAccessProfile(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteAccessProfilesInBulk

> AccessProfileBulkDeleteResponseBeta deleteAccessProfilesInBulk(accessProfileBulkDeleteRequestBeta)

Delete Access Profile(s)

This endpoint initiates a bulk deletion of one or more access profiles. When the request is successful, the endpoint returns the bulk delete\'s task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result\'s status and information.  This endpoint can only bulk delete up to a limit of 50 access profiles per request.  By default, if any of the indicated access profiles are in use, no deletions will be performed and the **inUse** field of the response indicates the usages that must be removed first. If the request field **bestEffortOnly** is **true**, however, usages are reported in the **inUse** response field but all other indicated access profiles will be deleted.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfileBulkDeleteRequestBeta** | [**AccessProfileBulkDeleteRequestBeta**](../Models/AccessProfileBulkDeleteRequestBeta.md)|  | 

### Return type

[**AccessProfileBulkDeleteResponseBeta**](../Models/AccessProfileBulkDeleteResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi, AccessProfileBulkDeleteRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);

{
  "pending" : [ "2c91808876438bbb017668c21919ecca", "2c91808876438bb201766e129f151816" ],
  "inUse" : [ {
    "accessProfileId" : "2c91808876438bbb017668c21919ecca",
    "usedBy" : [ {
      "name" : "Manager Role",
      "id" : "2c8180857a9b3da0017aa03418480f9d",
      "type" : "ROLE"
    }, {
      "name" : "Manager Role",
      "id" : "2c8180857a9b3da0017aa03418480f9d",
      "type" : "ROLE"
    } ]
  }, {
    "accessProfileId" : "2c91808876438bbb017668c21919ecca",
    "usedBy" : [ {
      "name" : "Manager Role",
      "id" : "2c8180857a9b3da0017aa03418480f9d",
      "type" : "ROLE"
    }, {
      "name" : "Manager Role",
      "id" : "2c8180857a9b3da0017aa03418480f9d",
      "type" : "ROLE"
    } ]
  } ],
  "taskId" : "2c9180867817ac4d017817c491119a20"
}


const accessProfileBulkDeleteRequestBeta : AccessProfileBulkDeleteRequestBeta = 

try {
    const val = await accessProfilesBetaApi.deleteAccessProfilesInBulk(accessProfileBulkDeleteRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessProfilesBetaApi.deleteAccessProfilesInBulk(accessProfileBulkDeleteRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getAccessProfile

> AccessProfileBeta getAccessProfile(id)

Get an Access Profile

This API returns an Access Profile by its ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Access Profile | [default to undefined]

### Return type

[**AccessProfileBeta**](../Models/AccessProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);

{
  "owner" : {
    "name" : "support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "entitlements" : [ {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  }, {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  } ],
  "created" : "2021-03-01T22:32:58.104Z",
  "description" : "Collection of entitlements to read/write the employee database",
  "source" : {
    "name" : "ODS-AD-SOURCE",
    "id" : "2c91809773dee3610173fdb0b6061ef4",
    "type" : "SOURCE"
  },
  "enabled" : true,
  "revocationRequestConfig" : {
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ]
  },
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
  "accessRequestConfig" : {
    "commentsRequired" : true,
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ],
    "denialCommentsRequired" : true
  },
  "name" : "Employee-database-read-write",
  "provisioningCriteria" : {
    "children" : [ {
      "children" : [ {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      }, {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      } ],
      "attribute" : "email",
      "operation" : "EQUALS",
      "value" : "carlee.cert1c9f9b6fd@mailinator.com"
    }, {
      "children" : [ {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      }, {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      } ],
      "attribute" : "email",
      "operation" : "EQUALS",
      "value" : "carlee.cert1c9f9b6fd@mailinator.com"
    } ],
    "attribute" : "email",
    "operation" : "EQUALS",
    "value" : "carlee.cert1c9f9b6fd@mailinator.com"
  },
  "modified" : "2021-03-02T20:22:28.104Z",
  "id" : "2c91808a7190d06e01719938fcd20792",
  "requestable" : true
}


const id : string = "2c9180837ca6693d017ca8d097500149"; // ID of the Access Profile (default to undefined)

try {
    const val = await accessProfilesBetaApi.getAccessProfile(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessProfilesBetaApi.getAccessProfile(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getAccessProfileEntitlements

> Array&lt;EntitlementBeta&gt; getAccessProfileEntitlements(id, limit, offset, count, filters, sorters)

List Access Profile\'s Entitlements

Use this API to get a list of an access profile\'s entitlements.  A user with SOURCE_SUBADMIN authority must have access to the source associated with the specified access profile.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the access profile containing the entitlements. | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the \&#39;+\&#39; symbol in their names.   | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;EntitlementBeta&gt;**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);

[ {
  "owner" : {
    "name" : "identity 1",
    "id" : "2a2fdacca5e345f18bf7970cfbb8fec2",
    "type" : "IDENTITY"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "description" : "CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local",
  "source" : {
    "name" : "ODS-AD-Source",
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "SOURCE"
  },
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
  "privileged" : true,
  "directPermissions" : [ {
    "rights" : [ "SELECT", "SELECT" ],
    "target" : "SYS.GV_$TRANSACTION"
  }, {
    "rights" : [ "SELECT", "SELECT" ],
    "target" : "SYS.GV_$TRANSACTION"
  } ],
  "manuallyUpdatedFields" : {
    "DESCRIPTION" : true,
    "DISPLAY_NAME" : true
  },
  "name" : "LauncherTest2",
  "modified" : "2020-10-08T18:33:52.029Z",
  "sourceSchemaObjectType" : "group",
  "attributes" : {
    "fieldName" : "fieldValue"
  },
  "accessModelMetadata" : {
    "attributes" : [ {
      "key" : "iscPrivacy",
      "name" : "Privacy",
      "multiselect" : false,
      "status" : "active",
      "type" : "governance",
      "objectTypes" : [ "all" ],
      "description" : "Specifies the level of privacy associated with an access item.",
      "values" : [ {
        "value" : "public",
        "name" : "Public",
        "status" : "active"
      } ]
    } ]
  },
  "id" : "2c91808874ff91550175097daaec161c",
  "attribute" : "memberOf",
  "requestable" : true,
  "value" : "CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local",
  "cloudGoverned" : true
}, {
  "owner" : {
    "name" : "identity 1",
    "id" : "2a2fdacca5e345f18bf7970cfbb8fec2",
    "type" : "IDENTITY"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "description" : "CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local",
  "source" : {
    "name" : "ODS-AD-Source",
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "SOURCE"
  },
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
  "privileged" : true,
  "directPermissions" : [ {
    "rights" : [ "SELECT", "SELECT" ],
    "target" : "SYS.GV_$TRANSACTION"
  }, {
    "rights" : [ "SELECT", "SELECT" ],
    "target" : "SYS.GV_$TRANSACTION"
  } ],
  "manuallyUpdatedFields" : {
    "DESCRIPTION" : true,
    "DISPLAY_NAME" : true
  },
  "name" : "LauncherTest2",
  "modified" : "2020-10-08T18:33:52.029Z",
  "sourceSchemaObjectType" : "group",
  "attributes" : {
    "fieldName" : "fieldValue"
  },
  "accessModelMetadata" : {
    "attributes" : [ {
      "key" : "iscPrivacy",
      "name" : "Privacy",
      "multiselect" : false,
      "status" : "active",
      "type" : "governance",
      "objectTypes" : [ "all" ],
      "description" : "Specifies the level of privacy associated with an access item.",
      "values" : [ {
        "value" : "public",
        "name" : "Public",
        "status" : "active"
      } ]
    } ]
  },
  "id" : "2c91808874ff91550175097daaec161c",
  "attribute" : "memberOf",
  "requestable" : true,
  "value" : "CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local",
  "cloudGoverned" : true
} ]


const id : string = "2c91808a7813090a017814121919ecca"; // ID of the access profile containing the entitlements. (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "attribute eq "memberOf""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the \'+\' symbol in their names.   (optional) (default to undefined)
const sorters : string = "name,-modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional) (default to undefined)

try {
    const val = await accessProfilesBetaApi.getAccessProfileEntitlements(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessProfilesBetaApi.getAccessProfileEntitlements(id, limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listAccessProfiles

> Array&lt;AccessProfileBeta&gt; listAccessProfiles(forSubadmin, limit, offset, count, filters, sorters, forSegmentIds, includeUnsegmented)

List Access Profiles

Use this API to get a list of access profiles. A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forSubadmin** | **string**| If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID, or the special value **me**, which is shorthand for the calling identity\&#39;s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an identity that is not a subadmin. | [optional] [default to undefined]
 **limit** | **number**| Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the \&#39;+\&#39; symbol in their names.  | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]
 **forSegmentIds** | **string**| If present and not empty, additionally filters access profiles to those which are assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. | [optional] [default to undefined]
 **includeUnsegmented** | **boolean**| Indicates whether the response list should contain unsegmented access profiles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. | [optional] [default to true]

### Return type

[**Array&lt;AccessProfileBeta&gt;**](../Models/AccessProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);

[ {
  "owner" : {
    "name" : "support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "entitlements" : [ {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  }, {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  } ],
  "created" : "2021-03-01T22:32:58.104Z",
  "description" : "Collection of entitlements to read/write the employee database",
  "source" : {
    "name" : "ODS-AD-SOURCE",
    "id" : "2c91809773dee3610173fdb0b6061ef4",
    "type" : "SOURCE"
  },
  "enabled" : true,
  "revocationRequestConfig" : {
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ]
  },
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
  "accessRequestConfig" : {
    "commentsRequired" : true,
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ],
    "denialCommentsRequired" : true
  },
  "name" : "Employee-database-read-write",
  "provisioningCriteria" : {
    "children" : [ {
      "children" : [ {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      }, {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      } ],
      "attribute" : "email",
      "operation" : "EQUALS",
      "value" : "carlee.cert1c9f9b6fd@mailinator.com"
    }, {
      "children" : [ {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      }, {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      } ],
      "attribute" : "email",
      "operation" : "EQUALS",
      "value" : "carlee.cert1c9f9b6fd@mailinator.com"
    } ],
    "attribute" : "email",
    "operation" : "EQUALS",
    "value" : "carlee.cert1c9f9b6fd@mailinator.com"
  },
  "modified" : "2021-03-02T20:22:28.104Z",
  "id" : "2c91808a7190d06e01719938fcd20792",
  "requestable" : true
}, {
  "owner" : {
    "name" : "support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "entitlements" : [ {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  }, {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  } ],
  "created" : "2021-03-01T22:32:58.104Z",
  "description" : "Collection of entitlements to read/write the employee database",
  "source" : {
    "name" : "ODS-AD-SOURCE",
    "id" : "2c91809773dee3610173fdb0b6061ef4",
    "type" : "SOURCE"
  },
  "enabled" : true,
  "revocationRequestConfig" : {
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ]
  },
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
  "accessRequestConfig" : {
    "commentsRequired" : true,
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ],
    "denialCommentsRequired" : true
  },
  "name" : "Employee-database-read-write",
  "provisioningCriteria" : {
    "children" : [ {
      "children" : [ {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      }, {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      } ],
      "attribute" : "email",
      "operation" : "EQUALS",
      "value" : "carlee.cert1c9f9b6fd@mailinator.com"
    }, {
      "children" : [ {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      }, {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      } ],
      "attribute" : "email",
      "operation" : "EQUALS",
      "value" : "carlee.cert1c9f9b6fd@mailinator.com"
    } ],
    "attribute" : "email",
    "operation" : "EQUALS",
    "value" : "carlee.cert1c9f9b6fd@mailinator.com"
  },
  "modified" : "2021-03-02T20:22:28.104Z",
  "id" : "2c91808a7190d06e01719938fcd20792",
  "requestable" : true
} ]


const forSubadmin : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID, or the special value **me**, which is shorthand for the calling identity\'s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an identity that is not a subadmin. (optional) (default to undefined)
const limit : number = 50; // Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "name eq "SailPoint Support""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the \'+\' symbol in their names.  (optional) (default to undefined)
const sorters : string = "name,-modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) (default to undefined)
const forSegmentIds : string = "0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d"; // If present and not empty, additionally filters access profiles to those which are assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional) (default to undefined)
const includeUnsegmented : boolean = false; // Indicates whether the response list should contain unsegmented access profiles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true)

try {
    const val = await accessProfilesBetaApi.listAccessProfiles();
    
    // Below is a request that includes all optional parameters      
    // const val = await accessProfilesBetaApi.listAccessProfiles(forSubadmin, limit, offset, count, filters, sorters, forSegmentIds, includeUnsegmented);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchAccessProfile

> AccessProfileBeta patchAccessProfile(id, jsonPatchOperationBeta)

Patch a specified Access Profile

This API updates an existing Access Profile. The following fields are patchable: **name**, **description**, **enabled**, **owner**, **requestable**, **accessRequestConfig**, **revokeRequestConfig**, **segments**, **entitlements**, **provisioningCriteria** A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API. In addition, a SOURCE_SUBADMIN may only use this API to patch Access Profiles which are associated with Sources they are able to administer. >  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.  > You can only add or replace **entitlements** that exist on the source that the access profile is attached to. You can use the **list entitlements** endpoint with the **filters** query parameter to get a list of available entitlements on the access profile\'s source.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Access Profile to patch | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | 

### Return type

[**AccessProfileBeta**](../Models/AccessProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);

{
  "owner" : {
    "name" : "support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "entitlements" : [ {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  }, {
    "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
    "id" : "2c91809773dee32014e13e122092014e",
    "type" : "ENTITLEMENT"
  } ],
  "created" : "2021-03-01T22:32:58.104Z",
  "description" : "Collection of entitlements to read/write the employee database",
  "source" : {
    "name" : "ODS-AD-SOURCE",
    "id" : "2c91809773dee3610173fdb0b6061ef4",
    "type" : "SOURCE"
  },
  "enabled" : true,
  "revocationRequestConfig" : {
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ]
  },
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
  "accessRequestConfig" : {
    "commentsRequired" : true,
    "approvalSchemes" : [ {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
      "approverType" : "GOVERNANCE_GROUP"
    } ],
    "denialCommentsRequired" : true
  },
  "name" : "Employee-database-read-write",
  "provisioningCriteria" : {
    "children" : [ {
      "children" : [ {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      }, {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      } ],
      "attribute" : "email",
      "operation" : "EQUALS",
      "value" : "carlee.cert1c9f9b6fd@mailinator.com"
    }, {
      "children" : [ {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      }, {
        "children" : "children",
        "attribute" : "email",
        "operation" : "EQUALS",
        "value" : "carlee.cert1c9f9b6fd@mailinator.com"
      } ],
      "attribute" : "email",
      "operation" : "EQUALS",
      "value" : "carlee.cert1c9f9b6fd@mailinator.com"
    } ],
    "attribute" : "email",
    "operation" : "EQUALS",
    "value" : "carlee.cert1c9f9b6fd@mailinator.com"
  },
  "modified" : "2021-03-02T20:22:28.104Z",
  "id" : "2c91808a7190d06e01719938fcd20792",
  "requestable" : true
}


const id : string = "2c91808a7813090a017814121919ecca"; // ID of the Access Profile to patch (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=add, path=/entitlements, value=[{id=2c9180857725c14301772a93bb77242d, type=ENTITLEMENT, name=AD User Group}]}]; // 

try {
    const val = await accessProfilesBetaApi.patchAccessProfile(id, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessProfilesBetaApi.patchAccessProfile(id, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateAccessProfilesInBulk

> Array&lt;AccessProfileUpdateItemBeta&gt; updateAccessProfilesInBulk(accessProfileBulkUpdateRequestInnerBeta)

Update Access Profile(s) requestable field.

This API initiates a bulk update of field requestable for one or more Access Profiles.  >  If any of the indicated Access Profiles is exists in Organization,then those Access Profiles will be added in **updated**     list of the response.Requestable field of these Access Profiles marked as **true** or **false**.  >  If any of the indicated Access Profiles is not does not exists in Organization,then those Access Profiles will be added in **notFound** list of the response. Access Profiles marked as **notFound** will not be updated. A SOURCE_SUBADMIN user may only use this API to update Access Profiles which are associated with Sources they are able to administer.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfileBulkUpdateRequestInnerBeta** | [**Array&lt;AccessProfileBulkUpdateRequestInnerBeta&gt;**](../Models/AccessProfileBulkUpdateRequestInnerBeta.md)|  | 

### Return type

[**Array&lt;AccessProfileUpdateItemBeta&gt;**](../Models/AccessProfileUpdateItemBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessProfilesBetaApi, AccessProfileBulkUpdateRequestInnerBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessProfilesBetaApi = new AccessProfilesBetaApi(apiConfig);

[ {
  "id" : "464ae7bf-791e-49fd-b746-06a2e4a8",
  "status" : "201",
  "requestable" : false,
  "description" : "Access Profile updated successfully."
} ]


const accessProfileBulkUpdateRequestInnerBeta : Array<AccessProfileBulkUpdateRequestInnerBeta> = [{id=464ae7bf-791e-49fd-b746-06a2e4a89635, requestable=false}]; // 

try {
    const val = await accessProfilesBetaApi.updateAccessProfilesInBulk(accessProfileBulkUpdateRequestInnerBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await accessProfilesBetaApi.updateAccessProfilesInBulk(accessProfileBulkUpdateRequestInnerBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

