---
id: v1-review-item
title: ReviewItem
pagination_label: ReviewItem
sidebar_label: ReviewItem
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ReviewItem', 'v1ReviewItem']
slug: /tools/sdk/typescript/gov_certification/models/review-item
tags: ['SDK', 'Software Development Kit', 'ReviewItem', 'v1ReviewItem']
---

# ReviewItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The review item\'s ID | [default to undefined]
**type** | **(optional)** `CertificationItemType` |  | [default to undefined]
**completed** | **(optional)** `boolean` | Indicates whether the review item is complete | [default to false]
**newAccess** | **(optional)** `boolean` | Indicates whether the review item is for new access to a source | [default to false]
**decision** | **(optional)** `CertificationDecision` |  | [default to undefined]
**proposedEndDate** | **(optional)** `string` | The end date proposed as part of decision to sunset a user\'s access | [default to undefined]
**comments** | **(optional)** `string` | Comments for this review item | [default to undefined]
**reviewData** | **(optional)** `ReviewData` |  | [default to undefined]
**certificationSubjectSummary** | **(optional)** `CertificationSubjectSummary` |  | [default to undefined]
**actor** | **(optional)** `IdentityReference` |  | [default to undefined]
**accountName** | **(optional)** `string` | The name of the account to which this access profile belongs | [default to undefined]
**sourceName** | **(optional)** `string` | The name of the source for which this access profile belongs | [default to undefined]
**reauthRequired** | **(optional)** `boolean` | Indicates whether the review item requires a reauthentication for the approver | [default to false]

