---
title: ConnectorRuleManagementBetaApi
pagination_label: ConnectorRuleManagementBetaApi
sidebar_label: ConnectorRuleManagementBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'ConnectorRuleManagementBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleManagementBetaApi']
---

# ConnectorRuleManagementBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConnectorRule**](ConnectorRuleManagementBetaApi.md#createConnectorRule) | **POST** /connector-rules | Create Connector Rule
[**deleteConnectorRule**](ConnectorRuleManagementBetaApi.md#deleteConnectorRule) | **DELETE** /connector-rules/{id} | Delete a Connector-Rule
[**getConnectorRule**](ConnectorRuleManagementBetaApi.md#getConnectorRule) | **GET** /connector-rules/{id} | Connector-Rule by ID
[**getConnectorRuleList**](ConnectorRuleManagementBetaApi.md#getConnectorRuleList) | **GET** /connector-rules | List Connector Rules
[**updateConnectorRule**](ConnectorRuleManagementBetaApi.md#updateConnectorRule) | **PUT** /connector-rules/{id} | Update a Connector Rule
[**validateConnectorRule**](ConnectorRuleManagementBetaApi.md#validateConnectorRule) | **POST** /connector-rules/validate | Validate Connector Rule



## createConnectorRule

> ConnectorRuleResponseBeta createConnectorRule(connectorRuleCreateRequestBeta)

Create Connector Rule

Creates a new connector rule. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorRuleCreateRequestBeta** | [**ConnectorRuleCreateRequestBeta**](../Models/ConnectorRuleCreateRequestBeta.md)| The connector rule to create | 

### Return type

[**ConnectorRuleResponseBeta**](../Models/ConnectorRuleResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ConnectorRuleManagementBetaApi, ConnectorRuleCreateRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const connectorRuleManagementBetaApi = new ConnectorRuleManagementBetaApi(apiConfig);

{
  "sourceCode" : {
    "version" : "1.0",
    "script" : "return \"Mr. \" + firstName;"
  },
  "signature" : {
    "output" : {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    },
    "input" : [ {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    }, {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    } ]
  },
  "created" : "021-07-22T15:59:23Z",
  "name" : "WebServiceBeforeOperationRule",
  "description" : "This rule does that",
  "modified" : "021-07-22T15:59:23Z",
  "attributes" : { },
  "id" : "8113d48c0b914f17b4c6072d4dcb9dfe",
  "type" : "BuildMap"
}


const connectorRuleCreateRequestBeta : ConnectorRuleCreateRequestBeta = 

try {
    const val = await connectorRuleManagementBetaApi.createConnectorRule(connectorRuleCreateRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await connectorRuleManagementBetaApi.createConnectorRule(connectorRuleCreateRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## deleteConnectorRule

> deleteConnectorRule(id)

Delete a Connector-Rule

Deletes the connector rule specified by the given ID. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the connector rule to delete | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ConnectorRuleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const connectorRuleManagementBetaApi = new ConnectorRuleManagementBetaApi(apiConfig);

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


const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // ID of the connector rule to delete (default to undefined)

try {
    const val = await connectorRuleManagementBetaApi.deleteConnectorRule(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await connectorRuleManagementBetaApi.deleteConnectorRule(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getConnectorRule

> ConnectorRuleResponseBeta getConnectorRule(id)

Connector-Rule by ID

Returns the connector rule specified by ID. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the connector rule to retrieve | [default to undefined]

### Return type

[**ConnectorRuleResponseBeta**](../Models/ConnectorRuleResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ConnectorRuleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const connectorRuleManagementBetaApi = new ConnectorRuleManagementBetaApi(apiConfig);

{
  "sourceCode" : {
    "version" : "1.0",
    "script" : "return \"Mr. \" + firstName;"
  },
  "signature" : {
    "output" : {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    },
    "input" : [ {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    }, {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    } ]
  },
  "created" : "021-07-22T15:59:23Z",
  "name" : "WebServiceBeforeOperationRule",
  "description" : "This rule does that",
  "modified" : "021-07-22T15:59:23Z",
  "attributes" : { },
  "id" : "8113d48c0b914f17b4c6072d4dcb9dfe",
  "type" : "BuildMap"
}


const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // ID of the connector rule to retrieve (default to undefined)

try {
    const val = await connectorRuleManagementBetaApi.getConnectorRule(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await connectorRuleManagementBetaApi.getConnectorRule(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getConnectorRuleList

> Array&lt;ConnectorRuleResponseBeta&gt; getConnectorRuleList()

List Connector Rules

Returns the list of connector rules. A token with ORG_ADMIN authority is required to call this API.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ConnectorRuleResponseBeta&gt;**](../Models/ConnectorRuleResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ConnectorRuleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const connectorRuleManagementBetaApi = new ConnectorRuleManagementBetaApi(apiConfig);

[ {
  "sourceCode" : {
    "version" : "1.0",
    "script" : "return \"Mr. \" + firstName;"
  },
  "signature" : {
    "output" : {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    },
    "input" : [ {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    }, {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    } ]
  },
  "created" : "021-07-22T15:59:23Z",
  "name" : "WebServiceBeforeOperationRule",
  "description" : "This rule does that",
  "modified" : "021-07-22T15:59:23Z",
  "attributes" : { },
  "id" : "8113d48c0b914f17b4c6072d4dcb9dfe",
  "type" : "BuildMap"
}, {
  "sourceCode" : {
    "version" : "1.0",
    "script" : "return \"Mr. \" + firstName;"
  },
  "signature" : {
    "output" : {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    },
    "input" : [ {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    }, {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    } ]
  },
  "created" : "021-07-22T15:59:23Z",
  "name" : "WebServiceBeforeOperationRule",
  "description" : "This rule does that",
  "modified" : "021-07-22T15:59:23Z",
  "attributes" : { },
  "id" : "8113d48c0b914f17b4c6072d4dcb9dfe",
  "type" : "BuildMap"
} ]



try {
    const val = await connectorRuleManagementBetaApi.getConnectorRuleList();
    
    // Below is a request that includes all optional parameters      
    // const val = await connectorRuleManagementBetaApi.getConnectorRuleList();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## updateConnectorRule

> ConnectorRuleResponseBeta updateConnectorRule(id, connectorRuleUpdateRequestBeta)

Update a Connector Rule

Updates an existing connector rule with the one provided in the request body. Note that the fields \'id\', \'name\', and \'type\' are immutable. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the connector rule to update | [default to undefined]
 **connectorRuleUpdateRequestBeta** | [**ConnectorRuleUpdateRequestBeta**](../Models/ConnectorRuleUpdateRequestBeta.md)| The connector rule with updated data | [optional] 

### Return type

[**ConnectorRuleResponseBeta**](../Models/ConnectorRuleResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ConnectorRuleManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const connectorRuleManagementBetaApi = new ConnectorRuleManagementBetaApi(apiConfig);

{
  "sourceCode" : {
    "version" : "1.0",
    "script" : "return \"Mr. \" + firstName;"
  },
  "signature" : {
    "output" : {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    },
    "input" : [ {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    }, {
      "name" : "firstName",
      "description" : "the first name of the identity",
      "type" : "String"
    } ]
  },
  "created" : "021-07-22T15:59:23Z",
  "name" : "WebServiceBeforeOperationRule",
  "description" : "This rule does that",
  "modified" : "021-07-22T15:59:23Z",
  "attributes" : { },
  "id" : "8113d48c0b914f17b4c6072d4dcb9dfe",
  "type" : "BuildMap"
}


const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // ID of the connector rule to update (default to undefined)
const connectorRuleUpdateRequestBeta : ConnectorRuleUpdateRequestBeta = 

try {
    const val = await connectorRuleManagementBetaApi.updateConnectorRule(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await connectorRuleManagementBetaApi.updateConnectorRule(id, connectorRuleUpdateRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## validateConnectorRule

> ConnectorRuleValidationResponseBeta validateConnectorRule(sourceCodeBeta)

Validate Connector Rule

Returns a list of issues within the code to fix, if any. A token with ORG_ADMIN authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceCodeBeta** | [**SourceCodeBeta**](../Models/SourceCodeBeta.md)| The code to validate | 

### Return type

[**ConnectorRuleValidationResponseBeta**](../Models/ConnectorRuleValidationResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ConnectorRuleManagementBetaApi, SourceCodeBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const connectorRuleManagementBetaApi = new ConnectorRuleManagementBetaApi(apiConfig);

{
  "details" : [ {
    "line" : 2,
    "column" : 5,
    "messsage" : "Remove reference to .decrypt("
  }, {
    "line" : 2,
    "column" : 5,
    "messsage" : "Remove reference to .decrypt("
  } ],
  "state" : "ERROR"
}


const sourceCodeBeta : SourceCodeBeta = 

try {
    const val = await connectorRuleManagementBetaApi.validateConnectorRule(sourceCodeBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await connectorRuleManagementBetaApi.validateConnectorRule(sourceCodeBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

