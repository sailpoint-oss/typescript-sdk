# PasswordChangeRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **string** | The identity ID that requested the password change | [optional] [default to undefined]
**encryptedPassword** | **string** | The RSA encrypted password | [optional] [default to undefined]
**publicKeyId** | **string** | The encryption key ID | [optional] [default to undefined]
**accountId** | **string** | Account ID of the account This is specified per account schema in the source configuration. It is used to distinguish accounts. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-ID-for-a/ta-p/80350 | [optional] [default to undefined]
**sourceId** | **string** | The ID of the source for which identity is requesting the password change | [optional] [default to undefined]

