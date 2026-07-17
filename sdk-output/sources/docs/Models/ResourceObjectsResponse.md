---
id: v1-resource-objects-response
title: ResourceObjectsResponse
pagination_label: ResourceObjectsResponse
sidebar_label: ResourceObjectsResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ResourceObjectsResponse', 'v1ResourceObjectsResponse']
slug: /tools/sdk/typescript/sources/models/resource-objects-response
tags: ['SDK', 'Software Development Kit', 'ResourceObjectsResponse', 'v1ResourceObjectsResponse']
---

# ResourceObjectsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the source | [readonly] [default to undefined]
**name** | **(optional)** `string` | Name of the source | [readonly] [default to undefined]
**objectCount** | **(optional)** `number` | The number of objects that were fetched by the connector. | [readonly] [default to undefined]
**elapsedMillis** | **(optional)** `number` | The number of milliseconds spent on the entire request. | [readonly] [default to undefined]
**resourceObjects** | **(optional)** `Array<ResourceObject>` | Fetched objects from the source connector. | [readonly] [default to undefined]

