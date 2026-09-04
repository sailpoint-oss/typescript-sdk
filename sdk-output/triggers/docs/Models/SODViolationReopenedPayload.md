---
id: v1-sod-violation-reopened-payload
title: SODViolationReopenedPayload
pagination_label: SODViolationReopenedPayload
sidebar_label: SODViolationReopenedPayload
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SODViolationReopenedPayload', 'v1SODViolationReopenedPayload']
slug: /tools/sdk/typescript/triggers/models/sod-violation-reopened-payload
tags: ['SDK', 'Software Development Kit', 'SODViolationReopenedPayload', 'v1SODViolationReopenedPayload']
---

# SODViolationReopenedPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **(optional)** `string` | When the violation record was created. | [default to undefined]
**modified** | **(optional)** `string` | When the violation was last modified. | [default to undefined]
**id** | **(optional)** `string` | Violation ID. | [default to undefined]
**lastEvaluatedDate** | **(optional)** `string` | When the violation was last evaluated. | [default to undefined]
**level** | **(optional)** `string` | Violation severity level. | [default to undefined]
**name** | **(optional)** `string` | Human-readable violation name. | [default to undefined]
**owner** | **(optional)** `SODViolationCreatedPayloadOwner` |  | [default to undefined]
**policy** | **(optional)** `SODViolationCreatedPayloadPolicy` |  | [default to undefined]
**previousStatus** | **(optional)** `string` | Violation status before the reopen. | [default to undefined]
**currentStatus** | **(optional)** `string` | Violation status after the reopen. | [default to undefined]
**target** | **(optional)** `SODViolationCreatedPayloadTarget` |  | [default to undefined]
**reason** | **(optional)** `string` | Why the violation was reopened. | [default to undefined]

