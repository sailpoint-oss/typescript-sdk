---
id: v1-configurationitemrequest
title: Configurationitemrequest
pagination_label: Configurationitemrequest
sidebar_label: Configurationitemrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Configurationitemrequest', 'v1Configurationitemrequest']
slug: /tools/sdk/typescript/work_reassignment/models/configurationitemrequest
tags: ['SDK', 'Software Development Kit', 'Configurationitemrequest', 'v1Configurationitemrequest']
---

# Configurationitemrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassignedFromId** | **(optional)** `string` | The identity id to reassign an item from | [default to undefined]
**reassignedToId** | **(optional)** `string` | The identity id to reassign an item to | [default to undefined]
**configType** | **(optional)** `Configtypeenum` |  | [default to undefined]
**startDate** | **(optional)** `string` | The date from which to start reassigning work items | [default to undefined]
**endDate** | **(optional)** `string` | The date from which to stop reassigning work items.  If this is an null string it indicates a permanent reassignment. | [default to undefined]

