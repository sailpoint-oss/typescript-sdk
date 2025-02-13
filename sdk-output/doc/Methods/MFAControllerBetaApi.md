---
title: MFAControllerBetaApi
pagination_label: MFAControllerBetaApi
sidebar_label: MFAControllerBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'MFAControllerBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'MFAControllerBetaApi']
---

# MFAControllerBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSendToken**](MFAControllerBetaApi.md#createSendToken) | **POST** /mfa/token/send | Create and send user token
[**pingVerificationStatus**](MFAControllerBetaApi.md#pingVerificationStatus) | **POST** /mfa/{method}/poll | Polling MFA method by VerificationPollRequest
[**sendDuoVerifyRequest**](MFAControllerBetaApi.md#sendDuoVerifyRequest) | **POST** /mfa/duo-web/verify | Verifying authentication via Duo method
[**sendKbaAnswers**](MFAControllerBetaApi.md#sendKbaAnswers) | **POST** /mfa/kba/authenticate | Authenticate KBA provided MFA method
[**sendOktaVerifyRequest**](MFAControllerBetaApi.md#sendOktaVerifyRequest) | **POST** /mfa/okta-verify/verify | Verifying authentication via Okta method
[**sendTokenAuthRequest**](MFAControllerBetaApi.md#sendTokenAuthRequest) | **POST** /mfa/token/authenticate | Authenticate Token provided MFA method



## createSendToken

> SendTokenResponseBeta createSendToken(sendTokenRequestBeta)

Create and send user token

This API send token request.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendTokenRequestBeta** | [**SendTokenRequestBeta**](../Models/SendTokenRequestBeta.md)|  | 

### Return type

[**SendTokenResponseBeta**](../Models/SendTokenResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAControllerBetaApi, SendTokenRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAControllerBetaApi = new MFAControllerBetaApi(apiConfig);

{
  "requestId" : "089899f13a8f4da7824996191587bab9",
  "errorMessage" : "Unable to sent text message",
  "status" : "SUCCESS"
}


const sendTokenRequestBeta : SendTokenRequestBeta = 

try {
    const val = await mFAControllerBetaApi.createSendToken(sendTokenRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAControllerBetaApi.createSendToken(sendTokenRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## pingVerificationStatus

> VerificationResponseBeta pingVerificationStatus(method, verificationPollRequestBeta)

Polling MFA method by VerificationPollRequest

This API poll the VerificationPollRequest for the specified MFA method.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **method** | **&#39;okta-verify&#39; | &#39;duo-web&#39; | &#39;kba&#39; | &#39;token&#39; | &#39;rsa&#39;**| The name of the MFA method. The currently supported method names are \&#39;okta-verify\&#39;, \&#39;duo-web\&#39;, \&#39;kba\&#39;,\&#39;token\&#39;, \&#39;rsa\&#39; | [default to undefined]
 **verificationPollRequestBeta** | [**VerificationPollRequestBeta**](../Models/VerificationPollRequestBeta.md)|  | 

### Return type

[**VerificationResponseBeta**](../Models/VerificationResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAControllerBetaApi, VerificationPollRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAControllerBetaApi = new MFAControllerBetaApi(apiConfig);

{
  "requestId" : "089899f13a8f4da7824996191587bab9",
  "error" : "Unable to connect DUO Service during verification",
  "status" : "SUCCESS"
}


const method : 'okta-verify' | 'duo-web' | 'kba' | 'token' | 'rsa' = "okta-verify"; // The name of the MFA method. The currently supported method names are \'okta-verify\', \'duo-web\', \'kba\',\'token\', \'rsa\' (default to undefined)
const verificationPollRequestBeta : VerificationPollRequestBeta = 

try {
    const val = await mFAControllerBetaApi.pingVerificationStatus(method, verificationPollRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAControllerBetaApi.pingVerificationStatus(method, verificationPollRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## sendDuoVerifyRequest

> VerificationResponseBeta sendDuoVerifyRequest(duoVerificationRequestBeta)

Verifying authentication via Duo method

This API Authenticates the user via Duo-Web MFA method.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **duoVerificationRequestBeta** | [**DuoVerificationRequestBeta**](../Models/DuoVerificationRequestBeta.md)|  | 

### Return type

[**VerificationResponseBeta**](../Models/VerificationResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAControllerBetaApi, DuoVerificationRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAControllerBetaApi = new MFAControllerBetaApi(apiConfig);

{
  "requestId" : "089899f13a8f4da7824996191587bab9",
  "error" : "Unable to connect DUO Service during verification",
  "status" : "SUCCESS"
}


const duoVerificationRequestBeta : DuoVerificationRequestBeta = 

try {
    const val = await mFAControllerBetaApi.sendDuoVerifyRequest(duoVerificationRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAControllerBetaApi.sendDuoVerifyRequest(duoVerificationRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## sendKbaAnswers

> KbaAuthResponseBeta sendKbaAnswers(kbaAnswerRequestItemBeta)

Authenticate KBA provided MFA method

This API Authenticate user in KBA MFA method.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kbaAnswerRequestItemBeta** | [**Array&lt;KbaAnswerRequestItemBeta&gt;**](../Models/KbaAnswerRequestItemBeta.md)|  | 

### Return type

[**KbaAuthResponseBeta**](../Models/KbaAuthResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAControllerBetaApi, KbaAnswerRequestItemBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAControllerBetaApi = new MFAControllerBetaApi(apiConfig);

{
  "kbaAuthResponseItems" : [ {
    "questionId" : "089899f13a8f4da7824996191587bab9",
    "isVerified" : false
  } ],
  "status" : "PENDING"
}


const kbaAnswerRequestItemBeta : Array<KbaAnswerRequestItemBeta> = [{id=173423, answer=822cd15d6c15aa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0859a2fea34}, {id=c54fee53-2d63-4fc5-9259-3e93b9994135, answer=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08}]; // 

try {
    const val = await mFAControllerBetaApi.sendKbaAnswers(kbaAnswerRequestItemBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAControllerBetaApi.sendKbaAnswers(kbaAnswerRequestItemBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## sendOktaVerifyRequest

> VerificationResponseBeta sendOktaVerifyRequest(oktaVerificationRequestBeta)

Verifying authentication via Okta method

This API Authenticates the user via Okta-Verify MFA method. Request requires a header called \'slpt-forwarding\', and it must contain a remote IP Address of caller.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oktaVerificationRequestBeta** | [**OktaVerificationRequestBeta**](../Models/OktaVerificationRequestBeta.md)|  | 

### Return type

[**VerificationResponseBeta**](../Models/VerificationResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAControllerBetaApi, OktaVerificationRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAControllerBetaApi = new MFAControllerBetaApi(apiConfig);

{
  "requestId" : "089899f13a8f4da7824996191587bab9",
  "error" : "Unable to connect DUO Service during verification",
  "status" : "SUCCESS"
}


const oktaVerificationRequestBeta : OktaVerificationRequestBeta = 

try {
    const val = await mFAControllerBetaApi.sendOktaVerifyRequest(oktaVerificationRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAControllerBetaApi.sendOktaVerifyRequest(oktaVerificationRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## sendTokenAuthRequest

> TokenAuthResponseBeta sendTokenAuthRequest(tokenAuthRequestBeta)

Authenticate Token provided MFA method

This API Authenticate user in Token MFA method.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenAuthRequestBeta** | [**TokenAuthRequestBeta**](../Models/TokenAuthRequestBeta.md)|  | 

### Return type

[**TokenAuthResponseBeta**](../Models/TokenAuthResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, MFAControllerBetaApi, TokenAuthRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const mFAControllerBetaApi = new MFAControllerBetaApi(apiConfig);

{
  "status" : "PENDING"
}


const tokenAuthRequestBeta : TokenAuthRequestBeta = 

try {
    const val = await mFAControllerBetaApi.sendTokenAuthRequest(tokenAuthRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await mFAControllerBetaApi.sendTokenAuthRequest(tokenAuthRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

