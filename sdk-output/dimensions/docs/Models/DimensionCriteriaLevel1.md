---
id: v1-dimension-criteria-level1
title: DimensionCriteriaLevel1
pagination_label: DimensionCriteriaLevel1
sidebar_label: DimensionCriteriaLevel1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'DimensionCriteriaLevel1', 'v1DimensionCriteriaLevel1']
slug: /tools/sdk/typescript/dimensions/models/dimension-criteria-level1
tags: ['SDK', 'Software Development Kit', 'DimensionCriteriaLevel1', 'v1DimensionCriteriaLevel1']
---

# DimensionCriteriaLevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `DimensionCriteriaOperation` |  | [default to undefined]
**key** | **(optional)** `DimensionCriteriaKey` |  | [default to undefined]
**stringValue** | **(optional)** `string` | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is  EQUALS, this field is required. Otherwise, specifying it is an error. | [default to undefined]
**children** | **(optional)** `Array<DimensionCriteriaLevel2>` | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [default to undefined]

