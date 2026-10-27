---
id: v1-machine-account-create-entitlement
title: MachineAccountCreateEntitlement
pagination_label: MachineAccountCreateEntitlement
sidebar_label: MachineAccountCreateEntitlement
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineAccountCreateEntitlement', 'v1MachineAccountCreateEntitlement']
slug: /tools/sdk/typescript/machine_account_creation_request/models/machine-account-create-entitlement
tags: ['SDK', 'Software Development Kit', 'MachineAccountCreateEntitlement', 'v1MachineAccountCreateEntitlement']
---

# MachineAccountCreateEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | ID of the entitlement to request. | [default to undefined]
**comment** | **(optional)** `string` | Comment to include with the entitlement request. | [default to undefined]
**startDate** | **(optional)** `string` | Date and time when access to the entitlement starts. Must be in the future and, when `removeDate` is also set, before `removeDate`. | [default to undefined]
**removeDate** | **(optional)** `string` | Date and time when access to the entitlement is removed. Must be in the future. | [default to undefined]

