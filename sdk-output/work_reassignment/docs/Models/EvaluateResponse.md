---
id: v1-evaluate-response
title: EvaluateResponse
pagination_label: EvaluateResponse
sidebar_label: EvaluateResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'EvaluateResponse', 'v1EvaluateResponse']
slug: /tools/sdk/typescript/work_reassignment/models/evaluate-response
tags: ['SDK', 'Software Development Kit', 'EvaluateResponse', 'v1EvaluateResponse']
---

# EvaluateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassignToId** | **(optional)** `string` | The Identity ID which should be the recipient of any work items sent to a specific identity & work type | [default to undefined]
**lookupTrail** | **(optional)** `Array<LookupStep>` | List of Reassignments found by looking up the next `TargetIdentity` in a ReassignmentConfiguration | [default to undefined]

