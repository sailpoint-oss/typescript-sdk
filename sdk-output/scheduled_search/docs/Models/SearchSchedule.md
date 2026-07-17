---
id: v1-search-schedule
title: SearchSchedule
pagination_label: SearchSchedule
sidebar_label: SearchSchedule
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SearchSchedule', 'v1SearchSchedule']
slug: /tools/sdk/typescript/scheduled_search/models/search-schedule
tags: ['SDK', 'Software Development Kit', 'SearchSchedule', 'v1SearchSchedule']
---

# SearchSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**savedSearchId** | `string` | The ID of the saved search that will be executed. | [default to undefined]
**created** | **(optional)** `string` | The date the scheduled search was initially created. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | The last date the scheduled search was modified. | [readonly] [default to undefined]
**schedule** | `Schedule` |  | [default to undefined]
**recipients** | `Array<SearchScheduleRecipientsInner>` | A list of identities that should receive the scheduled search report via email. | [default to undefined]
**enabled** | **(optional)** `boolean` | Indicates if the scheduled search is enabled.  | [default to false]
**emailEmptyResults** | **(optional)** `boolean` | Indicates if email generation should occur when search returns no results.  | [default to false]
**displayQueryDetails** | **(optional)** `boolean` | Indicates if the generated email should include the query and search results preview (which could include PII).  | [default to false]

