---
id: v1-accountsselectionrequest
title: Accountsselectionrequest
pagination_label: Accountsselectionrequest
sidebar_label: Accountsselectionrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accountsselectionrequest', 'v1Accountsselectionrequest']
slug: /tools/sdk/typescript/access_requests/models/accountsselectionrequest
tags: ['SDK', 'Software Development Kit', 'Accountsselectionrequest', 'v1Accountsselectionrequest']
---

# Accountsselectionrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFor** | `Array<string>` | A list of Identity IDs for whom the Access is requested. | [default to undefined]
**requestType** | **(optional)** `Accessrequesttype` |  | [default to undefined]
**requestedItems** | `Array<Accessrequestitem>` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities.   | [default to undefined]

