---
id: v1-entitlement-attribute-bulk-update-ids-request
title: EntitlementAttributeBulkUpdateIdsRequest
pagination_label: EntitlementAttributeBulkUpdateIdsRequest
sidebar_label: EntitlementAttributeBulkUpdateIdsRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'EntitlementAttributeBulkUpdateIdsRequest', 'v1EntitlementAttributeBulkUpdateIdsRequest']
slug: /tools/sdk/typescript/access_model_metadata/models/entitlement-attribute-bulk-update-ids-request
tags: ['SDK', 'Software Development Kit', 'EntitlementAttributeBulkUpdateIdsRequest', 'v1EntitlementAttributeBulkUpdateIdsRequest']
---

# EntitlementAttributeBulkUpdateIdsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | **(optional)** `Array<string>` | List of entitlement IDs to update. | [default to undefined]
**operation** | **(optional)** `string` | Operation to perform on the attributes in the bulk update request. | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. | [default to undefined]
**values** | **(optional)** `Array<BulkUpdateAMMKeyValueInner>` | The metadata to be updated, including attribute and values. | [default to undefined]

