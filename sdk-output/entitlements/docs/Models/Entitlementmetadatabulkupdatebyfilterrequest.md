---
id: v1-entitlementmetadatabulkupdatebyfilterrequest
title: Entitlementmetadatabulkupdatebyfilterrequest
pagination_label: Entitlementmetadatabulkupdatebyfilterrequest
sidebar_label: Entitlementmetadatabulkupdatebyfilterrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Entitlementmetadatabulkupdatebyfilterrequest', 'v1Entitlementmetadatabulkupdatebyfilterrequest']
slug: /tools/sdk/typescript/entitlements/models/entitlementmetadatabulkupdatebyfilterrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementmetadatabulkupdatebyfilterrequest', 'v1Entitlementmetadatabulkupdatebyfilterrequest']
---

# Entitlementmetadatabulkupdatebyfilterrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq* | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the entitlement. | [default to undefined]
**values** | `Array<EntitlementmetadatabulkupdatebyidrequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

