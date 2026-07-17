---
id: v1-entitlement-connection-search-hit
title: EntitlementConnectionSearchHit
pagination_label: EntitlementConnectionSearchHit
sidebar_label: EntitlementConnectionSearchHit
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'EntitlementConnectionSearchHit', 'v1EntitlementConnectionSearchHit']
slug: /tools/sdk/typescript/entitlement_connections/models/entitlement-connection-search-hit
tags: ['SDK', 'Software Development Kit', 'EntitlementConnectionSearchHit', 'v1EntitlementConnectionSearchHit']
---

# EntitlementConnectionSearchHit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Connection ID as represented in search results. | [default to undefined]
**identity** | **(optional)**  | Identity summary object from search index. | [default to undefined]
**machineIdentity** | **(optional)**  | Machine identity summary object when available. | [default to undefined]
**account** | **(optional)**  | Account summary object. | [default to undefined]
**entitlement** | **(optional)** `EntitlementConnectionSearchHitEntitlement` |  | [default to undefined]
**source** | **(optional)**  | Source summary object. | [default to undefined]
**state** | **(optional)**  | Connection state object. | [default to undefined]
**jit** | **(optional)**  | JIT timestamps for lifecycle events. | [default to undefined]
**standalone** | **(optional)** `boolean` | Indicates whether the connection is marked as standalone. | [default to false]
**type** | **(optional)** `string` | Connection type classification. | [default to undefined]

