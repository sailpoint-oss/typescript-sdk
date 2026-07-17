---
id: v1-configuration-details-response
title: ConfigurationDetailsResponse
pagination_label: ConfigurationDetailsResponse
sidebar_label: ConfigurationDetailsResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ConfigurationDetailsResponse', 'v1ConfigurationDetailsResponse']
slug: /tools/sdk/typescript/work_reassignment/models/configuration-details-response
tags: ['SDK', 'Software Development Kit', 'ConfigurationDetailsResponse', 'v1ConfigurationDetailsResponse']
---

# ConfigurationDetailsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configType** | **(optional)** `ConfigTypeEnum` |  | [default to undefined]
**targetIdentity** | **(optional)** `Identity2` |  | [default to undefined]
**startDate** | **(optional)** `string` | The date from which to start reassigning work items | [default to undefined]
**endDate** | **(optional)** `string` | The date from which to stop reassigning work items.  If this is an empty string it indicates a permanent reassignment. | [default to undefined]
**auditDetails** | **(optional)** `AuditDetails` |  | [default to undefined]

