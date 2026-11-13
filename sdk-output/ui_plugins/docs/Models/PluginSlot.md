---
id: v1-plugin-slot
title: PluginSlot
pagination_label: PluginSlot
sidebar_label: PluginSlot
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PluginSlot', 'v1PluginSlot']
slug: /tools/sdk/typescript/ui_plugins/models/plugin-slot
tags: ['SDK', 'Software Development Kit', 'PluginSlot', 'v1PluginSlot']
---

# PluginSlot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slotId** | `string` | Identifier referencing an entry in the slot registry | [default to undefined]
**requiredCapabilities** | **(optional)** `Array<string>` | ISC capabilities the user must hold (AND logic) to see this plugin in the slot. Empty means unrestricted. | [default to undefined]
**restrictToUsers** | **(optional)** `Array<string>` | User GUIDs (32-char hex) limiting visibility during development. Empty means no user restriction. | [default to undefined]

