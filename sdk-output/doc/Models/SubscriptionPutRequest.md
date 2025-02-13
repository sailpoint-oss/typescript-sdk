# SubscriptionPutRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Subscription name. | [optional] [default to undefined]
**description** | **string** | Subscription description. | [optional] [default to undefined]
**type** | [**SubscriptionTypeBeta**](SubscriptionTypeBeta.md) |  | [optional] [default to undefined]
**responseDeadline** | **string** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [optional] [default to &#39;PT1H&#39;]
**httpConfig** | [**HttpConfigBeta**](HttpConfigBeta.md) |  | [optional] [default to undefined]
**eventBridgeConfig** | [**EventBridgeConfigBeta**](EventBridgeConfigBeta.md) |  | [optional] [default to undefined]
**enabled** | **boolean** | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [optional] [default to true]
**filter** | **string** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] [default to undefined]

