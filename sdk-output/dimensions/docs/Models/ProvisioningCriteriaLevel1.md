---
id: v1-provisioning-criteria-level1
title: ProvisioningCriteriaLevel1
pagination_label: ProvisioningCriteriaLevel1
sidebar_label: ProvisioningCriteriaLevel1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ProvisioningCriteriaLevel1', 'v1ProvisioningCriteriaLevel1']
slug: /tools/sdk/typescript/dimensions/models/provisioning-criteria-level1
tags: ['SDK', 'Software Development Kit', 'ProvisioningCriteriaLevel1', 'v1ProvisioningCriteriaLevel1']
---

# ProvisioningCriteriaLevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `ProvisioningCriteriaOperation` |  | [default to undefined]
**attribute** | **(optional)** `string` | Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error. | [default to undefined]
**value** | **(optional)** `string` | String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type. | [default to undefined]
**children** | **(optional)** `Array<ProvisioningCriteriaLevel2>` | Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [default to undefined]

