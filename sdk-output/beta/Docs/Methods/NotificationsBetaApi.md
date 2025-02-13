---
title: NotificationsBetaApi
pagination_label: NotificationsBetaApi
sidebar_label: NotificationsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'NotificationsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'NotificationsBetaApi']
---

# NotificationsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDomainDkim**](NotificationsBetaApi.md#createDomainDkim) | **POST** /verified-domains | Verify domain address via DKIM
[**createNotificationTemplate**](NotificationsBetaApi.md#createNotificationTemplate) | **POST** /notification-templates | Create Notification Template
[**createVerifiedFromAddress**](NotificationsBetaApi.md#createVerifiedFromAddress) | **POST** /verified-from-addresses | Create Verified From Address
[**deleteNotificationTemplatesInBulk**](NotificationsBetaApi.md#deleteNotificationTemplatesInBulk) | **POST** /notification-templates/bulk-delete | Bulk Delete Notification Templates
[**deleteVerifiedFromAddress**](NotificationsBetaApi.md#deleteVerifiedFromAddress) | **DELETE** /verified-from-addresses/{id} | Delete Verified From Address
[**getDkimAttributes**](NotificationsBetaApi.md#getDkimAttributes) | **GET** /verified-domains | Get DKIM Attributes
[**getMailFromAttributes**](NotificationsBetaApi.md#getMailFromAttributes) | **GET** /mail-from-attributes/{identity} | Get MAIL FROM Attributes
[**getNotificationTemplate**](NotificationsBetaApi.md#getNotificationTemplate) | **GET** /notification-templates/{id} | Get Notification Template By Id
[**getNotificationsTemplateContext**](NotificationsBetaApi.md#getNotificationsTemplateContext) | **GET** /notification-template-context | Get Notification Template Context
[**listFromAddresses**](NotificationsBetaApi.md#listFromAddresses) | **GET** /verified-from-addresses | List From Addresses
[**listNotificationPreferences**](NotificationsBetaApi.md#listNotificationPreferences) | **GET** /notification-preferences/{key} | List Notification Preferences for tenant.
[**listNotificationTemplateDefaults**](NotificationsBetaApi.md#listNotificationTemplateDefaults) | **GET** /notification-template-defaults | List Notification Template Defaults
[**listNotificationTemplates**](NotificationsBetaApi.md#listNotificationTemplates) | **GET** /notification-templates | List Notification Templates
[**putMailFromAttributes**](NotificationsBetaApi.md#putMailFromAttributes) | **PUT** /mail-from-attributes | Change MAIL FROM domain
[**sendTestNotification**](NotificationsBetaApi.md#sendTestNotification) | **POST** /send-test-notification | Send Test Notification



## createDomainDkim

> DomainStatusDtoBeta createDomainDkim(domainAddressBeta)

Verify domain address via DKIM

Create a domain to be verified via DKIM (DomainKeys Identified Mail)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainAddressBeta** | [**DomainAddressBeta**](../Models/DomainAddressBeta.md)|  | 

### Return type

[**DomainStatusDtoBeta**](../Models/DomainStatusDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi, DomainAddressBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const domainAddressBeta : DomainAddressBeta = ; // 
const val = await notificationsBetaApi.createDomainDkim(domainAddressBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## createNotificationTemplate

> TemplateDtoBeta createNotificationTemplate(templateDtoBeta)

Create Notification Template

This creates a template for your site.   You can also use this endpoint to update a template.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/idn/api/beta/get-notification-template) for a template you wish to update and paste it into the request body for this endpoint.   Modify the fields you want to change and submit the POST request when ready.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateDtoBeta** | [**TemplateDtoBeta**](../Models/TemplateDtoBeta.md)|  | 

### Return type

[**TemplateDtoBeta**](../Models/TemplateDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi, TemplateDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const templateDtoBeta : TemplateDtoBeta = ; // 
const val = await notificationsBetaApi.createNotificationTemplate(templateDtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## createVerifiedFromAddress

> EmailStatusDtoBeta createVerifiedFromAddress(emailStatusDtoBeta)

Create Verified From Address

Create a new sender email address and initiate verification process.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailStatusDtoBeta** | [**EmailStatusDtoBeta**](../Models/EmailStatusDtoBeta.md)|  | 

### Return type

[**EmailStatusDtoBeta**](../Models/EmailStatusDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi, EmailStatusDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const emailStatusDtoBeta : EmailStatusDtoBeta = {email=sender@example.com}; // 
const val = await notificationsBetaApi.createVerifiedFromAddress(emailStatusDtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## deleteNotificationTemplatesInBulk

> deleteNotificationTemplatesInBulk(templateBulkDeleteDtoBeta)

Bulk Delete Notification Templates

This lets you bulk delete templates that you previously created for your site. Since this is a beta feature, please contact support to enable usage.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateBulkDeleteDtoBeta** | [**Array&lt;TemplateBulkDeleteDtoBeta&gt;**](../Models/TemplateBulkDeleteDtoBeta.md)|  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi, TemplateBulkDeleteDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const templateBulkDeleteDtoBeta : Array<TemplateBulkDeleteDtoBeta> = ; // 
const val = await notificationsBetaApi.deleteNotificationTemplatesInBulk(templateBulkDeleteDtoBeta);
console.log('API called successfully.');
```
</details>


## deleteVerifiedFromAddress

> deleteVerifiedFromAddress(id)

Delete Verified From Address

Delete a verified sender email address

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**|  | [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const id : string = "id_example"; // 
const val = await notificationsBetaApi.deleteVerifiedFromAddress(id);
console.log('API called successfully.');
```
</details>


## getDkimAttributes

> Array&lt;DkimAttributesBeta&gt; getDkimAttributes()

Get DKIM Attributes

Retrieve DKIM (DomainKeys Identified Mail) attributes for all your tenants\' AWS SES identities. Limits retrieval to 100 identities per call.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;DkimAttributesBeta&gt;**](../Models/DkimAttributesBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const val = await notificationsBetaApi.getDkimAttributes();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getMailFromAttributes

> MailFromAttributesBeta getMailFromAttributes(id)

Get MAIL FROM Attributes

Retrieve MAIL FROM attributes for a given AWS SES identity.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status | [default to undefined]

### Return type

[**MailFromAttributesBeta**](../Models/MailFromAttributesBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const id : string = "bobsmith@sailpoint.com"; // Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status
const val = await notificationsBetaApi.getMailFromAttributes(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getNotificationTemplate

> Array&lt;TemplateDtoBeta&gt; getNotificationTemplate(id)

Get Notification Template By Id

This gets a template that you have modified for your site by Id.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Id of the Notification Template | [default to undefined]

### Return type

[**Array&lt;TemplateDtoBeta&gt;**](../Models/TemplateDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Id of the Notification Template
const val = await notificationsBetaApi.getNotificationTemplate(id);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## getNotificationsTemplateContext

> NotificationTemplateContextBeta getNotificationsTemplateContext()

Get Notification Template Context

The notification service maintains metadata to construct the notification templates or supply any information during the event propagation. The data-store where this information is retrieved is called \"Global Context\" (a.k.a. notification template context). It defines a set of attributes  that will be available per tenant (organization).

### Parameters

This endpoint does not need any parameter.

### Return type

[**NotificationTemplateContextBeta**](../Models/NotificationTemplateContextBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const val = await notificationsBetaApi.getNotificationsTemplateContext();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listFromAddresses

> Array&lt;EmailStatusDtoBeta&gt; listFromAddresses(limit, offset, count, filters, sorters)

List From Addresses

Retrieve a list of sender email addresses and their verification statuses

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, sw* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** | [optional] [default to undefined]

### Return type

[**Array&lt;EmailStatusDtoBeta&gt;**](../Models/EmailStatusDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  count = true, // boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "email eq "john.doe@company.com"", // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, sw*
  sorters = "email"; // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email**
const val = await notificationsBetaApi.listFromAddresses(limit, offset, count, filters, sorters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listNotificationPreferences

> Array&lt;PreferencesDtoBeta&gt; listNotificationPreferences()

List Notification Preferences for tenant.

Returns a list of notification preferences for tenant.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;PreferencesDtoBeta&gt;**](../Models/PreferencesDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const val = await notificationsBetaApi.listNotificationPreferences();
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listNotificationTemplateDefaults

> Array&lt;TemplateDtoDefaultBeta&gt; listNotificationTemplateDefaults(limit, offset, filters)

List Notification Template Defaults

This lists the default templates used for notifications, such as emails from IdentityNow.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* | [optional] [default to undefined]

### Return type

[**Array&lt;TemplateDtoDefaultBeta&gt;**](../Models/TemplateDtoDefaultBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "key eq "cloud_manual_work_item_summary""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw*
const val = await notificationsBetaApi.listNotificationTemplateDefaults(limit, offset, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## listNotificationTemplates

> Array&lt;TemplateDtoBeta&gt; listNotificationTemplates(limit, offset, filters)

List Notification Templates

This lists the templates that you have modified for your site.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* | [optional] [default to undefined]

### Return type

[**Array&lt;TemplateDtoBeta&gt;**](../Models/TemplateDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const limit = 250, // number | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  offset = 0, // number | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  filters = "medium eq "EMAIL""; // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw*
const val = await notificationsBetaApi.listNotificationTemplates(limit, offset, filters);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## putMailFromAttributes

> MailFromAttributesBeta putMailFromAttributes(mailFromAttributesDtoBeta)

Change MAIL FROM domain

Change the MAIL FROM domain of an AWS SES email identity and provide the MX and TXT records to be placed in the caller\'s DNS

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailFromAttributesDtoBeta** | [**MailFromAttributesDtoBeta**](../Models/MailFromAttributesDtoBeta.md)|  | 

### Return type

[**MailFromAttributesBeta**](../Models/MailFromAttributesBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi, MailFromAttributesDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const mailFromAttributesDtoBeta : MailFromAttributesDtoBeta = {identity=BobSmith@sailpoint.com, mailFromDomain=example.sailpoint.com}; // 
const val = await notificationsBetaApi.putMailFromAttributes(mailFromAttributesDtoBeta);
console.log('API called successfully. Returned data: ' + val.data);
```
</details>


## sendTestNotification

> sendTestNotification(sendTestNotificationRequestDtoBeta)

Send Test Notification

Send a Test Notification

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendTestNotificationRequestDtoBeta** | [**SendTestNotificationRequestDtoBeta**](../Models/SendTestNotificationRequestDtoBeta.md)|  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, NotificationsBetaApi, SendTestNotificationRequestDtoBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const notificationsBetaApi = new NotificationsBetaApi(apiConfig);
const sendTestNotificationRequestDtoBeta : SendTestNotificationRequestDtoBeta = {key=cloud_manual_work_item_summary, medium=EMAIL, context={numberOfPendingTasks=4, ownerId=201327fda1c44704ac01181e963d463c}}; // 
const val = await notificationsBetaApi.sendTestNotification(sendTestNotificationRequestDtoBeta);
console.log('API called successfully.');
```
</details>

