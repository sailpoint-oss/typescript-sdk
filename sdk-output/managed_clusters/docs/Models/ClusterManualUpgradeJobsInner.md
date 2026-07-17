---
id: v1-cluster-manual-upgrade-jobs-inner
title: ClusterManualUpgradeJobsInner
pagination_label: ClusterManualUpgradeJobsInner
sidebar_label: ClusterManualUpgradeJobsInner
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ClusterManualUpgradeJobsInner', 'v1ClusterManualUpgradeJobsInner']
slug: /tools/sdk/typescript/managed_clusters/models/cluster-manual-upgrade-jobs-inner
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInner', 'v1ClusterManualUpgradeJobsInner']
---

# ClusterManualUpgradeJobsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | `string` | Unique identifier for the upgrade job. | [default to undefined]
**cookbook** | `string` | Identifier for the cookbook used in the upgrade job. | [default to undefined]
**state** | `string` | Current state of the upgrade job. | [default to undefined]
**type** | `string` | The type of upgrade job (e.g., VA_UPGRADE). | [default to undefined]
**targetId** | `string` | Unique identifier of the target for the upgrade job. | [default to undefined]
**managedProcessConfiguration** | `ClusterManualUpgradeJobsInnerManagedProcessConfiguration` |  | [default to undefined]

