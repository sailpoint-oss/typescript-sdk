---
id: v1-accountupdated
title: Accountupdated
pagination_label: Accountupdated
sidebar_label: Accountupdated
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accountupdated', 'v1Accountupdated']
slug: /tools/sdk/typescript/triggers/models/accountupdated
tags: ['SDK', 'Software Development Kit', 'Accountupdated', 'v1Accountupdated']
---

# Accountupdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | `AccountupdatedEvent` |  | [default to undefined]
**source** | `Accountsourcereference` |  | [default to undefined]
**account** | `Accountv2` |  | [default to undefined]
**identity** | `Identityreference2` |  | [default to undefined]
**accountChangeTypes** | `Array<string>` | The types of changes that occurred to the account. | [default to undefined]
**singleValueAttributeChanges** | `Array<AccountupdatedSingleValueAttributeChangesInner>` | Details about the single-value attribute changes that occurred to the account. | [default to undefined]
**multiValueAttributeChanges** | `Array<AccountupdatedMultiValueAttributeChangesInner>` | Details about the multi-value attribute changes that occurred to the account. | [default to undefined]
**entitlementChanges** | `Array<AccountupdatedEntitlementChangesInner>` | Details about the entitlement changes that occurred to the account. | [default to undefined]

