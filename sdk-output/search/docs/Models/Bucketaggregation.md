---
id: v1-bucketaggregation
title: Bucketaggregation
pagination_label: Bucketaggregation
sidebar_label: Bucketaggregation
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Bucketaggregation', 'v1Bucketaggregation']
slug: /tools/sdk/typescript/search/models/bucketaggregation
tags: ['SDK', 'Software Development Kit', 'Bucketaggregation', 'v1Bucketaggregation']
---

# Bucketaggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the bucket aggregate to be included in the result. | [default to undefined]
**type** | **(optional)** `Buckettype` |  | [default to undefined]
**field** | `string` | The field to bucket on. Prefix the field name with \'@\' to reference a nested object. | [default to undefined]
**size** | **(optional)** `number` | Maximum number of buckets to include. | [default to undefined]
**minDocCount** | **(optional)** `number` | Minimum number of documents a bucket should have. | [default to undefined]

