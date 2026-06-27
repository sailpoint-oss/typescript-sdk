---
id: v1-bulkaddtaggedobject
title: Bulkaddtaggedobject
pagination_label: Bulkaddtaggedobject
sidebar_label: Bulkaddtaggedobject
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Bulkaddtaggedobject', 'v1Bulkaddtaggedobject']
slug: /tools/sdk/typescript/tagged_objects/models/bulkaddtaggedobject
tags: ['SDK', 'Software Development Kit', 'Bulkaddtaggedobject', 'v1Bulkaddtaggedobject']
---

# Bulkaddtaggedobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectRefs** | **(optional)** `Array<Taggedobjectdto>` |  | [default to undefined]
**tags** | **(optional)** `Array<string>` | Label to be applied to an Object | [default to undefined]
**operation** | **(optional)** `string` | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [default to OperationEnum_Append]

