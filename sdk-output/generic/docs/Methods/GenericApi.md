---
id: generic
title: Generic
pagination_label: Generic
sidebar_label: Generic
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Generic', 'Generic']
slug: /tools/sdk/typescript/generic/methods/generic
tags: ['SDK', 'Software Development Kit', 'Generic', 'Generic']
---

# GenericApi
  Call any SailPoint Identity Security versioned API by its path. The path includes the API version, for example &#x60;sources/v1&#x60; or &#x60;sources/v2/{sourceId}/provisioning-policies&#x60;. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generic-delete**](#generic-delete) | **DELETE** `/{path}` | Generic DELETE request
[**generic-get**](#generic-get) | **GET** `/{path}` | Generic GET request
[**generic-patch**](#generic-patch) | **PATCH** `/{path}` | Generic PATCH request
[**generic-post**](#generic-post) | **POST** `/{path}` | Generic POST request
[**generic-put**](#generic-put) | **PUT** `/{path}` | Generic PUT request


## generic-delete
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Generic DELETE request
Sends a DELETE request to any versioned API path.

[API Spec](https://developer.sailpoint.com/docs/api/generic-delete)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | `string` | API path relative to the tenant base URL, including the API version, for example &#x60;accounts/v1&#x60;, &#x60;sources/v1/2c9180835d2e5168015d32f890ca1581&#x60; or &#x60;sources/v2/2c9180835d2e5168015d32f890ca1581/provisioning-policies&#x60;. Use whichever version the endpoint has. A leading slash is optional. Slashes separate path segments, and the SDK URL-encodes each segment, so pass the segments unencoded. Anything after a &#x60;?&#x60; is sent as query parameters, for example &#x60;accounts/v1?detailLevel&#x3D;SLIM&#x60;. |  [default to undefined]
**xSailPointExperimental** | `string` | Set this header to &#x60;true&#x60; to call an experimental API. The SDK configuration must also enable experimental APIs. | [optional] [default to undefined]

### Return type

`any`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { GenericApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new GenericApi(configuration);
const path: string = accounts/v1; // API path relative to the tenant base URL, including the API version, for example &#x60;accounts/v1&#x60;, &#x60;sources/v1/2c9180835d2e5168015d32f890ca1581&#x60; or &#x60;sources/v2/2c9180835d2e5168015d32f890ca1581/provisioning-policies&#x60;. Use whichever version the endpoint has. A leading slash is optional. Slashes separate path segments, and the SDK URL-encodes each segment, so pass the segments unencoded. Anything after a &#x60;?&#x60; is sent as query parameters, for example &#x60;accounts/v1?detailLevel&#x3D;SLIM&#x60;.
const xSailPointExperimental: string = true; // Set this header to &#x60;true&#x60; to call an experimental API. The SDK configuration must also enable experimental APIs. (optional)
const result = await apiInstance.genericDelete({ path: path });
console.log(result);
```

[[Back to top]](#)

## generic-get
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Generic GET request
Sends a GET request to any versioned API path, for example `sources/v1/{id}/schemas` or `sources/v2/{sourceId}/provisioning-policies`.

[API Spec](https://developer.sailpoint.com/docs/api/generic-get)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | `string` | API path relative to the tenant base URL, including the API version, for example &#x60;accounts/v1&#x60;, &#x60;sources/v1/2c9180835d2e5168015d32f890ca1581&#x60; or &#x60;sources/v2/2c9180835d2e5168015d32f890ca1581/provisioning-policies&#x60;. Use whichever version the endpoint has. A leading slash is optional. Slashes separate path segments, and the SDK URL-encodes each segment, so pass the segments unencoded. Anything after a &#x60;?&#x60; is sent as query parameters, for example &#x60;accounts/v1?detailLevel&#x3D;SLIM&#x60;. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [Standard Collection Parameters](https://developer.sailpoint.com/docs/standard-collection-parameters) for more information. | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored. | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/standard-collection-parameters#filtering-results). | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/standard-collection-parameters#sorting-results). | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Set this header to &#x60;true&#x60; to call an experimental API. The SDK configuration must also enable experimental APIs. | [optional] [default to undefined]

### Return type

`any`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { GenericApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new GenericApi(configuration);
const path: string = accounts/v1; // API path relative to the tenant base URL, including the API version, for example &#x60;accounts/v1&#x60;, &#x60;sources/v1/2c9180835d2e5168015d32f890ca1581&#x60; or &#x60;sources/v2/2c9180835d2e5168015d32f890ca1581/provisioning-policies&#x60;. Use whichever version the endpoint has. A leading slash is optional. Slashes separate path segments, and the SDK URL-encodes each segment, so pass the segments unencoded. Anything after a &#x60;?&#x60; is sent as query parameters, for example &#x60;accounts/v1?detailLevel&#x3D;SLIM&#x60;.
const limit: number = 250; // Max number of results to return. See [Standard Collection Parameters](https://developer.sailpoint.com/docs/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored. (optional)
const filters: string = name eq "Example"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/standard-collection-parameters#filtering-results). (optional)
const sorters: string = name,-created; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/standard-collection-parameters#sorting-results). (optional)
const xSailPointExperimental: string = true; // Set this header to &#x60;true&#x60; to call an experimental API. The SDK configuration must also enable experimental APIs. (optional)
const result = await apiInstance.genericGet({ path: path });
console.log(result);
```

[[Back to top]](#)

## generic-patch
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Generic PATCH request
Sends a PATCH request to any versioned API path. The body is a JSON Patch document (RFC 6902): a list of operations such as `[{"op": "replace", "path": "/description", "value": "New description"}]`.

[API Spec](https://developer.sailpoint.com/docs/api/generic-patch)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | `string` | API path relative to the tenant base URL, including the API version, for example &#x60;accounts/v1&#x60;, &#x60;sources/v1/2c9180835d2e5168015d32f890ca1581&#x60; or &#x60;sources/v2/2c9180835d2e5168015d32f890ca1581/provisioning-policies&#x60;. Use whichever version the endpoint has. A leading slash is optional. Slashes separate path segments, and the SDK URL-encodes each segment, so pass the segments unencoded. Anything after a &#x60;?&#x60; is sent as query parameters, for example &#x60;accounts/v1?detailLevel&#x3D;SLIM&#x60;. |  [default to undefined]
**xSailPointExperimental** | `string` | Set this header to &#x60;true&#x60; to call an experimental API. The SDK configuration must also enable experimental APIs. | [optional] [default to undefined]
**requestBody** | `any` |  | [optional]

### Return type

`any`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { GenericApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new GenericApi(configuration);
const path: string = accounts/v1; // API path relative to the tenant base URL, including the API version, for example &#x60;accounts/v1&#x60;, &#x60;sources/v1/2c9180835d2e5168015d32f890ca1581&#x60; or &#x60;sources/v2/2c9180835d2e5168015d32f890ca1581/provisioning-policies&#x60;. Use whichever version the endpoint has. A leading slash is optional. Slashes separate path segments, and the SDK URL-encodes each segment, so pass the segments unencoded. Anything after a &#x60;?&#x60; is sent as query parameters, for example &#x60;accounts/v1?detailLevel&#x3D;SLIM&#x60;.
const xSailPointExperimental: string = true; // Set this header to &#x60;true&#x60; to call an experimental API. The SDK configuration must also enable experimental APIs. (optional)
const requestBody: any = ; //  (optional)
const result = await apiInstance.genericPatch({ path: path });
console.log(result);
```

[[Back to top]](#)

## generic-post
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Generic POST request
Sends a POST request with a JSON body to any versioned API path.

[API Spec](https://developer.sailpoint.com/docs/api/generic-post)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | `string` | API path relative to the tenant base URL, including the API version, for example &#x60;accounts/v1&#x60;, &#x60;sources/v1/2c9180835d2e5168015d32f890ca1581&#x60; or &#x60;sources/v2/2c9180835d2e5168015d32f890ca1581/provisioning-policies&#x60;. Use whichever version the endpoint has. A leading slash is optional. Slashes separate path segments, and the SDK URL-encodes each segment, so pass the segments unencoded. Anything after a &#x60;?&#x60; is sent as query parameters, for example &#x60;accounts/v1?detailLevel&#x3D;SLIM&#x60;. |  [default to undefined]
**xSailPointExperimental** | `string` | Set this header to &#x60;true&#x60; to call an experimental API. The SDK configuration must also enable experimental APIs. | [optional] [default to undefined]
**requestBody** | `any` |  | [optional]

### Return type

`any`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { GenericApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new GenericApi(configuration);
const path: string = accounts/v1; // API path relative to the tenant base URL, including the API version, for example &#x60;accounts/v1&#x60;, &#x60;sources/v1/2c9180835d2e5168015d32f890ca1581&#x60; or &#x60;sources/v2/2c9180835d2e5168015d32f890ca1581/provisioning-policies&#x60;. Use whichever version the endpoint has. A leading slash is optional. Slashes separate path segments, and the SDK URL-encodes each segment, so pass the segments unencoded. Anything after a &#x60;?&#x60; is sent as query parameters, for example &#x60;accounts/v1?detailLevel&#x3D;SLIM&#x60;.
const xSailPointExperimental: string = true; // Set this header to &#x60;true&#x60; to call an experimental API. The SDK configuration must also enable experimental APIs. (optional)
const requestBody: any = ; //  (optional)
const result = await apiInstance.genericPost({ path: path });
console.log(result);
```

[[Back to top]](#)

## generic-put
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Generic PUT request
Sends a PUT request with a JSON body to any versioned API path.

[API Spec](https://developer.sailpoint.com/docs/api/generic-put)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | `string` | API path relative to the tenant base URL, including the API version, for example &#x60;accounts/v1&#x60;, &#x60;sources/v1/2c9180835d2e5168015d32f890ca1581&#x60; or &#x60;sources/v2/2c9180835d2e5168015d32f890ca1581/provisioning-policies&#x60;. Use whichever version the endpoint has. A leading slash is optional. Slashes separate path segments, and the SDK URL-encodes each segment, so pass the segments unencoded. Anything after a &#x60;?&#x60; is sent as query parameters, for example &#x60;accounts/v1?detailLevel&#x3D;SLIM&#x60;. |  [default to undefined]
**xSailPointExperimental** | `string` | Set this header to &#x60;true&#x60; to call an experimental API. The SDK configuration must also enable experimental APIs. | [optional] [default to undefined]
**requestBody** | `any` |  | [optional]

### Return type

`any`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { GenericApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new GenericApi(configuration);
const path: string = accounts/v1; // API path relative to the tenant base URL, including the API version, for example &#x60;accounts/v1&#x60;, &#x60;sources/v1/2c9180835d2e5168015d32f890ca1581&#x60; or &#x60;sources/v2/2c9180835d2e5168015d32f890ca1581/provisioning-policies&#x60;. Use whichever version the endpoint has. A leading slash is optional. Slashes separate path segments, and the SDK URL-encodes each segment, so pass the segments unencoded. Anything after a &#x60;?&#x60; is sent as query parameters, for example &#x60;accounts/v1?detailLevel&#x3D;SLIM&#x60;.
const xSailPointExperimental: string = true; // Set this header to &#x60;true&#x60; to call an experimental API. The SDK configuration must also enable experimental APIs. (optional)
const requestBody: any = ; //  (optional)
const result = await apiInstance.genericPut({ path: path });
console.log(result);
```

[[Back to top]](#)

