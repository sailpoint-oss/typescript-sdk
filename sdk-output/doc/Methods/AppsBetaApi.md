---
title: AppsBetaApi
pagination_label: AppsBetaApi
sidebar_label: AppsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AppsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AppsBetaApi']
---

# AppsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSourceApp**](AppsBetaApi.md#createSourceApp) | **POST** /source-apps | Create source app
[**deleteAccessProfilesFromSourceAppByBulk**](AppsBetaApi.md#deleteAccessProfilesFromSourceAppByBulk) | **POST** /source-apps/{id}/access-profiles/bulk-remove | Bulk remove access profiles from the specified source app
[**deleteSourceApp**](AppsBetaApi.md#deleteSourceApp) | **DELETE** /source-apps/{id} | Delete source app by ID
[**getSourceApp**](AppsBetaApi.md#getSourceApp) | **GET** /source-apps/{id} | Get source app by ID
[**listAccessProfilesForSourceApp**](AppsBetaApi.md#listAccessProfilesForSourceApp) | **GET** /source-apps/{id}/access-profiles | List access profiles for the specified source app
[**listAllSourceApp**](AppsBetaApi.md#listAllSourceApp) | **GET** /source-apps/all | List all source apps
[**listAllUserApps**](AppsBetaApi.md#listAllUserApps) | **GET** /user-apps/all | List all user apps
[**listAssignedSourceApp**](AppsBetaApi.md#listAssignedSourceApp) | **GET** /source-apps/assigned | List assigned source apps
[**listAvailableAccountsForUserApp**](AppsBetaApi.md#listAvailableAccountsForUserApp) | **GET** /user-apps/{id}/available-accounts | List available accounts for user app
[**listAvailableSourceApps**](AppsBetaApi.md#listAvailableSourceApps) | **GET** /source-apps | List available source apps
[**listOwnedUserApps**](AppsBetaApi.md#listOwnedUserApps) | **GET** /user-apps | List owned user apps
[**patchSourceApp**](AppsBetaApi.md#patchSourceApp) | **PATCH** /source-apps/{id} | Patch source app by ID
[**patchUserApp**](AppsBetaApi.md#patchUserApp) | **PATCH** /user-apps/{id} | Patch user app by ID
[**updateSourceAppsInBulk**](AppsBetaApi.md#updateSourceAppsInBulk) | **POST** /source-apps/bulk-update | Bulk update source apps



## createSourceApp

> SourceAppBeta createSourceApp(sourceAppCreateDtoBeta)

Create source app

This endpoint creates a source app using the given source app payload

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceAppCreateDtoBeta** | [**SourceAppCreateDtoBeta**](../Models/SourceAppCreateDtoBeta.md)|  | 

### Return type

[**SourceAppBeta**](../Models/SourceAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi, SourceAppCreateDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

{
  "owner" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "name" : "my app",
  "cloudAppId" : "9854520",
  "modified" : "2020-10-08T18:33:52.029Z",
  "description" : "the source app for engineers",
  "accountSource" : {
    "name" : "ODS-AD-Source",
    "passwordPolicies" : [ {
      "type" : "PASSWORD_POLICY",
      "id" : "006a072ecc6647f68bba9f4a4ad34649",
      "name" : "Password Policy 1"
    } ],
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "SOURCE",
    "useForPasswordManagement" : false
  },
  "matchAllAccounts" : true,
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "appCenterEnabled" : true,
  "enabled" : true
}


const sourceAppCreateDtoBeta : SourceAppCreateDtoBeta = 

try {
    const val = await appsBetaApi.createSourceApp(sourceAppCreateDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.createSourceApp(sourceAppCreateDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteAccessProfilesFromSourceAppByBulk

> Array&lt;AccessProfileDetailsBeta&gt; deleteAccessProfilesFromSourceAppByBulk(id, requestBody, limit)

Bulk remove access profiles from the specified source app

This API returns the final list of access profiles for the specified source app after removing

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the source app | [default to undefined]
 **requestBody** | [**Array&lt;string&gt;**](../Models/string.md)|  | 
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

[**Array&lt;AccessProfileDetailsBeta&gt;**](../Models/AccessProfileDetailsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi, string } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

[ {
  "sourceId" : 10360661,
  "entitlements" : [ "2c9180857725c14301772a93bb77242d", "c9dc28e148a24d65b3ccb5fb8ca5ddd9" ],
  "requestCommentsRequired" : true,
  "entitlementCount" : 12,
  "approvalSchemes" : "accessProfileOwner",
  "created" : "2021-03-01T22:32:58.104Z",
  "appName" : "mail app",
  "description" : "Collection of entitlements to read/write the employee database",
  "ownerId" : "9870808a7190d06e01719938fcd20792",
  "type" : "source",
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
  "deniedCommentsRequired" : true,
  "protected" : false,
  "revokeRequestApprovalSchemes" : "accessProfileOwner",
  "appId" : 10360661,
  "name" : "Employee-database-read-write",
  "modified" : "2021-03-02T20:22:28.104Z",
  "disabled" : true,
  "id" : "2c91808a7190d06e01719938fcd20792",
  "requestable" : true,
  "sourceName" : "AD Source",
  "applicationId" : "edcb0951812949d085b60cd8bf35bc78",
  "accountSelector" : {
    "selectors" : [ {
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
    }, {
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
    } ]
  }
}, {
  "sourceId" : 10360661,
  "entitlements" : [ "2c9180857725c14301772a93bb77242d", "c9dc28e148a24d65b3ccb5fb8ca5ddd9" ],
  "requestCommentsRequired" : true,
  "entitlementCount" : 12,
  "approvalSchemes" : "accessProfileOwner",
  "created" : "2021-03-01T22:32:58.104Z",
  "appName" : "mail app",
  "description" : "Collection of entitlements to read/write the employee database",
  "ownerId" : "9870808a7190d06e01719938fcd20792",
  "type" : "source",
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
  "deniedCommentsRequired" : true,
  "protected" : false,
  "revokeRequestApprovalSchemes" : "accessProfileOwner",
  "appId" : 10360661,
  "name" : "Employee-database-read-write",
  "modified" : "2021-03-02T20:22:28.104Z",
  "disabled" : true,
  "id" : "2c91808a7190d06e01719938fcd20792",
  "requestable" : true,
  "sourceName" : "AD Source",
  "applicationId" : "edcb0951812949d085b60cd8bf35bc78",
  "accountSelector" : {
    "selectors" : [ {
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
    }, {
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
    } ]
  }
} ]


const id : string = "2c91808a7813090a017814121e121518"; // ID of the source app (default to undefined)
const requestBody : Array<string> = ; // 
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

try {
    const val = await appsBetaApi.deleteAccessProfilesFromSourceAppByBulk(id, requestBody);
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.deleteAccessProfilesFromSourceAppByBulk(id, requestBody, limit);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteSourceApp

> SourceAppBeta deleteSourceApp(id)

Delete source app by ID

Use this API to delete a specific source app

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| source app ID. | [default to undefined]

### Return type

[**SourceAppBeta**](../Models/SourceAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

{
  "owner" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "name" : "my app",
  "cloudAppId" : "9854520",
  "modified" : "2020-10-08T18:33:52.029Z",
  "description" : "the source app for engineers",
  "accountSource" : {
    "name" : "ODS-AD-Source",
    "passwordPolicies" : [ {
      "type" : "PASSWORD_POLICY",
      "id" : "006a072ecc6647f68bba9f4a4ad34649",
      "name" : "Password Policy 1"
    } ],
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "SOURCE",
    "useForPasswordManagement" : false
  },
  "matchAllAccounts" : true,
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "appCenterEnabled" : true,
  "enabled" : true
}


const id : string = "2c9180835d191a86015d28455b4a2329"; // source app ID. (default to undefined)

try {
    const val = await appsBetaApi.deleteSourceApp(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.deleteSourceApp(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSourceApp

> SourceAppBeta getSourceApp(id)

Get source app by ID

This API returns a source app by its ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the source app | [default to undefined]

### Return type

[**SourceAppBeta**](../Models/SourceAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

{
  "owner" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "name" : "my app",
  "cloudAppId" : "9854520",
  "modified" : "2020-10-08T18:33:52.029Z",
  "description" : "the source app for engineers",
  "accountSource" : {
    "name" : "ODS-AD-Source",
    "passwordPolicies" : [ {
      "type" : "PASSWORD_POLICY",
      "id" : "006a072ecc6647f68bba9f4a4ad34649",
      "name" : "Password Policy 1"
    } ],
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "SOURCE",
    "useForPasswordManagement" : false
  },
  "matchAllAccounts" : true,
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "appCenterEnabled" : true,
  "enabled" : true
}


const id : string = "2c91808a7813090a017814121e121518"; // ID of the source app (default to undefined)

try {
    const val = await appsBetaApi.getSourceApp(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.getSourceApp(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listAccessProfilesForSourceApp

> Array&lt;AccessProfileDetailsBeta&gt; listAccessProfilesForSourceApp(id, limit, offset, filters)

List access profiles for the specified source app

This API returns the list of access profiles for the specified source app

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the source app | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | [optional] [default to undefined]

### Return type

[**Array&lt;AccessProfileDetailsBeta&gt;**](../Models/AccessProfileDetailsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

[ {
  "sourceId" : 10360661,
  "entitlements" : [ "2c9180857725c14301772a93bb77242d", "c9dc28e148a24d65b3ccb5fb8ca5ddd9" ],
  "requestCommentsRequired" : true,
  "entitlementCount" : 12,
  "approvalSchemes" : "accessProfileOwner",
  "created" : "2021-03-01T22:32:58.104Z",
  "appName" : "mail app",
  "description" : "Collection of entitlements to read/write the employee database",
  "ownerId" : "9870808a7190d06e01719938fcd20792",
  "type" : "source",
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
  "deniedCommentsRequired" : true,
  "protected" : false,
  "revokeRequestApprovalSchemes" : "accessProfileOwner",
  "appId" : 10360661,
  "name" : "Employee-database-read-write",
  "modified" : "2021-03-02T20:22:28.104Z",
  "disabled" : true,
  "id" : "2c91808a7190d06e01719938fcd20792",
  "requestable" : true,
  "sourceName" : "AD Source",
  "applicationId" : "edcb0951812949d085b60cd8bf35bc78",
  "accountSelector" : {
    "selectors" : [ {
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
    }, {
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
    } ]
  }
}, {
  "sourceId" : 10360661,
  "entitlements" : [ "2c9180857725c14301772a93bb77242d", "c9dc28e148a24d65b3ccb5fb8ca5ddd9" ],
  "requestCommentsRequired" : true,
  "entitlementCount" : 12,
  "approvalSchemes" : "accessProfileOwner",
  "created" : "2021-03-01T22:32:58.104Z",
  "appName" : "mail app",
  "description" : "Collection of entitlements to read/write the employee database",
  "ownerId" : "9870808a7190d06e01719938fcd20792",
  "type" : "source",
  "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
  "deniedCommentsRequired" : true,
  "protected" : false,
  "revokeRequestApprovalSchemes" : "accessProfileOwner",
  "appId" : 10360661,
  "name" : "Employee-database-read-write",
  "modified" : "2021-03-02T20:22:28.104Z",
  "disabled" : true,
  "id" : "2c91808a7190d06e01719938fcd20792",
  "requestable" : true,
  "sourceName" : "AD Source",
  "applicationId" : "edcb0951812949d085b60cd8bf35bc78",
  "accountSelector" : {
    "selectors" : [ {
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
    }, {
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
    } ]
  }
} ]


const id : string = "2c91808a7813090a017814121e121518"; // ID of the source app (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const filters : string = "name eq "developer access profile""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional) (default to undefined)

try {
    const val = await appsBetaApi.listAccessProfilesForSourceApp(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.listAccessProfilesForSourceApp(id, limit, offset, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listAllSourceApp

> Array&lt;SourceAppBeta&gt; listAllSourceApp(limit, count, offset, sorters, filters)

List all source apps

This API returns the list of all source apps for the org.  A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **accountSource.id**: *eq, in*  **enabled**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;SourceAppBeta&gt;**](../Models/SourceAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

[ {
  "owner" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "name" : "my app",
  "cloudAppId" : "9854520",
  "modified" : "2020-10-08T18:33:52.029Z",
  "description" : "the source app for engineers",
  "accountSource" : {
    "name" : "ODS-AD-Source",
    "passwordPolicies" : [ {
      "type" : "PASSWORD_POLICY",
      "id" : "006a072ecc6647f68bba9f4a4ad34649",
      "name" : "Password Policy 1"
    } ],
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "SOURCE",
    "useForPasswordManagement" : false
  },
  "matchAllAccounts" : true,
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "appCenterEnabled" : true,
  "enabled" : true
}, {
  "owner" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "name" : "my app",
  "cloudAppId" : "9854520",
  "modified" : "2020-10-08T18:33:52.029Z",
  "description" : "the source app for engineers",
  "accountSource" : {
    "name" : "ODS-AD-Source",
    "passwordPolicies" : [ {
      "type" : "PASSWORD_POLICY",
      "id" : "006a072ecc6647f68bba9f4a4ad34649",
      "name" : "Password Policy 1"
    } ],
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "SOURCE",
    "useForPasswordManagement" : false
  },
  "matchAllAccounts" : true,
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "appCenterEnabled" : true,
  "enabled" : true
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const sorters : string = "name,-modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id** (optional) (default to undefined)
const filters : string = "enabled eq true"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **accountSource.id**: *eq, in*  **enabled**: *eq* (optional) (default to undefined)

try {
    const val = await appsBetaApi.listAllSourceApp();
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.listAllSourceApp(limit, count, offset, sorters, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listAllUserApps

> Array&lt;UserAppBeta&gt; listAllUserApps(filters, limit, count, offset)

List all user apps

This API returns the list of all user apps with specified filters. This API must be used with **filters** query parameter.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerId**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq* | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

[**Array&lt;UserAppBeta&gt;**](../Models/UserAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

[ {
  "owner" : {
    "name" : "John",
    "alias" : "John.Doe",
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "IDENTITY"
  },
  "hasMultipleAccounts" : false,
  "sourceApp" : {
    "name" : "test-app",
    "id" : "edcb0951812949d085b60cd8bf35bc78",
    "type" : "APPLICATION"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "modified" : "2020-10-08T18:33:52.029Z",
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "source" : {
    "name" : "test-source",
    "id" : "9870808a7190d06e01719938fcd20792",
    "type" : "SOURCE"
  },
  "useForPasswordManagement" : true,
  "appCenterEnabled" : true,
  "account" : {
    "name" : "test account",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "ACCOUNT"
  }
}, {
  "owner" : {
    "name" : "John",
    "alias" : "John.Doe",
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "IDENTITY"
  },
  "hasMultipleAccounts" : false,
  "sourceApp" : {
    "name" : "test-app",
    "id" : "edcb0951812949d085b60cd8bf35bc78",
    "type" : "APPLICATION"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "modified" : "2020-10-08T18:33:52.029Z",
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "source" : {
    "name" : "test-source",
    "id" : "9870808a7190d06e01719938fcd20792",
    "type" : "SOURCE"
  },
  "useForPasswordManagement" : true,
  "appCenterEnabled" : true,
  "account" : {
    "name" : "test account",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "ACCOUNT"
  }
} ]


const filters : string = "name eq "user app name""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerId**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq* (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

try {
    const val = await appsBetaApi.listAllUserApps(filters);
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.listAllUserApps(filters, limit, count, offset);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listAssignedSourceApp

> Array&lt;SourceAppBeta&gt; listAssignedSourceApp(limit, count, offset, sorters, filters)

List assigned source apps

This API returns the list of source apps assigned for logged in user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, accountSource.id** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in* | [optional] [default to undefined]

### Return type

[**Array&lt;SourceAppBeta&gt;**](../Models/SourceAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

[ {
  "owner" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "name" : "my app",
  "cloudAppId" : "9854520",
  "modified" : "2020-10-08T18:33:52.029Z",
  "description" : "the source app for engineers",
  "accountSource" : {
    "name" : "ODS-AD-Source",
    "passwordPolicies" : [ {
      "type" : "PASSWORD_POLICY",
      "id" : "006a072ecc6647f68bba9f4a4ad34649",
      "name" : "Password Policy 1"
    } ],
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "SOURCE",
    "useForPasswordManagement" : false
  },
  "matchAllAccounts" : true,
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "appCenterEnabled" : true,
  "enabled" : true
}, {
  "owner" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "name" : "my app",
  "cloudAppId" : "9854520",
  "modified" : "2020-10-08T18:33:52.029Z",
  "description" : "the source app for engineers",
  "accountSource" : {
    "name" : "ODS-AD-Source",
    "passwordPolicies" : [ {
      "type" : "PASSWORD_POLICY",
      "id" : "006a072ecc6647f68bba9f4a4ad34649",
      "name" : "Password Policy 1"
    } ],
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "SOURCE",
    "useForPasswordManagement" : false
  },
  "matchAllAccounts" : true,
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "appCenterEnabled" : true,
  "enabled" : true
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const sorters : string = "name,-modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, accountSource.id** (optional) (default to undefined)
const filters : string = "name eq "source app name""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in* (optional) (default to undefined)

try {
    const val = await appsBetaApi.listAssignedSourceApp();
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.listAssignedSourceApp(limit, count, offset, sorters, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listAvailableAccountsForUserApp

> Array&lt;AppAccountDetailsBeta&gt; listAvailableAccountsForUserApp(id, limit, count, offset)

List available accounts for user app

This API returns the list of available accounts for the specified user app. The user app needs to belong lo logged in user.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the user app | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

[**Array&lt;AppAccountDetailsBeta&gt;**](../Models/AppAccountDetailsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

[ {
  "sourceAccount" : {
    "sourceId" : "10efa58ea3954883b52bf74f489ce8f9",
    "sourceDisplayName" : "ODS-AD-SOURCE",
    "displayName" : "Abby Smith",
    "id" : "fbf4f72280304f1a8bc808fc2a3bcf7b",
    "nativeIdentity" : "CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com"
  },
  "appDisplayName" : "AD source app",
  "appId" : "fbf4f72280304f1a8bc808fc2a3bcf7b"
}, {
  "sourceAccount" : {
    "sourceId" : "10efa58ea3954883b52bf74f489ce8f9",
    "sourceDisplayName" : "ODS-AD-SOURCE",
    "displayName" : "Abby Smith",
    "id" : "fbf4f72280304f1a8bc808fc2a3bcf7b",
    "nativeIdentity" : "CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com"
  },
  "appDisplayName" : "AD source app",
  "appId" : "fbf4f72280304f1a8bc808fc2a3bcf7b"
} ]


const id : string = "2c91808a7813090a017814121e121518"; // ID of the user app (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

try {
    const val = await appsBetaApi.listAvailableAccountsForUserApp(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.listAvailableAccountsForUserApp(id, limit, count, offset);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listAvailableSourceApps

> Array&lt;SourceAppBeta&gt; listAvailableSourceApps(limit, count, offset, sorters, filters)

List available source apps

This API returns the list of source apps available for access request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in* | [optional] [default to undefined]

### Return type

[**Array&lt;SourceAppBeta&gt;**](../Models/SourceAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

[ {
  "owner" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "name" : "my app",
  "cloudAppId" : "9854520",
  "modified" : "2020-10-08T18:33:52.029Z",
  "description" : "the source app for engineers",
  "accountSource" : {
    "name" : "ODS-AD-Source",
    "passwordPolicies" : [ {
      "type" : "PASSWORD_POLICY",
      "id" : "006a072ecc6647f68bba9f4a4ad34649",
      "name" : "Password Policy 1"
    } ],
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "SOURCE",
    "useForPasswordManagement" : false
  },
  "matchAllAccounts" : true,
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "appCenterEnabled" : true,
  "enabled" : true
}, {
  "owner" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "name" : "my app",
  "cloudAppId" : "9854520",
  "modified" : "2020-10-08T18:33:52.029Z",
  "description" : "the source app for engineers",
  "accountSource" : {
    "name" : "ODS-AD-Source",
    "passwordPolicies" : [ {
      "type" : "PASSWORD_POLICY",
      "id" : "006a072ecc6647f68bba9f4a4ad34649",
      "name" : "Password Policy 1"
    } ],
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "SOURCE",
    "useForPasswordManagement" : false
  },
  "matchAllAccounts" : true,
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "appCenterEnabled" : true,
  "enabled" : true
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const sorters : string = "name,-modified"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id** (optional) (default to undefined)
const filters : string = "name eq "source app name""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in* (optional) (default to undefined)

try {
    const val = await appsBetaApi.listAvailableSourceApps();
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.listAvailableSourceApps(limit, count, offset, sorters, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listOwnedUserApps

> Array&lt;UserAppBeta&gt; listOwnedUserApps(limit, count, offset, filters)

List owned user apps

This API returns the list of user apps assigned to logged in user

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;UserAppBeta&gt;**](../Models/UserAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

[ {
  "owner" : {
    "name" : "John",
    "alias" : "John.Doe",
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "IDENTITY"
  },
  "hasMultipleAccounts" : false,
  "sourceApp" : {
    "name" : "test-app",
    "id" : "edcb0951812949d085b60cd8bf35bc78",
    "type" : "APPLICATION"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "modified" : "2020-10-08T18:33:52.029Z",
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "source" : {
    "name" : "test-source",
    "id" : "9870808a7190d06e01719938fcd20792",
    "type" : "SOURCE"
  },
  "useForPasswordManagement" : true,
  "appCenterEnabled" : true,
  "account" : {
    "name" : "test account",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "ACCOUNT"
  }
}, {
  "owner" : {
    "name" : "John",
    "alias" : "John.Doe",
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "IDENTITY"
  },
  "hasMultipleAccounts" : false,
  "sourceApp" : {
    "name" : "test-app",
    "id" : "edcb0951812949d085b60cd8bf35bc78",
    "type" : "APPLICATION"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "modified" : "2020-10-08T18:33:52.029Z",
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "source" : {
    "name" : "test-source",
    "id" : "9870808a7190d06e01719938fcd20792",
    "type" : "SOURCE"
  },
  "useForPasswordManagement" : true,
  "appCenterEnabled" : true,
  "account" : {
    "name" : "test account",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "ACCOUNT"
  }
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const filters : string = "name eq "user app name""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq* (optional) (default to undefined)

try {
    const val = await appsBetaApi.listOwnedUserApps();
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.listOwnedUserApps(limit, count, offset, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchSourceApp

> SourceAppPatchDtoBeta patchSourceApp(id, jsonPatchOperationBeta)

Patch source app by ID

This API updates an existing source app using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax. The following fields are patchable: **name**, **description**, **enabled**, **owner**, **provisionRequestEnabled**, **appCenterEnabled**, **accountSource**,  **matchAllAccounts** and **accessProfiles**. Name, description and owner can\'t be empty or null.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the source app to patch | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | [optional] 

### Return type

[**SourceAppPatchDtoBeta**](../Models/SourceAppPatchDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

{
  "owner" : {
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "IDENTITY",
    "name" : "John Doe"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "cloudAppId" : "9854520",
  "description" : "the source app for engineers",
  "appCenterEnabled" : true,
  "enabled" : true,
  "accessProfiles" : [ "2c9180857725c14301772a93bb77242d", "c9dc28e148a24d65b3ccb5fb8ca5ddd9" ],
  "name" : "my app",
  "modified" : "2020-10-08T18:33:52.029Z",
  "accountSource" : {
    "name" : "ODS-AD-Source",
    "passwordPolicies" : [ {
      "type" : "PASSWORD_POLICY",
      "id" : "006a072ecc6647f68bba9f4a4ad34649",
      "name" : "Password Policy 1"
    } ],
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "SOURCE",
    "useForPasswordManagement" : false
  },
  "matchAllAccounts" : true,
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true
}


const id : string = "2c91808a7813090a017814121e121518"; // ID of the source app to patch (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/enabled, value=true}, {op=replace, path=/matchAllAccounts, value=true}]; //  (optional)

try {
    const val = await appsBetaApi.patchSourceApp(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.patchSourceApp(id, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchUserApp

> UserAppBeta patchUserApp(id, jsonPatchOperationBeta)

Patch user app by ID

This API updates an existing user app using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax. The following fields are patchable: **account**

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the user app to patch | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)|  | [optional] 

### Return type

[**UserAppBeta**](../Models/UserAppBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

{
  "owner" : {
    "name" : "John",
    "alias" : "John.Doe",
    "id" : "2c9180827ca885d7017ca8ce28a000eb",
    "type" : "IDENTITY"
  },
  "hasMultipleAccounts" : false,
  "sourceApp" : {
    "name" : "test-app",
    "id" : "edcb0951812949d085b60cd8bf35bc78",
    "type" : "APPLICATION"
  },
  "created" : "2020-10-08T18:33:52.029Z",
  "modified" : "2020-10-08T18:33:52.029Z",
  "id" : "2c91808874ff91550175097daaec161c",
  "provisionRequestEnabled" : true,
  "source" : {
    "name" : "test-source",
    "id" : "9870808a7190d06e01719938fcd20792",
    "type" : "SOURCE"
  },
  "useForPasswordManagement" : true,
  "appCenterEnabled" : true,
  "account" : {
    "name" : "test account",
    "id" : "85d173e7d57e496569df763231d6deb6a",
    "type" : "ACCOUNT"
  }
}


const id : string = "2c91808a7813090a017814121e121518"; // ID of the user app to patch (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = ; //  (optional)

try {
    const val = await appsBetaApi.patchUserApp(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.patchUserApp(id, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateSourceAppsInBulk

> updateSourceAppsInBulk(sourceAppBulkUpdateRequestBeta)

Bulk update source apps

This API updates source apps using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.  It can update up to 50 source apps in a batch. The following fields can be updated: **name**, **description**, **enabled**, **owner**, **provisionRequestEnabled**, **appCenterEnabled**, **accountSource**,  **matchAllAccounts**, and **accessProfiles**. Name, description and owner can\'t be empty or null.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceAppBulkUpdateRequestBeta** | [**SourceAppBulkUpdateRequestBeta**](../Models/SourceAppBulkUpdateRequestBeta.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AppsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const appsBetaApi = new AppsBetaApi(apiConfig);

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


const sourceAppBulkUpdateRequestBeta : SourceAppBulkUpdateRequestBeta = 

try {
    const val = await appsBetaApi.updateSourceAppsInBulk();
    
    // Below is a request that includes all optional parameters      
    // const val = await appsBetaApi.updateSourceAppsInBulk(sourceAppBulkUpdateRequestBeta);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

