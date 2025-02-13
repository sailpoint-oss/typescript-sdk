# SpConfigImportJobStatusBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **string** | Unique id assigned to this job. | [default to undefined]
**status** | **string** | Status of the job. | [default to undefined]
**type** | **string** | Type of the job, either export or import. | [default to undefined]
**expiration** | **string** | The time until which the artifacts will be available for download. | [default to undefined]
**created** | **string** | The time the job was started. | [default to undefined]
**modified** | **string** | The time of the last update to the job. | [default to undefined]
**message** | **string** | This message contains additional information about the overall status of the job. | [optional] [default to undefined]
**completed** | **string** | The time the job was completed. | [optional] [default to undefined]



## Enum: SpConfigImportJobStatusBetaStatusBeta


* `NotStarted` (value: `'NOT_STARTED'`)

* `InProgress` (value: `'IN_PROGRESS'`)

* `Complete` (value: `'COMPLETE'`)

* `Cancelled` (value: `'CANCELLED'`)

* `Failed` (value: `'FAILED'`)





## Enum: SpConfigImportJobStatusBetaTypeBeta


* `Export` (value: `'EXPORT'`)

* `Import` (value: `'IMPORT'`)



