---
id: v1-inner-hit
title: InnerHit
pagination_label: InnerHit
sidebar_label: InnerHit
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'InnerHit', 'v1InnerHit']
slug: /tools/sdk/typescript/search/models/inner-hit
tags: ['SDK', 'Software Development Kit', 'InnerHit', 'v1InnerHit']
---

# InnerHit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | `string` | The search query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [default to undefined]
**type** | `string` | The nested type to use in the inner hits query.  The nested type [Nested Type](https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html) refers to a document \"nested\" within another document. For example, an identity can have nested documents for access, accounts, and apps. | [default to undefined]

