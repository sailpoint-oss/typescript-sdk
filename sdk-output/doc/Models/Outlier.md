# OutlierBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identity\&#39;s unique identifier for the outlier record | [optional] [default to undefined]
**identityId** | **string** | The ID of the identity that is detected as an outlier | [optional] [default to undefined]
**type** | **string** | The type of outlier summary | [optional] [default to undefined]
**firstDetectionDate** | **string** | The first date the outlier was detected | [optional] [default to undefined]
**latestDetectionDate** | **string** | The most recent date the outlier was detected | [optional] [default to undefined]
**ignored** | **boolean** | Flag whether or not the outlier has been ignored | [optional] [default to undefined]
**attributes** | **object** | Object containing mapped identity attributes | [optional] [default to undefined]
**score** | **number** | The outlier score determined by the detection engine ranging from 0..1 | [optional] [default to undefined]
**unignoreType** | **string** | Enum value of if the outlier manually or automatically un-ignored. Will be NULL if outlier is not ignored | [optional] [default to undefined]
**unignoreDate** | **string** | shows date when last time has been unignored outlier | [optional] [default to undefined]
**ignoreDate** | **string** | shows date when last time has been ignored outlier | [optional] [default to undefined]



## Enum: OutlierBetaTypeBeta


* `LowSimilarity` (value: `'LOW_SIMILARITY'`)

* `Structural` (value: `'STRUCTURAL'`)





## Enum: OutlierBetaUnignoreTypeBeta


* `Manual` (value: `'MANUAL'`)

* `Automatic` (value: `'AUTOMATIC'`)



