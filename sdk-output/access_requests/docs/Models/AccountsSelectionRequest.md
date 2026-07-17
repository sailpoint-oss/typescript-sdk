---
id: v1-accounts-selection-request
title: AccountsSelectionRequest
pagination_label: AccountsSelectionRequest
sidebar_label: AccountsSelectionRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountsSelectionRequest', 'v1AccountsSelectionRequest']
slug: /tools/sdk/typescript/access_requests/models/accounts-selection-request
tags: ['SDK', 'Software Development Kit', 'AccountsSelectionRequest', 'v1AccountsSelectionRequest']
---

# AccountsSelectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFor** | `Array<string>` | A list of Identity IDs for whom the Access is requested. | [default to undefined]
**requestType** | **(optional)** `AccessRequestType` |  | [default to undefined]
**requestedItems** | `Array<AccessRequestItem>` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities.   | [default to undefined]

