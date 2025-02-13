# WorkflowLibraryActionBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Action ID. This is a static namespaced ID for the action | [optional] [default to undefined]
**name** | **string** | Action Name | [optional] [default to undefined]
**type** | **string** | Action type | [optional] [default to undefined]
**description** | **string** | Action Description | [optional] [default to undefined]
**formFields** | [**Array&lt;WorkflowLibraryFormFieldsBeta&gt;**](WorkflowLibraryFormFieldsBeta.md) | One or more inputs that the action accepts | [optional] [default to undefined]
**exampleOutput** | [**WorkflowLibraryActionExampleOutputBeta**](WorkflowLibraryActionExampleOutputBeta.md) |  | [optional] [default to undefined]
**deprecated** | **boolean** |  | [optional] [default to undefined]
**deprecatedBy** | **string** |  | [optional] [default to undefined]
**versionNumber** | **number** | Version number | [optional] [default to undefined]
**isSimulationEnabled** | **boolean** |  | [optional] [default to undefined]
**isDynamicSchema** | **boolean** | Determines whether the dynamic output schema is returned in place of the action\&#39;s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to undefined]
**outputSchema** | **object** | Defines the output schema, if any, that this action produces. | [optional] [default to undefined]

