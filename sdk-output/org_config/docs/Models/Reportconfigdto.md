---
id: v1-reportconfigdto
title: Reportconfigdto
pagination_label: Reportconfigdto
sidebar_label: Reportconfigdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Reportconfigdto', 'v1Reportconfigdto']
slug: /tools/sdk/typescript/org_config/models/reportconfigdto
tags: ['SDK', 'Software Development Kit', 'Reportconfigdto', 'v1Reportconfigdto']
---

# Reportconfigdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columnName** | **(optional)** `string` | Name of column in report | [default to undefined]
**required** | **(optional)** `boolean` | If true, column is required in all reports, and this entry is immutable. A 400 error will result from any attempt to modify the column\'s definition. | [default to false]
**included** | **(optional)** `boolean` | If true, column is included in the report. A 400 error will be thrown if an attempt is made to set included=false if required==true. | [default to false]
**order** | **(optional)** `number` | Relative sort order for the column. Columns will be displayed left-to-right in nondecreasing order. | [default to undefined]

