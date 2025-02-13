# SodViolationCheckResultBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | [**ErrorMessageDtoBeta**](ErrorMessageDtoBeta.md) |  | [optional] [default to undefined]
**clientMetadata** | **{ [key: string]: string; }** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] [default to undefined]
**violationContexts** | [**Array&lt;SodViolationContextBeta&gt;**](SodViolationContextBeta.md) |  | [optional] [default to undefined]
**violatedPolicies** | [**Array&lt;SodPolicyDtoBeta&gt;**](SodPolicyDtoBeta.md) | A list of the SOD policies that were violated. | [optional] [default to undefined]

