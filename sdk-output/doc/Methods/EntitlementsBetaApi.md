---
title: EntitlementsBetaApi
pagination_label: EntitlementsBetaApi
sidebar_label: EntitlementsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'EntitlementsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'EntitlementsBetaApi']
---

# EntitlementsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccessModelMetadataForEntitlement**](EntitlementsBetaApi.md#createAccessModelMetadataForEntitlement) | **POST** /entitlements/{id}/access-model-metadata/{attributeKey}/values/{attributeValue} | Add metadata to an entitlement.
[**deleteAccessModelMetadataFromEntitlement**](EntitlementsBetaApi.md#deleteAccessModelMetadataFromEntitlement) | **DELETE** /entitlements/{id}/access-model-metadata/{attributeKey}/values/{attributeValue} | Remove metadata from an entitlement.
[**getEntitlement**](EntitlementsBetaApi.md#getEntitlement) | **GET** /entitlements/{id} | Get an entitlement
[**getEntitlementRequestConfig**](EntitlementsBetaApi.md#getEntitlementRequestConfig) | **GET** /entitlements/{id}/entitlement-request-config | Get Entitlement Request Config
[**importEntitlementsBySource**](EntitlementsBetaApi.md#importEntitlementsBySource) | **POST** /entitlements/aggregate/sources/{id} | Aggregate Entitlements
[**listEntitlementChildren**](EntitlementsBetaApi.md#listEntitlementChildren) | **GET** /entitlements/{id}/children | List of entitlements children
[**listEntitlementParents**](EntitlementsBetaApi.md#listEntitlementParents) | **GET** /entitlements/{id}/parents | List of entitlements parents
[**listEntitlements**](EntitlementsBetaApi.md#listEntitlements) | **GET** /entitlements | Gets a list of entitlements.
[**patchEntitlement**](EntitlementsBetaApi.md#patchEntitlement) | **PATCH** /entitlements/{id} | Patch an entitlement
[**putEntitlementRequestConfig**](EntitlementsBetaApi.md#putEntitlementRequestConfig) | **PUT** /entitlements/{id}/entitlement-request-config | Replace Entitlement Request Config
[**resetSourceEntitlements**](EntitlementsBetaApi.md#resetSourceEntitlements) | **POST** /entitlements/reset/sources/{sourceId} | Reset Source Entitlements
[**updateEntitlementsInBulk**](EntitlementsBetaApi.md#updateEntitlementsInBulk) | **POST** /entitlements/bulk-update | Bulk update an entitlement list



## createAccessModelMetadataForEntitlement

> EntitlementBeta createAccessModelMetadataForEntitlement(id, attributeKey, attributeValue)

Add metadata to an entitlement.

Add single Access Model Metadata to an entitlement.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The entitlement id. | [default to undefined]
 **attributeKey** | **string**| Technical name of the Attribute. | [default to undefined]
 **attributeValue** | **string**| Technical name of the Attribute Value. | [default to undefined]

### Return type

[**EntitlementBeta**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);

{
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
}


const id : string = "2c91808c74ff913f0175097daa9d59cd"; // The entitlement id. (default to undefined)
const attributeKey : string = "iscPrivacy"; // Technical name of the Attribute. (default to undefined)
const attributeValue : string = "public"; // Technical name of the Attribute Value. (default to undefined)

try {
    const val = await entitlementsBetaApi.createAccessModelMetadataForEntitlement(id, attributeKey, attributeValue);
    
    // Below is a request that includes all optional parameters      
    // const val = await entitlementsBetaApi.createAccessModelMetadataForEntitlement(id, attributeKey, attributeValue);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteAccessModelMetadataFromEntitlement

> deleteAccessModelMetadataFromEntitlement(id, attributeKey, attributeValue)

Remove metadata from an entitlement.

Remove single Access Model Metadata from an entitlement.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The entitlement id. | [default to undefined]
 **attributeKey** | **string**| Technical name of the Attribute. | [default to undefined]
 **attributeValue** | **string**| Technical name of the Attribute Value. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);

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


const id : string = "2c91808c74ff913f0175097daa9d59cd"; // The entitlement id. (default to undefined)
const attributeKey : string = "iscPrivacy"; // Technical name of the Attribute. (default to undefined)
const attributeValue : string = "public"; // Technical name of the Attribute Value. (default to undefined)

try {
    const val = await entitlementsBetaApi.deleteAccessModelMetadataFromEntitlement(id, attributeKey, attributeValue);
    
    // Below is a request that includes all optional parameters      
    // const val = await entitlementsBetaApi.deleteAccessModelMetadataFromEntitlement(id, attributeKey, attributeValue);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getEntitlement

> EntitlementBeta getEntitlement(id)

Get an entitlement

This API returns an entitlement by its ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The entitlement ID | [default to undefined]

### Return type

[**EntitlementBeta**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);

{
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
}


const id : string = "2c91808874ff91550175097daaec161c"; // The entitlement ID (default to undefined)

try {
    const val = await entitlementsBetaApi.getEntitlement(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await entitlementsBetaApi.getEntitlement(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getEntitlementRequestConfig

> EntitlementRequestConfigBeta getEntitlementRequestConfig(id)

Get Entitlement Request Config

This API returns the entitlement request config for a specified entitlement.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Entitlement Id | [default to undefined]

### Return type

[**EntitlementRequestConfigBeta**](../Models/EntitlementRequestConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);

{
  "accessRequestConfig" : {
    "denialCommentRequired" : false,
    "approvalSchemes" : [ {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    } ],
    "requestCommentRequired" : true
  }
}


const id : string = "2c91808874ff91550175097daaec161c"; // Entitlement Id (default to undefined)

try {
    const val = await entitlementsBetaApi.getEntitlementRequestConfig(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await entitlementsBetaApi.getEntitlementRequestConfig(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## importEntitlementsBySource

> LoadEntitlementTaskBeta importEntitlementsBySource(id, csvFile)

Aggregate Entitlements

Starts an entitlement aggregation on the specified source. Though this endpoint has been deprecated, you can find its Beta equivalent [here](https://developer.sailpoint.com/docs/api/beta/import-entitlements).  If the target source is a direct connection, then the request body must be empty. You will also need to make sure the Content-Type header is not set. If you set the Content-Type header without specifying a body, then you will receive a 500 error.  If the target source is a delimited file source, then the CSV file needs to be included in the request body. You will also need to set the Content-Type header to `multipart/form-data`.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Source Id | [default to undefined]
 **csvFile** | **File**| The CSV file containing the source entitlements to aggregate. | [optional] [default to undefined]

### Return type

[**LoadEntitlementTaskBeta**](../Models/LoadEntitlementTaskBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);

{
  "uniqueName" : "Cloud Group Aggregation",
  "created" : "2020-07-11T21:23:15Z",
  "description" : "Aggregate from the specified application",
  "returns" : [ {
    "displayLabel" : "TASK_OUT_ACCOUNT_GROUP_AGGREGATION_APPLICATIONS",
    "attributeName" : "applications"
  }, {
    "displayLabel" : "TASK_OUT_ACCOUNT_GROUP_AGGREGATION_TOTAL",
    "attributeName" : "total"
  }, {
    "displayLabel" : "TASK_OUT_ACCOUNT_GROUP_AGGREGATION_CREATED",
    "attributeName" : "groupsCreated"
  }, {
    "displayLabel" : "TASK_OUT_ACCOUNT_GROUP_AGGREGATION_UPDATED",
    "attributeName" : "groupsUpdated"
  }, {
    "displayLabel" : "TASK_OUT_ACCOUNT_GROUP_AGGREGATION_DELETED",
    "attributeName" : "groupsDeleted"
  } ],
  "id" : "ef38f94347e94562b5bb8424a56397d8",
  "type" : "QUARTZ",
  "launcher" : "John Doe"
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // Source Id (default to undefined)
const csvFile : File = BINARY_DATA_HERE; // The CSV file containing the source entitlements to aggregate. (optional) (default to undefined)

try {
    const val = await entitlementsBetaApi.importEntitlementsBySource(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await entitlementsBetaApi.importEntitlementsBySource(id, csvFile);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listEntitlementChildren

> Array&lt;EntitlementBeta&gt; listEntitlementChildren(id, limit, offset, count, sorters, filters)

List of entitlements children

This API returns a list of all child entitlements of a given entitlement.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Entitlement Id | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | [optional] [default to undefined]

### Return type

[**Array&lt;EntitlementBeta&gt;**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);

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


const id : string = "2c91808874ff91550175097daaec161c"; // Entitlement Id (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const sorters : string = "name,-modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional) (default to undefined)
const filters : string = "attribute eq "memberOf""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional) (default to undefined)

try {
    const val = await entitlementsBetaApi.listEntitlementChildren(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await entitlementsBetaApi.listEntitlementChildren(id, limit, offset, count, sorters, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listEntitlementParents

> Array&lt;EntitlementBeta&gt; listEntitlementParents(id, limit, offset, count, sorters, filters)

List of entitlements parents

This API returns a list of all parent entitlements of a given entitlement.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Entitlement Id | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | [optional] [default to undefined]

### Return type

[**Array&lt;EntitlementBeta&gt;**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);

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


const id : string = "2c91808c74ff913f0175097daa9d59cd"; // Entitlement Id (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const sorters : string = "name,-modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional) (default to undefined)
const filters : string = "attribute eq "memberOf""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional) (default to undefined)

try {
    const val = await entitlementsBetaApi.listEntitlementParents(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await entitlementsBetaApi.listEntitlementParents(id, limit, offset, count, sorters, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listEntitlements

> Array&lt;EntitlementBeta&gt; listEntitlements(accountId, segmentedForIdentity, forSegmentIds, includeUnsegmented, offset, limit, count, sorters, filters)

Gets a list of entitlements.

This API returns a list of entitlements.  This API can be used in one of the two following ways: either getting entitlements for a specific **account-id**, or getting via use of **filters** (those two options are exclusive).  Any authenticated token can call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **string**| The account ID. If specified, returns only entitlements associated with the given Account. Cannot be specified with the **filters**, **segmented-for-identity**, **for-segment-ids**, or **include-unsegmented** param(s). This parameter is deprecated. Please use [Account Entitlements API](https://developer.sailpoint.com/apis/beta/#operation/getAccountEntitlements) to get account entitlements. | [optional] [default to undefined]
 **segmentedForIdentity** | **string**| If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID. By convention, the value **me** can stand in for the current user\&#39;s Identity ID. Cannot be specified with the **account-id** or **for-segment-ids** param(s). It is also illegal to specify a value that refers to a different user\&#39;s Identity. | [optional] [default to undefined]
 **forSegmentIds** | **string**| If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. Cannot be specified with the **account-id** or **segmented-for-identity** param(s). | [optional] [default to undefined]
 **includeUnsegmented** | **boolean**| Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented&#x3D;false** results in an error. | [optional] [default to true]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* | [optional] [default to undefined]

### Return type

[**Array&lt;EntitlementBeta&gt;**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);

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


const accountId : string = "ef38f94347e94562b5bb8424a56397d8"; // The account ID. If specified, returns only entitlements associated with the given Account. Cannot be specified with the **filters**, **segmented-for-identity**, **for-segment-ids**, or **include-unsegmented** param(s). This parameter is deprecated. Please use [Account Entitlements API](https://developer.sailpoint.com/apis/beta/#operation/getAccountEntitlements) to get account entitlements. (optional) (default to undefined)
const segmentedForIdentity : string = "me"; // If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID. By convention, the value **me** can stand in for the current user\'s Identity ID. Cannot be specified with the **account-id** or **for-segment-ids** param(s). It is also illegal to specify a value that refers to a different user\'s Identity. (optional) (default to undefined)
const forSegmentIds : string = "041727d4-7d95-4779-b891-93cf41e98249,a378c9fa-bae5-494c-804e-a1e30f69f649"; // If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. Cannot be specified with the **account-id** or **segmented-for-identity** param(s). (optional) (default to undefined)
const includeUnsegmented : boolean = true; // Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error. (optional) (default to true)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const sorters : string = "name,-modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional) (default to undefined)
const filters : string = "attribute eq "memberOf""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* (optional) (default to undefined)

try {
    const val = await entitlementsBetaApi.listEntitlements();
    
    // Below is a request that includes all optional parameters      
    // const val = await entitlementsBetaApi.listEntitlements(accountId, segmentedForIdentity, forSegmentIds, includeUnsegmented, offset, limit, count, sorters, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchEntitlement

> EntitlementBeta patchEntitlement(id, jsonPatchOperationBeta)

Patch an entitlement

This API updates an existing entitlement using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.  The following fields are patchable: **requestable**, **privileged**, **segments**, **owner**, **name**, **description**, and **manuallyUpdatedFields**  When you\'re patching owner, only owner type and owner id must be provided. Owner name is optional, and it won\'t be modified. If the owner name is provided, it should correspond to the real name. The only owner type currently supported is IDENTITY.  A token with ORG_ADMIN or SOURCE_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the entitlement to patch | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | [optional] 

### Return type

[**EntitlementBeta**](../Models/EntitlementBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);

{
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
}


const id : string = "2c91808a7813090a017814121e121518"; // ID of the entitlement to patch (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/requestable, value=true}, {op=replace, path=/privileged, value=true}]; //  (optional)

try {
    const val = await entitlementsBetaApi.patchEntitlement(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await entitlementsBetaApi.patchEntitlement(id, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## putEntitlementRequestConfig

> EntitlementRequestConfigBeta putEntitlementRequestConfig(id, entitlementRequestConfigBeta)

Replace Entitlement Request Config

This API replaces the entitlement request config for a specified entitlement.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Entitlement ID | [default to undefined]
 **entitlementRequestConfigBeta** | [**EntitlementRequestConfigBeta**](../Models/EntitlementRequestConfigBeta.md)|  | 

### Return type

[**EntitlementRequestConfigBeta**](../Models/EntitlementRequestConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi, EntitlementRequestConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);

{
  "accessRequestConfig" : {
    "denialCommentRequired" : false,
    "approvalSchemes" : [ {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    } ],
    "requestCommentRequired" : true
  }
}


const id : string = "2c91808a7813090a017814121e121518"; // Entitlement ID (default to undefined)
const entitlementRequestConfigBeta : EntitlementRequestConfigBeta = 

try {
    const val = await entitlementsBetaApi.putEntitlementRequestConfig(id, entitlementRequestConfigBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await entitlementsBetaApi.putEntitlementRequestConfig(id, entitlementRequestConfigBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## resetSourceEntitlements

> EntitlementSourceResetBaseReferenceDtoBeta resetSourceEntitlements(sourceId)

Reset Source Entitlements

Remove all entitlements from a specific source. To reload the accounts along with the entitlements you removed, you must run an unoptimized aggregation.  To do so, use [Import Accounts](https://developer.sailpoint.com/docs/api/beta/import-accounts/) with `disableOptimization` = `true`. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| ID of source for the entitlement reset | [default to undefined]

### Return type

[**EntitlementSourceResetBaseReferenceDtoBeta**](../Models/EntitlementSourceResetBaseReferenceDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);

{
  "name" : "Entitlement Source Reset",
  "id" : "2c91808568c529c60168cca6f90c1313",
  "type" : "TASK_RESULT"
}


const sourceId : string = "2c91808a7813090a017814121919ecca"; // ID of source for the entitlement reset (default to undefined)

try {
    const val = await entitlementsBetaApi.resetSourceEntitlements(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await entitlementsBetaApi.resetSourceEntitlements(sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateEntitlementsInBulk

> updateEntitlementsInBulk(entitlementBulkUpdateRequestBeta)

Bulk update an entitlement list

This API applies an update to every entitlement of the list.   The number of entitlements to update is limited to 50 items maximum.   The JsonPatch update follows the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. allowed operations : `**{ \"op\": \"replace\", \"path\": \"/privileged\", \"value\": boolean }**  **{ \"op\": \"replace\", \"path\": \"/requestable\",\"value\": boolean }**`   A token with ORG_ADMIN or API authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementBulkUpdateRequestBeta** | [**EntitlementBulkUpdateRequestBeta**](../Models/EntitlementBulkUpdateRequestBeta.md)|  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, EntitlementsBetaApi, EntitlementBulkUpdateRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const entitlementsBetaApi = new EntitlementsBetaApi(apiConfig);

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


const entitlementBulkUpdateRequestBeta : EntitlementBulkUpdateRequestBeta = 

try {
    const val = await entitlementsBetaApi.updateEntitlementsInBulk(entitlementBulkUpdateRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await entitlementsBetaApi.updateEntitlementsInBulk(entitlementBulkUpdateRequestBeta);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

