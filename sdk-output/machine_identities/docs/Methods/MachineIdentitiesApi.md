---
id: v1-machine-identities
title: MachineIdentities
pagination_label: MachineIdentities
sidebar_label: MachineIdentities
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineIdentities', 'v1MachineIdentities']
slug: /tools/sdk/typescript/machine_identities/methods/machine-identities
tags: ['SDK', 'Software Development Kit', 'MachineIdentities', 'v1MachineIdentities']
---

# MachineIdentitiesApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-identity-v1**](#create-machine-identity-v1) | **POST** `/machine-identities/v1` | Create machine identity
[**create-machine-identity-v2**](#create-machine-identity-v2) | **POST** `/machine-identities/v2` | Create machine identity
[**delete-machine-identity-v1**](#delete-machine-identity-v1) | **DELETE** `/machine-identities/v1/{id}` | Delete machine identity
[**delete-machine-identity-v2**](#delete-machine-identity-v2) | **DELETE** `/machine-identities/v2/{id}` | Delete machine identity
[**delete-ownership-correlation-config-v1**](#delete-ownership-correlation-config-v1) | **DELETE** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Delete ownership correlation config
[**get-machine-identity-v1**](#get-machine-identity-v1) | **GET** `/machine-identities/v1/{id}` | Get machine identity details
[**get-machine-identity-v2**](#get-machine-identity-v2) | **GET** `/machine-identities/v2/{id}` | Get machine identity details
[**get-ownership-correlation-config-v1**](#get-ownership-correlation-config-v1) | **GET** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Get ownership correlation config
[**list-machine-identities-v1**](#list-machine-identities-v1) | **GET** `/machine-identities/v1` | List machine identities
[**list-machine-identities-v2**](#list-machine-identities-v2) | **GET** `/machine-identities/v2` | List machine identities
[**list-machine-identity-user-entitlements-v1**](#list-machine-identity-user-entitlements-v1) | **GET** `/machine-identity-user-entitlements/v1` | List machine identity\&#39;s user entitlements
[**list-ownership-correlation-configs-v1**](#list-ownership-correlation-configs-v1) | **GET** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs` | List ownership correlation configs
[**patch-ownership-correlation-config-v1**](#patch-ownership-correlation-config-v1) | **PATCH** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Patch ownership correlation config
[**start-machine-identity-aggregation-v1**](#start-machine-identity-aggregation-v1) | **POST** `/sources/v1/{sourceId}/aggregate-agents` | Start machine identity aggregation
[**update-machine-identity-v1**](#update-machine-identity-v1) | **PATCH** `/machine-identities/v1/{id}` | Update machine identity details
[**update-machine-identity-v2**](#update-machine-identity-v2) | **PATCH** `/machine-identities/v2/{id}` | Partial update of machine identity


## create-machine-identity-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create machine identity
Use this API to create a machine identity.
The maximum supported length for the description field is 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-identity-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineidentityrequest** | `Machineidentityrequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Machineidentityresponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { Machineidentityrequest } from 'sailpoint-api-client/dist/machine_identities/api';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const machineidentityrequest: Machineidentityrequest = ; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createMachineIdentityV1({ machineidentityrequest: machineidentityrequest });
console.log(result);
```

[[Back to top]](#)

## create-machine-identity-v2
Create machine identity
Use this API to create a machine identity. Additional owners may be either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. The maximum supported length for the description field is 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-identity-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineidentityv2** | `Machineidentityv2` |  | 

### Return type

`Machineidentityv2`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { Machineidentityv2 } from 'sailpoint-api-client/dist/machine_identities/api';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const machineidentityv2: Machineidentityv2 = ; // 
const result = await apiInstance.createMachineIdentityV2({ machineidentityv2: machineidentityv2 });
console.log(result);
```

[[Back to top]](#)

## delete-machine-identity-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete machine identity
The API returns successful response if the requested machine identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Machine Identity ID
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteMachineIdentityV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-machine-identity-v2
Delete machine identity
The API returns a successful response if the requested machine identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Machine Identity ID.
const result = await apiInstance.deleteMachineIdentityV2({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-ownership-correlation-config-v1
Delete ownership correlation config
Deletes the ownership correlation config with the specified ID for the given source resource.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ownership-correlation-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**resourceId** | `string` | The source resource ID (for example, account or aws:iam-role). |  [default to undefined]
**configId** | `string` | The correlation config ID. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source ID.
const resourceId: string = aws:iam-role; // The source resource ID (for example, account or aws:iam-role).
const configId: string = f5dd23fe-3414-42b7-bb1c-869400ad7a10; // The correlation config ID.
const result = await apiInstance.deleteOwnershipCorrelationConfigV1({ sourceId: sourceId, resourceId: resourceId, configId: configId });
console.log(result);
```

[[Back to top]](#)

## get-machine-identity-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get machine identity details
This API returns a single machine identity using the Machine Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Machineidentityresponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Machine Identity ID
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getMachineIdentityV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-machine-identity-v2
Get machine identity details
This API returns a single machine identity using the Machine Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]

### Return type

`Machineidentityv2`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Machine Identity ID.
const result = await apiInstance.getMachineIdentityV2({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-ownership-correlation-config-v1
Get ownership correlation config
This end-point retrieves a single ownership correlation config by ID for the specified source resource.

[API Spec](https://developer.sailpoint.com/docs/api/get-ownership-correlation-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**resourceId** | `string` | The source resource ID (for example, account or aws:iam-role). |  [default to undefined]
**configId** | `string` | The correlation config ID. |  [default to undefined]

### Return type

`Correlationconfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source ID.
const resourceId: string = aws:iam-role; // The source resource ID (for example, account or aws:iam-role).
const configId: string = f5dd23fe-3414-42b7-bb1c-869400ad7a10; // The correlation config ID.
const result = await apiInstance.getOwnershipCorrelationConfigV1({ sourceId: sourceId, resourceId: resourceId, configId: configId });
console.log(result);
```

[[Back to top]](#)

## list-machine-identities-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine identities
This API returns a list of machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identities-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<Machineidentityresponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const filters: string = identityId eq "2c9180858082150f0180893dbaf44201"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* (optional)
const sorters: string = nativeIdentity; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listMachineIdentitiesV1({  });
console.log(result);
```

[[Back to top]](#)

## list-machine-identities-v2
List machine identities
This API returns a list of machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identities-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<Machineidentityv2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const filters: string = identityId eq "2c9180858082150f0180893dbaf44201"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in* (optional)
const sorters: string = nativeIdentity; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listMachineIdentitiesV2({  });
console.log(result);
```

[[Back to top]](#)

## list-machine-identity-user-entitlements-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine identity\'s user entitlements
This API returns a list of user entitlements associated with machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-user-entitlements-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<Machineidentityuserentitlementresponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const filters: string = machineIdentityId eq "2c9180858082150f0180893dbaf44201"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* (optional)
const sorters: string = machineIdentityName; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listMachineIdentityUserEntitlementsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-ownership-correlation-configs-v1
List ownership correlation configs
Returns the OWNER_PRIMARY and OWNER_SECONDARY correlation configs for the specified source resource, creating default rows if they are missing. Use the optional type query parameter to return a single matching config.

[API Spec](https://developer.sailpoint.com/docs/api/list-ownership-correlation-configs-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**resourceId** | `string` | The source resource ID (for example, account or aws:iam-role). |  [default to undefined]
**type** | `'OWNER_PRIMARY' | 'OWNER_SECONDARY'` | When set, filters to the given config type. | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<Correlationconfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source ID.
const resourceId: string = aws:iam-role; // The source resource ID (for example, account or aws:iam-role).
const type: string = OWNER_PRIMARY; // When set, filters to the given config type. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listOwnershipCorrelationConfigsV1({ sourceId: sourceId, resourceId: resourceId });
console.log(result);
```

[[Back to top]](#)

## patch-ownership-correlation-config-v1
Patch ownership correlation config
Selectively updates an ownership correlation config using an RFC 6902 JSONPatch payload. Only replace on /attributes (full object) and replace on /rules (full array; merge by stable rule id, remove rules omitted from the array) are allowed.

[API Spec](https://developer.sailpoint.com/docs/api/patch-ownership-correlation-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**resourceId** | `string` | The source resource ID (for example, account or aws:iam-role). |  [default to undefined]
**configId** | `string` | The correlation config ID. |  [default to undefined]
**jsonpatchoperation** | `Array<Jsonpatchoperation>` | The JSONPatch payload used to update the correlation config. | 

### Return type

`Correlationconfig`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { Jsonpatchoperation } from 'sailpoint-api-client/dist/machine_identities/api';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const sourceId: string = 2c9180835d191a86015d28455b4a2329; // The Source ID.
const resourceId: string = aws:iam-role; // The source resource ID (for example, account or aws:iam-role).
const configId: string = f5dd23fe-3414-42b7-bb1c-869400ad7a10; // The correlation config ID.
const jsonpatchoperation: Array<Jsonpatchoperation> = [{"op":"replace","path":"/attributes","value":{"syncPrimaryToMachineAccounts":true}}]; // The JSONPatch payload used to update the correlation config.
const result = await apiInstance.patchOwnershipCorrelationConfigV1({ sourceId: sourceId, resourceId: resourceId, configId: configId, jsonpatchoperation: jsonpatchoperation });
console.log(result);
```

[[Back to top]](#)

## start-machine-identity-aggregation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Start machine identity aggregation
Starts a machine identity (AI Agents) aggregation on the specified source.

[API Spec](https://developer.sailpoint.com/docs/api/start-machine-identity-aggregation-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**machineidentityaggregationrequest** | `Machineidentityaggregationrequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Machineidentityaggregationresponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { Machineidentityaggregationrequest } from 'sailpoint-api-client/dist/machine_identities/api';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const machineidentityaggregationrequest: Machineidentityaggregationrequest = ; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.startMachineIdentityAggregationV1({ sourceId: sourceId, machineidentityaggregationrequest: machineidentityaggregationrequest });
console.log(result);
```

[[Back to top]](#)

## update-machine-identity-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update machine identity details
Use this API to update machine identity details.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-identity-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]
**requestBody** | `Array<object>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Machineidentityresponse`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Machine Identity ID.
const requestBody: Array<object> = [{"op":"add","path":"/attributes/securityRisk","value":"medium"}]; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.updateMachineIdentityV1({ id: id, requestBody: requestBody });
console.log(result);
```

[[Back to top]](#)

## update-machine-identity-v2
Partial update of machine identity
Use this API to selectively update machine identity details using a JSONPatch payload.

Patchable fields include **name**, **description**, **nativeIdentity**, **subtype**, **environment**, **attributes**, **owners**, **userEntitlements**, and **manuallyEdited** only.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-identity-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]
**jsonpatchoperation** | `Array<Jsonpatchoperation>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

`Machineidentityv2`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { MachineIdentitiesApi } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';
import { Jsonpatchoperation } from 'sailpoint-api-client/dist/machine_identities/api';

const configuration = new Configuration();
const apiInstance = new MachineIdentitiesApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Machine Identity ID.
const jsonpatchoperation: Array<Jsonpatchoperation> = [{"op":"add","path":"/attributes/securityRisk","value":"medium"}]; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const result = await apiInstance.updateMachineIdentityV2({ id: id, jsonpatchoperation: jsonpatchoperation });
console.log(result);
```

[[Back to top]](#)

