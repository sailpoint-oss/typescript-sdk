---
id: v1-scheduledactionresponse-content
title: ScheduledactionresponseContent
pagination_label: ScheduledactionresponseContent
sidebar_label: ScheduledactionresponseContent
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ScheduledactionresponseContent', 'v1ScheduledactionresponseContent']
slug: /tools/sdk/typescript/configuration_hub/models/scheduledactionresponse-content
tags: ['SDK', 'Software Development Kit', 'ScheduledactionresponseContent', 'v1ScheduledactionresponseContent']
---

# ScheduledactionresponseContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | Name of the scheduled action (maximum 50 characters). | [default to undefined]
**backupOptions** | **(optional)** `ScheduledactionresponseContentBackupOptions` |  | [default to undefined]
**sourceBackupId** | **(optional)** `string` | ID of the source backup. Required for CREATE_DRAFT jobs only. | [default to undefined]
**sourceTenant** | **(optional)** `string` | Source tenant identifier. Required for CREATE_DRAFT jobs only. | [default to undefined]
**draftId** | **(optional)** `string` | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs only. | [default to undefined]

