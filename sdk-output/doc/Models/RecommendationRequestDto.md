# RecommendationRequestDtoBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**Array&lt;RecommendationRequestBeta&gt;**](RecommendationRequestBeta.md) |  | [optional] [default to undefined]
**excludeInterpretations** | **boolean** | Exclude interpretations in the response if \&quot;true\&quot;. Return interpretations in the response if this attribute is not specified. | [optional] [default to false]
**includeTranslationMessages** | **boolean** | When set to true, the calling system uses the translated messages for the specified language | [optional] [default to false]
**includeDebugInformation** | **boolean** | Returns the recommender calculations if set to true | [optional] [default to false]
**prescribeMode** | **boolean** | When set to true, uses prescribedRulesRecommenderConfig to get identity attributes and peer group threshold instead of standard config. | [optional] [default to false]

