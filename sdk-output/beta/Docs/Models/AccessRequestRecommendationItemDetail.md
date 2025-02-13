# AccessRequestRecommendationItemDetailBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **string** | Identity ID for the recommendation | [optional] [default to undefined]
**access** | [**AccessRequestRecommendationItemDetailAccessBeta**](AccessRequestRecommendationItemDetailAccessBeta.md) |  | [optional] [default to undefined]
**ignored** | **boolean** | Whether or not the identity has already chosen to ignore this recommendation. | [optional] [default to undefined]
**requested** | **boolean** | Whether or not the identity has already chosen to request this recommendation. | [optional] [default to undefined]
**viewed** | **boolean** | Whether or not the identity reportedly viewed this recommendation. | [optional] [default to undefined]
**messages** | [**Array&lt;AccessRecommendationMessageBeta&gt;**](AccessRecommendationMessageBeta.md) |  | [optional] [default to undefined]
**translationMessages** | [**Array&lt;TranslationMessageBeta&gt;**](TranslationMessageBeta.md) | The list of translation messages | [optional] [default to undefined]

