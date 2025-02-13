# RecommendationResponseBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | [**RecommendationRequestBeta**](RecommendationRequestBeta.md) |  | [optional] [default to undefined]
**recommendation** | **string** | The recommendation - YES if the access is recommended, NO if not recommended, MAYBE if there is not enough information to make a recommendation, NOT_FOUND if the identity is not found in the system | [optional] [default to undefined]
**interpretations** | **Array&lt;string&gt;** | The list of interpretations explaining the recommendation. The array is empty if includeInterpretations is false or not present in the request. e.g. - [ \&quot;Not approved in the last 6 months.\&quot; ]. Interpretations will be translated using the client\&#39;s locale as found in the Accept-Language header. If a translation for the client\&#39;s locale cannot be found, the US English translation will be returned. | [optional] [default to undefined]
**translationMessages** | [**Array&lt;TranslationMessageBeta&gt;**](TranslationMessageBeta.md) | The list of translation messages, if they have been requested. | [optional] [default to undefined]
**recommenderCalculations** | [**RecommenderCalculationsBeta**](RecommenderCalculationsBeta.md) |  | [optional] [default to undefined]



## Enum: RecommendationResponseBetaRecommendationBeta


* `True` (value: `'true'`)

* `False` (value: `'false'`)

* `Maybe` (value: `'MAYBE'`)

* `NotFound` (value: `'NOT_FOUND'`)



