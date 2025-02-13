# TriggerExampleOutputBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique ID of the identity to add to the approver list for the access request. | [default to undefined]
**name** | **string** | The name of the identity to add to the approver list for the access request. | [default to undefined]
**type** | **object** | The type of object being referenced. | [default to undefined]
**approved** | **boolean** | Whether or not to approve the access request. | [default to undefined]
**comment** | **string** | A comment about the decision to approve or deny the request. | [default to undefined]
**approver** | **string** | The name of the entity that approved or denied the request. | [default to undefined]



## Enum: TriggerExampleOutputBetaTypeBeta


* `Identity` (value: `'IDENTITY'`)

* `GovernanceGroup` (value: `'GOVERNANCE_GROUP'`)



