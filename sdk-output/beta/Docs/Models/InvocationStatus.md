# InvocationStatusBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Invocation ID | [default to undefined]
**triggerId** | **string** | Trigger ID | [default to undefined]
**subscriptionName** | **string** | Subscription name | [default to undefined]
**subscriptionId** | **string** | Subscription ID | [default to undefined]
**type** | [**InvocationStatusTypeBeta**](InvocationStatusTypeBeta.md) |  | [default to undefined]
**created** | **string** | Invocation created timestamp. ISO-8601 in UTC. | [default to undefined]
**completed** | **string** | Invocation completed timestamp; empty fields imply invocation is in-flight or not completed. ISO-8601 in UTC. | [optional] [default to undefined]
**startInvocationInput** | [**StartInvocationInputBeta**](StartInvocationInputBeta.md) |  | [default to undefined]
**completeInvocationInput** | [**CompleteInvocationInputBeta**](CompleteInvocationInputBeta.md) |  | [optional] [default to undefined]

