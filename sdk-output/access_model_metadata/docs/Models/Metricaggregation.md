---
id: v1-metricaggregation
title: Metricaggregation
pagination_label: Metricaggregation
sidebar_label: Metricaggregation
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Metricaggregation', 'v1Metricaggregation']
slug: /tools/sdk/typescript/access_model_metadata/models/metricaggregation
tags: ['SDK', 'Software Development Kit', 'Metricaggregation', 'v1Metricaggregation']
---

# Metricaggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the metric aggregate to be included in the result. If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results. | [default to undefined]
**type** | **(optional)** `Metrictype` |  | [default to undefined]
**field** | `string` | The field the calculation is performed on.  Prefix the field name with \'@\' to reference a nested object.  | [default to undefined]

