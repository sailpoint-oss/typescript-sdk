# RecommendationConfigDtoBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommenderFeatures** | **Array&lt;string&gt;** | List of identity attributes to use for calculating certification recommendations | [optional] [default to undefined]
**peerGroupPercentageThreshold** | **number** | The percent value that the recommendation calculation must surpass to produce a YES recommendation | [optional] [default to undefined]
**runAutoSelectOnce** | **boolean** | If true, rulesRecommenderConfig will be refreshed with new programatically selected attribute and threshold values on the next pipeline run | [optional] [default to false]
**onlyTuneThreshold** | **boolean** | If true, rulesRecommenderConfig will be refreshed with new programatically selected threshold values on the next pipeline run | [optional] [default to false]

