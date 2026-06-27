---
id: v1-accountactivity
title: Accountactivity
pagination_label: Accountactivity
sidebar_label: Accountactivity
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accountactivity', 'v1Accountactivity']
slug: /tools/sdk/typescript/account_activities/models/accountactivity
tags: ['SDK', 'Software Development Kit', 'Accountactivity', 'v1Accountactivity']
---

# Accountactivity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the account activity | [default to undefined]
**name** | **(optional)** `string` | The name of the activity | [default to undefined]
**created** | **(optional)** `string` | When the activity was first created | [default to undefined]
**modified** | **(optional)** `string` | When the activity was last modified | [default to undefined]
**completed** | **(optional)** `string` | When the activity was completed | [default to undefined]
**completionStatus** | **(optional)** `Completionstatus` |  | [default to undefined]
**type** | **(optional)** `string` | The type of action the activity performed.  Please see the following list of types.  This list may grow over time.  - CloudAutomated - IdentityAttributeUpdate - appRequest - LifecycleStateChange - AccountStateUpdate - AccountAttributeUpdate - CloudPasswordRequest - Attribute Synchronization Refresh - Certification - Identity Refresh - Lifecycle Change Refresh   [Learn more here](https://documentation.sailpoint.com/saas/help/search/searchable-fields.html#searching-account-activity-data).  | [default to undefined]
**requesterIdentitySummary** | **(optional)** `Identitysummary` |  | [default to undefined]
**targetIdentitySummary** | **(optional)** `Identitysummary` |  | [default to undefined]
**errors** | **(optional)** `Array<string>` | A list of error messages, if any, that were encountered. | [default to undefined]
**warnings** | **(optional)** `Array<string>` | A list of warning messages, if any, that were encountered. | [default to undefined]
**items** | **(optional)** `Array<Accountactivityitem>` | Individual actions performed as part of this account activity | [default to undefined]
**executionStatus** | **(optional)** `Executionstatus` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs, if any were included in the corresponding access request | [default to undefined]

