---
id: v1-access-profile-bulk-delete-request
title: AccessProfileBulkDeleteRequest
pagination_label: AccessProfileBulkDeleteRequest
sidebar_label: AccessProfileBulkDeleteRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessProfileBulkDeleteRequest', 'v1AccessProfileBulkDeleteRequest']
slug: /tools/sdk/typescript/access_profiles/models/access-profile-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'AccessProfileBulkDeleteRequest', 'v1AccessProfileBulkDeleteRequest']
---

# AccessProfileBulkDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessProfileIds** | **(optional)** `Array<string>` | List of IDs of Access Profiles to be deleted. | [default to undefined]
**bestEffortOnly** | **(optional)** `boolean` | If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use. | [default to undefined]

