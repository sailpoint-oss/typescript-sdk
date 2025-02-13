# TaskStatusBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | System-generated unique ID of the task this TaskStatus represents | [default to undefined]
**type** | **string** | Type of task this TaskStatus represents | [default to undefined]
**uniqueName** | **string** | Name of the task this TaskStatus represents | [default to undefined]
**description** | **string** | Description of the task this TaskStatus represents | [default to undefined]
**parentName** | **string** | Name of the parent of the task this TaskStatus represents | [default to undefined]
**launcher** | **string** | Service to execute the task this TaskStatus represents | [default to undefined]
**target** | [**TargetBeta**](TargetBeta.md) |  | [optional] [default to undefined]
**created** | **string** | Creation date of the task this TaskStatus represents | [default to undefined]
**modified** | **string** | Last modification date of the task this TaskStatus represents | [default to undefined]
**launched** | **string** | Launch date of the task this TaskStatus represents | [default to undefined]
**completed** | **string** | Completion date of the task this TaskStatus represents | [default to undefined]
**completionStatus** | **string** | Completion status of the task this TaskStatus represents | [default to undefined]
**messages** | [**Array&lt;TaskStatusMessageBeta&gt;**](TaskStatusMessageBeta.md) | Messages associated with the task this TaskStatus represents | [default to undefined]
**returns** | [**Array&lt;TaskReturnDetailsBeta&gt;**](TaskReturnDetailsBeta.md) | Return values from the task this TaskStatus represents | [default to undefined]
**attributes** | **{ [key: string]: any; }** | Attributes of the task this TaskStatus represents | [default to undefined]
**progress** | **string** | Current progress of the task this TaskStatus represents | [default to undefined]
**percentComplete** | **number** | Current percentage completion of the task this TaskStatus represents | [default to undefined]
**taskDefinitionSummary** | [**TaskDefinitionSummaryBeta**](TaskDefinitionSummaryBeta.md) |  | [optional] [default to undefined]



## Enum: TaskStatusBetaTypeBeta


* `Quartz` (value: `'QUARTZ'`)

* `Qpoc` (value: `'QPOC'`)

* `QueuedTask` (value: `'QUEUED_TASK'`)





## Enum: TaskStatusBetaCompletionStatusBeta


* `Success` (value: `'SUCCESS'`)

* `Warning` (value: `'WARNING'`)

* `Error` (value: `'ERROR'`)

* `Terminated` (value: `'TERMINATED'`)

* `Temperror` (value: `'TEMPERROR'`)



