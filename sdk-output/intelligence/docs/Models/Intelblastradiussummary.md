---
id: v1-intelblastradiussummary
title: Intelblastradiussummary
pagination_label: Intelblastradiussummary
sidebar_label: Intelblastradiussummary
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Intelblastradiussummary', 'v1Intelblastradiussummary']
slug: /tools/sdk/typescript/intelligence/models/intelblastradiussummary
tags: ['SDK', 'Software Development Kit', 'Intelblastradiussummary', 'v1Intelblastradiussummary']
---

# Intelblastradiussummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impactedSources** | `Array<string>` | Source systems that may be impacted if compromised. | [default to undefined]
**impactedAccounts** | `number` | Linked machine accounts that may be impacted if compromised. | [default to undefined]
**impactedHumans** | `number` | Unique owners and authorized humans potentially impacted if compromised. | [default to undefined]
**hasEntitlements** | **(optional)** `boolean` | Whether this NHI holds entitlements included in summary. | [default to false]
**environments** | **(optional)** `Array<string>` | Environment labels for impacted access in this summary. | [default to undefined]
**accessTypes** | **(optional)** `Array<string>` | Access type labels for impacted access in this summary. | [default to undefined]

