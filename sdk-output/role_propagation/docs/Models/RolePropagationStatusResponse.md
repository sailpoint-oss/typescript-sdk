---
id: v1-role-propagation-status-response
title: RolePropagationStatusResponse
pagination_label: RolePropagationStatusResponse
sidebar_label: RolePropagationStatusResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RolePropagationStatusResponse', 'v1RolePropagationStatusResponse']
slug: /tools/sdk/typescript/role_propagation/models/role-propagation-status-response
tags: ['SDK', 'Software Development Kit', 'RolePropagationStatusResponse', 'v1RolePropagationStatusResponse']
---

# RolePropagationStatusResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the Role Propagation process triggered. | [default to undefined]
**status** | **(optional)** `string` | Status of the Role Propagation process. | [default to undefined]
**executionStage** | **(optional)** `string` | Current execution stage of the Role Propagation process. | [default to undefined]
**launched** | **(optional)** `string` | Time when the Role Propagation process was launched. | [default to undefined]
**launchedBy** | **(optional)** `RolePropagationStatusResponseLaunchedBy` |  | [default to undefined]
**terminatedBy** | **(optional)** `RolePropagationStatusResponseTerminatedBy` |  | [default to undefined]
**completed** | **(optional)** `string` | Time when the Role Propagation process was completed. | [default to undefined]
**failureReason** | **(optional)** `string` | Reason for failure if the Role Propagation process failed. | [default to undefined]
**skipRoleRefresh** | **(optional)** `boolean` | Indicates if the role refresh was skipped during the Role Propagation process. | [default to false]

