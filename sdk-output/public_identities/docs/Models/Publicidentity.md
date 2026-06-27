---
id: v1-publicidentity
title: Publicidentity
pagination_label: Publicidentity
sidebar_label: Publicidentity
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Publicidentity', 'v1Publicidentity']
slug: /tools/sdk/typescript/public_identities/models/publicidentity
tags: ['SDK', 'Software Development Kit', 'Publicidentity', 'v1Publicidentity']
---

# Publicidentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Identity id | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of identity. | [default to undefined]
**alias** | **(optional)** `string` | Alternate unique identifier for the identity. | [default to undefined]
**email** | **(optional)** `string` | Email address of identity. | [default to undefined]
**status** | **(optional)** `string` | The lifecycle status for the identity | [default to undefined]
**identityState** | **(optional)** `string` | The current state of the identity, which determines how Identity Security Cloud interacts with the identity. An identity that is Active will be included identity picklists in Request Center, identity processing, and more. Identities that are Inactive will be excluded from these features.  | [default to undefined]
**manager** | **(optional)** `Identityreference` |  | [default to undefined]
**attributes** | **(optional)** `Array<PublicidentityAttributesInner>` | The public identity attributes of the identity | [default to undefined]

