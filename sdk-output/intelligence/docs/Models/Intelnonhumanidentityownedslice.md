---
id: v1-intelnonhumanidentityownedslice
title: Intelnonhumanidentityownedslice
pagination_label: Intelnonhumanidentityownedslice
sidebar_label: Intelnonhumanidentityownedslice
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Intelnonhumanidentityownedslice', 'v1Intelnonhumanidentityownedslice']
slug: /tools/sdk/typescript/intelligence/models/intelnonhumanidentityownedslice
tags: ['SDK', 'Software Development Kit', 'Intelnonhumanidentityownedslice', 'v1Intelnonhumanidentityownedslice']
---

# Intelnonhumanidentityownedslice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | `Array<Intelnonhumanidentityownershipitem>` | First page of owned non-human identities for this role. | [default to undefined]
**totalCount** | **(optional)** `number` | Total number of owned non-human identities in this role; omitted when items is empty. | [default to undefined]
**next** | **(optional)** `string` | Absolute URL to the next page for this category and ownership role; present when totalCount exceeds the items returned on this page. Includes `ownershipRole`, `limit`, `offset`, and `count=true`.  | [default to undefined]

