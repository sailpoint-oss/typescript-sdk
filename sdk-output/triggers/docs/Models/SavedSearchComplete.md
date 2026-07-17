---
id: v1-saved-search-complete
title: SavedSearchComplete
pagination_label: SavedSearchComplete
sidebar_label: SavedSearchComplete
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SavedSearchComplete', 'v1SavedSearchComplete']
slug: /tools/sdk/typescript/triggers/models/saved-search-complete
tags: ['SDK', 'Software Development Kit', 'SavedSearchComplete', 'v1SavedSearchComplete']
---

# SavedSearchComplete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileName** | `string` | A name for the report file. | [default to undefined]
**ownerEmail** | `string` | The email address of the identity that owns the saved search. | [default to undefined]
**ownerName** | `string` | The name of the identity that owns the saved search. | [default to undefined]
**query** | `string` | The search query that was used to generate the report. | [default to undefined]
**searchName** | `string` | The name of the saved search. | [default to undefined]
**searchResults** | `SavedSearchCompleteSearchResults` |  | [default to undefined]
**signedS3Url** | `string` | The Amazon S3 URL to download the report from. | [default to undefined]

