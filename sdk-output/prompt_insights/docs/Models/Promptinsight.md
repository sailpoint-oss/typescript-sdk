---
id: v1-promptinsight
title: Promptinsight
pagination_label: Promptinsight
sidebar_label: Promptinsight
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Promptinsight', 'v1Promptinsight']
slug: /tools/sdk/typescript/prompt_insights/models/promptinsight
tags: ['SDK', 'Software Development Kit', 'Promptinsight', 'v1Promptinsight']
---

# Promptinsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **(optional)** `string` | Event time in UTC. | [default to undefined]
**user** | **(optional)** `string` | User identifier or display name. | [default to undefined]
**agent** | **(optional)** `string` | The AI agent that processed the prompt. | [default to undefined]
**policyDecision** | **(optional)** `string` | The policy decision applied to the prompt. | [default to undefined]
**category** | **(optional)** `string` | The category of the prompt security finding. | [default to undefined]
**severity** | **(optional)** `string` | The severity of the prompt security finding. | [default to undefined]
**reason** | **(optional)** `string` | Human-readable or structured reason for the policy decision. | [default to undefined]
**rule** | **(optional)** `string` | The rule that matched the prompt. | [default to undefined]
**policy** | **(optional)** `string` | The policy that matched the prompt. | [default to undefined]

