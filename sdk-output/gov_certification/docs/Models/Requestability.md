---
id: v1-requestability
title: Requestability
pagination_label: Requestability
sidebar_label: Requestability
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Requestability', 'v1Requestability']
slug: /tools/sdk/typescript/gov_certification/models/requestability
tags: ['SDK', 'Software Development Kit', 'Requestability', 'v1Requestability']
---

# Requestability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commentsRequired** | **(optional)** `boolean` | Whether the requester of the containing object must provide comments justifying the request | [default to false]
**denialCommentsRequired** | **(optional)** `boolean` | Whether an approver must provide comments when denying the request | [default to false]
**approvalSchemes** | **(optional)** `Array<AccessProfileApprovalScheme>` | List describing the steps in approving the request | [default to undefined]

