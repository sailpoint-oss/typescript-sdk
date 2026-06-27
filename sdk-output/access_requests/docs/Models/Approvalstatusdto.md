---
id: v1-approvalstatusdto
title: Approvalstatusdto
pagination_label: Approvalstatusdto
sidebar_label: Approvalstatusdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Approvalstatusdto', 'v1Approvalstatusdto']
slug: /tools/sdk/typescript/access_requests/models/approvalstatusdto
tags: ['SDK', 'Software Development Kit', 'Approvalstatusdto', 'v1Approvalstatusdto']
---

# Approvalstatusdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **(optional)** `boolean` | True if the request for this item was forwarded from one owner to another. | [default to false]
**originalOwner** | **(optional)** `ApprovalstatusdtoOriginalOwner` |  | [default to undefined]
**currentOwner** | **(optional)** `ApprovalstatusdtoCurrentOwner` |  | [default to undefined]
**modified** | **(optional)** `string` | Time at which item was modified. | [default to undefined]
**status** | **(optional)** `Manualworkitemstate` |  | [default to undefined]
**scheme** | **(optional)** `Approvalscheme` |  | [default to undefined]
**errorMessages** | **(optional)** `Array<Errormessagedto>` | If the request failed, includes any error messages that were generated. | [default to undefined]
**comment** | **(optional)** `string` | Comment, if any, provided by the approver. | [default to undefined]
**removeDate** | **(optional)** `string` | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [default to undefined]

