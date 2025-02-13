# WorkflowLibraryTriggerBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Trigger ID. This is a static namespaced ID for the trigger. | [optional] [default to undefined]
**type** | **string** | Trigger type | [optional] [default to undefined]
**deprecated** | **boolean** |  | [optional] [default to undefined]
**deprecatedBy** | **string** |  | [optional] [default to undefined]
**isSimulationEnabled** | **boolean** |  | [optional] [default to undefined]
**outputSchema** | **object** | Example output schema | [optional] [default to undefined]
**name** | **string** | Trigger Name | [optional] [default to undefined]
**description** | **string** | Trigger Description | [optional] [default to undefined]
**isDynamicSchema** | **boolean** | Determines whether the dynamic output schema is returned in place of the action\&#39;s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to undefined]
**inputExample** | **object** | Example trigger payload if applicable | [optional] [default to undefined]
**formFields** | [**Array&lt;WorkflowLibraryFormFieldsBeta&gt;**](WorkflowLibraryFormFieldsBeta.md) | One or more inputs that the trigger accepts | [optional] [default to undefined]



## Enum: WorkflowLibraryTriggerBetaTypeBeta


* `Event` (value: `'EVENT'`)

* `Scheduled` (value: `'SCHEDULED'`)

* `External` (value: `'EXTERNAL'`)



