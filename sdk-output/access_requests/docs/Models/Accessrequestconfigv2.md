---
id: v1-accessrequestconfigv2
title: Accessrequestconfigv2
pagination_label: Accessrequestconfigv2
sidebar_label: Accessrequestconfigv2
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accessrequestconfigv2', 'v1Accessrequestconfigv2']
slug: /tools/sdk/typescript/access_requests/models/accessrequestconfigv2
tags: ['SDK', 'Software Development Kit', 'Accessrequestconfigv2', 'v1Accessrequestconfigv2']
---

# Accessrequestconfigv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalsMustBeExternal** | **(optional)** `boolean` | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn\'t an org admin. | [default to false]
**reauthorizationEnabled** | **(optional)** `boolean` | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [default to false]
**requestOnBehalfOfConfig** | **(optional)** `Requestonbehalfofconfigv2` |  | [default to undefined]
**entitlementRequestConfig** | **(optional)** `Entitlementrequestconfigv2` |  | [default to undefined]
**govGroupVisibilityEnabled** | **(optional)** `boolean` | If this is true, requesters and requested-for users will be able to see the names of governance group members when a request is awaiting the group\'s approval. Up to the first 10 members of the group will be listed. | [default to false]

