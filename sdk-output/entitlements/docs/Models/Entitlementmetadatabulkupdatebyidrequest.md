---
id: v1-entitlementmetadatabulkupdatebyidrequest
title: Entitlementmetadatabulkupdatebyidrequest
pagination_label: Entitlementmetadatabulkupdatebyidrequest
sidebar_label: Entitlementmetadatabulkupdatebyidrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Entitlementmetadatabulkupdatebyidrequest', 'v1Entitlementmetadatabulkupdatebyidrequest']
slug: /tools/sdk/typescript/entitlements/models/entitlementmetadatabulkupdatebyidrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementmetadatabulkupdatebyidrequest', 'v1Entitlementmetadatabulkupdatebyidrequest']
---

# Entitlementmetadatabulkupdatebyidrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | `Array<string>` | The IDs of the entitlements to update. | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the entitlement. | [default to undefined]
**values** | `Array<EntitlementmetadatabulkupdatebyidrequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

