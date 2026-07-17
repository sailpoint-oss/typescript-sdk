---
id: v1-form-element
title: FormElement
pagination_label: FormElement
sidebar_label: FormElement
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'FormElement', 'v1FormElement']
slug: /tools/sdk/typescript/custom_forms/models/form-element
tags: ['SDK', 'Software Development Kit', 'FormElement', 'v1FormElement']
---

# FormElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Form element identifier. | [default to undefined]
**elementType** | **(optional)** `string` | FormElementType value.  TEXT FormElementTypeText TOGGLE FormElementTypeToggle TEXTAREA FormElementTypeTextArea HIDDEN FormElementTypeHidden PHONE FormElementTypePhone EMAIL FormElementTypeEmail SELECT FormElementTypeSelect DATE FormElementTypeDate SECTION FormElementTypeSection COLUMN_SET FormElementTypeColumns IMAGE FormElementTypeImage DESCRIPTION FormElementTypeDescription | [default to undefined]
**config** | **(optional)**  | Config object. | [default to undefined]
**key** | **(optional)** `string` | Technical key. | [default to undefined]
**validations** | **(optional)** `Array<FormElementValidationsSet>` |  | [default to undefined]

