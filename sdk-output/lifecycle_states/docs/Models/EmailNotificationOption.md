---
id: v1-email-notification-option
title: EmailNotificationOption
pagination_label: EmailNotificationOption
sidebar_label: EmailNotificationOption
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'EmailNotificationOption', 'v1EmailNotificationOption']
slug: /tools/sdk/typescript/lifecycle_states/models/email-notification-option
tags: ['SDK', 'Software Development Kit', 'EmailNotificationOption', 'v1EmailNotificationOption']
---

# EmailNotificationOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notifyManagers** | **(optional)** `boolean` | If true, then the manager is notified of the lifecycle state change. | [default to false]
**notifyAllAdmins** | **(optional)** `boolean` | If true, then all the admins are notified of the lifecycle state change. | [default to false]
**notifySpecificUsers** | **(optional)** `boolean` | If true, then the users specified in \"emailAddressList\" below are notified of lifecycle state change. | [default to false]
**emailAddressList** | **(optional)** `Array<string>` | List of user email addresses. If \"notifySpecificUsers\" option is true, then these users are notified of lifecycle state change. | [default to undefined]

