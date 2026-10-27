---
id: v1-machine-identity-bulk-update-request
title: MachineIdentityBulkUpdateRequest
pagination_label: MachineIdentityBulkUpdateRequest
sidebar_label: MachineIdentityBulkUpdateRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineIdentityBulkUpdateRequest', 'v1MachineIdentityBulkUpdateRequest']
slug: /tools/sdk/typescript/machine_identities/models/machine-identity-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'MachineIdentityBulkUpdateRequest', 'v1MachineIdentityBulkUpdateRequest']
---

# MachineIdentityBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | `Array<string>` | IDs of the machine identities to update. Provide between 1 and 100 IDs. | [default to undefined]
**jsonPatch** | `Array<JsonPatchOperation>` | [JSON Patch](https://tools.ietf.org/html/rfc6902) operations applied to every machine identity in `ids`. Only these paths can be patched: `/description`, `/userEntitlements`, `/owners`, `/owners/primary`, and `/owners/secondary`. | [default to undefined]

