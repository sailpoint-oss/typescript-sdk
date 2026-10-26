---
id: v1-public-identities-composite-entry
title: PublicIdentitiesCompositeEntry
pagination_label: PublicIdentitiesCompositeEntry
sidebar_label: PublicIdentitiesCompositeEntry
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PublicIdentitiesCompositeEntry', 'v1PublicIdentitiesCompositeEntry']
slug: /tools/sdk/typescript/public_identities/models/public-identities-composite-entry
tags: ['SDK', 'Software Development Kit', 'PublicIdentitiesCompositeEntry', 'v1PublicIdentitiesCompositeEntry']
---

# PublicIdentitiesCompositeEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queryType** | `string` | Entry type discriminator. Must be COMPOSITE for nested query sets. | [default to undefined]
**textQuery** | `PublicIdentitiesTextQuery` | Text query clause for this TEXT entry. | [default to undefined]
**querySet** | `PublicIdentitiesNestedQuerySet` | Nested query set for this COMPOSITE entry. | [default to undefined]

