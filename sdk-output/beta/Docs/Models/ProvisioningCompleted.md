# ProvisioningCompletedBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trackingNumber** | **string** | The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface. | [default to undefined]
**sources** | **string** | One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated. | [default to undefined]
**action** | **string** | Origin of where the provisioning request came from. | [optional] [default to undefined]
**errors** | **Array&lt;string&gt;** | A list of any accumulated error messages that occurred during provisioning. | [optional] [default to undefined]
**warnings** | **Array&lt;string&gt;** | A list of any accumulated warning messages that occurred during provisioning. | [optional] [default to undefined]
**recipient** | [**ProvisioningCompletedRecipientBeta**](ProvisioningCompletedRecipientBeta.md) |  | [default to undefined]
**requester** | [**ProvisioningCompletedRequesterBeta**](ProvisioningCompletedRequesterBeta.md) |  | [optional] [default to undefined]
**accountRequests** | [**Array&lt;ProvisioningCompletedAccountRequestsInnerBeta&gt;**](ProvisioningCompletedAccountRequestsInnerBeta.md) | A list of provisioning instructions to perform on an account-by-account basis. | [default to undefined]

