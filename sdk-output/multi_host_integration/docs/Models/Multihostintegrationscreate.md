---
id: v1-multihostintegrationscreate
title: Multihostintegrationscreate
pagination_label: Multihostintegrationscreate
sidebar_label: Multihostintegrationscreate
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Multihostintegrationscreate', 'v1Multihostintegrationscreate']
slug: /tools/sdk/typescript/multi_host_integration/models/multihostintegrationscreate
tags: ['SDK', 'Software Development Kit', 'Multihostintegrationscreate', 'v1Multihostintegrationscreate']
---

# Multihostintegrationscreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Multi-Host Integration\'s human-readable name. | [default to undefined]
**description** | `string` | Multi-Host Integration\'s human-readable description. | [default to undefined]
**owner** | `MultihostintegrationsOwner` |  | [default to undefined]
**cluster** | **(optional)** `MultihostintegrationsCluster` |  | [default to undefined]
**connector** | `string` | Connector script name. | [default to undefined]
**connectorAttributes** | **(optional)**  | Multi-Host Integration specific configuration. User can add any number of additional attributes. e.g. maxSourcesPerAggGroup, maxAllowedSources etc. | [default to undefined]
**managementWorkgroup** | **(optional)** `MultihostintegrationsManagementWorkgroup` |  | [default to undefined]
**created** | **(optional)** `string` | Date-time when the source was created | [default to undefined]
**modified** | **(optional)** `string` | Date-time when the source was last modified. | [default to undefined]

