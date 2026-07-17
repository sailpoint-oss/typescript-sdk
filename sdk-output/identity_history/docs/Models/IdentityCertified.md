---
id: v1-identity-certified
title: IdentityCertified
pagination_label: IdentityCertified
sidebar_label: IdentityCertified
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'IdentityCertified', 'v1IdentityCertified']
slug: /tools/sdk/typescript/identity_history/models/identity-certified
tags: ['SDK', 'Software Development Kit', 'IdentityCertified', 'v1IdentityCertified']
---

# IdentityCertified

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificationId** | `string` | the id of the certification item | [default to undefined]
**certificationName** | `string` | the certification item name | [default to undefined]
**signedDate** | **(optional)** `string` | the date ceritification was signed | [default to undefined]
**certifiers** | **(optional)** `Array<CertifierResponse>` | this field is deprecated and may go away | [default to undefined]
**reviewers** | **(optional)** `Array<CertifierResponse>` | The list of identities who review this certification | [default to undefined]
**signer** | **(optional)** `CertifierResponse` |  | [default to undefined]
**eventType** | **(optional)** `string` | the event type | [default to undefined]
**dateTime** | **(optional)** `string` | the date of event | [default to undefined]

