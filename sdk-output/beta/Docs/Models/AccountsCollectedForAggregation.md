# AccountsCollectedForAggregationBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**AccountsCollectedForAggregationSourceBeta**](AccountsCollectedForAggregationSourceBeta.md) |  | [default to undefined]
**status** | **object** | The overall status of the collection. | [default to undefined]
**started** | **string** | The date and time when the account collection started. | [default to undefined]
**completed** | **string** | The date and time when the account collection finished. | [default to undefined]
**errors** | **Array&lt;string&gt;** | A list of errors that occurred during the collection. | [default to undefined]
**warnings** | **Array&lt;string&gt;** | A list of warnings that occurred during the collection. | [default to undefined]
**stats** | [**AccountsCollectedForAggregationStatsBeta**](AccountsCollectedForAggregationStatsBeta.md) |  | [default to undefined]



## Enum: AccountsCollectedForAggregationBetaStatusBeta


* `Success` (value: `'Success'`)

* `Failed` (value: `'Failed'`)

* `Terminated` (value: `'Terminated'`)



