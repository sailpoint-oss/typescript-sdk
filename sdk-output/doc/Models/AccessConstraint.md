# AccessConstraintBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of Access | [default to undefined]
**ids** | **Array&lt;string&gt;** | Must be set only if operator is SELECTED. | [optional] [default to undefined]
**operator** | **string** | Used to determine whether the scope of the campaign should be reduced for selected ids or all. | [default to undefined]



## Enum: AccessConstraintBetaTypeBeta


* `Entitlement` (value: `'ENTITLEMENT'`)

* `AccessProfile` (value: `'ACCESS_PROFILE'`)

* `Role` (value: `'ROLE'`)





## Enum: AccessConstraintBetaOperatorBeta


* `All` (value: `'ALL'`)

* `Selected` (value: `'SELECTED'`)



