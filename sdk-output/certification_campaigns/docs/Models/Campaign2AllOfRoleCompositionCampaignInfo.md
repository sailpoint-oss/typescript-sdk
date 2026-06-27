---
id: v1-campaign2-all-of-role-composition-campaign-info
title: Campaign2AllOfRoleCompositionCampaignInfo
pagination_label: Campaign2AllOfRoleCompositionCampaignInfo
sidebar_label: Campaign2AllOfRoleCompositionCampaignInfo
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Campaign2AllOfRoleCompositionCampaignInfo', 'v1Campaign2AllOfRoleCompositionCampaignInfo']
slug: /tools/sdk/typescript/certification_campaigns/models/campaign2-all-of-role-composition-campaign-info
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfRoleCompositionCampaignInfo', 'v1Campaign2AllOfRoleCompositionCampaignInfo']
---

# Campaign2AllOfRoleCompositionCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewerId** | **(optional)** `string` | The ID of the identity or governance group reviewing this campaign. Deprecated in favor of the \"reviewer\" object. | [default to undefined]
**reviewer** | **(optional)** `Campaign2AllOfRoleCompositionCampaignInfoReviewer` |  | [default to undefined]
**roleIds** | **(optional)** `Array<string>` | Optional list of roles to include in this campaign. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [default to undefined]
**remediatorRef** | `Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef` |  | [default to undefined]
**query** | **(optional)** `string` | Optional search query to scope this campaign to a set of roles. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [default to undefined]
**description** | **(optional)** `string` | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [default to undefined]

