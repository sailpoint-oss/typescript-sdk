---
id: v1-provisioningcriterialevel3
title: Provisioningcriterialevel3
pagination_label: Provisioningcriterialevel3
sidebar_label: Provisioningcriterialevel3
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Provisioningcriterialevel3', 'v1Provisioningcriterialevel3']
slug: /tools/sdk/typescript/access_profiles/models/provisioningcriterialevel3
tags: ['SDK', 'Software Development Kit', 'Provisioningcriterialevel3', 'v1Provisioningcriterialevel3']
---

# Provisioningcriterialevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `Provisioningcriteriaoperation` |  | [default to undefined]
**attribute** | **(optional)** `string` | Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error. | [default to undefined]
**value** | **(optional)** `string` | String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type. | [default to undefined]
**children** | **(optional)** `string` | Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [default to undefined]

