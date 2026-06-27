---
id: v1-requestableobject
title: Requestableobject
pagination_label: Requestableobject
sidebar_label: Requestableobject
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Requestableobject', 'v1Requestableobject']
slug: /tools/sdk/typescript/requestable_objects/models/requestableobject
tags: ['SDK', 'Software Development Kit', 'Requestableobject', 'v1Requestableobject']
---

# Requestableobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the requestable object itself | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of the requestable object | [default to undefined]
**created** | **(optional)** `string` | The time when the requestable object was created | [default to undefined]
**modified** | **(optional)** `string` | The time when the requestable object was last modified | [default to undefined]
**description** | **(optional)** `string` | Description of the requestable object. | [default to undefined]
**type** | **(optional)** `Requestableobjecttype` |  | [default to undefined]
**requestStatus** | **(optional)** `Requestableobjectrequeststatus` |  | [default to undefined]
**identityRequestId** | **(optional)** `string` | If *requestStatus* is *PENDING*, indicates the id of the associated account activity. | [default to undefined]
**ownerRef** | **(optional)** `Identityreferencewithnameandemail` |  | [default to undefined]
**requestCommentsRequired** | **(optional)** `boolean` | Whether the requester must provide comments when requesting the object. | [default to undefined]

