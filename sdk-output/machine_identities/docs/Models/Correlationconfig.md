---
id: v1-correlationconfig
title: Correlationconfig
pagination_label: Correlationconfig
sidebar_label: Correlationconfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Correlationconfig', 'v1Correlationconfig']
slug: /tools/sdk/typescript/machine_identities/models/correlationconfig
tags: ['SDK', 'Software Development Kit', 'Correlationconfig', 'v1Correlationconfig']
---

# Correlationconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | System-generated unique ID of the correlation config. | [default to undefined]
**sourceId** | `string` | The source ID this config belongs to. | [default to undefined]
**resourceId** | `string` | The source resource identifier for this config scope. | [default to undefined]
**type** | `string` | The correlation config type. | [default to undefined]
**attributes** |  | JSON object of config attributes. May include syncPrimaryToMachineAccounts (boolean) on OWNER_PRIMARY only. | [default to undefined]
**rules** | `Array<Correlationrule>` | The ordered set of correlation rules for this config. | [default to undefined]
**created** | **(optional)** `string` | Creation date of the config. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the config. | [readonly] [default to undefined]

