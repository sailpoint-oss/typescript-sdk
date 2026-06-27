---
id: v1-createstreamrequest
title: Createstreamrequest
pagination_label: Createstreamrequest
sidebar_label: Createstreamrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Createstreamrequest', 'v1Createstreamrequest']
slug: /tools/sdk/typescript/shared_signals_framework_ssf/models/createstreamrequest
tags: ['SDK', 'Software Development Kit', 'Createstreamrequest', 'v1Createstreamrequest']
---

# Createstreamrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery** | `Createstreamdeliveryrequest` |  | [default to undefined]
**events_requested** | **(optional)** `Array<string>` | Optional list of event types the receiver wants. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [default to undefined]
**description** | **(optional)** `string` | Optional human-readable description of the stream. | [default to undefined]

