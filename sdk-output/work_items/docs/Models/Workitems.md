---
id: v1-workitems
title: Workitems
pagination_label: Workitems
sidebar_label: Workitems
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Workitems', 'v1Workitems']
slug: /tools/sdk/typescript/work_items/models/workitems
tags: ['SDK', 'Software Development Kit', 'Workitems', 'v1Workitems']
---

# Workitems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the work item | [default to undefined]
**requesterId** | **(optional)** `string` | ID of the requester | [default to undefined]
**requesterDisplayName** | **(optional)** `string` | The displayname of the requester | [default to undefined]
**ownerId** | **(optional)** `string` | The ID of the owner | [default to undefined]
**ownerName** | **(optional)** `string` | The name of the owner | [default to undefined]
**created** | **(optional)** `string` | Time when the work item was created | [default to undefined]
**modified** | **(optional)** `string` | Time when the work item was last updated | [default to undefined]
**description** | **(optional)** `string` | The description of the work item | [default to undefined]
**state** | **(optional)** `Workitemstatemanualworkitems` |  | [default to undefined]
**type** | **(optional)** `Workitemtypemanualworkitems` |  | [default to undefined]
**remediationItems** | **(optional)** `Array<Remediationitemdetails>` | A list of remediation items | [default to undefined]
**approvalItems** | **(optional)** `Array<Approvalitemdetails>` | A list of items that need to be approved | [default to undefined]
**name** | **(optional)** `string` | The work item name | [default to undefined]
**completed** | **(optional)** `string` | The time at which the work item completed | [default to undefined]
**numItems** | **(optional)** `number` | The number of items in the work item | [default to undefined]
**form** | **(optional)** `WorkitemsForm` |  | [default to undefined]
**errors** | **(optional)** `Array<string>` | An array of errors that ocurred during the work item | [default to undefined]

