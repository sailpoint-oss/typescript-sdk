# AccountUnlockRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalVerificationId** | **string** | If set, an external process validates that the user wants to proceed with this request. | [optional] [default to undefined]
**unlockIDNAccount** | **boolean** | If set, the IDN account is unlocked after the workflow completes. | [optional] [default to undefined]
**forceProvisioning** | **boolean** | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. | [optional] [default to undefined]

