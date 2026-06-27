---
id: v1-entitlementaccessrequestconfig
title: Entitlementaccessrequestconfig
pagination_label: Entitlementaccessrequestconfig
sidebar_label: Entitlementaccessrequestconfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Entitlementaccessrequestconfig', 'v1Entitlementaccessrequestconfig']
slug: /tools/sdk/typescript/entitlements/models/entitlementaccessrequestconfig
tags: ['SDK', 'Software Development Kit', 'Entitlementaccessrequestconfig', 'v1Entitlementaccessrequestconfig']
---

# Entitlementaccessrequestconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalSchemes** | **(optional)** `Array<Entitlementapprovalscheme>` | Ordered list of approval steps for the access request. Empty when no approval is required. | [default to undefined]
**requestCommentRequired** | **(optional)** `boolean` | If the requester must provide a comment during access request. | [default to false]
**denialCommentRequired** | **(optional)** `boolean` | If the reviewer must provide a comment when denying the access request. | [default to false]
**reauthorizationRequired** | **(optional)** `boolean` | Is Reauthorization Required | [default to false]
**requireEndDate** | **(optional)** `boolean` | If true, then remove date or sunset date is required in access request of the entitlement. | [default to false]
**maxPermittedAccessDuration** | **(optional)** `EntitlementaccessrequestconfigMaxPermittedAccessDuration` |  | [default to undefined]

