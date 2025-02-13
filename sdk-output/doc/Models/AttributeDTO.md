# AttributeDTOBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Technical name of the Attribute. This is unique and cannot be changed after creation. | [optional] [default to undefined]
**name** | **string** | The display name of the key. | [optional] [default to undefined]
**multiselect** | **boolean** | Indicates whether the attribute can have multiple values. | [optional] [default to false]
**status** | **string** | The status of the Attribute. | [optional] [default to undefined]
**type** | **string** | The type of the Attribute. This can be either \&quot;custom\&quot; or \&quot;governance\&quot;. | [optional] [default to undefined]
**objectTypes** | **Array&lt;string&gt;** | An array of object types this attributes values can be applied to. Possible values are \&quot;all\&quot; or \&quot;entitlement\&quot;. Value \&quot;all\&quot; means this attribute can be used with all object types that are supported. | [optional] [default to undefined]
**description** | **string** | The description of the Attribute. | [optional] [default to undefined]
**values** | [**Array&lt;AttributeValueDTOBeta&gt;**](AttributeValueDTOBeta.md) |  | [optional] [default to undefined]

