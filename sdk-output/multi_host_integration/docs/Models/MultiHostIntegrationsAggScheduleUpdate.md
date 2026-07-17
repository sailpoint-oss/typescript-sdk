---
id: v1-multi-host-integrations-agg-schedule-update
title: MultiHostIntegrationsAggScheduleUpdate
pagination_label: MultiHostIntegrationsAggScheduleUpdate
sidebar_label: MultiHostIntegrationsAggScheduleUpdate
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MultiHostIntegrationsAggScheduleUpdate', 'v1MultiHostIntegrationsAggScheduleUpdate']
slug: /tools/sdk/typescript/multi_host_integration/models/multi-host-integrations-agg-schedule-update
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsAggScheduleUpdate', 'v1MultiHostIntegrationsAggScheduleUpdate']
---

# MultiHostIntegrationsAggScheduleUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multihostId** | `string` | Multi-Host Integration ID. The ID must be unique | [default to undefined]
**aggregation_grp_id** | `string` | Multi-Host Integration aggregation group ID | [default to undefined]
**aggregation_grp_name** | `string` | Multi-Host Integration name | [default to undefined]
**aggregation_cron_schedule** | `string` | Cron expression to schedule aggregation | [default to undefined]
**enableSchedule** | `boolean` | Boolean value for Multi-Host Integration aggregation schedule.  This specifies if scheduled aggregation is enabled or disabled. | [default to false]
**source_id_list** | `Array<string>` | Source IDs of the Multi-Host Integration | [default to undefined]
**created** | **(optional)** `string` | Created date of Multi-Host Integration aggregation schedule | [default to undefined]
**modified** | **(optional)** `string` | Modified date of Multi-Host Integration aggregation schedule | [default to undefined]

