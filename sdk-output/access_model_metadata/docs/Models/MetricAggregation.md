---
id: v1-metric-aggregation
title: MetricAggregation
pagination_label: MetricAggregation
sidebar_label: MetricAggregation
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MetricAggregation', 'v1MetricAggregation']
slug: /tools/sdk/typescript/access_model_metadata/models/metric-aggregation
tags: ['SDK', 'Software Development Kit', 'MetricAggregation', 'v1MetricAggregation']
---

# MetricAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the metric aggregate to be included in the result. If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results. | [default to undefined]
**type** | **(optional)** `MetricType` |  | [default to undefined]
**field** | `string` | The field the calculation is performed on.  Prefix the field name with \'@\' to reference a nested object.  | [default to undefined]

