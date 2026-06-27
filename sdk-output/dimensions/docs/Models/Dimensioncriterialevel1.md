---
id: v1-dimensioncriterialevel1
title: Dimensioncriterialevel1
pagination_label: Dimensioncriterialevel1
sidebar_label: Dimensioncriterialevel1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Dimensioncriterialevel1', 'v1Dimensioncriterialevel1']
slug: /tools/sdk/typescript/dimensions/models/dimensioncriterialevel1
tags: ['SDK', 'Software Development Kit', 'Dimensioncriterialevel1', 'v1Dimensioncriterialevel1']
---

# Dimensioncriterialevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `Dimensioncriteriaoperation` |  | [default to undefined]
**key** | **(optional)** `Dimensioncriteriakey` |  | [default to undefined]
**stringValue** | **(optional)** `string` | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is  EQUALS, this field is required. Otherwise, specifying it is an error. | [default to undefined]
**children** | **(optional)** `Array<Dimensioncriterialevel2>` | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [default to undefined]

