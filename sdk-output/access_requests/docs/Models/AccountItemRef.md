---
id: v1-account-item-ref
title: AccountItemRef
pagination_label: AccountItemRef
sidebar_label: AccountItemRef
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountItemRef', 'v1AccountItemRef']
slug: /tools/sdk/typescript/access_requests/models/account-item-ref
tags: ['SDK', 'Software Development Kit', 'AccountItemRef', 'v1AccountItemRef']
---

# AccountItemRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountUuid** | **(optional)** `string` | The uuid for the account on the source, available under the \'objectguid\' attribute * Corresponds to the account\'s unique identifier as returned by accounts-selection or the accounts APIs. * For machine identity GRANT_ACCESS / MODIFY_ACCESS, provide `accountUuid` and/or `nativeIdentity`. Submitted values must match a real machine account for the requested machine identity on the selected source. | [default to undefined]
**nativeIdentity** | **(optional)** `string` | The \'distinguishedName\' attribute for the account. * For machine identity GRANT_ACCESS / MODIFY_ACCESS, provide `accountUuid` and/or `nativeIdentity`. Submitted values must match a real machine account for the requested machine identity on the selected source. | [default to undefined]

