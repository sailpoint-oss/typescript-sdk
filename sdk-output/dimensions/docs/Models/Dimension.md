---
id: v1-dimension
title: Dimension
pagination_label: Dimension
sidebar_label: Dimension
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Dimension', 'v1Dimension']
slug: /tools/sdk/typescript/dimensions/models/dimension
tags: ['SDK', 'Software Development Kit', 'Dimension', 'v1Dimension']
---

# Dimension

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id of the Dimension. This field must be left null when creating a dimension, otherwise a 400 Bad Request error will result. | [default to undefined]
**name** | `string` | The human-readable display name of the Dimension | [default to undefined]
**created** | **(optional)** `string` | Date the Dimension was created | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Date the Dimension was last modified. | [readonly] [default to undefined]
**description** | **(optional)** `string` | A human-readable description of the Dimension | [default to undefined]
**owner** | `Ownerreference` |  | [default to undefined]
**accessProfiles** | **(optional)** `Array<Accessprofileref>` |  | [default to undefined]
**entitlements** | **(optional)** `Array<Entitlementref>` |  | [default to undefined]
**membership** | **(optional)** `Dimensionmembershipselector` |  | [default to undefined]
**parentId** | **(optional)** `string` | The ID of the parent role. This field can be left null when creating a dimension, but if provided, it must match the role ID specified in the path variable of the API call. | [default to undefined]

