---
id: v1-close-access-request
title: CloseAccessRequest
pagination_label: CloseAccessRequest
sidebar_label: CloseAccessRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CloseAccessRequest', 'v1CloseAccessRequest']
slug: /tools/sdk/typescript/access_requests/models/close-access-request
tags: ['SDK', 'Software Development Kit', 'CloseAccessRequest', 'v1CloseAccessRequest']
---

# CloseAccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestIds** | `Array<string>` | Access Request IDs for the requests to be closed. Accepts 1-500 Identity Request IDs per request. | [default to undefined]
**message** | **(optional)** `string` | Reason for closing the access request. Displayed under Warnings in IdentityNow. | [default to 'The IdentityNow Administrator manually closed this request.']
**executionStatus** | **(optional)** `string` | The request\'s provisioning status. Displayed as Stage in IdentityNow. | [default to ExecutionStatusEnum_Terminated]
**completionStatus** | **(optional)** `string` | The request\'s overall status. Displayed as Status in IdentityNow. | [default to CompletionStatusEnum_Failure]

