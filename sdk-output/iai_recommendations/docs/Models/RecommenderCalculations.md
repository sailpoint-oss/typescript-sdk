---
id: v1-recommender-calculations
title: RecommenderCalculations
pagination_label: RecommenderCalculations
sidebar_label: RecommenderCalculations
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RecommenderCalculations', 'v1RecommenderCalculations']
slug: /tools/sdk/typescript/iai_recommendations/models/recommender-calculations
tags: ['SDK', 'Software Development Kit', 'RecommenderCalculations', 'v1RecommenderCalculations']
---

# RecommenderCalculations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **(optional)** `string` | The ID of the identity | [default to undefined]
**entitlementId** | **(optional)** `string` | The entitlement ID | [default to undefined]
**recommendation** | **(optional)** `string` | The actual recommendation | [default to undefined]
**overallWeightedScore** | **(optional)** `number` | The overall weighted score | [default to undefined]
**featureWeightedScores** | **(optional)**  | The weighted score of each individual feature | [default to undefined]
**threshold** | **(optional)** `number` | The configured value against which the overallWeightedScore is compared | [default to undefined]
**identityAttributes** | **(optional)**  | The values for your configured features | [default to undefined]
**featureValues** | **(optional)** `FeatureValueDto` |  | [default to undefined]

