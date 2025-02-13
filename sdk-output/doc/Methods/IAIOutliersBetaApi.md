---
title: IAIOutliersBetaApi
pagination_label: IAIOutliersBetaApi
sidebar_label: IAIOutliersBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'IAIOutliersBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'IAIOutliersBetaApi']
---

# IAIOutliersBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportOutliersZip**](IAIOutliersBetaApi.md#exportOutliersZip) | **GET** /outliers/export | IAI Identity Outliers Export
[**getIdentityOutlierSnapshots**](IAIOutliersBetaApi.md#getIdentityOutlierSnapshots) | **GET** /outlier-summaries | IAI Identity Outliers Summary
[**getIdentityOutliers**](IAIOutliersBetaApi.md#getIdentityOutliers) | **GET** /outliers | IAI Get Identity Outliers
[**getLatestIdentityOutlierSnapshots**](IAIOutliersBetaApi.md#getLatestIdentityOutlierSnapshots) | **GET** /outlier-summaries/latest | IAI Identity Outliers Latest Summary
[**getOutlierContributingFeatureSummary**](IAIOutliersBetaApi.md#getOutlierContributingFeatureSummary) | **GET** /outlier-feature-summaries/{outlierFeatureId} | Get identity outlier contibuting feature summary
[**getPeerGroupOutliersContributingFeatures**](IAIOutliersBetaApi.md#getPeerGroupOutliersContributingFeatures) | **GET** /outliers/{outlierId}/contributing-features | Get identity outlier\&#39;s contibuting features
[**ignoreIdentityOutliers**](IAIOutliersBetaApi.md#ignoreIdentityOutliers) | **POST** /outliers/ignore | IAI Identity Outliers Ignore
[**listOutliersContributingFeatureAccessItems**](IAIOutliersBetaApi.md#listOutliersContributingFeatureAccessItems) | **GET** /outliers/{outlierId}/feature-details/{contributingFeatureName}/access-items | Gets a list of access items associated with each identity outlier contributing feature
[**unIgnoreIdentityOutliers**](IAIOutliersBetaApi.md#unIgnoreIdentityOutliers) | **POST** /outliers/unignore | IAI Identity Outliers Unignore



## exportOutliersZip

> File exportOutliersZip(type)

IAI Identity Outliers Export

This API exports a list of ignored outliers to a CSV as well as list of non-ignored outliers to a CSV. These two CSVs will be zipped and exported.  Columns will include: identityId, type, firstDetectionDate, latestDetectionDate, ignored, & attributes (defined set of identity attributes). 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **&#39;LOW_SIMILARITY&#39; | &#39;STRUCTURAL&#39;**| Type of the identity outliers snapshot to filter on | [optional] [default to undefined]

### Return type

**File**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIOutliersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIOutliersBetaApi = new IAIOutliersBetaApi(apiConfig);

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


const type : 'LOW_SIMILARITY' | 'STRUCTURAL' = "LOW_SIMILARITY"; // Type of the identity outliers snapshot to filter on (optional) (default to undefined)

try {
    const val = await iAIOutliersBetaApi.exportOutliersZip();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIOutliersBetaApi.exportOutliersZip(type);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getIdentityOutlierSnapshots

> Array&lt;OutlierSummaryBeta&gt; getIdentityOutlierSnapshots(limit, offset, type, filters, sorters)

IAI Identity Outliers Summary

This API returns a summary containing the number of identities that customer has, the number of outliers, and the type of outlier.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **type** | **&#39;LOW_SIMILARITY&#39; | &#39;STRUCTURAL&#39;**| Type of the identity outliers snapshot to filter on | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **snapshotDate**: *ge, le* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **snapshotDate** | [optional] [default to undefined]

### Return type

[**Array&lt;OutlierSummaryBeta&gt;**](../Models/OutlierSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIOutliersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIOutliersBetaApi = new IAIOutliersBetaApi(apiConfig);

[ {
  "snapshotDate" : "2021-05-01T18:40:35.772Z",
  "totalIdentities" : 5000,
  "totalIgnored" : 0,
  "totalOutliers" : 50,
  "type" : "LOW_SIMILARITY"
}, {
  "snapshotDate" : "2021-05-01T18:40:35.772Z",
  "totalIdentities" : 5000,
  "totalIgnored" : 0,
  "totalOutliers" : 50,
  "type" : "LOW_SIMILARITY"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const type : 'LOW_SIMILARITY' | 'STRUCTURAL' = "LOW_SIMILARITY"; // Type of the identity outliers snapshot to filter on (optional) (default to undefined)
const filters : string = "snapshotDate ge "2022-02-07T20:13:29.356648026Z""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **snapshotDate**: *ge, le* (optional) (default to undefined)
const sorters : string = "snapshotDate"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **snapshotDate** (optional) (default to undefined)

try {
    const val = await iAIOutliersBetaApi.getIdentityOutlierSnapshots();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIOutliersBetaApi.getIdentityOutlierSnapshots(limit, offset, type, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getIdentityOutliers

> Array&lt;OutlierBeta&gt; getIdentityOutliers(limit, offset, count, type, filters, sorters)

IAI Get Identity Outliers

This API returns a list of outliers, containing data such as identity ID, outlier type, detection dates, identity attributes, if identity is ignored, and certification information.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **type** | **&#39;LOW_SIMILARITY&#39; | &#39;STRUCTURAL&#39;**| Type of the identity outliers snapshot to filter on | [optional] [default to undefined]
 **filters** | **string**| Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **attributes**: *eq, sw, co, in*  **firstDetectionDate**: *ge, le*  **certStatus**: *eq*  **ignored**: *eq*  **score**: *ge, le* | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **firstDetectionDate, attributes, score** | [optional] [default to undefined]

### Return type

[**Array&lt;OutlierBeta&gt;**](../Models/OutlierBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIOutliersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIOutliersBetaApi = new IAIOutliersBetaApi(apiConfig);

[ {
  "ignored" : false,
  "score" : 0.92,
  "unignoreDate" : "2021-06-01T18:40:35.772Z",
  "ignoreDate" : "2021-06-01T18:40:35.772Z",
  "identityId" : "5be33d3e-c54d-4ed7-af73-2380543e8283",
  "firstDetectionDate" : "2021-05-01T18:40:35.772Z",
  "unignoreType" : "MANUAL",
  "attributes" : {
    "displayName" : "John Smith",
    "jobTitle" : "Software Engineer",
    "department" : "Engineering"
  },
  "id" : "5be33d3e-c54d-4ed7-af73-2380543e8283",
  "type" : "LOW_SIMILARITY",
  "latestDetectionDate" : "2021-05-03T18:40:35.772Z"
}, {
  "ignored" : false,
  "score" : 0.92,
  "unignoreDate" : "2021-06-01T18:40:35.772Z",
  "ignoreDate" : "2021-06-01T18:40:35.772Z",
  "identityId" : "5be33d3e-c54d-4ed7-af73-2380543e8283",
  "firstDetectionDate" : "2021-05-01T18:40:35.772Z",
  "unignoreType" : "MANUAL",
  "attributes" : {
    "displayName" : "John Smith",
    "jobTitle" : "Software Engineer",
    "department" : "Engineering"
  },
  "id" : "5be33d3e-c54d-4ed7-af73-2380543e8283",
  "type" : "LOW_SIMILARITY",
  "latestDetectionDate" : "2021-05-03T18:40:35.772Z"
} ]


const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const type : 'LOW_SIMILARITY' | 'STRUCTURAL' = "LOW_SIMILARITY"; // Type of the identity outliers snapshot to filter on (optional) (default to undefined)
const filters : string = "attributes.displayName sw "John" and certStatus eq "false""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **attributes**: *eq, sw, co, in*  **firstDetectionDate**: *ge, le*  **certStatus**: *eq*  **ignored**: *eq*  **score**: *ge, le* (optional) (default to undefined)
const sorters : string = "attributes.displayName,firstDetectionDate,-score"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **firstDetectionDate, attributes, score** (optional) (default to undefined)

try {
    const val = await iAIOutliersBetaApi.getIdentityOutliers();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIOutliersBetaApi.getIdentityOutliers(limit, offset, count, type, filters, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getLatestIdentityOutlierSnapshots

> Array&lt;LatestOutlierSummaryBeta&gt; getLatestIdentityOutlierSnapshots(type)

IAI Identity Outliers Latest Summary

This API returns a most recent snapshot of each outlier type, each containing the number of identities that customer has, the number of outliers, and the type of outlier.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **&#39;LOW_SIMILARITY&#39; | &#39;STRUCTURAL&#39;**| Type of the identity outliers snapshot to filter on | [optional] [default to undefined]

### Return type

[**Array&lt;LatestOutlierSummaryBeta&gt;**](../Models/LatestOutlierSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIOutliersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIOutliersBetaApi = new IAIOutliersBetaApi(apiConfig);

[ {
  "snapshotDate" : "2021-05-01T18:40:35.772Z",
  "totalIdentities" : 5000,
  "totalIgnored" : 10,
  "totalOutliers" : 50,
  "type" : "LOW_SIMILARITY"
}, {
  "snapshotDate" : "2021-05-01T18:40:35.772Z",
  "totalIdentities" : 5000,
  "totalIgnored" : 10,
  "totalOutliers" : 50,
  "type" : "LOW_SIMILARITY"
} ]


const type : 'LOW_SIMILARITY' | 'STRUCTURAL' = "LOW_SIMILARITY"; // Type of the identity outliers snapshot to filter on (optional) (default to undefined)

try {
    const val = await iAIOutliersBetaApi.getLatestIdentityOutlierSnapshots();
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIOutliersBetaApi.getLatestIdentityOutlierSnapshots(type);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getOutlierContributingFeatureSummary

> OutlierFeatureSummaryBeta getOutlierContributingFeatureSummary(outlierFeatureId)

Get identity outlier contibuting feature summary

This API returns a summary of a contributing feature for an identity outlier.  The object contains: contributing feature name (translated text or message key), identity outlier display name, feature values, feature definition and explanation (translated text or message key), peer display name and identityId, access item reference, translation messages object. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **outlierFeatureId** | **string**| Contributing feature id | [default to undefined]

### Return type

[**OutlierFeatureSummaryBeta**](../Models/OutlierFeatureSummaryBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIOutliersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIOutliersBetaApi = new IAIOutliersBetaApi(apiConfig);

{
  "featureExplanation" : "An identity that has too much rare access has a higher change of becoming a security threat due to the unique access they possess",
  "peerIdentityId" : "9f9d5d53ad0e48fba7352f6da9f1b8gbg",
  "accessItemReference" : {
    "displayName" : "All Rare Entitlements",
    "searchPlaceholder" : "Search by name or description"
  },
  "identityOutlierDisplayName" : "John Smith",
  "featureDefinition" : "Identity total number of entitlements",
  "peerDisplayName" : "Mary Jane",
  "outlierFeatureDisplayValues" : [ {
    "displayName" : "Aliza Chris",
    "valueType" : "INTEGER",
    "value" : "55"
  }, {
    "displayName" : "Aliza Chris",
    "valueType" : "INTEGER",
    "value" : "55"
  } ],
  "contributingFeatureName" : "Rare Access"
}


const outlierFeatureId : string = "04654b66-7561-4090-94f9-abee0722a1af"; // Contributing feature id (default to undefined)

try {
    const val = await iAIOutliersBetaApi.getOutlierContributingFeatureSummary(outlierFeatureId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIOutliersBetaApi.getOutlierContributingFeatureSummary(outlierFeatureId);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getPeerGroupOutliersContributingFeatures

> Array&lt;OutlierContributingFeatureBeta&gt; getPeerGroupOutliersContributingFeatures(outlierId, limit, offset, count, includeTranslationMessages, sorters)

Get identity outlier\'s contibuting features

This API returns a list of contributing feature objects for a single outlier.  The object contains: feature name, feature value type, value, importance, display name (translated text or message key), description (translated text or message key), translation messages object. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **outlierId** | **string**| The outlier id | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **includeTranslationMessages** | **string**| Whether or not to include translation messages object in returned response | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **importance** | [optional] [default to undefined]

### Return type

[**Array&lt;OutlierContributingFeatureBeta&gt;**](../Models/OutlierContributingFeatureBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIOutliersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIOutliersBetaApi = new IAIOutliersBetaApi(apiConfig);

[ {
  "translationMessages" : {
    "displayName" : {
      "values" : [ "75", "department" ],
      "key" : "recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH"
    },
    "description" : {
      "values" : [ "75", "department" ],
      "key" : "recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH"
    }
  },
  "importance" : -0.15,
  "displayName" : "Number of entitlements",
  "valueType" : "INTEGER",
  "name" : "entitlement_count",
  "description" : "The total number of entitlements belonging to an identity",
  "id" : "66e38828-5017-47af-92ff-9844871352c5",
  "value" : 0.92
}, {
  "translationMessages" : {
    "displayName" : {
      "values" : [ "75", "department" ],
      "key" : "recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH"
    },
    "description" : {
      "values" : [ "75", "department" ],
      "key" : "recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH"
    }
  },
  "importance" : -0.15,
  "displayName" : "Number of entitlements",
  "valueType" : "INTEGER",
  "name" : "entitlement_count",
  "description" : "The total number of entitlements belonging to an identity",
  "id" : "66e38828-5017-47af-92ff-9844871352c5",
  "value" : 0.92
} ]


const outlierId : string = "2c918085842e69ae018432d22ccb212f"; // The outlier id (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const includeTranslationMessages : string = "include-translation-messages="; // Whether or not to include translation messages object in returned response (optional) (default to undefined)
const sorters : string = "importance"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **importance** (optional) (default to undefined)

try {
    const val = await iAIOutliersBetaApi.getPeerGroupOutliersContributingFeatures(outlierId);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIOutliersBetaApi.getPeerGroupOutliersContributingFeatures(outlierId, limit, offset, count, includeTranslationMessages, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## ignoreIdentityOutliers

> ignoreIdentityOutliers(requestBody)

IAI Identity Outliers Ignore

This API receives a list of identity IDs in the request, changes the outliers to be ignored.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | [**Array&lt;string&gt;**](../Models/string.md)|  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIOutliersBetaApi, string } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIOutliersBetaApi = new IAIOutliersBetaApi(apiConfig);

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


const requestBody : Array<string> = ; // 

try {
    const val = await iAIOutliersBetaApi.ignoreIdentityOutliers(requestBody);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIOutliersBetaApi.ignoreIdentityOutliers(requestBody);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## listOutliersContributingFeatureAccessItems

> Array&lt;OutliersContributingFeatureAccessItemsBeta&gt; listOutliersContributingFeatureAccessItems(outlierId, contributingFeatureName, limit, offset, count, accessType, sorters)

Gets a list of access items associated with each identity outlier contributing feature

This API returns a list of the enriched access items associated with each feature filtered by the access item type.  The object contains: accessItemId, display name (translated text or message key), description (translated text or message key), accessType, sourceName, extremelyRare. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **outlierId** | **string**| The outlier id | [default to undefined]
 **contributingFeatureName** | **&#39;radical_entitlement_count&#39; | &#39;entitlement_count&#39; | &#39;max_jaccard_similarity&#39; | &#39;mean_max_bundle_concurrency&#39; | &#39;single_entitlement_bundle_count&#39; | &#39;peerless_score&#39;**| The name of contributing feature | [default to undefined]
 **limit** | **number**| Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
 **offset** | **number**| Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
 **count** | **boolean**| If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
 **accessType** | **string**| The type of access item for the identity outlier contributing feature. If not provided, it returns all. | [optional] [default to undefined]
 **sorters** | **string**| Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** | [optional] [default to undefined]

### Return type

[**Array&lt;OutliersContributingFeatureAccessItemsBeta&gt;**](../Models/OutliersContributingFeatureAccessItemsBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIOutliersBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIOutliersBetaApi = new IAIOutliersBetaApi(apiConfig);

[ {
  "accessType" : "ENTITLEMENT",
  "displayName" : "Applied Research Access",
  "extremelyRare" : true,
  "description" : "Access to research information, lab results, and schematics",
  "id" : "2c938083633d259901633d2623ec0375",
  "sourceName" : "appName"
}, {
  "accessType" : "ENTITLEMENT",
  "displayName" : "Applied Research Access",
  "extremelyRare" : true,
  "description" : "Access to research information, lab results, and schematics",
  "id" : "2c938083633d259901633d2623ec0375",
  "sourceName" : "appName"
} ]


const outlierId : string = "2c918085842e69ae018432d22ccb212f"; // The outlier id (default to undefined)
const contributingFeatureName : 'radical_entitlement_count' | 'entitlement_count' | 'max_jaccard_similarity' | 'mean_max_bundle_concurrency' | 'single_entitlement_bundle_count' | 'peerless_score' = "entitlement_count"; // The name of contributing feature (default to undefined)
const limit : number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
const offset : number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
const count : boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
const accessType : string = "ENTITLEMENT"; // The type of access item for the identity outlier contributing feature. If not provided, it returns all. (optional) (default to undefined)
const sorters : string = "displayName"; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** (optional) (default to undefined)

try {
    const val = await iAIOutliersBetaApi.listOutliersContributingFeatureAccessItems(outlierId, contributingFeatureName);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIOutliersBetaApi.listOutliersContributingFeatureAccessItems(outlierId, contributingFeatureName, limit, offset, count, accessType, sorters);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## unIgnoreIdentityOutliers

> unIgnoreIdentityOutliers(requestBody)

IAI Identity Outliers Unignore

This API receives a list of identity IDs in the request, changes the outliers to be un-ignored.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | [**Array&lt;string&gt;**](../Models/string.md)|  | 

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [applicationAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, IAIOutliersBetaApi, string } from "sailpoint-api-client";
const apiConfig = new Configuration();
const iAIOutliersBetaApi = new IAIOutliersBetaApi(apiConfig);

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


const requestBody : Array<string> = ; // 

try {
    const val = await iAIOutliersBetaApi.unIgnoreIdentityOutliers(requestBody);
    
    // Below is a request that includes all optional parameters      
    // const val = await iAIOutliersBetaApi.unIgnoreIdentityOutliers(requestBody);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

