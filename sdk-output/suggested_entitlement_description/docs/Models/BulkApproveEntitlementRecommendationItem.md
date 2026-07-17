---
id: v1-bulk-approve-entitlement-recommendation-item
title: BulkApproveEntitlementRecommendationItem
pagination_label: BulkApproveEntitlementRecommendationItem
sidebar_label: BulkApproveEntitlementRecommendationItem
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'BulkApproveEntitlementRecommendationItem', 'v1BulkApproveEntitlementRecommendationItem']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/bulk-approve-entitlement-recommendation-item
tags: ['SDK', 'Software Development Kit', 'BulkApproveEntitlementRecommendationItem', 'v1BulkApproveEntitlementRecommendationItem']
---

# BulkApproveEntitlementRecommendationItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique identifier of the recommendation record to approve. | [default to undefined]
**recordType** | **(optional)** `string` | The type of the recommendation. When omitted, the backend resolves the type by looking up the ID. | [default to undefined]
**description** | **(optional)** `string` | The approved description text. Required for SED-type items; ignored for privilege items. | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The approved privilege level. Required for privilege-type items; ignored for SED items. | [default to undefined]

