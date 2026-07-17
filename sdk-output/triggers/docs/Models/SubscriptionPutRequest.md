---
id: v1-subscription-put-request
title: SubscriptionPutRequest
pagination_label: SubscriptionPutRequest
sidebar_label: SubscriptionPutRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SubscriptionPutRequest', 'v1SubscriptionPutRequest']
slug: /tools/sdk/typescript/triggers/models/subscription-put-request
tags: ['SDK', 'Software Development Kit', 'SubscriptionPutRequest', 'v1SubscriptionPutRequest']
---

# SubscriptionPutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | Subscription name. | [default to undefined]
**description** | **(optional)** `string` | Subscription description. | [default to undefined]
**type** | **(optional)** `SubscriptionType` |  | [default to undefined]
**responseDeadline** | **(optional)** `string` | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [default to 'PT1H']
**httpConfig** | **(optional)** `HttpConfig` |  | [default to undefined]
**eventBridgeConfig** | **(optional)** `EventBridgeConfig` |  | [default to undefined]
**enabled** | **(optional)** `boolean` | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [default to true]
**filter** | **(optional)** `string` | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [default to undefined]

