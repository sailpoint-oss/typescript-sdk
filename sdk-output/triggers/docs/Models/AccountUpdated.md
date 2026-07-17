---
id: v1-account-updated
title: AccountUpdated
pagination_label: AccountUpdated
sidebar_label: AccountUpdated
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountUpdated', 'v1AccountUpdated']
slug: /tools/sdk/typescript/triggers/models/account-updated
tags: ['SDK', 'Software Development Kit', 'AccountUpdated', 'v1AccountUpdated']
---

# AccountUpdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | `AccountUpdatedEvent` |  | [default to undefined]
**source** | `AccountSourceReference` |  | [default to undefined]
**account** | `AccountV2` |  | [default to undefined]
**identity** | `IdentityReference2` |  | [default to undefined]
**accountChangeTypes** | `Array<string>` | The types of changes that occurred to the account. | [default to undefined]
**singleValueAttributeChanges** | `Array<AccountUpdatedSingleValueAttributeChangesInner>` | Details about the single-value attribute changes that occurred to the account. | [default to undefined]
**multiValueAttributeChanges** | `Array<AccountUpdatedMultiValueAttributeChangesInner>` | Details about the multi-value attribute changes that occurred to the account. | [default to undefined]
**entitlementChanges** | `Array<AccountUpdatedEntitlementChangesInner>` | Details about the entitlement changes that occurred to the account. | [default to undefined]

