---
id: v1-accountactionrequestdto
title: Accountactionrequestdto
pagination_label: Accountactionrequestdto
sidebar_label: Accountactionrequestdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accountactionrequestdto', 'v1Accountactionrequestdto']
slug: /tools/sdk/typescript/account_deletion_requests/models/accountactionrequestdto
tags: ['SDK', 'Software Development Kit', 'Accountactionrequestdto', 'v1Accountactionrequestdto']
---

# Accountactionrequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountRequestId** | **(optional)** `string` | Account requester ID. | [default to undefined]
**requestType** | **(optional)** `string` | Access item requester\'s identity ID. | [default to undefined]
**createdAt** | **(optional)** `string` | Creation date and time of account deletion request date. | [readonly] [default to undefined]
**completedAt** | **(optional)** `string` | Account deletion request completion date and time. | [readonly] [default to undefined]
**overallStatus** | **(optional)** `string` | Overall status of deletion request. | [default to undefined]
**requester** | **(optional)** `AccountactionrequestdtoRequester` |  | [default to undefined]
**requesterComments** | **(optional)** `string` | Comments added by the requester while creating the account deletion request. | [default to undefined]
**accountDetails** | **(optional)** `AccountactionrequestdtoAccountDetails` |  | [default to undefined]
**correlatedIdentity** | **(optional)** `AccountactionrequestdtoCorrelatedIdentity` |  | [default to undefined]
**managerReference** | **(optional)** `Identityreference` |  | [default to undefined]
**approvalRequestId** | **(optional)** `string` | ID of the approval request associated with the account deletion action. | [default to undefined]
**accountRequestPhases** | **(optional)** `Array<Accountrequestphase>` | List of account request phases. | [default to undefined]
**approvalDetails** | **(optional)** `Array<Approvaldetails>` | List approval details | [default to undefined]
**errorDetails** | **(optional)** `string` | Detailed error information. | [default to undefined]

