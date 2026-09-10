---
id: v1-access-profile-metadata-bulk-update-by-query-request
title: AccessProfileMetadataBulkUpdateByQueryRequest
pagination_label: AccessProfileMetadataBulkUpdateByQueryRequest
sidebar_label: AccessProfileMetadataBulkUpdateByQueryRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessProfileMetadataBulkUpdateByQueryRequest', 'v1AccessProfileMetadataBulkUpdateByQueryRequest']
slug: /tools/sdk/typescript/access_profiles/models/access-profile-metadata-bulk-update-by-query-request
tags: ['SDK', 'Software Development Kit', 'AccessProfileMetadataBulkUpdateByQueryRequest', 'v1AccessProfileMetadataBulkUpdateByQueryRequest']
---

# AccessProfileMetadataBulkUpdateByQueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | `object` | The search query selecting the access profiles to update. | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | [default to undefined]
**values** | `Array<AccessProfileMetadataBulkUpdateByIdRequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

