---
id: v1-machine-identity-updated
title: MachineIdentityUpdated
pagination_label: MachineIdentityUpdated
sidebar_label: MachineIdentityUpdated
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineIdentityUpdated', 'v1MachineIdentityUpdated']
slug: /tools/sdk/typescript/triggers/models/machine-identity-updated
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUpdated', 'v1MachineIdentityUpdated']
---

# MachineIdentityUpdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventType** | `string` | Type of the event. | [default to undefined]
**machineIdentity** | `MachineIdentityUpdatedMachineIdentity` |  | [default to undefined]
**machineIdentityChangeTypes** | `Array<string>` | Types of changes that occurred to the machine identity. | [default to undefined]
**userEntitlementChanges** | `MachineIdentityUpdatedUserEntitlementChanges` |  | [default to undefined]
**ownerChanges** | `MachineIdentityUpdatedOwnerChanges` |  | [default to undefined]
**singleValueAttributeChanges** | `Array<MachineIdentityUpdatedSingleValueAttributeChangesInner>` | Details about the single-value attribute changes that occurred. | [default to undefined]

