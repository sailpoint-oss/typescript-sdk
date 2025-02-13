# GetHistoricalIdentityEvents200ResponseInnerBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessItem** | [**AccessItemAssociatedAccessItemBeta**](AccessItemAssociatedAccessItemBeta.md) |  | [optional] [default to undefined]
**identityId** | **string** | the identity id | [optional] [default to undefined]
**eventType** | **string** | the event type | [optional] [default to undefined]
**dt** | **string** | the date of event | [optional] [default to undefined]
**governanceEvent** | [**CorrelatedGovernanceEventBeta**](CorrelatedGovernanceEventBeta.md) |  | [optional] [default to undefined]
**changes** | [**Array&lt;AttributeChangeBeta&gt;**](AttributeChangeBeta.md) |  | [optional] [default to undefined]
**accessRequest** | [**AccessRequestResponse1Beta**](AccessRequestResponse1Beta.md) |  | [optional] [default to undefined]
**certificationId** | **string** | the id of the certification item | [optional] [default to undefined]
**certificationName** | **string** | the certification item name | [optional] [default to undefined]
**signedDate** | **string** | the date ceritification was signed | [optional] [default to undefined]
**certifiers** | [**Array&lt;CertifierResponseBeta&gt;**](CertifierResponseBeta.md) | this field is deprecated and may go away | [optional] [default to undefined]
**reviewers** | [**Array&lt;CertifierResponseBeta&gt;**](CertifierResponseBeta.md) | The list of identities who review this certification | [optional] [default to undefined]
**signer** | [**CertifierResponseBeta**](CertifierResponseBeta.md) |  | [optional] [default to undefined]
**account** | [**AccountStatusChangedAccountBeta**](AccountStatusChangedAccountBeta.md) |  | [optional] [default to undefined]
**statusChange** | [**AccountStatusChangedStatusChangeBeta**](AccountStatusChangedStatusChangeBeta.md) |  | [optional] [default to undefined]

