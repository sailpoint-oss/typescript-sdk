---
id: v1-identity-account-selections
title: IdentityAccountSelections
pagination_label: IdentityAccountSelections
sidebar_label: IdentityAccountSelections
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'IdentityAccountSelections', 'v1IdentityAccountSelections']
slug: /tools/sdk/typescript/access_requests/models/identity-account-selections
tags: ['SDK', 'Software Development Kit', 'IdentityAccountSelections', 'v1IdentityAccountSelections']
---

# IdentityAccountSelections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedItems** | **(optional)** `Array<RequestedItemAccountSelections>` | Available account selections for the identity, per requested item | [default to undefined]
**accountsSelectionRequired** | **(optional)** `boolean` | A boolean indicating whether any account selections will be required for the user to raise an access request | [default to false]
**type** | **(optional)** `DtoType` |  | [default to undefined]
**id** | **(optional)** `string` | The identity id for the user | [default to undefined]
**name** | **(optional)** `string` | The name of the identity | [default to undefined]

