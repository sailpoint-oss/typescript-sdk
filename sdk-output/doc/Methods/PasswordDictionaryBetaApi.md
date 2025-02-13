---
title: PasswordDictionaryBetaApi
pagination_label: PasswordDictionaryBetaApi
sidebar_label: PasswordDictionaryBetaApi
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'sdk', 'PasswordDictionaryBetaApi'] 
tags: ['SDK', 'Software Development Kit', 'PasswordDictionaryBetaApi']
---

# PasswordDictionaryBetaApi

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPasswordDictionary**](PasswordDictionaryBetaApi.md#getPasswordDictionary) | **GET** /password-dictionary | Get Password Dictionary
[**putPasswordDictionary**](PasswordDictionaryBetaApi.md#putPasswordDictionary) | **PUT** /password-dictionary | Update Password Dictionary



## getPasswordDictionary

> string getPasswordDictionary()

Get Password Dictionary

This gets password dictionary for the organization. The password dictionary file can contain lines that are: 1. comment lines - the first character is \'#\', can be 128 Unicode codepoints in length, and are ignored during processing 2. empty lines 3. locale line - the first line that starts with \"locale=\" is considered to be locale line, the rest are treated as normal content lines 4. line containing the password dictionary word - it must start with non-whitespace character and only non-whitespace characters are allowed;         maximum length of the line is 128 Unicode codepoints   Password dictionary file may not contain more than 2,500 lines (not counting whitespace lines, comment lines and locale line).   Password dict file must contain UTF-8 characters only.  # Sample password text file  ```  # Password dictionary small test file  locale=en_US  # Password dictionary prohibited words  qwerty abcd aaaaa password qazxsws  ```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordDictionaryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordDictionaryBetaApi = new PasswordDictionaryBetaApi(apiConfig);

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



try {
    const val = await passwordDictionaryBetaApi.getPasswordDictionary();
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordDictionaryBetaApi.getPasswordDictionary();
    console.log('API called successfully. Returned data: ' + val.data);
    
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>


## putPasswordDictionary

> putPasswordDictionary(file)

Update Password Dictionary

This updates password dictionary for the organization. The password dictionary file can contain lines that are: 1. comment lines - the first character is \'#\', can be 128 Unicode codepoints in length, and are ignored during processing 2. empty lines 3. locale line - the first line that starts with \"locale=\" is considered to be locale line, the rest are treated as normal content lines 4. line containing the password dictionary word - it must start with non-whitespace character and only non-whitespace characters are allowed;         maximum length of the line is 128 Unicode codepoints   Password dictionary file may not contain more than 2,500 lines (not counting whitespace lines, comment lines and locale line).   Password dict file must contain UTF-8 characters only.  # Sample password text file  ```  # Password dictionary small test file  locale=en_US  # Password dictionary prohibited words  qwerty abcd aaaaa password qazxsws  ```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**|  | [optional] [default to undefined]

### Return type

null (empty response body)

### Authorization

[userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication), [userAuth](https://developer.sailpoint.com/docs/api/v3/identity-security-cloud-v-3-api#authentication)

<details>
<summary>Example</summary>

```javascript
import { Configuration, PasswordDictionaryBetaApi } from "sailpoint-api-client";
const apiConfig = new Configuration();
const passwordDictionaryBetaApi = new PasswordDictionaryBetaApi(apiConfig);

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


const file : File = BINARY_DATA_HERE; //  (optional) (default to undefined)

try {
    const val = await passwordDictionaryBetaApi.putPasswordDictionary();
    
    // Below is a request that includes all optional parameters      
    // const val = await passwordDictionaryBetaApi.putPasswordDictionary(file);
    
    console.log('API called successfully.');
} catch (error) {
    console.error('Error occurred while calling API: ', error);
}
```
</details>

