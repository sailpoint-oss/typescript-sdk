# EmailNotificationOptionBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notifyManagers** | **boolean** | If true, then the manager is notified of the lifecycle state change. | [optional] [default to false]
**notifyAllAdmins** | **boolean** | If true, then all the admins are notified of the lifecycle state change. | [optional] [default to false]
**notifySpecificUsers** | **boolean** | If true, then the users specified in \&quot;emailAddressList\&quot; below are notified of lifecycle state change. | [optional] [default to false]
**emailAddressList** | **Array&lt;string&gt;** | List of user email addresses. If \&quot;notifySpecificUsers\&quot; option is true, then these users are notified of lifecycle state change. | [optional] [default to undefined]

