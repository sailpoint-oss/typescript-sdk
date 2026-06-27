---
id: v1-workgroupmemberadditem
title: Workgroupmemberadditem
pagination_label: Workgroupmemberadditem
sidebar_label: Workgroupmemberadditem
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Workgroupmemberadditem', 'v1Workgroupmemberadditem']
slug: /tools/sdk/typescript/governance_groups/models/workgroupmemberadditem
tags: ['SDK', 'Software Development Kit', 'Workgroupmemberadditem', 'v1Workgroupmemberadditem']
---

# Workgroupmemberadditem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Identifier of identity in bulk member add request. | [default to undefined]
**status** | `number` |  The HTTP response status code returned for an individual member that is requested for addition during a bulk add operation. The HTTP response status code returned for an individual Governance Group is requested for deletion.  > 201   - Identity is added into Governance Group members list.  > 409   - Identity is already member of  Governance Group.  | [default to undefined]
**description** | **(optional)** `string` | Human readable status description and containing additional context information about success or failures etc.  | [default to undefined]

