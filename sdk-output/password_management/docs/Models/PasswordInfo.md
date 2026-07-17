---
id: v1-password-info
title: PasswordInfo
pagination_label: PasswordInfo
sidebar_label: PasswordInfo
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PasswordInfo', 'v1PasswordInfo']
slug: /tools/sdk/typescript/password_management/models/password-info
tags: ['SDK', 'Software Development Kit', 'PasswordInfo', 'v1PasswordInfo']
---

# PasswordInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **(optional)** `string` | Identity ID | [default to undefined]
**sourceId** | **(optional)** `string` | source ID | [default to undefined]
**publicKeyId** | **(optional)** `string` | public key ID | [default to undefined]
**publicKey** | **(optional)** `string` | User\'s public key with Base64 encoding | [default to undefined]
**accounts** | **(optional)** `Array<PasswordInfoAccount>` | Account info related to queried identity and source | [default to undefined]
**policies** | **(optional)** `Array<string>` | Password constraints | [default to undefined]

