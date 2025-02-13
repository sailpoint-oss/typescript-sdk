---
title: ManagedClientsBetaApi
pagination_label: ManagedClientsBetaApi
sidebar_label: ManagedClientsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'ManagedClientsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'ManagedClientsBetaApi']
---

# ManagedClientsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getManagedClientStatus**](ManagedClientsBetaApi.md#getManagedClientStatus) | **GET** /managed-clients/{id}/status | Specified Managed Client Status.
[**updateManagedClientStatus**](ManagedClientsBetaApi.md#updateManagedClientStatus) | **POST** /managed-clients/{id}/status | Handle status request from client



## getManagedClientStatus

> ManagedClientStatusBeta getManagedClientStatus(id, type)

Specified Managed Client Status.

Retrieve Managed Client Status by ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Managed Client Status to get | [default to undefined]
 **type** | [**ManagedClientTypeBeta**](../Models/.md)| Type of the Managed Client Status to get | [default to undefined]

### Return type

[**ManagedClientStatusBeta**](../Models/ManagedClientStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ManagedClientsBetaApi,  } from "sailpoint-api-client";
const apiConfig = new Configuration();
const managedClientsBetaApi = new ManagedClientsBetaApi(apiConfig);

{
  "body" : {
    "alertKey" : "",
    "id" : "5678",
    "clusterId" : "1234",
    "ccg_etag" : "ccg_etag123xyz456",
    "ccg_pin" : "NONE",
    "cookbook_etag" : "20210420125956-20210511144538",
    "hostname" : "megapod-useast1-secret-hostname.sailpoint.com",
    "internal_ip" : "127.0.0.1",
    "lastSeen" : "1620843964604",
    "sinceSeen" : "14708",
    "sinceSeenMillis" : "14708",
    "localDev" : false,
    "stacktrace" : "",
    "status" : "NORMAL",
    "product" : "idn",
    "platform_version" : "2",
    "os_version" : "2345.3.1",
    "os_type" : "flatcar",
    "hypervisor" : "unknown"
  },
  "type" : "CCG",
  "status" : "NORMAL",
  "timestamp" : "2020-01-01T00:00:00Z"
}


const id : string = "aClientId"; // ID of the Managed Client Status to get (default to undefined)
const type : ManagedClientTypeBeta = ; // Type of the Managed Client Status to get (default to undefined)

try {
    const val = await managedClientsBetaApi.getManagedClientStatus(id, type);
    
    // Below is a request that includes all optional parameters      
    // const val = await managedClientsBetaApi.getManagedClientStatus(id, type);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateManagedClientStatus

> ManagedClientStatusAggResponseBeta updateManagedClientStatus(id, managedClientStatusBeta)

Handle status request from client

Update a status detail passed in from the client

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Managed Client Status to update | [default to undefined]
 **managedClientStatusBeta** | [**ManagedClientStatusBeta**](../Models/ManagedClientStatusBeta.md)|  | 

### Return type

[**ManagedClientStatusAggResponseBeta**](../Models/ManagedClientStatusAggResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ManagedClientsBetaApi, ManagedClientStatusBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const managedClientsBetaApi = new ManagedClientsBetaApi(apiConfig);

{
  "body" : {
    "body" : {
      "id" : "1528",
      "clientId" : "1528",
      "clusterId" : "1533",
      "orgType" : "test",
      "vaDownloadUrl" : "https://sptcbu-va-images.s3.amazonaws.com/va-latest.zip",
      "clusterJobCount" : 1,
      "configuration" : {
        "clusterType" : "sqsCluster",
        "clusterExternalId" : "2c91808876dd79120176f758af765c58",
        "debug" : "false",
        "failureThreshold" : "0",
        "gmtOffset" : "-6",
        "scheduleUpgrade" : "false",
        "va_version" : "va-megapod-useast1-595-1627543540",
        "jobType" : "VA_UPGRADE",
        "cookbook" : "va-megapod-useast1-595-1627543540"
      },
      "connectorServices" : [ {
        "id" : "540696",
        "name" : "EndToEnd-ADSource",
        "connector_host" : "host.example.com",
        "connector_port" : "389",
        "connector_(boolean)useSSL" : false
      }, {
        "id" : "540698",
        "name" : "EndToEnd-AzureADSource"
      }, {
        "id" : "540710",
        "name" : "EndToEnd-OpenLDAP",
        "connector_host" : "10.0.2.64",
        "connector_port" : "389",
        "connector_(boolean)useSSL" : false
      }, {
        "id" : "540713",
        "name" : "Dynamic-ADSource",
        "connector_host" : "host.example.com",
        "connector_port" : "389",
        "connector_(boolean)useSSL" : false
      }, {
        "id" : "540716",
        "name" : "EndToEnd-JdbcADSource",
        "connector_host" : "10.0.5.187",
        "connector_port" : "389",
        "connector_(boolean)useSSL" : false
      }, {
        "id" : "540717",
        "name" : "EndToEnd-JdbcSource",
        "connectorFileUploadHistory" : [ {
          "serviceId" : "540717",
          "date" : "2021-02-05T22:58:15Z",
          "file" : "temp7081703651350031905mysql-connector-java-8.0.11.jar"
        } ]
      } ],
      "jobs" : [ {
        "uuid" : "872b622f-5ab5-4836-9172-e3bb77f05b2c",
        "cookbook" : "872b622f-5ab5-4836-9172-e3bb77f05b2c",
        "state" : "FINISHED",
        "type" : "VA_UPGRADE",
        "targetId" : "1528",
        "managedProcessConfiguration" : {
          "charon" : {
            "version" : "345",
            "path" : "sailpoint/charon"
          },
          "ccg" : {
            "version" : "415_583_79.0.0",
            "path" : "sailpoint/ccg"
          },
          "toolbox" : {
            "version" : "6",
            "path" : "sailpoint/toolbox"
          },
          "fluent" : {
            "version" : "50",
            "path" : "fluent/va"
          },
          "va_agent" : {
            "version" : "89",
            "path" : "sailpoint/va_agent"
          }
        }
      } ],
      "queue" : {
        "name" : "megapod-useast1-denali-lwt-cluster-1533",
        "region" : "us-east-1"
      },
      "maintenance" : {
        "window" : "true",
        "windowStartTime" : "2021-07-29T00:00:00Z",
        "windowClusterTime" : "2021-07-29T01:35:24Z",
        "windowFinishTime" : "2021-07-29T04:00:00Z"
      }
    }
  },
  "type" : "CCG",
  "status" : "NORMAL",
  "timestamp" : "2020-01-01T00:00:00Z"
}


const id : string = "aClientId"; // ID of the Managed Client Status to update (default to undefined)
const managedClientStatusBeta : ManagedClientStatusBeta = 

try {
    const val = await managedClientsBetaApi.updateManagedClientStatus(id, managedClientStatusBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await managedClientsBetaApi.updateManagedClientStatus(id, managedClientStatusBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

