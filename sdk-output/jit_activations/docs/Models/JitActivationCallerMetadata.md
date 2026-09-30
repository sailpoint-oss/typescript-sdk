---
id: v1-jit-activation-caller-metadata
title: JitActivationCallerMetadata
pagination_label: JitActivationCallerMetadata
sidebar_label: JitActivationCallerMetadata
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'JitActivationCallerMetadata', 'v1JitActivationCallerMetadata']
slug: /tools/sdk/typescript/jit_activations/models/jit-activation-caller-metadata
tags: ['SDK', 'Software Development Kit', 'JitActivationCallerMetadata', 'v1JitActivationCallerMetadata']
---

# JitActivationCallerMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Request origin type. Matches `requestOrigin` when both are sent. | [default to undefined]
**slackUserId** | **(optional)** `string` | Slack user identifier of the caller. | [default to undefined]
**commandText** | **(optional)** `string` | Slack command text that produced this request. | [default to undefined]
**channelId** | **(optional)** `string` | Slack channel identifier. | [default to undefined]
**threadId** | **(optional)** `string` | Slack thread identifier of the message that produced this request. | [default to undefined]
**messageId** | **(optional)** `string` | Slack message identifier of the message that produced this request. | [default to undefined]
**workspaceId** | **(optional)** `string` | Slack workspace identifier. | [default to undefined]

