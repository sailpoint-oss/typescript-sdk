---
id: v1-common-access-response
title: CommonAccessResponse
pagination_label: CommonAccessResponse
sidebar_label: CommonAccessResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CommonAccessResponse', 'v1CommonAccessResponse']
slug: /tools/sdk/typescript/iai_common_access/models/common-access-response
tags: ['SDK', 'Software Development Kit', 'CommonAccessResponse', 'v1CommonAccessResponse']
---

# CommonAccessResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique ID of the common access item | [default to undefined]
**access** | **(optional)** `CommonAccessItemAccess` |  | [default to undefined]
**status** | **(optional)** `string` | CONFIRMED or DENIED | [default to undefined]
**commonAccessType** | **(optional)** `string` |  | [default to undefined]
**lastUpdated** | **(optional)** `string` |  | [readonly] [default to undefined]
**reviewedByUser** | **(optional)** `boolean` | true if user has confirmed or denied status | [default to undefined]
**lastReviewed** | **(optional)** `string` |  | [readonly] [default to undefined]
**createdByUser** | **(optional)** `boolean` |  | [default to false]

