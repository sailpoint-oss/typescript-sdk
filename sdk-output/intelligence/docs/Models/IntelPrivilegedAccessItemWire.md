---
id: v1-intel-privileged-access-item-wire
title: IntelPrivilegedAccessItemWire
pagination_label: IntelPrivilegedAccessItemWire
sidebar_label: IntelPrivilegedAccessItemWire
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'IntelPrivilegedAccessItemWire', 'v1IntelPrivilegedAccessItemWire']
slug: /tools/sdk/typescript/intelligence/models/intel-privileged-access-item-wire
tags: ['SDK', 'Software Development Kit', 'IntelPrivilegedAccessItemWire', 'v1IntelPrivilegedAccessItemWire']
---

# IntelPrivilegedAccessItemWire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privileged** | `boolean` | True when this item is classified as privileged access for the identity. | [default to undefined]
**id** | `string` | Identifier of the privileged access item. | [default to undefined]
**type** | `string` | Type of privileged access object. | [default to undefined]
**displayName** | **(optional)** `string` | Display label for the privileged access item in administrative experiences. | [default to undefined]
**name** | **(optional)** `string` | Technical name of the privileged access item. | [default to undefined]
**source** | **(optional)** `IntelPrivilegedAccessItemWireSource` |  | [default to undefined]
**attribute** | **(optional)** `string` | Source attribute name that carries the privileged value when applicable. | [default to undefined]
**value** | **(optional)** `string` | Privileged value on the source attribute when applicable. | [default to undefined]

