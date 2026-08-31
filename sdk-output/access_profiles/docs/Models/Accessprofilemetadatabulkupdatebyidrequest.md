---
id: v1-accessprofilemetadatabulkupdatebyidrequest
title: Accessprofilemetadatabulkupdatebyidrequest
pagination_label: Accessprofilemetadatabulkupdatebyidrequest
sidebar_label: Accessprofilemetadatabulkupdatebyidrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accessprofilemetadatabulkupdatebyidrequest', 'v1Accessprofilemetadatabulkupdatebyidrequest']
slug: /tools/sdk/typescript/access_profiles/models/accessprofilemetadatabulkupdatebyidrequest
tags: ['SDK', 'Software Development Kit', 'Accessprofilemetadatabulkupdatebyidrequest', 'v1Accessprofilemetadatabulkupdatebyidrequest']
---

# Accessprofilemetadatabulkupdatebyidrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessProfiles** | `Array<string>` | The IDs of the access profiles to update. | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | [default to undefined]
**values** | `Array<AccessprofilemetadatabulkupdatebyidrequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

