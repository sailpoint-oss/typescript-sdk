---
id: v1-invocationstatus
title: Invocationstatus
pagination_label: Invocationstatus
sidebar_label: Invocationstatus
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Invocationstatus', 'v1Invocationstatus']
slug: /tools/sdk/typescript/triggers/models/invocationstatus
tags: ['SDK', 'Software Development Kit', 'Invocationstatus', 'v1Invocationstatus']
---

# Invocationstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Invocation ID | [default to undefined]
**triggerId** | `string` | Trigger ID | [default to undefined]
**subscriptionName** | `string` | Subscription name | [default to undefined]
**subscriptionId** | `string` | Subscription ID | [default to undefined]
**type** | `Invocationstatustype` |  | [default to undefined]
**created** | `string` | Invocation created timestamp. ISO-8601 in UTC. | [default to undefined]
**completed** | **(optional)** `string` | Invocation completed timestamp; empty fields imply invocation is in-flight or not completed. ISO-8601 in UTC. | [default to undefined]
**startInvocationInput** | `Startinvocationinput` |  | [default to undefined]
**completeInvocationInput** | **(optional)** `Completeinvocationinput` |  | [default to undefined]

