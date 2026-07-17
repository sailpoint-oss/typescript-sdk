---
id: v1-text-query
title: TextQuery
pagination_label: TextQuery
sidebar_label: TextQuery
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TextQuery', 'v1TextQuery']
slug: /tools/sdk/typescript/search/models/text-query
tags: ['SDK', 'Software Development Kit', 'TextQuery', 'v1TextQuery']
---

# TextQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | `Array<string>` | Words or characters that specify a particular thing to be searched for. | [default to undefined]
**fields** | `Array<string>` | The fields to be searched. | [default to undefined]
**matchAny** | **(optional)** `boolean` | Indicates that at least one of the terms must be found in the specified fields;  otherwise, all terms must be found. | [default to false]
**contains** | **(optional)** `boolean` | Indicates that the terms can be located anywhere in the specified fields;  otherwise, the fields must begin with the terms. | [default to false]

