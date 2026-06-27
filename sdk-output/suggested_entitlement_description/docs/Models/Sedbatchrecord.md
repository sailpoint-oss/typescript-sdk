---
id: v1-sedbatchrecord
title: Sedbatchrecord
pagination_label: Sedbatchrecord
sidebar_label: Sedbatchrecord
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Sedbatchrecord', 'v1Sedbatchrecord']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/sedbatchrecord
tags: ['SDK', 'Software Development Kit', 'Sedbatchrecord', 'v1Sedbatchrecord']
---

# Sedbatchrecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **(optional)** `string` | The tenant ID associated with the batch. | [default to undefined]
**batchId** | **(optional)** `string` | The unique ID of the batch. | [default to undefined]
**name** | **(optional)** `string` | The name of the batch. | [default to undefined]
**processedState** | **(optional)** `string` | The current state of the batch (e.g., submitted, materialized, completed). | [default to undefined]
**requestedBy** | **(optional)** `string` | The ID of the user who requested the batch. | [default to undefined]
**materializedCount** | **(optional)** `number` | The number of items materialized in the batch. | [default to undefined]
**processedCount** | **(optional)** `number` | The number of items processed in the batch. | [default to undefined]
**createdAt** | **(optional)** `string` | The timestamp when the batch was created. | [default to undefined]
**updatedAt** | **(optional)** `string` | The timestamp when the batch was last updated. | [default to undefined]

