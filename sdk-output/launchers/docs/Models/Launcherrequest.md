---
id: v1-launcherrequest
title: Launcherrequest
pagination_label: Launcherrequest
sidebar_label: Launcherrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Launcherrequest', 'v1Launcherrequest']
slug: /tools/sdk/typescript/launchers/models/launcherrequest
tags: ['SDK', 'Software Development Kit', 'Launcherrequest', 'v1Launcherrequest']
---

# Launcherrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Name of the Launcher, limited to 255 characters | [default to undefined]
**description** | `string` | Description of the Launcher, limited to 2000 characters | [default to undefined]
**type** | `string` | Launcher type | [default to undefined]
**disabled** | `boolean` | State of the Launcher | [default to undefined]
**reference** | **(optional)** `LauncherrequestReference` |  | [default to undefined]
**config** | `string` | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | [default to undefined]

