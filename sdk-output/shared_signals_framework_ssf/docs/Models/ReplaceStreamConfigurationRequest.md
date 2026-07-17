---
id: v1-replace-stream-configuration-request
title: ReplaceStreamConfigurationRequest
pagination_label: ReplaceStreamConfigurationRequest
sidebar_label: ReplaceStreamConfigurationRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ReplaceStreamConfigurationRequest', 'v1ReplaceStreamConfigurationRequest']
slug: /tools/sdk/typescript/shared_signals_framework_ssf/models/replace-stream-configuration-request
tags: ['SDK', 'Software Development Kit', 'ReplaceStreamConfigurationRequest', 'v1ReplaceStreamConfigurationRequest']
---

# ReplaceStreamConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | `string` | ID of the stream to replace. | [default to undefined]
**delivery** | `ReplaceStreamConfigurationRequestDelivery` |  | [default to undefined]
**events_requested** | **(optional)** `Array<string>` | Event types the receiver wants. Use CAEP event-type URIs. | [default to undefined]
**description** | **(optional)** `string` | Optional human-readable description of the stream. | [default to undefined]

