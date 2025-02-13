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

{
  "owner" : {
    "name" : "support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "visibilityCriteria" : {
    "expression" : {
      "children" : [ ],
      "attribute" : "location",
      "value" : {
        "type" : "STRING",
        "value" : "Austin"
      },
      "operator" : "EQUALS"
    }
  },
  "name" : "segment-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "description" : "This segment represents xyz",
  "active" : true,
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"
}


const segmentBeta : SegmentBeta = 

try {
    const val = await segmentsBetaApi.createSegment(segmentBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await segmentsBetaApi.createSegment(segmentBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The segment ID to delete. (default to undefined)

try {
    const val = await segmentsBetaApi.deleteSegment(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await segmentsBetaApi.deleteSegment(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "owner" : {
    "name" : "support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "visibilityCriteria" : {
    "expression" : {
      "children" : [ ],
      "attribute" : "location",
      "value" : {
        "type" : "STRING",
        "value" : "Austin"
      },
      "operator" : "EQUALS"
    }
  },
  "name" : "segment-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "description" : "This segment represents xyz",
  "active" : true,
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The segment ID to retrieve. (default to undefined)

try {
    const val = await segmentsBetaApi.getSegment(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await segmentsBetaApi.getSegment(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "owner" : {
    "name" : "support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "visibilityCriteria" : {
    "expression" : {
      "children" : [ ],
      "attribute" : "location",
      "value" : {
        "type" : "STRING",
        "value" : "Austin"
      },
      "operator" : "EQUALS"
    }
  },
  "name" : "segment-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "description" : "This segment represents xyz",
  "active" : true,
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"
}, {
  "owner" : {
    "name" : "support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "visibilityCriteria" : {
    "expression" : {
      "children" : [ ],
      "attribute" : "location",
      "value" : {
        "type" : "STRING",
        "value" : "Austin"
      },
      "operator" : "EQUALS"
    }
  },
  "name" : "segment-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "description" : "This segment represents xyz",
  "active" : true,
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

try {
    const val = await segmentsBetaApi.listSegments();
    
    // Below is a request that includes all optional parameters      
    // const val = await segmentsBetaApi.listSegments(limit, offset, count);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "owner" : {
    "name" : "support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "visibilityCriteria" : {
    "expression" : {
      "children" : [ ],
      "attribute" : "location",
      "value" : {
        "type" : "STRING",
        "value" : "Austin"
      },
      "operator" : "EQUALS"
    }
  },
  "name" : "segment-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "description" : "This segment represents xyz",
  "active" : true,
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"
}


const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The segment ID to modify. (default to undefined)
const requestBody : Array<object> = [{op=replace, path=/visibilityCriteria, value={expression={operator=AND, children=[{operator=EQUALS, attribute=location, value={type=STRING, value=Philadelphia}}, {operator=EQUALS, attribute=department, value={type=STRING, value=HR}}]}}}]; // A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active 

try {
    const val = await segmentsBetaApi.patchSegment(id, requestBody);
    
    // Below is a request that includes all optional parameters      
    // const val = await segmentsBetaApi.patchSegment(id, requestBody);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

