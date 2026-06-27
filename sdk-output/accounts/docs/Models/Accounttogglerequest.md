---
id: v1-accounttogglerequest
title: Accounttogglerequest
pagination_label: Accounttogglerequest
sidebar_label: Accounttogglerequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accounttogglerequest', 'v1Accounttogglerequest']
slug: /tools/sdk/typescript/accounts/models/accounttogglerequest
tags: ['SDK', 'Software Development Kit', 'Accounttogglerequest', 'v1Accounttogglerequest']
---

# Accounttogglerequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalVerificationId** | **(optional)** `string` | If set, an external process validates that the user wants to proceed with this request. | [default to undefined]
**forceProvisioning** | **(optional)** `boolean` | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. Providing \'true\' for an unlocked account will add and process \'Unlock\' operation by the workflow. | [default to undefined]

