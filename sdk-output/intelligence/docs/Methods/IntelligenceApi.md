---
id: v1-intelligence
title: Intelligence
pagination_label: Intelligence
sidebar_label: Intelligence
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Intelligence', 'v1Intelligence']
slug: /tools/sdk/typescript/intelligence/methods/intelligence
tags: ['SDK', 'Software Development Kit', 'Intelligence', 'v1Intelligence']
---

# IntelligenceApi
  Read-only HTTP API that returns the Intelligence (identity context)
for SecOps enrichment use cases (SIEM/SOAR connectors, MCP, browser
extension). Backed by Atlas internal-REST calls to MICE, Shelby List Accounts,
SDS Search, IDA-outliers, and identity-history.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-identity-intelligence-v1**](#get-identity-intelligence-v1) | **GET** `/intelligence/v1/identities` | Get identity by filter
[**get-intel-identity-access-item-history-v1**](#get-intel-identity-access-item-history-v1) | **GET** `/intelligence/v1/identities/{id}/access-history/access-items` | List identity access item history
[**get-intel-identity-accounts-v1**](#get-intel-identity-accounts-v1) | **GET** `/intelligence/v1/identities/{id}/accounts` | List identity accounts
[**get-intel-identity-certification-history-v1**](#get-intel-identity-certification-history-v1) | **GET** `/intelligence/v1/identities/{id}/access-history/certifications` | List identity certification history
[**get-intel-identity-rare-access-v1**](#get-intel-identity-rare-access-v1) | **GET** `/intelligence/v1/identities/{id}/outliers/rare-access` | List identity rare access


## get-identity-intelligence-v1
Get identity by filter
Requires tenant license idn:response-and-remediation.

Resolves exactly one identity by SCIM-style filters expression and returns the Intelligence envelope.
Supported queryable fields are id and email only.
The response embeds the first page of accounts, rare access, access-history access items, and
access-history certifications. Paged slices include a next link only when more results exist.
The privilegedAccess slice contains the full result and is not paged.
The outliers slice is omitted when the tenant lacks the IDA-outliers license.

A single match returns HTTP 200 with IntelIdentityAggregate.

Zero matches returns HTTP 404 with detailCode IDC_IDENTITY_NOT_FOUND.

Multiple matches returns HTTP 409 with detailCode IDC_IDENTITY_AMBIGUOUS and candidates listing each match.


[API Spec](https://developer.sailpoint.com/docs/api/get-identity-intelligence-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **email**: *eq* |  [default to undefined]

### Return type

`Intelidentityaggregate`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const filters: string = id eq "ef38f94347e94562b5bb8424a56397d8"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **email**: *eq*
const result = await apiInstance.getIdentityIntelligenceV1({ filters: filters });
console.log(result);
```

[[Back to top]](#)

## get-intel-identity-access-item-history-v1
List identity access item history
Continuation endpoint for the parent response's `accessHistory.accessItems.next` link.
Returns one page of access-item history events for the supplied limit and offset values.
Unsupported event types and per-record decode failures are dropped server-side.
Requires tenant license idn:response-and-remediation.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-access-item-history-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-empty identity id path segment for Intelligence sub-resources. |  [default to undefined]
**limit** | `number` | Page size. Defaults to 250; values above 250 are rejected with 400. | [optional] [default to 250]
**offset** | `number` | Zero-based page offset. Defaults to 0. | [optional] [default to 0]

### Return type

`Array<Intelaccessitemhistoryevent>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-empty identity id path segment for Intelligence sub-resources.
const limit: number = 250; // Page size. Defaults to 250; values above 250 are rejected with 400. (optional)
const offset: number = 0; // Zero-based page offset. Defaults to 0. (optional)
const result = await apiInstance.getIntelIdentityAccessItemHistoryV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-intel-identity-accounts-v1
List identity accounts
Continuation endpoint for the parent response's `accounts.next` link.
Returns one page of account rows for the supplied limit and offset values.
Requires tenant license idn:response-and-remediation.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-accounts-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-empty identity id path segment for Intelligence sub-resources. |  [default to undefined]
**limit** | `number` | Page size. Defaults to 250; values above 250 are rejected with 400. | [optional] [default to 250]
**offset** | `number` | Zero-based page offset. Defaults to 0. | [optional] [default to 0]

### Return type

`Array<Intelaccessaccountwire>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-empty identity id path segment for Intelligence sub-resources.
const limit: number = 250; // Page size. Defaults to 250; values above 250 are rejected with 400. (optional)
const offset: number = 0; // Zero-based page offset. Defaults to 0. (optional)
const result = await apiInstance.getIntelIdentityAccountsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-intel-identity-certification-history-v1
List identity certification history
Continuation endpoint for the parent response's `accessHistory.certifications.next` link.
Returns one page of certification history events for the supplied limit and offset values.
Per-record decode failures are dropped server-side.
Requires tenant license idn:response-and-remediation.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-certification-history-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-empty identity id path segment for Intelligence sub-resources. |  [default to undefined]
**limit** | `number` | Page size. Defaults to 250; values above 250 are rejected with 400. | [optional] [default to 250]
**offset** | `number` | Zero-based page offset. Defaults to 0. | [optional] [default to 0]

### Return type

`Array<Intelcertificationhistoryevent>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-empty identity id path segment for Intelligence sub-resources.
const limit: number = 250; // Page size. Defaults to 250; values above 250 are rejected with 400. (optional)
const offset: number = 0; // Zero-based page offset. Defaults to 0. (optional)
const result = await apiInstance.getIntelIdentityCertificationHistoryV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-intel-identity-rare-access-v1
List identity rare access
Continuation endpoint for the parent response's `outliers.rareAccess.next` link.
Resolves the identity's first outlier, then returns one page of rare access
items for the supplied limit and offset values. An identity with no outlier
returns an empty array. Requires tenant license idn:response-and-remediation
and the IDA-outliers license.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-rare-access-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-empty identity id path segment for Intelligence sub-resources. |  [default to undefined]
**limit** | `number` | Page size. Defaults to 250; values above 250 are rejected with 400. | [optional] [default to 250]
**offset** | `number` | Zero-based page offset. Defaults to 0. | [optional] [default to 0]

### Return type

`Array<Inteloutlieraccessitem>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-empty identity id path segment for Intelligence sub-resources.
const limit: number = 250; // Page size. Defaults to 250; values above 250 are rejected with 400. (optional)
const offset: number = 0; // Zero-based page offset. Defaults to 0. (optional)
const result = await apiInstance.getIntelIdentityRareAccessV1({ id: id });
console.log(result);
```

[[Back to top]](#)

