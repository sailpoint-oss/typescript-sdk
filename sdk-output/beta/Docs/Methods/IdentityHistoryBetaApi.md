---
title: IdentityHistoryBetaApi
pagination_label: IdentityHistoryBetaApi
sidebar_label: IdentityHistoryBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'IdentityHistoryBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'IdentityHistoryBetaApi']
---

# IdentityHistoryBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compareIdentitySnapshots**](IdentityHistoryBetaApi.md#compareIdentitySnapshots) | **GET** /historical-identities/{id}/compare | Gets a difference of count for each access item types for the given identity between 2 snapshots
[**compareIdentitySnapshotsAccessType**](IdentityHistoryBetaApi.md#compareIdentitySnapshotsAccessType) | **GET** /historical-identities/{id}/compare/{access-type} | Gets a list of differences of specific accessType for the given identity between 2 snapshots
[**getHistoricalIdentity**](IdentityHistoryBetaApi.md#getHistoricalIdentity) | **GET** /historical-identities/{id} | Get latest snapshot of identity
[**getHistoricalIdentityEvents**](IdentityHistoryBetaApi.md#getHistoricalIdentityEvents) | **GET** /historical-identities/{id}/events | Lists all events for the given identity
[**getIdentitySnapshot**](IdentityHistoryBetaApi.md#getIdentitySnapshot) | **GET** /historical-identities/{id}/snapshots/{date} | Gets an identity snapshot at a given date
[**getIdentitySnapshotSummary**](IdentityHistoryBetaApi.md#getIdentitySnapshotSummary) | **GET** /historical-identities/{id}/snapshot-summary | Gets the summary for the event count for a specific identity
[**getIdentityStartDate**](IdentityHistoryBetaApi.md#getIdentityStartDate) | **GET** /historical-identities/{id}/start-date | Gets the start date of the identity
[**listHistoricalIdentities**](IdentityHistoryBetaApi.md#listHistoricalIdentities) | **GET** /historical-identities | Lists all the identities
[**listIdentityAccessItems**](IdentityHistoryBetaApi.md#listIdentityAccessItems) | **GET** /historical-identities/{id}/access-items | List Access Items by Identity
[**listIdentitySnapshotAccessItems**](IdentityHistoryBetaApi.md#listIdentitySnapshotAccessItems) | **GET** /historical-identities/{id}/snapshots/{date}/access-items | Get Identity Access Items Snapshot
[**listIdentitySnapshots**](IdentityHistoryBetaApi.md#listIdentitySnapshots) | **GET** /historical-identities/{id}/snapshots | Lists all the snapshots for the identity



## compareIdentitySnapshots

> Array&lt;IdentityCompareResponseBeta&gt; compareIdentitySnapshots(id, snapshot1, snapshot2, accessItemTypes, limit, offset, count)

Gets a difference of count for each access item types for the given identity between 2 snapshots

This method gets a difference of count for each access item types for the given identity between 2 snapshots Requires authorization scope of \'idn:identity-history:read\' 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity id | [default to undefined]
 **snapshot1** | **string**| The snapshot 1 of identity | [optional] [default to undefined]
 **snapshot2** | **string**| The snapshot 2 of identity | [optional] [default to undefined]
 **accessItemTypes** | [**Array&lt;string&gt;**](../Models/string.md)| An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned  | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;IdentityCompareResponseBeta&gt;**](../Models/IdentityCompareResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityHistoryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityHistoryBetaApi = new IdentityHistoryBetaApi(apiConfig);
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The identity id
const snapshot1 = "2007-03-01T13:00:00Z", // string | The snapshot 1 of identity
  snapshot2 = "2008-03-01T13:00:00Z", // string | The snapshot 2 of identity
  accessItemTypes = , // Array<string> | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned 
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await identityHistoryBetaApi.compareIdentitySnapshots(id, snapshot1, snapshot2, accessItemTypes, limit, offset, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## compareIdentitySnapshotsAccessType

> Array&lt;AccessItemDiffBeta&gt; compareIdentitySnapshotsAccessType(id, accessType, accessAssociated, snapshot1, snapshot2, limit, offset, count)

Gets a list of differences of specific accessType for the given identity between 2 snapshots

This method gets a list of differences of specific accessType for the given identity between 2 snapshots Requires authorization scope of \'idn:identity-history:read\' 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity id | [default to undefined]
 **accessType** | **string**| The specific type which needs to be compared | [default to undefined]
 **accessAssociated** | **boolean**| Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added &amp; removed | [optional] [default to undefined]
 **snapshot1** | **string**| The snapshot 1 of identity | [optional] [default to undefined]
 **snapshot2** | **string**| The snapshot 2 of identity | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;AccessItemDiffBeta&gt;**](../Models/AccessItemDiffBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityHistoryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityHistoryBetaApi = new IdentityHistoryBetaApi(apiConfig);
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The identity id
const accessType : string = "role"; // The specific type which needs to be compared
const accessAssociated = 2007-03-01T13:00:00Z, // boolean | Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added & removed
  snapshot1 = "2008-03-01T13:00:00Z", // string | The snapshot 1 of identity
  snapshot2 = "2009-03-01T13:00:00Z", // string | The snapshot 2 of identity
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await identityHistoryBetaApi.compareIdentitySnapshotsAccessType(id, accessType, accessAssociated, snapshot1, snapshot2, limit, offset, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getHistoricalIdentity

> IdentityHistoryResponseBeta getHistoricalIdentity(id)

Get latest snapshot of identity

This method retrieves a specified identity Requires authorization scope of \'idn:identity-history:read\'

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity id | [default to undefined]

### Return type

[**IdentityHistoryResponseBeta**](../Models/IdentityHistoryResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityHistoryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityHistoryBetaApi = new IdentityHistoryBetaApi(apiConfig);
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The identity id
const val = await identityHistoryBetaApi.getHistoricalIdentity(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getHistoricalIdentityEvents

> Array&lt;GetHistoricalIdentityEvents200ResponseInnerBeta&gt; getHistoricalIdentityEvents(id, from, eventTypes, accessItemTypes, limit, offset, count)

Lists all events for the given identity

This method retrieves all access events for the identity Requires authorization scope of \'idn:identity-history:read\' 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity id | [default to undefined]
 **from** | **string**| The optional instant until which access events are returned | [optional] [default to undefined]
 **eventTypes** | [**Array&lt;string&gt;**](../Models/string.md)| An optional list of event types to return.  If null or empty, all events are returned | [optional] [default to undefined]
 **accessItemTypes** | [**Array&lt;string&gt;**](../Models/string.md)| An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;GetHistoricalIdentityEvents200ResponseInnerBeta&gt;**](../Models/GetHistoricalIdentityEvents200ResponseInnerBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityHistoryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityHistoryBetaApi = new IdentityHistoryBetaApi(apiConfig);
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The identity id
const from = "2024-03-01T13:00:00Z", // string | The optional instant until which access events are returned
  eventTypes = [AccessAddedEvent, AccessRemovedEvent], // Array<string> | An optional list of event types to return.  If null or empty, all events are returned
  accessItemTypes = [entitlement, account], // Array<string> | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await identityHistoryBetaApi.getHistoricalIdentityEvents(id, from, eventTypes, accessItemTypes, limit, offset, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getIdentitySnapshot

> IdentityHistoryResponseBeta getIdentitySnapshot(id, date)

Gets an identity snapshot at a given date

This method retrieves a specified identity snapshot at a given date Requires authorization scope of \'idn:identity-history:read\' 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity id | [default to undefined]
 **date** | **string**| The specified date | [default to undefined]

### Return type

[**IdentityHistoryResponseBeta**](../Models/IdentityHistoryResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityHistoryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityHistoryBetaApi = new IdentityHistoryBetaApi(apiConfig);
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The identity id
const date : string = "2007-03-01T13:00:00Z"; // The specified date
const val = await identityHistoryBetaApi.getIdentitySnapshot(id, date);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getIdentitySnapshotSummary

> Array&lt;MetricResponseBeta&gt; getIdentitySnapshotSummary(id, before, interval, timeZone, limit, offset, count)

Gets the summary for the event count for a specific identity

This method gets the summary for the event count for a specific identity by month/day Requires authorization scope of \'idn:identity-history:read\' 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity id | [default to undefined]
 **before** | **string**| The date before which snapshot summary is required | [optional] [default to undefined]
 **interval** | **&#39;day&#39; | &#39;month&#39;**| The interval indicating day or month. Defaults to month if not specified | [optional] [default to undefined]
 **timeZone** | **string**| The time zone. Defaults to UTC if not provided | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;MetricResponseBeta&gt;**](../Models/MetricResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityHistoryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityHistoryBetaApi = new IdentityHistoryBetaApi(apiConfig);
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The identity id
const before = "2007-03-01T13:00:00Z", // string | The date before which snapshot summary is required
  interval = "interval_example", // 'day' | 'month' | The interval indicating day or month. Defaults to month if not specified
  timeZone = "UTC", // string | The time zone. Defaults to UTC if not provided
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await identityHistoryBetaApi.getIdentitySnapshotSummary(id, before, interval, timeZone, limit, offset, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getIdentityStartDate

> string getIdentityStartDate(id)

Gets the start date of the identity

This method retrieves start date of the identity Requires authorization scope of \'idn:identity-history:read\' 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity id | [default to undefined]

### Return type

**string**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityHistoryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityHistoryBetaApi = new IdentityHistoryBetaApi(apiConfig);
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The identity id
const val = await identityHistoryBetaApi.getIdentityStartDate(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listHistoricalIdentities

> Array&lt;IdentityListItemBeta&gt; listHistoricalIdentities(startsWithQuery, isDeleted, isActive, limit, offset)

Lists all the identities

This gets the list of identities for the customer. This list end point does not support count=true request param. The total  count of identities would never be returned even if the count param is specified in the request Requires authorization scope of \'idn:identity-history:read\'

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startsWithQuery** | **string**| This param is used for starts-with search for first, last and display name of the identity | [optional] [default to undefined]
 **isDeleted** | **boolean**| Indicates if we want to only list down deleted identities or not. | [optional] [default to undefined]
 **isActive** | **boolean**| Indicates if we want to only list active or inactive identities. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

[**Array&lt;IdentityListItemBeta&gt;**](../Models/IdentityListItemBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityHistoryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityHistoryBetaApi = new IdentityHistoryBetaApi(apiConfig);
const startsWithQuery = "Ada", // string | This param is used for starts-with search for first, last and display name of the identity
  isDeleted = true, // boolean | Indicates if we want to only list down deleted identities or not.
  isActive = true, // boolean | Indicates if we want to only list active or inactive identities.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0; // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await identityHistoryBetaApi.listHistoricalIdentities(startsWithQuery, isDeleted, isActive, limit, offset);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listIdentityAccessItems

> Array&lt;ListIdentityAccessItems200ResponseInnerBeta&gt; listIdentityAccessItems(id, type, filters, sorters, query, limit, count, offset)

List Access Items by Identity

This method retrieves a list of access item for the identity filtered by the access item type

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity id | [default to undefined]
 **type** | **string**| The type of access item for the identity. If not provided, it defaults to account.  Types of access items: **accessProfile, account, app, entitlement, role** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source**: *eq*  **standalone**: *eq*  **privileged**: *eq*  **attribute**: *eq*  **cloudGoverned**: *eq* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, value, standalone, privileged, attribute, source, cloudGoverned, removeDate, nativeIdentity, entitlementCount** | [optional] [default to undefined]
 **query** | **string**| This param is used to search if certain fields of the access item contain the string provided.  Searching is supported for the following fields depending on the type:  Access Profiles: **name, description**  Accounts: **name, nativeIdentity**  Apps: **name**  Entitlements: **name, value, description**  Roles: **name, description** | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

[**Array&lt;ListIdentityAccessItems200ResponseInnerBeta&gt;**](../Models/ListIdentityAccessItems200ResponseInnerBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityHistoryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityHistoryBetaApi = new IdentityHistoryBetaApi(apiConfig);
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The identity id
const type = "account", // string | The type of access item for the identity. If not provided, it defaults to account.  Types of access items: **accessProfile, account, app, entitlement, role**
  filters = "source eq "DataScienceDataset"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source**: *eq*  **standalone**: *eq*  **privileged**: *eq*  **attribute**: *eq*  **cloudGoverned**: *eq*
  sorters = "name", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, value, standalone, privileged, attribute, source, cloudGoverned, removeDate, nativeIdentity, entitlementCount**
  query = "Dr. Arden", // string | This param is used to search if certain fields of the access item contain the string provided.  Searching is supported for the following fields depending on the type:  Access Profiles: **name, description**  Accounts: **name, nativeIdentity**  Apps: **name**  Entitlements: **name, value, description**  Roles: **name, description**
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0; // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await identityHistoryBetaApi.listIdentityAccessItems(id, type, filters, sorters, query, limit, count, offset);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listIdentitySnapshotAccessItems

> Array&lt;ListIdentityAccessItems200ResponseInnerBeta&gt; listIdentitySnapshotAccessItems(id, date, type)

Get Identity Access Items Snapshot

Use this API to get a list of identity access items at a specified date, filtered by item type.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Identity ID. | [default to undefined]
 **date** | **string**| Specified date. | [default to undefined]
 **type** | **string**| Access item type. | [optional] [default to undefined]

### Return type

[**Array&lt;ListIdentityAccessItems200ResponseInnerBeta&gt;**](../Models/ListIdentityAccessItems200ResponseInnerBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityHistoryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityHistoryBetaApi = new IdentityHistoryBetaApi(apiConfig);
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // Identity ID.
const date : string = "2007-03-01T13:00:00Z"; // Specified date.
const type = "account"; // string | Access item type.
const val = await identityHistoryBetaApi.listIdentitySnapshotAccessItems(id, date, type);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listIdentitySnapshots

> Array&lt;IdentitySnapshotSummaryResponseBeta&gt; listIdentitySnapshots(id, start, interval, limit, offset, count)

Lists all the snapshots for the identity

This method retrieves all the snapshots for the identity Requires authorization scope of \'idn:identity-history:read\' 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The identity id | [default to undefined]
 **start** | **string**| The specified start date | [optional] [default to undefined]
 **interval** | **&#39;day&#39; | &#39;month&#39;**| The interval indicating the range in day or month for the specified interval-name | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

[**Array&lt;IdentitySnapshotSummaryResponseBeta&gt;**](../Models/IdentitySnapshotSummaryResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IdentityHistoryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const identityHistoryBetaApi = new IdentityHistoryBetaApi(apiConfig);
const id : string = "8c190e6787aa4ed9a90bd9d5344523fb"; // The identity id
const start = "2007-03-01T13:00:00Z", // string | The specified start date
  interval = "interval_example", // 'day' | 'month' | The interval indicating the range in day or month for the specified interval-name
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true; // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
const val = await identityHistoryBetaApi.listIdentitySnapshots(id, start, interval, limit, offset, count);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

