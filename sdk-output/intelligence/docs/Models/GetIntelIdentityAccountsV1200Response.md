---
id: v1-get-intel-identity-accounts-v1200-response
title: GetIntelIdentityAccountsV1200Response
pagination_label: GetIntelIdentityAccountsV1200Response
sidebar_label: GetIntelIdentityAccountsV1200Response
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'GetIntelIdentityAccountsV1200Response', 'v1GetIntelIdentityAccountsV1200Response']
slug: /tools/sdk/typescript/intelligence/models/get-intel-identity-accounts-v1200-response
tags: ['SDK', 'Software Development Kit', 'GetIntelIdentityAccountsV1200Response', 'v1GetIntelIdentityAccountsV1200Response']
---

# GetIntelIdentityAccountsV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | `Array<IntelAccessAccountWire>` | First page of accounts for the identity. | [default to undefined]
**totalCount** | **(optional)** `number` | Total number of accounts for this identity; omitted when `items` is empty. | [default to undefined]
**next** | **(optional)** `string` | Absolute URL to the next accounts page; present when totalCount exceeds the items returned on this page. | [default to undefined]

