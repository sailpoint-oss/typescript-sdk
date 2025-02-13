# FullcampaignAllOfRoleCompositionCampaignInfoBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewer** | [**FullcampaignAllOfSearchCampaignInfoReviewerBeta**](FullcampaignAllOfSearchCampaignInfoReviewerBeta.md) |  | [optional] [default to undefined]
**roleIds** | **Array&lt;string&gt;** | Optional list of roles to include in this campaign. Only one of &#x60;roleIds&#x60; and &#x60;query&#x60; may be set; if neither are set, all roles are included. | [optional] [default to undefined]
**remediatorRef** | [**FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRefBeta**](FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRefBeta.md) |  | [default to undefined]
**query** | **string** | Optional search query to scope this campaign to a set of roles. Only one of &#x60;roleIds&#x60; and &#x60;query&#x60; may be set; if neither are set, all roles are included. | [optional] [default to undefined]
**description** | **string** | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [optional] [default to undefined]

