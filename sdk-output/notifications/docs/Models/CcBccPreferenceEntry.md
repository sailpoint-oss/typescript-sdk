---
id: v1-cc-bcc-preference-entry
title: CcBccPreferenceEntry
pagination_label: CcBccPreferenceEntry
sidebar_label: CcBccPreferenceEntry
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CcBccPreferenceEntry', 'v1CcBccPreferenceEntry']
slug: /tools/sdk/typescript/notifications/models/cc-bcc-preference-entry
tags: ['SDK', 'Software Development Kit', 'CcBccPreferenceEntry', 'v1CcBccPreferenceEntry']
---

# CcBccPreferenceEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `CcBccRecipientType` |  | [default to undefined]
**id** | **(optional)** `string` | Identity or governance group id when required by the recipient type. For MANAGER_OF, when provided this is the identity whose manager should receive the email. | [default to undefined]
**email** | **(optional)** `string` | Static email address when type is STATIC_EMAIL. | [default to undefined]

