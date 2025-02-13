# FormInstanceResponseBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **string** | Created is the date the form instance was assigned | [optional] [default to undefined]
**createdBy** | [**FormInstanceCreatedByBeta**](FormInstanceCreatedByBeta.md) |  | [optional] [default to undefined]
**expire** | **string** | Expire is the maximum amount of time that a form can be in progress. After this time is reached then the form will be moved to a CANCELED state automatically. The user will no longer be able to complete the submission. When a form instance is expires an audit log will be generated for that record | [optional] [default to undefined]
**formConditions** | [**Array&lt;FormConditionBeta&gt;**](FormConditionBeta.md) | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [optional] [default to undefined]
**formData** | **{ [key: string]: any; }** | FormData is the data provided by the form on submit. The data is in a key -&gt; value map | [optional] [default to undefined]
**formDefinitionId** | **string** | FormDefinitionID is the id of the form definition that created this form | [optional] [default to undefined]
**formElements** | [**Array&lt;FormElementBeta&gt;**](FormElementBeta.md) | FormElements is the configuration of the form, this would be a repeat of the fields from the form-config | [optional] [default to undefined]
**formErrors** | [**Array&lt;FormErrorBeta&gt;**](FormErrorBeta.md) | FormErrors is an array of form validation errors from the last time the form instance was transitioned to the SUBMITTED state. If the form instance had validation errors then it would be moved to the IN PROGRESS state where the client can retrieve these errors | [optional] [default to undefined]
**formInput** | **{ [key: string]: object; }** | FormInput is an object of form input labels to value | [optional] [default to undefined]
**id** | **string** | Unique guid identifying this form instance | [optional] [default to undefined]
**modified** | **string** | Modified is the last date the form instance was modified | [optional] [default to undefined]
**recipients** | [**Array&lt;FormInstanceRecipientBeta&gt;**](FormInstanceRecipientBeta.md) | Recipients references to the recipient of a form. The recipients are those who are responsible for filling out a form and completing it | [optional] [default to undefined]
**standAloneForm** | **boolean** | StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form | [optional] [default to false]
**standAloneFormUrl** | **string** | StandAloneFormURL is the URL where this form may be completed by the designated recipients using the standalone form UI | [optional] [default to undefined]
**state** | **string** | State the state of the form instance ASSIGNED FormInstanceStateAssigned IN_PROGRESS FormInstanceStateInProgress SUBMITTED FormInstanceStateSubmitted COMPLETED FormInstanceStateCompleted CANCELLED FormInstanceStateCancelled | [optional] [default to undefined]



## Enum: FormInstanceResponseBetaStateBeta


* `Assigned` (value: `'ASSIGNED'`)

* `InProgress` (value: `'IN_PROGRESS'`)

* `Submitted` (value: `'SUBMITTED'`)

* `Completed` (value: `'COMPLETED'`)

* `Cancelled` (value: `'CANCELLED'`)



