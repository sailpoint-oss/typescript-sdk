---
title: CertificationCampaignsBetaApi
pagination_label: CertificationCampaignsBetaApi
sidebar_label: CertificationCampaignsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'CertificationCampaignsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'CertificationCampaignsBetaApi']
---

# CertificationCampaignsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeCampaign**](CertificationCampaignsBetaApi.md#completeCampaign) | **POST** /campaigns/{id}/complete | Complete a Campaign
[**createCampaign**](CertificationCampaignsBetaApi.md#createCampaign) | **POST** /campaigns | Create Campaign
[**createCampaignTemplate**](CertificationCampaignsBetaApi.md#createCampaignTemplate) | **POST** /campaign-templates | Create a Campaign Template
[**deleteCampaignTemplate**](CertificationCampaignsBetaApi.md#deleteCampaignTemplate) | **DELETE** /campaign-templates/{id} | Delete a Campaign Template
[**deleteCampaignTemplateSchedule**](CertificationCampaignsBetaApi.md#deleteCampaignTemplateSchedule) | **DELETE** /campaign-templates/{id}/schedule | Delete Campaign Template Schedule
[**deleteCampaigns**](CertificationCampaignsBetaApi.md#deleteCampaigns) | **POST** /campaigns/delete | Delete Campaigns
[**getActiveCampaigns**](CertificationCampaignsBetaApi.md#getActiveCampaigns) | **GET** /campaigns | List Campaigns
[**getCampaign**](CertificationCampaignsBetaApi.md#getCampaign) | **GET** /campaigns/{id} | Get Campaign
[**getCampaignReports**](CertificationCampaignsBetaApi.md#getCampaignReports) | **GET** /campaigns/{id}/reports | Get Campaign Reports
[**getCampaignReportsConfig**](CertificationCampaignsBetaApi.md#getCampaignReportsConfig) | **GET** /campaigns/reports-configuration | Get Campaign Reports Configuration
[**getCampaignTemplate**](CertificationCampaignsBetaApi.md#getCampaignTemplate) | **GET** /campaign-templates/{id} | Get a Campaign Template
[**getCampaignTemplateSchedule**](CertificationCampaignsBetaApi.md#getCampaignTemplateSchedule) | **GET** /campaign-templates/{id}/schedule | Get Campaign Template Schedule
[**getCampaignTemplates**](CertificationCampaignsBetaApi.md#getCampaignTemplates) | **GET** /campaign-templates | List Campaign Templates
[**move**](CertificationCampaignsBetaApi.md#move) | **POST** /campaigns/{id}/reassign | Reassign Certifications
[**patchCampaignTemplate**](CertificationCampaignsBetaApi.md#patchCampaignTemplate) | **PATCH** /campaign-templates/{id} | Update a Campaign Template
[**setCampaignReportsConfig**](CertificationCampaignsBetaApi.md#setCampaignReportsConfig) | **PUT** /campaigns/reports-configuration | Set Campaign Reports Configuration
[**setCampaignTemplateSchedule**](CertificationCampaignsBetaApi.md#setCampaignTemplateSchedule) | **PUT** /campaign-templates/{id}/schedule | Set Campaign Template Schedule
[**startCampaign**](CertificationCampaignsBetaApi.md#startCampaign) | **POST** /campaigns/{id}/activate | Activate a Campaign
[**startCampaignRemediationScan**](CertificationCampaignsBetaApi.md#startCampaignRemediationScan) | **POST** /campaigns/{id}/run-remediation-scan | Run Campaign Remediation Scan
[**startCampaignReport**](CertificationCampaignsBetaApi.md#startCampaignReport) | **POST** /campaigns/{id}/run-report/{type} | Run Campaign Report
[**startGenerateCampaignTemplate**](CertificationCampaignsBetaApi.md#startGenerateCampaignTemplate) | **POST** /campaign-templates/{id}/generate | Generate a Campaign from Template
[**updateCampaign**](CertificationCampaignsBetaApi.md#updateCampaign) | **PATCH** /campaigns/{id} | Update a Campaign



## completeCampaign

> object completeCampaign(id, completeCampaignOptionsBeta)

Complete a Campaign

:::caution  This endpoint will run successfully for any campaigns that are **past due**.  This endpoint will return a content error if the campaign is **not past due**.  :::  Use this API to complete a certification campaign. This functionality is provided to admins so that they can complete a certification even if all items have not been completed. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/complete-campaign).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Campaign ID. | [default to undefined]
 **completeCampaignOptionsBeta** | [**CompleteCampaignOptionsBeta**](../Models/CompleteCampaignOptionsBeta.md)| Optional. Default behavior is for the campaign to auto-approve upon completion, unless autoCompleteAction&#x3D;REVOKE | [optional] 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // Campaign ID.
const completeCampaignOptionsBeta = ; // CompleteCampaignOptionsBeta | Optional. Default behavior is for the campaign to auto-approve upon completion, unless autoCompleteAction=REVOKE
const val = await certificationCampaignsBetaApi.completeCampaign(id, completeCampaignOptionsBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## createCampaign

> CampaignBeta createCampaign(campaignBeta)

Create Campaign

Use this API to create a certification campaign with the information provided in the request body. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/create-campaign).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignBeta** | [**CampaignBeta**](../Models/CampaignBeta.md)|  | 

### Return type

[**CampaignBeta**](../Models/CampaignBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi, CampaignBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const campaignBeta : CampaignBeta = ; // 
const val = await certificationCampaignsBetaApi.createCampaign(campaignBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## createCampaignTemplate

> CampaignTemplateBeta createCampaignTemplate(campaignTemplateBeta)

Create a Campaign Template

Use this API to create a campaign template based on campaign. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/create-campaign-template).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignTemplateBeta** | [**CampaignTemplateBeta**](../Models/CampaignTemplateBeta.md)|  | 

### Return type

[**CampaignTemplateBeta**](../Models/CampaignTemplateBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi, CampaignTemplateBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const campaignTemplateBeta : CampaignTemplateBeta = ; // 
const val = await certificationCampaignsBetaApi.createCampaignTemplate(campaignTemplateBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteCampaignTemplate

> deleteCampaignTemplate(id)

Delete a Campaign Template

Use this API to delete a certification campaign template by ID. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/delete-campaign-template).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the campaign template being deleted. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "2c9180835d191a86015d28455b4a2329"; // ID of the campaign template being deleted.
const val = await certificationCampaignsBetaApi.deleteCampaignTemplate(id);
console.log('API called successfully.');
```
</details>


## deleteCampaignTemplateSchedule

> deleteCampaignTemplateSchedule(id)

Delete Campaign Template Schedule

Use this API to delete the schedule for a certification campaign template. The API returns a 404 if there is no schedule set. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/delete-campaign-template-schedule).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the campaign template whose schedule is being deleted. | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "04bedce387bd47b2ae1f86eb0bb36dee"; // ID of the campaign template whose schedule is being deleted.
const val = await certificationCampaignsBetaApi.deleteCampaignTemplateSchedule(id);
console.log('API called successfully.');
```
</details>


## deleteCampaigns

> object deleteCampaigns(deleteCampaignsRequestBeta)

Delete Campaigns

Use this API to delete certification campaigns whose IDs are specified in the provided list of campaign IDs. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/delete-campaigns).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteCampaignsRequestBeta** | [**DeleteCampaignsRequestBeta**](../Models/DeleteCampaignsRequestBeta.md)| IDs of the campaigns to delete. | 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi, DeleteCampaignsRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const deleteCampaignsRequestBeta : DeleteCampaignsRequestBeta = ; // IDs of the campaigns to delete.
const val = await certificationCampaignsBetaApi.deleteCampaigns(deleteCampaignsRequestBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getActiveCampaigns

> Array&lt;GetActiveCampaigns200ResponseInnerBeta&gt; getActiveCampaigns(detail, limit, offset, count, filters, sorters)

List Campaigns

Use this API to get a list of campaigns. The API can provide increased level of detail for each campaign for the correct provided query. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-active-campaigns).  A token with ORG_ADMIN, CERT_ADMIN or REPORT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detail** | **&#39;SLIM&#39; | &#39;FULL&#39;**| Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior. | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **status**: *eq, in* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created** | [optional] [default to undefined]

### Return type

[**Array&lt;GetActiveCampaigns200ResponseInnerBeta&gt;**](../Models/GetActiveCampaigns200ResponseInnerBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const detail = "FULL", // 'SLIM' | 'FULL' | Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior.
  limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "name eq "Manager Campaign"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **status**: *eq, in*
  sorters = "name"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created**
const val = await certificationCampaignsBetaApi.getActiveCampaigns(detail, limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getCampaign

> SlimcampaignBeta getCampaign(id)

Get Campaign

Use this API to get information for an existing certification campaign by the campaign\'s ID. Though this endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-campaign).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the campaign to be retrieved. | [default to undefined]

### Return type

[**SlimcampaignBeta**](../Models/SlimcampaignBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "2c91808571bcfcf80171c23e4b4221fc"; // ID of the campaign to be retrieved.
const val = await certificationCampaignsBetaApi.getCampaign(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getCampaignReports

> Array&lt;CampaignReportBeta&gt; getCampaignReports(id)

Get Campaign Reports

Use this API to fetch all reports for a certification campaign by campaign ID. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-campaign-reports).  A token with ORG_ADMIN, CERT_ADMIN or REPORT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the campaign whose reports are being fetched. | [default to undefined]

### Return type

[**Array&lt;CampaignReportBeta&gt;**](../Models/CampaignReportBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "2c91808571bcfcf80171c23e4b4221fc"; // ID of the campaign whose reports are being fetched.
const val = await certificationCampaignsBetaApi.getCampaignReports(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getCampaignReportsConfig

> CampaignReportsConfigBeta getCampaignReportsConfig()

Get Campaign Reports Configuration

Use this API to fetch the configuration for certification campaign reports. The configuration includes only one element - identity attributes defined as custom report columns. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-campaign-reports-config).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters

This endpoint does not need any parameter.

### Return type

[**CampaignReportsConfigBeta**](../Models/CampaignReportsConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const val = await certificationCampaignsBetaApi.getCampaignReportsConfig();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getCampaignTemplate

> CampaignTemplateBeta getCampaignTemplate(id)

Get a Campaign Template

Use this API to fetch a certification campaign template by ID. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-campaign-template).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Requested campaign template\&#39;s ID. | [default to undefined]

### Return type

[**CampaignTemplateBeta**](../Models/CampaignTemplateBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "2c9180835d191a86015d28455b4a2329"; // Requested campaign template\'s ID.
const val = await certificationCampaignsBetaApi.getCampaignTemplate(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getCampaignTemplateSchedule

> ScheduleBeta getCampaignTemplateSchedule(id)

Get Campaign Template Schedule

Use this API to get the schedule for a certification campaign template. The API returns a 404 if there is no schedule set. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/get-campaign-template-schedule).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the campaign template whose schedule is being fetched. | [default to undefined]

### Return type

[**ScheduleBeta**](../Models/ScheduleBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "04bedce387bd47b2ae1f86eb0bb36dee"; // ID of the campaign template whose schedule is being fetched.
const val = await certificationCampaignsBetaApi.getCampaignTemplateSchedule(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getCampaignTemplates

> Array&lt;CampaignTemplateBeta&gt; getCampaignTemplates(limit, offset, count, sorters, filters)

List Campaign Templates

Use this API to get a list of all campaign templates. Scope can be reduced through standard V3 query params. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/list-campaign-templates).  The endpoint returns all campaign templates matching the query parameters.  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw* | [optional] [default to undefined]

### Return type

[**Array&lt;CampaignTemplateBeta&gt;**](../Models/CampaignTemplateBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  sorters = "name", // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  filters = "name eq "manager template""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, ge, gt, in, le, lt, ne, sw*  **id**: *eq, ge, gt, in, le, lt, ne, sw*
const val = await certificationCampaignsBetaApi.getCampaignTemplates(limit, offset, count, sorters, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## move

> CertificationTaskBeta move(id, adminReviewReassignBeta)

Reassign Certifications

This API reassigns the specified certifications from one identity to another.  Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/move).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The certification campaign ID | [default to undefined]
 **adminReviewReassignBeta** | [**AdminReviewReassignBeta**](../Models/AdminReviewReassignBeta.md)|  | 

### Return type

[**CertificationTaskBeta**](../Models/CertificationTaskBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi, AdminReviewReassignBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // The certification campaign ID
const adminReviewReassignBeta : AdminReviewReassignBeta = ; // 
const val = await certificationCampaignsBetaApi.move(id, adminReviewReassignBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## patchCampaignTemplate

> CampaignTemplateBeta patchCampaignTemplate(id, jsonPatchOperationBeta)

Update a Campaign Template

Use this API to update individual fields on a certification campaign template, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/patch-campaign-template).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the campaign template being modified. | [default to undefined]
 **jsonPatchOperationBeta** | [**Array&lt;JsonPatchOperationBeta&gt;**](../Models/JsonPatchOperationBeta.md)| A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create)  | 

### Return type

[**CampaignTemplateBeta**](../Models/CampaignTemplateBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi, JsonPatchOperationBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "2c9180835d191a86015d28455b4a2329"; // ID of the campaign template being modified.
const jsonPatchOperationBeta : Array<JsonPatchOperationBeta> = [{op=replace, path=/description, value=Updated description!}, {op=replace, path=/campaign/filter/id, value=ff80818155fe8c080155fe8d925b0316}]; // A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * deadlineDuration * campaign (all fields that are allowed during create) 
const val = await certificationCampaignsBetaApi.patchCampaignTemplate(id, jsonPatchOperationBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## setCampaignReportsConfig

> CampaignReportsConfigBeta setCampaignReportsConfig(campaignReportsConfigBeta)

Set Campaign Reports Configuration

Use this API to overwrite the configuration for campaign reports. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/set-campaign-reports-config).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignReportsConfigBeta** | [**CampaignReportsConfigBeta**](../Models/CampaignReportsConfigBeta.md)| Campaign report configuration. | 

### Return type

[**CampaignReportsConfigBeta**](../Models/CampaignReportsConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi, CampaignReportsConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const campaignReportsConfigBeta : CampaignReportsConfigBeta = ; // Campaign report configuration.
const val = await certificationCampaignsBetaApi.setCampaignReportsConfig(campaignReportsConfigBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## setCampaignTemplateSchedule

> setCampaignTemplateSchedule(id, scheduleBeta)

Set Campaign Template Schedule

Use this API to set the schedule for a certification campaign template. If a schedule already exists, the API overwrites it with the new one.  Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/set-campaign-template-schedule).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the campaign template being scheduled. | [default to undefined]
 **scheduleBeta** | [**ScheduleBeta**](../Models/ScheduleBeta.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "04bedce387bd47b2ae1f86eb0bb36dee"; // ID of the campaign template being scheduled.
const scheduleBeta = {type=MONTHLY, hours={type=LIST, values=[17]}, days={type=LIST, values=[15]}}; // ScheduleBeta | 
const val = await certificationCampaignsBetaApi.setCampaignTemplateSchedule(id, scheduleBeta);
console.log('API called successfully.');
```
</details>


## startCampaign

> object startCampaign(id, activateCampaignOptionsBeta)

Activate a Campaign

Use this API to submit a job to activate the certified campaign with the specified ID. The campaign must be staged. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/start-campaign).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Campaign ID. | [default to undefined]
 **activateCampaignOptionsBeta** | [**ActivateCampaignOptionsBeta**](../Models/ActivateCampaignOptionsBeta.md)| Optional. If no timezone is specified, the standard UTC timezone is used (i.e. UTC+00:00). Although this can take any timezone, the intended value is the caller\&#39;s timezone. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format. | [optional] 

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "ef38f94347e94562b5bb8424a56397d8"; // Campaign ID.
const activateCampaignOptionsBeta = ; // ActivateCampaignOptionsBeta | Optional. If no timezone is specified, the standard UTC timezone is used (i.e. UTC+00:00). Although this can take any timezone, the intended value is the caller\'s timezone. The activation time calculated from the given timezone may cause the campaign deadline time to be modified, but it will remain within the original date. The timezone must be in a valid ISO 8601 format.
const val = await certificationCampaignsBetaApi.startCampaign(id, activateCampaignOptionsBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## startCampaignRemediationScan

> object startCampaignRemediationScan(id)

Run Campaign Remediation Scan

Use this API to run a remediation scan task for a certification campaign. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/start-campaign-remediation-scan).  A token with ORG_ADMIN, CERT_ADMIN or REPORT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the campaign the remediation scan is being run for. | [default to undefined]

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "2c91808571bcfcf80171c23e4b4221fc"; // ID of the campaign the remediation scan is being run for.
const val = await certificationCampaignsBetaApi.startCampaignRemediationScan(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## startCampaignReport

> object startCampaignReport(id, type)

Run Campaign Report

Use this API to run a report for a certification campaign. Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/start-campaign-report).  A token with ORG_ADMIN, CERT_ADMIN or REPORT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the campaign the report is being run for. | [default to undefined]
 **type** | [**ReportTypeBeta**](../Models/.md)| Type of report to run. | [default to undefined]

### Return type

**object**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi,  } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "2c91808571bcfcf80171c23e4b4221fc"; // ID of the campaign the report is being run for.
const type : ReportTypeBeta = ; // Type of report to run.
const val = await certificationCampaignsBetaApi.startCampaignReport(id, type);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## startGenerateCampaignTemplate

> CampaignReferenceBeta startGenerateCampaignTemplate(id)

Generate a Campaign from Template

Use this API to generate a new certification campaign from a campaign template.  The campaign object contained in the template has special formatting applied to its name and description fields that determine the generated campaign\'s name/description. Placeholders in those fields are formatted with the current date and time upon generation.  Placeholders consist of a percent sign followed by a letter indicating what should be inserted. For example, \"%Y\" inserts the current year, and a campaign template named \"Campaign for %y\" generates a campaign called \"Campaign for 2020\" (assuming the year at generation time is 2020).  Valid placeholders are the date/time conversion suffix characters supported by [java.util.Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html).  Though this Beta endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/start-generate-campaign-template).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the campaign template to use for generation. | [default to undefined]

### Return type

[**CampaignReferenceBeta**](../Models/CampaignReferenceBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "2c9180835d191a86015d28455b4a2329"; // ID of the campaign template to use for generation.
const val = await certificationCampaignsBetaApi.startGenerateCampaignTemplate(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## updateCampaign

> SlimcampaignBeta updateCampaign(id, requestBody)

Update a Campaign

Use this API to update individual fields on a certification campaign, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Though this endpoint has been deprecated, you can find its V3 equivalent [here](https://developer.sailpoint.com/docs/api/v3/update-campaign).  A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| ID of the campaign template being modified. | [default to undefined]
 **requestBody** | [**Array&lt;object&gt;**](../Models/object.md)| A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline  | 

### Return type

[**SlimcampaignBeta**](../Models/SlimcampaignBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, CertificationCampaignsBetaApi, object } from "sailpoint-api-client";
const apiConfig = new Configuration();
const certificationCampaignsBetaApi = new CertificationCampaignsBetaApi(apiConfig);
const id : string = "2c91808571bcfcf80171c23e4b4221fc"; // ID of the campaign template being modified.
const requestBody : Array<object> = [{op=replace, path=/name, value=This field has been updated!}, {op=copy, from=/name, path=/description}]; // A list of campaign update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The fields that can be patched differ based on the status of the campaign.  When the campaign is in the *STAGED* status, you can patch these fields: * name * description * recommendationsEnabled * deadline * emailNotificationEnabled * autoRevokeAllowed  When the campaign is in the *ACTIVE* status, you can patch these fields: * deadline 
const val = await certificationCampaignsBetaApi.updateCampaign(id, requestBody);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>

