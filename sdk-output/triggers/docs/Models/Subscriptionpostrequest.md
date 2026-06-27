---
id: v1-subscriptionpostrequest
title: Subscriptionpostrequest
pagination_label: Subscriptionpostrequest
sidebar_label: Subscriptionpostrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Subscriptionpostrequest', 'v1Subscriptionpostrequest']
slug: /tools/sdk/typescript/triggers/models/subscriptionpostrequest
tags: ['SDK', 'Software Development Kit', 'Subscriptionpostrequest', 'v1Subscriptionpostrequest']
---

# Subscriptionpostrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Subscription name. | [default to undefined]
**description** | **(optional)** `string` | Subscription description. | [default to undefined]
**triggerId** | `string` | ID of trigger subscribed to. | [default to undefined]
**type** | `Subscriptiontype` |  | [default to undefined]
**responseDeadline** | **(optional)** `string` | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [default to 'PT1H']
**httpConfig** | **(optional)** `Httpconfig` |  | [default to undefined]
**eventBridgeConfig** | **(optional)** `Eventbridgeconfig` |  | [default to undefined]
**enabled** | **(optional)** `boolean` | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [default to true]
**filter** | **(optional)** `string` | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [default to undefined]

