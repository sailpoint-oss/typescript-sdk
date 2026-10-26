---
id: v1-public-identity-visible-attributes
title: PublicIdentityVisibleAttributes
pagination_label: PublicIdentityVisibleAttributes
sidebar_label: PublicIdentityVisibleAttributes
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PublicIdentityVisibleAttributes', 'v1PublicIdentityVisibleAttributes']
slug: /tools/sdk/typescript/public_identities/models/public-identity-visible-attributes
tags: ['SDK', 'Software Development Kit', 'PublicIdentityVisibleAttributes', 'v1PublicIdentityVisibleAttributes']
---

# PublicIdentityVisibleAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultAttributes** | `Array<PublicIdentityAttributeConfig>` | Always-available public-identity field keys for search and sort. Fixed platform list. `key` is the search field name; `name` is the display label. | [default to undefined]
**configuredAttributes** | `Array<PublicIdentityAttributeConfig>` | Tenant-configured public attributes from public-identities config (same source as public-identities-config). These keys are also allowed in search/sort and appear under `attributes` on search results. | [default to undefined]

