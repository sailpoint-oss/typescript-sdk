---
title: SegmentsBetaApi
pagination_label: SegmentsBetaApi
sidebar_label: SegmentsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'SegmentsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'SegmentsBetaApi']
---

# SegmentsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSegment**](SegmentsBetaApi.md#createSegment) | **POST** /segments | Create Segment
[**deleteSegment**](SegmentsBetaApi.md#deleteSegment) | **DELETE** /segments/{id} | Delete Segment by ID
[**getSegment**](SegmentsBetaApi.md#getSegment) | **GET** /segments/{id} | Get Segment by ID
[**listSegments**](SegmentsBetaApi.md#listSegments) | **GET** /segments | List Segments
[**patchSegment**](SegmentsBetaApi.md#patchSegment) | **PATCH** /segments/{id} | Update Segment



## createSegment

> SegmentBeta createSegment(segmentBeta)

Create Segment

This API creates a segment.  >**Note:** Segment definitions may take time to propagate to all identities. A token with ORG_ADMIN or API authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segmentBeta** | [**SegmentBeta**](../Models/SegmentBeta.md)|  | 

### Return type

[**SegmentBeta**](../Models/SegmentBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SegmentsBetaApi, SegmentBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const segmentsBetaApi = new SegmentsBetaApi(apiConfig);
const segmentBeta : SegmentBeta = ; // 
const val = await segmentsBetaApi.createSegment(segmentBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteSegment

> deleteSegment(id)

Delete Segment by ID

This API deletes the segment specified by the given ID. >**Note:** Segment deletion may take some time to go into effect.  A token with ORG_ADMIN or API authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The segment ID to delete. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SegmentsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const segmentsBetaApi = new SegmentsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The segment ID to delete.
const val = await segmentsBetaApi.deleteSegment(id);
console.log('API called successfully.');
```
</details>


## getSegment

> SegmentBeta getSegment(id)

Get Segment by ID

This API returns the segment specified by the given ID. A token with ORG_ADMIN or API authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The segment ID to retrieve. | [default to undefined]

### Return type

[**SegmentBeta**](../Models/SegmentBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SegmentsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const segmentsBetaApi = new SegmentsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The segment ID to retrieve.
const val = await segmentsBetaApi.getSegment(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listSegments

> Array&lt;SegmentBeta&gt; listSegments(limit, offset, count)

List Segments

This API returns a list of all segments. A token with ORG_ADMIN or API authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;SegmentBeta&gt;**](../Models/SegmentBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SegmentsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const segmentsBetaApi = new SegmentsBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await segmentsBetaApi.listSegments(limit, offset, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchSegment

> SegmentBeta patchSegment(id, requestBody)

Update Segment

Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. >**Note:** Changes to a segment may take some time to propagate to all identities. A token with ORG_ADMIN or API authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The segment ID to modify. | [default to undefined]
 **requestBody** | [**Array&lt;object&gt;**](../Models/object.md)| A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active  | 

### Return type

[**SegmentBeta**](../Models/SegmentBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SegmentsBetaApi, object } from "sailpoint-api-client";
const apiConfig = new Configuration();
const segmentsBetaApi = new SegmentsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The segment ID to modify.
const requestBody : Array<object> = [{op=replace, path=/visibilityCriteria, value={expression={operator=AND, children=[{operator=EQUALS, attribute=location, value={type=STRING, value=Philadelphia}}, {operator=EQUALS, attribute=department, value={type=STRING, value=HR}}]}}}]; // A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active 
const val = await segmentsBetaApi.patchSegment(id, requestBody);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

