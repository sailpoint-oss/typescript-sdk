---
id: v1-invite-identities-request
title: InviteIdentitiesRequest
pagination_label: InviteIdentitiesRequest
sidebar_label: InviteIdentitiesRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'InviteIdentitiesRequest', 'v1InviteIdentitiesRequest']
slug: /tools/sdk/typescript/identities/models/invite-identities-request
tags: ['SDK', 'Software Development Kit', 'InviteIdentitiesRequest', 'v1InviteIdentitiesRequest']
---

# InviteIdentitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **(optional)** `Array<string>` | The list of Identities IDs to invite - required when \'uninvited\' is false | [default to undefined]
**uninvited** | **(optional)** `boolean` | indicator (optional) to invite all unregistered identities in the system within a limit 1000. This parameter makes sense only when \'ids\' is empty. | [default to false]

