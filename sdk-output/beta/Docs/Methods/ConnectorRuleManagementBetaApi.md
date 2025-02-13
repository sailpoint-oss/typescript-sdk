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
const connectorRuleCreateRequestBeta : ConnectorRuleCreateRequestBeta = ; // The connector rule to create
const val = await connectorRuleManagementBetaApi.createConnectorRule(connectorRuleCreateRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
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
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // ID of the connector rule to delete
const val = await connectorRuleManagementBetaApi.deleteConnectorRule(id);
console.log('API called successfully.');
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
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // ID of the connector rule to retrieve
const val = await connectorRuleManagementBetaApi.getConnectorRule(id);
console.log('API called successfully. Returned data: ' + val.data);
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
const val = await connectorRuleManagementBetaApi.getConnectorRuleList();
console.log('API called successfully. Returned data: ' + val.data);
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
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // ID of the connector rule to update
const connectorRuleUpdateRequestBeta = ; // ConnectorRuleUpdateRequestBeta | The connector rule with updated data
const val = await connectorRuleManagementBetaApi.updateConnectorRule(id, connectorRuleUpdateRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
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
const sourceCodeBeta : SourceCodeBeta = ; // The code to validate
const val = await connectorRuleManagementBetaApi.validateConnectorRule(sourceCodeBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

