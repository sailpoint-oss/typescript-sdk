# WorkgroupMemberDeleteItemBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identifier of identity in bulk member add /remove request. | [default to undefined]
**status** | **number** | The HTTP response status code returned for an individual  member that is requested for deletion during a bulk delete operation.  &gt; 204   - Identity is removed from Governance Group members list.  &gt; 404   - Identity is not member of Governance Group.  | [default to undefined]
**description** | **string** | Human readable status description and containing additional context information about success or failures etc.  | [optional] [default to undefined]

