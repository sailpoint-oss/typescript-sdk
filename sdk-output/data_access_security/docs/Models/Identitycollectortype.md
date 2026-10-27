---
id: v1-identitycollectortype
title: Identitycollectortype
pagination_label: Identitycollectortype
sidebar_label: Identitycollectortype
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Identitycollectortype', 'v1Identitycollectortype']
slug: /tools/sdk/typescript/data_access_security/models/identitycollectortype
tags: ['SDK', 'Software Development Kit', 'Identitycollectortype', 'v1Identitycollectortype']
---

# Identitycollectortype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Identity collector type display name. Matches the `type` values returned by list and used by create/update metadata. Base types only (for example `Box`, not `Box SaaS`). | [default to undefined]
**iscConnectorNames** | `Array<string>` | Exact SailPoint Identity Security `connectorName` values to use in `GET /v3/sources` filters (`connectorName eq \"...\"`). These are not always equal to `type` (for example Google Drive maps to `G Suite` and `Google Workspace SaaS`). | [default to undefined]

