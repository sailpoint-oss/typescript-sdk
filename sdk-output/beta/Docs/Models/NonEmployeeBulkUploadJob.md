# NonEmployeeBulkUploadJobBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The bulk upload job\&#39;s ID. (UUID) | [optional] [default to undefined]
**sourceId** | **string** | The ID of the source to bulk-upload non-employees to. (UUID) | [optional] [default to undefined]
**created** | **string** | The date-time the job was submitted. | [optional] [default to undefined]
**modified** | **string** | The date-time that the job was last updated. | [optional] [default to undefined]
**status** | **string** | Returns the following values indicating the progress or result of the bulk upload job. \&quot;PENDING\&quot; means the job is queued and waiting to be processed. \&quot;IN_PROGRESS\&quot; means the job is currently being processed. \&quot;COMPLETED\&quot; means the job has been completed without any errors. \&quot;ERROR\&quot; means the job failed to process with errors.  | [optional] [default to undefined]



## Enum: NonEmployeeBulkUploadJobBetaStatusBeta


* `Pending` (value: `'PENDING'`)

* `InProgress` (value: `'IN_PROGRESS'`)

* `Completed` (value: `'COMPLETED'`)

* `Error` (value: `'ERROR'`)



