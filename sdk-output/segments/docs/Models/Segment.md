---
id: v1-segment
title: Segment
pagination_label: Segment
sidebar_label: Segment
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Segment', 'v1Segment']
slug: /tools/sdk/typescript/segments/models/segment
tags: ['SDK', 'Software Development Kit', 'Segment', 'v1Segment']
---

# Segment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The segment\'s ID. | [default to undefined]
**name** | **(optional)** `string` | The segment\'s business name. | [default to undefined]
**created** | **(optional)** `string` | The time when the segment is created. | [default to undefined]
**modified** | **(optional)** `string` | The time when the segment is modified. | [default to undefined]
**description** | **(optional)** `string` | The segment\'s optional description. | [default to undefined]
**owner** | **(optional)** `OwnerReferenceSegments` |  | [default to undefined]
**visibilityCriteria** | **(optional)** `SegmentVisibilityCriteria` |  | [default to undefined]
**active** | **(optional)** `boolean` | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [default to false]

