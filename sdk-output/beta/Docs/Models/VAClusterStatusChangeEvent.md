# VAClusterStatusChangeEventBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **string** | The date and time the status change occurred. | [default to undefined]
**type** | **object** | The type of the object that initiated this event. | [default to undefined]
**application** | [**VAClusterStatusChangeEventApplicationBeta**](VAClusterStatusChangeEventApplicationBeta.md) |  | [default to undefined]
**healthCheckResult** | [**VAClusterStatusChangeEventHealthCheckResultBeta**](VAClusterStatusChangeEventHealthCheckResultBeta.md) |  | [default to undefined]
**previousHealthCheckResult** | [**VAClusterStatusChangeEventPreviousHealthCheckResultBeta**](VAClusterStatusChangeEventPreviousHealthCheckResultBeta.md) |  | [default to undefined]



## Enum: VAClusterStatusChangeEventBetaTypeBeta


* `Source` (value: `'SOURCE'`)

* `Cluster` (value: `'CLUSTER'`)



