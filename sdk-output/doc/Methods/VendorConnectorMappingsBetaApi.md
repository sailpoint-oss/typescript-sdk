---
title: VendorConnectorMappingsBetaApi
pagination_label: VendorConnectorMappingsBetaApi
sidebar_label: VendorConnectorMappingsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'VendorConnectorMappingsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingsBetaApi']
---

# VendorConnectorMappingsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVendorConnectorMapping**](VendorConnectorMappingsBetaApi.md#createVendorConnectorMapping) | **POST** /vendor-connector-mappings | Create Vendor Connector Mapping
[**deleteVendorConnectorMapping**](VendorConnectorMappingsBetaApi.md#deleteVendorConnectorMapping) | **DELETE** /vendor-connector-mappings | Delete Vendor Connector Mapping
[**getVendorConnectorMappings**](VendorConnectorMappingsBetaApi.md#getVendorConnectorMappings) | **GET** /vendor-connector-mappings | List Vendor Connector Mappings



## createVendorConnectorMapping

> VendorConnectorMappingBeta createVendorConnectorMapping(vendorConnectorMappingBeta)

Create Vendor Connector Mapping

Create a new mapping between a SaaS vendor and an ISC connector to establish correlation paths. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorConnectorMappingBeta** | [**VendorConnectorMappingBeta**](../Models/VendorConnectorMappingBeta.md)|  | 

### Return type

[**VendorConnectorMappingBeta**](../Models/VendorConnectorMappingBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, VendorConnectorMappingsBetaApi, VendorConnectorMappingBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const vendorConnectorMappingsBetaApi = new VendorConnectorMappingsBetaApi(apiConfig);

{
  "createdAt" : "2024-03-13T12:56:19.391294Z",
  "deletedAt" : {
    "Valid" : false,
    "Time" : "0001-01-01T00:00:00Z"
  },
  "updatedBy" : {
    "Valid" : true,
    "String" : "user-67891"
  },
  "connector" : "Example connector",
  "createdBy" : "admin",
  "vendor" : "Example vendor",
  "id" : "78733556-9ea3-4f59-bf69-e5cd92b011b4",
  "deletedBy" : {
    "Valid" : false,
    "String" : ""
  },
  "updatedAt" : {
    "Valid" : true,
    "Time" : "2024-03-14T12:56:19.391294Z"
  }
}


const vendorConnectorMappingBeta : VendorConnectorMappingBeta = 

try {
    const val = await vendorConnectorMappingsBetaApi.createVendorConnectorMapping(vendorConnectorMappingBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await vendorConnectorMappingsBetaApi.createVendorConnectorMapping(vendorConnectorMappingBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteVendorConnectorMapping

> DeleteVendorConnectorMapping200ResponseBeta deleteVendorConnectorMapping(vendorConnectorMappingBeta)

Delete Vendor Connector Mapping

Soft delete a mapping between a SaaS vendor and an ISC connector, removing the established correlation. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorConnectorMappingBeta** | [**VendorConnectorMappingBeta**](../Models/VendorConnectorMappingBeta.md)|  | 

### Return type

[**DeleteVendorConnectorMapping200ResponseBeta**](../Models/DeleteVendorConnectorMapping200ResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, VendorConnectorMappingsBetaApi, VendorConnectorMappingBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const vendorConnectorMappingsBetaApi = new VendorConnectorMappingsBetaApi(apiConfig);

{
  "count" : 1
}


const vendorConnectorMappingBeta : VendorConnectorMappingBeta = 

try {
    const val = await vendorConnectorMappingsBetaApi.deleteVendorConnectorMapping(vendorConnectorMappingBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await vendorConnectorMappingsBetaApi.deleteVendorConnectorMapping(vendorConnectorMappingBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getVendorConnectorMappings

> Array&lt;VendorConnectorMappingBeta&gt; getVendorConnectorMappings()

List Vendor Connector Mappings

Get a list of mappings between SaaS vendors and ISC connectors, detailing the connections established for correlation. 

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;VendorConnectorMappingBeta&gt;**](../Models/VendorConnectorMappingBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, VendorConnectorMappingsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const vendorConnectorMappingsBetaApi = new VendorConnectorMappingsBetaApi(apiConfig);

[ {
  "id" : "78733556-9ea3-4f59-bf69-e5cd92b011b4",
  "vendor" : "Example Vendor",
  "connector" : "Example Connector",
  "createdAt" : "2024-03-13T12:56:19.391294Z",
  "createdBy" : "admin",
  "updatedAt" : {
    "Time" : "2024-03-14T12:56:19.391294Z",
    "Valid" : true
  },
  "updatedBy" : {
    "String" : "user-67891",
    "Valid" : true
  },
  "deletedAt" : {
    "Time" : "0001-01-01T00:00:00Z",
    "Valid" : false
  },
  "deletedBy" : {
    "String" : "",
    "Valid" : false
  }
}, {
  "id" : "78733556-9ea3-4f59-bf69-e5cd92b011b5",
  "vendor" : "Another Corporation",
  "connector" : "Another Connector",
  "createdAt" : "2024-04-13T11:46:19.391294Z",
  "createdBy" : "admin",
  "updatedAt" : {
    "Time" : "0001-01-01T00:00:00Z",
    "Valid" : false
  },
  "updatedBy" : {
    "String" : "",
    "Valid" : false
  },
  "deletedAt" : {
    "Time" : "0001-01-01T00:00:00Z",
    "Valid" : false
  },
  "deletedBy" : {
    "String" : "",
    "Valid" : false
  }
} ]



try {
    const val = await vendorConnectorMappingsBetaApi.getVendorConnectorMappings();
    
    // Below is a request that includes all optional parameters      
    // const val = await vendorConnectorMappingsBetaApi.getVendorConnectorMappings();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

