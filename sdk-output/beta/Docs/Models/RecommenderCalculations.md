# RecommenderCalculationsBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **string** | The ID of the identity | [optional] [default to undefined]
**entitlementId** | **string** | The entitlement ID | [optional] [default to undefined]
**recommendation** | **string** | The actual recommendation | [optional] [default to undefined]
**overallWeightedScore** | **number** | The overall weighted score | [optional] [default to undefined]
**featureWeightedScores** | **{ [key: string]: number; }** | The weighted score of each individual feature | [optional] [default to undefined]
**threshold** | **number** | The configured value against which the overallWeightedScore is compared | [optional] [default to undefined]
**identityAttributes** | [**{ [key: string]: RecommenderCalculationsIdentityAttributesValueBeta; }**](RecommenderCalculationsIdentityAttributesValueBeta.md) | The values for your configured features | [optional] [default to undefined]
**featureValues** | [**FeatureValueDtoBeta**](FeatureValueDtoBeta.md) |  | [optional] [default to undefined]

