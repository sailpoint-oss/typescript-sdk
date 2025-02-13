---
title: SIMIntegrationsBetaApi
pagination_label: SIMIntegrationsBetaApi
sidebar_label: SIMIntegrationsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'SIMIntegrationsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'SIMIntegrationsBetaApi']
---

# SIMIntegrationsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSIMIntegration**](SIMIntegrationsBetaApi.md#createSIMIntegration) | **POST** /sim-integrations | Create new SIM integration
[**deleteSIMIntegration**](SIMIntegrationsBetaApi.md#deleteSIMIntegration) | **DELETE** /sim-integrations/{id} | Delete a SIM integration
[**getSIMIntegration**](SIMIntegrationsBetaApi.md#getSIMIntegration) | **GET** /sim-integrations/{id} | Get a SIM integration details.
[**getSIMIntegrations**](SIMIntegrationsBetaApi.md#getSIMIntegrations) | **GET** /sim-integrations | List the existing SIM integrations.
[**patchBeforeProvisioningRule**](SIMIntegrationsBetaApi.md#patchBeforeProvisioningRule) | **PATCH** /sim-integrations/{id}/beforeProvisioningRule | Patch a SIM beforeProvisioningRule attribute.
[**patchSIMAttributes**](SIMIntegrationsBetaApi.md#patchSIMAttributes) | **PATCH** /sim-integrations/{id} | Patch a SIM attribute.
[**putSIMIntegration**](SIMIntegrationsBetaApi.md#putSIMIntegration) | **PUT** /sim-integrations/{id} | Update an existing SIM integration



## createSIMIntegration

> ServiceDeskIntegrationDtoBeta createSIMIntegration(simIntegrationDetailsBeta)

Create new SIM integration

Create a new SIM Integrations.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simIntegrationDetailsBeta** | [**SimIntegrationDetailsBeta**](../Models/SimIntegrationDetailsBeta.md)| DTO containing the details of the SIM integration | 

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SIMIntegrationsBetaApi, SimIntegrationDetailsBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sIMIntegrationsBetaApi = new SIMIntegrationsBetaApi(apiConfig);

{
  "ownerRef" : "",
  "cluster" : "xyzzy999",
  "managedSources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
  "provisioningConfig" : {
    "managedResourceRefs" : [ {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb051111",
      "name" : "My Source 1"
    }, {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb052222",
      "name" : "My Source 2"
    } ],
    "provisioningRequestExpiration" : 7,
    "noProvisioningRequests" : true,
    "universalManager" : true,
    "planInitializerScript" : {
      "source" : "<?xml version='1.0' encoding='UTF-8'?>\\r\\n<!DOCTYPE Rule PUBLIC \\\"sailpoint.dtd\\\" \\\"sailpoint.dtd\\\">\\r\\n<Rule name=\\\"Example Rule\\\" type=\\\"BeforeProvisioning\\\">\\r\\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\\r\\n  <Source><![CDATA[\\r\\nimport sailpoint.object.*;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\\r\\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\\r\\nimport sailpoint.object.ProvisioningPlan;\\r\\nimport sailpoint.object.ProvisioningPlan.Operation;\\r\\n\\r\\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n}\\r\\n\\r\\n  ]]></Source>\n"
    }
  },
  "name" : "Service Desk Integration Name",
  "description" : "A very nice Service Desk integration",
  "attributes" : {
    "property" : "value",
    "key" : "value"
  },
  "clusterRef" : "",
  "type" : "ServiceNowSDIM",
  "beforeProvisioningRule" : ""
}


const simIntegrationDetailsBeta : SimIntegrationDetailsBeta = 

try {
    const val = await sIMIntegrationsBetaApi.createSIMIntegration(simIntegrationDetailsBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sIMIntegrationsBetaApi.createSIMIntegration(simIntegrationDetailsBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteSIMIntegration

> deleteSIMIntegration(id)

Delete a SIM integration

Get the details of a SIM integration. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The id of the integration to delete. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SIMIntegrationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sIMIntegrationsBetaApi = new SIMIntegrationsBetaApi(apiConfig);

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


const id : string = "12345"; // The id of the integration to delete. (default to undefined)

try {
    const val = await sIMIntegrationsBetaApi.deleteSIMIntegration(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await sIMIntegrationsBetaApi.deleteSIMIntegration(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSIMIntegration

> ServiceDeskIntegrationDtoBeta getSIMIntegration(id)

Get a SIM integration details.

Get the details of a SIM integration. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The id of the integration. | [default to undefined]

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SIMIntegrationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sIMIntegrationsBetaApi = new SIMIntegrationsBetaApi(apiConfig);

{
  "ownerRef" : "",
  "cluster" : "xyzzy999",
  "managedSources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
  "provisioningConfig" : {
    "managedResourceRefs" : [ {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb051111",
      "name" : "My Source 1"
    }, {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb052222",
      "name" : "My Source 2"
    } ],
    "provisioningRequestExpiration" : 7,
    "noProvisioningRequests" : true,
    "universalManager" : true,
    "planInitializerScript" : {
      "source" : "<?xml version='1.0' encoding='UTF-8'?>\\r\\n<!DOCTYPE Rule PUBLIC \\\"sailpoint.dtd\\\" \\\"sailpoint.dtd\\\">\\r\\n<Rule name=\\\"Example Rule\\\" type=\\\"BeforeProvisioning\\\">\\r\\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\\r\\n  <Source><![CDATA[\\r\\nimport sailpoint.object.*;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\\r\\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\\r\\nimport sailpoint.object.ProvisioningPlan;\\r\\nimport sailpoint.object.ProvisioningPlan.Operation;\\r\\n\\r\\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n}\\r\\n\\r\\n  ]]></Source>\n"
    }
  },
  "name" : "Service Desk Integration Name",
  "description" : "A very nice Service Desk integration",
  "attributes" : {
    "property" : "value",
    "key" : "value"
  },
  "clusterRef" : "",
  "type" : "ServiceNowSDIM",
  "beforeProvisioningRule" : ""
}


const id : string = "12345"; // The id of the integration. (default to undefined)

try {
    const val = await sIMIntegrationsBetaApi.getSIMIntegration(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await sIMIntegrationsBetaApi.getSIMIntegration(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getSIMIntegrations

> ServiceDeskIntegrationDtoBeta getSIMIntegrations()

List the existing SIM integrations.

List the existing SIM integrations. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters

This endpoint does not need any parameter.

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SIMIntegrationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sIMIntegrationsBetaApi = new SIMIntegrationsBetaApi(apiConfig);

{
  "ownerRef" : "",
  "cluster" : "xyzzy999",
  "managedSources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
  "provisioningConfig" : {
    "managedResourceRefs" : [ {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb051111",
      "name" : "My Source 1"
    }, {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb052222",
      "name" : "My Source 2"
    } ],
    "provisioningRequestExpiration" : 7,
    "noProvisioningRequests" : true,
    "universalManager" : true,
    "planInitializerScript" : {
      "source" : "<?xml version='1.0' encoding='UTF-8'?>\\r\\n<!DOCTYPE Rule PUBLIC \\\"sailpoint.dtd\\\" \\\"sailpoint.dtd\\\">\\r\\n<Rule name=\\\"Example Rule\\\" type=\\\"BeforeProvisioning\\\">\\r\\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\\r\\n  <Source><![CDATA[\\r\\nimport sailpoint.object.*;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\\r\\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\\r\\nimport sailpoint.object.ProvisioningPlan;\\r\\nimport sailpoint.object.ProvisioningPlan.Operation;\\r\\n\\r\\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n}\\r\\n\\r\\n  ]]></Source>\n"
    }
  },
  "name" : "Service Desk Integration Name",
  "description" : "A very nice Service Desk integration",
  "attributes" : {
    "property" : "value",
    "key" : "value"
  },
  "clusterRef" : "",
  "type" : "ServiceNowSDIM",
  "beforeProvisioningRule" : ""
}



try {
    const val = await sIMIntegrationsBetaApi.getSIMIntegrations();
    
    // Below is a request that includes all optional parameters      
    // const val = await sIMIntegrationsBetaApi.getSIMIntegrations();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchBeforeProvisioningRule

> ServiceDeskIntegrationDtoBeta patchBeforeProvisioningRule(id, jsonPatchBeta)

Patch a SIM beforeProvisioningRule attribute.

Patch a SIM beforeProvisioningRule attribute given a JsonPatch object. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| SIM integration id | [default to undefined]
 **jsonPatchBeta** | [**JsonPatchBeta**](../Models/JsonPatchBeta.md)| The JsonPatch object that describes the changes of SIM beforeProvisioningRule. | 

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SIMIntegrationsBetaApi, JsonPatchBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sIMIntegrationsBetaApi = new SIMIntegrationsBetaApi(apiConfig);

{
  "ownerRef" : "",
  "cluster" : "xyzzy999",
  "managedSources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
  "provisioningConfig" : {
    "managedResourceRefs" : [ {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb051111",
      "name" : "My Source 1"
    }, {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb052222",
      "name" : "My Source 2"
    } ],
    "provisioningRequestExpiration" : 7,
    "noProvisioningRequests" : true,
    "universalManager" : true,
    "planInitializerScript" : {
      "source" : "<?xml version='1.0' encoding='UTF-8'?>\\r\\n<!DOCTYPE Rule PUBLIC \\\"sailpoint.dtd\\\" \\\"sailpoint.dtd\\\">\\r\\n<Rule name=\\\"Example Rule\\\" type=\\\"BeforeProvisioning\\\">\\r\\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\\r\\n  <Source><![CDATA[\\r\\nimport sailpoint.object.*;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\\r\\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\\r\\nimport sailpoint.object.ProvisioningPlan;\\r\\nimport sailpoint.object.ProvisioningPlan.Operation;\\r\\n\\r\\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n}\\r\\n\\r\\n  ]]></Source>\n"
    }
  },
  "name" : "Service Desk Integration Name",
  "description" : "A very nice Service Desk integration",
  "attributes" : {
    "property" : "value",
    "key" : "value"
  },
  "clusterRef" : "",
  "type" : "ServiceNowSDIM",
  "beforeProvisioningRule" : ""
}


const id : string = "12345"; // SIM integration id (default to undefined)
const jsonPatchBeta : JsonPatchBeta = 

try {
    const val = await sIMIntegrationsBetaApi.patchBeforeProvisioningRule(id, jsonPatchBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sIMIntegrationsBetaApi.patchBeforeProvisioningRule(id, jsonPatchBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchSIMAttributes

> ServiceDeskIntegrationDtoBeta patchSIMAttributes(id, jsonPatchBeta)

Patch a SIM attribute.

Patch a SIM attribute given a JsonPatch object. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| SIM integration id | [default to undefined]
 **jsonPatchBeta** | [**JsonPatchBeta**](../Models/JsonPatchBeta.md)| The JsonPatch object that describes the changes of SIM | 

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SIMIntegrationsBetaApi, JsonPatchBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sIMIntegrationsBetaApi = new SIMIntegrationsBetaApi(apiConfig);

{
  "ownerRef" : "",
  "cluster" : "xyzzy999",
  "managedSources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
  "provisioningConfig" : {
    "managedResourceRefs" : [ {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb051111",
      "name" : "My Source 1"
    }, {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb052222",
      "name" : "My Source 2"
    } ],
    "provisioningRequestExpiration" : 7,
    "noProvisioningRequests" : true,
    "universalManager" : true,
    "planInitializerScript" : {
      "source" : "<?xml version='1.0' encoding='UTF-8'?>\\r\\n<!DOCTYPE Rule PUBLIC \\\"sailpoint.dtd\\\" \\\"sailpoint.dtd\\\">\\r\\n<Rule name=\\\"Example Rule\\\" type=\\\"BeforeProvisioning\\\">\\r\\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\\r\\n  <Source><![CDATA[\\r\\nimport sailpoint.object.*;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\\r\\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\\r\\nimport sailpoint.object.ProvisioningPlan;\\r\\nimport sailpoint.object.ProvisioningPlan.Operation;\\r\\n\\r\\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n}\\r\\n\\r\\n  ]]></Source>\n"
    }
  },
  "name" : "Service Desk Integration Name",
  "description" : "A very nice Service Desk integration",
  "attributes" : {
    "property" : "value",
    "key" : "value"
  },
  "clusterRef" : "",
  "type" : "ServiceNowSDIM",
  "beforeProvisioningRule" : ""
}


const id : string = "12345"; // SIM integration id (default to undefined)
const jsonPatchBeta : JsonPatchBeta = 

try {
    const val = await sIMIntegrationsBetaApi.patchSIMAttributes(id, jsonPatchBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sIMIntegrationsBetaApi.patchSIMAttributes(id, jsonPatchBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## putSIMIntegration

> ServiceDeskIntegrationDtoBeta putSIMIntegration(id, simIntegrationDetailsBeta)

Update an existing SIM integration

Update an existing SIM integration.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The id of the integration. | [default to undefined]
 **simIntegrationDetailsBeta** | [**SimIntegrationDetailsBeta**](../Models/SimIntegrationDetailsBeta.md)| The full DTO of the integration containing the updated model | 

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SIMIntegrationsBetaApi, SimIntegrationDetailsBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sIMIntegrationsBetaApi = new SIMIntegrationsBetaApi(apiConfig);

{
  "ownerRef" : "",
  "cluster" : "xyzzy999",
  "managedSources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
  "provisioningConfig" : {
    "managedResourceRefs" : [ {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb051111",
      "name" : "My Source 1"
    }, {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb052222",
      "name" : "My Source 2"
    } ],
    "provisioningRequestExpiration" : 7,
    "noProvisioningRequests" : true,
    "universalManager" : true,
    "planInitializerScript" : {
      "source" : "<?xml version='1.0' encoding='UTF-8'?>\\r\\n<!DOCTYPE Rule PUBLIC \\\"sailpoint.dtd\\\" \\\"sailpoint.dtd\\\">\\r\\n<Rule name=\\\"Example Rule\\\" type=\\\"BeforeProvisioning\\\">\\r\\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\\r\\n  <Source><![CDATA[\\r\\nimport sailpoint.object.*;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\\r\\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\\r\\nimport sailpoint.object.ProvisioningPlan;\\r\\nimport sailpoint.object.ProvisioningPlan.Operation;\\r\\n\\r\\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n}\\r\\n\\r\\n  ]]></Source>\n"
    }
  },
  "name" : "Service Desk Integration Name",
  "description" : "A very nice Service Desk integration",
  "attributes" : {
    "property" : "value",
    "key" : "value"
  },
  "clusterRef" : "",
  "type" : "ServiceNowSDIM",
  "beforeProvisioningRule" : ""
}


const id : string = "12345"; // The id of the integration. (default to undefined)
const simIntegrationDetailsBeta : SimIntegrationDetailsBeta = 

try {
    const val = await sIMIntegrationsBetaApi.putSIMIntegration(id, simIntegrationDetailsBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await sIMIntegrationsBetaApi.putSIMIntegration(id, simIntegrationDetailsBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

