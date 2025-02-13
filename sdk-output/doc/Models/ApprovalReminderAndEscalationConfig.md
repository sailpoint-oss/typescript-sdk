# ApprovalReminderAndEscalationConfigBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daysUntilEscalation** | **number** | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [optional] [default to undefined]
**daysBetweenReminders** | **number** | Number of days to wait between reminder notifications. | [optional] [default to undefined]
**maxReminders** | **number** | Maximum number of reminder notification to send to the reviewer before approval escalation. | [optional] [default to undefined]
**fallbackApproverRef** | [**IdentityReferenceWithNameAndEmailBeta**](IdentityReferenceWithNameAndEmailBeta.md) |  | [optional] [default to undefined]

