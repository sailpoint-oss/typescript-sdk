# CompleteInvocationBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **string** | Unique invocation secret that was generated when the invocation was created. Required to authenticate to the endpoint. | [default to undefined]
**error** | **string** | The error message to indicate a failed invocation or error if any. | [optional] [default to undefined]
**output** | **object** | Trigger output to complete the invocation. Its schema is defined in the trigger definition. | [default to undefined]

