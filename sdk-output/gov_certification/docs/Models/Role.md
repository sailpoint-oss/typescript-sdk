---
id: v1-role
title: Role
pagination_label: Role
sidebar_label: Role
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Role', 'v1Role']
slug: /tools/sdk/typescript/gov_certification/models/role
tags: ['SDK', 'Software Development Kit', 'Role', 'v1Role']
---

# Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id for the Role | [default to undefined]
**name** | **(optional)** `string` | The name of the Role | [default to undefined]
**description** | **(optional)** `string` | Information about the Role | [default to undefined]
**privileged** | **(optional)** `boolean` | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the role contains any access profiles that are privileged. Retained for backward compatibility. | [default to false]
**owner** | **(optional)** `IdentityReference` |  | [default to undefined]
**revocable** | **(optional)** `boolean` | Indicates whether the Role can be revoked or requested | [default to false]
**assignmentId** | **(optional)** `string` | the ID of the role assignment | [default to undefined]
**endDate** | **(optional)** `string` | The date when a user\'s access expires. | [default to undefined]
**entitlements** | **(optional)** `Array<EntitlementReference>` | A list of entitlement references associated to this Role. | [default to undefined]
**accessProfiles** | **(optional)** `Array<AccessProfileReference>` | A list of access profile references associated to this Role. | [default to undefined]

