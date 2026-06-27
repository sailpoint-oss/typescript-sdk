---
id: v1-rolecriterialevel2
title: Rolecriterialevel2
pagination_label: Rolecriterialevel2
sidebar_label: Rolecriterialevel2
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Rolecriterialevel2', 'v1Rolecriterialevel2']
slug: /tools/sdk/typescript/roles/models/rolecriterialevel2
tags: ['SDK', 'Software Development Kit', 'Rolecriterialevel2', 'v1Rolecriterialevel2']
---

# Rolecriterialevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `Rolecriteriaoperation` |  | [default to undefined]
**key** | **(optional)** `Rolecriteriakey` |  | [default to undefined]
**stringValue** | **(optional)** `string` | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [default to undefined]
**children** | **(optional)** `Array<Rolecriterialevel3>` | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [default to undefined]

