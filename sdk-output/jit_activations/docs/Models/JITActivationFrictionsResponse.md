---
id: v1-jit-activation-frictions-response
title: JITActivationFrictionsResponse
pagination_label: JITActivationFrictionsResponse
sidebar_label: JITActivationFrictionsResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'JITActivationFrictionsResponse', 'v1JITActivationFrictionsResponse']
slug: /tools/sdk/typescript/jit_activations/models/jit-activation-frictions-response
tags: ['SDK', 'Software Development Kit', 'JITActivationFrictionsResponse', 'v1JITActivationFrictionsResponse']
---

# JITActivationFrictionsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activationId** | `string` | Identifier of the activation. | [default to undefined]
**frictionState** | `JITActivationFrictionState` | Aggregate friction state of the activation. | [default to undefined]
**connectionId** | `string` | Identifier of the entitlement connection. | [default to undefined]
**activationInitTime** | `string` | Time the activation started. | [default to undefined]
**expiryMins** | `string` | Minutes allowed to complete all frictions. | [default to undefined]
**frictions** | `Array<JITActivationFrictionResponse>` | Friction steps for the activation. | [default to undefined]

