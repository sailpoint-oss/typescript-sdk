---
title: AccessModelMetadataBetaApi
pagination_label: AccessModelMetadataBetaApi
sidebar_label: AccessModelMetadataBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccessModelMetadataBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadataBetaApi']
---

# AccessModelMetadataBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccessModelMetadataAttribute**](AccessModelMetadataBetaApi.md#getAccessModelMetadataAttribute) | **GET** /access-model-metadata/attributes/{key} | Get Access Model Metadata Attribute
[**getAccessModelMetadataAttributeValue**](AccessModelMetadataBetaApi.md#getAccessModelMetadataAttributeValue) | **GET** /access-model-metadata/attributes/{key}/values/{value} | Get Access Model Metadata Value
[**listAccessModelMetadataAttribute**](AccessModelMetadataBetaApi.md#listAccessModelMetadataAttribute) | **GET** /access-model-metadata/attributes | List Access Model Metadata Attributes
[**listAccessModelMetadataAttributeValue**](AccessModelMetadataBetaApi.md#listAccessModelMetadataAttributeValue) | **GET** /access-model-metadata/attributes/{key}/values | List Access Model Metadata Values



## getAccessModelMetadataAttribute

> AttributeDTOBeta getAccessModelMetadataAttribute(key)

Get Access Model Metadata Attribute

Get single Access Model Metadata Attribute

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **string**| Technical name of the Attribute. | [default to undefined]

### Return type

[**AttributeDTOBeta**](../Models/AttributeDTOBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessModelMetadataBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessModelMetadataBetaApi = new AccessModelMetadataBetaApi(apiConfig);
const key : string = "iscPrivacy"; // Technical name of the Attribute.
const val = await accessModelMetadataBetaApi.getAccessModelMetadataAttribute(key);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getAccessModelMetadataAttributeValue

> AttributeValueDTOBeta getAccessModelMetadataAttributeValue(key, value)

Get Access Model Metadata Value

Get single Access Model Metadata Attribute Value

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **string**| Technical name of the Attribute. | [default to undefined]
 **value** | **string**| Technical name of the Attribute value. | [default to undefined]

### Return type

[**AttributeValueDTOBeta**](../Models/AttributeValueDTOBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessModelMetadataBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessModelMetadataBetaApi = new AccessModelMetadataBetaApi(apiConfig);
const key : string = "iscPrivacy"; // Technical name of the Attribute.
const value : string = "public"; // Technical name of the Attribute value.
const val = await accessModelMetadataBetaApi.getAccessModelMetadataAttributeValue(key, value);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listAccessModelMetadataAttribute

> Array&lt;AttributeDTOBeta&gt; listAccessModelMetadataAttribute(filters)

List Access Model Metadata Attributes

Get a list of Access Model Metadata Attributes

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators: *and* | [optional] [default to undefined]

### Return type

[**Array&lt;AttributeDTOBeta&gt;**](../Models/AttributeDTOBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessModelMetadataBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessModelMetadataBetaApi = new AccessModelMetadataBetaApi(apiConfig);
const filters = "name eq "Privacy""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators: *and*
const val = await accessModelMetadataBetaApi.listAccessModelMetadataAttribute(filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listAccessModelMetadataAttributeValue

> Array&lt;AttributeValueDTOBeta&gt; listAccessModelMetadataAttributeValue(key)

List Access Model Metadata Values

Get a list of Access Model Metadata Attribute Values

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **string**| Technical name of the Attribute. | [default to undefined]

### Return type

[**Array&lt;AttributeValueDTOBeta&gt;**](../Models/AttributeValueDTOBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccessModelMetadataBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accessModelMetadataBetaApi = new AccessModelMetadataBetaApi(apiConfig);
const key : string = "iscPrivacy"; // Technical name of the Attribute.
const val = await accessModelMetadataBetaApi.listAccessModelMetadataAttributeValue(key);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

