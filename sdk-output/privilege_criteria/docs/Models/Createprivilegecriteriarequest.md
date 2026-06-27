---
id: v1-createprivilegecriteriarequest
title: Createprivilegecriteriarequest
pagination_label: Createprivilegecriteriarequest
sidebar_label: Createprivilegecriteriarequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Createprivilegecriteriarequest', 'v1Createprivilegecriteriarequest']
slug: /tools/sdk/typescript/privilege_criteria/models/createprivilegecriteriarequest
tags: ['SDK', 'Software Development Kit', 'Createprivilegecriteriarequest', 'v1Createprivilegecriteriarequest']
---

# Createprivilegecriteriarequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceId** | **(optional)** `string` | The Id of the source that the criteria is applied to. | [default to undefined]
**type** | **(optional)** `string` | The type of criteria being created. Expects \"CUSTOM\". | [default to undefined]
**operator** | **(optional)** `string` | The logical operator to apply between groups. | [default to undefined]
**groups** | **(optional)** `Array<CreateprivilegecriteriarequestGroupsInner>` |  | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The privilege level assigned by this criteria. | [default to undefined]

