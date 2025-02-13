# FullcampaignAllOfSearchCampaignInfoBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of search campaign represented. | [default to undefined]
**description** | **string** | Describes this search campaign. Intended for storing the query used, and possibly the number of identities selected/available. | [optional] [default to undefined]
**reviewer** | [**FullcampaignAllOfSearchCampaignInfoReviewerBeta**](FullcampaignAllOfSearchCampaignInfoReviewerBeta.md) |  | [optional] [default to undefined]
**query** | **string** | The scope for the campaign. The campaign will cover identities returned by the query and identities that have access items returned by the query. One of &#x60;query&#x60; or &#x60;identityIds&#x60; must be set. | [optional] [default to undefined]
**identityIds** | **Array&lt;string&gt;** | A direct list of identities to include in this campaign. One of &#x60;identityIds&#x60; or &#x60;query&#x60; must be set. | [optional] [default to undefined]
**accessConstraints** | [**Array&lt;AccessConstraintBeta&gt;**](AccessConstraintBeta.md) | Further reduces the scope of the campaign by excluding identities (from &#x60;query&#x60; or &#x60;identityIds&#x60;) that do not have this access. | [optional] [default to undefined]



## Enum: FullcampaignAllOfSearchCampaignInfoBetaTypeBeta


* `Identity` (value: `'IDENTITY'`)

* `Access` (value: `'ACCESS'`)



