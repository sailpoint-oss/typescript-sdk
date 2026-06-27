---
id: v1-machineidentitycreated-machine-identity
title: MachineidentitycreatedMachineIdentity
pagination_label: MachineidentitycreatedMachineIdentity
sidebar_label: MachineidentitycreatedMachineIdentity
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineidentitycreatedMachineIdentity', 'v1MachineidentitycreatedMachineIdentity']
slug: /tools/sdk/typescript/triggers/models/machineidentitycreated-machine-identity
tags: ['SDK', 'Software Development Kit', 'MachineidentitycreatedMachineIdentity', 'v1MachineidentitycreatedMachineIdentity']
---

# MachineidentitycreatedMachineIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Unique identifier for the machine identity. | [default to undefined]
**name** | **(optional)** `string` | Name of the machine identity. | [default to undefined]
**created** | `string` | Creation timestamp. | [default to undefined]
**modified** | `string` | Last modified timestamp. | [default to undefined]
**businessApplication** | **(optional)** `string` | Associated business application. | [default to undefined]
**description** | **(optional)** `string` | Description of the machine identity. | [default to undefined]
**attributes** | **(optional)**  | The attributes assigned to the identity. | [default to undefined]
**subtype** | `string` | Subtype of the machine identity. | [default to undefined]
**owners** | **(optional)** `Array<Machineidentityownerreference>` | List of owners. | [default to undefined]
**sourceId** | **(optional)** `string` | Source identifier. | [default to undefined]
**uuid** | **(optional)** `string` | UUID of the machine identity. | [default to undefined]
**nativeIdentity** | **(optional)** `string` | Native identity value. | [default to undefined]
**manuallyEdited** | `boolean` | Indicates if manually edited. | [default to false]
**manuallyCreated** | **(optional)** `boolean` | Indicates if manually created. | [default to false]
**datasetId** | **(optional)** `string` | Dataset identifier. | [default to undefined]
**source** | **(optional)** `Machineidentitysourcereference` |  | [default to undefined]
**userEntitlements** | **(optional)** `Array<Machineidentityuserentitlements>` | List of user entitlements. | [default to undefined]
**existsOnSource** | **(optional)** `string` | Existence status on source. | [default to undefined]

