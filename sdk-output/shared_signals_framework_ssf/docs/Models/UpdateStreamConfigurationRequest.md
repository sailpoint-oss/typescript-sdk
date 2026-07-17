---
id: v1-update-stream-configuration-request
title: UpdateStreamConfigurationRequest
pagination_label: UpdateStreamConfigurationRequest
sidebar_label: UpdateStreamConfigurationRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'UpdateStreamConfigurationRequest', 'v1UpdateStreamConfigurationRequest']
slug: /tools/sdk/typescript/shared_signals_framework_ssf/models/update-stream-configuration-request
tags: ['SDK', 'Software Development Kit', 'UpdateStreamConfigurationRequest', 'v1UpdateStreamConfigurationRequest']
---

# UpdateStreamConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | `string` | ID of the stream to update. | [default to undefined]
**delivery** | **(optional)** `DeliveryRequest` |  | [default to undefined]
**events_requested** | **(optional)** `Array<string>` | Event types the receiver wants. Use CAEP event-type URIs. | [default to undefined]
**description** | **(optional)** `string` | Optional human-readable description of the stream. | [default to undefined]

