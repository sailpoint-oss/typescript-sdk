# ProvisioningCompletedAccountRequestsInnerBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**ProvisioningCompletedAccountRequestsInnerSourceBeta**](ProvisioningCompletedAccountRequestsInnerSourceBeta.md) |  | [default to undefined]
**accountId** | **string** | The unique idenfier of the account being provisioned. | [optional] [default to undefined]
**accountOperation** | **string** | The provisioning operation; typically Create, Modify, Enable, Disable, Unlock, or Delete. | [default to undefined]
**provisioningResult** | **object** | The overall result of the provisioning transaction; this could be success, pending, failed, etc. | [default to undefined]
**provisioningTarget** | **string** | The name of the provisioning channel selected; this could be the same as the source, or could be a Service Desk Integration Module (SDIM). | [default to undefined]
**ticketId** | **string** | A reference to a tracking number, if this is sent to a Service Desk Integration Module (SDIM). | [optional] [default to undefined]
**attributeRequests** | [**Array&lt;ProvisioningCompletedAccountRequestsInnerAttributeRequestsInnerBeta&gt;**](ProvisioningCompletedAccountRequestsInnerAttributeRequestsInnerBeta.md) | A list of attributes as part of the provisioning transaction. | [optional] [default to undefined]



## Enum: ProvisioningCompletedAccountRequestsInnerBetaProvisioningResultBeta


* `Success` (value: `'SUCCESS'`)

* `Pending` (value: `'PENDING'`)

* `Failed` (value: `'FAILED'`)



