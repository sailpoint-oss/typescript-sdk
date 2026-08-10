---
id: v1-intel-identity-not-found-body
title: IntelIdentityNotFoundBody
pagination_label: IntelIdentityNotFoundBody
sidebar_label: IntelIdentityNotFoundBody
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'IntelIdentityNotFoundBody', 'v1IntelIdentityNotFoundBody']
slug: /tools/sdk/typescript/intelligence/models/intel-identity-not-found-body
tags: ['SDK', 'Software Development Kit', 'IntelIdentityNotFoundBody', 'v1IntelIdentityNotFoundBody']
---

# IntelIdentityNotFoundBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailCode** | `string` | Constant detail code indicating that no identity matched the supplied filter. | [default to undefined]
**trackingId** | **(optional)** `string` | Unique tracking id for the error. | [default to undefined]
**messages** | **(optional)** `Array<ErrorMessageDto>` | Generic localized reason for error | [default to undefined]
**causes** | **(optional)** `Array<ErrorMessageDto>` | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [default to undefined]

