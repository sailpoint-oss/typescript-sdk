---
id: v1-launcher-request
title: LauncherRequest
pagination_label: LauncherRequest
sidebar_label: LauncherRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'LauncherRequest', 'v1LauncherRequest']
slug: /tools/sdk/typescript/launchers/models/launcher-request
tags: ['SDK', 'Software Development Kit', 'LauncherRequest', 'v1LauncherRequest']
---

# LauncherRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Name of the Launcher, limited to 255 characters | [default to undefined]
**description** | `string` | Description of the Launcher, limited to 2000 characters | [default to undefined]
**type** | `string` | Launcher type | [default to undefined]
**disabled** | `boolean` | State of the Launcher | [default to undefined]
**reference** | **(optional)** `LauncherRequestReference` |  | [default to undefined]
**config** | `string` | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | [default to undefined]

