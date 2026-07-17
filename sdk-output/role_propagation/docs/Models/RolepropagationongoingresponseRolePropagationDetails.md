---
id: v1-rolepropagationongoingresponse-role-propagation-details
title: RolepropagationongoingresponseRolePropagationDetails
pagination_label: RolepropagationongoingresponseRolePropagationDetails
sidebar_label: RolepropagationongoingresponseRolePropagationDetails
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RolepropagationongoingresponseRolePropagationDetails', 'v1RolepropagationongoingresponseRolePropagationDetails']
slug: /tools/sdk/typescript/role_propagation/models/rolepropagationongoingresponse-role-propagation-details
tags: ['SDK', 'Software Development Kit', 'RolepropagationongoingresponseRolePropagationDetails', 'v1RolepropagationongoingresponseRolePropagationDetails']
---

# RolepropagationongoingresponseRolePropagationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the Role Propagation process triggered. | [default to undefined]
**status** | **(optional)** `string` | Status of the Role Propagation process. | [default to undefined]
**executionStage** | **(optional)** `string` | Current execution stage of the Role Propagation process. | [default to undefined]
**launched** | **(optional)** `string` | Time when the Role Propagation process was launched. | [default to undefined]
**launchedBy** | **(optional)** `RolepropagationstatusresponseLaunchedBy` |  | [default to undefined]
**terminatedBy** | **(optional)** `RolepropagationstatusresponseTerminatedBy` |  | [default to undefined]
**completed** | **(optional)** `string` | Time when the Role Propagation process was completed. | [default to undefined]
**failureReason** | **(optional)** `string` | Reason for failure if the Role Propagation process failed. | [default to undefined]
**skipRoleRefresh** | **(optional)** `boolean` | Indicates if the role refresh was skipped during the Role Propagation process. | [default to false]

