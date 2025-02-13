---
title: AccountAggregationsBetaApi
pagination_label: AccountAggregationsBetaApi
sidebar_label: AccountAggregationsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'AccountAggregationsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'AccountAggregationsBetaApi']
---

# AccountAggregationsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountAggregationStatus**](AccountAggregationsBetaApi.md#getAccountAggregationStatus) | **GET** /account-aggregations/{id}/status | In-progress Account Aggregation status



## getAccountAggregationStatus

> AccountAggregationStatusBeta getAccountAggregationStatus(id)

In-progress Account Aggregation status

This API returns the status of an *in-progress* account aggregation, along with the total number of **NEW**, **CHANGED** and **DELETED** accounts found since the previous aggregation, and the number of those accounts that have been processed so far.  Accounts that have not changed since the previous aggregation are not included in **totalAccounts** and **processedAccounts** counts returned by this API. This is distinct from **Accounts Scanned** shown in the Aggregation UI, which indicates total accounts scanned regardless of whether they changed or not.  Since this endpoint reports on the status of an *in-progress* account aggregation, totalAccounts and processedAccounts may change between calls to this endpoint.  *Only available up to an hour after the aggregation completes. May respond with *404 Not Found* after that.*  A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN or DASHBOARD authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The account aggregation id | [default to undefined]

### Return type

[**AccountAggregationStatusBeta**](../Models/AccountAggregationStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, AccountAggregationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const accountAggregationsBetaApi = new AccountAggregationsBetaApi(apiConfig);
const id : string = "2c91808477a6b0c60177a81146b8110b"; // The account aggregation id
const val = await accountAggregationsBetaApi.getAccountAggregationStatus(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

