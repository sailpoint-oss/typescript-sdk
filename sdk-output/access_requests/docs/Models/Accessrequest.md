---
id: v1-accessrequest
title: Accessrequest
pagination_label: Accessrequest
sidebar_label: Accessrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accessrequest', 'v1Accessrequest']
slug: /tools/sdk/typescript/access_requests/models/accessrequest
tags: ['SDK', 'Software Development Kit', 'Accessrequest', 'v1Accessrequest']
---

# Accessrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFor** | `Array<string>` | A list of Identity IDs for whom the Access is requested. If it\'s a Revoke request, there can only be one Identity ID. | [default to undefined]
**requestType** | **(optional)** `Accessrequesttype` |  | [default to undefined]
**requestedItems** | `Array<Accessrequestitem>` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [default to undefined]
**requestedForWithRequestedItems** | **(optional)** `Array<Requestedfordtoref>` | Additional submit data structure with requestedFor containing requestedItems allowing distinction for each request item and Identity. * Can only be used when \'requestedFor\' and \'requestedItems\' are not separately provided * Adds ability to specify which account the user wants the access on, in case they have multiple accounts on a source * Allows the ability to request items with different start dates * Allows the ability to request items with different remove dates * Also allows different combinations of request items and identities in the same request * Only for use in GRANT_ACCESS type requests  | [default to undefined]

