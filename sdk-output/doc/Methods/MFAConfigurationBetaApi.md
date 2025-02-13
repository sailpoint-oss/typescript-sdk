---
title: MFAConfigurationBetaApi
pagination_label: MFAConfigurationBetaApi
sidebar_label: MFAConfigurationBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'MFAConfigurationBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'MFAConfigurationBetaApi']
---

# MFAConfigurationBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMFAConfig**](MFAConfigurationBetaApi.md#deleteMFAConfig) | **DELETE** /mfa/{method}/delete | Delete MFA method configuration
[**getMFADuoConfig**](MFAConfigurationBetaApi.md#getMFADuoConfig) | **GET** /mfa/duo-web/config | Configuration of Duo MFA method
[**getMFAKbaConfig**](MFAConfigurationBetaApi.md#getMFAKbaConfig) | **GET** /mfa/kba/config | Configuration of KBA MFA method
[**getMFAOktaConfig**](MFAConfigurationBetaApi.md#getMFAOktaConfig) | **GET** /mfa/okta-verify/config | Configuration of Okta MFA method
[**setMFADuoConfig**](MFAConfigurationBetaApi.md#setMFADuoConfig) | **PUT** /mfa/duo-web/config | Set Duo MFA configuration
[**setMFAKBAConfig**](MFAConfigurationBetaApi.md#setMFAKBAConfig) | **POST** /mfa/kba/config/answers | Set MFA KBA configuration
[**setMFAOktaConfig**](MFAConfigurationBetaApi.md#setMFAOktaConfig) | **PUT** /mfa/okta-verify/config | Set Okta MFA configuration
[**testMFAConfig**](MFAConfigurationBetaApi.md#testMFAConfig) | **GET** /mfa/{method}/test | MFA method\&#39;s test configuration



## deleteMFAConfig

> MfaOktaConfigBeta deleteMFAConfig(method)

Delete MFA method configuration

This API removes the configuration for the specified MFA method.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **method** | **&#39;okta-verify&#39; | &#39;duo-web&#39;**| The name of the MFA method. The currently supported method names are \&#39;okta-verify\&#39; and \&#39;duo-web\&#39;. | [default to undefined]

### Return type

[**MfaOktaConfigBeta**](../Models/MfaOktaConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAConfigurationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAConfigurationBetaApi = new MFAConfigurationBetaApi(apiConfig);

{
  "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
  "host" : "example.com",
  "mfaMethod" : "okta-verify",
  "enabled" : true,
  "identityAttribute" : "email"
}


const method : 'okta-verify' | 'duo-web' = "okta-verify"; // The name of the MFA method. The currently supported method names are \'okta-verify\' and \'duo-web\'. (default to undefined)

try {
    const val = await mFAConfigurationBetaApi.deleteMFAConfig(method);
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAConfigurationBetaApi.deleteMFAConfig(method);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getMFADuoConfig

> MfaDuoConfigBeta getMFADuoConfig()

Configuration of Duo MFA method

This API returns the configuration of an Duo MFA method.

### Parameters

This endpoint does not need any parameter.

### Return type

[**MfaDuoConfigBeta**](../Models/MfaDuoConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAConfigurationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAConfigurationBetaApi = new MFAConfigurationBetaApi(apiConfig);

{
  "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
  "host" : "example.com",
  "configProperties" : {
    "skey" : "qwERttyZx1CdlQye2Vwtbsjr3HKddy4BAiCXjc5x",
    "ikey" : "Q123WE45R6TY7890ZXCV"
  },
  "mfaMethod" : "duo-web",
  "enabled" : true,
  "identityAttribute" : "email"
}



try {
    const val = await mFAConfigurationBetaApi.getMFADuoConfig();
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAConfigurationBetaApi.getMFADuoConfig();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getMFAKbaConfig

> Array&lt;KbaQuestionBeta&gt; getMFAKbaConfig(allLanguages)

Configuration of KBA MFA method

This API returns the KBA configuration for MFA.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allLanguages** | **boolean**| Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false | [optional] [default to undefined]

### Return type

[**Array&lt;KbaQuestionBeta&gt;**](../Models/KbaQuestionBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAConfigurationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAConfigurationBetaApi = new MFAConfigurationBetaApi(apiConfig);

[ {
  "hasAnswer" : true,
  "numAnswers" : 5,
  "id" : "143cfd3b-c23f-426b-ae5f-d3db06fa5919",
  "text" : "[{\"text\":\"Nouvelle question MFA -1 ?\",\"locale\":\"fr\"},{\"text\":\"MFA new question -1 ?\",\"locale\":\"\"}]"
}, {
  "hasAnswer" : true,
  "numAnswers" : 5,
  "id" : "143cfd3b-c23f-426b-ae5f-d3db06fa5919",
  "text" : "[{\"text\":\"Nouvelle question MFA -1 ?\",\"locale\":\"fr\"},{\"text\":\"MFA new question -1 ?\",\"locale\":\"\"}]"
} ]


const allLanguages : boolean = allLanguages=true; // Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional) (default to undefined)

try {
    const val = await mFAConfigurationBetaApi.getMFAKbaConfig();
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAConfigurationBetaApi.getMFAKbaConfig(allLanguages);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getMFAOktaConfig

> MfaOktaConfigBeta getMFAOktaConfig()

Configuration of Okta MFA method

This API returns the configuration of an Okta MFA method.

### Parameters

This endpoint does not need any parameter.

### Return type

[**MfaOktaConfigBeta**](../Models/MfaOktaConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAConfigurationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAConfigurationBetaApi = new MFAConfigurationBetaApi(apiConfig);

{
  "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
  "host" : "example.com",
  "mfaMethod" : "okta-verify",
  "enabled" : true,
  "identityAttribute" : "email"
}



try {
    const val = await mFAConfigurationBetaApi.getMFAOktaConfig();
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAConfigurationBetaApi.getMFAOktaConfig();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## setMFADuoConfig

> MfaDuoConfigBeta setMFADuoConfig(mfaDuoConfigBeta)

Set Duo MFA configuration

This API sets the configuration of an Duo MFA method.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mfaDuoConfigBeta** | [**MfaDuoConfigBeta**](../Models/MfaDuoConfigBeta.md)|  | 

### Return type

[**MfaDuoConfigBeta**](../Models/MfaDuoConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAConfigurationBetaApi, MfaDuoConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAConfigurationBetaApi = new MFAConfigurationBetaApi(apiConfig);

{
  "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
  "host" : "example.com",
  "configProperties" : {
    "skey" : "qwERttyZx1CdlQye2Vwtbsjr3HKddy4BAiCXjc5x",
    "ikey" : "Q123WE45R6TY7890ZXCV"
  },
  "mfaMethod" : "duo-web",
  "enabled" : true,
  "identityAttribute" : "email"
}


const mfaDuoConfigBeta : MfaDuoConfigBeta = 

try {
    const val = await mFAConfigurationBetaApi.setMFADuoConfig(mfaDuoConfigBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAConfigurationBetaApi.setMFADuoConfig(mfaDuoConfigBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## setMFAKBAConfig

> Array&lt;KbaAnswerResponseItemBeta&gt; setMFAKBAConfig(kbaAnswerRequestItemBeta)

Set MFA KBA configuration

This API sets answers to challenge questions.  Any configured questions omitted from the request are removed from user KBA configuration.    

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kbaAnswerRequestItemBeta** | [**Array&lt;KbaAnswerRequestItemBeta&gt;**](../Models/KbaAnswerRequestItemBeta.md)|  | 

### Return type

[**Array&lt;KbaAnswerResponseItemBeta&gt;**](../Models/KbaAnswerResponseItemBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAConfigurationBetaApi, KbaAnswerRequestItemBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAConfigurationBetaApi = new MFAConfigurationBetaApi(apiConfig);

[ {
  "hasAnswer" : true,
  "question" : "[{\"text\":\"Nouvelle question MFA -1 ?\",\"locale\":\"fr\"},{\"text\":\"MFA new question -1 ?\",\"locale\":\"\"}]",
  "id" : "c54fee53-2d63-4fc5-9259-3e93b9994135"
}, {
  "hasAnswer" : true,
  "question" : "[{\"text\":\"Nouvelle question MFA -1 ?\",\"locale\":\"fr\"},{\"text\":\"MFA new question -1 ?\",\"locale\":\"\"}]",
  "id" : "c54fee53-2d63-4fc5-9259-3e93b9994135"
} ]


const kbaAnswerRequestItemBeta : Array<KbaAnswerRequestItemBeta> = [{id=173423, answer=822cd15d6c15aa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0859a2fea34}, {id=c54fee53-2d63-4fc5-9259-3e93b9994135, answer=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08}]; // 

try {
    const val = await mFAConfigurationBetaApi.setMFAKBAConfig(kbaAnswerRequestItemBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAConfigurationBetaApi.setMFAKBAConfig(kbaAnswerRequestItemBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## setMFAOktaConfig

> MfaOktaConfigBeta setMFAOktaConfig(mfaOktaConfigBeta)

Set Okta MFA configuration

This API sets the configuration of an Okta MFA method.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mfaOktaConfigBeta** | [**MfaOktaConfigBeta**](../Models/MfaOktaConfigBeta.md)|  | 

### Return type

[**MfaOktaConfigBeta**](../Models/MfaOktaConfigBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAConfigurationBetaApi, MfaOktaConfigBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAConfigurationBetaApi = new MFAConfigurationBetaApi(apiConfig);

{
  "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
  "host" : "example.com",
  "mfaMethod" : "okta-verify",
  "enabled" : true,
  "identityAttribute" : "email"
}


const mfaOktaConfigBeta : MfaOktaConfigBeta = 

try {
    const val = await mFAConfigurationBetaApi.setMFAOktaConfig(mfaOktaConfigBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAConfigurationBetaApi.setMFAOktaConfig(mfaOktaConfigBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## testMFAConfig

> MfaConfigTestResponseBeta testMFAConfig(method)

MFA method\'s test configuration

This API validates that the configuration is valid and will properly authenticate with the MFA provider identified by the method path parameter.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **method** | **&#39;okta-verify&#39; | &#39;duo-web&#39;**| The name of the MFA method. The currently supported method names are \&#39;okta-verify\&#39; and \&#39;duo-web\&#39;. | [default to undefined]

### Return type

[**MfaConfigTestResponseBeta**](../Models/MfaConfigTestResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAConfigurationBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAConfigurationBetaApi = new MFAConfigurationBetaApi(apiConfig);

{
  "state" : "SUCCESS",
  "error" : "MFA Method is disabled."
}


const method : 'okta-verify' | 'duo-web' = "okta-verify"; // The name of the MFA method. The currently supported method names are \'okta-verify\' and \'duo-web\'. (default to undefined)

try {
    const val = await mFAConfigurationBetaApi.testMFAConfig(method);
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAConfigurationBetaApi.testMFAConfig(method);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

