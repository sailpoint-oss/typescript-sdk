---
id: v1-fielddetailsdto
title: Fielddetailsdto
pagination_label: Fielddetailsdto
sidebar_label: Fielddetailsdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Fielddetailsdto', 'v1Fielddetailsdto']
slug: /tools/sdk/typescript/sources/models/fielddetailsdto
tags: ['SDK', 'Software Development Kit', 'Fielddetailsdto', 'v1Fielddetailsdto']
---

# Fielddetailsdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The name of the attribute. | [default to undefined]
**transform** | **(optional)** `object` | The transform to apply to the field | [default to undefined]
**attributes** | **(optional)** `object` | Attributes required for the transform | [default to undefined]
**isRequired** | **(optional)** `boolean` | Flag indicating whether or not the attribute is required. | [readonly] [default to false]
**type** | **(optional)** `string` | The type of the attribute.  string: For text-based data.  int: For whole numbers.  long: For larger whole numbers.  date: For date and time values.  boolean: For true/false values.  secret: For sensitive data like passwords, which will be masked and encrypted.  | [default to undefined]
**isMultiValued** | **(optional)** `boolean` | Flag indicating whether or not the attribute is multi-valued. | [default to false]

