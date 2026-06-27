---
id: v1-resourcemodel
title: Resourcemodel
pagination_label: Resourcemodel
sidebar_label: Resourcemodel
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Resourcemodel', 'v1Resourcemodel']
slug: /tools/sdk/typescript/data_access_security/models/resourcemodel
tags: ['SDK', 'Software Development Kit', 'Resourcemodel', 'v1Resourcemodel']
---

# Resourcemodel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `number` | The unique identifier for the resource. | [default to undefined]
**name** | **(optional)** `string` | The display name or label for the resource. | [default to undefined]
**fullPath** | **(optional)** `string` | The full path to the resource within the system or application. | [default to undefined]
**applicationId** | **(optional)** `number` | The unique identifier of the application to which this resource belongs. | [default to undefined]
**type** | **(optional)** `Businessservicetype` |  | [default to undefined]
**owners** | **(optional)** `Array<string>` | A list of UUIDs representing the owners of the resource. | [default to undefined]

