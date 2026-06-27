---
id: v1-accessrequestconfig
title: Accessrequestconfig
pagination_label: Accessrequestconfig
sidebar_label: Accessrequestconfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accessrequestconfig', 'v1Accessrequestconfig']
slug: /tools/sdk/typescript/access_requests/models/accessrequestconfig
tags: ['SDK', 'Software Development Kit', 'Accessrequestconfig', 'v1Accessrequestconfig']
---

# Accessrequestconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalsMustBeExternal** | **(optional)** `boolean` | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn\'t an org admin. | [default to false]
**autoApprovalEnabled** | **(optional)** `boolean` | If this is true and the requester and reviewer are the same, the request is automatically approved. | [default to false]
**reauthorizationEnabled** | **(optional)** `boolean` | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [default to false]
**requestOnBehalfOfConfig** | **(optional)** `Requestonbehalfofconfig` |  | [default to undefined]
**approvalReminderAndEscalationConfig** | **(optional)** `Approvalreminderandescalationconfig` |  | [default to undefined]
**entitlementRequestConfig** | **(optional)** `Entitlementrequestconfig` |  | [default to undefined]

