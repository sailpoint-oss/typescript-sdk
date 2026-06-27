---
id: v1-templatevariablesdto
title: Templatevariablesdto
pagination_label: Templatevariablesdto
sidebar_label: Templatevariablesdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Templatevariablesdto', 'v1Templatevariablesdto']
slug: /tools/sdk/typescript/notifications/models/templatevariablesdto
tags: ['SDK', 'Software Development Kit', 'Templatevariablesdto', 'v1Templatevariablesdto']
---

# Templatevariablesdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | The notification template key. | [default to undefined]
**medium** | **(optional)** `Templatemediumdto` |  | [default to undefined]
**globalVariables** | **(optional)** `Array<Templatevariable>` | Global variables available to all templates for this tenant (e.g. __global.*, __recipient, __util.*, __dateTool.*, __esc.*). Includes both data variables and function-type helpers.  | [default to undefined]
**templateVariables** | **(optional)** `Array<Templatevariable>` | Template-specific variables for the given key and medium (e.g. approverPath, requester, attributes). | [default to undefined]

