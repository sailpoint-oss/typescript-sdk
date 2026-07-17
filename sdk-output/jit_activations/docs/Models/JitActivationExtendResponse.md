---
id: v1-jit-activation-extend-response
title: JitActivationExtendResponse
pagination_label: JitActivationExtendResponse
sidebar_label: JitActivationExtendResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'JitActivationExtendResponse', 'v1JitActivationExtendResponse']
slug: /tools/sdk/typescript/jit_activations/models/jit-activation-extend-response
tags: ['SDK', 'Software Development Kit', 'JitActivationExtendResponse', 'v1JitActivationExtendResponse']
---

# JitActivationExtendResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Workflow or business identifier for this activation. | [default to undefined]
**activationId** | `string` | Persistent activation record identifier for this JIT activation. | [default to undefined]
**connectionId** | `string` | Entitlement connection identifier for the activation. | [default to undefined]
**activationPeriodExtensionMins** | `number` | Extension applied to the activation period, in minutes. | [default to undefined]
**status** | `ActivationWorkflowStatus` |  | [default to undefined]
**startTime** | `string` | Time associated with this extend request (ISO-8601). | [default to undefined]

