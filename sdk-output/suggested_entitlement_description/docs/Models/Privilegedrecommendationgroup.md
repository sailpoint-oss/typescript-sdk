---
id: v1-privilegedrecommendationgroup
title: Privilegedrecommendationgroup
pagination_label: Privilegedrecommendationgroup
sidebar_label: Privilegedrecommendationgroup
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Privilegedrecommendationgroup', 'v1Privilegedrecommendationgroup']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/privilegedrecommendationgroup
tags: ['SDK', 'Software Development Kit', 'Privilegedrecommendationgroup', 'v1Privilegedrecommendationgroup']
---

# Privilegedrecommendationgroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlementName** | **(optional)** `string` | The name of the entitlement shared across all instances in this group. | [default to undefined]
**connectorType** | **(optional)** `string` | The connector type associated with all instances in this group. | [default to undefined]
**recommendationScore** | **(optional)** `string` | A decimal string representing the confidence score of the privilege recommendation (0.0-1.0). | [default to undefined]
**orgCount** | **(optional)** `number` | The number of organizations in which this entitlement appears as privileged. | [default to undefined]
**instanceCount** | **(optional)** `number` | The total number of individual entitlement instances in this group. | [default to undefined]
**instances** | **(optional)** `Array<Privilegedrecommendationinstance>` | The individual entitlement instances belonging to this group. | [default to undefined]

