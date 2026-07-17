---
id: v1-sp-config-import-job-status
title: SpConfigImportJobStatus
pagination_label: SpConfigImportJobStatus
sidebar_label: SpConfigImportJobStatus
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SpConfigImportJobStatus', 'v1SpConfigImportJobStatus']
slug: /tools/sdk/typescript/sp_config/models/sp-config-import-job-status
tags: ['SDK', 'Software Development Kit', 'SpConfigImportJobStatus', 'v1SpConfigImportJobStatus']
---

# SpConfigImportJobStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | `string` | Unique id assigned to this job. | [default to undefined]
**status** | `string` | Status of the job. | [default to undefined]
**type** | `string` | Type of the job, either export or import. | [default to undefined]
**expiration** | **(optional)** `string` | The time until which the artifacts will be available for download. | [default to undefined]
**created** | `string` | The time the job was started. | [default to undefined]
**modified** | `string` | The time of the last update to the job. | [default to undefined]
**message** | **(optional)** `string` | This message contains additional information about the overall status of the job. | [default to undefined]
**completed** | **(optional)** `string` | The time the job was completed. | [default to undefined]

