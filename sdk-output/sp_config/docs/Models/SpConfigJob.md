---
id: v1-sp-config-job
title: SpConfigJob
pagination_label: SpConfigJob
sidebar_label: SpConfigJob
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SpConfigJob', 'v1SpConfigJob']
slug: /tools/sdk/typescript/sp_config/models/sp-config-job
tags: ['SDK', 'Software Development Kit', 'SpConfigJob', 'v1SpConfigJob']
---

# SpConfigJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | `string` | Unique id assigned to this job. | [default to undefined]
**status** | `string` | Status of the job. | [default to undefined]
**type** | `string` | Type of the job, either export or import. | [default to undefined]
**expiration** | **(optional)** `string` | The time until which the artifacts will be available for download. | [default to undefined]
**created** | `string` | The time the job was started. | [default to undefined]
**modified** | `string` | The time of the last update to the job. | [default to undefined]

