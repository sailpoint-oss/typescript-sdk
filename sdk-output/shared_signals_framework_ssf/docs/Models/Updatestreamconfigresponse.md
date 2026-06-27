---
id: v1-updatestreamconfigresponse
title: Updatestreamconfigresponse
pagination_label: Updatestreamconfigresponse
sidebar_label: Updatestreamconfigresponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Updatestreamconfigresponse', 'v1Updatestreamconfigresponse']
slug: /tools/sdk/typescript/shared_signals_framework_ssf/models/updatestreamconfigresponse
tags: ['SDK', 'Software Development Kit', 'Updatestreamconfigresponse', 'v1Updatestreamconfigresponse']
---

# Updatestreamconfigresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **(optional)** `string` | Unique stream identifier. | [default to undefined]
**iss** | **(optional)** `string` | Issuer (transmitter) URL. | [default to undefined]
**aud** | **(optional)** `string` | Audience for the stream. | [default to undefined]
**delivery** | **(optional)** `Deliveryresponse` |  | [default to undefined]
**events_supported** | **(optional)** `Array<string>` | Event types supported by the transmitter. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session-revoked).  | [default to undefined]
**events_requested** | **(optional)** `Array<string>` | Event types requested by the receiver. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [default to undefined]
**events_delivered** | **(optional)** `Array<string>` | Event types currently being delivered (intersection of supported and requested). | [default to undefined]
**description** | **(optional)** `string` | Optional stream description. | [default to undefined]
**inactivity_timeout** | **(optional)** `number` | Inactivity timeout in seconds (optional). | [default to undefined]
**min_verification_interval** | **(optional)** `number` | Minimum verification interval in seconds (optional). | [default to undefined]
**updatedAt** | **(optional)** `string` | Timestamp of the last configuration update. | [default to undefined]

