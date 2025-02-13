# NonEmployeeSchemaAttributeBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Schema Attribute Id | [optional] [default to undefined]
**system** | **boolean** | True if this schema attribute is mandatory on all non-employees sources. | [optional] [default to false]
**modified** | **string** | When the schema attribute was last modified. | [optional] [default to undefined]
**created** | **string** | When the schema attribute was created. | [optional] [default to undefined]
**type** | [**NonEmployeeSchemaAttributeTypeBeta**](NonEmployeeSchemaAttributeTypeBeta.md) |  | [default to undefined]
**label** | **string** | Label displayed on the UI for this schema attribute. | [default to undefined]
**technicalName** | **string** | The technical name of the attribute. Must be unique per source. | [default to undefined]
**helpText** | **string** | help text displayed by UI. | [optional] [default to undefined]
**placeholder** | **string** | Hint text that fills UI box. | [optional] [default to undefined]
**required** | **boolean** | If true, the schema attribute is required for all non-employees in the source | [optional] [default to false]

