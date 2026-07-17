---
id: v1-scheduled-action-response-content
title: ScheduledActionResponseContent
pagination_label: ScheduledActionResponseContent
sidebar_label: ScheduledActionResponseContent
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ScheduledActionResponseContent', 'v1ScheduledActionResponseContent']
slug: /tools/sdk/typescript/configuration_hub/models/scheduled-action-response-content
tags: ['SDK', 'Software Development Kit', 'ScheduledActionResponseContent', 'v1ScheduledActionResponseContent']
---

# ScheduledActionResponseContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | Name of the scheduled action (maximum 50 characters). | [default to undefined]
**backupOptions** | **(optional)** `ScheduledActionResponseContentBackupOptions` |  | [default to undefined]
**sourceBackupId** | **(optional)** `string` | ID of the source backup. Required for CREATE_DRAFT jobs only. | [default to undefined]
**sourceTenant** | **(optional)** `string` | Source tenant identifier. Required for CREATE_DRAFT jobs only. | [default to undefined]
**draftId** | **(optional)** `string` | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs only. | [default to undefined]

