# TemplateDtoBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The key of the template | [default to undefined]
**name** | **string** | The name of the Task Manager Subscription | [optional] [default to undefined]
**medium** | **string** | The message medium. More mediums may be added in the future. | [default to undefined]
**locale** | **string** | The locale for the message text, a BCP 47 language tag. | [default to undefined]
**subject** | **string** | The subject line in the template | [optional] [default to undefined]
**header** | **string** | The header value is now located within the body field. If included with non-null values, will result in a 400. | [optional] [default to undefined]
**body** | **string** | The body in the template | [optional] [default to undefined]
**footer** | **string** | The footer value is now located within the body field. If included with non-null values, will result in a 400. | [optional] [default to undefined]
**from** | **string** | The \&quot;From:\&quot; address in the template | [optional] [default to undefined]
**replyTo** | **string** | The \&quot;Reply To\&quot; line in the template | [optional] [default to undefined]
**description** | **string** | The description in the template | [optional] [default to undefined]
**id** | **string** | This is auto-generated. | [optional] [default to undefined]
**created** | **string** | The time when this template is created. This is auto-generated. | [optional] [default to undefined]
**modified** | **string** | The time when this template was last modified. This is auto-generated. | [optional] [default to undefined]
**slackTemplate** | **string** |  | [optional] [default to undefined]
**teamsTemplate** | **string** |  | [optional] [default to undefined]



## Enum: TemplateDtoBetaMediumBeta


* `Email` (value: `'EMAIL'`)

* `Phone` (value: `'PHONE'`)

* `Sms` (value: `'SMS'`)

* `Slack` (value: `'SLACK'`)

* `Teams` (value: `'TEAMS'`)



