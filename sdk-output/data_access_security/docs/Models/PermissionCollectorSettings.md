---
id: v1-permission-collector-settings
title: PermissionCollectorSettings
pagination_label: PermissionCollectorSettings
sidebar_label: PermissionCollectorSettings
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PermissionCollectorSettings', 'v1PermissionCollectorSettings']
slug: /tools/sdk/typescript/data_access_security/models/permission-collector-settings
tags: ['SDK', 'Software Development Kit', 'PermissionCollectorSettings', 'v1PermissionCollectorSettings']
---

# PermissionCollectorSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isEnabled** | **(optional)** `boolean` | Indicates whether the feature or configuration is enabled. | [default to false]
**clusterId** | **(optional)** `string` | The identifier of the cluster associated with this configuration, if applicable. | [default to undefined]
**analyzeUniquePermissions** | **(optional)** `boolean` | Indicates whether unique permissions should be analyzed for resources. | [default to false]
**calculateEffectivePermissions** | **(optional)** `boolean` | Indicates whether effective permissions should be calculated. | [default to false]
**calculateRiskiestPermissions** | **(optional)** `boolean` | Indicates whether riskiest permissions should be calculated. | [default to false]
**effectivePermissionsSource** | **(optional)** `string` | Source for effective permissions calculation. | [default to undefined]

