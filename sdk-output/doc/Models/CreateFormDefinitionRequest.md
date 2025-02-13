# CreateFormDefinitionRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Description is the form definition description | [optional] [default to undefined]
**formConditions** | [**Array&lt;FormConditionBeta&gt;**](FormConditionBeta.md) | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [optional] [default to undefined]
**formElements** | [**Array&lt;FormElementBeta&gt;**](FormElementBeta.md) | FormElements is a list of nested form elements | [optional] [default to undefined]
**formInput** | [**Array&lt;FormDefinitionInputBeta&gt;**](FormDefinitionInputBeta.md) | FormInput is a list of form inputs that are required when creating a form-instance object | [optional] [default to undefined]
**name** | **string** | Name is the form definition name | [default to undefined]
**owner** | [**FormOwnerBeta**](FormOwnerBeta.md) |  | [default to undefined]
**usedBy** | [**Array&lt;FormUsedByBeta&gt;**](FormUsedByBeta.md) | UsedBy is a list of objects where when any system uses a particular form it reaches out to the form service to record it is currently being used | [optional] [default to undefined]

