---
id: v1-intelidentityambiguousbody
title: Intelidentityambiguousbody
pagination_label: Intelidentityambiguousbody
sidebar_label: Intelidentityambiguousbody
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Intelidentityambiguousbody', 'v1Intelidentityambiguousbody']
slug: /tools/sdk/typescript/intelligence/models/intelidentityambiguousbody
tags: ['SDK', 'Software Development Kit', 'Intelidentityambiguousbody', 'v1Intelidentityambiguousbody']
---

# Intelidentityambiguousbody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailCode** | `string` | Constant detail code indicating that more than one identity matched the filter. | [default to undefined]
**trackingId** | **(optional)** `string` | Unique tracking id for the error. | [default to undefined]
**messages** | **(optional)** `Array<ErrorMessageDto>` | Generic localized reason for error | [default to undefined]
**causes** | **(optional)** `Array<ErrorMessageDto>` | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [default to undefined]
**candidates** | `Array<Intelidentityambiguouscandidate>` | Identities that matched the ambiguous filter expression. | [default to undefined]

