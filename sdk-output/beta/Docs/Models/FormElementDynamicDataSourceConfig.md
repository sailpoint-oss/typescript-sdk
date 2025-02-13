# FormElementDynamicDataSourceConfigBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregationBucketField** | **string** | AggregationBucketField is the aggregation bucket field name | [optional] [default to undefined]
**indices** | **Array&lt;string&gt;** | Indices is a list of indices to use | [optional] [default to undefined]
**objectType** | **string** | ObjectType is a PreDefinedSelectOption value IDENTITY PreDefinedSelectOptionIdentity ACCESS_PROFILE PreDefinedSelectOptionAccessProfile SOURCES PreDefinedSelectOptionSources ROLE PreDefinedSelectOptionRole ENTITLEMENT PreDefinedSelectOptionEntitlement | [optional] [default to undefined]
**query** | **string** | Query is a text | [optional] [default to undefined]



## Enum: Array&lt;FormElementDynamicDataSourceConfigBetaIndicesBeta&gt;


* `Accessprofiles` (value: `'accessprofiles'`)

* `Accountactivities` (value: `'accountactivities'`)

* `Entitlements` (value: `'entitlements'`)

* `Identities` (value: `'identities'`)

* `Events` (value: `'events'`)

* `Roles` (value: `'roles'`)

* `Star` (value: `'*'`)





## Enum: FormElementDynamicDataSourceConfigBetaObjectTypeBeta


* `Identity` (value: `'IDENTITY'`)

* `AccessProfile` (value: `'ACCESS_PROFILE'`)

* `Sources` (value: `'SOURCES'`)

* `Role` (value: `'ROLE'`)

* `Entitlement` (value: `'ENTITLEMENT'`)



