# DomainStatusDtoBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | New UUID associated with domain to be verified | [optional] [default to undefined]
**domain** | **string** | A domain address | [optional] [default to undefined]
**dkimEnabled** | **object** | DKIM is enabled for this domain | [optional] [default to undefined]
**dkimTokens** | **Array&lt;string&gt;** | DKIM tokens required for authentication | [optional] [default to undefined]
**dkimVerificationStatus** | **string** | Status of DKIM authentication | [optional] [default to undefined]

