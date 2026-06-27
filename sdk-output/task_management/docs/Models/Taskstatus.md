---
id: v1-taskstatus
title: Taskstatus
pagination_label: Taskstatus
sidebar_label: Taskstatus
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Taskstatus', 'v1Taskstatus']
slug: /tools/sdk/typescript/task_management/models/taskstatus
tags: ['SDK', 'Software Development Kit', 'Taskstatus', 'v1Taskstatus']
---

# Taskstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | System-generated unique ID of the task this TaskStatus represents | [default to undefined]
**type** | `string` | Type of task this TaskStatus represents | [default to undefined]
**uniqueName** | `string` | Name of the task this TaskStatus represents | [default to undefined]
**description** | `string` | Description of the task this TaskStatus represents | [default to undefined]
**parentName** | `string` | Name of the parent of the task this TaskStatus represents | [default to undefined]
**launcher** | `string` | Service to execute the task this TaskStatus represents | [default to undefined]
**target** | **(optional)** `Target` |  | [default to undefined]
**created** | `string` | Creation date of the task this TaskStatus represents | [default to undefined]
**modified** | `string` | Last modification date of the task this TaskStatus represents | [default to undefined]
**launched** | `string` | Launch date of the task this TaskStatus represents | [default to undefined]
**completed** | `string` | Completion date of the task this TaskStatus represents | [default to undefined]
**completionStatus** | `string` | Completion status of the task this TaskStatus represents | [default to undefined]
**messages** | `Array<Taskstatusmessage>` | Messages associated with the task this TaskStatus represents | [default to undefined]
**returns** | `Array<Taskreturndetails>` | Return values from the task this TaskStatus represents | [default to undefined]
**attributes** |  | Attributes of the task this TaskStatus represents | [default to undefined]
**progress** | `string` | Current progress of the task this TaskStatus represents | [default to undefined]
**percentComplete** | `number` | Current percentage completion of the task this TaskStatus represents | [default to undefined]
**taskDefinitionSummary** | **(optional)** `Taskdefinitionsummary` |  | [default to undefined]

