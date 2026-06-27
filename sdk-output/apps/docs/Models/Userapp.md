---
id: v1-userapp
title: Userapp
pagination_label: Userapp
sidebar_label: Userapp
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Userapp', 'v1Userapp']
slug: /tools/sdk/typescript/apps/models/userapp
tags: ['SDK', 'Software Development Kit', 'Userapp', 'v1Userapp']
---

# Userapp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The user app id | [default to undefined]
**created** | **(optional)** `string` | Time when the user app was created | [default to undefined]
**modified** | **(optional)** `string` | Time when the user app was last modified | [default to undefined]
**hasMultipleAccounts** | **(optional)** `boolean` | True if the owner has multiple accounts for the source | [default to false]
**useForPasswordManagement** | **(optional)** `boolean` | True if the source has password feature | [default to false]
**provisionRequestEnabled** | **(optional)** `boolean` | True if the app allows access request | [default to false]
**appCenterEnabled** | **(optional)** `boolean` | True if the app is visible in the request center | [default to true]
**sourceApp** | **(optional)** `UserappSourceApp` |  | [default to undefined]
**source** | **(optional)** `UserappSource` |  | [default to undefined]
**account** | **(optional)** `UserappAccount` |  | [default to undefined]
**owner** | **(optional)** `UserappOwner` |  | [default to undefined]

