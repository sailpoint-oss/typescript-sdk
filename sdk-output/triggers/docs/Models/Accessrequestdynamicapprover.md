---
id: v1-accessrequestdynamicapprover
title: Accessrequestdynamicapprover
pagination_label: Accessrequestdynamicapprover
sidebar_label: Accessrequestdynamicapprover
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accessrequestdynamicapprover', 'v1Accessrequestdynamicapprover']
slug: /tools/sdk/typescript/triggers/models/accessrequestdynamicapprover
tags: ['SDK', 'Software Development Kit', 'Accessrequestdynamicapprover', 'v1Accessrequestdynamicapprover']
---

# Accessrequestdynamicapprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestId** | `string` | The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/idn/api/beta/list-access-request-status) to get the status of the request.  | [default to undefined]
**requestedFor** | `Array<Accessitemrequestedfordto>` | Identities access was requested for. | [default to undefined]
**requestedItems** | `Array<AccessrequestdynamicapproverRequestedItemsInner>` | The access items that are being requested. | [default to undefined]
**requestedBy** | `Accessitemrequesterdto` |  | [default to undefined]

