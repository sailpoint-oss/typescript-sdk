---
id: v1-requested-for-dto-ref
title: RequestedForDtoRef
pagination_label: RequestedForDtoRef
sidebar_label: RequestedForDtoRef
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RequestedForDtoRef', 'v1RequestedForDtoRef']
slug: /tools/sdk/typescript/access_requests/models/requested-for-dto-ref
tags: ['SDK', 'Software Development Kit', 'RequestedForDtoRef', 'v1RequestedForDtoRef']
---

# RequestedForDtoRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | `string` | The identity id the access is requested for. * `HUMAN` (default): the human identity id. * `MACHINE`: the machine identity id (hyphenated RFC-4122 UUID, not the correlated human identity).  | [default to undefined]
**identityType** | **(optional)** `string` | Type of identity the access is requested for. * `HUMAN` (default) - standard human identity access request. * `MACHINE` - machine identity access request. When `MACHINE`, all entries in the request must also be `MACHINE` (mixed human and machine identities in one request are not supported), and only `ENTITLEMENT` items are allowed.  | [default to IdentityTypeEnum_Human]
**requestedItems** | `Array<RequestedItemDtoRef>` | the details for the access items that are requested for the identity | [default to undefined]

