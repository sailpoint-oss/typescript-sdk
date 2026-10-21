---
id: v1-review-decision
title: ReviewDecision
pagination_label: ReviewDecision
sidebar_label: ReviewDecision
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ReviewDecision', 'v1ReviewDecision']
slug: /tools/sdk/typescript/gov_certification/models/review-decision
tags: ['SDK', 'Software Development Kit', 'ReviewDecision', 'v1ReviewDecision']
---

# ReviewDecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The id of the Certification Item being decided on | [default to undefined]
**decision** | `CertificationDecision` |  | [default to undefined]
**proposedEndDate** | **(optional)** `string` | The date at which a user\'s access should be taken away. Should only be set for `REVOKE` decisions. | [default to undefined]
**recommendation** | **(optional)** `ReviewRecommendation` |  | [default to undefined]
**comments** | **(optional)** `string` | Comments recorded when the decision was made | [default to undefined]

