---
id: v1-bulk-add-tagged-object
title: BulkAddTaggedObject
pagination_label: BulkAddTaggedObject
sidebar_label: BulkAddTaggedObject
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'BulkAddTaggedObject', 'v1BulkAddTaggedObject']
slug: /tools/sdk/typescript/tagged_objects/models/bulk-add-tagged-object
tags: ['SDK', 'Software Development Kit', 'BulkAddTaggedObject', 'v1BulkAddTaggedObject']
---

# BulkAddTaggedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectRefs** | **(optional)** `Array<TaggedObjectDto>` |  | [default to undefined]
**tags** | **(optional)** `Array<string>` | Label to be applied to an Object | [default to undefined]
**operation** | **(optional)** `string` | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [default to OperationEnum_Append]

