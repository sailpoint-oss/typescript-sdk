---
id: v1-accountactivityitem
title: Accountactivityitem
pagination_label: Accountactivityitem
sidebar_label: Accountactivityitem
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accountactivityitem', 'v1Accountactivityitem']
slug: /tools/sdk/typescript/account_activities/models/accountactivityitem
tags: ['SDK', 'Software Development Kit', 'Accountactivityitem', 'v1Accountactivityitem']
---

# Accountactivityitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Item id | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of item | [default to undefined]
**requested** | **(optional)** `string` | Date and time item was requested | [default to undefined]
**approvalStatus** | **(optional)** `Accountactivityapprovalstatus` |  | [default to undefined]
**provisioningStatus** | **(optional)** `Provisioningstate` |  | [default to undefined]
**requesterComment** | **(optional)** `Comment` |  | [default to undefined]
**reviewerIdentitySummary** | **(optional)** `Identitysummary` |  | [default to undefined]
**reviewerComment** | **(optional)** `Comment` |  | [default to undefined]
**operation** | **(optional)** `Accountactivityitemoperation` |  | [default to undefined]
**attribute** | **(optional)** `string` | Attribute to which account activity applies | [default to undefined]
**value** | **(optional)** `string` | Value of attribute | [default to undefined]
**nativeIdentity** | **(optional)** `string` | Native identity in the target system to which the account activity applies | [default to undefined]
**sourceId** | **(optional)** `string` | Id of Source to which account activity applies | [default to undefined]
**accountRequestInfo** | **(optional)** `Accountrequestinfo` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs, if any were included in the corresponding access request item | [default to undefined]
**removeDate** | **(optional)** `string` | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [default to undefined]

