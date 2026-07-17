---
id: v1-create-workflow-v1-request
title: CreateWorkflowV1Request
pagination_label: CreateWorkflowV1Request
sidebar_label: CreateWorkflowV1Request
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreateWorkflowV1Request', 'v1CreateWorkflowV1Request']
slug: /tools/sdk/typescript/workflows/models/create-workflow-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateWorkflowV1Request', 'v1CreateWorkflowV1Request']
---

# CreateWorkflowV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the workflow | [default to undefined]
**owner** | **(optional)** `WorkflowBodyOwner` |  | [default to undefined]
**description** | **(optional)** `string` | Description of what the workflow accomplishes | [default to undefined]
**definition** | **(optional)** `WorkflowDefinition` |  | [default to undefined]
**enabled** | **(optional)** `boolean` | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [default to false]
**trigger** | **(optional)** `WorkflowTrigger` |  | [default to undefined]

