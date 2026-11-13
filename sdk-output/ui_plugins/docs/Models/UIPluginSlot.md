---
id: v1-ui-plugin-slot
title: UIPluginSlot
pagination_label: UIPluginSlot
sidebar_label: UIPluginSlot
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'UIPluginSlot', 'v1UIPluginSlot']
slug: /tools/sdk/typescript/ui_plugins/models/ui-plugin-slot
tags: ['SDK', 'Software Development Kit', 'UIPluginSlot', 'v1UIPluginSlot']
---

# UIPluginSlot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slotId** | `string` | Identifier of the UI extension point | [default to undefined]
**name** | `UIPluginSlotName` |  | [default to undefined]
**description** | `UIPluginSlotDescription` |  | [default to undefined]
**state** | `SlotState` |  | [default to undefined]
**inputSchema** |  | JSON Schema for data the App Shell provides to plugins in this slot | [default to undefined]
**slotType** | `SlotType` |  | [default to undefined]
**maxPlugins** | `number` | Max concurrent plugins in this slot; `-1` means unlimited | [default to undefined]

