# PasswordPolicyV3DtoBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The password policy Id. | [optional] [default to undefined]
**description** | **string** | Description for current password policy. | [optional] [default to undefined]
**name** | **string** | The name of the password policy. | [optional] [default to undefined]
**dateCreated** | **string** | Date the Password Policy was created. | [optional] [default to undefined]
**lastUpdated** | **string** | Date the Password Policy was updated. | [optional] [default to undefined]
**firstExpirationReminder** | **number** | The number of days before expiration remaninder. | [optional] [default to undefined]
**accountIdMinWordLength** | **number** | The minimun length of account Id. By default is equals to -1. | [optional] [default to undefined]
**accountNameMinWordLength** | **number** | The minimun length of account name. By default is equals to -1. | [optional] [default to undefined]
**minAlpha** | **number** | Maximum alpha. By default is equals to 0. | [optional] [default to undefined]
**minCharacterTypes** | **number** | MinCharacterTypes. By default is equals to -1. | [optional] [default to undefined]
**maxLength** | **number** | Maximum length of the password. | [optional] [default to undefined]
**minLength** | **number** | Minimum length of the password. By default is equals to 0. | [optional] [default to undefined]
**maxRepeatedChars** | **number** | Maximum repetition of the same character in the password. By default is equals to -1. | [optional] [default to undefined]
**minLower** | **number** | Minimum amount of lower case character in the password. By default is equals to 0. | [optional] [default to undefined]
**minNumeric** | **number** | Minimum amount of numeric characters in the password. By default is equals to 0. | [optional] [default to undefined]
**minSpecial** | **number** | Minimum amount of special symbols in the password. By default is equals to 0. | [optional] [default to undefined]
**minUpper** | **number** | Minimum amount of upper case symbols in the password. By default is equals to 0. | [optional] [default to undefined]
**passwordExpiration** | **number** | Number of days before current password expires. By default is equals to 90. | [optional] [default to undefined]
**defaultPolicy** | **boolean** | Defines whether this policy is default or not. Default policy is created automatically when an org is setup. This field is false by default. | [optional] [default to false]
**enablePasswdExpiration** | **boolean** | Defines whether this policy is enabled to expire or not. This field is false by default. | [optional] [default to false]
**requireStrongAuthn** | **boolean** | Defines whether this policy require strong Auth or not. This field is false by default. | [optional] [default to false]
**requireStrongAuthOffNetwork** | **boolean** | Defines whether this policy require strong Auth of network or not. This field is false by default. | [optional] [default to false]
**requireStrongAuthUntrustedGeographies** | **boolean** | Defines whether this policy require strong Auth for untrusted geographies. This field is false by default. | [optional] [default to false]
**useAccountAttributes** | **boolean** | Defines whether this policy uses account attributes or not. This field is false by default. | [optional] [default to false]
**useDictionary** | **boolean** | Defines whether this policy uses dictionary or not. This field is false by default. | [optional] [default to false]
**useIdentityAttributes** | **boolean** | Defines whether this policy uses identity attributes or not. This field is false by default. | [optional] [default to false]
**validateAgainstAccountId** | **boolean** | Defines whether this policy validate against account id or not. This field is false by default. | [optional] [default to false]
**validateAgainstAccountName** | **boolean** | Defines whether this policy validate against account name or not. This field is false by default. | [optional] [default to false]
**created** | **string** |  | [optional] [default to undefined]
**modified** | **string** |  | [optional] [default to undefined]
**sourceIds** | **Array&lt;string&gt;** | List of sources IDs managed by this password policy. | [optional] [default to undefined]

