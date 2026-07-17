---
id: v1-provisioning-criteria-level2
title: ProvisioningCriteriaLevel2
pagination_label: ProvisioningCriteriaLevel2
sidebar_label: ProvisioningCriteriaLevel2
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ProvisioningCriteriaLevel2', 'v1ProvisioningCriteriaLevel2']
slug: /tools/sdk/typescript/dimensions/models/provisioning-criteria-level2
tags: ['SDK', 'Software Development Kit', 'ProvisioningCriteriaLevel2', 'v1ProvisioningCriteriaLevel2']
---

# ProvisioningCriteriaLevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `ProvisioningCriteriaOperation` |  | [default to undefined]
**attribute** | **(optional)** `string` | Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error. | [default to undefined]
**value** | **(optional)** `string` | String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type. | [default to undefined]
**children** | **(optional)** `Array<ProvisioningCriteriaLevel3>` | Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [default to undefined]

