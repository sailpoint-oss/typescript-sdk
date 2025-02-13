---
title: IdentityProfilesBetaApi
pagination_label: IdentityProfilesBetaApi
sidebar_label: IdentityProfilesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'IdentityProfilesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'IdentityProfilesBetaApi']
---

# IdentityProfilesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIdentityProfile**](IdentityProfilesBetaApi.md#createIdentityProfile) | **POST** /identity-profiles | Create an Identity Profile
[**deleteIdentityProfile**](IdentityProfilesBetaApi.md#deleteIdentityProfile) | **DELETE** /identity-profiles/{identity-profile-id} | Delete an Identity Profile
[**deleteIdentityProfiles**](IdentityProfilesBetaApi.md#deleteIdentityProfiles) | **POST** /identity-profiles/bulk-delete | Delete Identity Profiles
[**exportIdentityProfiles**](IdentityProfilesBetaApi.md#exportIdentityProfiles) | **GET** /identity-profiles/export | Export Identity Profiles
[**getDefaultIdentityAttributeConfig**](IdentityProfilesBetaApi.md#getDefaultIdentityAttributeConfig) | **GET** /identity-profiles/{identity-profile-id}/default-identity-attribute-config | Default identity attribute config
[**getIdentityProfile**](IdentityProfilesBetaApi.md#getIdentityProfile) | **GET** /identity-profiles/{identity-profile-id} | Gets a single Identity Profile
[**importIdentityProfiles**](IdentityProfilesBetaApi.md#importIdentityProfiles) | **POST** /identity-profiles/import | Import Identity Profiles
[**listIdentityProfiles**](IdentityProfilesBetaApi.md#listIdentityProfiles) | **GET** /identity-profiles | Identity Profiles List
[**showGenerateIdentityPreview**](IdentityProfilesBetaApi.md#showGenerateIdentityPreview) | **POST** /identity-profiles/identity-preview | Generate Identity Profile Preview
[**syncIdentityProfile**](IdentityProfilesBetaApi.md#syncIdentityProfile) | **POST** /identity-profiles/{identity-profile-id}/process-identities | Process identities under profile
[**updateIdentityProfile**](IdentityProfilesBetaApi.md#updateIdentityProfile) | **PATCH** /identity-profiles/{identity-profile-id} | Update the Identity Profile



## createIdentityProfile

> IdentityProfileBeta createIdentityProfile(identityProfileBeta)

Create an Identity Profile

This creates an Identity Profile.  A token with ORG_ADMIN authority is required to call this API to create an Identity Profile.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProfileBeta** | [**IdentityProfileBeta**](../Models/IdentityProfileBeta.md)|  | 

### Return type

[**IdentityProfileBeta**](../Models/IdentityProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityProfilesBetaApi, IdentityProfileBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityProfilesBetaApi = new IdentityProfilesBetaApi(apiConfig);

{
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "IDENTITY"
  },
  "identityExceptionReportReference" : {
    "reportName" : "My annual report",
    "taskResultId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "authoritativeSource" : {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  },
  "hasTimeBasedAttr" : true,
  "created" : "2023-01-03T21:16:22.432Z",
  "description" : "My custom flat file profile",
  "identityRefreshRequired" : true,
  "identityCount" : 8,
  "priority" : 10,
  "identityAttributeConfig" : {
    "attributeTransforms" : [ {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    }, {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    } ],
    "enabled" : true
  },
  "name" : "aName",
  "modified" : "2023-01-03T21:16:22.432Z",
  "id" : "id12345"
}


const identityProfileBeta : IdentityProfileBeta = 

try {
    const val = await identityProfilesBetaApi.createIdentityProfile(identityProfileBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityProfilesBetaApi.createIdentityProfile(identityProfileBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteIdentityProfile

> TaskResultSimplifiedBeta deleteIdentityProfile(identityProfileId)

Delete an Identity Profile

This deletes an Identity Profile based on ID.  On success, this endpoint will return a reference to the bulk delete task result.  A token with ORG_ADMIN authority is required to call this API.  The following rights are required to access this endpoint: idn:identity-profile:delete

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProfileId** | **string**| The Identity Profile ID. | [default to undefined]

### Return type

[**TaskResultSimplifiedBeta**](../Models/TaskResultSimplifiedBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityProfilesBetaApi = new IdentityProfilesBetaApi(apiConfig);

{
  "name" : "Background Object Terminator c8f030f2-b1a6-4e33-99e8-6935bc18735d",
  "description" : "Generic task for terminating data in the overlay, used by the TerminationService.",
  "id" : "ff8081814d977c21014da056804a0af3",
  "completed" : "2000-01-23T04:56:07.000+00:00",
  "completionStatus" : "Success",
  "launched" : "2000-01-23T04:56:07.000+00:00",
  "launcher" : "support"
}


const identityProfileId : string = "ef38f94347e94562b5bb8424a56397d8"; // The Identity Profile ID. (default to undefined)

try {
    const val = await identityProfilesBetaApi.deleteIdentityProfile(identityProfileId);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityProfilesBetaApi.deleteIdentityProfile(identityProfileId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteIdentityProfiles

> TaskResultSimplifiedBeta deleteIdentityProfiles(requestBody)

Delete Identity Profiles

This deletes multiple Identity Profiles via a list of supplied IDs.  On success, this endpoint will return a reference to the bulk delete task result.  A token with ORG_ADMIN authority is required to call this API.  The following rights are required to access this endpoint: idn:identity-profile:delete

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | [**Array&lt;string&gt;**](../Models/string.md)| Identity Profile bulk delete request body. | 

### Return type

[**TaskResultSimplifiedBeta**](../Models/TaskResultSimplifiedBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityProfilesBetaApi, string } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityProfilesBetaApi = new IdentityProfilesBetaApi(apiConfig);

{
  "name" : "Background Object Terminator c8f030f2-b1a6-4e33-99e8-6935bc18735d",
  "description" : "Generic task for terminating data in the overlay, used by the TerminationService.",
  "id" : "ff8081814d977c21014da056804a0af3",
  "completed" : "2000-01-23T04:56:07.000+00:00",
  "completionStatus" : "Success",
  "launched" : "2000-01-23T04:56:07.000+00:00",
  "launcher" : "support"
}


const requestBody : Array<string> = ; // Identity Profile bulk delete request body.

try {
    const val = await identityProfilesBetaApi.deleteIdentityProfiles(requestBody);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityProfilesBetaApi.deleteIdentityProfiles(requestBody);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## exportIdentityProfiles

> Array&lt;IdentityProfileExportedObjectBeta&gt; exportIdentityProfiles(limit, offset, count, filters, sorters)

Export Identity Profiles

This exports existing identity profiles in the format specified by the sp-config service.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** | [optional] [default to undefined]

### Return type

[**Array&lt;IdentityProfileExportedObjectBeta&gt;**](../Models/IdentityProfileExportedObjectBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityProfilesBetaApi = new IdentityProfilesBetaApi(apiConfig);

[ {
  "self" : {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  },
  "version" : 1,
  "object" : {
    "owner" : {
      "name" : "William Wilson",
      "id" : "2c9180835d191a86015d28455b4b232a",
      "type" : "IDENTITY"
    },
    "identityExceptionReportReference" : {
      "reportName" : "My annual report",
      "taskResultId" : "2b838de9-db9b-abcf-e646-d4f274ad4238"
    },
    "authoritativeSource" : {
      "name" : "HR Active Directory",
      "id" : "2c9180835d191a86015d28455b4b232a",
      "type" : "SOURCE"
    },
    "hasTimeBasedAttr" : true,
    "created" : "2015-05-28T14:07:17Z",
    "description" : "My custom flat file profile",
    "identityRefreshRequired" : true,
    "identityCount" : 8,
    "priority" : 10,
    "identityAttributeConfig" : {
      "attributeTransforms" : [ {
        "transformDefinition" : {
          "attributes" : {
            "attributeName" : "e-mail",
            "sourceName" : "MySource",
            "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
          },
          "type" : "accountAttribute"
        },
        "identityAttributeName" : "email"
      }, {
        "transformDefinition" : {
          "attributes" : {
            "attributeName" : "e-mail",
            "sourceName" : "MySource",
            "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
          },
          "type" : "accountAttribute"
        },
        "identityAttributeName" : "email"
      } ],
      "enabled" : true
    },
    "name" : "aName",
    "modified" : "2015-05-28T14:07:17Z",
    "id" : "id12345"
  }
}, {
  "self" : {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  },
  "version" : 1,
  "object" : {
    "owner" : {
      "name" : "William Wilson",
      "id" : "2c9180835d191a86015d28455b4b232a",
      "type" : "IDENTITY"
    },
    "identityExceptionReportReference" : {
      "reportName" : "My annual report",
      "taskResultId" : "2b838de9-db9b-abcf-e646-d4f274ad4238"
    },
    "authoritativeSource" : {
      "name" : "HR Active Directory",
      "id" : "2c9180835d191a86015d28455b4b232a",
      "type" : "SOURCE"
    },
    "hasTimeBasedAttr" : true,
    "created" : "2015-05-28T14:07:17Z",
    "description" : "My custom flat file profile",
    "identityRefreshRequired" : true,
    "identityCount" : 8,
    "priority" : 10,
    "identityAttributeConfig" : {
      "attributeTransforms" : [ {
        "transformDefinition" : {
          "attributes" : {
            "attributeName" : "e-mail",
            "sourceName" : "MySource",
            "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
          },
          "type" : "accountAttribute"
        },
        "identityAttributeName" : "email"
      }, {
        "transformDefinition" : {
          "attributes" : {
            "attributeName" : "e-mail",
            "sourceName" : "MySource",
            "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
          },
          "type" : "accountAttribute"
        },
        "identityAttributeName" : "email"
      } ],
      "enabled" : true
    },
    "name" : "aName",
    "modified" : "2015-05-28T14:07:17Z",
    "id" : "id12345"
  }
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "id eq 8c190e6787aa4ed9a90bd9d5344523fb"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* (optional) (default to undefined)
const sorters : string = "name,-priority"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** (optional) (default to undefined)

try {
    const val = await identityProfilesBetaApi.exportIdentityProfiles();
    
    // Below is a request that includes all optional parameters      
    // const val = await identityProfilesBetaApi.exportIdentityProfiles(limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getDefaultIdentityAttributeConfig

> IdentityAttributeConfigBeta getDefaultIdentityAttributeConfig(identityProfileId)

Default identity attribute config

This returns the default identity attribute config A token with ORG_ADMIN authority is required to call this API to get the default identity attribute config.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProfileId** | **string**| The Identity Profile ID | [default to undefined]

### Return type

[**IdentityAttributeConfigBeta**](../Models/IdentityAttributeConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityProfilesBetaApi = new IdentityProfilesBetaApi(apiConfig);

{
  "attributeTransforms" : [ {
    "transformDefinition" : {
      "attributes" : {
        "attributeName" : "e-mail",
        "sourceName" : "MySource",
        "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
      },
      "type" : "accountAttribute"
    },
    "identityAttributeName" : "email"
  }, {
    "transformDefinition" : {
      "attributes" : {
        "attributeName" : "e-mail",
        "sourceName" : "MySource",
        "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
      },
      "type" : "accountAttribute"
    },
    "identityAttributeName" : "email"
  } ],
  "enabled" : true
}


const identityProfileId : string = "ef38f94347e94562b5bb8424a56397d8"; // The Identity Profile ID (default to undefined)

try {
    const val = await identityProfilesBetaApi.getDefaultIdentityAttributeConfig(identityProfileId);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityProfilesBetaApi.getDefaultIdentityAttributeConfig(identityProfileId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getIdentityProfile

> IdentityProfileBeta getIdentityProfile(identityProfileId)

Gets a single Identity Profile

This returns a single Identity Profile based on ID.  A token with ORG_ADMIN or API authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProfileId** | **string**| The Identity Profile ID | [default to undefined]

### Return type

[**IdentityProfileBeta**](../Models/IdentityProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityProfilesBetaApi = new IdentityProfilesBetaApi(apiConfig);

{
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "IDENTITY"
  },
  "identityExceptionReportReference" : {
    "reportName" : "My annual report",
    "taskResultId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "authoritativeSource" : {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  },
  "hasTimeBasedAttr" : true,
  "created" : "2023-01-03T21:16:22.432Z",
  "description" : "My custom flat file profile",
  "identityRefreshRequired" : true,
  "identityCount" : 8,
  "priority" : 10,
  "identityAttributeConfig" : {
    "attributeTransforms" : [ {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    }, {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    } ],
    "enabled" : true
  },
  "name" : "aName",
  "modified" : "2023-01-03T21:16:22.432Z",
  "id" : "id12345"
}


const identityProfileId : string = "ef38f94347e94562b5bb8424a56397d8"; // The Identity Profile ID (default to undefined)

try {
    const val = await identityProfilesBetaApi.getIdentityProfile(identityProfileId);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityProfilesBetaApi.getIdentityProfile(identityProfileId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## importIdentityProfiles

> ObjectImportResultBeta importIdentityProfiles(identityProfileExportedObjectBeta)

Import Identity Profiles

This imports previously exported identity profiles.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProfileExportedObjectBeta** | [**Array&lt;IdentityProfileExportedObjectBeta&gt;**](../Models/IdentityProfileExportedObjectBeta.md)| Previously exported Identity Profiles. | 

### Return type

[**ObjectImportResultBeta**](../Models/ObjectImportResultBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityProfilesBetaApi, IdentityProfileExportedObjectBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityProfilesBetaApi = new IdentityProfilesBetaApi(apiConfig);

{
  "warnings" : [ {
    "details" : {
      "details" : "message details"
    },
    "text" : "Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]",
    "key" : "UNKNOWN_REFERENCE_RESOLVER"
  }, {
    "details" : {
      "details" : "message details"
    },
    "text" : "Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]",
    "key" : "UNKNOWN_REFERENCE_RESOLVER"
  } ],
  "importedObjects" : [ {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  }, {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  } ],
  "infos" : [ {
    "details" : {
      "details" : "message details"
    },
    "text" : "Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]",
    "key" : "UNKNOWN_REFERENCE_RESOLVER"
  }, {
    "details" : {
      "details" : "message details"
    },
    "text" : "Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]",
    "key" : "UNKNOWN_REFERENCE_RESOLVER"
  } ],
  "errors" : [ {
    "details" : {
      "details" : "message details"
    },
    "text" : "Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]",
    "key" : "UNKNOWN_REFERENCE_RESOLVER"
  }, {
    "details" : {
      "details" : "message details"
    },
    "text" : "Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]",
    "key" : "UNKNOWN_REFERENCE_RESOLVER"
  } ]
}


const identityProfileExportedObjectBeta : Array<IdentityProfileExportedObjectBeta> = ; // Previously exported Identity Profiles.

try {
    const val = await identityProfilesBetaApi.importIdentityProfiles(identityProfileExportedObjectBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityProfilesBetaApi.importIdentityProfiles(identityProfileExportedObjectBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listIdentityProfiles

> Array&lt;IdentityProfileBeta&gt; listIdentityProfiles(limit, offset, count, filters, sorters)

Identity Profiles List

This returns a list of Identity Profiles based on the specified query parameters. A token with ORG_ADMIN or API authority is required to call this API to get a list of Identity Profiles.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, lt, isnull, sw*  **name**: *eq, ne, in, le, lt, isnull, sw*  **priority**: *eq, ne* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** | [optional] [default to undefined]

### Return type

[**Array&lt;IdentityProfileBeta&gt;**](../Models/IdentityProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityProfilesBetaApi = new IdentityProfilesBetaApi(apiConfig);

[ {
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "IDENTITY"
  },
  "identityExceptionReportReference" : {
    "reportName" : "My annual report",
    "taskResultId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "authoritativeSource" : {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  },
  "hasTimeBasedAttr" : true,
  "created" : "2023-01-03T21:16:22.432Z",
  "description" : "My custom flat file profile",
  "identityRefreshRequired" : true,
  "identityCount" : 8,
  "priority" : 10,
  "identityAttributeConfig" : {
    "attributeTransforms" : [ {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    }, {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    } ],
    "enabled" : true
  },
  "name" : "aName",
  "modified" : "2023-01-03T21:16:22.432Z",
  "id" : "id12345"
}, {
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "IDENTITY"
  },
  "identityExceptionReportReference" : {
    "reportName" : "My annual report",
    "taskResultId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "authoritativeSource" : {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  },
  "hasTimeBasedAttr" : true,
  "created" : "2023-01-03T21:16:22.432Z",
  "description" : "My custom flat file profile",
  "identityRefreshRequired" : true,
  "identityCount" : 8,
  "priority" : 10,
  "identityAttributeConfig" : {
    "attributeTransforms" : [ {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    }, {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    } ],
    "enabled" : true
  },
  "name" : "aName",
  "modified" : "2023-01-03T21:16:22.432Z",
  "id" : "id12345"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "id eq 8c190e6787aa4ed9a90bd9d5344523fb"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, lt, isnull, sw*  **name**: *eq, ne, in, le, lt, isnull, sw*  **priority**: *eq, ne* (optional) (default to undefined)
const sorters : string = "name,-priority"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** (optional) (default to undefined)

try {
    const val = await identityProfilesBetaApi.listIdentityProfiles();
    
    // Below is a request that includes all optional parameters      
    // const val = await identityProfilesBetaApi.listIdentityProfiles(limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## showGenerateIdentityPreview

> IdentityPreviewResponseBeta showGenerateIdentityPreview(identityPreviewRequestBeta)

Generate Identity Profile Preview

Use this API to generate a non-persisted preview of the identity object after applying `IdentityAttributeConfig` sent in request body. This API only allows `accountAttribute`, `reference` and `rule` transform types in the `IdentityAttributeConfig` sent in the request body. A token with ORG_ADMIN authority is required to call this API to generate an identity preview.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityPreviewRequestBeta** | [**IdentityPreviewRequestBeta**](../Models/IdentityPreviewRequestBeta.md)| Identity Preview request body. | 

### Return type

[**IdentityPreviewResponseBeta**](../Models/IdentityPreviewResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityProfilesBetaApi, IdentityPreviewRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityProfilesBetaApi = new IdentityProfilesBetaApi(apiConfig);

{
  "identity" : {
    "name" : "Robert Robinson",
    "id" : "2c4180a46faadee4016fb4e018c20626",
    "type" : "IDENTITY"
  },
  "previewAttributes" : [ {
    "errorMessages" : [ {
      "localeOrigin" : "DEFAULT",
      "text" : "The request was syntactically correct but its content is semantically invalid.",
      "locale" : "en-US"
    }, {
      "localeOrigin" : "DEFAULT",
      "text" : "The request was syntactically correct but its content is semantically invalid.",
      "locale" : "en-US"
    } ],
    "name" : "email",
    "value" : "email@mail.com",
    "previousValue" : "oldEmail@mail.com"
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
    "name" : "email",
    "value" : "email@mail.com",
    "previousValue" : "oldEmail@mail.com"
  } ]
}


const identityPreviewRequestBeta : IdentityPreviewRequestBeta = 

try {
    const val = await identityProfilesBetaApi.showGenerateIdentityPreview(identityPreviewRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityProfilesBetaApi.showGenerateIdentityPreview(identityPreviewRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## syncIdentityProfile

> object syncIdentityProfile(identityProfileId)

Process identities under profile

Process identities under the profile This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant\'s timezone to keep your identities synchronized.  This should only be run on identity profiles that have the `identityRefreshRequired` attribute set to `true`. If `identityRefreshRequired` is false, then there is no benefit to running this operation. Typically, this operation is performed when a change is made to the identity profile or its related lifecycle states that requires a refresh. This operation will perform the following activities on all identities under the identity profile. 1. Updates identity attribute according to the identity profile mappings. 2. Determines the identity\'s correct manager through manager correlation. 3. Updates the identity\'s access according to their assigned lifecycle state. 4. Updates the identity\'s access based on role assignment criteria. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProfileId** | **string**| The Identity Profile ID to be processed | [default to undefined]

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityProfilesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityProfilesBetaApi = new IdentityProfilesBetaApi(apiConfig);

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


const identityProfileId : string = "ef38f94347e94562b5bb8424a56397d8"; // The Identity Profile ID to be processed (default to undefined)

try {
    const val = await identityProfilesBetaApi.syncIdentityProfile(identityProfileId);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityProfilesBetaApi.syncIdentityProfile(identityProfileId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateIdentityProfile

> IdentityProfileBeta updateIdentityProfile(identityProfileId, jsonPatchOperationBeta)

Update the Identity Profile

This updates the specified Identity Profile.  A token with ORG_ADMIN authority is required to call this API to update the Identity Profile.  Some fields of the Schema cannot be updated. These fields are listed below: * id * name * created * modified * identityCount * identityRefreshRequired * Authoritative Source and Identity Attribute Configuration cannot be modified at once.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProfileId** | **string**| The Identity Profile ID | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| A list of Identity Profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**IdentityProfileBeta**](../Models/IdentityProfileBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityProfilesBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityProfilesBetaApi = new IdentityProfilesBetaApi(apiConfig);

{
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "IDENTITY"
  },
  "identityExceptionReportReference" : {
    "reportName" : "My annual report",
    "taskResultId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "authoritativeSource" : {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  },
  "hasTimeBasedAttr" : true,
  "created" : "2023-01-03T21:16:22.432Z",
  "description" : "My custom flat file profile",
  "identityRefreshRequired" : true,
  "identityCount" : 8,
  "priority" : 10,
  "identityAttributeConfig" : {
    "attributeTransforms" : [ {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    }, {
      "transformDefinition" : {
        "attributes" : {
          "attributeName" : "e-mail",
          "sourceName" : "MySource",
          "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
        },
        "type" : "accountAttribute"
      },
      "identityAttributeName" : "email"
    } ],
    "enabled" : true
  },
  "name" : "aName",
  "modified" : "2023-01-03T21:16:22.432Z",
  "id" : "id12345"
}


const identityProfileId : string = "ef38f94347e94562b5bb8424a56397d8"; // The Identity Profile ID (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=add, path=/identityAttributeConfig/attributeTransforms/0, value={identityAttributeName=location, transformDefinition={type=accountAttribute, attributes={sourceName=Employees, attributeName=location, sourceId=2c91808878b7d63b0178c66ffcdc4ce4}}}}]; // A list of Identity Profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

try {
    const val = await identityProfilesBetaApi.updateIdentityProfile(identityProfileId, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await identityProfilesBetaApi.updateIdentityProfile(identityProfileId, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

