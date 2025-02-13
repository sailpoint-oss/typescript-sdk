# WorkflowExecutionBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Workflow execution ID. | [optional] [default to undefined]
**workflowId** | **string** | Workflow ID. | [optional] [default to undefined]
**requestId** | **string** | Backend ID that tracks a workflow request in the system. Provide this ID in a customer support ticket for debugging purposes. | [optional] [default to undefined]
**startTime** | **string** | Date/time when the workflow started. | [optional] [default to undefined]
**closeTime** | **string** | Date/time when the workflow ended. | [optional] [default to undefined]
**status** | **string** | Workflow execution status. | [optional] [default to undefined]



## Enum: WorkflowExecutionBetaStatusBeta


* `Completed` (value: `'Completed'`)

* `Failed` (value: `'Failed'`)

* `Canceled` (value: `'Canceled'`)

* `Executing` (value: `'Executing'`)



