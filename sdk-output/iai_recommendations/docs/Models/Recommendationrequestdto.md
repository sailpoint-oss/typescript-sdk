---
id: v1-recommendationrequestdto
title: Recommendationrequestdto
pagination_label: Recommendationrequestdto
sidebar_label: Recommendationrequestdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Recommendationrequestdto', 'v1Recommendationrequestdto']
slug: /tools/sdk/typescript/iai_recommendations/models/recommendationrequestdto
tags: ['SDK', 'Software Development Kit', 'Recommendationrequestdto', 'v1Recommendationrequestdto']
---

# Recommendationrequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | **(optional)** `Array<Recommendationrequest>` |  | [default to undefined]
**excludeInterpretations** | **(optional)** `boolean` | Exclude interpretations in the response if \"true\". Return interpretations in the response if this attribute is not specified. | [default to false]
**includeTranslationMessages** | **(optional)** `boolean` | When set to true, the calling system uses the translated messages for the specified language | [default to false]
**includeDebugInformation** | **(optional)** `boolean` | Returns the recommender calculations if set to true | [default to false]
**prescribeMode** | **(optional)** `boolean` | When set to true, uses prescribedRulesRecommenderConfig to get identity attributes and peer group threshold instead of standard config. | [default to false]

