---
title: ServiceDeskIntegrationBetaApi
pagination_label: ServiceDeskIntegrationBetaApi
sidebar_label: ServiceDeskIntegrationBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'ServiceDeskIntegrationBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationBetaApi']
---

# ServiceDeskIntegrationBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServiceDeskIntegration**](ServiceDeskIntegrationBetaApi.md#createServiceDeskIntegration) | **POST** /service-desk-integrations | Create new Service Desk integration
[**deleteServiceDeskIntegration**](ServiceDeskIntegrationBetaApi.md#deleteServiceDeskIntegration) | **DELETE** /service-desk-integrations/{id} | Delete a Service Desk integration
[**getServiceDeskIntegration**](ServiceDeskIntegrationBetaApi.md#getServiceDeskIntegration) | **GET** /service-desk-integrations/{id} | Get a Service Desk integration
[**getServiceDeskIntegrationList**](ServiceDeskIntegrationBetaApi.md#getServiceDeskIntegrationList) | **GET** /service-desk-integrations | List existing Service Desk integrations
[**getServiceDeskIntegrationTemplate**](ServiceDeskIntegrationBetaApi.md#getServiceDeskIntegrationTemplate) | **GET** /service-desk-integrations/templates/{scriptName} | Service Desk integration template by scriptName
[**getServiceDeskIntegrationTypes**](ServiceDeskIntegrationBetaApi.md#getServiceDeskIntegrationTypes) | **GET** /service-desk-integrations/types | List Service Desk integration types
[**getStatusCheckDetails**](ServiceDeskIntegrationBetaApi.md#getStatusCheckDetails) | **GET** /service-desk-integrations/status-check-configuration | Get the time check configuration
[**patchServiceDeskIntegration**](ServiceDeskIntegrationBetaApi.md#patchServiceDeskIntegration) | **PATCH** /service-desk-integrations/{id} | Patch a Service Desk Integration
[**putServiceDeskIntegration**](ServiceDeskIntegrationBetaApi.md#putServiceDeskIntegration) | **PUT** /service-desk-integrations/{id} | Update a Service Desk integration
[**updateStatusCheckDetails**](ServiceDeskIntegrationBetaApi.md#updateStatusCheckDetails) | **PUT** /service-desk-integrations/status-check-configuration | Update the time check configuration



## createServiceDeskIntegration

> ServiceDeskIntegrationDtoBeta createServiceDeskIntegration(serviceDeskIntegrationDtoBeta)

Create new Service Desk integration

Create a new Service Desk integration.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceDeskIntegrationDtoBeta** | [**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)| The specifics of a new integration to create | 

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi, ServiceDeskIntegrationDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);

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


const serviceDeskIntegrationDtoBeta : ServiceDeskIntegrationDtoBeta = 

try {
    const val = await serviceDeskIntegrationBetaApi.createServiceDeskIntegration(serviceDeskIntegrationDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await serviceDeskIntegrationBetaApi.createServiceDeskIntegration(serviceDeskIntegrationDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteServiceDeskIntegration

> deleteServiceDeskIntegration(id)

Delete a Service Desk integration

Delete an existing Service Desk integration by ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of Service Desk integration to delete | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);

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


const id : string = "anId"; // ID of Service Desk integration to delete (default to undefined)

try {
    const val = await serviceDeskIntegrationBetaApi.deleteServiceDeskIntegration(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await serviceDeskIntegrationBetaApi.deleteServiceDeskIntegration(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getServiceDeskIntegration

> ServiceDeskIntegrationDtoBeta getServiceDeskIntegration(id)

Get a Service Desk integration

Get an existing Service Desk integration by ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Service Desk integration to get | [default to undefined]

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);

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


const id : string = "anId"; // ID of the Service Desk integration to get (default to undefined)

try {
    const val = await serviceDeskIntegrationBetaApi.getServiceDeskIntegration(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await serviceDeskIntegrationBetaApi.getServiceDeskIntegration(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getServiceDeskIntegrationList

> Array&lt;ServiceDeskIntegrationDtoBeta&gt; getServiceDeskIntegrationList(offset, limit, sorters, filters, count)

List existing Service Desk integrations

Get a list of Service Desk integration objects.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* | [optional] [default to undefined]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;ServiceDeskIntegrationDtoBeta&gt;**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);

[ {
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
}, {
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
} ]


const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const sorters : string = "name"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) (default to undefined)
const filters : string = "id eq 2c91808b6ef1d43e016efba0ce470904"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* (optional) (default to undefined)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await serviceDeskIntegrationBetaApi.getServiceDeskIntegrationList();
    
    // Below is a request that includes all optional parameters      
    // const val = await serviceDeskIntegrationBetaApi.getServiceDeskIntegrationList(offset, limit, sorters, filters, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getServiceDeskIntegrationTemplate

> ServiceDeskIntegrationTemplateDtoBeta getServiceDeskIntegrationTemplate(scriptName)

Service Desk integration template by scriptName

This API endpoint returns an existing Service Desk integration template by scriptName.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scriptName** | **string**| The scriptName value of the Service Desk integration template to get | [default to undefined]

### Return type

[**ServiceDeskIntegrationTemplateDtoBeta**](../Models/ServiceDeskIntegrationTemplateDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);

{
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
  "created" : "2023-01-03T21:16:22.432Z",
  "name" : "aName",
  "modified" : "2023-01-03T21:16:22.432Z",
  "attributes" : {
    "key" : ""
  },
  "id" : "id12345",
  "type" : "Web Service SDIM"
}


const scriptName : string = "aScriptName"; // The scriptName value of the Service Desk integration template to get (default to undefined)

try {
    const val = await serviceDeskIntegrationBetaApi.getServiceDeskIntegrationTemplate(scriptName);
    
    // Below is a request that includes all optional parameters      
    // const val = await serviceDeskIntegrationBetaApi.getServiceDeskIntegrationTemplate(scriptName);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getServiceDeskIntegrationTypes

> Array&lt;ServiceDeskIntegrationTemplateTypeBeta&gt; getServiceDeskIntegrationTypes()

List Service Desk integration types

This API endpoint returns the current list of supported Service Desk integration types.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ServiceDeskIntegrationTemplateTypeBeta&gt;**](../Models/ServiceDeskIntegrationTemplateTypeBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);

[ {
  "name" : "aName",
  "scriptName" : "aScriptName",
  "type" : "aType"
}, {
  "name" : "aName",
  "scriptName" : "aScriptName",
  "type" : "aType"
} ]



try {
    const val = await serviceDeskIntegrationBetaApi.getServiceDeskIntegrationTypes();
    
    // Below is a request that includes all optional parameters      
    // const val = await serviceDeskIntegrationBetaApi.getServiceDeskIntegrationTypes();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getStatusCheckDetails

> QueuedCheckConfigDetailsBeta getStatusCheckDetails()

Get the time check configuration

Get the time check configuration of queued SDIM tickets.

### Parameters

This endpoint does not need any parameter.

### Return type

[**QueuedCheckConfigDetailsBeta**](../Models/QueuedCheckConfigDetailsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);

{
  "provisioningStatusCheckIntervalMinutes" : "30",
  "provisioningMaxStatusCheckDays" : "2"
}



try {
    const val = await serviceDeskIntegrationBetaApi.getStatusCheckDetails();
    
    // Below is a request that includes all optional parameters      
    // const val = await serviceDeskIntegrationBetaApi.getStatusCheckDetails();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## patchServiceDeskIntegration

> ServiceDeskIntegrationDtoBeta patchServiceDeskIntegration(id, patchServiceDeskIntegrationRequestBeta)

Patch a Service Desk Integration

Update an existing Service Desk integration by ID with a PATCH request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Service Desk integration to update | [default to undefined]
 **patchServiceDeskIntegrationRequestBeta** | [**PatchServiceDeskIntegrationRequestBeta**](../Models/PatchServiceDeskIntegrationRequestBeta.md)| A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only &#x60;replace&#x60; operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed.  | 

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi, PatchServiceDeskIntegrationRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);

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


const id : string = "anId"; // ID of the Service Desk integration to update (default to undefined)
const patchServiceDeskIntegrationRequestBeta : PatchServiceDeskIntegrationRequestBeta = 

try {
    const val = await serviceDeskIntegrationBetaApi.patchServiceDeskIntegration(id, patchServiceDeskIntegrationRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await serviceDeskIntegrationBetaApi.patchServiceDeskIntegration(id, patchServiceDeskIntegrationRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## putServiceDeskIntegration

> ServiceDeskIntegrationDtoBeta putServiceDeskIntegration(id, serviceDeskIntegrationDtoBeta)

Update a Service Desk integration

Update an existing Service Desk integration by ID.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the Service Desk integration to update | [default to undefined]
 **serviceDeskIntegrationDtoBeta** | [**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)| The specifics of the integration to update | 

### Return type

[**ServiceDeskIntegrationDtoBeta**](../Models/ServiceDeskIntegrationDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi, ServiceDeskIntegrationDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);

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


const id : string = "anId"; // ID of the Service Desk integration to update (default to undefined)
const serviceDeskIntegrationDtoBeta : ServiceDeskIntegrationDtoBeta = 

try {
    const val = await serviceDeskIntegrationBetaApi.putServiceDeskIntegration(id, serviceDeskIntegrationDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await serviceDeskIntegrationBetaApi.putServiceDeskIntegration(id, serviceDeskIntegrationDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateStatusCheckDetails

> QueuedCheckConfigDetailsBeta updateStatusCheckDetails(queuedCheckConfigDetailsBeta)

Update the time check configuration

Update the time check configuration of queued SDIM tickets.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queuedCheckConfigDetailsBeta** | [**QueuedCheckConfigDetailsBeta**](../Models/QueuedCheckConfigDetailsBeta.md)| The modified time check configuration | 

### Return type

[**QueuedCheckConfigDetailsBeta**](../Models/QueuedCheckConfigDetailsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ServiceDeskIntegrationBetaApi, QueuedCheckConfigDetailsBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const serviceDeskIntegrationBetaApi = new ServiceDeskIntegrationBetaApi(apiConfig);

{
  "provisioningStatusCheckIntervalMinutes" : "30",
  "provisioningMaxStatusCheckDays" : "2"
}


const queuedCheckConfigDetailsBeta : QueuedCheckConfigDetailsBeta = 

try {
    const val = await serviceDeskIntegrationBetaApi.updateStatusCheckDetails(queuedCheckConfigDetailsBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await serviceDeskIntegrationBetaApi.updateStatusCheckDetails(queuedCheckConfigDetailsBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

