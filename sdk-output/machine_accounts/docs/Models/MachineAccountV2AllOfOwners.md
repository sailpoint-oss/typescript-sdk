---
id: v1-machine-account-v2-all-of-owners
title: MachineAccountV2AllOfOwners
pagination_label: MachineAccountV2AllOfOwners
sidebar_label: MachineAccountV2AllOfOwners
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineAccountV2AllOfOwners', 'v1MachineAccountV2AllOfOwners']
slug: /tools/sdk/typescript/machine_accounts/models/machine-account-v2-all-of-owners
tags: ['SDK', 'Software Development Kit', 'MachineAccountV2AllOfOwners', 'v1MachineAccountV2AllOfOwners']
---

# MachineAccountV2AllOfOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **(optional)** `BaseReferenceDto` | The identity selected as the primary owner. | [default to undefined]
**secondary** | **(optional)** `Array<BaseReferenceDto>` | The secondary owners. Entries are either up to ten identities (type `IDENTITY`) or one governance group (type `GOVERNANCE_GROUP`), not both. | [default to undefined]

