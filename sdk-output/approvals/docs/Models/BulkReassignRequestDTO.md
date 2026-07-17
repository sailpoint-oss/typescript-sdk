---
id: v1-bulk-reassign-request-dto
title: BulkReassignRequestDTO
pagination_label: BulkReassignRequestDTO
sidebar_label: BulkReassignRequestDTO
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'BulkReassignRequestDTO', 'v1BulkReassignRequestDTO']
slug: /tools/sdk/typescript/approvals/models/bulk-reassign-request-dto
tags: ['SDK', 'Software Development Kit', 'BulkReassignRequestDTO', 'v1BulkReassignRequestDTO']
---

# BulkReassignRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalIds** | **(optional)** `Array<string>` | Array of Approval IDs to be bulk reassigned | [default to undefined]
**comment** | **(optional)** `string` | Optional comment to include with the bulk reassignment request | [default to undefined]
**reassignFrom** | **(optional)** `string` | Identity ID from which the approval requests are being reassigned | [default to undefined]
**reassignTo** | **(optional)** `string` | ReassignTo signifies the Identity ID that the approval request is being reassigned to | [default to undefined]

