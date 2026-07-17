---
id: v1-provisioning-policy-dto-v2
title: ProvisioningPolicyDtoV2
pagination_label: ProvisioningPolicyDtoV2
sidebar_label: ProvisioningPolicyDtoV2
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ProvisioningPolicyDtoV2', 'v1ProvisioningPolicyDtoV2']
slug: /tools/sdk/typescript/sources/models/provisioning-policy-dto-v2
tags: ['SDK', 'Software Development Kit', 'ProvisioningPolicyDtoV2', 'v1ProvisioningPolicyDtoV2']
---

# ProvisioningPolicyDtoV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the provisioning policy. | [default to undefined]
**name** | `string` | the provisioning policy name | [default to undefined]
**subtypeId** | **(optional)** `string` | Subtype ID for which provisioning policy will be created when usageType is CREATE_MACHINE_ACCOUNT. | [default to undefined]
**description** | **(optional)** `string` | the description of the provisioning policy | [default to undefined]
**usageType** | **(optional)** `UsageType` |  | [default to undefined]
**fields** | **(optional)** `Array<FieldDetailsDtoV2>` |  | [default to undefined]

