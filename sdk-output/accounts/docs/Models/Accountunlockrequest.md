---
id: v1-accountunlockrequest
title: Accountunlockrequest
pagination_label: Accountunlockrequest
sidebar_label: Accountunlockrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accountunlockrequest', 'v1Accountunlockrequest']
slug: /tools/sdk/typescript/accounts/models/accountunlockrequest
tags: ['SDK', 'Software Development Kit', 'Accountunlockrequest', 'v1Accountunlockrequest']
---

# Accountunlockrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalVerificationId** | **(optional)** `string` | If set, an external process validates that the user wants to proceed with this request. | [default to undefined]
**unlockIDNAccount** | **(optional)** `boolean` | If set, the IDN account is unlocked after the workflow completes. | [default to undefined]
**forceProvisioning** | **(optional)** `boolean` | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. | [default to undefined]

