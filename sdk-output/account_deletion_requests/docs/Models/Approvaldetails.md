---
id: v1-approvaldetails
title: Approvaldetails
pagination_label: Approvaldetails
sidebar_label: Approvaldetails
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Approvaldetails', 'v1Approvaldetails']
slug: /tools/sdk/typescript/account_deletion_requests/models/approvaldetails
tags: ['SDK', 'Software Development Kit', 'Approvaldetails', 'v1Approvaldetails']
---

# Approvaldetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver** | **(optional)** `Approverdto` |  | [default to undefined]
**approverComments** | **(optional)** `string` | Comments added by approver while rejecting or approving the account deletion request. | [default to undefined]
**decisionDate** | **(optional)** `string` | Decision date of approval rejected or approved. | [readonly] [default to undefined]
**serialOrder** | **(optional)** `number` | SerialOrder of approval details. | [default to undefined]
**status** | **(optional)** `Accountrequestphasestate` |  | [default to undefined]

