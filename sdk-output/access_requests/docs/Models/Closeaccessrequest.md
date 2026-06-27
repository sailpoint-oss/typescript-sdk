---
id: v1-closeaccessrequest
title: Closeaccessrequest
pagination_label: Closeaccessrequest
sidebar_label: Closeaccessrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Closeaccessrequest', 'v1Closeaccessrequest']
slug: /tools/sdk/typescript/access_requests/models/closeaccessrequest
tags: ['SDK', 'Software Development Kit', 'Closeaccessrequest', 'v1Closeaccessrequest']
---

# Closeaccessrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestIds** | `Array<string>` | Access Request IDs for the requests to be closed. Accepts 1-500 Identity Request IDs per request. | [default to undefined]
**message** | **(optional)** `string` | Reason for closing the access request. Displayed under Warnings in IdentityNow. | [default to 'The IdentityNow Administrator manually closed this request.']
**executionStatus** | **(optional)** `string` | The request\'s provisioning status. Displayed as Stage in IdentityNow. | [default to ExecutionStatusEnum_Terminated]
**completionStatus** | **(optional)** `string` | The request\'s overall status. Displayed as Status in IdentityNow. | [default to CompletionStatusEnum_Failure]

