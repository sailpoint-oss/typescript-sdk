---
id: v1-entitlementmetadatabulkupdatebyqueryrequest
title: Entitlementmetadatabulkupdatebyqueryrequest
pagination_label: Entitlementmetadatabulkupdatebyqueryrequest
sidebar_label: Entitlementmetadatabulkupdatebyqueryrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Entitlementmetadatabulkupdatebyqueryrequest', 'v1Entitlementmetadatabulkupdatebyqueryrequest']
slug: /tools/sdk/typescript/entitlements/models/entitlementmetadatabulkupdatebyqueryrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementmetadatabulkupdatebyqueryrequest', 'v1Entitlementmetadatabulkupdatebyqueryrequest']
---

# Entitlementmetadatabulkupdatebyqueryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | `object` | The search query selecting the entitlements to update. | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the entitlement. | [default to undefined]
**values** | `Array<EntitlementmetadatabulkupdatebyidrequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

