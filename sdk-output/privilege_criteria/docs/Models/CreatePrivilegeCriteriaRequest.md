---
id: v1-create-privilege-criteria-request
title: CreatePrivilegeCriteriaRequest
pagination_label: CreatePrivilegeCriteriaRequest
sidebar_label: CreatePrivilegeCriteriaRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreatePrivilegeCriteriaRequest', 'v1CreatePrivilegeCriteriaRequest']
slug: /tools/sdk/typescript/privilege_criteria/models/create-privilege-criteria-request
tags: ['SDK', 'Software Development Kit', 'CreatePrivilegeCriteriaRequest', 'v1CreatePrivilegeCriteriaRequest']
---

# CreatePrivilegeCriteriaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceId** | **(optional)** `string` | The Id of the source that the criteria is applied to. | [default to undefined]
**type** | **(optional)** `string` | The type of criteria being created. Expects \"CUSTOM\". | [default to undefined]
**operator** | **(optional)** `string` | The logical operator to apply between groups. | [default to undefined]
**groups** | **(optional)** `Array<CreatePrivilegeCriteriaRequestGroupsInner>` |  | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The privilege level assigned by this criteria. | [default to undefined]

