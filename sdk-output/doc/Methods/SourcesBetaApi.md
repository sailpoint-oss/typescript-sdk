---
title: SourcesBetaApi
pagination_label: SourcesBetaApi
sidebar_label: SourcesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'SourcesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'SourcesBetaApi']
---

# SourcesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](SourcesBetaApi.md#_delete) | **DELETE** /sources/{id} | Delete Source by ID
[**createProvisioningPolicy**](SourcesBetaApi.md#createProvisioningPolicy) | **POST** /sources/{sourceId}/provisioning-policies | Create Provisioning Policy
[**createSource**](SourcesBetaApi.md#createSource) | **POST** /sources | Creates a source in IdentityNow.
[**createSourceSchema**](SourcesBetaApi.md#createSourceSchema) | **POST** /sources/{sourceId}/schemas | Create Schema on Source
[**deleteAccountsAsync**](SourcesBetaApi.md#deleteAccountsAsync) | **POST** /sources/{sourceId}/remove-accounts | Remove All Accounts in a Source
[**deleteNativeChangeDetectionConfig**](SourcesBetaApi.md#deleteNativeChangeDetectionConfig) | **DELETE** /sources/{sourceId}/native-change-detection-config | Delete Native Change Detection Configuration
[**deleteProvisioningPolicy**](SourcesBetaApi.md#deleteProvisioningPolicy) | **DELETE** /sources/{sourceId}/provisioning-policies/{usageType} | Delete Provisioning Policy by UsageType
[**deleteSourceSchema**](SourcesBetaApi.md#deleteSourceSchema) | **DELETE** /sources/{sourceId}/schemas/{schemaId} | Delete Source Schema by ID
[**getCorrelationConfig**](SourcesBetaApi.md#getCorrelationConfig) | **GET** /sources/{sourceId}/correlation-config | Get Source Correlation Configuration
[**getNativeChangeDetectionConfig**](SourcesBetaApi.md#getNativeChangeDetectionConfig) | **GET** /sources/{sourceId}/native-change-detection-config | Native Change Detection Configuration
[**getProvisioningPolicy**](SourcesBetaApi.md#getProvisioningPolicy) | **GET** /sources/{sourceId}/provisioning-policies/{usageType} | Get Provisioning Policy by UsageType
[**getSource**](SourcesBetaApi.md#getSource) | **GET** /sources/{id} | Get Source by ID
[**getSourceAccountsSchema**](SourcesBetaApi.md#getSourceAccountsSchema) | **GET** /sources/{sourceId}/schemas/accounts | Downloads source accounts schema template
[**getSourceAttrSyncConfig**](SourcesBetaApi.md#getSourceAttrSyncConfig) | **GET** /sources/{id}/attribute-sync-config | Attribute Sync Config
[**getSourceConfig**](SourcesBetaApi.md#getSourceConfig) | **GET** /sources/{id}/connectors/source-config | Gets source config with language translations
[**getSourceEntitlementRequestConfig**](SourcesBetaApi.md#getSourceEntitlementRequestConfig) | **GET** /sources/{sourceId}/entitlement-request-config | Get Source Entitlement Request Configuration
[**getSourceEntitlementsSchema**](SourcesBetaApi.md#getSourceEntitlementsSchema) | **GET** /sources/{sourceId}/schemas/entitlements | Downloads source entitlements schema template
[**getSourceSchema**](SourcesBetaApi.md#getSourceSchema) | **GET** /sources/{sourceId}/schemas/{schemaId} | Get Source Schema by ID
[**getSourceSchemas**](SourcesBetaApi.md#getSourceSchemas) | **GET** /sources/{sourceId}/schemas | List Schemas on Source
[**importAccounts**](SourcesBetaApi.md#importAccounts) | **POST** /sources/{sourceId}/load-accounts | Account Aggregation
[**importEntitlements**](SourcesBetaApi.md#importEntitlements) | **POST** /sources/{sourceId}/load-entitlements | Entitlement Aggregation
[**importSourceAccountsSchema**](SourcesBetaApi.md#importSourceAccountsSchema) | **POST** /sources/{sourceId}/schemas/accounts | Uploads source accounts schema template
[**importSourceConnectorFile**](SourcesBetaApi.md#importSourceConnectorFile) | **POST** /sources/{sourceId}/upload-connector-file | Upload connector file to source
[**importSourceEntitlementsSchema**](SourcesBetaApi.md#importSourceEntitlementsSchema) | **POST** /sources/{sourceId}/schemas/entitlements | Uploads source entitlements schema template
[**importUncorrelatedAccounts**](SourcesBetaApi.md#importUncorrelatedAccounts) | **POST** /sources/{sourceId}/load-uncorrelated-accounts | Process Uncorrelated Accounts
[**listProvisioningPolicies**](SourcesBetaApi.md#listProvisioningPolicies) | **GET** /sources/{sourceId}/provisioning-policies | Lists ProvisioningPolicies
[**listSources**](SourcesBetaApi.md#listSources) | **GET** /sources | Lists all sources in IdentityNow.
[**peekResourceObjects**](SourcesBetaApi.md#peekResourceObjects) | **POST** /sources/{sourceId}/connector/peek-resource-objects | Peek source connector\&#39;s resource objects
[**pingCluster**](SourcesBetaApi.md#pingCluster) | **POST** /sources/{sourceId}/connector/ping-cluster | Ping cluster for source connector
[**putCorrelationConfig**](SourcesBetaApi.md#putCorrelationConfig) | **PUT** /sources/{sourceId}/correlation-config | Update Source Correlation Configuration
[**putNativeChangeDetectionConfig**](SourcesBetaApi.md#putNativeChangeDetectionConfig) | **PUT** /sources/{sourceId}/native-change-detection-config | Update Native Change Detection Configuration
[**putProvisioningPolicy**](SourcesBetaApi.md#putProvisioningPolicy) | **PUT** /sources/{sourceId}/provisioning-policies/{usageType} | Update Provisioning Policy by UsageType
[**putSource**](SourcesBetaApi.md#putSource) | **PUT** /sources/{id} | Update Source (Full)
[**putSourceAttrSyncConfig**](SourcesBetaApi.md#putSourceAttrSyncConfig) | **PUT** /sources/{id}/attribute-sync-config | Update Attribute Sync Config
[**putSourceSchema**](SourcesBetaApi.md#putSourceSchema) | **PUT** /sources/{sourceId}/schemas/{schemaId} | Update Source Schema (Full)
[**syncAttributesForSource**](SourcesBetaApi.md#syncAttributesForSource) | **POST** /sources/{sourceId}/synchronize-attributes | Synchronize single source attributes.
[**testSourceConfiguration**](SourcesBetaApi.md#testSourceConfiguration) | **POST** /sources/{sourceId}/connector/test-configuration | Test configuration for source connector
[**testSourceConnection**](SourcesBetaApi.md#testSourceConnection) | **POST** /sources/{sourceId}/connector/check-connection | Check connection for source connector.
[**updateProvisioningPoliciesInBulk**](SourcesBetaApi.md#updateProvisioningPoliciesInBulk) | **POST** /sources/{sourceId}/provisioning-policies/bulk-update | Bulk Update Provisioning Policies
[**updateProvisioningPolicy**](SourcesBetaApi.md#updateProvisioningPolicy) | **PATCH** /sources/{sourceId}/provisioning-policies/{usageType} | Partial update of Provisioning Policy
[**updateSource**](SourcesBetaApi.md#updateSource) | **PATCH** /sources/{id} | Update Source (Partial)
[**updateSourceEntitlementRequestConfig**](SourcesBetaApi.md#updateSourceEntitlementRequestConfig) | **PUT** /sources/{sourceId}/entitlement-request-config | Update Source Entitlement Request Configuration
[**updateSourceSchema**](SourcesBetaApi.md#updateSourceSchema) | **PATCH** /sources/{sourceId}/schemas/{schemaId} | Update Source Schema (Partial)



## _delete

> Delete202ResponseBeta _delete(id)

Delete Source by ID

Use this API to delete a specific source in Identity Security Cloud (ISC). The API removes all the accounts on the source first, and then it deletes the source. You can retrieve the actual task execution status with this method: GET `/task-status/{id}` A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Source ID. | [default to undefined]

### Return type

[**Delete202ResponseBeta**](../Models/Delete202ResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "name" : "name",
  "id" : "2c91808779ecf55b0179f720942f181a",
  "type" : "TASK_RESULT"
}


const id : string = "2c9180835d191a86015d28455b4a2329"; // Source ID. (default to undefined)

try {
    const val = await sourcesBetaApi._delete(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi._delete(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## createProvisioningPolicy

> ProvisioningPolicyDtoBeta createProvisioningPolicy(sourceId, provisioningPolicyDtoBeta)

Create Provisioning Policy

This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types. Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning. Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]
 **provisioningPolicyDtoBeta** | [**ProvisioningPolicyDtoBeta**](../Models/ProvisioningPolicyDtoBeta.md)|  | 

### Return type

[**ProvisioningPolicyDtoBeta**](../Models/ProvisioningPolicyDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, ProvisioningPolicyDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "name" : "example provisioning policy for inactive identities",
  "description" : "this provisioning policy creates access based on an identity going inactive",
  "fields" : [ {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  }, {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  } ],
  "usageType" : "CREATE"
}


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The Source id (default to undefined)
const provisioningPolicyDtoBeta : ProvisioningPolicyDtoBeta = 

try {
    const val = await sourcesBetaApi.createProvisioningPolicy(sourceId, provisioningPolicyDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.createProvisioningPolicy(sourceId, provisioningPolicyDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## createSource

> SourceBeta createSource(sourceBeta, provisionAsCsv)

Creates a source in IdentityNow.

This creates a specific source with a full source JSON representation. Any passwords are submitted as plain-text and encrypted upon receipt in IdentityNow. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceBeta** | [**SourceBeta**](../Models/SourceBeta.md)|  | 
 **provisionAsCsv** | **boolean**| If this parameter is &#x60;true&#x60;, it configures the source as a Delimited File (CSV) source. Setting this to &#x60;true&#x60; will automatically set the &#x60;type&#x60; of the source to &#x60;DelimitedFile&#x60;.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don\&#39;t set this query parameter and you attempt to set the &#x60;type&#x60; attribute directly, the request won\&#39;t correctly generate the source.   | [optional] [default to undefined]

### Return type

[**SourceBeta**](../Models/SourceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, SourceBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "active-directory",
  "description" : "This is the corporate directory.",
  "type" : "OpenLDAP - Direct",
  "connectorClass" : "sailpoint.connector.LDAPConnector",
  "connectionType" : "file",
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "passwordPolicies" : [ {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb053980",
    "name" : "Corporate Password Policy"
  }, {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb057777",
    "name" : "Vendor Password Policy"
  } ],
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "delimited-file",
  "managerCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "accountCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "authoritative" : false,
  "connectorAttributes" : {
    "healthCheckTimeout" : 30,
    "authSearchAttributes" : [ "cn", "uid", "mail" ]
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "managerCorrelationMapping" : {
    "accountAttributeName" : "manager",
    "identityAttributeName" : "manager"
  },
  "credentialProviderEnabled" : false,
  "accountCorrelationConfig" : {
    "name" : "Directory [source-62867] Account Correlation",
    "id" : "2c9180855d191c59015d28583727245a",
    "type" : "ACCOUNT_CORRELATION_CONFIG"
  },
  "connector" : "active-directory",
  "healthy" : true,
  "schemas" : [ {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "name" : "account"
  }, {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232b",
    "name" : "group"
  } ],
  "name" : "My Source",
  "connectorName" : "Active Directory",
  "category" : "CredentialProvider",
  "beforeProvisioningRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2021-09-28T15:48:29.3801666300Z"
}


const sourceBeta : SourceBeta = 
const provisionAsCsv : boolean = false; // If this parameter is `true`, it configures the source as a Delimited File (CSV) source. Setting this to `true` will automatically set the `type` of the source to `DelimitedFile`.  You must use this query parameter to create a Delimited File source as you would in the UI.  If you don\'t set this query parameter and you attempt to set the `type` attribute directly, the request won\'t correctly generate the source.   (optional) (default to undefined)

try {
    const val = await sourcesBetaApi.createSource(sourceBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.createSource(sourceBeta, provisionAsCsv);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## createSourceSchema

> SchemaBeta createSourceSchema(sourceId, schemaBeta)

Create Schema on Source

Use this API to create a new schema on the specified source in Identity Security Cloud (ISC).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| Source ID. | [default to undefined]
 **schemaBeta** | [**SchemaBeta**](../Models/SchemaBeta.md)|  | 

### Return type

[**SchemaBeta**](../Models/SchemaBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, SchemaBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "nativeObjectType" : "User",
  "configuration" : {
    "groupMemberAttribute" : "member"
  },
  "created" : "2019-12-24T22:32:58.104Z",
  "includePermissions" : false,
  "name" : "account",
  "hierarchyAttribute" : "memberOf",
  "modified" : "2019-12-31T20:22:28.104Z",
  "attributes" : [ {
    "name" : "sAMAccountName",
    "type" : "STRING",
    "isMultiValued" : false,
    "isEntitlement" : false,
    "isGroup" : false
  }, {
    "name" : "memberOf",
    "type" : "STRING",
    "schema" : {
      "type" : "CONNECTOR_SCHEMA",
      "id" : "2c9180887671ff8c01767b4671fc7d60",
      "name" : "group"
    },
    "description" : "Group membership",
    "isMultiValued" : true,
    "isEntitlement" : true,
    "isGroup" : true
  } ],
  "id" : "2c9180835d191a86015d28455b4a2329",
  "displayAttribute" : "distinguishedName",
  "identityAttribute" : "sAMAccountName"
}


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // Source ID. (default to undefined)
const schemaBeta : SchemaBeta = 

try {
    const val = await sourcesBetaApi.createSourceSchema(sourceId, schemaBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.createSourceSchema(sourceId, schemaBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteAccountsAsync

> TaskResultDtoBeta deleteAccountsAsync(sourceId)

Remove All Accounts in a Source

Use this endpoint to remove all accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.  This endpoint is good for: * Removing accounts that no longer exist on the source. * Removing accounts that won\'t be aggregated following updates to the source configuration. * Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The source id | [default to undefined]

### Return type

[**TaskResultDtoBeta**](../Models/TaskResultDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "name" : "name",
  "id" : "464ae7bf791e49fdb74606a2e4a89635",
  "type" : "TASK_RESULT"
}


const sourceId : string = "ebbf35756e1140699ce52b233121384a"; // The source id (default to undefined)

try {
    const val = await sourcesBetaApi.deleteAccountsAsync(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.deleteAccountsAsync(sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteNativeChangeDetectionConfig

> deleteNativeChangeDetectionConfig(sourceId)

Delete Native Change Detection Configuration

Deletes the native change detection configuration for the source specified by the given ID. A token with API, or ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The source id | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

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


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The source id (default to undefined)

try {
    const val = await sourcesBetaApi.deleteNativeChangeDetectionConfig(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.deleteNativeChangeDetectionConfig(sourceId);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteProvisioningPolicy

> deleteProvisioningPolicy(sourceId, usageType)

Delete Provisioning Policy by UsageType

Deletes the provisioning policy with the specified usage on an application.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source ID. | [default to undefined]
 **usageType** | [**UsageTypeBeta**](../Models/.md)| The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \&#39;Create Account Profile\&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \&#39;Update Account Profile\&#39;, the provisioning template for the \&#39;Update\&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \&#39;Enable Account Profile\&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\&#39;s account is created.  DISABLE - This usage type relates to \&#39;Disable Account Profile\&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi,  } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

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


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The Source ID. (default to undefined)
const usageType : UsageTypeBeta = CREATE; // The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \'Create Account Profile\', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \'Update Account Profile\', the provisioning template for the \'Update\' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \'Enable Account Profile\', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\'s account is created.  DISABLE - This usage type relates to \'Disable Account Profile\', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  (default to undefined)

try {
    const val = await sourcesBetaApi.deleteProvisioningPolicy(sourceId, usageType);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.deleteProvisioningPolicy(sourceId, usageType);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteSourceSchema

> deleteSourceSchema(sourceId, schemaId)

Delete Source Schema by ID

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source ID. | [default to undefined]
 **schemaId** | **string**| The Schema ID. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

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


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The Source ID. (default to undefined)
const schemaId : string = "2c9180835d191a86015d28455b4a2329"; // The Schema ID. (default to undefined)

try {
    const val = await sourcesBetaApi.deleteSourceSchema(sourceId, schemaId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.deleteSourceSchema(sourceId, schemaId);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getCorrelationConfig

> CorrelationConfigBeta getCorrelationConfig(sourceId)

Get Source Correlation Configuration

This API returns the existing correlation configuration for a source specified by the given ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The source id | [default to undefined]

### Return type

[**CorrelationConfigBeta**](../Models/CorrelationConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "attributeAssignments" : [ {
    "filterString" : "first_name == \"John\"",
    "ignoreCase" : false,
    "complex" : false,
    "property" : "first_name",
    "value" : "firstName",
    "operation" : "EQ",
    "matchMode" : "ANYWHERE"
  }, {
    "filterString" : "first_name == \"John\"",
    "ignoreCase" : false,
    "complex" : false,
    "property" : "first_name",
    "value" : "firstName",
    "operation" : "EQ",
    "matchMode" : "ANYWHERE"
  } ],
  "name" : "Source [source] Account Correlation",
  "id" : "2c9180835d191a86015d28455b4a2329"
}


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The source id (default to undefined)

try {
    const val = await sourcesBetaApi.getCorrelationConfig(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.getCorrelationConfig(sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getNativeChangeDetectionConfig

> NativeChangeDetectionConfigBeta getNativeChangeDetectionConfig(sourceId)

Native Change Detection Configuration

This API returns the existing native change detection configuration for a source specified by the given ID. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The source id | [default to undefined]

### Return type

[**NativeChangeDetectionConfigBeta**](../Models/NativeChangeDetectionConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "selectedEntitlements" : [ "memberOf", "memberOfSharedMailbox" ],
  "operations" : [ "ACCOUNT_UPDATED", "ACCOUNT_DELETED" ],
  "selectedNonEntitlementAttributes" : [ "lastName", "phoneNumber", "objectType", "servicePrincipalName" ],
  "allNonEntitlementAttributes" : false,
  "allEntitlements" : false,
  "enabled" : true
}


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The source id (default to undefined)

try {
    const val = await sourcesBetaApi.getNativeChangeDetectionConfig(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.getNativeChangeDetectionConfig(sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getProvisioningPolicy

> ProvisioningPolicyDtoBeta getProvisioningPolicy(sourceId, usageType)

Get Provisioning Policy by UsageType

This end-point retrieves the ProvisioningPolicy with the specified usage on the specified Source in IdentityNow.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source ID. | [default to undefined]
 **usageType** | [**UsageTypeBeta**](../Models/.md)| The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \&#39;Create Account Profile\&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \&#39;Update Account Profile\&#39;, the provisioning template for the \&#39;Update\&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \&#39;Enable Account Profile\&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\&#39;s account is created.  DISABLE - This usage type relates to \&#39;Disable Account Profile\&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  | [default to undefined]

### Return type

[**ProvisioningPolicyDtoBeta**](../Models/ProvisioningPolicyDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi,  } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "name" : "example provisioning policy for inactive identities",
  "description" : "this provisioning policy creates access based on an identity going inactive",
  "fields" : [ {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  }, {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  } ],
  "usageType" : "CREATE"
}


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The Source ID. (default to undefined)
const usageType : UsageTypeBeta = CREATE; // The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \'Create Account Profile\', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \'Update Account Profile\', the provisioning template for the \'Update\' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \'Enable Account Profile\', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\'s account is created.  DISABLE - This usage type relates to \'Disable Account Profile\', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  (default to undefined)

try {
    const val = await sourcesBetaApi.getProvisioningPolicy(sourceId, usageType);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.getProvisioningPolicy(sourceId, usageType);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSource

> SourceBeta getSource(id)

Get Source by ID

Use this API to get a source by a specified ID in Identity Security Cloud (ISC). A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Source ID. | [default to undefined]

### Return type

[**SourceBeta**](../Models/SourceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "active-directory",
  "description" : "This is the corporate directory.",
  "type" : "OpenLDAP - Direct",
  "connectorClass" : "sailpoint.connector.LDAPConnector",
  "connectionType" : "file",
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "passwordPolicies" : [ {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb053980",
    "name" : "Corporate Password Policy"
  }, {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb057777",
    "name" : "Vendor Password Policy"
  } ],
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "delimited-file",
  "managerCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "accountCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "authoritative" : false,
  "connectorAttributes" : {
    "healthCheckTimeout" : 30,
    "authSearchAttributes" : [ "cn", "uid", "mail" ]
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "managerCorrelationMapping" : {
    "accountAttributeName" : "manager",
    "identityAttributeName" : "manager"
  },
  "credentialProviderEnabled" : false,
  "accountCorrelationConfig" : {
    "name" : "Directory [source-62867] Account Correlation",
    "id" : "2c9180855d191c59015d28583727245a",
    "type" : "ACCOUNT_CORRELATION_CONFIG"
  },
  "connector" : "active-directory",
  "healthy" : true,
  "schemas" : [ {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "name" : "account"
  }, {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232b",
    "name" : "group"
  } ],
  "name" : "My Source",
  "connectorName" : "Active Directory",
  "category" : "CredentialProvider",
  "beforeProvisioningRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2021-09-28T15:48:29.3801666300Z"
}


const id : string = "2c9180835d191a86015d28455b4a2329"; // Source ID. (default to undefined)

try {
    const val = await sourcesBetaApi.getSource(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.getSource(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSourceAccountsSchema

> getSourceAccountsSchema(sourceId)

Downloads source accounts schema template

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

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


const sourceId : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The Source id (default to undefined)

try {
    const val = await sourcesBetaApi.getSourceAccountsSchema(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.getSourceAccountsSchema(sourceId);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSourceAttrSyncConfig

> AttrSyncSourceConfigBeta getSourceAttrSyncConfig(id)

Attribute Sync Config

This API returns the existing attribute synchronization configuration for a source specified by the given ID. The response contains all attributes, regardless of whether they enabled or not. A token with ORG_ADMIN or HELPDESK authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The source id | [default to undefined]

### Return type

[**AttrSyncSourceConfigBeta**](../Models/AttrSyncSourceConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "attributes" : [ {
    "name" : "email",
    "displayName" : "Email",
    "enabled" : true,
    "target" : "mail"
  }, {
    "name" : "firstname",
    "displayName" : "First Name",
    "enabled" : false,
    "target" : "givenName"
  } ],
  "source" : {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  }
}


const id : string = "2c9180835d191a86015d28455b4a2329"; // The source id (default to undefined)

try {
    const val = await sourcesBetaApi.getSourceAttrSyncConfig(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.getSourceAttrSyncConfig(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSourceConfig

> ConnectorDetailBeta getSourceConfig(id, locale)

Gets source config with language translations

Looks up and returns the source config for the requested source id after populating the source config values and applying language translations. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The Source id | [default to undefined]
 **locale** | **&#39;de&#39; | &#39;false&#39; | &#39;fi&#39; | &#39;sv&#39; | &#39;ru&#39; | &#39;pt&#39; | &#39;ko&#39; | &#39;zh-TW&#39; | &#39;en&#39; | &#39;it&#39; | &#39;fr&#39; | &#39;zh-CN&#39; | &#39;hu&#39; | &#39;es&#39; | &#39;cs&#39; | &#39;ja&#39; | &#39;pl&#39; | &#39;da&#39; | &#39;nl&#39;**| The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | [optional] [default to undefined]

### Return type

[**ConnectorDetailBeta**](../Models/ConnectorDetailBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "uploadedFiles" : "[]",
  "sourceConfig" : "{Form={Field={_defaultValue=true, _hidden=true, _name=cloudAuthEnabled, _type=boolean, _value=true}, _xmlns=http://www.sailpoint.com/xsd/sailpoint_form_1_0.xsd, _connectorName=Active Directory - Direct, _directConnect=true, _name=Active Directory, _status=released, _type=SourceConfig, __text=\\n\\t}}",
  "name" : "JDBC",
  "sourceConfigXml" : "<Form connectorName='Active Directory - Direct' directConnect='true' name='Active Directory' status='released' type='SourceConfig' xmlns='http://www.sailpoint.com/xsd/sailpoint_form_1_0.xsd'>\n\t<Field defaultValue='true' hidden='true' name='cloudAuthEnabled' type='boolean' value='true'> </Field> </Form>",
  "directConnect" : true,
  "fileUpload" : false,
  "connectorMetadata" : {
    "supportedUI" : "EXTJS"
  }
}


const id : string = "id_example"; // The Source id (default to undefined)
const locale : 'de' | 'false' | 'fi' | 'sv' | 'ru' | 'pt' | 'ko' | 'zh-TW' | 'en' | 'it' | 'fr' | 'zh-CN' | 'hu' | 'es' | 'cs' | 'ja' | 'pl' | 'da' | 'nl' = "locale_example"; // The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) (default to undefined)

try {
    const val = await sourcesBetaApi.getSourceConfig(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.getSourceConfig(id, locale);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSourceEntitlementRequestConfig

> SourceEntitlementRequestConfigBeta getSourceEntitlementRequestConfig(sourceId)

Get Source Entitlement Request Configuration

This API gets the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.  Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined. - During access request, this source-level entitlement request configuration overrides the global organization-level configuration. - However, the entitlement-level configuration (if defined) overrides this source-level configuration.  A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]

### Return type

[**SourceEntitlementRequestConfigBeta**](../Models/SourceEntitlementRequestConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

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


const sourceId : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The Source id (default to undefined)

try {
    const val = await sourcesBetaApi.getSourceEntitlementRequestConfig(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.getSourceEntitlementRequestConfig(sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSourceEntitlementsSchema

> getSourceEntitlementsSchema(sourceId, schemaName)

Downloads source entitlements schema template

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]
 **schemaName** | **string**| Name of entitlement schema | [optional] [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

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


const sourceId : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The Source id (default to undefined)
const schemaName : string = "?schemaName=group"; // Name of entitlement schema (optional) (default to undefined)

try {
    const val = await sourcesBetaApi.getSourceEntitlementsSchema(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.getSourceEntitlementsSchema(sourceId, schemaName);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSourceSchema

> SchemaBeta getSourceSchema(sourceId, schemaId)

Get Source Schema by ID

Get the Source Schema by ID in IdentityNow. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source ID. | [default to undefined]
 **schemaId** | **string**| The Schema ID. | [default to undefined]

### Return type

[**SchemaBeta**](../Models/SchemaBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "nativeObjectType" : "User",
  "configuration" : {
    "groupMemberAttribute" : "member"
  },
  "created" : "2019-12-24T22:32:58.104Z",
  "includePermissions" : false,
  "name" : "account",
  "hierarchyAttribute" : "memberOf",
  "modified" : "2019-12-31T20:22:28.104Z",
  "attributes" : [ {
    "name" : "sAMAccountName",
    "type" : "STRING",
    "isMultiValued" : false,
    "isEntitlement" : false,
    "isGroup" : false
  }, {
    "name" : "memberOf",
    "type" : "STRING",
    "schema" : {
      "type" : "CONNECTOR_SCHEMA",
      "id" : "2c9180887671ff8c01767b4671fc7d60",
      "name" : "group"
    },
    "description" : "Group membership",
    "isMultiValued" : true,
    "isEntitlement" : true,
    "isGroup" : true
  } ],
  "id" : "2c9180835d191a86015d28455b4a2329",
  "displayAttribute" : "distinguishedName",
  "identityAttribute" : "sAMAccountName"
}


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The Source ID. (default to undefined)
const schemaId : string = "2c9180835d191a86015d28455b4a2329"; // The Schema ID. (default to undefined)

try {
    const val = await sourcesBetaApi.getSourceSchema(sourceId, schemaId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.getSourceSchema(sourceId, schemaId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSourceSchemas

> Array&lt;SchemaBeta&gt; getSourceSchemas(sourceId, includeTypes, includeNames)

List Schemas on Source

Use this API to list the schemas that exist on the specified source in Identity Security Cloud (ISC).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| Source ID. | [default to undefined]
 **includeTypes** | **&#39;group&#39; | &#39;user&#39;**| If set to \&#39;group\&#39;, then the account schema is filtered and only group schemas are returned. Only a value of \&#39;group\&#39; is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. | [optional] [default to undefined]
 **includeNames** | **string**| A comma-separated list of schema names to filter result. | [optional] [default to undefined]

### Return type

[**Array&lt;SchemaBeta&gt;**](../Models/SchemaBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

[ {
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "nativeObjectType" : "User",
  "configuration" : {
    "groupMemberAttribute" : "member"
  },
  "created" : "2019-12-24T22:32:58.104Z",
  "includePermissions" : false,
  "name" : "account",
  "hierarchyAttribute" : "memberOf",
  "modified" : "2019-12-31T20:22:28.104Z",
  "attributes" : [ {
    "name" : "sAMAccountName",
    "type" : "STRING",
    "isMultiValued" : false,
    "isEntitlement" : false,
    "isGroup" : false
  }, {
    "name" : "memberOf",
    "type" : "STRING",
    "schema" : {
      "type" : "CONNECTOR_SCHEMA",
      "id" : "2c9180887671ff8c01767b4671fc7d60",
      "name" : "group"
    },
    "description" : "Group membership",
    "isMultiValued" : true,
    "isEntitlement" : true,
    "isGroup" : true
  } ],
  "id" : "2c9180835d191a86015d28455b4a2329",
  "displayAttribute" : "distinguishedName",
  "identityAttribute" : "sAMAccountName"
}, {
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "nativeObjectType" : "User",
  "configuration" : {
    "groupMemberAttribute" : "member"
  },
  "created" : "2019-12-24T22:32:58.104Z",
  "includePermissions" : false,
  "name" : "account",
  "hierarchyAttribute" : "memberOf",
  "modified" : "2019-12-31T20:22:28.104Z",
  "attributes" : [ {
    "name" : "sAMAccountName",
    "type" : "STRING",
    "isMultiValued" : false,
    "isEntitlement" : false,
    "isGroup" : false
  }, {
    "name" : "memberOf",
    "type" : "STRING",
    "schema" : {
      "type" : "CONNECTOR_SCHEMA",
      "id" : "2c9180887671ff8c01767b4671fc7d60",
      "name" : "group"
    },
    "description" : "Group membership",
    "isMultiValued" : true,
    "isEntitlement" : true,
    "isGroup" : true
  } ],
  "id" : "2c9180835d191a86015d28455b4a2329",
  "displayAttribute" : "distinguishedName",
  "identityAttribute" : "sAMAccountName"
} ]


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // Source ID. (default to undefined)
const includeTypes : 'group' | 'user' = "group"; // If set to \'group\', then the account schema is filtered and only group schemas are returned. Only a value of \'group\' is recognized presently.  Note: The API will check whether include-types is group or not, if not, it will list schemas based on include-names, if include-names is not provided, it will list all schemas. (optional) (default to undefined)
const includeNames : string = "account"; // A comma-separated list of schema names to filter result. (optional) (default to undefined)

try {
    const val = await sourcesBetaApi.getSourceSchemas(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.getSourceSchemas(sourceId, includeTypes, includeNames);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## importAccounts

> LoadAccountsTaskBeta importAccounts(sourceId, file, disableOptimization)

Account Aggregation

Starts an account aggregation on the specified source.  If the target source is a delimited file source, then the CSV file needs to be included in the request body. You will also need to set the Content-Type header to `multipart/form-data`. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| Source Id | [default to undefined]
 **file** | **File**| The CSV file containing the source accounts to aggregate. | [optional] [default to undefined]
 **disableOptimization** | **string**| Use this flag to reprocess every account whether or not the data has changed. | [optional] [default to undefined]

### Return type

[**LoadAccountsTaskBeta**](../Models/LoadAccountsTaskBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "task" : {
    "created" : "2000-01-23T04:56:07.000+00:00",
    "description" : "Aggregate from the specified application",
    "completed" : "2000-01-23T04:56:07.000+00:00",
    "type" : "QUARTZ",
    "launched" : "2000-01-23T04:56:07.000+00:00",
    "parentName" : "Audit Report",
    "name" : "Cloud Account Aggregation",
    "messages" : [ ],
    "progress" : "Initializing...",
    "attributes" : {
      "appId" : "c31386cb18bb403cbb6df4c86294ff82",
      "optimizedAggregation" : "enabled"
    },
    "returns" : [ [ {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS",
      "attributeName" : "applications"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_TOTAL",
      "attributeName" : "total"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_OPTIMIZED",
      "attributeName" : "optimizedAggregation"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_IGNORED",
      "attributeName" : "ignored"
    }, {
      "displayLabel" : "TASK_OUT_UNCHANGED_ACCOUNTS",
      "attributeName" : "optimized"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_CREATED",
      "attributeName" : "created"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_UPDATED",
      "attributeName" : "updated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_DELETED",
      "attributeName" : "deleted"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_MANAGER_CHANGES",
      "attributeName" : "managerChanges"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_BUSINESS_ROLE_CHANGES",
      "attributeName" : "detectedRoleChanges"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_EXCEPTION_CHANGES",
      "attributeName" : "exceptionChanges"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_POLICIES",
      "attributeName" : "policies"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_POLICY_VIOLATIONS",
      "attributeName" : "policyViolations"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_POLICY_NOTIFICATIONS",
      "attributeName" : "policyNotifications"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_SCORES_CHANGED",
      "attributeName" : "scoresChanged"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_SNAPSHOTS_CREATED",
      "attributeName" : "snapshotsCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CREATED",
      "attributeName" : "scopesCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CORRELATED",
      "attributeName" : "scopesCorrelated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_SELECTED",
      "attributeName" : "scopesSelected"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_DORMANT",
      "attributeName" : "scopesDormant"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_UNSCOPED_IDENTITIES",
      "attributeName" : "unscopedIdentities"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_CREATED",
      "attributeName" : "certificationsCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_DELETED",
      "attributeName" : "certificationsDeleted"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS_GENERATED",
      "attributeName" : "applicationsGenerated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED",
      "attributeName" : "managedAttributesCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED_BY_APP",
      "attributeName" : "managedAttributesCreatedByApplication"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_IDENTITYENTITLEMENTS_CREATED",
      "attributeName" : "identityEntitlementsCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_GROUPS_CREATED",
      "attributeName" : "groupsCreated"
    } ], [ {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS",
      "attributeName" : "applications"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_TOTAL",
      "attributeName" : "total"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_OPTIMIZED",
      "attributeName" : "optimizedAggregation"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_IGNORED",
      "attributeName" : "ignored"
    }, {
      "displayLabel" : "TASK_OUT_UNCHANGED_ACCOUNTS",
      "attributeName" : "optimized"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_CREATED",
      "attributeName" : "created"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_UPDATED",
      "attributeName" : "updated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_DELETED",
      "attributeName" : "deleted"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_MANAGER_CHANGES",
      "attributeName" : "managerChanges"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_BUSINESS_ROLE_CHANGES",
      "attributeName" : "detectedRoleChanges"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_EXCEPTION_CHANGES",
      "attributeName" : "exceptionChanges"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_POLICIES",
      "attributeName" : "policies"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_POLICY_VIOLATIONS",
      "attributeName" : "policyViolations"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_POLICY_NOTIFICATIONS",
      "attributeName" : "policyNotifications"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_SCORES_CHANGED",
      "attributeName" : "scoresChanged"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_SNAPSHOTS_CREATED",
      "attributeName" : "snapshotsCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CREATED",
      "attributeName" : "scopesCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CORRELATED",
      "attributeName" : "scopesCorrelated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_SELECTED",
      "attributeName" : "scopesSelected"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_DORMANT",
      "attributeName" : "scopesDormant"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_UNSCOPED_IDENTITIES",
      "attributeName" : "unscopedIdentities"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_CREATED",
      "attributeName" : "certificationsCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_DELETED",
      "attributeName" : "certificationsDeleted"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS_GENERATED",
      "attributeName" : "applicationsGenerated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED",
      "attributeName" : "managedAttributesCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED_BY_APP",
      "attributeName" : "managedAttributesCreatedByApplication"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_IDENTITYENTITLEMENTS_CREATED",
      "attributeName" : "identityEntitlementsCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_AGGREGATION_GROUPS_CREATED",
      "attributeName" : "groupsCreated"
    } ] ],
    "id" : "ef38f94347e94562b5bb8424a56397d8",
    "completionStatus" : "Success",
    "launcher" : "John Doe"
  },
  "success" : true
}


const sourceId : string = "ef38f94347e94562b5bb8424a56397d8"; // Source Id (default to undefined)
const file : File = BINARY_DATA_HERE; // The CSV file containing the source accounts to aggregate. (optional) (default to undefined)
const disableOptimization : string = "disableOptimization_example"; // Use this flag to reprocess every account whether or not the data has changed. (optional) (default to undefined)

try {
    const val = await sourcesBetaApi.importAccounts(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.importAccounts(sourceId, file, disableOptimization);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## importEntitlements

> LoadEntitlementTaskBeta importEntitlements(sourceId, file)

Entitlement Aggregation

Starts an entitlement aggregation on the specified source.  If the target source is a delimited file source, then the CSV file needs to be included in the request body.  You will also need to set the Content-Type header to `multipart/form-data`. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| Source Id | [default to undefined]
 **file** | **File**| The CSV file containing the source entitlements to aggregate. | [optional] [default to undefined]

### Return type

[**LoadEntitlementTaskBeta**](../Models/LoadEntitlementTaskBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

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


const sourceId : string = "ef38f94347e94562b5bb8424a56397d8"; // Source Id (default to undefined)
const file : File = BINARY_DATA_HERE; // The CSV file containing the source entitlements to aggregate. (optional) (default to undefined)

try {
    const val = await sourcesBetaApi.importEntitlements(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.importEntitlements(sourceId, file);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## importSourceAccountsSchema

> SchemaBeta importSourceAccountsSchema(sourceId, file)

Uploads source accounts schema template

This API uploads a source schema template file to configure a source\'s account attributes.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]
 **file** | **File**|  | [optional] [default to undefined]

### Return type

[**SchemaBeta**](../Models/SchemaBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "nativeObjectType" : "User",
  "configuration" : {
    "groupMemberAttribute" : "member"
  },
  "created" : "2019-12-24T22:32:58.104Z",
  "includePermissions" : false,
  "name" : "account",
  "hierarchyAttribute" : "memberOf",
  "modified" : "2019-12-31T20:22:28.104Z",
  "attributes" : [ {
    "name" : "sAMAccountName",
    "type" : "STRING",
    "isMultiValued" : false,
    "isEntitlement" : false,
    "isGroup" : false
  }, {
    "name" : "memberOf",
    "type" : "STRING",
    "schema" : {
      "type" : "CONNECTOR_SCHEMA",
      "id" : "2c9180887671ff8c01767b4671fc7d60",
      "name" : "group"
    },
    "description" : "Group membership",
    "isMultiValued" : true,
    "isEntitlement" : true,
    "isGroup" : true
  } ],
  "id" : "2c9180835d191a86015d28455b4a2329",
  "displayAttribute" : "distinguishedName",
  "identityAttribute" : "sAMAccountName"
}


const sourceId : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The Source id (default to undefined)
const file : File = BINARY_DATA_HERE; //  (optional) (default to undefined)

try {
    const val = await sourcesBetaApi.importSourceAccountsSchema(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.importSourceAccountsSchema(sourceId, file);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## importSourceConnectorFile

> SourceBeta importSourceConnectorFile(sourceId, file)

Upload connector file to source

This uploads a supplemental source connector file (like jdbc driver jars) to a source\'s S3 bucket. This also sends ETS and Audit events. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]
 **file** | **File**|  | [optional] [default to undefined]

### Return type

[**SourceBeta**](../Models/SourceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "active-directory",
  "description" : "This is the corporate directory.",
  "type" : "OpenLDAP - Direct",
  "connectorClass" : "sailpoint.connector.LDAPConnector",
  "connectionType" : "file",
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "passwordPolicies" : [ {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb053980",
    "name" : "Corporate Password Policy"
  }, {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb057777",
    "name" : "Vendor Password Policy"
  } ],
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "delimited-file",
  "managerCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "accountCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "authoritative" : false,
  "connectorAttributes" : {
    "healthCheckTimeout" : 30,
    "authSearchAttributes" : [ "cn", "uid", "mail" ]
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "managerCorrelationMapping" : {
    "accountAttributeName" : "manager",
    "identityAttributeName" : "manager"
  },
  "credentialProviderEnabled" : false,
  "accountCorrelationConfig" : {
    "name" : "Directory [source-62867] Account Correlation",
    "id" : "2c9180855d191c59015d28583727245a",
    "type" : "ACCOUNT_CORRELATION_CONFIG"
  },
  "connector" : "active-directory",
  "healthy" : true,
  "schemas" : [ {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "name" : "account"
  }, {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232b",
    "name" : "group"
  } ],
  "name" : "My Source",
  "connectorName" : "Active Directory",
  "category" : "CredentialProvider",
  "beforeProvisioningRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2021-09-28T15:48:29.3801666300Z"
}


const sourceId : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The Source id (default to undefined)
const file : File = BINARY_DATA_HERE; //  (optional) (default to undefined)

try {
    const val = await sourcesBetaApi.importSourceConnectorFile(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.importSourceConnectorFile(sourceId, file);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## importSourceEntitlementsSchema

> SchemaBeta importSourceEntitlementsSchema(sourceId, schemaName, file)

Uploads source entitlements schema template

This API uploads a source schema template file to configure a source\'s entitlement attributes.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]
 **schemaName** | **string**| Name of entitlement schema | [optional] [default to undefined]
 **file** | **File**|  | [optional] [default to undefined]

### Return type

[**SchemaBeta**](../Models/SchemaBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "nativeObjectType" : "User",
  "configuration" : {
    "groupMemberAttribute" : "member"
  },
  "created" : "2019-12-24T22:32:58.104Z",
  "includePermissions" : false,
  "name" : "account",
  "hierarchyAttribute" : "memberOf",
  "modified" : "2019-12-31T20:22:28.104Z",
  "attributes" : [ {
    "name" : "sAMAccountName",
    "type" : "STRING",
    "isMultiValued" : false,
    "isEntitlement" : false,
    "isGroup" : false
  }, {
    "name" : "memberOf",
    "type" : "STRING",
    "schema" : {
      "type" : "CONNECTOR_SCHEMA",
      "id" : "2c9180887671ff8c01767b4671fc7d60",
      "name" : "group"
    },
    "description" : "Group membership",
    "isMultiValued" : true,
    "isEntitlement" : true,
    "isGroup" : true
  } ],
  "id" : "2c9180835d191a86015d28455b4a2329",
  "displayAttribute" : "distinguishedName",
  "identityAttribute" : "sAMAccountName"
}


const sourceId : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The Source id (default to undefined)
const schemaName : string = "?schemaName=group"; // Name of entitlement schema (optional) (default to undefined)
const file : File = BINARY_DATA_HERE; //  (optional) (default to undefined)

try {
    const val = await sourcesBetaApi.importSourceEntitlementsSchema(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.importSourceEntitlementsSchema(sourceId, schemaName, file);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## importUncorrelatedAccounts

> LoadUncorrelatedAccountsTaskBeta importUncorrelatedAccounts(sourceId, file)

Process Uncorrelated Accounts

File is required for upload. You will also need to set the Content-Type header to `multipart/form-data`

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| Source Id | [default to undefined]
 **file** | **File**|  | [optional] [default to undefined]

### Return type

[**LoadUncorrelatedAccountsTaskBeta**](../Models/LoadUncorrelatedAccountsTaskBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "task" : {
    "created" : "2000-01-23T04:56:07.000+00:00",
    "description" : "Processes uncorrelated accounts for the specified application.",
    "completed" : "2000-01-23T04:56:07.000+00:00",
    "type" : "QUARTZ",
    "launched" : "2000-01-23T04:56:07.000+00:00",
    "parentName" : "Audit Report",
    "name" : "Cloud Process Uncorrelated Accounts",
    "messages" : [ ],
    "progress" : "Initializing...",
    "attributes" : {
      "taskStartDelay" : "",
      "qpocJobId" : "5d303d46-fc51-48cd-9c6d-4e211e3ab63c"
    },
    "returns" : [ {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_APPLICATIONS",
      "attributeName" : "applications"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_TOTAL",
      "attributeName" : "total"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_IGNORED",
      "attributeName" : "correlationFailures"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_FAILURES",
      "attributeName" : "ignored"
    }, {
      "displayLabel" : "TASK_OUT_UNCHANGED_ACCOUNTS",
      "attributeName" : "optimized"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION__CREATED",
      "attributeName" : "created"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_UPDATED",
      "attributeName" : "updated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_DELETED",
      "attributeName" : "deleted"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_MANAGER_CHANGES",
      "attributeName" : "managerChanges"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_BUSINESS_ROLE_CHANGES",
      "attributeName" : "detectedRoleChanges"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_EXCEPTION_CHANGES",
      "attributeName" : "exceptionChanges"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_POLICIES",
      "attributeName" : "policies"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_POLICY_VIOLATIONS",
      "attributeName" : "policyViolations"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_POLICY_NOTIFICATIONS",
      "attributeName" : "policyNotifications"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_SCORES_CHANGED",
      "attributeName" : "scoresChanged"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_SNAPSHOTS_CREATED",
      "attributeName" : "snapshotsCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_SCOPES_CREATED",
      "attributeName" : "scopesCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_SCOPES_CORRELATED",
      "attributeName" : "scopesCorrelated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_SCOPES_SELECTED",
      "attributeName" : "scopesSelected"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_SCOPES_DORMANT",
      "attributeName" : "scopesDormant"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_UNSCOPED_IDENTITIES",
      "attributeName" : "unscopedIdentities"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_CERTIFICATIONS_CREATED",
      "attributeName" : "certificationsCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_CERTIFICATIONS_DELETED",
      "attributeName" : "certificationsDeleted"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_APPLICATIONS_GENERATED",
      "attributeName" : "applicationsGenerated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_MANAGED_ATTRIBUTES_PROMOTED",
      "attributeName" : "managedAttributesCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_MANAGED_ATTRIBUTES_PROMOTED_BY_APP",
      "attributeName" : "managedAttributesCreatedByApplication"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_IDENTITYENTITLEMENTS_CREATED",
      "attributeName" : "identityEntitlementsCreated"
    }, {
      "displayLabel" : "TASK_OUT_ACCOUNT_CORRELATION_GROUPS_CREATED",
      "attributeName" : "groupsCreated"
    } ],
    "id" : "90b83a6bb737489494794f84cd3a51e6",
    "completionStatus" : "Success",
    "launcher" : "John Doe"
  },
  "success" : true
}


const sourceId : string = "75dbec1ebe154d5785da27b95e1dd5d7"; // Source Id (default to undefined)
const file : File = BINARY_DATA_HERE; //  (optional) (default to undefined)

try {
    const val = await sourcesBetaApi.importUncorrelatedAccounts(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.importUncorrelatedAccounts(sourceId, file);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listProvisioningPolicies

> Array&lt;ProvisioningPolicyDtoBeta&gt; listProvisioningPolicies(sourceId)

Lists ProvisioningPolicies

This end-point lists all the ProvisioningPolicies in IdentityNow.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]

### Return type

[**Array&lt;ProvisioningPolicyDtoBeta&gt;**](../Models/ProvisioningPolicyDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

[ {
  "name" : "example provisioning policy for inactive identities",
  "description" : "this provisioning policy creates access based on an identity going inactive",
  "fields" : [ {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  }, {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  } ],
  "usageType" : "CREATE"
}, {
  "name" : "example provisioning policy for inactive identities",
  "description" : "this provisioning policy creates access based on an identity going inactive",
  "fields" : [ {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  }, {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  } ],
  "usageType" : "CREATE"
} ]


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The Source id (default to undefined)

try {
    const val = await sourcesBetaApi.listProvisioningPolicies(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.listProvisioningPolicies(sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listSources

> Array&lt;SourceBeta&gt; listSources(limit, offset, count, filters, sorters, forSubadmin, includeIDNSource)

Lists all sources in IdentityNow.

This end-point lists all the sources in IdentityNow.  A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or ROLE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq*  **modified**: *eq*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** | [optional] [default to undefined]
 **forSubadmin** | **string**| Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. | [optional] [default to undefined]
 **includeIDNSource** | **boolean**| Include the IdentityNow source in the response. | [optional] [default to false]

### Return type

[**Array&lt;SourceBeta&gt;**](../Models/SourceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

[ {
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "active-directory",
  "description" : "This is the corporate directory.",
  "type" : "OpenLDAP - Direct",
  "connectorClass" : "sailpoint.connector.LDAPConnector",
  "connectionType" : "file",
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "passwordPolicies" : [ {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb053980",
    "name" : "Corporate Password Policy"
  }, {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb057777",
    "name" : "Vendor Password Policy"
  } ],
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "delimited-file",
  "managerCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "accountCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "authoritative" : false,
  "connectorAttributes" : {
    "healthCheckTimeout" : 30,
    "authSearchAttributes" : [ "cn", "uid", "mail" ]
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "managerCorrelationMapping" : {
    "accountAttributeName" : "manager",
    "identityAttributeName" : "manager"
  },
  "credentialProviderEnabled" : false,
  "accountCorrelationConfig" : {
    "name" : "Directory [source-62867] Account Correlation",
    "id" : "2c9180855d191c59015d28583727245a",
    "type" : "ACCOUNT_CORRELATION_CONFIG"
  },
  "connector" : "active-directory",
  "healthy" : true,
  "schemas" : [ {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "name" : "account"
  }, {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232b",
    "name" : "group"
  } ],
  "name" : "My Source",
  "connectorName" : "Active Directory",
  "category" : "CredentialProvider",
  "beforeProvisioningRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2021-09-28T15:48:29.3801666300Z"
}, {
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "active-directory",
  "description" : "This is the corporate directory.",
  "type" : "OpenLDAP - Direct",
  "connectorClass" : "sailpoint.connector.LDAPConnector",
  "connectionType" : "file",
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "passwordPolicies" : [ {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb053980",
    "name" : "Corporate Password Policy"
  }, {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb057777",
    "name" : "Vendor Password Policy"
  } ],
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "delimited-file",
  "managerCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "accountCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "authoritative" : false,
  "connectorAttributes" : {
    "healthCheckTimeout" : 30,
    "authSearchAttributes" : [ "cn", "uid", "mail" ]
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "managerCorrelationMapping" : {
    "accountAttributeName" : "manager",
    "identityAttributeName" : "manager"
  },
  "credentialProviderEnabled" : false,
  "accountCorrelationConfig" : {
    "name" : "Directory [source-62867] Account Correlation",
    "id" : "2c9180855d191c59015d28583727245a",
    "type" : "ACCOUNT_CORRELATION_CONFIG"
  },
  "connector" : "active-directory",
  "healthy" : true,
  "schemas" : [ {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "name" : "account"
  }, {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232b",
    "name" : "group"
  } ],
  "name" : "My Source",
  "connectorName" : "Active Directory",
  "category" : "CredentialProvider",
  "beforeProvisioningRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2021-09-28T15:48:29.3801666300Z"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "name eq "Employees""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **name**: *co, eq, in, sw, ge, gt, ne, isnull*  **type**: *eq, in, ge, gt, ne, isnull, sw*  **owner.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **features**: *ca, co*  **created**: *eq*  **modified**: *eq*  **managementWorkgroup.id**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **description**: *eq, sw*  **authoritative**: *eq, ne, isnull*  **healthy**: *isnull*  **status**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **connectionType**: *eq, ge, gt, in, le, lt, ne, isnull, sw*  **connectorName**: *eq, ge, gt, in, ne, isnull, sw*  **category**: *co, eq, ge, gt, in, le, lt, ne, sw* (optional) (default to undefined)
const sorters : string = "name"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified, name, owner.name, healthy, status, id, description, owner.id, accountCorrelationConfig.id, accountCorrelationConfig.name, managerCorrelationRule.type, managerCorrelationRule.id, managerCorrelationRule.name, authoritative, managementWorkgroup.id, connectorName, connectionType** (optional) (default to undefined)
const forSubadmin : string = "name"; // Filter the returned list of sources for the identity specified by the parameter, which is the id of an identity with the role SOURCE_SUBADMIN. By convention, the value **me** indicates the identity id of the current user. Subadmins may only view Sources which they are able to administer; all other Sources will be filtered out when this parameter is set. If the current user is a SOURCE_SUBADMIN but fails to pass a valid value for this parameter, a 403 Forbidden is returned. (optional) (default to undefined)
const includeIDNSource : boolean = true; // Include the IdentityNow source in the response. (optional) (default to false)

try {
    const val = await sourcesBetaApi.listSources();
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.listSources(limit, offset, count, filters, sorters, forSubadmin, includeIDNSource);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## peekResourceObjects

> ResourceObjectsResponseBeta peekResourceObjects(sourceId, resourceObjectsRequestBeta)

Peek source connector\'s resource objects

Retrieves a sample of data returned from account and group aggregation requests. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The ID of the Source | [default to undefined]
 **resourceObjectsRequestBeta** | [**ResourceObjectsRequestBeta**](../Models/ResourceObjectsRequestBeta.md)|  | 

### Return type

[**ResourceObjectsResponseBeta**](../Models/ResourceObjectsResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, ResourceObjectsRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "objectCount" : 25,
  "name" : "ODS-AD-Test [source-999999]",
  "resourceObjects" : [ {
    "finalUpdate" : false,
    "instance" : "instance",
    "incremental" : false,
    "uuid" : "{abf7bd9b-68b4-4d21-9b70-870c58ebf844}",
    "delete" : false,
    "remove" : false,
    "objectType" : "account",
    "incomplete" : false,
    "identity" : "CN=Aaron Carr,OU=test1,DC=test2,DC=test",
    "previousIdentity" : "previousIdentity",
    "name" : "Aaron Carr",
    "missing" : [ "missFieldOne", "missFieldTwo" ],
    "attributes" : {
      "telephoneNumber" : "12-(345)678-9012",
      "mail" : "example@test.com",
      "displayName" : "Aaron Carr"
    }
  }, {
    "finalUpdate" : false,
    "instance" : "instance",
    "incremental" : false,
    "uuid" : "{abf7bd9b-68b4-4d21-9b70-870c58ebf844}",
    "delete" : false,
    "remove" : false,
    "objectType" : "account",
    "incomplete" : false,
    "identity" : "CN=Aaron Carr,OU=test1,DC=test2,DC=test",
    "previousIdentity" : "previousIdentity",
    "name" : "Aaron Carr",
    "missing" : [ "missFieldOne", "missFieldTwo" ],
    "attributes" : {
      "telephoneNumber" : "12-(345)678-9012",
      "mail" : "example@test.com",
      "displayName" : "Aaron Carr"
    }
  } ],
  "id" : "2c91808568c529c60168cca6f90c1313",
  "elapsedMillis" : 1055
}


const sourceId : string = "cef3ee201db947c5912551015ba0c679"; // The ID of the Source (default to undefined)
const resourceObjectsRequestBeta : ResourceObjectsRequestBeta = 

try {
    const val = await sourcesBetaApi.peekResourceObjects(sourceId, resourceObjectsRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.peekResourceObjects(sourceId, resourceObjectsRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## pingCluster

> StatusResponseBeta pingCluster(sourceId)

Ping cluster for source connector

This endpoint validates that the cluster being used by the source is reachable from IdentityNow. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The ID of the Source | [default to undefined]

### Return type

[**StatusResponseBeta**](../Models/StatusResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "name" : "ODS-AD-Test [source-999999]",
  "details" : {
    "useTLSForIQService" : false,
    "IQService" : {
      "TLS Port" : 0,
      ".NET CLR Version" : "4.0.30319.42000",
      "SecondaryServiceStatus" : "Running",
      "Port" : 5050,
      "Host" : "AUTOMATION-AD",
      "Name" : "IQService",
      "IQServiceStatus" : "Running",
      "SecondaryService" : "IQService-Instance1-Secondary",
      "Version" : "IQService Sep-2020",
      "secondaryPort" : 5051,
      "OS Architecture" : "AMD64",
      "Operating System" : "Microsoft Windows Server 2012 R2 Standard",
      "highestDotNetVersion" : "4.8 or later",
      "Build Time" : "09/22/2020 06:34 AM -0500"
    },
    "IQServiceClientAuthEnabled" : false,
    "requestProcessedOn" : "1/19/2021 1:47:14 PM"
  },
  "id" : "2c91808568c529c60168cca6f90c1313",
  "elapsedMillis" : 1000,
  "status" : "SUCCESS"
}


const sourceId : string = "cef3ee201db947c5912551015ba0c679"; // The ID of the Source (default to undefined)

try {
    const val = await sourcesBetaApi.pingCluster(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.pingCluster(sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## putCorrelationConfig

> CorrelationConfigBeta putCorrelationConfig(sourceId, correlationConfigBeta)

Update Source Correlation Configuration

Replaces the correlation configuration for the source specified by the given ID with the configuration provided in the request body.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The source id | [default to undefined]
 **correlationConfigBeta** | [**CorrelationConfigBeta**](../Models/CorrelationConfigBeta.md)|  | 

### Return type

[**CorrelationConfigBeta**](../Models/CorrelationConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, CorrelationConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "attributeAssignments" : [ {
    "filterString" : "first_name == \"John\"",
    "ignoreCase" : false,
    "complex" : false,
    "property" : "first_name",
    "value" : "firstName",
    "operation" : "EQ",
    "matchMode" : "ANYWHERE"
  }, {
    "filterString" : "first_name == \"John\"",
    "ignoreCase" : false,
    "complex" : false,
    "property" : "first_name",
    "value" : "firstName",
    "operation" : "EQ",
    "matchMode" : "ANYWHERE"
  } ],
  "name" : "Source [source] Account Correlation",
  "id" : "2c9180835d191a86015d28455b4a2329"
}


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The source id (default to undefined)
const correlationConfigBeta : CorrelationConfigBeta = 

try {
    const val = await sourcesBetaApi.putCorrelationConfig(sourceId, correlationConfigBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.putCorrelationConfig(sourceId, correlationConfigBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## putNativeChangeDetectionConfig

> NativeChangeDetectionConfigBeta putNativeChangeDetectionConfig(sourceId, nativeChangeDetectionConfigBeta)

Update Native Change Detection Configuration

Replaces the native change detection configuration for the source specified by the given ID with the configuration provided in the request body.      A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The source id | [default to undefined]
 **nativeChangeDetectionConfigBeta** | [**NativeChangeDetectionConfigBeta**](../Models/NativeChangeDetectionConfigBeta.md)|  | 

### Return type

[**NativeChangeDetectionConfigBeta**](../Models/NativeChangeDetectionConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, NativeChangeDetectionConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "selectedEntitlements" : [ "memberOf", "memberOfSharedMailbox" ],
  "operations" : [ "ACCOUNT_UPDATED", "ACCOUNT_DELETED" ],
  "selectedNonEntitlementAttributes" : [ "lastName", "phoneNumber", "objectType", "servicePrincipalName" ],
  "allNonEntitlementAttributes" : false,
  "allEntitlements" : false,
  "enabled" : true
}


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The source id (default to undefined)
const nativeChangeDetectionConfigBeta : NativeChangeDetectionConfigBeta = 

try {
    const val = await sourcesBetaApi.putNativeChangeDetectionConfig(sourceId, nativeChangeDetectionConfigBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.putNativeChangeDetectionConfig(sourceId, nativeChangeDetectionConfigBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## putProvisioningPolicy

> ProvisioningPolicyDtoBeta putProvisioningPolicy(sourceId, usageType, provisioningPolicyDtoBeta)

Update Provisioning Policy by UsageType

This end-point updates the provisioning policy with the specified usage on the specified source in IdentityNow. Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning. Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source ID. | [default to undefined]
 **usageType** | [**UsageTypeBeta**](../Models/.md)| The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \&#39;Create Account Profile\&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \&#39;Update Account Profile\&#39;, the provisioning template for the \&#39;Update\&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \&#39;Enable Account Profile\&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\&#39;s account is created.  DISABLE - This usage type relates to \&#39;Disable Account Profile\&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  | [default to undefined]
 **provisioningPolicyDtoBeta** | [**ProvisioningPolicyDtoBeta**](../Models/ProvisioningPolicyDtoBeta.md)|  | 

### Return type

[**ProvisioningPolicyDtoBeta**](../Models/ProvisioningPolicyDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, , ProvisioningPolicyDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "name" : "example provisioning policy for inactive identities",
  "description" : "this provisioning policy creates access based on an identity going inactive",
  "fields" : [ {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  }, {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  } ],
  "usageType" : "CREATE"
}


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The Source ID. (default to undefined)
const usageType : UsageTypeBeta = CREATE; // The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \'Create Account Profile\', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \'Update Account Profile\', the provisioning template for the \'Update\' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \'Enable Account Profile\', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\'s account is created.  DISABLE - This usage type relates to \'Disable Account Profile\', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  (default to undefined)
const provisioningPolicyDtoBeta : ProvisioningPolicyDtoBeta = 

try {
    const val = await sourcesBetaApi.putProvisioningPolicy(sourceId, usageType, provisioningPolicyDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.putProvisioningPolicy(sourceId, usageType, provisioningPolicyDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## putSource

> SourceBeta putSource(id, sourceBeta)

Update Source (Full)

Use this API to update a source in Identity Security Cloud (ISC), using a full object representation. This means that when you use this API, it completely replaces the existing source configuration.  These fields are immutable, so they cannot be changed:  * id * type * authoritative * connector * connectorClass * passwordPolicies  Attempts to modify these fields will result in a 400 error.  A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Source ID. | [default to undefined]
 **sourceBeta** | [**SourceBeta**](../Models/SourceBeta.md)|  | 

### Return type

[**SourceBeta**](../Models/SourceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, SourceBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "active-directory",
  "description" : "This is the corporate directory.",
  "type" : "OpenLDAP - Direct",
  "connectorClass" : "sailpoint.connector.LDAPConnector",
  "connectionType" : "file",
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "passwordPolicies" : [ {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb053980",
    "name" : "Corporate Password Policy"
  }, {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb057777",
    "name" : "Vendor Password Policy"
  } ],
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "delimited-file",
  "managerCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "accountCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "authoritative" : false,
  "connectorAttributes" : {
    "healthCheckTimeout" : 30,
    "authSearchAttributes" : [ "cn", "uid", "mail" ]
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "managerCorrelationMapping" : {
    "accountAttributeName" : "manager",
    "identityAttributeName" : "manager"
  },
  "credentialProviderEnabled" : false,
  "accountCorrelationConfig" : {
    "name" : "Directory [source-62867] Account Correlation",
    "id" : "2c9180855d191c59015d28583727245a",
    "type" : "ACCOUNT_CORRELATION_CONFIG"
  },
  "connector" : "active-directory",
  "healthy" : true,
  "schemas" : [ {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "name" : "account"
  }, {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232b",
    "name" : "group"
  } ],
  "name" : "My Source",
  "connectorName" : "Active Directory",
  "category" : "CredentialProvider",
  "beforeProvisioningRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2021-09-28T15:48:29.3801666300Z"
}


const id : string = "2c9180835d191a86015d28455b4a2329"; // Source ID. (default to undefined)
const sourceBeta : SourceBeta = 

try {
    const val = await sourcesBetaApi.putSource(id, sourceBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.putSource(id, sourceBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## putSourceAttrSyncConfig

> AttrSyncSourceConfigBeta putSourceAttrSyncConfig(id, attrSyncSourceConfigBeta)

Update Attribute Sync Config

Replaces the attribute synchronization configuration for the source specified by the given ID with the configuration provided in the request body. Only the \"enabled\" field of the values in the \"attributes\" array is mutable. Attempting to change other attributes or add new values to the \"attributes\" array will result in an error.      A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The source id | [default to undefined]
 **attrSyncSourceConfigBeta** | [**AttrSyncSourceConfigBeta**](../Models/AttrSyncSourceConfigBeta.md)|  | 

### Return type

[**AttrSyncSourceConfigBeta**](../Models/AttrSyncSourceConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, AttrSyncSourceConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "attributes" : [ {
    "name" : "email",
    "displayName" : "Email",
    "enabled" : true,
    "target" : "mail"
  }, {
    "name" : "firstname",
    "displayName" : "First Name",
    "enabled" : false,
    "target" : "givenName"
  } ],
  "source" : {
    "name" : "HR Active Directory",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "type" : "SOURCE"
  }
}


const id : string = "2c9180835d191a86015d28455b4a2329"; // The source id (default to undefined)
const attrSyncSourceConfigBeta : AttrSyncSourceConfigBeta = 

try {
    const val = await sourcesBetaApi.putSourceAttrSyncConfig(id, attrSyncSourceConfigBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.putSourceAttrSyncConfig(id, attrSyncSourceConfigBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## putSourceSchema

> SchemaBeta putSourceSchema(sourceId, schemaId, schemaBeta)

Update Source Schema (Full)

This API will completely replace an existing Schema with the submitted payload. Some fields of the Schema cannot be updated. These fields are listed below. * id * name * created * modified Any attempt to modify these fields will result in an error response with a status code of 400.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source ID. | [default to undefined]
 **schemaId** | **string**| The Schema ID. | [default to undefined]
 **schemaBeta** | [**SchemaBeta**](../Models/SchemaBeta.md)|  | 

### Return type

[**SchemaBeta**](../Models/SchemaBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, SchemaBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "nativeObjectType" : "User",
  "configuration" : {
    "groupMemberAttribute" : "member"
  },
  "created" : "2019-12-24T22:32:58.104Z",
  "includePermissions" : false,
  "name" : "account",
  "hierarchyAttribute" : "memberOf",
  "modified" : "2019-12-31T20:22:28.104Z",
  "attributes" : [ {
    "name" : "sAMAccountName",
    "type" : "STRING",
    "isMultiValued" : false,
    "isEntitlement" : false,
    "isGroup" : false
  }, {
    "name" : "memberOf",
    "type" : "STRING",
    "schema" : {
      "type" : "CONNECTOR_SCHEMA",
      "id" : "2c9180887671ff8c01767b4671fc7d60",
      "name" : "group"
    },
    "description" : "Group membership",
    "isMultiValued" : true,
    "isEntitlement" : true,
    "isGroup" : true
  } ],
  "id" : "2c9180835d191a86015d28455b4a2329",
  "displayAttribute" : "distinguishedName",
  "identityAttribute" : "sAMAccountName"
}


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The Source ID. (default to undefined)
const schemaId : string = "2c9180835d191a86015d28455b4a2329"; // The Schema ID. (default to undefined)
const schemaBeta : SchemaBeta = 

try {
    const val = await sourcesBetaApi.putSourceSchema(sourceId, schemaId, schemaBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.putSourceSchema(sourceId, schemaId, schemaBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## syncAttributesForSource

> SourceSyncJobBeta syncAttributesForSource(sourceId)

Synchronize single source attributes.

This end-point performs attribute synchronization for a selected source. A token with ORG_ADMIN or SOURCE_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]

### Return type

[**SourceSyncJobBeta**](../Models/SourceSyncJobBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "payload" : {
    "type" : "SYNCHRONIZE_SOURCE_ATTRIBUTES",
    "dataJson" : "{\"sourceId\":\"2c918083746f642c01746f990884012a\"}"
  },
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "status" : "IN_PROGRESS"
}


const sourceId : string = "sourceId_example"; // The Source id (default to undefined)

try {
    const val = await sourcesBetaApi.syncAttributesForSource(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.syncAttributesForSource(sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## testSourceConfiguration

> StatusResponseBeta testSourceConfiguration(sourceId)

Test configuration for source connector

This endpoint performs a more detailed validation of the source\'s configuration that can take longer than the lighter weight credential validation performed by the checkConnection API. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The ID of the Source | [default to undefined]

### Return type

[**StatusResponseBeta**](../Models/StatusResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "name" : "ODS-AD-Test [source-999999]",
  "details" : {
    "useTLSForIQService" : false,
    "IQService" : {
      "TLS Port" : 0,
      ".NET CLR Version" : "4.0.30319.42000",
      "SecondaryServiceStatus" : "Running",
      "Port" : 5050,
      "Host" : "AUTOMATION-AD",
      "Name" : "IQService",
      "IQServiceStatus" : "Running",
      "SecondaryService" : "IQService-Instance1-Secondary",
      "Version" : "IQService Sep-2020",
      "secondaryPort" : 5051,
      "OS Architecture" : "AMD64",
      "Operating System" : "Microsoft Windows Server 2012 R2 Standard",
      "highestDotNetVersion" : "4.8 or later",
      "Build Time" : "09/22/2020 06:34 AM -0500"
    },
    "IQServiceClientAuthEnabled" : false,
    "requestProcessedOn" : "1/19/2021 1:47:14 PM"
  },
  "id" : "2c91808568c529c60168cca6f90c1313",
  "elapsedMillis" : 1000,
  "status" : "SUCCESS"
}


const sourceId : string = "cef3ee201db947c5912551015ba0c679"; // The ID of the Source (default to undefined)

try {
    const val = await sourcesBetaApi.testSourceConfiguration(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.testSourceConfiguration(sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## testSourceConnection

> StatusResponseBeta testSourceConnection(sourceId)

Check connection for source connector.

This endpoint validates that the configured credentials are valid and will properly authenticate with the source identified by the sourceId path parameter. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The ID of the Source. | [default to undefined]

### Return type

[**StatusResponseBeta**](../Models/StatusResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "name" : "ODS-AD-Test [source-999999]",
  "details" : {
    "useTLSForIQService" : false,
    "IQService" : {
      "TLS Port" : 0,
      ".NET CLR Version" : "4.0.30319.42000",
      "SecondaryServiceStatus" : "Running",
      "Port" : 5050,
      "Host" : "AUTOMATION-AD",
      "Name" : "IQService",
      "IQServiceStatus" : "Running",
      "SecondaryService" : "IQService-Instance1-Secondary",
      "Version" : "IQService Sep-2020",
      "secondaryPort" : 5051,
      "OS Architecture" : "AMD64",
      "Operating System" : "Microsoft Windows Server 2012 R2 Standard",
      "highestDotNetVersion" : "4.8 or later",
      "Build Time" : "09/22/2020 06:34 AM -0500"
    },
    "IQServiceClientAuthEnabled" : false,
    "requestProcessedOn" : "1/19/2021 1:47:14 PM"
  },
  "id" : "2c91808568c529c60168cca6f90c1313",
  "elapsedMillis" : 1000,
  "status" : "SUCCESS"
}


const sourceId : string = "cef3ee201db947c5912551015ba0c679"; // The ID of the Source. (default to undefined)

try {
    const val = await sourcesBetaApi.testSourceConnection(sourceId);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.testSourceConnection(sourceId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateProvisioningPoliciesInBulk

> Array&lt;ProvisioningPolicyDtoBeta&gt; updateProvisioningPoliciesInBulk(sourceId, provisioningPolicyDtoBeta)

Bulk Update Provisioning Policies

This end-point updates a list of provisioning policies on the specified source in IdentityNow.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id. | [default to undefined]
 **provisioningPolicyDtoBeta** | [**Array&lt;ProvisioningPolicyDtoBeta&gt;**](../Models/ProvisioningPolicyDtoBeta.md)|  | 

### Return type

[**Array&lt;ProvisioningPolicyDtoBeta&gt;**](../Models/ProvisioningPolicyDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, ProvisioningPolicyDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

[ {
  "name" : "example provisioning policy for inactive identities",
  "description" : "this provisioning policy creates access based on an identity going inactive",
  "fields" : [ {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  }, {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  } ],
  "usageType" : "CREATE"
}, {
  "name" : "example provisioning policy for inactive identities",
  "description" : "this provisioning policy creates access based on an identity going inactive",
  "fields" : [ {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  }, {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  } ],
  "usageType" : "CREATE"
} ]


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The Source id. (default to undefined)
const provisioningPolicyDtoBeta : Array<ProvisioningPolicyDtoBeta> = ; // 

try {
    const val = await sourcesBetaApi.updateProvisioningPoliciesInBulk(sourceId, provisioningPolicyDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.updateProvisioningPoliciesInBulk(sourceId, provisioningPolicyDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateProvisioningPolicy

> ProvisioningPolicyDtoBeta updateProvisioningPolicy(sourceId, usageType, jsonPatchOperationBeta)

Partial update of Provisioning Policy

This API selectively updates an existing Provisioning Policy using a JSONPatch payload. Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning. Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id. | [default to undefined]
 **usageType** | [**UsageTypeBeta**](../Models/.md)| The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \&#39;Create Account Profile\&#39;, the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \&#39;Update Account Profile\&#39;, the provisioning template for the \&#39;Update\&#39; connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \&#39;Enable Account Profile\&#39;, the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\&#39;s account is created.  DISABLE - This usage type relates to \&#39;Disable Account Profile\&#39;, the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| The JSONPatch payload used to update the schema. | 

### Return type

[**ProvisioningPolicyDtoBeta**](../Models/ProvisioningPolicyDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, , JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "name" : "example provisioning policy for inactive identities",
  "description" : "this provisioning policy creates access based on an identity going inactive",
  "fields" : [ {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  }, {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "${firstname}.${lastname}${uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  } ],
  "usageType" : "CREATE"
}


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The Source id. (default to undefined)
const usageType : UsageTypeBeta = CREATE; // The type of provisioning policy usage.  In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined.  These are the common usage types:  CREATE - This usage type relates to \'Create Account Profile\', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.   UPDATE - This usage type relates to \'Update Account Profile\', the provisioning template for the \'Update\' connector operations. For example, this would be used for an attribute sync on a source. ENABLE - This usage type relates to \'Enable Account Profile\', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner\'s account is created.  DISABLE - This usage type relates to \'Disable Account Profile\', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.  You can use these four usage types for all your provisioning policy needs.  (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=add, path=/fields/0, value={name=email, transform={type=identityAttribute, attributes={name=email}}, attributes={}, isRequired=false, type=string, isMultiValued=false}}]; // The JSONPatch payload used to update the schema.

try {
    const val = await sourcesBetaApi.updateProvisioningPolicy(sourceId, usageType, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.updateProvisioningPolicy(sourceId, usageType, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateSource

> SourceBeta updateSource(id, jsonPatchOperationBeta)

Update Source (Partial)

Use this API to partially update a source in Identity Security Cloud (ISC), using a list of patch operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  These fields are immutable, so they cannot be changed: * id * type * authoritative * created * modified * connector * connectorClass * passwordPolicies  Attempts to modify these fields will result in a 400 error.  A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN, or API authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Source ID. | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC). | 

### Return type

[**SourceBeta**](../Models/SourceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "cluster" : {
    "name" : "Corporate Cluster",
    "id" : "2c9180866166b5b0016167c32ef31a66",
    "type" : "CLUSTER"
  },
  "deleteThreshold" : 10,
  "connectorId" : "active-directory",
  "description" : "This is the corporate directory.",
  "type" : "OpenLDAP - Direct",
  "connectorClass" : "sailpoint.connector.LDAPConnector",
  "connectionType" : "file",
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "passwordPolicies" : [ {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb053980",
    "name" : "Corporate Password Policy"
  }, {
    "type" : "PASSWORD_POLICY",
    "id" : "2c9180855d191c59015d291ceb057777",
    "name" : "Vendor Password Policy"
  } ],
  "modified" : "2024-01-23T18:08:50.897Z",
  "id" : "2c91808568c529c60168cca6f90c1324",
  "connectorImplementationId" : "delimited-file",
  "managerCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "owner" : {
    "name" : "MyName",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "managementWorkgroup" : {
    "name" : "My Management Workgroup",
    "id" : "2c91808568c529c60168cca6f90c2222",
    "type" : "GOVERNANCE_GROUP"
  },
  "accountCorrelationRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "authoritative" : false,
  "connectorAttributes" : {
    "healthCheckTimeout" : 30,
    "authSearchAttributes" : [ "cn", "uid", "mail" ]
  },
  "created" : "2022-02-08T14:50:03.827Z",
  "managerCorrelationMapping" : {
    "accountAttributeName" : "manager",
    "identityAttributeName" : "manager"
  },
  "credentialProviderEnabled" : false,
  "accountCorrelationConfig" : {
    "name" : "Directory [source-62867] Account Correlation",
    "id" : "2c9180855d191c59015d28583727245a",
    "type" : "ACCOUNT_CORRELATION_CONFIG"
  },
  "connector" : "active-directory",
  "healthy" : true,
  "schemas" : [ {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232a",
    "name" : "account"
  }, {
    "type" : "CONNECTOR_SCHEMA",
    "id" : "2c9180835d191a86015d28455b4b232b",
    "name" : "group"
  } ],
  "name" : "My Source",
  "connectorName" : "Active Directory",
  "category" : "CredentialProvider",
  "beforeProvisioningRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "RULE"
  },
  "status" : "SOURCE_STATE_HEALTHY",
  "since" : "2021-09-28T15:48:29.3801666300Z"
}


const id : string = "2c9180835d191a86015d28455b4a2329"; // Source ID. (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/description, value=new description}]; // A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).

try {
    const val = await sourcesBetaApi.updateSource(id, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.updateSource(id, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateSourceEntitlementRequestConfig

> SourceEntitlementRequestConfigBeta updateSourceEntitlementRequestConfig(sourceId, sourceEntitlementRequestConfigBeta)

Update Source Entitlement Request Configuration

This API replaces the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.  Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined. - During access request, this source-level entitlement request configuration overrides the global organization-level configuration. - However, the entitlement-level configuration (if defined) overrides this source-level configuration.  A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id | [default to undefined]
 **sourceEntitlementRequestConfigBeta** | [**SourceEntitlementRequestConfigBeta**](../Models/SourceEntitlementRequestConfigBeta.md)|  | 

### Return type

[**SourceEntitlementRequestConfigBeta**](../Models/SourceEntitlementRequestConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, SourceEntitlementRequestConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

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


const sourceId : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The Source id (default to undefined)
const sourceEntitlementRequestConfigBeta : SourceEntitlementRequestConfigBeta = 

try {
    const val = await sourcesBetaApi.updateSourceEntitlementRequestConfig(sourceId, sourceEntitlementRequestConfigBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.updateSourceEntitlementRequestConfig(sourceId, sourceEntitlementRequestConfigBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateSourceSchema

> SchemaBeta updateSourceSchema(sourceId, schemaId, jsonPatchOperationBeta)

Update Source Schema (Partial)

Use this API to selectively update an existing Schema using a JSONPatch payload.   The following schema fields are immutable and cannot be updated:  - id - name - created - modified   To switch an account attribute to a group entitlement, you need to have the following in place:  - `isEntitlement: true` - Must define a schema for the group and [add it to the source](https://developer.sailpoint.com/idn/api/beta/create-source-schema) before updating the `isGroup` flag.  For example, here is the `group` account attribute referencing a schema that defines the group: ```json {     \"name\": \"groups\",     \"type\": \"STRING\",     \"schema\": {         \"type\": \"CONNECTOR_SCHEMA\",         \"id\": \"2c9180887671ff8c01767b4671fc7d60\",         \"name\": \"group\"     },     \"description\": \"The groups, roles etc. that reference account group objects\",     \"isMulti\": true,     \"isEntitlement\": true,     \"isGroup\": true } ``` 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **string**| The Source id. | [default to undefined]
 **schemaId** | **string**| The Schema id. | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| The JSONPatch payload used to update the schema. | 

### Return type

[**SchemaBeta**](../Models/SchemaBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SourcesBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sourcesBetaApi = new SourcesBetaApi(apiConfig);

{
  "features" : [ "PROVISIONING", "NO_PERMISSIONS_PROVISIONING", "GROUPS_HAVE_MEMBERS" ],
  "nativeObjectType" : "User",
  "configuration" : {
    "groupMemberAttribute" : "member"
  },
  "created" : "2019-12-24T22:32:58.104Z",
  "includePermissions" : false,
  "name" : "account",
  "hierarchyAttribute" : "memberOf",
  "modified" : "2019-12-31T20:22:28.104Z",
  "attributes" : [ {
    "name" : "sAMAccountName",
    "type" : "STRING",
    "isMultiValued" : false,
    "isEntitlement" : false,
    "isGroup" : false
  }, {
    "name" : "memberOf",
    "type" : "STRING",
    "schema" : {
      "type" : "CONNECTOR_SCHEMA",
      "id" : "2c9180887671ff8c01767b4671fc7d60",
      "name" : "group"
    },
    "description" : "Group membership",
    "isMultiValued" : true,
    "isEntitlement" : true,
    "isGroup" : true
  } ],
  "id" : "2c9180835d191a86015d28455b4a2329",
  "displayAttribute" : "distinguishedName",
  "identityAttribute" : "sAMAccountName"
}


const sourceId : string = "2c9180835d191a86015d28455b4a2329"; // The Source id. (default to undefined)
const schemaId : string = "2c9180835d191a86015d28455b4a2329"; // The Schema id. (default to undefined)
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/displayAttribute, value={new-display-attribute=null}}]; // The JSONPatch payload used to update the schema.

try {
    const val = await sourcesBetaApi.updateSourceSchema(sourceId, schemaId, jsonPatchOperationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sourcesBetaApi.updateSourceSchema(sourceId, schemaId, jsonPatchOperationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

