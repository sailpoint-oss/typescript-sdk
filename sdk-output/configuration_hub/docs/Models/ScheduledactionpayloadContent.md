---
id: v1-scheduledactionpayload-content
title: ScheduledactionpayloadContent
pagination_label: ScheduledactionpayloadContent
sidebar_label: ScheduledactionpayloadContent
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ScheduledactionpayloadContent', 'v1ScheduledactionpayloadContent']
slug: /tools/sdk/typescript/configuration_hub/models/scheduledactionpayload-content
tags: ['SDK', 'Software Development Kit', 'ScheduledactionpayloadContent', 'v1ScheduledactionpayloadContent']
---

# ScheduledactionpayloadContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Name of the scheduled action (maximum 50 characters). | [default to undefined]
**backupOptions** | **(optional)** `ScheduledactionpayloadContentBackupOptions` |  | [default to undefined]
**sourceBackupId** | **(optional)** `string` | ID of the source backup. Required for CREATE_DRAFT jobs. | [default to undefined]
**sourceTenant** | **(optional)** `string` | Source tenant identifier. Required for CREATE_DRAFT jobs. | [default to undefined]
**draftId** | **(optional)** `string` | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs. | [default to undefined]

