# SodViolationCheckResult1Beta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | [**ErrorMessageDtoBeta**](ErrorMessageDtoBeta.md) |  | [optional] [default to undefined]
**clientMetadata** | **{ [key: string]: string; }** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] [default to undefined]
**violationContexts** | [**Array&lt;SodViolationContext1Beta&gt;**](SodViolationContext1Beta.md) |  | [optional] [default to undefined]
**violatedPolicies** | [**Array&lt;SodPolicyDtoBeta&gt;**](SodPolicyDtoBeta.md) | A list of the Policies that were violated. | [optional] [default to undefined]

