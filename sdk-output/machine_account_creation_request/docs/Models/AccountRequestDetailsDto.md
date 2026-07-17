---
id: v1-account-request-details-dto
title: AccountRequestDetailsDto
pagination_label: AccountRequestDetailsDto
sidebar_label: AccountRequestDetailsDto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountRequestDetailsDto', 'v1AccountRequestDetailsDto']
slug: /tools/sdk/typescript/machine_account_creation_request/models/account-request-details-dto
tags: ['SDK', 'Software Development Kit', 'AccountRequestDetailsDto', 'v1AccountRequestDetailsDto']
---

# AccountRequestDetailsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountRequestId** | **(optional)** `string` | Account request ID. | [default to undefined]
**requestType** | **(optional)** `string` | Type of the account request. | [default to undefined]
**createdAt** | **(optional)** `string` | Machine account creation request creation date and time. | [readonly] [default to undefined]
**completedAt** | **(optional)** `string` | Machine account creation request completion date and time. | [readonly] [default to undefined]
**overallStatus** | **(optional)** `string` | Overall status of the creation request. | [default to undefined]
**requester** | **(optional)** `AccountRequestDetailsDtoRequester` |  | [default to undefined]
**accountRequestPhases** | **(optional)** `Array<AccountRequestPhase>` | List of account request phases. | [default to undefined]
**errorDetails** | **(optional)** `string` | Detailed error information. | [default to undefined]

