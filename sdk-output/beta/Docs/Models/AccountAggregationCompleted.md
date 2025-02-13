# AccountAggregationCompletedBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**AccountAggregationCompletedSourceBeta**](AccountAggregationCompletedSourceBeta.md) |  | [default to undefined]
**status** | **object** | The overall status of the aggregation. | [default to undefined]
**started** | **string** | The date and time when the account aggregation started. | [default to undefined]
**completed** | **string** | The date and time when the account aggregation finished. | [default to undefined]
**errors** | **Array&lt;string&gt;** | A list of errors that occurred during the aggregation. | [default to undefined]
**warnings** | **Array&lt;string&gt;** | A list of warnings that occurred during the aggregation. | [default to undefined]
**stats** | [**AccountAggregationCompletedStatsBeta**](AccountAggregationCompletedStatsBeta.md) |  | [default to undefined]



## Enum: AccountAggregationCompletedBetaStatusBeta


* `Success` (value: `'Success'`)

* `Failed` (value: `'Failed'`)

* `Terminated` (value: `'Terminated'`)



