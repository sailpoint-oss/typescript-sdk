---
id: v1-cancel-lifecycle-action-response
title: CancelLifecycleActionResponse
pagination_label: CancelLifecycleActionResponse
sidebar_label: CancelLifecycleActionResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CancelLifecycleActionResponse', 'v1CancelLifecycleActionResponse']
slug: /tools/sdk/typescript/machine_identities_lifecycle_actions/models/cancel-lifecycle-action-response
tags: ['SDK', 'Software Development Kit', 'CancelLifecycleActionResponse', 'v1CancelLifecycleActionResponse']
---

# CancelLifecycleActionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | `string` | Lifecycle request identifier. | [default to undefined]
**status** | `string` | Status of the request after the cancel is accepted. Always `CANCELING`. | [default to undefined]
**action** | `Lifecycleaction` |  | [default to undefined]
**targetId** | `string` | ID of the machine identity the request applies to. | [default to undefined]
**resourceId** | **(optional)** `string` | ID of the machine identity in its source system, when available. | [default to undefined]

