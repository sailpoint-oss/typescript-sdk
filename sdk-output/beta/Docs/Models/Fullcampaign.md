# FullcampaignBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Id of the campaign | [optional] [readonly] [default to undefined]
**name** | **string** | The campaign name. If this object is part of a template, special formatting applies; see the &#x60;/campaign-templates/{id}/generate&#x60; endpoint documentation for details.  | [default to undefined]
**description** | **string** | The campaign description. If this object is part of a template, special formatting applies; see the &#x60;/campaign-templates/{id}/generate&#x60; endpoint documentation for details.  | [default to undefined]
**deadline** | **string** | The campaign\&#39;s completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response. | [optional] [default to undefined]
**type** | **string** | The type of campaign. Could be extended in the future. | [default to undefined]
**emailNotificationEnabled** | **boolean** | Enables email notification for this campaign | [optional] [default to false]
**autoRevokeAllowed** | **boolean** | Allows auto revoke for this campaign | [optional] [default to false]
**recommendationsEnabled** | **boolean** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future.  | [optional] [default to false]
**status** | **string** | The campaign\&#39;s current status. | [optional] [readonly] [default to undefined]
**correlatedStatus** | **string** | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [optional] [default to undefined]
**created** | **string** | Created time of the campaign | [optional] [readonly] [default to undefined]
**totalCertifications** | **number** | The total number of certifications in this campaign. | [optional] [readonly] [default to undefined]
**completedCertifications** | **number** | The number of completed certifications in this campaign. | [optional] [readonly] [default to undefined]
**alerts** | [**Array&lt;CampaignAlertBeta&gt;**](CampaignAlertBeta.md) | A list of errors and warnings that have accumulated. | [optional] [readonly] [default to undefined]
**modified** | **string** | Modified time of the campaign | [optional] [readonly] [default to undefined]
**filter** | [**FullcampaignAllOfFilterBeta**](FullcampaignAllOfFilterBeta.md) |  | [optional] [default to undefined]
**sunsetCommentsRequired** | **boolean** | Determines if comments on sunset date changes are required. | [optional] [default to true]
**sourceOwnerCampaignInfo** | [**FullcampaignAllOfSourceOwnerCampaignInfoBeta**](FullcampaignAllOfSourceOwnerCampaignInfoBeta.md) |  | [optional] [default to undefined]
**searchCampaignInfo** | [**FullcampaignAllOfSearchCampaignInfoBeta**](FullcampaignAllOfSearchCampaignInfoBeta.md) |  | [optional] [default to undefined]
**roleCompositionCampaignInfo** | [**FullcampaignAllOfRoleCompositionCampaignInfoBeta**](FullcampaignAllOfRoleCompositionCampaignInfoBeta.md) |  | [optional] [default to undefined]
**machineAccountCampaignInfo** | [**FullcampaignAllOfMachineAccountCampaignInfoBeta**](FullcampaignAllOfMachineAccountCampaignInfoBeta.md) |  | [optional] [default to undefined]
**sourcesWithOrphanEntitlements** | [**Array&lt;FullcampaignAllOfSourcesWithOrphanEntitlementsBeta&gt;**](FullcampaignAllOfSourcesWithOrphanEntitlementsBeta.md) | A list of sources in the campaign that contain \\\&quot;orphan entitlements\\\&quot; (entitlements without a corresponding Managed Attribute). An empty list indicates the campaign has no orphan entitlements. Null indicates there may be unknown orphan entitlements in the campaign (the campaign was created before this feature was implemented). | [optional] [readonly] [default to undefined]
**mandatoryCommentRequirement** | **string** | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [optional] [default to undefined]



## Enum: FullcampaignBetaTypeBeta


* `Manager` (value: `'MANAGER'`)

* `SourceOwner` (value: `'SOURCE_OWNER'`)

* `Search` (value: `'SEARCH'`)

* `RoleComposition` (value: `'ROLE_COMPOSITION'`)

* `MachineAccount` (value: `'MACHINE_ACCOUNT'`)





## Enum: FullcampaignBetaStatusBeta


* `Pending` (value: `'PENDING'`)

* `Staged` (value: `'STAGED'`)

* `Canceling` (value: `'CANCELING'`)

* `Activating` (value: `'ACTIVATING'`)

* `Active` (value: `'ACTIVE'`)

* `Completing` (value: `'COMPLETING'`)

* `Completed` (value: `'COMPLETED'`)

* `Error` (value: `'ERROR'`)

* `Archived` (value: `'ARCHIVED'`)





## Enum: FullcampaignBetaCorrelatedStatusBeta


* `Correlated` (value: `'CORRELATED'`)

* `Uncorrelated` (value: `'UNCORRELATED'`)





## Enum: FullcampaignBetaMandatoryCommentRequirementBeta


* `AllDecisions` (value: `'ALL_DECISIONS'`)

* `RevokeOnlyDecisions` (value: `'REVOKE_ONLY_DECISIONS'`)

* `NoDecisions` (value: `'NO_DECISIONS'`)



