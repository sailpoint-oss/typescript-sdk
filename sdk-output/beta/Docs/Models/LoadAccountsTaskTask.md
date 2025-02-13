# LoadAccountsTaskTaskBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | System-generated unique ID of the task this taskStatus represents | [optional] [default to undefined]
**type** | **string** | Type of task this task represents | [optional] [default to undefined]
**name** | **string** | The name of the aggregation process | [optional] [default to undefined]
**description** | **string** | The description of the task | [optional] [default to undefined]
**launcher** | **string** | The user who initiated the task | [optional] [default to undefined]
**created** | **string** | The Task creation date | [optional] [default to undefined]
**launched** | **string** | The task start date | [optional] [default to undefined]
**completed** | **string** | The task completion date | [optional] [default to undefined]
**completionStatus** | **string** | Task completion status. | [optional] [default to undefined]
**parentName** | **string** | Name of the parent task if exists. | [optional] [default to undefined]
**messages** | [**Array&lt;LoadAccountsTaskTaskMessagesInnerBeta&gt;**](LoadAccountsTaskTaskMessagesInnerBeta.md) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] [default to undefined]
**progress** | **string** | Current task state. | [optional] [default to undefined]
**attributes** | [**LoadAccountsTaskTaskAttributesBeta**](LoadAccountsTaskTaskAttributesBeta.md) |  | [optional] [default to undefined]
**returns** | [**Array&lt;LoadAccountsTaskTaskReturnsInnerBeta&gt;**](LoadAccountsTaskTaskReturnsInnerBeta.md) | Return values from the task | [optional] [default to undefined]



## Enum: LoadAccountsTaskTaskBetaCompletionStatusBeta


* `Success` (value: `'SUCCESS'`)

* `Warning` (value: `'WARNING'`)

* `Error` (value: `'ERROR'`)

* `Terminated` (value: `'TERMINATED'`)

* `TempError` (value: `'TEMP_ERROR'`)



