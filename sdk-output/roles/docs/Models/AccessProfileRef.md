---
id: v1-access-profile-ref
title: AccessProfileRef
pagination_label: AccessProfileRef
sidebar_label: AccessProfileRef
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessProfileRef', 'v1AccessProfileRef']
slug: /tools/sdk/typescript/roles/models/access-profile-ref
tags: ['SDK', 'Software Development Kit', 'AccessProfileRef', 'v1AccessProfileRef']
---

# AccessProfileRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the Access Profile | [default to undefined]
**type** | **(optional)** `string` | Type of requested object. This field must be either left null or set to \'ACCESS_PROFILE\' when creating an Access Profile, otherwise a 400 Bad Request error will result. | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of the Access Profile. This field is ignored on input. | [default to undefined]

