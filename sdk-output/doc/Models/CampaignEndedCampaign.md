# CampaignEndedCampaignBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique ID for the campaign. | [default to undefined]
**name** | **string** | The human friendly name of the campaign. | [default to undefined]
**description** | **string** | Extended description of the campaign. | [default to undefined]
**created** | **string** | The date and time the campaign was created. | [default to undefined]
**modified** | **string** | The date and time the campaign was last modified. | [optional] [default to undefined]
**deadline** | **string** | The date and time the campaign is due. | [default to undefined]
**type** | **object** | The type of campaign. | [default to undefined]
**campaignOwner** | [**CampaignActivatedCampaignCampaignOwnerBeta**](CampaignActivatedCampaignCampaignOwnerBeta.md) |  | [default to undefined]
**status** | **object** | The current status of the campaign. | [default to undefined]



## Enum: CampaignEndedCampaignBetaTypeBeta


* `Manager` (value: `'MANAGER'`)

* `SourceOwner` (value: `'SOURCE_OWNER'`)

* `Search` (value: `'SEARCH'`)

* `RoleComposition` (value: `'ROLE_COMPOSITION'`)





## Enum: CampaignEndedCampaignBetaStatusBeta


* `Completed` (value: `'COMPLETED'`)



