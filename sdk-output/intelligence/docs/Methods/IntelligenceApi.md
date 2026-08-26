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
  HTTP API that returns the Intelligence (identity context) for SecOps enrichment
use cases (SIEM/SOAR connectors, MCP, browser extension), and accepts asynchronous
response actions for remediation. Identity reads are backed by Atlas internal-REST
calls to MICE, Shelby List Accounts, SDS Search, IDA-outliers, and identity-history.

## License-based segmentation

- **&#x60;idn:response-and-remediation&#x60;** (required): enforced on all &#x60;/intelligence/*&#x60; routes.
- **&#x60;IDA-outliers&#x60;** (optional): governs the Human &#x60;outliers.rareAccess&#x60; slice only. When the
  tenant lacks this license, the &#x60;outliers&#x60; key is omitted.
- **&#x60;idg:base&#x60;** (optional): governs the root-level &#x60;identityGraph&#x60; deep link on aggregate
  responses. When the tenant lacks this license, &#x60;identityGraph&#x60; is omitted.
- **&#x60;idn:machine-identity-security&#x60;** (optional): governs the Human &#x60;nonHumanIdentityOwnership&#x60;
  slice. When the tenant lacks this license, &#x60;nonHumanIdentityOwnership&#x60; is omitted on the
  aggregate GET and the &#x60;/non-human-identity-ownership/{category}&#x60; child route returns
  **403 Forbidden**.

## Pagination

The aggregated Human GET embeds the first **10** items per paged slice. Each upstream paged call
sends &#x60;count&#x3D;true&#x60; and reads &#x60;X-Total-Count&#x60;. Parent slices expose &#x60;totalCount&#x60; when &#x60;items&#x60; is
non-empty and set &#x60;next&#x60; when &#x60;totalCount &gt; offset + len(items)&#x60; (aggregate offset is always 0).
Empty slices render as &#x60;items: []&#x60; with no &#x60;totalCount&#x60;. &#x60;privilegedAccess&#x60; is never paged and
carries no &#x60;totalCount&#x60;. When licensed, &#x60;nonHumanIdentityOwnership&#x60; pages each
&#x60;primaryOwned&#x60; / &#x60;secondaryOwned&#x60; bucket independently under &#x60;agents&#x60; and &#x60;applications&#x60;.

Human child routes (&#x60;/accounts&#x60;, &#x60;/outliers/rare-access&#x60;, &#x60;/access-history/*&#x60;,
&#x60;/non-human-identity-ownership/{category}&#x60;) follow the SailPoint V3 pattern: pass &#x60;count&#x3D;true&#x60;
to receive &#x60;X-Total-Count&#x60; (including &#x60;0&#x60; on empty pages). When &#x60;count&#x60; is omitted, upstream
count work is skipped and the header is omitted.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-response-action-v1**](#create-response-action-v1) | **POST** `/intelligence/v1/response-actions` | Create a response action
[**get-identity-intelligence-v1**](#get-identity-intelligence-v1) | **GET** `/intelligence/v1/identities` | Get identity by filter
[**get-intel-identity-access-item-history-v1**](#get-intel-identity-access-item-history-v1) | **GET** `/intelligence/v1/identities/{id}/access-history/access-items` | List identity access item history
[**get-intel-identity-accounts-v1**](#get-intel-identity-accounts-v1) | **GET** `/intelligence/v1/identities/{id}/accounts` | List identity accounts
[**get-intel-identity-certification-history-v1**](#get-intel-identity-certification-history-v1) | **GET** `/intelligence/v1/identities/{id}/access-history/certifications` | List identity certification history
[**get-intel-identity-non-human-identity-ownership-v1**](#get-intel-identity-non-human-identity-ownership-v1) | **GET** `/intelligence/v1/identities/{id}/non-human-identity-ownership/{category}` | List owned NHI identities
[**get-intel-identity-rare-access-v1**](#get-intel-identity-rare-access-v1) | **GET** `/intelligence/v1/identities/{id}/outliers/rare-access` | List identity rare access
[**get-response-action-status-v1**](#get-response-action-status-v1) | **GET** `/intelligence/v1/response-actions/{id}/status` | Get response action status


## create-response-action-v1
Create a response action
Requires tenant license idn:response-and-remediation.

Creates a response action: the request is validated, a requestId (the correlation id) is
minted, the action is recorded as SUBMITTED, and an event is published that triggers the
correlated workflow(s).

Returns HTTP 202 with the requestId, an initial SUBMITTED status, and a statusUrl. Poll
GET /intelligence/v1/response-actions/{requestId}/status for progress.


[API Spec](https://developer.sailpoint.com/docs/api/create-response-action-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**responseactioncreaterequest** | `Responseactioncreaterequest` |  | 

### Return type

`Responseactionaccepted`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Responseactioncreaterequest } from '@sailpoint/api-client/dist/intelligence/api';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const responseactioncreaterequest: Responseactioncreaterequest = {
  "actionType" : "DISABLE_ACCOUNT",
  "identityType" : "HUMAN",
  "identityId" : "2c918085842e69ae018428c919680149",
  "accountIds" : [ "2c918085abc000000000000000000001" ],
  "context" : {
    "reason" : "Contain compromised account",
    "externalAlertId" : "CS-FALCON-12345",
    "source" : "CROWDSTRIKE",
    "operator" : "soc-analyst@customer.com"
  }
}; // 
const result = await apiInstance.createResponseActionV1({ responseactioncreaterequest: responseactioncreaterequest });
console.log(result);
```

[[Back to top]](#)

## get-identity-intelligence-v1
Get identity by filter
Requires tenant license idn:response-and-remediation.

**Authentication and data segmentation**

Intelligence forwards the caller JWT to downstream identity and search services (context client).
Enriched results, including non-human identity resolution, are filtered to the caller's Data
Segmentation visibility.

**Caution:** Generic API Management API keys are not tied to a user identity. When Data
Segmentation is enabled, API key authentication may fail or return incomplete data because
downstream calls require a user context. Use a [personal access token](https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token)
or other user-scoped OAuth token. See [API keys](https://documentation.sailpoint.com/saas/help/common/api_keys.html)
and [Data Segmentation](https://documentation.sailpoint.com/saas/help/segmentation/index.html).

Resolves exactly one identity using a single SCIM-style filters expression.

**Supported filters**

| Filter field | Lookup mode | Notes |
|---|---|---|
| id eq | Human (+ optional non-human identity when feature-flagged) | Resolves human identities by id; when non-human resolution is enabled, a parallel non-human lookup runs. If both match different identities, returns HTTP 409. |
| email eq | Human only | Human identity lookup by email only. |
| opaqueIdentifier eq | Non-human identity only | Parallel nativeIdentity eq on machine-identities and machine-accounts, then name-prefix fallback on machine-accounts. Requires feature flag ISCRR-1905_NHI_TYPE_MACHINE_FILTER_ENABLED; when disabled, returns HTTP 400. |

Single-clause filters only; composite and or expressions are rejected with HTTP 400.

**identityGraph deep link**

When the tenant has the idg:base license, Human and NHI aggregate responses may include
`identityGraph.href`, a deep link into the Identity Graph UI for the resolved identity.
Opening the link requires the **Identity Graph Read Only** user level. The link is omitted
when the tenant lacks idg:base.

**Human envelope (type Human)**

Embeds the first page (10 items) of each enrichment slice. Each paged slice includes totalCount
from upstream X-Total-Count when items is non-empty, and carries a next continuation URL when
totalCount exceeds the items returned on this page. Slices are always present (empty uses
items [] with no totalCount). privilegedAccess returns the full privileged-access result and never carries
next or totalCount. When the tenant has idn:machine-identity-security, nonHumanIdentityOwnership
is included with agents and applications categories; each category is a flat object with
independently paged primaryOwned and secondaryOwned buckets, and optional message/reason when
upstream ownership fetch fails for that category (reason UPSTREAM_UNAVAILABLE). When the tenant
lacks that license, nonHumanIdentityOwnership is omitted. Continue ownership paging with
GET .../non-human-identity-ownership/{category} and optional ownershipRole=primary|secondary
(defaults to primary). If any enrichment upstream fails, the whole request fails with HTTP 500,
except outliers (omitted when the tenant lacks the IDA-outliers license) and
nonHumanIdentityOwnership category-level degrade (aggregate still returns HTTP 200).

**Non-human identity envelope (type NHI)**

Returns flat non-human identity fields at the top level plus correlated machine accounts on the
aggregate and a derived block (isOrphaned, authorizedHumanIdentities, blastRadiusSummary).
Omits Human-only slices (privilegedAccess, outliers, accessHistory, nonHumanIdentityOwnership).
Account paging via child routes is not yet released. Opaque prefix resolution that deduplicates
to one parent identity returns HTTP 200 with matchConfidence partial; multiple distinct parent
identities return HTTP 409 with IDC_IDENTITY_AMBIGUOUS and candidate id and displayName values.


[API Spec](https://developer.sailpoint.com/docs/api/get-identity-intelligence-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **email**: *eq*  **opaqueIdentifier**: *eq* |  [default to undefined]

### Return type

`Intelidentityenvelope`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const filters: string = id eq "ef38f94347e94562b5bb8424a56397d8"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **email**: *eq*  **opaqueIdentifier**: *eq*
const result = await apiInstance.getIdentityIntelligenceV1({ filters: filters });
console.log(result);
```

[[Back to top]](#)

## get-intel-identity-access-item-history-v1
List identity access item history
Continuation endpoint for the parent response's `accessHistory.accessItems.next` link.
Returns one page of access-item history events for the supplied limit and offset values.
Pass `count=true` to receive `X-Total-Count` (including `0` on empty pages).
Unsupported event types and per-record decode failures are dropped server-side.
Requires tenant license idn:response-and-remediation.

Not applicable to non-human identities.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-access-item-history-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-empty identity id path segment for Intelligence sub-resources. |  [default to undefined]
**limit** | `number` | Page size. Defaults to 250; values above 250 are rejected with 400. | [optional] [default to 250]
**offset** | `number` | Zero-based page offset. Defaults to 0. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<IntelAccessItemHistoryEvent>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-empty identity id path segment for Intelligence sub-resources.
const limit: number = 250; // Page size. Defaults to 250; values above 250 are rejected with 400. (optional)
const offset: number = 0; // Zero-based page offset. Defaults to 0. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getIntelIdentityAccessItemHistoryV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-intel-identity-accounts-v1
List identity accounts
Continuation endpoint for a Human identity's `accounts.next` link.
Returns one page of account rows for the supplied limit and offset values.
Pass `count=true` to receive `X-Total-Count` (including `0` on empty pages).
Not applicable to non-human identities (NHI accounts are returned on the NHI aggregate only).
Requires tenant license idn:response-and-remediation.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-accounts-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-empty identity id path segment for Intelligence sub-resources. |  [default to undefined]
**limit** | `number` | Page size. Defaults to 250; values above 250 are rejected with 400. | [optional] [default to 250]
**offset** | `number` | Zero-based page offset. Defaults to 0. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<IntelAccessAccountWire>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-empty identity id path segment for Intelligence sub-resources.
const limit: number = 250; // Page size. Defaults to 250; values above 250 are rejected with 400. (optional)
const offset: number = 0; // Zero-based page offset. Defaults to 0. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getIntelIdentityAccountsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-intel-identity-certification-history-v1
List identity certification history
Continuation endpoint for the parent response's `accessHistory.certifications.next` link.
Returns one page of certification history events for the supplied limit and offset values.
Pass `count=true` to receive `X-Total-Count` (including `0` on empty pages).
Per-record decode failures are dropped server-side.
Requires tenant license idn:response-and-remediation.

Not applicable to non-human identities.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-certification-history-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-empty identity id path segment for Intelligence sub-resources. |  [default to undefined]
**limit** | `number` | Page size. Defaults to 250; values above 250 are rejected with 400. | [optional] [default to 250]
**offset** | `number` | Zero-based page offset. Defaults to 0. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<IntelCertificationHistoryEvent>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-empty identity id path segment for Intelligence sub-resources.
const limit: number = 250; // Page size. Defaults to 250; values above 250 are rejected with 400. (optional)
const offset: number = 0; // Zero-based page offset. Defaults to 0. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getIntelIdentityCertificationHistoryV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-intel-identity-non-human-identity-ownership-v1
List owned NHI identities
Continuation endpoint for a human parent's
`nonHumanIdentityOwnership.{category}.primaryOwned.next` or
`nonHumanIdentityOwnership.{category}.secondaryOwned.next` link. Returns a bare JSON array of
owned non-human identity summary rows for the given `category`, optional `ownershipRole`,
`limit`, and `offset`. Wire items match the aggregate ownership item shape
(`{ id, displayName, source? }`).

When `ownershipRole` is omitted, the request defaults to `primary`. Pass `count=true` to
receive `X-Total-Count` (including `0` on empty pages). The `filters` query parameter is not
supported on this route (HTTP 400).

Requires tenant licenses `idn:response-and-remediation` and `idn:machine-identity-security`.
Tenants without `idn:machine-identity-security` receive HTTP 403.

Not applicable to non-human identities (no ownership slice on the NHI envelope).


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-non-human-identity-ownership-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-empty identity id path segment for Intelligence sub-resources. |  [default to undefined]
**category** | `'agents' | 'applications'` | Non-human identity ownership category. Use &#x60;agents&#x60; for AI Agent subtypes and &#x60;applications&#x60; for Application subtypes.  |  [default to undefined]
**ownershipRole** | `'primary' | 'secondary'` | Optional ownership role discriminator. When set to &#x60;primary&#x60; or &#x60;secondary&#x60;, returns one paged role bucket. When omitted, defaults to &#x60;primary&#x60;.  | [optional] [default to &#39;primary&#39;]
**limit** | `number` | Page size. Defaults to 250; values above 250 are rejected with 400. | [optional] [default to 250]
**offset** | `number` | Zero-based page offset. Defaults to 0. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<Intelnonhumanidentityownershipitem>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-empty identity id path segment for Intelligence sub-resources.
const category: string = agents; // Non-human identity ownership category. Use &#x60;agents&#x60; for AI Agent subtypes and &#x60;applications&#x60; for Application subtypes. 
const ownershipRole: string = primary; // Optional ownership role discriminator. When set to &#x60;primary&#x60; or &#x60;secondary&#x60;, returns one paged role bucket. When omitted, defaults to &#x60;primary&#x60;.  (optional)
const limit: number = 250; // Page size. Defaults to 250; values above 250 are rejected with 400. (optional)
const offset: number = 0; // Zero-based page offset. Defaults to 0. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getIntelIdentityNonHumanIdentityOwnershipV1({ id: id, category: category });
console.log(result);
```

[[Back to top]](#)

## get-intel-identity-rare-access-v1
List identity rare access
Continuation endpoint for the parent response's `outliers.rareAccess.next` link.
Resolves the identity's first outlier, then returns one page of rare access
items for the supplied limit and offset values. Pass `count=true` to receive
`X-Total-Count` (including `0` on empty pages). An identity with no outlier
returns an empty array with `X-Total-Count: 0` when `count=true`. Requires
tenant license idn:response-and-remediation and the IDA-outliers license.

Not applicable to non-human identities (no outliers slice on the NHI envelope).


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-rare-access-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-empty identity id path segment for Intelligence sub-resources. |  [default to undefined]
**limit** | `number` | Page size. Defaults to 250; values above 250 are rejected with 400. | [optional] [default to 250]
**offset** | `number` | Zero-based page offset. Defaults to 0. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<IntelOutlierAccessItem>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-empty identity id path segment for Intelligence sub-resources.
const limit: number = 250; // Page size. Defaults to 250; values above 250 are rejected with 400. (optional)
const offset: number = 0; // Zero-based page offset. Defaults to 0. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getIntelIdentityRareAccessV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-response-action-status-v1
Get response action status
Requires tenant license idn:response-and-remediation.

Returns the current aggregate status of a previously submitted response action, identified by
the requestId returned from POST /intelligence/v1/response-actions.

Supported actionType values: DISABLE_IDENTITY, DISABLE_ACCOUNT.


[API Spec](https://developer.sailpoint.com/docs/api/get-response-action-status-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The requestId of the response action to look up. |  [default to undefined]

### Return type

`Responseactionstatus`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IntelligenceApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IntelligenceApi(configuration);
const id: string = 3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b; // The requestId of the response action to look up.
const result = await apiInstance.getResponseActionStatusV1({ id: id });
console.log(result);
```

[[Back to top]](#)

