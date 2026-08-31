---
id: v1-accessprofilemetadatabulkupdatebyqueryrequest
title: Accessprofilemetadatabulkupdatebyqueryrequest
pagination_label: Accessprofilemetadatabulkupdatebyqueryrequest
sidebar_label: Accessprofilemetadatabulkupdatebyqueryrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accessprofilemetadatabulkupdatebyqueryrequest', 'v1Accessprofilemetadatabulkupdatebyqueryrequest']
slug: /tools/sdk/typescript/access_profiles/models/accessprofilemetadatabulkupdatebyqueryrequest
tags: ['SDK', 'Software Development Kit', 'Accessprofilemetadatabulkupdatebyqueryrequest', 'v1Accessprofilemetadatabulkupdatebyqueryrequest']
---

# Accessprofilemetadatabulkupdatebyqueryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | `object` | The search query selecting the access profiles to update. | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | [default to undefined]
**values** | `Array<AccessprofilemetadatabulkupdatebyidrequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

