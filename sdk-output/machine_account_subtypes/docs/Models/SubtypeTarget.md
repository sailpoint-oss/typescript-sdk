---
id: v1-subtype-target
title: SubtypeTarget
pagination_label: SubtypeTarget
sidebar_label: SubtypeTarget
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SubtypeTarget', 'v1SubtypeTarget']
slug: /tools/sdk/typescript/machine_account_subtypes/models/subtype-target
tags: ['SDK', 'Software Development Kit', 'SubtypeTarget', 'v1SubtypeTarget']
---

# SubtypeTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Type of the target. | [default to undefined]
**id** | **(optional)** `string` | Source ID for a `SOURCE` target, or connector type for a `CONNECTOR` target. | [default to undefined]
**name** | **(optional)** `string` | Name of the source or connector. | [default to undefined]
**supportsProvisioning** | **(optional)** `boolean` | Indicates whether the target supports provisioning. Only returned when you get a single subtype by ID. | [default to false]

