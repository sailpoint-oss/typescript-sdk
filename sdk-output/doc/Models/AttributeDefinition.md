# AttributeDefinitionBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the attribute. | [optional] [default to undefined]
**type** | [**AttributeDefinitionTypeBeta**](AttributeDefinitionTypeBeta.md) |  | [optional] [default to undefined]
**schema** | [**AttributeDefinitionSchemaBeta**](AttributeDefinitionSchemaBeta.md) |  | [optional] [default to undefined]
**description** | **string** | A human-readable description of the attribute. | [optional] [default to undefined]
**isMulti** | **boolean** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to false]
**isEntitlement** | **boolean** | Flag indicating whether or not the attribute is an entitlement. | [optional] [default to false]
**isGroup** | **boolean** | Flag indicating whether or not the attribute represents a group. This can only be &#x60;true&#x60; if &#x60;isEntitlement&#x60; is also &#x60;true&#x60; **and** there is a schema defined for the attribute.  | [optional] [default to false]

