---
title: WorkReassignmentBetaApi
pagination_label: WorkReassignmentBetaApi
sidebar_label: WorkReassignmentBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'WorkReassignmentBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'WorkReassignmentBetaApi']
---

# WorkReassignmentBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReassignmentConfiguration**](WorkReassignmentBetaApi.md#createReassignmentConfiguration) | **POST** /reassignment-configurations | Create a Reassignment Configuration
[**deleteReassignmentConfiguration**](WorkReassignmentBetaApi.md#deleteReassignmentConfiguration) | **DELETE** /reassignment-configurations/{identityId}/{configType} | Delete Reassignment Configuration
[**getEvaluateReassignmentConfiguration**](WorkReassignmentBetaApi.md#getEvaluateReassignmentConfiguration) | **GET** /reassignment-configurations/{identityId}/evaluate/{configType} | Evaluate Reassignment Configuration
[**getReassignmentConfigTypes**](WorkReassignmentBetaApi.md#getReassignmentConfigTypes) | **GET** /reassignment-configurations/types | List Reassignment Config Types
[**getReassignmentConfiguration**](WorkReassignmentBetaApi.md#getReassignmentConfiguration) | **GET** /reassignment-configurations/{identityId} | Get Reassignment Configuration
[**getTenantConfigConfiguration**](WorkReassignmentBetaApi.md#getTenantConfigConfiguration) | **GET** /reassignment-configurations/tenant-config | Get Tenant-wide Reassignment Configuration settings
[**listReassignmentConfigurations**](WorkReassignmentBetaApi.md#listReassignmentConfigurations) | **GET** /reassignment-configurations | List Reassignment Configurations
[**putReassignmentConfig**](WorkReassignmentBetaApi.md#putReassignmentConfig) | **PUT** /reassignment-configurations/{identityId} | Update Reassignment Configuration
[**putTenantConfiguration**](WorkReassignmentBetaApi.md#putTenantConfiguration) | **PUT** /reassignment-configurations/tenant-config | Update Tenant-wide Reassignment Configuration settings



## createReassignmentConfiguration

> ConfigurationItemResponseBeta createReassignmentConfiguration(configurationItemRequestBeta)

Create a Reassignment Configuration

Creates a new Reassignment Configuration for the specified identity.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationItemRequestBeta** | [**ConfigurationItemRequestBeta**](../Models/ConfigurationItemRequestBeta.md)|  | 

### Return type

[**ConfigurationItemResponseBeta**](../Models/ConfigurationItemResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkReassignmentBetaApi, ConfigurationItemRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workReassignmentBetaApi = new WorkReassignmentBetaApi(apiConfig);
const configurationItemRequestBeta : ConfigurationItemRequestBeta = ; // 
const val = await workReassignmentBetaApi.createReassignmentConfiguration(configurationItemRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteReassignmentConfiguration

> deleteReassignmentConfiguration(identityId, configType)

Delete Reassignment Configuration

Deletes a single reassignment configuration for the specified identity

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| unique identity id | [default to undefined]
 **configType** | [**ConfigTypeEnumBeta**](../Models/.md)|  | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkReassignmentBetaApi,  } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workReassignmentBetaApi = new WorkReassignmentBetaApi(apiConfig);
const identityId : string = "2c91808781a71ddb0181b9090b5c504e"; // unique identity id
const configType : ConfigTypeEnumBeta = ; // 
const val = await workReassignmentBetaApi.deleteReassignmentConfiguration(identityId, configType);
console.log('API called successfully.');
```
</details>


## getEvaluateReassignmentConfiguration

> Array&lt;EvaluateResponseBeta&gt; getEvaluateReassignmentConfiguration(identityId, configType, exclusionFilters)

Evaluate Reassignment Configuration

Evaluates the Reassignment Configuration for an `Identity` to determine if work items for the specified type should be reassigned. If a valid Reassignment Configuration is found for the identity & work type, then a lookup is initiated which recursively fetches the Reassignment Configuration for the next `TargetIdentity` until no more results are found or a max depth of 5. That lookup trail is provided in the response and the final reassigned identity in the lookup list is returned as the `reassignToId` property. If no Reassignment Configuration is found for the specified identity & config type then the requested Identity ID will be used as the `reassignToId` value and the lookupTrail node will be empty.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| unique identity id | [default to undefined]
 **configType** | [**ConfigTypeEnumBeta**](../Models/.md)| Reassignment work type | [default to undefined]
 **exclusionFilters** | [**Array&lt;string&gt;**](../Models/string.md)| Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - &#x60;SELF_REVIEW_DELEGATION&#x60;: This will exclude delegations of self-review reassignments | [optional] [default to undefined]

### Return type

[**Array&lt;EvaluateResponseBeta&gt;**](../Models/EvaluateResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkReassignmentBetaApi,  } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workReassignmentBetaApi = new WorkReassignmentBetaApi(apiConfig);
const identityId : string = "2c91808781a71ddb0181b9090b5c504e"; // unique identity id
const configType : ConfigTypeEnumBeta = accessRequests; // Reassignment work type
const exclusionFilters = SELF_REVIEW_DELEGATION; // Array<string> | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments
const val = await workReassignmentBetaApi.getEvaluateReassignmentConfiguration(identityId, configType, exclusionFilters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getReassignmentConfigTypes

> Array&lt;ConfigTypeBeta&gt; getReassignmentConfigTypes()

List Reassignment Config Types

Gets a collection of types which are available in the Reassignment Configuration UI.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ConfigTypeBeta&gt;**](../Models/ConfigTypeBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkReassignmentBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workReassignmentBetaApi = new WorkReassignmentBetaApi(apiConfig);
const val = await workReassignmentBetaApi.getReassignmentConfigTypes();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getReassignmentConfiguration

> ConfigurationResponseBeta getReassignmentConfiguration(identityId)

Get Reassignment Configuration

Gets the Reassignment Configuration for an identity.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| unique identity id | [default to undefined]

### Return type

[**ConfigurationResponseBeta**](../Models/ConfigurationResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkReassignmentBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workReassignmentBetaApi = new WorkReassignmentBetaApi(apiConfig);
const identityId : string = "2c91808781a71ddb0181b9090b5c504f"; // unique identity id
const val = await workReassignmentBetaApi.getReassignmentConfiguration(identityId);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getTenantConfigConfiguration

> TenantConfigurationResponseBeta getTenantConfigConfiguration()

Get Tenant-wide Reassignment Configuration settings

Gets the global Reassignment Configuration settings for the requestor\'s tenant.

### Parameters

This endpoint does not need any parameter.

### Return type

[**TenantConfigurationResponseBeta**](../Models/TenantConfigurationResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkReassignmentBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workReassignmentBetaApi = new WorkReassignmentBetaApi(apiConfig);
const val = await workReassignmentBetaApi.getTenantConfigConfiguration();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listReassignmentConfigurations

> Array&lt;ConfigurationResponseBeta&gt; listReassignmentConfigurations()

List Reassignment Configurations

Gets all Reassignment configuration for the current org.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ConfigurationResponseBeta&gt;**](../Models/ConfigurationResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkReassignmentBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workReassignmentBetaApi = new WorkReassignmentBetaApi(apiConfig);
const val = await workReassignmentBetaApi.listReassignmentConfigurations();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## putReassignmentConfig

> ConfigurationItemResponseBeta putReassignmentConfig(identityId, configurationItemRequestBeta)

Update Reassignment Configuration

Replaces existing Reassignment configuration for an identity with the newly provided configuration.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| unique identity id | [default to undefined]
 **configurationItemRequestBeta** | [**ConfigurationItemRequestBeta**](../Models/ConfigurationItemRequestBeta.md)|  | 

### Return type

[**ConfigurationItemResponseBeta**](../Models/ConfigurationItemResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkReassignmentBetaApi, ConfigurationItemRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workReassignmentBetaApi = new WorkReassignmentBetaApi(apiConfig);
const identityId : string = "2c91808781a71ddb0181b9090b5c504e"; // unique identity id
const configurationItemRequestBeta : ConfigurationItemRequestBeta = ; // 
const val = await workReassignmentBetaApi.putReassignmentConfig(identityId, configurationItemRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## putTenantConfiguration

> TenantConfigurationResponseBeta putTenantConfiguration(tenantConfigurationRequestBeta)

Update Tenant-wide Reassignment Configuration settings

Replaces existing Tenant-wide Reassignment Configuration settings with the newly provided settings.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantConfigurationRequestBeta** | [**TenantConfigurationRequestBeta**](../Models/TenantConfigurationRequestBeta.md)|  | 

### Return type

[**TenantConfigurationResponseBeta**](../Models/TenantConfigurationResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, WorkReassignmentBetaApi, TenantConfigurationRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const workReassignmentBetaApi = new WorkReassignmentBetaApi(apiConfig);
const tenantConfigurationRequestBeta : TenantConfigurationRequestBeta = ; // 
const val = await workReassignmentBetaApi.putTenantConfiguration(tenantConfigurationRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

