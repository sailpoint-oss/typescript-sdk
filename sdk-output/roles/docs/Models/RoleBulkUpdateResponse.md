---
id: v1-role-bulk-update-response
title: RoleBulkUpdateResponse
pagination_label: RoleBulkUpdateResponse
sidebar_label: RoleBulkUpdateResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleBulkUpdateResponse', 'v1RoleBulkUpdateResponse']
slug: /tools/sdk/typescript/roles/models/role-bulk-update-response
tags: ['SDK', 'Software Development Kit', 'RoleBulkUpdateResponse', 'v1RoleBulkUpdateResponse']
---

# RoleBulkUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the task which is executing the bulk update. This also used in to the bulk-update/_** API to track status. | [default to undefined]
**type** | **(optional)** `string` | Type of the bulk update object. | [default to undefined]
**status** | **(optional)** `string` | The status of the bulk update request, could also checked by getBulkUpdateStatus API | [default to undefined]
**created** | **(optional)** `string` | Time when the bulk update request was created | [default to undefined]

