---
id: v1-access-model-metadata
title: AccessModelMetadata
pagination_label: AccessModelMetadata
sidebar_label: AccessModelMetadata
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessModelMetadata', 'v1AccessModelMetadata']
slug: /tools/sdk/typescript/access_model_metadata/methods/access-model-metadata
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadata', 'v1AccessModelMetadata']
---

# AccessModelMetadataApi
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement metadata. Support for role and access profile metadata will be introduced in a subsequent release.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-model-metadata-attribute-v1**](#create-access-model-metadata-attribute-v1) | **POST** `/access-model-metadata/v1/attributes` | Create access model metadata attribute
[**create-access-model-metadata-attribute-value-v1**](#create-access-model-metadata-attribute-value-v1) | **POST** `/access-model-metadata/v1/attributes/{key}/values` | Create access model metadata value
[**get-access-model-metadata-attribute-v1**](#get-access-model-metadata-attribute-v1) | **GET** `/access-model-metadata/v1/attributes/{key}` | Get access model metadata attribute
[**get-access-model-metadata-attribute-value-v1**](#get-access-model-metadata-attribute-value-v1) | **GET** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Get access model metadata value
[**list-access-model-metadata-attribute-v1**](#list-access-model-metadata-attribute-v1) | **GET** `/access-model-metadata/v1/attributes` | List access model metadata attributes
[**list-access-model-metadata-attribute-value-v1**](#list-access-model-metadata-attribute-value-v1) | **GET** `/access-model-metadata/v1/attributes/{key}/values` | List access model metadata values
[**update-access-model-metadata-attribute-v1**](#update-access-model-metadata-attribute-v1) | **PATCH** `/access-model-metadata/v1/attributes/{key}` | Update access model metadata attribute
[**update-access-model-metadata-attribute-value-v1**](#update-access-model-metadata-attribute-value-v1) | **PATCH** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Update access model metadata value
[**update-access-model-metadata-by-filter-v1**](#update-access-model-metadata-by-filter-v1) | **POST** `/access-model-metadata/v1/bulk-update/filter` | Metadata Attribute update by filter
[**update-access-model-metadata-by-ids-v1**](#update-access-model-metadata-by-ids-v1) | **POST** `/access-model-metadata/v1/bulk-update/ids` | Metadata Attribute update by ids
[**update-access-model-metadata-by-query-v1**](#update-access-model-metadata-by-query-v1) | **POST** `/access-model-metadata/v1/bulk-update/query` | Metadata Attribute update by query


## create-access-model-metadata-attribute-v1
Create access model metadata attribute
Create a new Access Model Metadata Attribute.


[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**attributedto** | `Attributedto` | Attribute to create | 

### Return type

`Attributedto`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { Attributedto } from 'sailpoint-api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const attributedto: Attributedto = ; // Attribute to create
const result = await apiInstance.createAccessModelMetadataAttributeV1({ attributedto: attributedto });
console.log(result);
```

[[Back to top]](#)

## create-access-model-metadata-attribute-value-v1
Create access model metadata value
Create a new value for an existing Access Model Metadata Attribute.    


[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-attribute-value-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**attributevaluedto** | `Attributevaluedto` | Attribute value to create | 

### Return type

`Attributevaluedto`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { Attributevaluedto } from 'sailpoint-api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const attributevaluedto: Attributevaluedto = ; // Attribute value to create
const result = await apiInstance.createAccessModelMetadataAttributeValueV1({ key: key, attributevaluedto: attributevaluedto });
console.log(result);
```

[[Back to top]](#)

## get-access-model-metadata-attribute-v1
Get access model metadata attribute
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/get-access-model-metadata-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]

### Return type

`Attributedto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const result = await apiInstance.getAccessModelMetadataAttributeV1({ key: key });
console.log(result);
```

[[Back to top]](#)

## get-access-model-metadata-attribute-value-v1
Get access model metadata value
Get single Access Model Metadata Attribute Value

[API Spec](https://developer.sailpoint.com/docs/api/get-access-model-metadata-attribute-value-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**value** | `string` | Technical name of the Attribute value. |  [default to undefined]

### Return type

`Attributevaluedto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const value: string = public; // Technical name of the Attribute value.
const result = await apiInstance.getAccessModelMetadataAttributeValueV1({ key: key, value: value });
console.log(result);
```

[[Back to top]](#)

## list-access-model-metadata-attribute-v1
List access model metadata attributes
Get a list of Access Model Metadata Attributes

[API Spec](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<Attributedto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const filters: string = name eq "Privacy"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional)
const sorters: string = name,-key; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listAccessModelMetadataAttributeV1({  });
console.log(result);
```

[[Back to top]](#)

## list-access-model-metadata-attribute-value-v1
List access model metadata values
Get a list of Access Model Metadata Attribute Values

[API Spec](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-value-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<Attributevaluedto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listAccessModelMetadataAttributeValueV1({ key: key });
console.log(result);
```

[[Back to top]](#)

## update-access-model-metadata-attribute-v1
Update access model metadata attribute
Update an existing Access Model Metadata Attribute.  
The following fields are patchable: **name**, **description**, **multiselect**, **values**


[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**jsonpatchoperation** | `Array<Jsonpatchoperation>` | JSON Patch array to apply | 

### Return type

`Attributedto`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { Jsonpatchoperation } from 'sailpoint-api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const jsonpatchoperation: Array<Jsonpatchoperation> = ; // JSON Patch array to apply
const result = await apiInstance.updateAccessModelMetadataAttributeV1({ key: key, jsonpatchoperation: jsonpatchoperation });
console.log(result);
```

[[Back to top]](#)

## update-access-model-metadata-attribute-value-v1
Update access model metadata value
Update an existing Access Model Metadata Attribute Value.    
The following fields are patchable: **name**


[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-attribute-value-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**value** | `string` | Technical name of the Attribute value. |  [default to undefined]
**jsonpatchoperation** | `Array<Jsonpatchoperation>` | JSON Patch array to apply | 

### Return type

`Attributevaluedto`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { Jsonpatchoperation } from 'sailpoint-api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const value: string = public; // Technical name of the Attribute value.
const jsonpatchoperation: Array<Jsonpatchoperation> = ; // JSON Patch array to apply
const result = await apiInstance.updateAccessModelMetadataAttributeValueV1({ key: key, value: value, jsonpatchoperation: jsonpatchoperation });
console.log(result);
```

[[Back to top]](#)

## update-access-model-metadata-by-filter-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by filter
Bulk update Access Model Metadata Attribute Values using a filter

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-filter-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementattributebulkupdatefilterrequest** | `Entitlementattributebulkupdatefilterrequest` | Attribute metadata bulk update request body. | 

### Return type

`Accessmodelmetadatabulkupdateresponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { Entitlementattributebulkupdatefilterrequest } from 'sailpoint-api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const entitlementattributebulkupdatefilterrequest: Entitlementattributebulkupdatefilterrequest = ; // Attribute metadata bulk update request body.
const result = await apiInstance.updateAccessModelMetadataByFilterV1({ entitlementattributebulkupdatefilterrequest: entitlementattributebulkupdatefilterrequest });
console.log(result);
```

[[Back to top]](#)

## update-access-model-metadata-by-ids-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by ids
Bulk update Access Model Metadata Attribute Values using ids.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-ids-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementattributebulkupdateidsrequest** | `Entitlementattributebulkupdateidsrequest` | Attribute metadata bulk update request body. | 

### Return type

`Accessmodelmetadatabulkupdateresponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { Entitlementattributebulkupdateidsrequest } from 'sailpoint-api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const entitlementattributebulkupdateidsrequest: Entitlementattributebulkupdateidsrequest = ; // Attribute metadata bulk update request body.
const result = await apiInstance.updateAccessModelMetadataByIdsV1({ entitlementattributebulkupdateidsrequest: entitlementattributebulkupdateidsrequest });
console.log(result);
```

[[Back to top]](#)

## update-access-model-metadata-by-query-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by query
Bulk update Access Model Metadata Attribute Values using a query

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-query-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementattributebulkupdatequeryrequest** | `Entitlementattributebulkupdatequeryrequest` | Attribute metadata bulk update request body. | 

### Return type

`Accessmodelmetadatabulkupdateresponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { Entitlementattributebulkupdatequeryrequest } from 'sailpoint-api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const entitlementattributebulkupdatequeryrequest: Entitlementattributebulkupdatequeryrequest = ; // Attribute metadata bulk update request body.
const result = await apiInstance.updateAccessModelMetadataByQueryV1({ entitlementattributebulkupdatequeryrequest: entitlementattributebulkupdatequeryrequest });
console.log(result);
```

[[Back to top]](#)

