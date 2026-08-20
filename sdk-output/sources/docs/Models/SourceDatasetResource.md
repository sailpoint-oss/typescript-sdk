---
id: v1-source-dataset-resource
title: SourceDatasetResource
pagination_label: SourceDatasetResource
sidebar_label: SourceDatasetResource
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SourceDatasetResource', 'v1SourceDatasetResource']
slug: /tools/sdk/typescript/sources/models/source-dataset-resource
tags: ['SDK', 'Software Development Kit', 'SourceDatasetResource', 'v1SourceDatasetResource']
---

# SourceDatasetResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Resource identifier. Server-generated on create. | [readonly] [default to undefined]
**name** | **(optional)** `string` | Display name of the resource. Required on create. | [default to undefined]
**features** | **(optional)** `Array<string>` | Feature identifiers supported by this resource. | [default to undefined]
**type** | **(optional)** `string` | Resource type. Required on create. | [default to undefined]
**datasetId** | **(optional)** `string` | Dataset identifier to associate this resource with. Required on create. | [default to undefined]
**schema** | **(optional)** `Schema` |  | [default to undefined]

