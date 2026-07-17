---
id: v1-create-stream-request
title: CreateStreamRequest
pagination_label: CreateStreamRequest
sidebar_label: CreateStreamRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreateStreamRequest', 'v1CreateStreamRequest']
slug: /tools/sdk/typescript/shared_signals_framework_ssf/models/create-stream-request
tags: ['SDK', 'Software Development Kit', 'CreateStreamRequest', 'v1CreateStreamRequest']
---

# CreateStreamRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery** | `CreateStreamDeliveryRequest` |  | [default to undefined]
**events_requested** | **(optional)** `Array<string>` | Optional list of event types the receiver wants. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [default to undefined]
**description** | **(optional)** `string` | Optional human-readable description of the stream. | [default to undefined]

