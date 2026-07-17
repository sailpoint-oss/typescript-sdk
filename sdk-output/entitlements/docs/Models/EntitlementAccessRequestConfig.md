---
id: v1-entitlement-access-request-config
title: EntitlementAccessRequestConfig
pagination_label: EntitlementAccessRequestConfig
sidebar_label: EntitlementAccessRequestConfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'EntitlementAccessRequestConfig', 'v1EntitlementAccessRequestConfig']
slug: /tools/sdk/typescript/entitlements/models/entitlement-access-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementAccessRequestConfig', 'v1EntitlementAccessRequestConfig']
---

# EntitlementAccessRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalSchemes** | **(optional)** `Array<EntitlementApprovalScheme>` | Ordered list of approval steps for the access request. Empty when no approval is required. | [default to undefined]
**requestCommentRequired** | **(optional)** `boolean` | If the requester must provide a comment during access request. | [default to false]
**denialCommentRequired** | **(optional)** `boolean` | If the reviewer must provide a comment when denying the access request. | [default to false]
**reauthorizationRequired** | **(optional)** `boolean` | Is Reauthorization Required | [default to false]
**requireEndDate** | **(optional)** `boolean` | If true, then remove date or sunset date is required in access request of the entitlement. | [default to false]
**maxPermittedAccessDuration** | **(optional)** `EntitlementAccessRequestConfigMaxPermittedAccessDuration` |  | [default to undefined]

