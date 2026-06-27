---
id: v1-clustermanualupgrade-jobs-inner
title: ClustermanualupgradeJobsInner
pagination_label: ClustermanualupgradeJobsInner
sidebar_label: ClustermanualupgradeJobsInner
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ClustermanualupgradeJobsInner', 'v1ClustermanualupgradeJobsInner']
slug: /tools/sdk/typescript/managed_clusters/models/clustermanualupgrade-jobs-inner
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInner', 'v1ClustermanualupgradeJobsInner']
---

# ClustermanualupgradeJobsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | `string` | Unique identifier for the upgrade job. | [default to undefined]
**cookbook** | `string` | Identifier for the cookbook used in the upgrade job. | [default to undefined]
**state** | `string` | Current state of the upgrade job. | [default to undefined]
**type** | `string` | The type of upgrade job (e.g., VA_UPGRADE). | [default to undefined]
**targetId** | `string` | Unique identifier of the target for the upgrade job. | [default to undefined]
**managedProcessConfiguration** | `ClustermanualupgradeJobsInnerManagedProcessConfiguration` |  | [default to undefined]

