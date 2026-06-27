---
id: v1-approverdto
title: Approverdto
pagination_label: Approverdto
sidebar_label: Approverdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Approverdto', 'v1Approverdto']
slug: /tools/sdk/typescript/account_deletion_requests/models/approverdto
tags: ['SDK', 'Software Development Kit', 'Approverdto', 'v1Approverdto']
---

# Approverdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityID** | **(optional)** `string` | Identity ID and it cannot be null. | [default to undefined]
**id** | **(optional)** `string` | Optional id | [default to undefined]
**name** | **(optional)** `string` | Identity display name | [default to undefined]
**email** | **(optional)** `string` | Email address of identity | [default to undefined]
**type** | **(optional)** `string` | Used to mention type of data transfer object in this case it is used to transfer IDENTITY data. | [default to undefined]
**ownerOf** | **(optional)** `Array<Approverreference>` | List of reference of identity type dto for account owner identities | [default to undefined]
**actionedAs** | **(optional)** `Array<Approverreference>` | List of reference of identity type dto who acted on behalf of other identities. | [default to undefined]
**members** | **(optional)** `Array<Approverreference>` | List of reference of identity type dto for member identities. | [default to undefined]

