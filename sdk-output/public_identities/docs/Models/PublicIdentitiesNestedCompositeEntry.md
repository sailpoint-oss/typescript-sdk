---
id: v1-public-identities-nested-composite-entry
title: PublicIdentitiesNestedCompositeEntry
pagination_label: PublicIdentitiesNestedCompositeEntry
sidebar_label: PublicIdentitiesNestedCompositeEntry
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PublicIdentitiesNestedCompositeEntry', 'v1PublicIdentitiesNestedCompositeEntry']
slug: /tools/sdk/typescript/public_identities/models/public-identities-nested-composite-entry
tags: ['SDK', 'Software Development Kit', 'PublicIdentitiesNestedCompositeEntry', 'v1PublicIdentitiesNestedCompositeEntry']
---

# PublicIdentitiesNestedCompositeEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queryType** | `string` | Entry type discriminator. Must be COMPOSITE for nested query sets. | [default to undefined]
**querySet** | `PublicIdentitiesNestedQuerySet` | Nested query set for this COMPOSITE entry. | [default to undefined]

