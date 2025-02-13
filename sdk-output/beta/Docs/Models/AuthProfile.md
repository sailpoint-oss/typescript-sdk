# AuthProfileBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Authentication Profile name. | [optional] [default to undefined]
**offNetwork** | **boolean** | Use it to block access from off network. | [optional] [default to false]
**untrustedGeography** | **boolean** | Use it to block access from untrusted geoographies. | [optional] [default to false]
**applicationId** | **string** | Application ID. | [optional] [default to undefined]
**applicationName** | **string** | Application name. | [optional] [default to undefined]
**type** | **string** | Type of the Authentication Profile. | [optional] [default to undefined]
**strongAuthLogin** | **boolean** | Use it to enable strong authentication. | [optional] [default to false]



## Enum: AuthProfileBetaTypeBeta


* `Block` (value: `'BLOCK'`)

* `Mfa` (value: `'MFA'`)

* `NonPta` (value: `'NON_PTA'`)

* `Pta` (value: `'PTA'`)



