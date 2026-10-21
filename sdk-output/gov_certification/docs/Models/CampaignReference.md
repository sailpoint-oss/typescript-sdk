---
id: v1-campaign-reference
title: CampaignReference
pagination_label: CampaignReference
sidebar_label: CampaignReference
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CampaignReference', 'v1CampaignReference']
slug: /tools/sdk/typescript/gov_certification/models/campaign-reference
tags: ['SDK', 'Software Development Kit', 'CampaignReference', 'v1CampaignReference']
---

# CampaignReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique ID of the campaign. | [default to undefined]
**name** | `string` | The name of the campaign. | [default to undefined]
**description** | **(optional)** `string` | The description of the campaign set by the admin who created it. | [default to undefined]
**type** | **(optional)** `CampaignType` |  | [default to undefined]
**mandatoryCommentRequirement** | **(optional)** `MandatoryCommentType` |  | [default to undefined]
**recommendationsEnabled** | **(optional)** `boolean` | Indicates if the campaign related recommendations enabled. | [default to false]
**reviewer** | **(optional)** `CampaignReferenceReviewer` |  | [default to undefined]
**generationType** | **(optional)** `CampaignGenerationType` |  | [default to undefined]

