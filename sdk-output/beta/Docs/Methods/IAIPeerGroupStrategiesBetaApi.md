---
title: IAIPeerGroupStrategiesBetaApi
pagination_label: IAIPeerGroupStrategiesBetaApi
sidebar_label: IAIPeerGroupStrategiesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'IAIPeerGroupStrategiesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'IAIPeerGroupStrategiesBetaApi']
---

# IAIPeerGroupStrategiesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPeerGroupOutliers**](IAIPeerGroupStrategiesBetaApi.md#getPeerGroupOutliers) | **GET** /peer-group-strategies/{strategy}/identity-outliers | Identity Outliers List



## getPeerGroupOutliers

> Array&lt;PeerGroupMemberBeta&gt; getPeerGroupOutliers(strategy, limit, offset, count)

Identity Outliers List

-- Deprecated : See \'IAI Outliers\' This API will be used by Identity Governance systems to identify identities that are not included in an organization\'s peer groups. By default, 250 identities are returned. You can specify between 1 and 1000 number of identities that can be returned.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **strategy** | **string**| The strategy used to create peer groups. Currently, \&#39;entitlement\&#39; is supported. | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;PeerGroupMemberBeta&gt;**](../Models/PeerGroupMemberBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIPeerGroupStrategiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIPeerGroupStrategiesBetaApi = new IAIPeerGroupStrategiesBetaApi(apiConfig);
const strategy : string = "entitlement"; // The strategy used to create peer groups. Currently, \'entitlement\' is supported.
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await iAIPeerGroupStrategiesBetaApi.getPeerGroupOutliers(strategy, limit, offset, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

