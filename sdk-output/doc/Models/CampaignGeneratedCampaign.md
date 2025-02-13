# CampaignGeneratedCampaignBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique ID of the campaign. | [default to undefined]
**name** | **string** | Human friendly name of the campaign. | [default to undefined]
**description** | **string** | Extended description of the campaign. | [default to undefined]
**created** | **string** | The date and time the campaign was created. | [default to undefined]
**modified** | **string** | The date and time the campaign was last modified. | [optional] [default to undefined]
**deadline** | **string** | The date and time when the campaign must be finished by. | [optional] [default to undefined]
**type** | **object** | The type of campaign that was generated. | [default to undefined]
**campaignOwner** | [**CampaignGeneratedCampaignCampaignOwnerBeta**](CampaignGeneratedCampaignCampaignOwnerBeta.md) |  | [default to undefined]
**status** | **object** | The current status of the campaign. | [default to undefined]



## Enum: CampaignGeneratedCampaignBetaTypeBeta


* `Manager` (value: `'MANAGER'`)

* `SourceOwner` (value: `'SOURCE_OWNER'`)

* `Search` (value: `'SEARCH'`)

* `RoleComposition` (value: `'ROLE_COMPOSITION'`)





## Enum: CampaignGeneratedCampaignBetaStatusBeta


* `Staged` (value: `'STAGED'`)

* `Activating` (value: `'ACTIVATING'`)

* `Active` (value: `'ACTIVE'`)



