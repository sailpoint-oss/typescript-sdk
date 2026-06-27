---
id: v1-reviewdecision
title: Reviewdecision
pagination_label: Reviewdecision
sidebar_label: Reviewdecision
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Reviewdecision', 'v1Reviewdecision']
slug: /tools/sdk/typescript/certifications/models/reviewdecision
tags: ['SDK', 'Software Development Kit', 'Reviewdecision', 'v1Reviewdecision']
---

# Reviewdecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The id of the review decision | [default to undefined]
**decision** | `Certificationdecision` |  | [default to undefined]
**proposedEndDate** | **(optional)** `string` | The date at which a user\'s access should be taken away. Should only be set for `REVOKE` decisions. | [default to undefined]
**bulk** | `boolean` | Indicates whether decision should be marked as part of a larger bulk decision | [default to undefined]
**recommendation** | **(optional)** `Reviewrecommendation` |  | [default to undefined]
**comments** | **(optional)** `string` | Comments recorded when the decision was made | [default to undefined]

