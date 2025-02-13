# AccessProfileBulkDeleteResponseBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **string** | ID of the task which is executing the bulk deletion. This can be passed to the **_/task-status** API to track status. | [optional] [default to undefined]
**pending** | **Array&lt;string&gt;** | List of IDs of Access Profiles which are pending deletion. | [optional] [default to undefined]
**inUse** | [**Array&lt;AccessProfileUsageBeta&gt;**](AccessProfileUsageBeta.md) | List of usages of Access Profiles targeted for deletion. | [optional] [default to undefined]

