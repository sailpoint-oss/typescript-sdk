---
id: v1-objectmappingrequest
title: Objectmappingrequest
pagination_label: Objectmappingrequest
sidebar_label: Objectmappingrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Objectmappingrequest', 'v1Objectmappingrequest']
slug: /tools/sdk/typescript/configuration_hub/models/objectmappingrequest
tags: ['SDK', 'Software Development Kit', 'Objectmappingrequest', 'v1Objectmappingrequest']
---

# Objectmappingrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectType** | `string` | Type of the object the mapping value applies to, must be one from enum | [default to undefined]
**jsonPath** | `string` | JSONPath expression denoting the path within the object where the mapping value should be applied | [default to undefined]
**sourceValue** | `string` | Original value at the jsonPath location within the object | [default to undefined]
**targetValue** | `string` | Value to be assigned at the jsonPath location within the object | [default to undefined]
**enabled** | **(optional)** `boolean` | Whether or not this object mapping is enabled | [default to false]

