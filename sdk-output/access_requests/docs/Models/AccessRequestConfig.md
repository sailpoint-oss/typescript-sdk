---
id: v1-access-request-config
title: AccessRequestConfig
pagination_label: AccessRequestConfig
sidebar_label: AccessRequestConfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessRequestConfig', 'v1AccessRequestConfig']
slug: /tools/sdk/typescript/access_requests/models/access-request-config
tags: ['SDK', 'Software Development Kit', 'AccessRequestConfig', 'v1AccessRequestConfig']
---

# AccessRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalsMustBeExternal** | **(optional)** `boolean` | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn\'t an org admin. | [default to false]
**autoApprovalEnabled** | **(optional)** `boolean` | If this is true and the requester and reviewer are the same, the request is automatically approved. | [default to false]
**reauthorizationEnabled** | **(optional)** `boolean` | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [default to false]
**requestOnBehalfOfConfig** | **(optional)** `RequestOnBehalfOfConfig` |  | [default to undefined]
**approvalReminderAndEscalationConfig** | **(optional)** `ApprovalReminderAndEscalationConfig` |  | [default to undefined]
**entitlementRequestConfig** | **(optional)** `EntitlementRequestConfig` |  | [default to undefined]

