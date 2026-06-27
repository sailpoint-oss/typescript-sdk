---
id: v1-accessprofilebulkdeleteresponse
title: Accessprofilebulkdeleteresponse
pagination_label: Accessprofilebulkdeleteresponse
sidebar_label: Accessprofilebulkdeleteresponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accessprofilebulkdeleteresponse', 'v1Accessprofilebulkdeleteresponse']
slug: /tools/sdk/typescript/access_profiles/models/accessprofilebulkdeleteresponse
tags: ['SDK', 'Software Development Kit', 'Accessprofilebulkdeleteresponse', 'v1Accessprofilebulkdeleteresponse']
---

# Accessprofilebulkdeleteresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **(optional)** `string` | ID of the task which is executing the bulk deletion. This can be passed to the **_/task-status** API to track status. | [default to undefined]
**pending** | **(optional)** `Array<string>` | List of IDs of Access Profiles which are pending deletion. | [default to undefined]
**inUse** | **(optional)** `Array<Accessprofileusage>` | List of usages of Access Profiles targeted for deletion. | [default to undefined]

