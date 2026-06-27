---
id: v1-transmittermetadata
title: Transmittermetadata
pagination_label: Transmittermetadata
sidebar_label: Transmittermetadata
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Transmittermetadata', 'v1Transmittermetadata']
slug: /tools/sdk/typescript/shared_signals_framework_ssf/models/transmittermetadata
tags: ['SDK', 'Software Development Kit', 'Transmittermetadata', 'v1Transmittermetadata']
---

# Transmittermetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spec_version** | **(optional)** `string` | Version of the SSF specification supported. | [default to undefined]
**issuer** | **(optional)** `string` | Base URL of the transmitter (issuer). | [default to undefined]
**jwks_uri** | **(optional)** `string` | URL of the transmitter\'s JSON Web Key Set. | [default to undefined]
**delivery_methods_supported** | **(optional)** `Array<string>` | Supported delivery methods (e.g. push URN). | [default to undefined]
**configuration_endpoint** | **(optional)** `string` | Endpoint for stream configuration (create, read, update, replace, delete). | [default to undefined]
**status_endpoint** | **(optional)** `string` | Endpoint for reading and updating stream status. | [default to undefined]
**verification_endpoint** | **(optional)** `string` | Endpoint for receiver verification. | [default to undefined]
**authorization_schemes** | **(optional)** `Array<Authorizationscheme>` | Supported authorization schemes (e.g. OAuth2, Bearer). | [default to undefined]

