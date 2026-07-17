---
id: v1-non-employee-schema-attribute
title: NonEmployeeSchemaAttribute
pagination_label: NonEmployeeSchemaAttribute
sidebar_label: NonEmployeeSchemaAttribute
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'NonEmployeeSchemaAttribute', 'v1NonEmployeeSchemaAttribute']
slug: /tools/sdk/typescript/non_employee_lifecycle_management/models/non-employee-schema-attribute
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSchemaAttribute', 'v1NonEmployeeSchemaAttribute']
---

# NonEmployeeSchemaAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Schema Attribute Id | [default to undefined]
**system** | **(optional)** `boolean` | True if this schema attribute is mandatory on all non-employees sources. | [default to false]
**modified** | **(optional)** `string` | When the schema attribute was last modified. | [default to undefined]
**created** | **(optional)** `string` | When the schema attribute was created. | [default to undefined]
**type** | `NonEmployeeSchemaAttributeType` |  | [default to undefined]
**label** | `string` | Label displayed on the UI for this schema attribute. | [default to undefined]
**technicalName** | `string` | The technical name of the attribute. Must be unique per source. | [default to undefined]
**helpText** | **(optional)** `string` | help text displayed by UI. | [default to undefined]
**placeholder** | **(optional)** `string` | Hint text that fills UI box. | [default to undefined]
**required** | **(optional)** `boolean` | If true, the schema attribute is required for all non-employees in the source | [default to false]

