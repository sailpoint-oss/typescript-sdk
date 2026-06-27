---
id: v1-spconfigexportjob
title: Spconfigexportjob
pagination_label: Spconfigexportjob
sidebar_label: Spconfigexportjob
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Spconfigexportjob', 'v1Spconfigexportjob']
slug: /tools/sdk/typescript/sp_config/models/spconfigexportjob
tags: ['SDK', 'Software Development Kit', 'Spconfigexportjob', 'v1Spconfigexportjob']
---

# Spconfigexportjob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | `string` | Unique id assigned to this job. | [default to undefined]
**status** | `string` | Status of the job. | [default to undefined]
**type** | `string` | Type of the job, either export or import. | [default to undefined]
**expiration** | **(optional)** `string` | The time until which the artifacts will be available for download. | [default to undefined]
**created** | `string` | The time the job was started. | [default to undefined]
**modified** | `string` | The time of the last update to the job. | [default to undefined]
**description** | **(optional)** `string` | Optional user defined description/name for export job. | [default to undefined]

