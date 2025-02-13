# CampaignTemplateBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Id of the campaign template | [optional] [default to undefined]
**name** | **string** | This template\&#39;s name. Has no bearing on generated campaigns\&#39; names. | [default to undefined]
**description** | **string** | This template\&#39;s description. Has no bearing on generated campaigns\&#39; descriptions. | [default to undefined]
**created** | **string** | Creation date of Campaign Template | [readonly] [default to undefined]
**modified** | **string** | Modification date of Campaign Template | [readonly] [default to undefined]
**scheduled** | **boolean** | Indicates if this campaign template has been scheduled. | [optional] [readonly] [default to false]
**ownerRef** | [**CampaignTemplateOwnerRefBeta**](CampaignTemplateOwnerRefBeta.md) |  | [optional] [default to undefined]
**deadlineDuration** | **string** | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign\&#39;s deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was \&quot;P2W\&quot; (two weeks), the resulting campaign\&#39;s deadline would be 2020-01-15 (the current date plus 14 days). | [optional] [default to undefined]
**campaign** | [**CampaignBeta**](CampaignBeta.md) |  | [default to undefined]

