---
id: v1-accessrequestrecommendationconfigdto
title: Accessrequestrecommendationconfigdto
pagination_label: Accessrequestrecommendationconfigdto
sidebar_label: Accessrequestrecommendationconfigdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accessrequestrecommendationconfigdto', 'v1Accessrequestrecommendationconfigdto']
slug: /tools/sdk/typescript/iai_access_request_recommendations/models/accessrequestrecommendationconfigdto
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationconfigdto', 'v1Accessrequestrecommendationconfigdto']
---

# Accessrequestrecommendationconfigdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scoreThreshold** | `number` | The value that internal calculations need to exceed for recommendations to be made. | [default to undefined]
**startDateAttribute** | **(optional)** `string` | Use to map an attribute name for determining identities\' start date. | [default to undefined]
**restrictionAttribute** | **(optional)** `string` | Use to only give recommendations based on this attribute. | [default to undefined]
**moverAttribute** | **(optional)** `string` | Use to map an attribute name for determining whether identities are movers. | [default to undefined]
**joinerAttribute** | **(optional)** `string` | Use to map an attribute name for determining whether identities are joiners. | [default to undefined]
**useRestrictionAttribute** | **(optional)** `boolean` | Use only the attribute named in restrictionAttribute to make recommendations. | [default to false]

