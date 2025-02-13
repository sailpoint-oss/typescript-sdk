# TestInvocationBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggerId** | **string** | Trigger ID | [default to undefined]
**input** | **object** | Mock input to use for test invocation.  This must adhere to the input schema defined in the trigger being invoked.  If this property is omitted, then the default trigger sample payload will be sent. | [optional] [default to undefined]
**contentJson** | **object** | JSON map of invocation metadata. | [default to undefined]
**subscriptionIds** | **Array&lt;string&gt;** | Only send the test event to the subscription IDs listed.  If omitted, the test event will be sent to all subscribers. | [optional] [default to undefined]

