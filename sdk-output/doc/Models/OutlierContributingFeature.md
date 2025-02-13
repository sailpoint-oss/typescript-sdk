# OutlierContributingFeatureBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Contributing feature id | [optional] [default to undefined]
**name** | **string** | The name of the feature | [optional] [default to undefined]
**valueType** | **string** | The data type of the value field | [optional] [default to undefined]
**value** | [**OutlierContributingFeatureValueBeta**](OutlierContributingFeatureValueBeta.md) |  | [optional] [default to undefined]
**importance** | **number** | The importance of the feature. This can also be a negative value | [optional] [default to undefined]
**displayName** | **string** | The (translated if header is passed) displayName for the feature | [optional] [default to undefined]
**description** | **string** | The (translated if header is passed) description for the feature | [optional] [default to undefined]
**translationMessages** | [**OutlierFeatureTranslationBeta**](OutlierFeatureTranslationBeta.md) |  | [optional] [default to undefined]



## Enum: OutlierContributingFeatureBetaValueTypeBeta


* `Integer` (value: `'INTEGER'`)

* `Float` (value: `'FLOAT'`)



