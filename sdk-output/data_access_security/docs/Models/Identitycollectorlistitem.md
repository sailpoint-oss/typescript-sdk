---
id: v1-identitycollectorlistitem
title: Identitycollectorlistitem
pagination_label: Identitycollectorlistitem
sidebar_label: Identitycollectorlistitem
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Identitycollectorlistitem', 'v1Identitycollectorlistitem']
slug: /tools/sdk/typescript/data_access_security/models/identitycollectorlistitem
tags: ['SDK', 'Software Development Kit', 'Identitycollectorlistitem', 'v1Identitycollectorlistitem']
---

# Identitycollectorlistitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The unique identifier of the identity collector. | [default to undefined]
**name** | **(optional)** `string` | The display name of the identity collector. | [default to undefined]
**type** | **(optional)** `string` | The identity collector type, derived from its underlying source. Possible values include \"Active Directory\", \"Azure Active Directory\", \"Google Drive\", \"Dropbox\", \"Box\", \"Microsoft Entra SaaS\", \"Snowflake\", and \"Databricks\". | [default to undefined]
**sourceId** | **(optional)** `string` | The identifier of the source the identity collector is associated with, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. | [default to undefined]

