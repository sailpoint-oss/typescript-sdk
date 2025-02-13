# SpConfigJobBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **string** | Unique id assigned to this job. | [default to undefined]
**status** | **string** | Status of the job. | [default to undefined]
**type** | **string** | Type of the job, either export or import. | [default to undefined]
**expiration** | **string** | The time until which the artifacts will be available for download. | [default to undefined]
**created** | **string** | The time the job was started. | [default to undefined]
**modified** | **string** | The time of the last update to the job. | [default to undefined]



## Enum: SpConfigJobBetaStatusBeta


* `NotStarted` (value: `'NOT_STARTED'`)

* `InProgress` (value: `'IN_PROGRESS'`)

* `Complete` (value: `'COMPLETE'`)

* `Cancelled` (value: `'CANCELLED'`)

* `Failed` (value: `'FAILED'`)





## Enum: SpConfigJobBetaTypeBeta


* `Export` (value: `'EXPORT'`)

* `Import` (value: `'IMPORT'`)



