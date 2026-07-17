---
id: v1-revocability-for-role
title: RevocabilityForRole
pagination_label: RevocabilityForRole
sidebar_label: RevocabilityForRole
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RevocabilityForRole', 'v1RevocabilityForRole']
slug: /tools/sdk/typescript/roles/models/revocability-for-role
tags: ['SDK', 'Software Development Kit', 'RevocabilityForRole', 'v1RevocabilityForRole']
---

# RevocabilityForRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commentsRequired** | **(optional)** `boolean` | Whether the requester of the containing object must provide comments justifying the request | [default to false]
**denialCommentsRequired** | **(optional)** `boolean` | Whether an approver must provide comments when denying the request | [default to false]
**approvalSchemes** | **(optional)** `Array<ApprovalSchemeForRole>` | List describing the steps in approving the revocation request | [default to undefined]

