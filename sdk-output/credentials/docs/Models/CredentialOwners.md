---
id: v1-credential-owners
title: CredentialOwners
pagination_label: CredentialOwners
sidebar_label: CredentialOwners
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CredentialOwners', 'v1CredentialOwners']
slug: /tools/sdk/typescript/credentials/models/credential-owners
tags: ['SDK', 'Software Development Kit', 'CredentialOwners', 'v1CredentialOwners']
---

# CredentialOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **(optional)** `CredentialOwnersPrimary` |  | [default to undefined]
**secondary** | **(optional)** `Array<BaseReferenceDto>` | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [default to undefined]

