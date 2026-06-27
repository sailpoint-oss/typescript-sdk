---
id: v1-passwordchangerequest
title: Passwordchangerequest
pagination_label: Passwordchangerequest
sidebar_label: Passwordchangerequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Passwordchangerequest', 'v1Passwordchangerequest']
slug: /tools/sdk/typescript/password_management/models/passwordchangerequest
tags: ['SDK', 'Software Development Kit', 'Passwordchangerequest', 'v1Passwordchangerequest']
---

# Passwordchangerequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **(optional)** `string` | The identity ID that requested the password change | [default to undefined]
**encryptedPassword** | **(optional)** `string` | The RSA encrypted password | [default to undefined]
**publicKeyId** | **(optional)** `string` | The encryption key ID | [default to undefined]
**accountId** | **(optional)** `string` | Account ID of the account This is specified per account schema in the source configuration. It is used to distinguish accounts. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-ID-for-a/ta-p/80350 | [default to undefined]
**sourceId** | **(optional)** `string` | The ID of the source for which identity is requesting the password change | [default to undefined]

