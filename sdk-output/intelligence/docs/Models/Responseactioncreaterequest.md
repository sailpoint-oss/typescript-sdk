---
id: v1-responseactioncreaterequest
title: Responseactioncreaterequest
pagination_label: Responseactioncreaterequest
sidebar_label: Responseactioncreaterequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Responseactioncreaterequest', 'v1Responseactioncreaterequest']
slug: /tools/sdk/typescript/intelligence/models/responseactioncreaterequest
tags: ['SDK', 'Software Development Kit', 'Responseactioncreaterequest', 'v1Responseactioncreaterequest']
---

# Responseactioncreaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionType** | `string` | Which response action to run. | [default to undefined]
**identityType** | `string` | Subject type of the response action. v1 supports HUMAN. | [default to undefined]
**identityId** | `string` | ISC identity id, resolved by the caller from a prior intelligence query. | [default to undefined]
**accountIds** | **(optional)** `Array<string>` | One or more account ids. Required for DISABLE_ACCOUNT (1-50 after trim/dedupe); must be omitted for DISABLE_IDENTITY. A single account is sent as a one-element array.  | [default to undefined]
**context** | `Responseactioncontext` |  | [default to undefined]

