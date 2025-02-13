# AccessRequestPhasesBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**started** | **string** | The time that this phase started. | [optional] [default to undefined]
**finished** | **string** | The time that this phase finished. | [optional] [default to undefined]
**name** | **string** | The name of this phase. | [optional] [default to undefined]
**state** | **string** | The state of this phase. | [optional] [default to undefined]
**result** | **string** | The state of this phase. | [optional] [default to undefined]
**phaseReference** | **string** | A reference to another object on the RequestedItemStatus that contains more details about the phase. Note that for the Provisioning phase, this will be empty if there are no manual work items. | [optional] [default to undefined]



## Enum: AccessRequestPhasesBetaStateBeta


* `Pending` (value: `'PENDING'`)

* `Executing` (value: `'EXECUTING'`)

* `Completed` (value: `'COMPLETED'`)

* `Cancelled` (value: `'CANCELLED'`)

* `NotExecuted` (value: `'NOT_EXECUTED'`)





## Enum: AccessRequestPhasesBetaResultBeta


* `Successful` (value: `'SUCCESSFUL'`)

* `Failed` (value: `'FAILED'`)



