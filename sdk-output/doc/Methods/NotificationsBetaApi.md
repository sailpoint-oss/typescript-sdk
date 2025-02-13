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
[**getMailFromAttributes**](NotificationsBetaApi.md#getMailFromAttributes) | **GET** /mail-from-attributes/{identityId} | Get MAIL FROM Attributes
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

{
  "domain" : "sailpoint.com",
  "dkimEnabled" : true,
  "dkimTokens" : [ "token1", "token2", "token3" ],
  "id" : "123b45b0-aaaa-bbbb-a7db-123456a56abc",
  "dkimVerificationStatus" : "PENDING"
}


const domainAddressBeta : DomainAddressBeta = 

try {
    const val = await notificationsBetaApi.createDomainDkim(domainAddressBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.createDomainDkim(domainAddressBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "slackTemplate" : "slackTemplate",
  "footer" : "footer",
  "teamsTemplate" : "teamsTemplate",
  "subject" : "You have $numberOfPendingTasks $taskTasks to complete in ${__global.productName}.",
  "created" : "2020-01-01T00:00:00Z",
  "description" : "Daily digest - sent if number of outstanding tasks for task owner > 0",
  "medium" : "EMAIL",
  "locale" : "en",
  "body" : "Please go to the task manager",
  "name" : "Task Manager Subscription",
  "replyTo" : "$__global.emailFromAddress",
  "header" : "header",
  "modified" : "2020-01-01T00:00:00Z",
  "from" : "$__global.emailFromAddress",
  "id" : "c17bea3a-574d-453c-9e04-4365fbf5af0b",
  "key" : "cloud_manual_work_item_summary"
}


const templateDtoBeta : TemplateDtoBeta = 

try {
    const val = await notificationsBetaApi.createNotificationTemplate(templateDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.createNotificationTemplate(templateDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "isVerifiedByDomain" : false,
  "verificationStatus" : "PENDING",
  "id" : "id",
  "email" : "sender@example.com"
}


const emailStatusDtoBeta : EmailStatusDtoBeta = 

try {
    const val = await notificationsBetaApi.createVerifiedFromAddress(emailStatusDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.createVerifiedFromAddress(emailStatusDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "causes" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "messages" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "detailCode" : "400.1 Bad Request Content",
  "trackingId" : "e7eab60924f64aa284175b9fa3309599"
}


const templateBulkDeleteDtoBeta : Array<TemplateBulkDeleteDtoBeta> = ; // 

try {
    const val = await notificationsBetaApi.deleteNotificationTemplatesInBulk(templateBulkDeleteDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.deleteNotificationTemplatesInBulk(templateBulkDeleteDtoBeta);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "causes" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "messages" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "detailCode" : "400.1 Bad Request Content",
  "trackingId" : "e7eab60924f64aa284175b9fa3309599"
}


const id : string = "id_example"; //  (default to undefined)

try {
    const val = await notificationsBetaApi.deleteVerifiedFromAddress(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.deleteVerifiedFromAddress(id);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "address" : "BobSmith@sailpoint.com",
  "dkimEnabled" : true,
  "dkimTokens" : [ "uq1m3jjk25ckd3whl4n7y46c56r5l6aq", "u7pm38jky9ckdawhlsn7y4dcj6f5lpgq", "uhpm3jjkjjckdkwhlqn7yw6cjer5tpay" ],
  "id" : "123b45b0-aaaa-bbbb-a7db-123456a56abc",
  "dkimVerificationStatus" : "Success"
}, {
  "address" : "BobSmith@sailpoint.com",
  "dkimEnabled" : true,
  "dkimTokens" : [ "uq1m3jjk25ckd3whl4n7y46c56r5l6aq", "u7pm38jky9ckdawhlsn7y4dcj6f5lpgq", "uhpm3jjkjjckdkwhlqn7yw6cjer5tpay" ],
  "id" : "123b45b0-aaaa-bbbb-a7db-123456a56abc",
  "dkimVerificationStatus" : "Success"
} ]



try {
    const val = await notificationsBetaApi.getDkimAttributes();
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.getDkimAttributes();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getMailFromAttributes

> MailFromAttributesBeta getMailFromAttributes(identityId)

Get MAIL FROM Attributes

Retrieve MAIL FROM attributes for a given AWS SES identity.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string**| Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status | [default to undefined]

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

{
  "identity" : "bob.smith@sailpoint.com",
  "mailFromDomain" : "foo.sailpoint.com",
  "mxRecord" : "10 feedback-smtp.us-east-1.amazonses.com",
  "txtRecord" : "v=spf1 include:amazonses.com ~all",
  "mailFromDomainStatus" : "PENDING"
}


const identityId : string = "bobsmith@sailpoint.com"; // Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status (default to undefined)

try {
    const val = await notificationsBetaApi.getMailFromAttributes(identityId);
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.getMailFromAttributes(identityId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "slackTemplate" : "slackTemplate",
  "footer" : "footer",
  "teamsTemplate" : "teamsTemplate",
  "subject" : "You have $numberOfPendingTasks $taskTasks to complete in ${__global.productName}.",
  "created" : "2020-01-01T00:00:00Z",
  "description" : "Daily digest - sent if number of outstanding tasks for task owner > 0",
  "medium" : "EMAIL",
  "locale" : "en",
  "body" : "Please go to the task manager",
  "name" : "Task Manager Subscription",
  "replyTo" : "$__global.emailFromAddress",
  "header" : "header",
  "modified" : "2020-01-01T00:00:00Z",
  "from" : "$__global.emailFromAddress",
  "id" : "c17bea3a-574d-453c-9e04-4365fbf5af0b",
  "key" : "cloud_manual_work_item_summary"
}, {
  "slackTemplate" : "slackTemplate",
  "footer" : "footer",
  "teamsTemplate" : "teamsTemplate",
  "subject" : "You have $numberOfPendingTasks $taskTasks to complete in ${__global.productName}.",
  "created" : "2020-01-01T00:00:00Z",
  "description" : "Daily digest - sent if number of outstanding tasks for task owner > 0",
  "medium" : "EMAIL",
  "locale" : "en",
  "body" : "Please go to the task manager",
  "name" : "Task Manager Subscription",
  "replyTo" : "$__global.emailFromAddress",
  "header" : "header",
  "modified" : "2020-01-01T00:00:00Z",
  "from" : "$__global.emailFromAddress",
  "id" : "c17bea3a-574d-453c-9e04-4365fbf5af0b",
  "key" : "cloud_manual_work_item_summary"
} ]


const id : string = "c17bea3a-574d-453c-9e04-4365fbf5af0b"; // Id of the Notification Template (default to undefined)

try {
    const val = await notificationsBetaApi.getNotificationTemplate(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.getNotificationTemplate(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "created" : "2020-04-15T16:16:47.525Z",
  "modified" : "2020-04-15T16:16:47.525Z",
  "attributes" : {
    "productUrl" : "https://test-org.identitysoon.com",
    "brandingConfigs" : {
      "default" : {
        "productName" : "SailPoint",
        "navigationColor" : "011E64",
        "actionButtonColor" : "20B2DE",
        "activeLinkColor" : "20B2DE"
      }
    }
  }
}



try {
    const val = await notificationsBetaApi.getNotificationsTemplateContext();
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.getNotificationsTemplateContext();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "isVerifiedByDomain" : false,
  "verificationStatus" : "PENDING",
  "id" : "id",
  "email" : "sender@example.com"
}, {
  "isVerifiedByDomain" : false,
  "verificationStatus" : "PENDING",
  "id" : "id",
  "email" : "sender@example.com"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const filters : string = "email eq "john.doe@company.com""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, sw* (optional) (default to undefined)
const sorters : string = "email"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional) (default to undefined)

try {
    const val = await notificationsBetaApi.listFromAddresses();
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.listFromAddresses(limit, offset, count, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listNotificationPreferences

> Array&lt;PreferencesDtoBeta&gt; listNotificationPreferences(key)

List Notification Preferences for tenant.

Returns a list of notification preferences for tenant.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **string**| The notification key. | [default to undefined]

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

[ {
  "modified" : "2020-05-15T14:37:06.909Z",
  "mediums" : [ "EMAIL" ],
  "key" : "cloud_manual_work_item_summary"
}, {
  "modified" : "2020-05-15T14:37:06.909Z",
  "mediums" : [ "EMAIL" ],
  "key" : "cloud_manual_work_item_summary"
} ]


const key : string = "cloud_manual_work_item_summary"; // The notification key. (default to undefined)

try {
    const val = await notificationsBetaApi.listNotificationPreferences(key);
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.listNotificationPreferences(key);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "slackTemplate" : {
    "isSubscription" : true,
    "attachments" : "attachments",
    "blocks" : "blocks",
    "requestId" : "requestId",
    "autoApprovalData" : {
      "itemId" : "itemId",
      "itemType" : "itemType",
      "autoApprovalMessageJSON" : "autoApprovalMessageJSON",
      "isAutoApproved" : "isAutoApproved",
      "autoApprovalTitle" : "autoApprovalTitle"
    },
    "customFields" : {
      "requestType" : "requestType",
      "campaignId" : "campaignId",
      "campaignStatus" : "campaignStatus",
      "containsDeny" : "containsDeny"
    },
    "requestedById" : "requestedById",
    "approvalId" : "approvalId",
    "text" : "text",
    "notificationType" : "notificationType",
    "key" : "key"
  },
  "footer" : "footer",
  "teamsTemplate" : {
    "isSubscription" : true,
    "requestId" : "requestId",
    "autoApprovalData" : {
      "itemId" : "itemId",
      "itemType" : "itemType",
      "autoApprovalMessageJSON" : "autoApprovalMessageJSON",
      "isAutoApproved" : "isAutoApproved",
      "autoApprovalTitle" : "autoApprovalTitle"
    },
    "customFields" : {
      "requestType" : "requestType",
      "campaignId" : "campaignId",
      "campaignStatus" : "campaignStatus",
      "containsDeny" : "containsDeny"
    },
    "requestedById" : "requestedById",
    "approvalId" : "approvalId",
    "text" : "text",
    "notificationType" : "notificationType",
    "title" : "title",
    "key" : "key",
    "messageJSON" : "messageJSON"
  },
  "subject" : "You have $numberOfPendingTasks $taskTasks to complete in ${__global.productName}.",
  "description" : "Daily digest - sent if number of outstanding tasks for task owner > 0",
  "medium" : "EMAIL",
  "locale" : "en",
  "body" : "Please go to the task manager",
  "name" : "Task Manager Subscription",
  "replyTo" : "$__global.emailFromAddress",
  "header" : "header",
  "from" : "$__global.emailFromAddress",
  "key" : "cloud_manual_work_item_summary"
}, {
  "slackTemplate" : {
    "isSubscription" : true,
    "attachments" : "attachments",
    "blocks" : "blocks",
    "requestId" : "requestId",
    "autoApprovalData" : {
      "itemId" : "itemId",
      "itemType" : "itemType",
      "autoApprovalMessageJSON" : "autoApprovalMessageJSON",
      "isAutoApproved" : "isAutoApproved",
      "autoApprovalTitle" : "autoApprovalTitle"
    },
    "customFields" : {
      "requestType" : "requestType",
      "campaignId" : "campaignId",
      "campaignStatus" : "campaignStatus",
      "containsDeny" : "containsDeny"
    },
    "requestedById" : "requestedById",
    "approvalId" : "approvalId",
    "text" : "text",
    "notificationType" : "notificationType",
    "key" : "key"
  },
  "footer" : "footer",
  "teamsTemplate" : {
    "isSubscription" : true,
    "requestId" : "requestId",
    "autoApprovalData" : {
      "itemId" : "itemId",
      "itemType" : "itemType",
      "autoApprovalMessageJSON" : "autoApprovalMessageJSON",
      "isAutoApproved" : "isAutoApproved",
      "autoApprovalTitle" : "autoApprovalTitle"
    },
    "customFields" : {
      "requestType" : "requestType",
      "campaignId" : "campaignId",
      "campaignStatus" : "campaignStatus",
      "containsDeny" : "containsDeny"
    },
    "requestedById" : "requestedById",
    "approvalId" : "approvalId",
    "text" : "text",
    "notificationType" : "notificationType",
    "title" : "title",
    "key" : "key",
    "messageJSON" : "messageJSON"
  },
  "subject" : "You have $numberOfPendingTasks $taskTasks to complete in ${__global.productName}.",
  "description" : "Daily digest - sent if number of outstanding tasks for task owner > 0",
  "medium" : "EMAIL",
  "locale" : "en",
  "body" : "Please go to the task manager",
  "name" : "Task Manager Subscription",
  "replyTo" : "$__global.emailFromAddress",
  "header" : "header",
  "from" : "$__global.emailFromAddress",
  "key" : "cloud_manual_work_item_summary"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const filters : string = "key eq "cloud_manual_work_item_summary""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional) (default to undefined)

try {
    const val = await notificationsBetaApi.listNotificationTemplateDefaults();
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.listNotificationTemplateDefaults(limit, offset, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

[ {
  "slackTemplate" : "slackTemplate",
  "footer" : "footer",
  "teamsTemplate" : "teamsTemplate",
  "subject" : "You have $numberOfPendingTasks $taskTasks to complete in ${__global.productName}.",
  "created" : "2020-01-01T00:00:00Z",
  "description" : "Daily digest - sent if number of outstanding tasks for task owner > 0",
  "medium" : "EMAIL",
  "locale" : "en",
  "body" : "Please go to the task manager",
  "name" : "Task Manager Subscription",
  "replyTo" : "$__global.emailFromAddress",
  "header" : "header",
  "modified" : "2020-01-01T00:00:00Z",
  "from" : "$__global.emailFromAddress",
  "id" : "c17bea3a-574d-453c-9e04-4365fbf5af0b",
  "key" : "cloud_manual_work_item_summary"
}, {
  "slackTemplate" : "slackTemplate",
  "footer" : "footer",
  "teamsTemplate" : "teamsTemplate",
  "subject" : "You have $numberOfPendingTasks $taskTasks to complete in ${__global.productName}.",
  "created" : "2020-01-01T00:00:00Z",
  "description" : "Daily digest - sent if number of outstanding tasks for task owner > 0",
  "medium" : "EMAIL",
  "locale" : "en",
  "body" : "Please go to the task manager",
  "name" : "Task Manager Subscription",
  "replyTo" : "$__global.emailFromAddress",
  "header" : "header",
  "modified" : "2020-01-01T00:00:00Z",
  "from" : "$__global.emailFromAddress",
  "id" : "c17bea3a-574d-453c-9e04-4365fbf5af0b",
  "key" : "cloud_manual_work_item_summary"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const filters : string = "medium eq "EMAIL""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional) (default to undefined)

try {
    const val = await notificationsBetaApi.listNotificationTemplates();
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.listNotificationTemplates(limit, offset, filters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "identity" : "bob.smith@sailpoint.com",
  "mailFromDomain" : "foo.sailpoint.com",
  "mxRecord" : "10 feedback-smtp.us-east-1.amazonses.com",
  "txtRecord" : "v=spf1 include:amazonses.com ~all",
  "mailFromDomainStatus" : "PENDING"
}


const mailFromAttributesDtoBeta : MailFromAttributesDtoBeta = 

try {
    const val = await notificationsBetaApi.putMailFromAttributes(mailFromAttributesDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.putMailFromAttributes(mailFromAttributesDtoBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
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

{
  "causes" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "messages" : [ {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  }, {
    "localeOrigin" : "DEFAULT",
    "text" : "The request was syntactically correct but its content is semantically invalid.",
    "locale" : "en-US"
  } ],
  "detailCode" : "400.1 Bad Request Content",
  "trackingId" : "e7eab60924f64aa284175b9fa3309599"
}


const sendTestNotificationRequestDtoBeta : SendTestNotificationRequestDtoBeta = 

try {
    const val = await notificationsBetaApi.sendTestNotification(sendTestNotificationRequestDtoBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await notificationsBetaApi.sendTestNotification(sendTestNotificationRequestDtoBeta);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

