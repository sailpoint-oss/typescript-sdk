---
title: IAIMessageCatalogsBetaApi
pagination_label: IAIMessageCatalogsBetaApi
sidebar_label: IAIMessageCatalogsBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'IAIMessageCatalogsBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'IAIMessageCatalogsBetaApi']
---

# IAIMessageCatalogsBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMessageCatalogs**](IAIMessageCatalogsBetaApi.md#getMessageCatalogs) | **GET** /translation-catalogs/{catalog-id} | Get Message catalogs



## getMessageCatalogs

> Array&lt;MessageCatalogDtoBeta&gt; getMessageCatalogs(catalogId)

Get Message catalogs

The getMessageCatalogs API returns message catalog based on the language headers in the requested object.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **&#39;recommender&#39; | &#39;access-request-recommender&#39;**| The ID of the message catalog. | [default to undefined]

### Return type

[**Array&lt;MessageCatalogDtoBeta&gt;**](../Models/MessageCatalogDtoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIMessageCatalogsBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIMessageCatalogsBetaApi = new IAIMessageCatalogsBetaApi(apiConfig);

[ {
  "messages" : [ {
    "format" : "{0,,\\\"i18n hint: percentage\\\"}% of identities with the same {1,,\\\"i18n hint: name of category feature\\\"} have this access. This information had a low impact on the overall score.",
    "key" : "recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_LOW"
  }, {
    "format" : "{0,,\\\"i18n hint: percentage\\\"}% of identities with the same {1,,\\\"i18n hint: name of category feature\\\"} have this access. This information had a low impact on the overall score.",
    "key" : "recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_LOW"
  } ],
  "locale" : "en_US"
}, {
  "messages" : [ {
    "format" : "{0,,\\\"i18n hint: percentage\\\"}% of identities with the same {1,,\\\"i18n hint: name of category feature\\\"} have this access. This information had a low impact on the overall score.",
    "key" : "recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_LOW"
  }, {
    "format" : "{0,,\\\"i18n hint: percentage\\\"}% of identities with the same {1,,\\\"i18n hint: name of category feature\\\"} have this access. This information had a low impact on the overall score.",
    "key" : "recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_LOW"
  } ],
  "locale" : "en_US"
} ]


const catalogId : 'recommender' | 'access-request-recommender' = "recommender"; // The ID of the message catalog. (default to undefined)

try {
    const val = await iAIMessageCatalogsBetaApi.getMessageCatalogs(catalogId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIMessageCatalogsBetaApi.getMessageCatalogs(catalogId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

