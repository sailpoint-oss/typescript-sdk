---
id: v1-error-response-dto
title: ErrorResponseDto
pagination_label: ErrorResponseDto
sidebar_label: ErrorResponseDto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ErrorResponseDto', 'v1ErrorResponseDto']
slug: /tools/sdk/typescript/gov_certification/models/error-response-dto
tags: ['SDK', 'Software Development Kit', 'ErrorResponseDto', 'v1ErrorResponseDto']
---

# ErrorResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailCode** | **(optional)** `string` | Fine-grained error code providing more detail of the error. | [default to undefined]
**trackingId** | **(optional)** `string` | Unique tracking id for the error. | [default to undefined]
**messages** | **(optional)** `Array<ErrorMessageDto2>` | Generic localized reason for error | [default to undefined]
**causes** | **(optional)** `Array<ErrorMessageDto2>` | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [default to undefined]

