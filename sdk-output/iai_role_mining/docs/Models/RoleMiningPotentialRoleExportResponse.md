---
id: v1-role-mining-potential-role-export-response
title: RoleMiningPotentialRoleExportResponse
pagination_label: RoleMiningPotentialRoleExportResponse
sidebar_label: RoleMiningPotentialRoleExportResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleMiningPotentialRoleExportResponse', 'v1RoleMiningPotentialRoleExportResponse']
slug: /tools/sdk/typescript/iai_role_mining/models/role-mining-potential-role-export-response
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleExportResponse', 'v1RoleMiningPotentialRoleExportResponse']
---

# RoleMiningPotentialRoleExportResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minEntitlementPopularity** | **(optional)** `number` | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [default to undefined]
**includeCommonAccess** | **(optional)** `boolean` | If false, do not include entitlements that are highly popular among the entire orginization | [default to undefined]
**exportId** | **(optional)** `string` | ID used to reference this export | [default to undefined]
**status** | **(optional)** `RoleMiningPotentialRoleExportState` |  | [default to undefined]

