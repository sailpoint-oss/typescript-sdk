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

{
  "durationMinutes" : 120,
  "rootLevel" : "INFO",
  "clientId" : "aClientId",
  "expiration" : "2020-12-15T19:13:36.079Z",
  "logLevels" : "INFO"
}


const id : string = "aClusterId"; // ID of ManagedCluster to get log configuration for (default to undefined)

try {
    const val = await managedClustersBetaApi.getClientLogConfiguration(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await managedClustersBetaApi.getClientLogConfiguration(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "pod" : "megapod-useast1",
  "configuration" : {
    "clusterExternalId" : "externalId",
    "ccgVersion" : "77.0.0"
  },
  "description" : "A short description of the managed cluster.",
  "publicKeyCertificate" : "-----BEGIN CERTIFICATE-----TCCAb2gAwIBAgIBADANBgkqhkiG9w0BAQsFADAuMQ0wCwYDVQQD-----END CERTIFICATE-----",
  "publicKey" : "-----BEGIN PUBLIC KEY-----jANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3WgnsxP52MDgBTfHR+5n4-----END PUBLIC KEY-----",
  "type" : "idn",
  "redis" : {
    "redisHost" : "megapod-useast1-shared-redis.cloud.sailpoint.com",
    "redisPort" : 6379
  },
  "createdAt" : "2023-08-04T20:48:01.865Z",
  "clientType" : "CCG",
  "id" : "aClusterId",
  "pinnedConfig" : false,
  "updatedAt" : "2023-08-04T20:48:01.865Z",
  "publicKeyThumbprint" : "obc6pLiulGbtZ",
  "org" : "denali",
  "logConfiguration" : {
    "durationMinutes" : 120,
    "rootLevel" : "INFO",
    "clientId" : "aClientId",
    "expiration" : "2020-12-15T19:13:36.079Z",
    "logLevels" : "INFO"
  },
  "operational" : false,
  "alertKey" : "LIMITED_RESOURCES",
  "clientIds" : [ "1244", "1245" ],
  "serviceCount" : 6,
  "ccgVersion" : "v01",
  "ccId" : "1533",
  "name" : "Managed Cluster Name",
  "keyPair" : {
    "publicKeyThumbprint" : "6CMlaJIV44-xJxcB3CJBjDUUn54",
    "publicKeyCertificate" : "-----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----",
    "publicKey" : "-----BEGIN PUBLIC KEY-----******-----END PUBLIC KEY-----"
  },
  "attributes" : {
    "keystore" : "/u3+7QAAAAIAAAABAAAAAQAvL3Byb3h5LWNsdXN0ZXIvMmM5MTgwODc3Yjg3MW",
    "queue" : {
      "name" : "megapod-useast1-denali-lwt-cluster-1533",
      "region" : "us-east-1"
    }
  },
  "status" : "NORMAL"
}


const id : string = "aClusterId"; // ID of the ManagedCluster to get (default to undefined)

try {
    const val = await managedClustersBetaApi.getManagedCluster(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await managedClustersBetaApi.getManagedCluster(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "pod" : "megapod-useast1",
  "configuration" : {
    "clusterExternalId" : "externalId",
    "ccgVersion" : "77.0.0"
  },
  "description" : "A short description of the managed cluster.",
  "publicKeyCertificate" : "-----BEGIN CERTIFICATE-----TCCAb2gAwIBAgIBADANBgkqhkiG9w0BAQsFADAuMQ0wCwYDVQQD-----END CERTIFICATE-----",
  "publicKey" : "-----BEGIN PUBLIC KEY-----jANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3WgnsxP52MDgBTfHR+5n4-----END PUBLIC KEY-----",
  "type" : "idn",
  "redis" : {
    "redisHost" : "megapod-useast1-shared-redis.cloud.sailpoint.com",
    "redisPort" : 6379
  },
  "createdAt" : "2023-08-04T20:48:01.865Z",
  "clientType" : "CCG",
  "id" : "aClusterId",
  "pinnedConfig" : false,
  "updatedAt" : "2023-08-04T20:48:01.865Z",
  "publicKeyThumbprint" : "obc6pLiulGbtZ",
  "org" : "denali",
  "logConfiguration" : {
    "durationMinutes" : 120,
    "rootLevel" : "INFO",
    "clientId" : "aClientId",
    "expiration" : "2020-12-15T19:13:36.079Z",
    "logLevels" : "INFO"
  },
  "operational" : false,
  "alertKey" : "LIMITED_RESOURCES",
  "clientIds" : [ "1244", "1245" ],
  "serviceCount" : 6,
  "ccgVersion" : "v01",
  "ccId" : "1533",
  "name" : "Managed Cluster Name",
  "keyPair" : {
    "publicKeyThumbprint" : "6CMlaJIV44-xJxcB3CJBjDUUn54",
    "publicKeyCertificate" : "-----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----",
    "publicKey" : "-----BEGIN PUBLIC KEY-----******-----END PUBLIC KEY-----"
  },
  "attributes" : {
    "keystore" : "/u3+7QAAAAIAAAABAAAAAQAvL3Byb3h5LWNsdXN0ZXIvMmM5MTgwODc3Yjg3MW",
    "queue" : {
      "name" : "megapod-useast1-denali-lwt-cluster-1533",
      "region" : "us-east-1"
    }
  },
  "status" : "NORMAL"
}, {
  "pod" : "megapod-useast1",
  "configuration" : {
    "clusterExternalId" : "externalId",
    "ccgVersion" : "77.0.0"
  },
  "description" : "A short description of the managed cluster.",
  "publicKeyCertificate" : "-----BEGIN CERTIFICATE-----TCCAb2gAwIBAgIBADANBgkqhkiG9w0BAQsFADAuMQ0wCwYDVQQD-----END CERTIFICATE-----",
  "publicKey" : "-----BEGIN PUBLIC KEY-----jANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3WgnsxP52MDgBTfHR+5n4-----END PUBLIC KEY-----",
  "type" : "idn",
  "redis" : {
    "redisHost" : "megapod-useast1-shared-redis.cloud.sailpoint.com",
    "redisPort" : 6379
  },
  "createdAt" : "2023-08-04T20:48:01.865Z",
  "clientType" : "CCG",
  "id" : "aClusterId",
  "pinnedConfig" : false,
  "updatedAt" : "2023-08-04T20:48:01.865Z",
  "publicKeyThumbprint" : "obc6pLiulGbtZ",
  "org" : "denali",
  "logConfiguration" : {
    "durationMinutes" : 120,
    "rootLevel" : "INFO",
    "clientId" : "aClientId",
    "expiration" : "2020-12-15T19:13:36.079Z",
    "logLevels" : "INFO"
  },
  "operational" : false,
  "alertKey" : "LIMITED_RESOURCES",
  "clientIds" : [ "1244", "1245" ],
  "serviceCount" : 6,
  "ccgVersion" : "v01",
  "ccId" : "1533",
  "name" : "Managed Cluster Name",
  "keyPair" : {
    "publicKeyThumbprint" : "6CMlaJIV44-xJxcB3CJBjDUUn54",
    "publicKeyCertificate" : "-----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----",
    "publicKey" : "-----BEGIN PUBLIC KEY-----******-----END PUBLIC KEY-----"
  },
  "attributes" : {
    "keystore" : "/u3+7QAAAAIAAAABAAAAAQAvL3Byb3h5LWNsdXN0ZXIvMmM5MTgwODc3Yjg3MW",
    "queue" : {
      "name" : "megapod-useast1-denali-lwt-cluster-1533",
      "region" : "us-east-1"
    }
  },
  "status" : "NORMAL"
} ]


const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "operational eq operation"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* (optional) (default to undefined)

try {
    const val = await managedClustersBetaApi.getManagedClusters();
    
    // Below is a request that includes all optional parameters      
    // const val = await managedClustersBetaApi.getManagedClusters(offset, limit, count, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "durationMinutes" : 120,
  "rootLevel" : "INFO",
  "clientId" : "aClientId",
  "expiration" : "2020-12-15T19:13:36.079Z",
  "logLevels" : "INFO"
}


const id : string = "aClusterId"; // ID of ManagedCluster to update log configuration for (default to undefined)
const clientLogConfigurationBeta : ClientLogConfigurationBeta = 

try {
    const val = await managedClustersBetaApi.putClientLogConfiguration(id, clientLogConfigurationBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await managedClustersBetaApi.putClientLogConfiguration(id, clientLogConfigurationBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

