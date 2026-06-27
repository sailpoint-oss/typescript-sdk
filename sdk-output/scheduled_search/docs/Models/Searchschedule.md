---
id: v1-searchschedule
title: Searchschedule
pagination_label: Searchschedule
sidebar_label: Searchschedule
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Searchschedule', 'v1Searchschedule']
slug: /tools/sdk/typescript/scheduled_search/models/searchschedule
tags: ['SDK', 'Software Development Kit', 'Searchschedule', 'v1Searchschedule']
---

# Searchschedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**savedSearchId** | `string` | The ID of the saved search that will be executed. | [default to undefined]
**created** | **(optional)** `string` | The date the scheduled search was initially created. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | The last date the scheduled search was modified. | [readonly] [default to undefined]
**schedule** | `Schedule` |  | [default to undefined]
**recipients** | `Array<SearchscheduleRecipientsInner>` | A list of identities that should receive the scheduled search report via email. | [default to undefined]
**enabled** | **(optional)** `boolean` | Indicates if the scheduled search is enabled.  | [default to false]
**emailEmptyResults** | **(optional)** `boolean` | Indicates if email generation should occur when search returns no results.  | [default to false]
**displayQueryDetails** | **(optional)** `boolean` | Indicates if the generated email should include the query and search results preview (which could include PII).  | [default to false]

