---
id: v1-entitlementattributebulkupdatefilterrequest
title: Entitlementattributebulkupdatefilterrequest
pagination_label: Entitlementattributebulkupdatefilterrequest
sidebar_label: Entitlementattributebulkupdatefilterrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Entitlementattributebulkupdatefilterrequest', 'v1Entitlementattributebulkupdatefilterrequest']
slug: /tools/sdk/typescript/access_model_metadata/models/entitlementattributebulkupdatefilterrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementattributebulkupdatefilterrequest', 'v1Entitlementattributebulkupdatefilterrequest']
---

# Entitlementattributebulkupdatefilterrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **(optional)** `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq* | [default to undefined]
**operation** | **(optional)** `string` | Operation to perform on the attributes in the bulk update request. | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. | [default to undefined]
**values** | **(optional)** `Array<BulkupdateammkeyvalueInner>` | The metadata to be updated, including attribute and values. | [default to undefined]

