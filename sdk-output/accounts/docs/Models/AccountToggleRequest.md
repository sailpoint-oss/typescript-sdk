---
id: v1-account-toggle-request
title: AccountToggleRequest
pagination_label: AccountToggleRequest
sidebar_label: AccountToggleRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountToggleRequest', 'v1AccountToggleRequest']
slug: /tools/sdk/typescript/accounts/models/account-toggle-request
tags: ['SDK', 'Software Development Kit', 'AccountToggleRequest', 'v1AccountToggleRequest']
---

# AccountToggleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalVerificationId** | **(optional)** `string` | If set, an external process validates that the user wants to proceed with this request. | [default to undefined]
**forceProvisioning** | **(optional)** `boolean` | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. Providing \'true\' for an unlocked account will add and process \'Unlock\' operation by the workflow. | [default to undefined]

