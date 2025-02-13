# CloseAccessRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestIds** | **Array&lt;string&gt;** | Access Request IDs for the requests to be closed. Accepts 1-500 Identity Request IDs per request. | [default to undefined]
**message** | **string** | Reason for closing the access request. Displayed under Warnings in IdentityNow. | [optional] [default to &#39;The IdentityNow Administrator manually closed this request.&#39;]
**executionStatus** | **string** | The request\&#39;s provisioning status. Displayed as Stage in IdentityNow. | [optional] [default to ExecutionStatusBeta_Terminated]
**completionStatus** | **string** | The request\&#39;s overall status. Displayed as Status in IdentityNow. | [optional] [default to CompletionStatusBeta_Failure]



## Enum: CloseAccessRequestBetaExecutionStatusBeta


* `Terminated` (value: `'Terminated'`)

* `Completed` (value: `'Completed'`)





## Enum: CloseAccessRequestBetaCompletionStatusBeta


* `Success` (value: `'Success'`)

* `Incomplete` (value: `'Incomplete'`)

* `Failure` (value: `'Failure'`)



