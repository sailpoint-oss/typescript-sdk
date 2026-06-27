---
id: v1-sodpolicy
title: Sodpolicy
pagination_label: Sodpolicy
sidebar_label: Sodpolicy
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Sodpolicy', 'v1Sodpolicy']
slug: /tools/sdk/typescript/sod_policies/models/sodpolicy
tags: ['SDK', 'Software Development Kit', 'Sodpolicy', 'v1Sodpolicy']
---

# Sodpolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Policy id | [readonly] [default to undefined]
**name** | **(optional)** `string` | Policy Business Name | [default to undefined]
**created** | **(optional)** `string` | The time when this SOD policy is created. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | The time when this SOD policy is modified. | [readonly] [default to undefined]
**description** | **(optional)** `string` | Optional description of the SOD policy | [default to undefined]
**ownerRef** | **(optional)** `SodpolicyOwnerRef` |  | [default to undefined]
**externalPolicyReference** | **(optional)** `string` | Optional External Policy Reference | [default to undefined]
**policyQuery** | **(optional)** `string` | Search query of the SOD policy | [default to undefined]
**compensatingControls** | **(optional)** `string` | Optional compensating controls(Mitigating Controls) | [default to undefined]
**correctionAdvice** | **(optional)** `string` | Optional correction advice | [default to undefined]
**state** | **(optional)** `string` | whether the policy is enforced or not | [default to undefined]
**tags** | **(optional)** `Array<string>` | tags for this policy object | [default to undefined]
**creatorId** | **(optional)** `string` | Policy\'s creator ID | [readonly] [default to undefined]
**modifierId** | **(optional)** `string` | Policy\'s modifier ID | [readonly] [default to undefined]
**violationOwnerAssignmentConfig** | **(optional)** `Violationownerassignmentconfig` |  | [default to undefined]
**scheduled** | **(optional)** `boolean` | defines whether a policy has been scheduled or not | [default to false]
**type** | **(optional)** `string` | whether a policy is query based or conflicting access based | [default to TypeEnum_General]
**conflictingAccessCriteria** | **(optional)** `SodpolicyConflictingAccessCriteria` |  | [default to undefined]

