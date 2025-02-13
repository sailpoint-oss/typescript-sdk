# SpConfigObjectBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectType** | **string** | The object type this configuration is for. | [optional] [default to undefined]
**referenceExtractors** | **Array&lt;string&gt;** | List of json paths within an exported object of this type that represent references that need to be resolved. | [optional] [default to undefined]
**signatureRequired** | **boolean** | If true, this type of object will be JWS signed and cannot be modified before import. | [optional] [default to false]
**legacyObject** | **boolean** | Whether this is a legacy object | [optional] [default to false]
**onePerTenant** | **boolean** | Whether there is only one object of this type | [optional] [default to false]
**exportable** | **boolean** | Whether this object can be exported or it is just a reference object | [optional] [default to false]
**rules** | [**SpConfigRulesBeta**](SpConfigRulesBeta.md) |  | [optional] [default to undefined]

