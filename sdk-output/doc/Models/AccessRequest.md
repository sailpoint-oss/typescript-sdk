# AccessRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFor** | **Array&lt;string&gt;** | A list of Identity IDs for whom the Access is requested. If it\&#39;s a Revoke request, there can only be one Identity ID. | [default to undefined]
**requestType** | [**AccessRequestTypeBeta**](AccessRequestTypeBeta.md) |  | [optional] [default to undefined]
**requestedItems** | [**Array&lt;AccessRequestItemBeta&gt;**](AccessRequestItemBeta.md) |  | [default to undefined]
**clientMetadata** | **{ [key: string]: string; }** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] [default to undefined]

