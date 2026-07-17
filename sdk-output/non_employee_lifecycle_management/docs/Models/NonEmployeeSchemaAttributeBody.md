---
id: v1-non-employee-schema-attribute-body
title: NonEmployeeSchemaAttributeBody
pagination_label: NonEmployeeSchemaAttributeBody
sidebar_label: NonEmployeeSchemaAttributeBody
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'NonEmployeeSchemaAttributeBody', 'v1NonEmployeeSchemaAttributeBody']
slug: /tools/sdk/typescript/non_employee_lifecycle_management/models/non-employee-schema-attribute-body
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSchemaAttributeBody', 'v1NonEmployeeSchemaAttributeBody']
---

# NonEmployeeSchemaAttributeBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Type of the attribute. Only type \'TEXT\' is supported for custom attributes. | [default to undefined]
**label** | `string` | Label displayed on the UI for this schema attribute. | [default to undefined]
**technicalName** | `string` | The technical name of the attribute. Must be unique per source. | [default to undefined]
**helpText** | **(optional)** `string` | help text displayed by UI. | [default to undefined]
**placeholder** | **(optional)** `string` | Hint text that fills UI box. | [default to undefined]
**required** | **(optional)** `boolean` | If true, the schema attribute is required for all non-employees in the source | [default to undefined]

