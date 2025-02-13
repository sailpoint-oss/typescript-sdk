---
title: RequestableObjectsBetaApi
pagination_label: RequestableObjectsBetaApi
sidebar_label: RequestableObjectsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'RequestableObjectsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'RequestableObjectsBetaApi']
---

# RequestableObjectsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listRequestableObjects**](RequestableObjectsBetaApi.md#listRequestableObjects) | **GET** /requestable-objects | Requestable Objects List



## listRequestableObjects

> Array&lt;RequestableObjectBeta&gt; listRequestableObjects(identityId, types, term, statuses, limit, offset, count, filters, sorters)

Requestable Objects List

This endpoint returns a list of acccess items that that can be requested through the Access Request endpoints. Access items are marked with AVAILABLE, PENDING or ASSIGNED with respect to the identity provided using *identity-id* query param. Any authenticated token can call this endpoint to see their requestable access items.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result. | [optional] [default to undefined]
 **types** | [**Array&lt;RequestableObjectTypeBeta&gt;**](../Models/RequestableObjectTypeBeta.md)| Filters the results to the specified type/types, where each type is one of ROLE or ACCESS_PROFILE. If absent, all types are returned. Support for additional types may be added in the future without notice. | [optional] [default to undefined]
 **term** | **string**| It allows searching requestable access items with a partial match on the name or description. If term is provided, then the *filter* query parameter will be ignored. | [optional] [default to undefined]
 **statuses** | [**Array&lt;RequestableObjectRequestStatusBeta&gt;**](../Models/RequestableObjectRequestStatusBeta.md)| Filters the result to the specified status/statuses, where each status is one of AVAILABLE, ASSIGNED, or PENDING. It is an error to specify this parameter without also specifying an *identity-id* parameter. Additional statuses may be added in the future without notice. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  | [optional] [default to undefined]

### Return type

[**Array&lt;RequestableObjectBeta&gt;**](../Models/RequestableObjectBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, RequestableObjectsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const requestableObjectsBetaApi = new RequestableObjectsBetaApi(apiConfig);
const identityId = "e7eab60924f64aa284175b9fa3309599", // string | If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result.
  types = ROLE,ACCESS_PROFILE, // Array<RequestableObjectTypeBeta> | Filters the results to the specified type/types, where each type is one of ROLE or ACCESS_PROFILE. If absent, all types are returned. Support for additional types may be added in the future without notice.
  term = "Finance Role", // string | It allows searching requestable access items with a partial match on the name or description. If term is provided, then the *filter* query parameter will be ignored.
  statuses = [ASSIGNED, PENDING], // Array<RequestableObjectRequestStatusBeta> | Filters the result to the specified status/statuses, where each status is one of AVAILABLE, ASSIGNED, or PENDING. It is an error to specify this parameter without also specifying an *identity-id* parameter. Additional statuses may be added in the future without notice.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "name sw "bob"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw* 
  sorters = "name"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** 
const val = await requestableObjectsBetaApi.listRequestableObjects(identityId, types, term, statuses, limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

