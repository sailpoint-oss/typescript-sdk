---
title: SPConfigBetaApi
pagination_label: SPConfigBetaApi
sidebar_label: SPConfigBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'SPConfigBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'SPConfigBetaApi']
---

# SPConfigBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportSpConfig**](SPConfigBetaApi.md#exportSpConfig) | **POST** /sp-config/export | Initiates configuration objects export job
[**getSpConfigExport**](SPConfigBetaApi.md#getSpConfigExport) | **GET** /sp-config/export/{id}/download | Download export job result.
[**getSpConfigExportStatus**](SPConfigBetaApi.md#getSpConfigExportStatus) | **GET** /sp-config/export/{id} | Get export job status
[**getSpConfigImport**](SPConfigBetaApi.md#getSpConfigImport) | **GET** /sp-config/import/{id}/download | Download import job result
[**getSpConfigImportStatus**](SPConfigBetaApi.md#getSpConfigImportStatus) | **GET** /sp-config/import/{id} | Get import job status
[**importSpConfig**](SPConfigBetaApi.md#importSpConfig) | **POST** /sp-config/import | Initiates configuration objects import job
[**listSpConfigObjects**](SPConfigBetaApi.md#listSpConfigObjects) | **GET** /sp-config/config-objects | Get config object details



## exportSpConfig

> SpConfigExportJobBeta exportSpConfig(exportPayloadBeta)

Initiates configuration objects export job

This post will export objects from the tenant to a JSON configuration file. For more information about the object types that currently support export functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportPayloadBeta** | [**ExportPayloadBeta**](../Models/ExportPayloadBeta.md)| Export options control what will be included in the export. | 

### Return type

[**SpConfigExportJobBeta**](../Models/SpConfigExportJobBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SPConfigBetaApi, ExportPayloadBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sPConfigBetaApi = new SPConfigBetaApi(apiConfig);
const exportPayloadBeta : ExportPayloadBeta = {description=Export all available objects, excludeTypes=[], includeTypes=[ACCESS_PROFILE, ACCESS_REQUEST_CONFIG, ATTR_SYNC_SOURCE_CONFIG, AUTH_ORG, CAMPAIGN_FILTER, FORM_DEFINITION, GOVERNANCE_GROUP, IDENTITY_OBJECT_CONFIG, IDENTITY_PROFILE, LIFECYCLE_STATE, NOTIFICATION_TEMPLATE, PASSWORD_POLICY, PASSWORD_SYNC_GROUP, PUBLIC_IDENTITIES_CONFIG, ROLE, RULE, SEGMENT, SERVICE_DESK_INTEGRATION, SOD_POLICY, SOURCE, TAG, TRANSFORM, TRIGGER_SUBSCRIPTION, WORKFLOW], objectOptions={}}; // Export options control what will be included in the export.
const val = await sPConfigBetaApi.exportSpConfig(exportPayloadBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSpConfigExport

> SpConfigExportResultsBeta getSpConfigExport(id)

Download export job result.

This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file. The request will need one of the following security scopes: - sp:config:read - sp:config:manage

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the export job whose results will be downloaded. | [default to undefined]

### Return type

[**SpConfigExportResultsBeta**](../Models/SpConfigExportResultsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SPConfigBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sPConfigBetaApi = new SPConfigBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the export job whose results will be downloaded.
const val = await sPConfigBetaApi.getSpConfigExport(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSpConfigExportStatus

> SpConfigExportJobStatusBeta getSpConfigExportStatus(id)

Get export job status

This gets the status of the export job identified by the `id` parameter. The request will need one of the following security scopes: - sp:config:read - sp:config:manage

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the export job whose status will be returned. | [default to undefined]

### Return type

[**SpConfigExportJobStatusBeta**](../Models/SpConfigExportJobStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SPConfigBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sPConfigBetaApi = new SPConfigBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the export job whose status will be returned.
const val = await sPConfigBetaApi.getSpConfigExportStatus(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSpConfigImport

> SpConfigImportResultsBeta getSpConfigImport(id)

Download import job result

This gets import file resulting from the import job with the requested id and downloads it to a file. The downloaded file will contain the results of the import operation, including any error, warning or informational messages associated with the import. The request will need the following security scope: - sp:config:manage

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the import job whose results will be downloaded. | [default to undefined]

### Return type

[**SpConfigImportResultsBeta**](../Models/SpConfigImportResultsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SPConfigBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sPConfigBetaApi = new SPConfigBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the import job whose results will be downloaded.
const val = await sPConfigBetaApi.getSpConfigImport(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getSpConfigImportStatus

> SpConfigImportJobStatusBeta getSpConfigImportStatus(id)

Get import job status

This gets the status of the import job identified by the `id` parameter. For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The ID of the import job whose status will be returned. | [default to undefined]

### Return type

[**SpConfigImportJobStatusBeta**](../Models/SpConfigImportJobStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SPConfigBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sPConfigBetaApi = new SPConfigBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The ID of the import job whose status will be returned.
const val = await sPConfigBetaApi.getSpConfigImportStatus(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## importSpConfig

> SpConfigJobBeta importSpConfig(data, preview, _options)

Initiates configuration objects import job

This post will import objects from a JSON configuration file into a tenant. By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted. The backup is provided so that the state of the configuration prior to the import is available for inspection or restore if needed. The backup can be skipped by setting \"excludeBackup\" to true in the import options. If a backup is performed, the id of the backup will be provided in the ImportResult as the \"exportJobId\". This can be downloaded  using the `/sp-config/export/{exportJobId}/download` endpoint.  You cannot currently import from the Non-Employee Lifecycle Management (NELM) source. You cannot use this endpoint to back up or store NELM data.   For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects). 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **File**| JSON file containing the objects to be imported. | [default to undefined]
 **preview** | **boolean**| This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \&quot;true\&quot;, no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  | [optional] [default to false]
 **_options** | [**ImportOptionsBeta**](../Models/ImportOptionsBeta.md)|  | [optional] [default to undefined]

### Return type

[**SpConfigJobBeta**](../Models/SpConfigJobBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SPConfigBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sPConfigBetaApi = new SPConfigBetaApi(apiConfig);
const data : File = BINARY_DATA_HERE; // JSON file containing the objects to be imported.
const preview = true, // boolean | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported. 
  _options = ; // ImportOptionsBeta | 
const val = await sPConfigBetaApi.importSpConfig(data, preview, _options);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listSpConfigObjects

> Array&lt;SpConfigObjectBeta&gt; listSpConfigObjects()

Get config object details

This gets the list of object configurations which are known to the tenant export/import service. Object configurations that contain \"importUrl\" and \"exportUrl\" are available for export/import.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;SpConfigObjectBeta&gt;**](../Models/SpConfigObjectBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, SPConfigBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const sPConfigBetaApi = new SPConfigBetaApi(apiConfig);
const val = await sPConfigBetaApi.listSpConfigObjects();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

