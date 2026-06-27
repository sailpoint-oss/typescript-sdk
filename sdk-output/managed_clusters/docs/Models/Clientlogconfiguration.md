---
id: v1-clientlogconfiguration
title: Clientlogconfiguration
pagination_label: Clientlogconfiguration
sidebar_label: Clientlogconfiguration
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Clientlogconfiguration', 'v1Clientlogconfiguration']
slug: /tools/sdk/typescript/managed_clusters/models/clientlogconfiguration
tags: ['SDK', 'Software Development Kit', 'Clientlogconfiguration', 'v1Clientlogconfiguration']
---

# Clientlogconfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **(optional)** `string` | Log configuration\'s client ID | [default to undefined]
**durationMinutes** | **(optional)** `number` | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [default to 240]
**expiration** | **(optional)** `string` | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [default to undefined]
**rootLevel** | `Standardlevel` |  | [default to undefined]
**logLevels** | **(optional)**  | Mapping of identifiers to Standard Log Level values | [default to undefined]

