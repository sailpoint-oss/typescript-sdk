---
id: v1-workgroupmemberdeleteitem
title: Workgroupmemberdeleteitem
pagination_label: Workgroupmemberdeleteitem
sidebar_label: Workgroupmemberdeleteitem
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Workgroupmemberdeleteitem', 'v1Workgroupmemberdeleteitem']
slug: /tools/sdk/typescript/governance_groups/models/workgroupmemberdeleteitem
tags: ['SDK', 'Software Development Kit', 'Workgroupmemberdeleteitem', 'v1Workgroupmemberdeleteitem']
---

# Workgroupmemberdeleteitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Identifier of identity in bulk member add /remove request. | [default to undefined]
**status** | `number` | The HTTP response status code returned for an individual  member that is requested for deletion during a bulk delete operation.  > 204   - Identity is removed from Governance Group members list.  > 404   - Identity is not member of Governance Group.  | [default to undefined]
**description** | **(optional)** `string` | Human readable status description and containing additional context information about success or failures etc.  | [default to undefined]

