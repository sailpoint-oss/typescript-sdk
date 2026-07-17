---
id: v1-provisioning-completed-account-requests-inner
title: ProvisioningCompletedAccountRequestsInner
pagination_label: ProvisioningCompletedAccountRequestsInner
sidebar_label: ProvisioningCompletedAccountRequestsInner
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ProvisioningCompletedAccountRequestsInner', 'v1ProvisioningCompletedAccountRequestsInner']
slug: /tools/sdk/typescript/triggers/models/provisioning-completed-account-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInner', 'v1ProvisioningCompletedAccountRequestsInner']
---

# ProvisioningCompletedAccountRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | `ProvisioningCompletedAccountRequestsInnerSource` |  | [default to undefined]
**accountId** | **(optional)** `string` | The unique idenfier of the account being provisioned. | [default to undefined]
**accountOperation** | `string` | The provisioning operation; typically Create, Modify, Enable, Disable, Unlock, or Delete. | [default to undefined]
**provisioningResult** | `string` | The overall result of the provisioning transaction; this could be success, pending, failed, etc. | [default to undefined]
**provisioningTarget** | `string` | The name of the provisioning channel selected; this could be the same as the source, or could be a Service Desk Integration Module (SDIM). | [default to undefined]
**ticketId** | **(optional)** `string` | A reference to a tracking number, if this is sent to a Service Desk Integration Module (SDIM). | [default to undefined]
**attributeRequests** | **(optional)** `Array<ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner>` | A list of attributes as part of the provisioning transaction. | [default to undefined]

