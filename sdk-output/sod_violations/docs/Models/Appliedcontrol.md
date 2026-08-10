---
id: v1-appliedcontrol
title: Appliedcontrol
pagination_label: Appliedcontrol
sidebar_label: Appliedcontrol
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Appliedcontrol', 'v1Appliedcontrol']
slug: /tools/sdk/typescript/sod_violations/models/appliedcontrol
tags: ['SDK', 'Software Development Kit', 'Appliedcontrol', 'v1Appliedcontrol']
---

# Appliedcontrol

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The system-generated unique identifier of the applied control record. | [default to undefined]
**violation** | `string` | The unique identifier of the policy violation the control was applied to. | [default to undefined]
**control** | `Referenceresponse` |  | [default to undefined]
**applier** | `Referenceresponse` |  | [default to undefined]
**appliedDate** | `string` | The date and time when the control was applied to the violation. | [readonly] [default to undefined]
**expiration** | `string` | The date and time when the applied control expires. | [readonly] [default to undefined]
**comments** | **(optional)** `string` | Optional comments captured when the control was applied. | [default to undefined]
**status** | **(optional)** `Appliedcontrolstatus` |  | [default to undefined]
**workflowId** | **(optional)** `string` | The identifier of the workflow triggered when the control was applied. | [default to undefined]

