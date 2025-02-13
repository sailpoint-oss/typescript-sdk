---
title: ConnectorsBetaApi
pagination_label: ConnectorsBetaApi
sidebar_label: ConnectorsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'ConnectorsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'ConnectorsBetaApi']
---

# ConnectorsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConnectorList**](ConnectorsBetaApi.md#getConnectorList) | **GET** /connectors | Get Connector List



## getConnectorList

> Array&lt;V3ConnectorDtoBeta&gt; getConnectorList(filters, limit, offset, count, locale)

Get Connector List

Fetches list of connectors that have \'RELEASED\' status using filtering and pagination.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **type**: *eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca* | [optional] [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **locale** | **&#39;de&#39; | &#39;false&#39; | &#39;fi&#39; | &#39;sv&#39; | &#39;ru&#39; | &#39;pt&#39; | &#39;ko&#39; | &#39;zh-TW&#39; | &#39;en&#39; | &#39;it&#39; | &#39;fr&#39; | &#39;zh-CN&#39; | &#39;hu&#39; | &#39;es&#39; | &#39;cs&#39; | &#39;ja&#39; | &#39;pl&#39; | &#39;da&#39; | &#39;nl&#39;**| The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | [optional] [default to undefined]

### Return type

[**Array&lt;V3ConnectorDtoBeta&gt;**](../Models/V3ConnectorDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, ConnectorsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const connectorsBetaApi = new ConnectorsBetaApi(apiConfig);

[ {
  "features" : [ "PROVISIONING", "SYNC_PROVISIONING", "SEARCH", "UNSTRUCTURED_TARGETS" ],
  "name" : "name",
  "scriptName" : "servicenow",
  "directConnect" : true,
  "className" : "sailpoint.connector.OpenConnectorAdapter",
  "type" : "ServiceNow",
  "connectorMetadata" : {
    "supportedUI" : "EXTJS",
    "platform" : "ccg",
    "shortDesc" : "connector description"
  },
  "status" : "RELEASED"
}, {
  "features" : [ "PROVISIONING", "SYNC_PROVISIONING", "SEARCH", "UNSTRUCTURED_TARGETS" ],
  "name" : "name",
  "scriptName" : "servicenow",
  "directConnect" : true,
  "className" : "sailpoint.connector.OpenConnectorAdapter",
  "type" : "ServiceNow",
  "connectorMetadata" : {
    "supportedUI" : "EXTJS",
    "platform" : "ccg",
    "shortDesc" : "connector description"
  },
  "status" : "RELEASED"
} ]


const filters : string = "directConnect eq "true""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **type**: *eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca* (optional) (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const locale : 'de' | 'false' | 'fi' | 'sv' | 'ru' | 'pt' | 'ko' | 'zh-TW' | 'en' | 'it' | 'fr' | 'zh-CN' | 'hu' | 'es' | 'cs' | 'ja' | 'pl' | 'da' | 'nl' = "de"; // The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) (default to undefined)

try {
    const val = await connectorsBetaApi.getConnectorList();
    
    // Below is a request that includes all optional parameters      
    // const val = await connectorsBetaApi.getConnectorList(filters, limit, offset, count, locale);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

