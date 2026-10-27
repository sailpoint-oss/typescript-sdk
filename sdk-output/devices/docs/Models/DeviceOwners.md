---
id: v1-device-owners
title: DeviceOwners
pagination_label: DeviceOwners
sidebar_label: DeviceOwners
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'DeviceOwners', 'v1DeviceOwners']
slug: /tools/sdk/typescript/devices/models/device-owners
tags: ['SDK', 'Software Development Kit', 'DeviceOwners', 'v1DeviceOwners']
---

# DeviceOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **(optional)** `DeviceOwnersPrimary` |  | [default to undefined]
**secondary** | **(optional)** `Array<BaseReferenceDto>` | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [default to undefined]

