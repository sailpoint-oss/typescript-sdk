# FormDefinitionResponseBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique guid identifying the form definition. | [optional] [default to undefined]
**name** | **string** | Name of the form definition. | [optional] [default to undefined]
**description** | **string** | Form definition\&#39;s description. | [optional] [default to undefined]
**owner** | [**FormOwnerBeta**](FormOwnerBeta.md) |  | [optional] [default to undefined]
**usedBy** | [**Array&lt;FormUsedByBeta&gt;**](FormUsedByBeta.md) | List of objects using the form definition. Whenever a system uses a form, the API reaches out to the form service to record that the system is currently using it. | [optional] [default to undefined]
**formInput** | [**Array&lt;FormDefinitionInputBeta&gt;**](FormDefinitionInputBeta.md) | List of form inputs required to create a form-instance object. | [optional] [default to undefined]
**formElements** | [**Array&lt;FormElementBeta&gt;**](FormElementBeta.md) | List of nested form elements. | [optional] [default to undefined]
**formConditions** | [**Array&lt;FormConditionBeta&gt;**](FormConditionBeta.md) | Conditional logic that can dynamically modify the form as the recipient is interacting with it. | [optional] [default to undefined]
**created** | **string** | Created is the date the form definition was created | [optional] [default to undefined]
**modified** | **string** | Modified is the last date the form definition was modified | [optional] [default to undefined]

