---
id: v1-entitlementconnectionsearchhit
title: Entitlementconnectionsearchhit
pagination_label: Entitlementconnectionsearchhit
sidebar_label: Entitlementconnectionsearchhit
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Entitlementconnectionsearchhit', 'v1Entitlementconnectionsearchhit']
slug: /tools/sdk/typescript/entitlement_connections/models/entitlementconnectionsearchhit
tags: ['SDK', 'Software Development Kit', 'Entitlementconnectionsearchhit', 'v1Entitlementconnectionsearchhit']
---

# Entitlementconnectionsearchhit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Connection ID as represented in search results. | [default to undefined]
**identity** | **(optional)**  | Identity summary object from search index. | [default to undefined]
**machineIdentity** | **(optional)**  | Machine identity summary object when available. | [default to undefined]
**account** | **(optional)**  | Account summary object. | [default to undefined]
**entitlement** | **(optional)** `Entitlementconnectionsearchhitentitlement` |  | [default to undefined]
**source** | **(optional)**  | Source summary object. | [default to undefined]
**state** | **(optional)**  | Connection state object. | [default to undefined]
**jit** | **(optional)**  | JIT timestamps for lifecycle events. | [default to undefined]
**standalone** | **(optional)** `boolean` | Indicates whether the connection is marked as standalone. | [default to false]
**type** | **(optional)** `string` | Connection type classification. | [default to undefined]

