---
id: v1-criteria
title: Criteria
pagination_label: Criteria
sidebar_label: Criteria
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Criteria', 'v1Criteria']
slug: /tools/sdk/typescript/gov_certification/models/criteria
tags: ['SDK', 'Software Development Kit', 'Criteria', 'v1Criteria']
---

# Criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteriaType** | `CriteriaType` |  | [default to undefined]
**operation** | `Operation` |  | [default to undefined]
**criteriaProperty** | **(optional)** `string` | The specified key from the Type of criteria. | [default to undefined]
**criteriaValue** | **(optional)** `string` | The value for the specified key from the Type of Criteria. Used for scalar operations. Must be absent when operation is IN. | [default to undefined]
**criteriaValues** | **(optional)** `Array<string>` | List of values for the IN operation. Required when operation is IN; must be absent for all other operations. | [default to undefined]
**children** | **(optional)** `Array<Criteria>` | List of child criteria. Applicable only for COMPOSITE criteriaType | [default to undefined]

