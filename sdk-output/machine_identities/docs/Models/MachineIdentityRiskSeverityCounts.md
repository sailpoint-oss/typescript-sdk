---
id: v1-machine-identity-risk-severity-counts
title: MachineIdentityRiskSeverityCounts
pagination_label: MachineIdentityRiskSeverityCounts
sidebar_label: MachineIdentityRiskSeverityCounts
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineIdentityRiskSeverityCounts', 'v1MachineIdentityRiskSeverityCounts']
slug: /tools/sdk/typescript/machine_identities/models/machine-identity-risk-severity-counts
tags: ['SDK', 'Software Development Kit', 'MachineIdentityRiskSeverityCounts', 'v1MachineIdentityRiskSeverityCounts']
---

# MachineIdentityRiskSeverityCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical** | **(optional)** `number` | Number of machine identities with a CRITICAL risk severity. | [default to undefined]
**high** | **(optional)** `number` | Number of machine identities with a HIGH risk severity. | [default to undefined]
**medium** | **(optional)** `number` | Number of machine identities with a MEDIUM risk severity. | [default to undefined]
**low** | **(optional)** `number` | Number of machine identities with a LOW risk severity. | [default to undefined]
**unknown** | **(optional)** `number` | Number of machine identities that have no risk severity. This value is `null` unless unclassified risk severity counting is enabled for the tenant. Version 1 of the API always returns `null`. | [default to undefined]

