# CreateFormInstanceRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | [**FormInstanceCreatedByBeta**](FormInstanceCreatedByBeta.md) |  | [default to undefined]
**expire** | **string** | Expire is required | [default to undefined]
**formDefinitionId** | **string** | FormDefinitionID is the id of the form definition that created this form | [default to undefined]
**formInput** | **{ [key: string]: any; }** | FormInput is an object of form input labels to value | [optional] [default to undefined]
**recipients** | [**Array&lt;FormInstanceRecipientBeta&gt;**](FormInstanceRecipientBeta.md) | Recipients is required | [default to undefined]
**standAloneForm** | **boolean** | StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form | [optional] [default to false]
**state** | **string** | State is required, if not present initial state is FormInstanceStateAssigned ASSIGNED FormInstanceStateAssigned IN_PROGRESS FormInstanceStateInProgress SUBMITTED FormInstanceStateSubmitted COMPLETED FormInstanceStateCompleted CANCELLED FormInstanceStateCancelled | [optional] [default to undefined]
**ttl** | **number** | TTL an epoch timestamp in seconds, it most be in seconds or dynamodb will ignore it SEE: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-before-you-start.html | [optional] [default to undefined]



## Enum: CreateFormInstanceRequestBetaStateBeta


* `Assigned` (value: `'ASSIGNED'`)

* `InProgress` (value: `'IN_PROGRESS'`)

* `Submitted` (value: `'SUBMITTED'`)

* `Completed` (value: `'COMPLETED'`)

* `Cancelled` (value: `'CANCELLED'`)



