# IdentityBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | System-generated unique ID of the identity | [optional] [readonly] [default to undefined]
**name** | **string** | The identity\&#39;s name is equivalent to its Display Name attribute. | [default to undefined]
**created** | **string** | Creation date of the identity | [optional] [readonly] [default to undefined]
**modified** | **string** | Last modification date of the identity | [optional] [readonly] [default to undefined]
**alias** | **string** | The identity\&#39;s alternate unique identifier is equivalent to its Account Name on the authoritative source account schema. | [optional] [default to undefined]
**emailAddress** | **string** | The email address of the identity | [optional] [default to undefined]
**processingState** | **string** | The processing state of the identity | [optional] [default to undefined]
**identityStatus** | **string** | The identity\&#39;s status in the system | [optional] [default to undefined]
**managerRef** | [**IdentityManagerRefBeta**](IdentityManagerRefBeta.md) |  | [optional] [default to undefined]
**isManager** | **boolean** | Whether this identity is a manager of another identity | [optional] [default to false]
**lastRefresh** | **string** | The last time the identity was refreshed by the system | [optional] [default to undefined]
**attributes** | **object** | A map with the identity attributes for the identity | [optional] [default to undefined]
**lifecycleState** | [**IdentityLifecycleStateBeta**](IdentityLifecycleStateBeta.md) |  | [optional] [default to undefined]



## Enum: IdentityBetaProcessingStateBeta


* `Error` (value: `'ERROR'`)

* `Ok` (value: `'OK'`)





## Enum: IdentityBetaIdentityStatusBeta


* `Unregistered` (value: `'UNREGISTERED'`)

* `Registered` (value: `'REGISTERED'`)

* `Pending` (value: `'PENDING'`)

* `Warning` (value: `'WARNING'`)

* `Disabled` (value: `'DISABLED'`)

* `Active` (value: `'ACTIVE'`)

* `Deactivated` (value: `'DEACTIVATED'`)

* `Terminated` (value: `'TERMINATED'`)

* `Error` (value: `'ERROR'`)

* `Locked` (value: `'LOCKED'`)



