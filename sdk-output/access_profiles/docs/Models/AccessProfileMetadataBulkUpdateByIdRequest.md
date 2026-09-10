---
id: v1-access-profile-metadata-bulk-update-by-id-request
title: AccessProfileMetadataBulkUpdateByIdRequest
pagination_label: AccessProfileMetadataBulkUpdateByIdRequest
sidebar_label: AccessProfileMetadataBulkUpdateByIdRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessProfileMetadataBulkUpdateByIdRequest', 'v1AccessProfileMetadataBulkUpdateByIdRequest']
slug: /tools/sdk/typescript/access_profiles/models/access-profile-metadata-bulk-update-by-id-request
tags: ['SDK', 'Software Development Kit', 'AccessProfileMetadataBulkUpdateByIdRequest', 'v1AccessProfileMetadataBulkUpdateByIdRequest']
---

# AccessProfileMetadataBulkUpdateByIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessProfiles** | `Array<string>` | The IDs of the access profiles to update. | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | [default to undefined]
**values** | `Array<AccessProfileMetadataBulkUpdateByIdRequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

