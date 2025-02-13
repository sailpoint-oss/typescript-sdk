# AccessProfileDetailsBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the Access Profile | [optional] [default to undefined]
**name** | **string** | Name of the Access Profile | [optional] [default to undefined]
**description** | **string** | Information about the Access Profile | [optional] [default to undefined]
**created** | **string** | Date the Access Profile was created | [optional] [default to undefined]
**modified** | **string** | Date the Access Profile was last modified. | [optional] [default to undefined]
**disabled** | **boolean** | Whether the Access Profile is enabled. | [optional] [default to true]
**requestable** | **boolean** | Whether the Access Profile is requestable via access request. | [optional] [default to false]
**_protected** | **boolean** | Whether the Access Profile is protected. | [optional] [default to false]
**ownerId** | **string** | The owner ID of the Access Profile | [optional] [default to undefined]
**sourceId** | **number** | The source ID of the Access Profile | [optional] [default to undefined]
**sourceName** | **string** | The source name of the Access Profile | [optional] [default to undefined]
**appId** | **number** | The source app ID of the Access Profile | [optional] [default to undefined]
**appName** | **string** | The source app name of the Access Profile | [optional] [default to undefined]
**applicationId** | **string** | The id of the application | [optional] [default to undefined]
**type** | **string** | The type of the access profile | [optional] [default to undefined]
**entitlements** | **Array&lt;string&gt;** | List of IDs of entitlements | [optional] [default to undefined]
**entitlementCount** | **number** | The number of entitlements in the access profile | [optional] [default to undefined]
**segments** | **Array&lt;string&gt;** | List of IDs of segments, if any, to which this Access Profile is assigned. | [optional] [default to undefined]
**approvalSchemes** | **string** | Comma-separated list of approval schemes. Each approval scheme is one of - manager - appOwner - sourceOwner - accessProfileOwner - workgroup:&amp;lt;workgroupId&amp;gt;  | [optional] [default to undefined]
**revokeRequestApprovalSchemes** | **string** | Comma-separated list of revoke request approval schemes. Each approval scheme is one of - manager - sourceOwner - accessProfileOwner - workgroup:&amp;lt;workgroupId&amp;gt;  | [optional] [default to undefined]
**requestCommentsRequired** | **boolean** | Whether the access profile require request comment for access request. | [optional] [default to false]
**deniedCommentsRequired** | **boolean** | Whether denied comment is required when access request is denied. | [optional] [default to false]
**accountSelector** | [**AccessProfileDetailsAccountSelectorBeta**](AccessProfileDetailsAccountSelectorBeta.md) |  | [optional] [default to undefined]

