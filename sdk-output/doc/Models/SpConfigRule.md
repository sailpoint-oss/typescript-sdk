# SpConfigRuleBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **string** | JSONPath expression denoting the path within the object where a value substitution should be applied | [optional] [default to undefined]
**value** | **object** | Value to be assigned at the jsonPath location within the object | [optional] [default to undefined]
**mode** | **Array&lt;string&gt;** | Draft modes to which this rule will apply | [optional] [default to undefined]



## Enum: Array&lt;SpConfigRuleBetaModeBeta&gt;


* `Restore` (value: `'RESTORE'`)

* `Promote` (value: `'PROMOTE'`)

* `Upload` (value: `'UPLOAD'`)



