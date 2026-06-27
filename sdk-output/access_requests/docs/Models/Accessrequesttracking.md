---
id: v1-accessrequesttracking
title: Accessrequesttracking
pagination_label: Accessrequesttracking
sidebar_label: Accessrequesttracking
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accessrequesttracking', 'v1Accessrequesttracking']
slug: /tools/sdk/typescript/access_requests/models/accessrequesttracking
tags: ['SDK', 'Software Development Kit', 'Accessrequesttracking', 'v1Accessrequesttracking']
---

# Accessrequesttracking

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFor** | **(optional)** `string` | The identity id in which the access request is for. | [default to undefined]
**requestedItemsDetails** | **(optional)** `Array<Requesteditemdetails>` | The details of the item requested. | [default to undefined]
**attributesHash** | **(optional)** `number` | a hash representation of the access requested, useful for longer term tracking client side. | [default to undefined]
**accessRequestIds** | **(optional)** `Array<string>` | a list of access request identifiers, generally only one will be populated, but high volume requested may result in multiple ids. | [default to undefined]

