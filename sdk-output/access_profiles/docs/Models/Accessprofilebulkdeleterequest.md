---
id: v1-accessprofilebulkdeleterequest
title: Accessprofilebulkdeleterequest
pagination_label: Accessprofilebulkdeleterequest
sidebar_label: Accessprofilebulkdeleterequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accessprofilebulkdeleterequest', 'v1Accessprofilebulkdeleterequest']
slug: /tools/sdk/typescript/access_profiles/models/accessprofilebulkdeleterequest
tags: ['SDK', 'Software Development Kit', 'Accessprofilebulkdeleterequest', 'v1Accessprofilebulkdeleterequest']
---

# Accessprofilebulkdeleterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessProfileIds** | **(optional)** `Array<string>` | List of IDs of Access Profiles to be deleted. | [default to undefined]
**bestEffortOnly** | **(optional)** `boolean` | If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use. | [default to undefined]

