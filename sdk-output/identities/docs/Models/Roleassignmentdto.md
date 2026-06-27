---
id: v1-roleassignmentdto
title: Roleassignmentdto
pagination_label: Roleassignmentdto
sidebar_label: Roleassignmentdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Roleassignmentdto', 'v1Roleassignmentdto']
slug: /tools/sdk/typescript/identities/models/roleassignmentdto
tags: ['SDK', 'Software Development Kit', 'Roleassignmentdto', 'v1Roleassignmentdto']
---

# Roleassignmentdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Assignment Id | [default to undefined]
**role** | **(optional)** `Basereferencedto` |  | [default to undefined]
**comments** | **(optional)** `string` | Comments added by the user when the assignment was made | [default to undefined]
**assignmentSource** | **(optional)** `string` | Source describing how this assignment was made | [default to undefined]
**assigner** | **(optional)** `RoleassignmentdtoAssigner` |  | [default to undefined]
**assignedDimensions** | **(optional)** `Array<Basereferencedto>` | Dimensions assigned related to this role | [default to undefined]
**assignmentContext** | **(optional)** `RoleassignmentdtoAssignmentContext` |  | [default to undefined]
**accountTargets** | **(optional)** `Array<Roletargetdto>` |  | [default to undefined]
**startDate** | **(optional)** `string` | Date when assignment will be active, if access was requested with a future start date. If null, assignment is active immediately | [default to undefined]
**removeDate** | **(optional)** `string` | Date that the assignment will be removed | [default to undefined]
**addedDate** | **(optional)** `string` | Date that the assignment was added | [default to undefined]

