---
id: v1-accounts-collected-for-aggregation-stats
title: AccountsCollectedForAggregationStats
pagination_label: AccountsCollectedForAggregationStats
sidebar_label: AccountsCollectedForAggregationStats
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountsCollectedForAggregationStats', 'v1AccountsCollectedForAggregationStats']
slug: /tools/sdk/typescript/triggers/models/accounts-collected-for-aggregation-stats
tags: ['SDK', 'Software Development Kit', 'AccountsCollectedForAggregationStats', 'v1AccountsCollectedForAggregationStats']
---

# AccountsCollectedForAggregationStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scanned** | `number` | The number of accounts which were scanned / iterated over. | [default to undefined]
**unchanged** | `number` | The number of accounts which existed before, but had no changes. | [default to undefined]
**changed** | `number` | The number of accounts which existed before, but had changes. | [default to undefined]
**added** | `number` | The number of accounts which are new - have not existed before. | [default to undefined]
**removed** | `number` | The number accounts which existed before, but no longer exist (thus getting removed). | [default to undefined]

