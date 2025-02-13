---
title: ManagedClustersBetaApi
pagination_label: ManagedClustersBetaApi
sidebar_label: ManagedClustersBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'ManagedClustersBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'ManagedClustersBetaApi']
---

# ManagedClustersBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getClientLogConfiguration**](ManagedClustersBetaApi.md#getClientLogConfiguration) | **GET** /managed-clusters/{id}/log-config | Get managed cluster\&#39;s log configuration
[**getManagedCluster**](ManagedClustersBetaApi.md#getManagedCluster) | **GET** /managed-clusters/{id} | Get a specified ManagedCluster.
[**getManagedClusters**](ManagedClustersBetaApi.md#getManagedClusters) | **GET** /managed-clusters | Retrieve all Managed Clusters.
[**putClientLogConfiguration**](ManagedClustersBetaApi.md#putClientLogConfiguration) | **PUT** /managed-clusters/{id}/log-config | Update managed cluster\&#39;s log configuration



## getClientLogConfiguration

> ClientLogConfigurationBeta getClientLogConfiguration(id)

Get managed cluster\'s log configuration

Get managed cluster\'s log configuration.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of ManagedCluster to get log configuration for | [default to undefined]

### Return type

[**ClientLogConfigurationBeta**](../Models/ClientLogConfigurationBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ManagedClustersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const managedClustersBetaApi = new ManagedClustersBetaApi(apiConfig);
const id : string = "aClusterId"; // ID of ManagedCluster to get log configuration for
const val = await managedClustersBetaApi.getClientLogConfiguration(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getManagedCluster

> ManagedClusterBeta getManagedCluster(id)

Get a specified ManagedCluster.

Retrieve a ManagedCluster by ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the ManagedCluster to get | [default to undefined]

### Return type

[**ManagedClusterBeta**](../Models/ManagedClusterBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ManagedClustersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const managedClustersBetaApi = new ManagedClustersBetaApi(apiConfig);
const id : string = "aClusterId"; // ID of the ManagedCluster to get
const val = await managedClustersBetaApi.getManagedCluster(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getManagedClusters

> Array&lt;ManagedClusterBeta&gt; getManagedClusters(offset, limit, count, filters)

Retrieve all Managed Clusters.

Retrieve all Managed Clusters for the current Org, based on request context.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* | [optional] [default to undefined]

### Return type

[**Array&lt;ManagedClusterBeta&gt;**](../Models/ManagedClusterBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ManagedClustersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const managedClustersBetaApi = new ManagedClustersBetaApi(apiConfig);
const offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "operational eq operation"; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*
const val = await managedClustersBetaApi.getManagedClusters(offset, limit, count, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## putClientLogConfiguration

> ClientLogConfigurationBeta putClientLogConfiguration(id, clientLogConfigurationBeta)

Update managed cluster\'s log configuration

Update managed cluster\'s log configuration

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of ManagedCluster to update log configuration for | [default to undefined]
 **clientLogConfigurationBeta** | [**ClientLogConfigurationBeta**](../Models/ClientLogConfigurationBeta.md)| ClientLogConfiguration for given ManagedCluster | 

### Return type

[**ClientLogConfigurationBeta**](../Models/ClientLogConfigurationBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ManagedClustersBetaApi, ClientLogConfigurationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const managedClustersBetaApi = new ManagedClustersBetaApi(apiConfig);
const id : string = "aClusterId"; // ID of ManagedCluster to update log configuration for
const clientLogConfigurationBeta : ClientLogConfigurationBeta = ; // ClientLogConfiguration for given ManagedCluster
const val = await managedClustersBetaApi.putClientLogConfiguration(id, clientLogConfigurationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

