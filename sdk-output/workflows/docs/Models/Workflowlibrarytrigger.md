---
id: v1-workflowlibrarytrigger
title: Workflowlibrarytrigger
pagination_label: Workflowlibrarytrigger
sidebar_label: Workflowlibrarytrigger
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Workflowlibrarytrigger', 'v1Workflowlibrarytrigger']
slug: /tools/sdk/typescript/workflows/models/workflowlibrarytrigger
tags: ['SDK', 'Software Development Kit', 'Workflowlibrarytrigger', 'v1Workflowlibrarytrigger']
---

# Workflowlibrarytrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Trigger ID. This is a static namespaced ID for the trigger. | [default to undefined]
**type** | **(optional)** `string` | Trigger type | [default to undefined]
**deprecated** | **(optional)** `boolean` | Whether the trigger is deprecated. | [default to false]
**deprecatedBy** | **(optional)** `string` | Date the trigger was deprecated, if applicable. | [default to undefined]
**isSimulationEnabled** | **(optional)** `boolean` | Whether the trigger can be simulated. | [default to false]
**outputSchema** | **(optional)** `object` | Example output schema | [default to undefined]
**name** | **(optional)** `string` | Trigger Name | [default to undefined]
**description** | **(optional)** `string` | Trigger Description | [default to undefined]
**isDynamicSchema** | **(optional)** `boolean` | Determines whether the dynamic output schema is returned in place of the action\'s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [default to false]
**inputExample** | **(optional)** `object` | Example trigger payload if applicable | [default to undefined]
**formFields** | **(optional)** `Array<Workflowlibraryformfields>` | One or more inputs that the trigger accepts | [default to undefined]

