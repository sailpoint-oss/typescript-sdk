---
id: v1-accountupdated-v1
title: AccountupdatedV1
pagination_label: AccountupdatedV1
sidebar_label: AccountupdatedV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountupdatedV1', 'v1AccountupdatedV1']
slug: /tools/sdk/typescript/triggers/models/accountupdated-v1
tags: ['SDK', 'Software Development Kit', 'AccountupdatedV1', 'v1AccountupdatedV1']
---

# AccountupdatedV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **AccountupdatedEventV1** |  | [default to undefined]
**source** | **AccountsourcereferenceV1** |  | [default to undefined]
**account** | **Accountv2V1** |  | [default to undefined]
**identity** | **Identityreference2V1** |  | [default to undefined]
**accountChangeTypes** | **Array&lt;string&gt;** | The types of changes that occurred to the account. | [default to undefined]
**singleValueAttributeChanges** | **Array&lt;AccountupdatedSingleValueAttributeChangesInnerV1&gt;** | Details about the single-value attribute changes that occurred to the account. | [default to undefined]
**multiValueAttributeChanges** | **Array&lt;AccountupdatedMultiValueAttributeChangesInnerV1&gt;** | Details about the multi-value attribute changes that occurred to the account. | [default to undefined]
**entitlementChanges** | **Array&lt;AccountupdatedEntitlementChangesInnerV1&gt;** | Details about the entitlement changes that occurred to the account. | [default to undefined]

