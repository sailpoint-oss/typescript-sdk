# AccessRequestTrackingBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFor** | **string** | The identity id in which the access request is for. | [optional] [default to undefined]
**requestedItemsDetails** | [**Array&lt;RequestedItemDetailsBeta&gt;**](RequestedItemDetailsBeta.md) | The details of the item requested. | [optional] [default to undefined]
**attributesHash** | **string** | a hash representation of the access requested, useful for longer term tracking client side. | [optional] [default to undefined]
**accessRequestIds** | **Array&lt;string&gt;** | a list of access request identifiers, generally only one will be populated, but high volume requested may result in multiple ids. | [optional] [default to undefined]

