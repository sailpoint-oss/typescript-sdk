# WorkflowBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the workflow | [optional] [default to undefined]
**owner** | [**WorkflowBodyOwnerBeta**](WorkflowBodyOwnerBeta.md) |  | [optional] [default to undefined]
**description** | **string** | Description of what the workflow accomplishes | [optional] [default to undefined]
**definition** | [**WorkflowDefinitionBeta**](WorkflowDefinitionBeta.md) |  | [optional] [default to undefined]
**enabled** | **boolean** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to false]
**trigger** | [**WorkflowTriggerBeta**](WorkflowTriggerBeta.md) |  | [optional] [default to undefined]
**id** | **string** | Workflow ID. This is a UUID generated upon creation. | [optional] [default to undefined]
**modified** | **string** | The date and time the workflow was modified. | [optional] [default to undefined]
**modifiedBy** | [**WorkflowModifiedByBeta**](WorkflowModifiedByBeta.md) |  | [optional] [default to undefined]
**executionCount** | **number** | The number of times this workflow has been executed. | [optional] [default to undefined]
**failureCount** | **number** | The number of times this workflow has failed during execution. | [optional] [default to undefined]
**created** | **string** | The date and time the workflow was created. | [optional] [default to undefined]
**creator** | [**WorkflowAllOfCreatorBeta**](WorkflowAllOfCreatorBeta.md) |  | [optional] [default to undefined]

