# NativeChangeDetectionConfigBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | A flag indicating if Native Change Detection is enabled for a source. | [optional] [default to false]
**operations** | **Array&lt;string&gt;** | Operation types for which Native Change Detection is enabled for a source. | [optional] [default to undefined]
**allEntitlements** | **boolean** | A flag indicating that all entitlements participate in Native Change Detection. | [optional] [default to false]
**allNonEntitlementAttributes** | **boolean** | A flag indicating that all non-entitlement account attributes participate in Native Change Detection. | [optional] [default to false]
**selectedEntitlements** | **Array&lt;string&gt;** | If allEntitlements flag is off this field lists entitlements that participate in Native Change Detection. | [optional] [default to undefined]
**selectedNonEntitlementAttributes** | **Array&lt;string&gt;** | If allNonEntitlementAttributes flag is off this field lists non-entitlement account attributes that participate in Native Change Detection. | [optional] [default to undefined]



## Enum: Array&lt;NativeChangeDetectionConfigBetaOperationsBeta&gt;


* `AccountUpdated` (value: `'ACCOUNT_UPDATED'`)

* `AccountCreated` (value: `'ACCOUNT_CREATED'`)

* `AccountDeleted` (value: `'ACCOUNT_DELETED'`)



