# CorrelatedGovernanceEventBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the governance event, such as the certification name or access request ID. | [optional] [default to undefined]
**dt** | **string** | The date that the certification or access request was completed. | [optional] [default to undefined]
**type** | **string** | The type of governance event. | [optional] [default to undefined]
**governanceId** | **string** | The ID of the instance that caused the event - either the certification ID or access request ID. | [optional] [default to undefined]
**owners** | [**Array&lt;CertifierResponseBeta&gt;**](CertifierResponseBeta.md) | The owners of the governance event (the certifiers or approvers) | [optional] [default to undefined]
**reviewers** | [**Array&lt;CertifierResponseBeta&gt;**](CertifierResponseBeta.md) | The owners of the governance event (the certifiers or approvers), this field should be preferred over owners | [optional] [default to undefined]
**decisionMaker** | [**CertifierResponseBeta**](CertifierResponseBeta.md) |  | [optional] [default to undefined]



## Enum: CorrelatedGovernanceEventBetaTypeBeta


* `Certification` (value: `'certification'`)

* `AccessRequest` (value: `'accessRequest'`)



