---
id: v1-access-request-phases
title: AccessRequestPhases
pagination_label: AccessRequestPhases
sidebar_label: AccessRequestPhases
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessRequestPhases', 'v1AccessRequestPhases']
slug: /tools/sdk/typescript/access_requests/models/access-request-phases
tags: ['SDK', 'Software Development Kit', 'AccessRequestPhases', 'v1AccessRequestPhases']
---

# AccessRequestPhases

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**started** | **(optional)** `string` | The time that this phase started. | [default to undefined]
**finished** | **(optional)** `string` | The time that this phase finished. | [default to undefined]
**name** | **(optional)** `string` | The name of this phase. | [default to undefined]
**state** | **(optional)** `string` | The state of this phase. | [default to undefined]
**result** | **(optional)** `string` | The state of this phase. | [default to undefined]
**phaseReference** | **(optional)** `string` | A reference to another object on the RequestedItemStatus that contains more details about the phase. Note that for the Provisioning phase, this will be empty if there are no manual work items. | [default to undefined]

