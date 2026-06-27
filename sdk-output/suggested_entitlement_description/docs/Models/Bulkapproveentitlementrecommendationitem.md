---
id: v1-bulkapproveentitlementrecommendationitem
title: Bulkapproveentitlementrecommendationitem
pagination_label: Bulkapproveentitlementrecommendationitem
sidebar_label: Bulkapproveentitlementrecommendationitem
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Bulkapproveentitlementrecommendationitem', 'v1Bulkapproveentitlementrecommendationitem']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/bulkapproveentitlementrecommendationitem
tags: ['SDK', 'Software Development Kit', 'Bulkapproveentitlementrecommendationitem', 'v1Bulkapproveentitlementrecommendationitem']
---

# Bulkapproveentitlementrecommendationitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique identifier of the recommendation record to approve. | [default to undefined]
**recordType** | **(optional)** `string` | The type of the recommendation. When omitted, the backend resolves the type by looking up the ID. | [default to undefined]
**description** | **(optional)** `string` | The approved description text. Required for SED-type items; ignored for privilege items. | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The approved privilege level. Required for privilege-type items; ignored for SED items. | [default to undefined]

