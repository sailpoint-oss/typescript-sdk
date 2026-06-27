---
id: v1-nativechangedetectionconfig
title: Nativechangedetectionconfig
pagination_label: Nativechangedetectionconfig
sidebar_label: Nativechangedetectionconfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Nativechangedetectionconfig', 'v1Nativechangedetectionconfig']
slug: /tools/sdk/typescript/sources/models/nativechangedetectionconfig
tags: ['SDK', 'Software Development Kit', 'Nativechangedetectionconfig', 'v1Nativechangedetectionconfig']
---

# Nativechangedetectionconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | A flag indicating if Native Change Detection is enabled for a source. | [default to false]
**operations** | **(optional)** `Array<string>` | Operation types for which Native Change Detection is enabled for a source. | [default to undefined]
**allEntitlements** | **(optional)** `boolean` | A flag indicating that all entitlements participate in Native Change Detection. | [default to false]
**allNonEntitlementAttributes** | **(optional)** `boolean` | A flag indicating that all non-entitlement account attributes participate in Native Change Detection. | [default to false]
**selectedEntitlements** | **(optional)** `Array<string>` | If allEntitlements flag is off this field lists entitlements that participate in Native Change Detection. | [default to undefined]
**selectedNonEntitlementAttributes** | **(optional)** `Array<string>` | If allNonEntitlementAttributes flag is off this field lists non-entitlement account attributes that participate in Native Change Detection. | [default to undefined]

