---
id: v1-additionalownerref
title: Additionalownerref
pagination_label: Additionalownerref
sidebar_label: Additionalownerref
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Additionalownerref', 'v1Additionalownerref']
slug: /tools/sdk/typescript/entitlements/models/additionalownerref
tags: ['SDK', 'Software Development Kit', 'Additionalownerref', 'v1Additionalownerref']
---

# Additionalownerref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Type of the additional owner; IDENTITY for an identity, GOVERNANCE_GROUP for a governance group. | [default to undefined]
**id** | **(optional)** `string` | ID of the identity or governance group. | [default to undefined]
**name** | **(optional)** `string` | Display name. It may be left null or omitted on input. If set, it must match the current display name of the identity or governance group, otherwise a 400 Bad Request error may result. | [default to undefined]

