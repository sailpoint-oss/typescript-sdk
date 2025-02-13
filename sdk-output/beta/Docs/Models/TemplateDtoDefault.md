# TemplateDtoDefaultBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The key of the default template | [optional] [default to undefined]
**name** | **string** | The name of the default template | [optional] [default to undefined]
**medium** | **string** | The message medium. More mediums may be added in the future. | [optional] [default to undefined]
**locale** | **string** | The locale for the message text, a BCP 47 language tag. | [optional] [default to undefined]
**subject** | **string** | The subject of the default template | [optional] [default to undefined]
**header** | **string** | The header value is now located within the body field. If included with non-null values, will result in a 400. | [optional] [default to undefined]
**body** | **string** | The body of the default template | [optional] [default to undefined]
**footer** | **string** | The footer value is now located within the body field. If included with non-null values, will result in a 400. | [optional] [default to undefined]
**from** | **string** | The \&quot;From:\&quot; address of the default template | [optional] [default to undefined]
**replyTo** | **string** | The \&quot;Reply To\&quot; field of the default template | [optional] [default to undefined]
**description** | **string** | The description of the default template | [optional] [default to undefined]
**slackTemplate** | [**TemplateSlackBeta**](TemplateSlackBeta.md) |  | [optional] [default to undefined]
**teamsTemplate** | [**TemplateTeamsBeta**](TemplateTeamsBeta.md) |  | [optional] [default to undefined]



## Enum: TemplateDtoDefaultBetaMediumBeta


* `Email` (value: `'EMAIL'`)

* `Phone` (value: `'PHONE'`)

* `Sms` (value: `'SMS'`)

* `Slack` (value: `'SLACK'`)

* `Teams` (value: `'TEAMS'`)



