---
id: v1-role-assignment-dto
title: RoleAssignmentDto
pagination_label: RoleAssignmentDto
sidebar_label: RoleAssignmentDto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleAssignmentDto', 'v1RoleAssignmentDto']
slug: /tools/sdk/typescript/identities/models/role-assignment-dto
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentDto', 'v1RoleAssignmentDto']
---

# RoleAssignmentDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Assignment Id | [default to undefined]
**role** | **(optional)** `BaseReferenceDto` |  | [default to undefined]
**comments** | **(optional)** `string` | Comments added by the user when the assignment was made | [default to undefined]
**assignmentSource** | **(optional)** `string` | Source describing how this assignment was made | [default to undefined]
**assigner** | **(optional)** `RoleAssignmentDtoAssigner` |  | [default to undefined]
**assignedDimensions** | **(optional)** `Array<BaseReferenceDto>` | Dimensions assigned related to this role | [default to undefined]
**assignmentContext** | **(optional)** `RoleAssignmentDtoAssignmentContext` |  | [default to undefined]
**accountTargets** | **(optional)** `Array<RoleTargetDto>` |  | [default to undefined]
**startDate** | **(optional)** `string` | Date when assignment will be active, if access was requested with a future start date. If null, assignment is active immediately | [default to undefined]
**removeDate** | **(optional)** `string` | Date that the assignment will be removed | [default to undefined]
**addedDate** | **(optional)** `string` | Date that the assignment was added | [default to undefined]

