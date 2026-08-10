---
id: v1-public-machine-identity
title: PublicMachineIdentity
pagination_label: PublicMachineIdentity
sidebar_label: PublicMachineIdentity
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PublicMachineIdentity', 'v1PublicMachineIdentity']
slug: /tools/sdk/typescript/public_machine_identities/models/public-machine-identity
tags: ['SDK', 'Software Development Kit', 'PublicMachineIdentity', 'v1PublicMachineIdentity']
---

# PublicMachineIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Machine identity id. | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of the machine identity. | [default to undefined]
**description** | **(optional)** `string` | Description of the machine identity. | [default to undefined]
**subtype** | **(optional)** `string` | Machine identity subtype. Present when your tenant returns enriched public machine identity data; otherwise omitted or null. | [default to undefined]
**owner** | **(optional)** `PublicMachineIdentityOwner` |  | [default to undefined]

