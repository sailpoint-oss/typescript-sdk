---
id: v1-send-test-notification-request-dto
title: SendTestNotificationRequestDto
pagination_label: SendTestNotificationRequestDto
sidebar_label: SendTestNotificationRequestDto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SendTestNotificationRequestDto', 'v1SendTestNotificationRequestDto']
slug: /tools/sdk/typescript/notifications/models/send-test-notification-request-dto
tags: ['SDK', 'Software Development Kit', 'SendTestNotificationRequestDto', 'v1SendTestNotificationRequestDto']
---

# SendTestNotificationRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | The template notification key. | [default to undefined]
**medium** | **(optional)** `string` | The notification medium. Has to be one of the following enum values. | [default to undefined]
**locale** | **(optional)** `string` | The locale for the message text. | [default to undefined]
**context** | **(optional)** `object` | A Json object that denotes the context specific to the template. | [default to undefined]
**recipientEmailList** | **(optional)** `Array<string>` | A list of override recipient email addresses for the test notification. | [default to undefined]
**carbonCopy** | **(optional)** `Array<string>` | A list of CC email addresses for the test notification. | [default to undefined]
**blindCarbonCopy** | **(optional)** `Array<string>` | A list of BCC email addresses for the test notification. | [default to undefined]

