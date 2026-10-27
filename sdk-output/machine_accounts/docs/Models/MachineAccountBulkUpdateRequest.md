---
id: v1-machine-account-bulk-update-request
title: MachineAccountBulkUpdateRequest
pagination_label: MachineAccountBulkUpdateRequest
sidebar_label: MachineAccountBulkUpdateRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineAccountBulkUpdateRequest', 'v1MachineAccountBulkUpdateRequest']
slug: /tools/sdk/typescript/machine_accounts/models/machine-account-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'MachineAccountBulkUpdateRequest', 'v1MachineAccountBulkUpdateRequest']
---

# MachineAccountBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | `Array<string>` | IDs of the machine accounts to update. Provide between 1 and 100 IDs. | [default to undefined]
**jsonPatch** | `Array<JsonPatchOperation>` | [JSON Patch](https://tools.ietf.org/html/rfc6902) operations to apply to every machine account in `ids`. Each operation must target one of these top-level fields: `description`, `subtype`, `environment`, `machineIdentity`, `ownerIdentity`, `manuallyEdited`. | [default to undefined]

