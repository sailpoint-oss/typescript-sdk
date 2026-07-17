---
id: v1-client-log-configuration
title: ClientLogConfiguration
pagination_label: ClientLogConfiguration
sidebar_label: ClientLogConfiguration
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ClientLogConfiguration', 'v1ClientLogConfiguration']
slug: /tools/sdk/typescript/managed_clusters/models/client-log-configuration
tags: ['SDK', 'Software Development Kit', 'ClientLogConfiguration', 'v1ClientLogConfiguration']
---

# ClientLogConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **(optional)** `string` | Log configuration\'s client ID | [default to undefined]
**durationMinutes** | **(optional)** `number` | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [default to 240]
**expiration** | **(optional)** `string` | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [default to undefined]
**rootLevel** | `StandardLevel` |  | [default to undefined]
**logLevels** | **(optional)**  | Mapping of identifiers to Standard Log Level values | [default to undefined]

