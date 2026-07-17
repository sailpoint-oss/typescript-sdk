---
id: v1-role-insights-response
title: RoleInsightsResponse
pagination_label: RoleInsightsResponse
sidebar_label: RoleInsightsResponse
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleInsightsResponse', 'v1RoleInsightsResponse']
slug: /tools/sdk/typescript/role_insights/models/role-insights-response
tags: ['SDK', 'Software Development Kit', 'RoleInsightsResponse', 'v1RoleInsightsResponse']
---

# RoleInsightsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Request Id for a role insight generation request | [default to undefined]
**createdDate** | **(optional)** `string` | The date-time role insights request was created. | [default to undefined]
**lastGenerated** | **(optional)** `string` | The date-time role insights request was completed. | [default to undefined]
**numberOfUpdates** | **(optional)** `number` | Total number of updates for this request. Starts with 0 and will have correct number when request is COMPLETED. | [default to undefined]
**roleIds** | **(optional)** `Array<string>` | The role IDs that are in this request. | [default to undefined]
**status** | **(optional)** `string` | Request status | [default to undefined]

