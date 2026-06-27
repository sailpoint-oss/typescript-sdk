---
id: v1-passwordinfo
title: Passwordinfo
pagination_label: Passwordinfo
sidebar_label: Passwordinfo
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Passwordinfo', 'v1Passwordinfo']
slug: /tools/sdk/typescript/password_management/models/passwordinfo
tags: ['SDK', 'Software Development Kit', 'Passwordinfo', 'v1Passwordinfo']
---

# Passwordinfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **(optional)** `string` | Identity ID | [default to undefined]
**sourceId** | **(optional)** `string` | source ID | [default to undefined]
**publicKeyId** | **(optional)** `string` | public key ID | [default to undefined]
**publicKey** | **(optional)** `string` | User\'s public key with Base64 encoding | [default to undefined]
**accounts** | **(optional)** `Array<Passwordinfoaccount>` | Account info related to queried identity and source | [default to undefined]
**policies** | **(optional)** `Array<string>` | Password constraints | [default to undefined]

