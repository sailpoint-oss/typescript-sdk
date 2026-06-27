---
id: v1-inviteidentitiesrequest
title: Inviteidentitiesrequest
pagination_label: Inviteidentitiesrequest
sidebar_label: Inviteidentitiesrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Inviteidentitiesrequest', 'v1Inviteidentitiesrequest']
slug: /tools/sdk/typescript/identities/models/inviteidentitiesrequest
tags: ['SDK', 'Software Development Kit', 'Inviteidentitiesrequest', 'v1Inviteidentitiesrequest']
---

# Inviteidentitiesrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **(optional)** `Array<string>` | The list of Identities IDs to invite - required when \'uninvited\' is false | [default to undefined]
**uninvited** | **(optional)** `boolean` | indicator (optional) to invite all unregistered identities in the system within a limit 1000. This parameter makes sense only when \'ids\' is empty. | [default to false]

