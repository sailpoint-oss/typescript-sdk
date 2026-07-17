---
id: v1-workflow-body
title: WorkflowBody
pagination_label: WorkflowBody
sidebar_label: WorkflowBody
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'WorkflowBody', 'v1WorkflowBody']
slug: /tools/sdk/typescript/workflows/models/workflow-body
tags: ['SDK', 'Software Development Kit', 'WorkflowBody', 'v1WorkflowBody']
---

# WorkflowBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The name of the workflow | [default to undefined]
**owner** | **(optional)** `WorkflowBodyOwner` |  | [default to undefined]
**description** | **(optional)** `string` | Description of what the workflow accomplishes | [default to undefined]
**definition** | **(optional)** `WorkflowDefinition` |  | [default to undefined]
**enabled** | **(optional)** `boolean` | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [default to false]
**trigger** | **(optional)** `WorkflowTrigger` |  | [default to undefined]

