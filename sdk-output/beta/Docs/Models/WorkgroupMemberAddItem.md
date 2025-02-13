# WorkgroupMemberAddItemBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identifier of identity in bulk member add request. | [default to undefined]
**status** | **number** |  The HTTP response status code returned for an individual member that is requested for addition during a bulk add operation. The HTTP response status code returned for an individual Governance Group is requested for deletion.  &gt; 201   - Identity is added into Governance Group members list.  &gt; 409   - Identity is already member of  Governance Group.  | [default to undefined]
**description** | **string** | Human readable status description and containing additional context information about success or failures etc.  | [optional] [default to undefined]

