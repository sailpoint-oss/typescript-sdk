---
id: v1-additional-owner-ref
title: AdditionalOwnerRef
pagination_label: AdditionalOwnerRef
sidebar_label: AdditionalOwnerRef
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AdditionalOwnerRef', 'v1AdditionalOwnerRef']
slug: /tools/sdk/typescript/dimensions/models/additional-owner-ref
tags: ['SDK', 'Software Development Kit', 'AdditionalOwnerRef', 'v1AdditionalOwnerRef']
---

# AdditionalOwnerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Type of the additional owner; IDENTITY for an identity, GOVERNANCE_GROUP for a governance group. | [default to undefined]
**id** | **(optional)** `string` | ID of the identity or governance group. | [default to undefined]
**name** | **(optional)** `string` | Display name. It may be left null or omitted on input. If set, it must match the current display name of the identity or governance group, otherwise a 400 Bad Request error may result. | [default to undefined]

