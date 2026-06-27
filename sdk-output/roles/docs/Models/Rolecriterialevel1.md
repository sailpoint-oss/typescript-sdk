---
id: v1-rolecriterialevel1
title: Rolecriterialevel1
pagination_label: Rolecriterialevel1
sidebar_label: Rolecriterialevel1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Rolecriterialevel1', 'v1Rolecriterialevel1']
slug: /tools/sdk/typescript/roles/models/rolecriterialevel1
tags: ['SDK', 'Software Development Kit', 'Rolecriterialevel1', 'v1Rolecriterialevel1']
---

# Rolecriterialevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `Rolecriteriaoperation` |  | [default to undefined]
**key** | **(optional)** `Rolecriteriakey` |  | [default to undefined]
**stringValue** | **(optional)** `string` | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [default to undefined]
**children** | **(optional)** `Array<Rolecriterialevel2>` | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [default to undefined]

