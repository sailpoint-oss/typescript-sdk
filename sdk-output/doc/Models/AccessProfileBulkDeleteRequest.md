# AccessProfileBulkDeleteRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessProfileIds** | **Array&lt;string&gt;** | List of IDs of Access Profiles to be deleted. | [optional] [default to undefined]
**bestEffortOnly** | **boolean** | If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use. | [optional] [default to undefined]

