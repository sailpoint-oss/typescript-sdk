---
id: v1-certificationdto
title: Certificationdto
pagination_label: Certificationdto
sidebar_label: Certificationdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Certificationdto', 'v1Certificationdto']
slug: /tools/sdk/typescript/triggers/models/certificationdto
tags: ['SDK', 'Software Development Kit', 'Certificationdto', 'v1Certificationdto']
---

# Certificationdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignRef** | `Campaignreference` |  | [default to undefined]
**phase** | `Certificationphase` |  | [default to undefined]
**due** | `string` | The due date of the certification. | [default to undefined]
**signed** | `string` | The date the reviewer signed off on the certification. | [default to undefined]
**reviewer** | `Reviewer` |  | [default to undefined]
**reassignment** | **(optional)** `Reassignment` |  | [default to undefined]
**hasErrors** | `boolean` | Indicates it the certification has any errors. | [default to undefined]
**errorMessage** | **(optional)** `string` | A message indicating what the error is. | [default to undefined]
**completed** | `boolean` | Indicates if all certification decisions have been made. | [default to undefined]
**decisionsMade** | `number` | The number of approve/revoke/acknowledge decisions that have been made by the reviewer. | [default to undefined]
**decisionsTotal** | `number` | The total number of approve/revoke/acknowledge decisions for the certification. | [default to undefined]
**entitiesCompleted** | `number` | The number of entities (identities, access profiles, roles, etc.) for which all decisions have been made and are complete. | [default to undefined]
**entitiesTotal** | `number` | The total number of entities (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | [default to undefined]

