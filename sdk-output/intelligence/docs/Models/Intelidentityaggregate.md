---
id: v1-intelidentityaggregate
title: Intelidentityaggregate
pagination_label: Intelidentityaggregate
sidebar_label: Intelidentityaggregate
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Intelidentityaggregate', 'v1Intelidentityaggregate']
slug: /tools/sdk/typescript/intelligence/models/intelidentityaggregate
tags: ['SDK', 'Software Development Kit', 'Intelidentityaggregate', 'v1Intelidentityaggregate']
---

# Intelidentityaggregate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Identity Security Cloud identifier for this identity. | [default to undefined]
**type** | `string` | Identity type for the matched record. | [default to undefined]
**displayName** | **(optional)** `string` | Preferred display name for the identity across administrative experiences. | [default to undefined]
**description** | **(optional)** `string` | Optional free-text description assigned to the identity profile when present. | [default to undefined]
**subtype** | **(optional)** `string` | NERM classification for the identity. | [default to undefined]
**owners** | **(optional)** `string` | Serialized owner reference information when populated by upstream identity services. | [default to undefined]
**attributes** | **(optional)**  | Arbitrary SCIM-style attribute bag returned for the identity context view. | [default to undefined]
**created** | **(optional)** `string` | Timestamp when the identity record was created in Identity Security Cloud. | [default to undefined]
**modified** | **(optional)** `string` | Timestamp when the identity record was last modified in Identity Security Cloud. | [default to undefined]
**alias** | **(optional)** `string` | Primary login or account alias for the identity. | [default to undefined]
**email** | **(optional)** `string` | Primary business email address for the identity. | [default to undefined]
**identityStatus** | **(optional)** `string` | Current identity lifecycle status label from Identity Security Cloud. | [default to undefined]
**isManager** | `boolean` | True when the identity is flagged as a people manager in the organization. | [default to undefined]
**accounts** | `Intelaccountsslice` | First page of accounts for the identity. | [default to undefined]
**privilegedAccess** | `Intelprivilegedaccessslice` | Full privileged access result for the identity. | [default to undefined]
**outliers** | **(optional)** `Inteloutliersslice` | Rare access slice; omitted when the tenant lacks the IDA-outliers license. | [default to undefined]
**accessHistory** | `Intelaccesshistory` | Access-history split into access items and certifications sub-slices. | [default to undefined]

