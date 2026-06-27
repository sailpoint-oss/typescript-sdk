---
id: v1-accessprofile
title: Accessprofile
pagination_label: Accessprofile
sidebar_label: Accessprofile
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accessprofile', 'v1Accessprofile']
slug: /tools/sdk/typescript/dimensions/models/accessprofile
tags: ['SDK', 'Software Development Kit', 'Accessprofile', 'v1Accessprofile']
---

# Accessprofile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Access profile ID. | [readonly] [default to undefined]
**name** | `string` | Access profile name. | [default to undefined]
**description** | **(optional)** `string` | Access profile description. | [default to undefined]
**created** | **(optional)** `string` | Date and time when the access profile was created. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Date and time when the access profile was last modified. | [readonly] [default to undefined]
**enabled** | **(optional)** `boolean` | Indicates whether the access profile is enabled. If it\'s enabled, you must include at least one entitlement. | [default to false]
**owner** | `Ownerreference` |  | [default to undefined]
**source** | `Accessprofilesourceref` |  | [default to undefined]
**entitlements** | **(optional)** `Array<Entitlementref>` | List of entitlements associated with the access profile. If `enabled` is false, this can be empty. Otherwise, it must contain at least one entitlement. | [default to undefined]
**requestable** | **(optional)** `boolean` | Indicates whether the access profile is requestable by access request. Currently, making an access profile non-requestable is only supported  for customers enabled with the new Request Center. Otherwise, attempting to create an access profile with a value  **false** in this field results in a 400 error. | [default to true]
**accessRequestConfig** | **(optional)** `Requestability` |  | [default to undefined]
**revocationRequestConfig** | **(optional)** `Revocability` |  | [default to undefined]
**segments** | **(optional)** `Array<string>` | List of segment IDs, if any, that the access profile is assigned to. | [default to undefined]
**accessModelMetadata** | **(optional)** `Attributedtolist` |  | [default to undefined]
**provisioningCriteria** | **(optional)** `Provisioningcriterialevel1` |  | [default to undefined]
**additionalOwners** | **(optional)** `Array<Additionalownerref>` | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [default to undefined]

