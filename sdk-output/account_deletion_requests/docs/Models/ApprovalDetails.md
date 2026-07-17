---
id: v1-approval-details
title: ApprovalDetails
pagination_label: ApprovalDetails
sidebar_label: ApprovalDetails
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApprovalDetails', 'v1ApprovalDetails']
slug: /tools/sdk/typescript/account_deletion_requests/models/approval-details
tags: ['SDK', 'Software Development Kit', 'ApprovalDetails', 'v1ApprovalDetails']
---

# ApprovalDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver** | **(optional)** `ApproverDto` |  | [default to undefined]
**approverComments** | **(optional)** `string` | Comments added by approver while rejecting or approving the account deletion request. | [default to undefined]
**decisionDate** | **(optional)** `string` | Decision date of approval rejected or approved. | [readonly] [default to undefined]
**serialOrder** | **(optional)** `number` | SerialOrder of approval details. | [default to undefined]
**status** | **(optional)** `AccountRequestPhaseState` |  | [default to undefined]

