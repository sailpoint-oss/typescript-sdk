---
title: PasswordManagementBetaApi
pagination_label: PasswordManagementBetaApi
sidebar_label: PasswordManagementBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'PasswordManagementBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'PasswordManagementBetaApi']
---

# PasswordManagementBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDigitToken**](PasswordManagementBetaApi.md#createDigitToken) | **POST** /generate-password-reset-token/digit | Generate a digit token
[**getIdentityPasswordChangeStatus**](PasswordManagementBetaApi.md#getIdentityPasswordChangeStatus) | **GET** /password-change-status/{id} | Get Password Change Request Status
[**queryPasswordInfo**](PasswordManagementBetaApi.md#queryPasswordInfo) | **POST** /query-password-info | Query Password Info
[**setIdentityPassword**](PasswordManagementBetaApi.md#setIdentityPassword) | **POST** /set-password | Set Identity\&#39;s Password



## createDigitToken

> PasswordDigitTokenBeta createDigitToken(passwordDigitTokenResetBeta)

Generate a digit token

This API is used to generate a digit token for password management. Requires authorization scope of \"idn:password-digit-token:create\".

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordDigitTokenResetBeta** | [**PasswordDigitTokenResetBeta**](../Models/PasswordDigitTokenResetBeta.md)|  | 

### Return type

[**PasswordDigitTokenBeta**](../Models/PasswordDigitTokenBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordManagementBetaApi, PasswordDigitTokenResetBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordManagementBetaApi = new PasswordManagementBetaApi(apiConfig);

{
  "digitToken" : "09087713",
  "requestId" : "e1267ecd-fcd9-4c73-9c55-12555efad136"
}


const passwordDigitTokenResetBeta : PasswordDigitTokenResetBeta = 

try {
    const val = await passwordManagementBetaApi.createDigitToken(passwordDigitTokenResetBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordManagementBetaApi.createDigitToken(passwordDigitTokenResetBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## getIdentityPasswordChangeStatus

> PasswordStatusBeta getIdentityPasswordChangeStatus(id)

Get Password Change Request Status

This API returns the status of a password change request. A token with identity owner or trusted API client application authority is required to call this API.

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**|  | [default to undefined]

### Return type

[**PasswordStatusBeta**](../Models/PasswordStatusBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordManagementBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordManagementBetaApi = new PasswordManagementBetaApi(apiConfig);

{
  "requestId" : "089899f13a8f4da7824996191587bab9",
  "state" : "IN_PROGRESS",
  "errors" : [ "errors", "errors" ],
  "sourceIds" : [ "sourceIds", "sourceIds" ]
}


const id : string = "id_example"; //  (default to undefined)

try {
    const val = await passwordManagementBetaApi.getIdentityPasswordChangeStatus(id);
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordManagementBetaApi.getIdentityPasswordChangeStatus(id);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## queryPasswordInfo

> PasswordInfoBeta queryPasswordInfo(passwordInfoQueryDTOBeta)

Query Password Info

This API is used to query password related information.   A token with [API authority](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow)  is required to call this API.  \"API authority\" refers to a token that only has the \"client_credentials\"  grant type, and therefore no user context. A [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens)  or a token generated with the [authorization_code](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow)  grant type will **NOT** work on this endpoint, and a `403 Forbidden` response  will be returned. 

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordInfoQueryDTOBeta** | [**PasswordInfoQueryDTOBeta**](../Models/PasswordInfoQueryDTOBeta.md)|  | 

### Return type

[**PasswordInfoBeta**](../Models/PasswordInfoBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordManagementBetaApi, PasswordInfoQueryDTOBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordManagementBetaApi = new PasswordManagementBetaApi(apiConfig);

{
  "sourceId" : "2c918083746f642c01746f990884012a",
  "identityId" : "2c918085744fec4301746f9a5bce4605",
  "policies" : [ "passwordRepeatedChar is 3", "passwordMinAlpha is 1", "passwordMinLength is 5", "passwordMinNumeric is 1" ],
  "publicKey" : "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuGFkWi2J75TztpbaPKd36bJnIB3J8gZ6UcoS9oSDYsqBzPpTsfZXYaEf4Y4BKGgJIXmE/lwhwuj7mU1itdZ2qTSNFtnXA8Fn75c3UUkk+h+wdZbkuSmqlsJo3R1OnJkwkJggcAy9Jvk9jlcrNLWorpQ1w9raUvxtvfgkSdq153KxotenQ1HciSyZ0nA/Kw0UaucLnho8xdRowZs11afXGXA9IT9H6D8T6zUdtSxm0nAyH+mluma5LdTfaM50W3l/L8q56Vrqmx2pZIiwdx/0+g3Y++jV70zom0ZBkC1MmSoLMrQYG5OICNjr72f78B2PaGXfarQHqARLjKpMVt9YIQIDAQAB",
  "accounts" : [ {
    "accountId" : "CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com",
    "accountName" : "Abby.Smith"
  }, {
    "accountId" : "CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com",
    "accountName" : "Abby.Smith"
  } ],
  "publicKeyId" : "N2M1OTJiMGEtMDJlZS00ZWU3LTkyYTEtNjA5YmI5NWE3ZWVh"
}


const passwordInfoQueryDTOBeta : PasswordInfoQueryDTOBeta = 

try {
    const val = await passwordManagementBetaApi.queryPasswordInfo(passwordInfoQueryDTOBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordManagementBetaApi.queryPasswordInfo(passwordInfoQueryDTOBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## setIdentityPassword

> PasswordChangeResponseBeta setIdentityPassword(passwordChangeRequestBeta)

Set Identity\'s Password

This API is used to set a password for an identity.   An identity can change their own password (as well as any of their accounts\' passwords) if they use a token generated by their ISC user, such as a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens) or [\"authorization_code\" derived OAuth token](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow).  A token with [API authority](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow) can be used to change **any** identity\'s password or the password of any of the identity\'s accounts.  \"API authority\" refers to a token that only has the \"client_credentials\" grant type.  >**Note: If you want to set an identity\'s source account password, you must enable `PASSWORD` as one of the source\'s features. You can use the [PATCH Source endpoint](https://developer.sailpoint.com/docs/api/v3/update-source) to add the `PASSWORD` feature.**  You can use this endpoint to generate an `encryptedPassword` (RSA encrypted using publicKey).  To do so, follow these steps:  1. Use [Query Password Info](https://developer.sailpoint.com/idn/api/v3/query-password-info) to get the following information: `identityId`, `sourceId`, `publicKeyId`, `publicKey`, `accounts`, and `policies`.   2. Choose an account from the previous response that you will provide as an `accountId` in your request to set an encrypted password.   3. Use [Set Identity\'s Password](https://developer.sailpoint.com/idn/api/v3/set-password) and provide the information you got from your earlier query. Then add this code to your request to get the encrypted password:  ```java import javax.crypto.Cipher; import java.security.KeyFactory; import java.security.PublicKey; import java.security.spec.X509EncodedKeySpec; import java util.Base64;  String encrypt(String publicKey, String toEncrypt) throws Exception {   byte[] publicKeyBytes = Base64.getDecoder().decode(publicKey);   byte[] encryptedBytes = encryptRsa(publicKeyBytes, toEncrypt.getBytes(\"UTF-8\"));   return Base64.getEncoder().encodeToString(encryptedBytes); }  private byte[] encryptRsa(byte[] publicKeyBytes, byte[] toEncryptBytes) throws Exception {   PublicKey key = KeyFactory.getInstance(\"RSA\").generatePublic(new X509EncodedKeySpec(publicKeyBytes));   String transformation = \"RSA/ECB/PKCS1Padding\";   Cipher cipher = Cipher.getInstance(transformation);   cipher.init(1, key);   return cipher.doFinal(toEncryptBytes); } ```      In this example, `toEncrypt` refers to the plain text password you are setting and then encrypting, and the `publicKey` refers to the publicKey you got from the first request you sent.   You can then use [Get Password Change Request Status](https://developer.sailpoint.com/idn/api/v3/get-password-change-status) to check the password change request status. To do so, you must provide the `requestId` from your earlier request to set the password.  

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordChangeRequestBeta** | [**PasswordChangeRequestBeta**](../Models/PasswordChangeRequestBeta.md)|  | 

### Return type

[**PasswordChangeResponseBeta**](../Models/PasswordChangeResponseBeta.md)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordManagementBetaApi, PasswordChangeRequestBeta } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordManagementBetaApi = new PasswordManagementBetaApi(apiConfig);

{
  "requestId" : "089899f13a8f4da7824996191587bab9",
  "state" : "IN_PROGRESS"
}


const passwordChangeRequestBeta : PasswordChangeRequestBeta = 

try {
    const val = await passwordManagementBetaApi.setIdentityPassword(passwordChangeRequestBeta);
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordManagementBetaApi.setIdentityPassword(passwordChangeRequestBeta);
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

