---
id: v1-get-role-assignments-v1200-response-inner
title: GetRoleAssignmentsV1200ResponseInner
pagination_label: GetRoleAssignmentsV1200ResponseInner
sidebar_label: GetRoleAssignmentsV1200ResponseInner
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'GetRoleAssignmentsV1200ResponseInner', 'v1GetRoleAssignmentsV1200ResponseInner']
slug: /tools/sdk/typescript/identities/models/get-role-assignments-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetRoleAssignmentsV1200ResponseInner', 'v1GetRoleAssignmentsV1200ResponseInner']
---

# GetRoleAssignmentsV1200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Assignment Id | [default to undefined]
**role** | **(optional)** `BaseReferenceDto` |  | [default to undefined]
**addedDate** | **(optional)** `string` | Date that the assignment was added | [default to undefined]
**startDate** | **(optional)** `string` | Date when assignment will be active, if access was requested with a future start date. If null, assignment is active immediately | [default to undefined]
**removeDate** | **(optional)** `string` | Date that the assignment will be removed | [default to undefined]
**comments** | **(optional)** `string` | Comments added by the user when the assignment was made | [default to undefined]
**assignmentSource** | **(optional)** `string` | Source describing how this assignment was made | [default to undefined]
**assigner** | **(optional)** `RoleAssignmentDtoAssigner` |  | [default to undefined]
**assignedDimensions** | **(optional)** `Array<BaseReferenceDto>` | Dimensions assigned related to this role | [default to undefined]
**assignmentContext** | **(optional)** `RoleAssignmentDtoAssignmentContext` |  | [default to undefined]
**accountTargets** | **(optional)** `Array<RoleTargetDto>` |  | [default to undefined]

