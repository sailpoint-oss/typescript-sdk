# CreateWorkflowRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the workflow | [default to undefined]
**owner** | [**WorkflowBodyOwnerBeta**](WorkflowBodyOwnerBeta.md) |  | [default to undefined]
**description** | **string** | Description of what the workflow accomplishes | [optional] [default to undefined]
**definition** | [**WorkflowDefinitionBeta**](WorkflowDefinitionBeta.md) |  | [optional] [default to undefined]
**enabled** | **boolean** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to false]
**trigger** | [**WorkflowTriggerBeta**](WorkflowTriggerBeta.md) |  | [optional] [default to undefined]

