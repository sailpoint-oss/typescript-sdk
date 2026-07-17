---
id: v1-sp-config-object
title: SpConfigObject
pagination_label: SpConfigObject
sidebar_label: SpConfigObject
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SpConfigObject', 'v1SpConfigObject']
slug: /tools/sdk/typescript/sp_config/models/sp-config-object
tags: ['SDK', 'Software Development Kit', 'SpConfigObject', 'v1SpConfigObject']
---

# SpConfigObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectType** | **(optional)** `string` | Object type the configuration is for. | [default to undefined]
**referenceExtractors** | **(optional)** `Array<string>` | List of JSON paths within an exported object of this type, representing references that must be resolved. | [default to undefined]
**signatureRequired** | **(optional)** `boolean` | Indicates whether this type of object will be JWS signed and cannot be modified before import. | [default to false]
**alwaysResolveById** | **(optional)** `boolean` | Indicates whether this object type must be always be resolved by ID. | [default to false]
**legacyObject** | **(optional)** `boolean` | Indicates whether this is a legacy object. | [default to false]
**onePerTenant** | **(optional)** `boolean` | Indicates whether there is only one object of this type. | [default to false]
**exportable** | **(optional)** `boolean` | Indicates whether the object can be exported or is just a reference object. | [default to false]
**rules** | **(optional)** `SpConfigRules` |  | [default to undefined]

