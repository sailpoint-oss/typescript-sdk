---
id: v1-loadaccountstask-task
title: LoadaccountstaskTask
pagination_label: LoadaccountstaskTask
sidebar_label: LoadaccountstaskTask
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'LoadaccountstaskTask', 'v1LoadaccountstaskTask']
slug: /tools/sdk/typescript/sources/models/loadaccountstask-task
tags: ['SDK', 'Software Development Kit', 'LoadaccountstaskTask', 'v1LoadaccountstaskTask']
---

# LoadaccountstaskTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the task this taskStatus represents | [default to undefined]
**type** | **(optional)** `string` | Type of task this task represents | [default to undefined]
**name** | **(optional)** `string` | The name of the aggregation process | [default to undefined]
**description** | **(optional)** `string` | The description of the task | [default to undefined]
**launcher** | **(optional)** `string` | The user who initiated the task | [default to undefined]
**created** | **(optional)** `string` | The Task creation date | [default to undefined]
**launched** | **(optional)** `string` | The task start date | [default to undefined]
**completed** | **(optional)** `string` | The task completion date | [default to undefined]
**completionStatus** | **(optional)** `string` | Task completion status. | [default to undefined]
**parentName** | **(optional)** `string` | Name of the parent task if exists. | [default to undefined]
**messages** | **(optional)** `Array<LoadaccountstaskTaskMessagesInner>` | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [default to undefined]
**progress** | **(optional)** `string` | Current task state. | [default to undefined]
**attributes** | **(optional)** `LoadaccountstaskTaskAttributes` |  | [default to undefined]
**returns** | **(optional)** `Array<LoadaccountstaskTaskReturnsInner>` | Return values from the task | [default to undefined]

