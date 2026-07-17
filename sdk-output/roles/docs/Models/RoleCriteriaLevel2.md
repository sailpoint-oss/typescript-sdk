---
id: v1-role-criteria-level2
title: RoleCriteriaLevel2
pagination_label: RoleCriteriaLevel2
sidebar_label: RoleCriteriaLevel2
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleCriteriaLevel2', 'v1RoleCriteriaLevel2']
slug: /tools/sdk/typescript/roles/models/role-criteria-level2
tags: ['SDK', 'Software Development Kit', 'RoleCriteriaLevel2', 'v1RoleCriteriaLevel2']
---

# RoleCriteriaLevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `RoleCriteriaOperation` |  | [default to undefined]
**key** | **(optional)** `RoleCriteriaKey` |  | [default to undefined]
**stringValue** | **(optional)** `string` | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [default to undefined]
**children** | **(optional)** `Array<RoleCriteriaLevel3>` | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [default to undefined]

