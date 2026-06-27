---
id: v1-manualworkitemdetails
title: Manualworkitemdetails
pagination_label: Manualworkitemdetails
sidebar_label: Manualworkitemdetails
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Manualworkitemdetails', 'v1Manualworkitemdetails']
slug: /tools/sdk/typescript/access_requests/models/manualworkitemdetails
tags: ['SDK', 'Software Development Kit', 'Manualworkitemdetails', 'v1Manualworkitemdetails']
---

# Manualworkitemdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **(optional)** `boolean` | True if the request for this item was forwarded from one owner to another. | [default to false]
**originalOwner** | **(optional)** `ManualworkitemdetailsOriginalOwner` |  | [default to undefined]
**currentOwner** | **(optional)** `ManualworkitemdetailsCurrentOwner` |  | [default to undefined]
**modified** | **(optional)** `string` | Time at which item was modified. | [default to undefined]
**status** | **(optional)** `Manualworkitemstate` |  | [default to undefined]
**forwardHistory** | **(optional)** `Array<Approvalforwardhistory>` | The history of approval forward action. | [default to undefined]

