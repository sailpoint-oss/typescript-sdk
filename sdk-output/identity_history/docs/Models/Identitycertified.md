---
id: v1-identitycertified
title: Identitycertified
pagination_label: Identitycertified
sidebar_label: Identitycertified
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Identitycertified', 'v1Identitycertified']
slug: /tools/sdk/typescript/identity_history/models/identitycertified
tags: ['SDK', 'Software Development Kit', 'Identitycertified', 'v1Identitycertified']
---

# Identitycertified

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificationId** | `string` | the id of the certification item | [default to undefined]
**certificationName** | `string` | the certification item name | [default to undefined]
**signedDate** | **(optional)** `string` | the date ceritification was signed | [default to undefined]
**certifiers** | **(optional)** `Array<Certifierresponse>` | this field is deprecated and may go away | [default to undefined]
**reviewers** | **(optional)** `Array<Certifierresponse>` | The list of identities who review this certification | [default to undefined]
**signer** | **(optional)** `Certifierresponse` |  | [default to undefined]
**eventType** | **(optional)** `string` | the event type | [default to undefined]
**dateTime** | **(optional)** `string` | the date of event | [default to undefined]

