---
id: v1-intel-accounts-slice
title: IntelAccountsSlice
pagination_label: IntelAccountsSlice
sidebar_label: IntelAccountsSlice
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'IntelAccountsSlice', 'v1IntelAccountsSlice']
slug: /tools/sdk/typescript/intelligence/models/intel-accounts-slice
tags: ['SDK', 'Software Development Kit', 'IntelAccountsSlice', 'v1IntelAccountsSlice']
---

# IntelAccountsSlice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | `Array<IntelAccessAccountWire>` | First page of accounts for the identity. | [default to undefined]
**totalCount** | **(optional)** `number` | Total number of accounts for this identity; omitted when `items` is empty. | [default to undefined]
**next** | **(optional)** `string` | Absolute URL to the next accounts page; present when totalCount exceeds the items returned on this page. | [default to undefined]

