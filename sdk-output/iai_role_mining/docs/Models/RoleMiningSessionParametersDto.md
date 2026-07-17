---
id: v1-role-mining-session-parameters-dto
title: RoleMiningSessionParametersDto
pagination_label: RoleMiningSessionParametersDto
sidebar_label: RoleMiningSessionParametersDto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleMiningSessionParametersDto', 'v1RoleMiningSessionParametersDto']
slug: /tools/sdk/typescript/iai_role_mining/models/role-mining-session-parameters-dto
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionParametersDto', 'v1RoleMiningSessionParametersDto']
---

# RoleMiningSessionParametersDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The ID of the role mining session | [default to undefined]
**name** | **(optional)** `string` | The session\'s saved name | [default to undefined]
**minNumIdentitiesInPotentialRole** | **(optional)** `number` | Minimum number of identities in a potential role | [default to undefined]
**pruneThreshold** | **(optional)** `number` | The prune threshold to be used or null to calculate prescribedPruneThreshold | [default to undefined]
**saved** | **(optional)** `boolean` | The session\'s saved status | [default to true]
**scope** | **(optional)** `RoleMiningSessionScope` |  | [default to undefined]
**type** | **(optional)** `RoleMiningRoleType` |  | [default to undefined]
**state** | **(optional)** `RoleMiningSessionState` |  | [default to undefined]
**scopingMethod** | **(optional)** `RoleMiningSessionScopingMethod` |  | [default to undefined]

