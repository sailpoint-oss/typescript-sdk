# StatusResponseBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the source | [optional] [readonly] [default to undefined]
**name** | **string** | Name of the source | [optional] [readonly] [default to undefined]
**status** | **string** | The status of the health check. | [optional] [readonly] [default to undefined]
**elapsedMillis** | **number** | The number of milliseconds spent on the entire request. | [optional] [readonly] [default to undefined]
**details** | **object** | The document contains the results of the health check. The schema of this document depends on the type of source used.  | [optional] [readonly] [default to undefined]



## Enum: StatusResponseBetaStatusBeta


* `Success` (value: `'SUCCESS'`)

* `Failure` (value: `'FAILURE'`)



