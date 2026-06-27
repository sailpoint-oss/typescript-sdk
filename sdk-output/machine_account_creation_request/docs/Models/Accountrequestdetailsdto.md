---
id: v1-accountrequestdetailsdto
title: Accountrequestdetailsdto
pagination_label: Accountrequestdetailsdto
sidebar_label: Accountrequestdetailsdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accountrequestdetailsdto', 'v1Accountrequestdetailsdto']
slug: /tools/sdk/typescript/machine_account_creation_request/models/accountrequestdetailsdto
tags: ['SDK', 'Software Development Kit', 'Accountrequestdetailsdto', 'v1Accountrequestdetailsdto']
---

# Accountrequestdetailsdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountRequestId** | **(optional)** `string` | Account request ID. | [default to undefined]
**requestType** | **(optional)** `string` | Type of the account request. | [default to undefined]
**createdAt** | **(optional)** `string` | Machine account creation request creation date and time. | [readonly] [default to undefined]
**completedAt** | **(optional)** `string` | Machine account creation request completion date and time. | [readonly] [default to undefined]
**overallStatus** | **(optional)** `string` | Overall status of the creation request. | [default to undefined]
**requester** | **(optional)** `AccountrequestdetailsdtoRequester` |  | [default to undefined]
**accountRequestPhases** | **(optional)** `Array<Accountrequestphase>` | List of account request phases. | [default to undefined]
**errorDetails** | **(optional)** `string` | Detailed error information. | [default to undefined]

