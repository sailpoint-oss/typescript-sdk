---
id: v1-basecreateapplicationrequest
title: Basecreateapplicationrequest
pagination_label: Basecreateapplicationrequest
sidebar_label: Basecreateapplicationrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Basecreateapplicationrequest', 'v1Basecreateapplicationrequest']
slug: /tools/sdk/typescript/data_access_security/models/basecreateapplicationrequest
tags: ['SDK', 'Software Development Kit', 'Basecreateapplicationrequest', 'v1Basecreateapplicationrequest']
---

# Basecreateapplicationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationType** | `Applicationtype` |  | [default to undefined]
**name** | `string` | The display name of the application. | [default to undefined]
**description** | **(optional)** `string` | A brief description of the application and its purpose. | [default to undefined]
**tags** | **(optional)** `Array<Int64stringkeyvaluepair>` | A list of tags to categorize or identify the application. | [default to undefined]
**identityCollectorId** | **(optional)** `number` | The unique identifier for the identity collector associated with this application. | [default to undefined]
**adIdentityCollectorId** | **(optional)** `number` | The unique identifier for the AD identity collector. | [default to undefined]
**nisIdentityCollectorId** | **(optional)** `number` | The unique identifier for the NIS identity collector. | [default to undefined]
**applicationCrawlerSettings** | **(optional)** `Applicationcrawlersettings` |  | [default to undefined]
**permissionCollectorSettings** | **(optional)** `Permissioncollectorsettings` |  | [default to undefined]
**dataClassificationSettings** | **(optional)** `Dataclassificationsettings` |  | [default to undefined]
**activityConfigurationSettings** | **(optional)** `Activityconfigurationsettings` |  | [default to undefined]
**executeNow** | **(optional)** `boolean` | If true, the application setup will be executed immediately after creation. | [default to false]

