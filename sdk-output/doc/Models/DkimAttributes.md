# DkimAttributesBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | UUID associated with domain to be verified | [optional] [default to undefined]
**address** | **string** | The identity or domain address | [optional] [default to undefined]
**dkimEnabled** | **boolean** | Whether or not DKIM has been enabled for this domain / identity | [optional] [default to false]
**dkimTokens** | **Array&lt;string&gt;** | The tokens to be added to a DNS for verification | [optional] [default to undefined]
**dkimVerificationStatus** | **string** | The current status if the domain /identity has been verified. Ie Success, Failed, Pending | [optional] [default to undefined]

