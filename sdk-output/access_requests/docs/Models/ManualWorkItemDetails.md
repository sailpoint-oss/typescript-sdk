---
id: v1-manual-work-item-details
title: ManualWorkItemDetails
pagination_label: ManualWorkItemDetails
sidebar_label: ManualWorkItemDetails
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ManualWorkItemDetails', 'v1ManualWorkItemDetails']
slug: /tools/sdk/typescript/access_requests/models/manual-work-item-details
tags: ['SDK', 'Software Development Kit', 'ManualWorkItemDetails', 'v1ManualWorkItemDetails']
---

# ManualWorkItemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **(optional)** `boolean` | True if the request for this item was forwarded from one owner to another. | [default to false]
**originalOwner** | **(optional)** `ManualWorkItemDetailsOriginalOwner` |  | [default to undefined]
**currentOwner** | **(optional)** `ManualWorkItemDetailsCurrentOwner` |  | [default to undefined]
**modified** | **(optional)** `string` | Time at which item was modified. | [default to undefined]
**status** | **(optional)** `ManualWorkItemState` |  | [default to undefined]
**forwardHistory** | **(optional)** `Array<ApprovalForwardHistory>` | The history of approval forward action. | [default to undefined]

