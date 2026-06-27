---
id: v1-mfaduoconfig
title: Mfaduoconfig
pagination_label: Mfaduoconfig
sidebar_label: Mfaduoconfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Mfaduoconfig', 'v1Mfaduoconfig']
slug: /tools/sdk/typescript/mfa_configuration/models/mfaduoconfig
tags: ['SDK', 'Software Development Kit', 'Mfaduoconfig', 'v1Mfaduoconfig']
---

# Mfaduoconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mfaMethod** | **(optional)** `string` | Mfa method name | [default to undefined]
**enabled** | **(optional)** `boolean` | If MFA method is enabled. | [default to false]
**host** | **(optional)** `string` | The server host name or IP address of the MFA provider. | [default to undefined]
**accessKey** | **(optional)** `string` | The secret key for authenticating requests to the MFA provider. | [default to undefined]
**identityAttribute** | **(optional)** `string` | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [default to undefined]
**configProperties** | **(optional)**  | A map with additional config properties for the given MFA method - duo-web. | [default to undefined]

