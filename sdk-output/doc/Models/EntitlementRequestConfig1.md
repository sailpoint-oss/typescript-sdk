# EntitlementRequestConfig1Beta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowEntitlementRequest** | **boolean** | If this is true, entitlement requests are allowed. | [optional] [default to false]
**requestCommentsRequired** | **boolean** | If this is true, comments are required to submit entitlement requests. | [optional] [default to false]
**deniedCommentsRequired** | **boolean** | If this is true, comments are required to reject entitlement requests. | [optional] [default to false]
**grantRequestApprovalSchemes** | **string** | Approval schemes for granting entitlement request. This can be empty if no approval is needed. Multiple schemes must be comma-separated. The valid schemes are \&quot;entitlementOwner\&quot;, \&quot;sourceOwner\&quot;, \&quot;manager\&quot; and \&quot;&#x60;workgroup:{id}&#x60;\&quot;. You can use multiple governance groups (workgroups).  | [optional] [default to &#39;sourceOwner&#39;]

