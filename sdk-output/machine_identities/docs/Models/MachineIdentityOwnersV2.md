---
id: v1-machine-identity-owners-v2
title: MachineIdentityOwnersV2
pagination_label: MachineIdentityOwnersV2
sidebar_label: MachineIdentityOwnersV2
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineIdentityOwnersV2', 'v1MachineIdentityOwnersV2']
slug: /tools/sdk/typescript/machine_identities/models/machine-identity-owners-v2
tags: ['SDK', 'Software Development Kit', 'MachineIdentityOwnersV2', 'v1MachineIdentityOwnersV2']
---

# MachineIdentityOwnersV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **(optional)** `MachineIdentityOwnersV2Primary` |  | [default to undefined]
**secondary** | **(optional)** `Array<BaseReferenceDto>` | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [default to undefined]

