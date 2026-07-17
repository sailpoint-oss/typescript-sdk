---
id: v1-intel-identity-aggregate
title: IntelIdentityAggregate
pagination_label: IntelIdentityAggregate
sidebar_label: IntelIdentityAggregate
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'IntelIdentityAggregate', 'v1IntelIdentityAggregate']
slug: /tools/sdk/typescript/intelligence/models/intel-identity-aggregate
tags: ['SDK', 'Software Development Kit', 'IntelIdentityAggregate', 'v1IntelIdentityAggregate']
---

# IntelIdentityAggregate

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
**isManager** | **(optional)** `boolean` | True when the identity is flagged as a people manager in the organization. | [default to false]
**accounts** | `IntelAccountsSlice` | First page of accounts for the identity. | [default to undefined]
**privilegedAccess** | `IntelPrivilegedAccessSlice` | Full privileged access result for the identity. | [default to undefined]
**outliers** | **(optional)** `IntelOutliersSlice` | Rare access slice; omitted when the tenant lacks the IDA-outliers license. | [default to undefined]
**accessHistory** | `IntelAccessHistory` | Access-history split into access items and certifications sub-slices. | [default to undefined]

