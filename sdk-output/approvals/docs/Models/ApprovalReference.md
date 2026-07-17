---
id: v1-approval-reference
title: ApprovalReference
pagination_label: ApprovalReference
sidebar_label: ApprovalReference
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApprovalReference', 'v1ApprovalReference']
slug: /tools/sdk/typescript/approvals/models/approval-reference
tags: ['SDK', 'Software Development Kit', 'ApprovalReference', 'v1ApprovalReference']
---

# ApprovalReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the reference object | [default to undefined]
**type** | **(optional)** `string` | What reference object does this ID correspond to | [default to undefined]
**name** | **(optional)** `string` | Name of the reference object | [default to undefined]
**email** | **(optional)** `string` | Email associated with the reference object | [default to undefined]
**serialOrder** | **(optional)** `number` | The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0. | [default to undefined]

