---
id: v1-complete-invocation
title: CompleteInvocation
pagination_label: CompleteInvocation
sidebar_label: CompleteInvocation
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CompleteInvocation', 'v1CompleteInvocation']
slug: /tools/sdk/typescript/triggers/models/complete-invocation
tags: ['SDK', 'Software Development Kit', 'CompleteInvocation', 'v1CompleteInvocation']
---

# CompleteInvocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | `string` | Unique invocation secret that was generated when the invocation was created. Required to authenticate to the endpoint. | [default to undefined]
**error** | **(optional)** `string` | The error message to indicate a failed invocation or error if any. | [default to undefined]
**output** | `object` | Trigger output to complete the invocation. Its schema is defined in the trigger definition. | [default to undefined]

