---
id: v1-machinesubtypeapprovalconfig
title: Machinesubtypeapprovalconfig
pagination_label: Machinesubtypeapprovalconfig
sidebar_label: Machinesubtypeapprovalconfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Machinesubtypeapprovalconfig', 'v1Machinesubtypeapprovalconfig']
slug: /tools/sdk/typescript/machine_account_subtypes/models/machinesubtypeapprovalconfig
tags: ['SDK', 'Software Development Kit', 'Machinesubtypeapprovalconfig', 'v1Machinesubtypeapprovalconfig']
---

# Machinesubtypeapprovalconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvers** | **(optional)** `string` | Comma separated string of approvers.  Following are the options for approver types: manager, sourceOwner, accountOwner, workgroup:[workgroupId] (Governance group).  Approval request will be assigned based on the order of the approvers passed.  Multiple workgroups(governance groups) can be selected as an approver.  >**Note:** accountOwner approver type is only for machine account delete approval settings. | [default to undefined]
**comments** | **(optional)** `string` | Comment configurations for the approval request.  Following are the options for comments: ALL, OFF, APPROVAL, REJECT. | [default to undefined]

