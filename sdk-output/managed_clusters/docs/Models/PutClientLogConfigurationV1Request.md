---
id: v1-put-client-log-configuration-v1-request
title: PutClientLogConfigurationV1Request
pagination_label: PutClientLogConfigurationV1Request
sidebar_label: PutClientLogConfigurationV1Request
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PutClientLogConfigurationV1Request', 'v1PutClientLogConfigurationV1Request']
slug: /tools/sdk/typescript/managed_clusters/models/put-client-log-configuration-v1-request
tags: ['SDK', 'Software Development Kit', 'PutClientLogConfigurationV1Request', 'v1PutClientLogConfigurationV1Request']
---

# PutClientLogConfigurationV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **(optional)** `string` | Log configuration\'s client ID | [default to undefined]
**durationMinutes** | **(optional)** `number` | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [default to 240]
**rootLevel** | `StandardLevel` |  | [default to undefined]
**logLevels** | **(optional)**  | Mapping of identifiers to Standard Log Level values | [default to undefined]
**expiration** | **(optional)** `string` | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [default to undefined]

