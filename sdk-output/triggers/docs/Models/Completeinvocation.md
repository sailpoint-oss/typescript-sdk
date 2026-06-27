---
id: v1-completeinvocation
title: Completeinvocation
pagination_label: Completeinvocation
sidebar_label: Completeinvocation
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Completeinvocation', 'v1Completeinvocation']
slug: /tools/sdk/typescript/triggers/models/completeinvocation
tags: ['SDK', 'Software Development Kit', 'Completeinvocation', 'v1Completeinvocation']
---

# Completeinvocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | `string` | Unique invocation secret that was generated when the invocation was created. Required to authenticate to the endpoint. | [default to undefined]
**error** | **(optional)** `string` | The error message to indicate a failed invocation or error if any. | [default to undefined]
**output** | `object` | Trigger output to complete the invocation. Its schema is defined in the trigger definition. | [default to undefined]

