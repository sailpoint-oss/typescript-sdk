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
**status** | `string` | Updated lifecycle request status after cancel acceptance. | [default to undefined]
**action** | `Lifecycleaction` |  | [default to undefined]
**targetId** | `string` | Internal machine identity UUID for the lifecycle target. | [default to undefined]
**resourceId** | **(optional)** `string` | Connector resource id for the lifecycle target, when present. | [default to undefined]

