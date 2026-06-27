---
id: v1-machineidentityaggregationresponse
title: Machineidentityaggregationresponse
pagination_label: Machineidentityaggregationresponse
sidebar_label: Machineidentityaggregationresponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Machineidentityaggregationresponse', 'v1Machineidentityaggregationresponse']
slug: /tools/sdk/typescript/machine_identities/models/machineidentityaggregationresponse
tags: ['SDK', 'Software Development Kit', 'Machineidentityaggregationresponse', 'v1Machineidentityaggregationresponse']
---

# Machineidentityaggregationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [default to undefined]
**type** | **(optional)** `string` | Type of task for aggregation | [default to undefined]
**uniqueName** | **(optional)** `string` | Name of the task for aggregation | [default to undefined]
**description** | **(optional)** `string` | Description of the aggregation | [default to undefined]
**parentName** | **(optional)** `string` | Name of the parent of the task for aggregation | [default to undefined]
**launcher** | **(optional)** `string` | Service to execute the aggregation | [default to undefined]
**target** | **(optional)** `MachineidentityaggregationresponseTarget` |  | [default to undefined]
**created** | **(optional)** `string` | Creation date of the aggregation | [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the aggregation | [default to undefined]
**launched** | **(optional)** `string` | Launch date of the aggregation | [default to undefined]
**completed** | **(optional)** `string` | Completion date of the aggregation | [default to undefined]
**taskDefinitionSummary** | **(optional)** `Taskdefinitionsummary` |  | [default to undefined]
**completionStatus** | **(optional)** `string` | Completion status of the aggregation | [default to undefined]
**messages** | **(optional)** `Array<Taskstatusmessage>` | Messages associated with the aggregation | [default to undefined]
**returns** | **(optional)** `Array<Taskreturndetails>` | Return values associated with the aggregation | [default to undefined]
**attributes** | **(optional)**  | Attributes of the aggregation | [default to undefined]
**progress** | **(optional)** `string` | Current progress of aggregation | [default to undefined]
**percentComplete** | **(optional)** `number` | Current percentage completion of aggregation | [default to undefined]

