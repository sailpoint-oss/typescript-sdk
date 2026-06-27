---
id: v1-rolemetadatabulkupdatebyfilterrequest
title: Rolemetadatabulkupdatebyfilterrequest
pagination_label: Rolemetadatabulkupdatebyfilterrequest
sidebar_label: Rolemetadatabulkupdatebyfilterrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Rolemetadatabulkupdatebyfilterrequest', 'v1Rolemetadatabulkupdatebyfilterrequest']
slug: /tools/sdk/typescript/roles/models/rolemetadatabulkupdatebyfilterrequest
tags: ['SDK', 'Software Development Kit', 'Rolemetadatabulkupdatebyfilterrequest', 'v1Rolemetadatabulkupdatebyfilterrequest']
---

# Rolemetadatabulkupdatebyfilterrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | `string` | Filtering is supported for the following fields and operators:  **id** : *eq, in*  **name** : *eq, sw*  **created** : *gt, lt, ge, le*  **modified** : *gt, lt, ge, le*  **owner.id** : *eq, in*  **requestable** : *eq* | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. | [default to undefined]
**values** | `Array<RolemetadatabulkupdatebyfilterrequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

