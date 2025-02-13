---
title: AccountUsagesBetaApi
pagination_label: AccountUsagesBetaApi
sidebar_label: AccountUsagesBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccountUsagesBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccountUsagesBetaApi']
---

# AccountUsagesBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsagesByAccountId**](AccountUsagesBetaApi.md#getUsagesByAccountId) | **GET** /account-usages/{accountId}/summaries | Returns account usage insights



## getUsagesByAccountId

> Array&lt;AccountUsageBeta&gt; getUsagesByAccountId(accountId, limit, offset, count, sorters)

Returns account usage insights

This API returns a summary of account usage insights for past 12 months.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **string**| ID of IDN account | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** | [optional] [default to undefined]

### Return type

[**Array&lt;AccountUsageBeta&gt;**](../Models/AccountUsageBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountUsagesBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountUsagesBetaApi = new AccountUsagesBetaApi(apiConfig);

[ {
  "date" : "2023-04-21",
  "count" : 10
}, {
  "date" : "2023-04-21",
  "count" : 10
} ]


const accountId : string = "ef38f94347e94562b5bb8424a56397d8"; // ID of IDN account (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const sorters : string = "-date"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** (optional) (default to undefined)

try {
    const val = await accountUsagesBetaApi.getUsagesByAccountId(accountId);
    
    // Below is a request that includes all optional parameters      
    // const val = await accountUsagesBetaApi.getUsagesByAccountId(accountId, limit, offset, count, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

