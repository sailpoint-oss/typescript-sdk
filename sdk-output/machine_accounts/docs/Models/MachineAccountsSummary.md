---
id: v1-machine-accounts-summary
title: MachineAccountsSummary
pagination_label: MachineAccountsSummary
sidebar_label: MachineAccountsSummary
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineAccountsSummary', 'v1MachineAccountsSummary']
slug: /tools/sdk/typescript/machine_accounts/models/machine-accounts-summary
tags: ['SDK', 'Software Development Kit', 'MachineAccountsSummary', 'v1MachineAccountsSummary']
---

# MachineAccountsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**human** | **(optional)** `Array<MachineAccountClassificationCount>` | Counts of candidates that are correlated to a human identity, with one entry each for the `CRITERIA`, `SOURCE` and `DISCOVERY` classification methods. | [default to undefined]
**uncorrelated** | **(optional)** `Array<MachineAccountClassificationCount>` | Counts of candidates that are not correlated to any identity. This list has one entry, for the `DISCOVERY` classification method. | [default to undefined]

