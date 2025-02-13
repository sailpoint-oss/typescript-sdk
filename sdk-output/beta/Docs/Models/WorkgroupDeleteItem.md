# WorkgroupDeleteItemBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Id of the Governance Group. | [default to undefined]
**status** | **number** |  The HTTP response status code returned for an individual Governance Group that is requested for deletion during a bulk delete operation.  &gt; 204   -  Governance Group deleted successfully.  &gt; 409   - Governance Group is in use,hence can not be deleted.  &gt; 404   - Governance Group not found.  | [default to undefined]
**description** | **string** | Human readable status description and containing additional context information about success or failures etc.  | [optional] [default to undefined]

