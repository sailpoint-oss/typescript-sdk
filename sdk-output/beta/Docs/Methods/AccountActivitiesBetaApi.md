---
title: AccountActivitiesBetaApi
pagination_label: AccountActivitiesBetaApi
sidebar_label: AccountActivitiesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccountActivitiesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccountActivitiesBetaApi']
---

# AccountActivitiesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountActivity**](AccountActivitiesBetaApi.md#getAccountActivity) | **GET** /account-activities/{id} | Get Account Activity
[**listAccountActivities**](AccountActivitiesBetaApi.md#listAccountActivities) | **GET** /account-activities | List Account Activities



## getAccountActivity

> CancelableAccountActivityBeta getAccountActivity(id)

Get Account Activity

This gets a single account activity by its id.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The account activity id | [default to undefined]

### Return type

[**CancelableAccountActivityBeta**](../Models/CancelableAccountActivityBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountActivitiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountActivitiesBetaApi = new AccountActivitiesBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The account activity id
const val = await accountActivitiesBetaApi.getAccountActivity(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listAccountActivities

> Array&lt;CancelableAccountActivityBeta&gt; listAccountActivities(requestedFor, requestedBy, regardingIdentity, type, limit, offset, count, filters, sorters)

List Account Activities

This gets a collection of account activities that satisfy the given query parameters.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string**| The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | [optional] [default to undefined]
 **requestedBy** | **string**| The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | [optional] [default to undefined]
 **regardingIdentity** | **string**| The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. | [optional] [default to undefined]
 **type** | **string**| The type of account activity. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified** | [optional] [default to undefined]

### Return type

[**Array&lt;CancelableAccountActivityBeta&gt;**](../Models/CancelableAccountActivityBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountActivitiesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountActivitiesBetaApi = new AccountActivitiesBetaApi(apiConfig);
const requestedFor = "requestedFor_example", // string | The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  requestedBy = "requestedBy_example", // string | The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  regardingIdentity = "regardingIdentity_example", // string | The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
  type = "type_example", // string | The type of account activity.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "filters_example", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw*
  sorters = "sorters_example"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified**
const val = await accountActivitiesBetaApi.listAccountActivities(requestedFor, requestedBy, regardingIdentity, type, limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

