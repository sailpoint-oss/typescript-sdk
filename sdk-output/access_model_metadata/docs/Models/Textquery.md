---
id: v1-textquery
title: Textquery
pagination_label: Textquery
sidebar_label: Textquery
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Textquery', 'v1Textquery']
slug: /tools/sdk/typescript/access_model_metadata/models/textquery
tags: ['SDK', 'Software Development Kit', 'Textquery', 'v1Textquery']
---

# Textquery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | `Array<string>` | Words or characters that specify a particular thing to be searched for. | [default to undefined]
**fields** | `Array<string>` | The fields to be searched. | [default to undefined]
**matchAny** | **(optional)** `boolean` | Indicates that at least one of the terms must be found in the specified fields;  otherwise, all terms must be found. | [default to false]
**contains** | **(optional)** `boolean` | Indicates that the terms can be located anywhere in the specified fields;  otherwise, the fields must begin with the terms. | [default to false]

