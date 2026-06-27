---
id: v1-emailnotificationoption
title: Emailnotificationoption
pagination_label: Emailnotificationoption
sidebar_label: Emailnotificationoption
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Emailnotificationoption', 'v1Emailnotificationoption']
slug: /tools/sdk/typescript/lifecycle_states/models/emailnotificationoption
tags: ['SDK', 'Software Development Kit', 'Emailnotificationoption', 'v1Emailnotificationoption']
---

# Emailnotificationoption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notifyManagers** | **(optional)** `boolean` | If true, then the manager is notified of the lifecycle state change. | [default to false]
**notifyAllAdmins** | **(optional)** `boolean` | If true, then all the admins are notified of the lifecycle state change. | [default to false]
**notifySpecificUsers** | **(optional)** `boolean` | If true, then the users specified in \"emailAddressList\" below are notified of lifecycle state change. | [default to false]
**emailAddressList** | **(optional)** `Array<string>` | List of user email addresses. If \"notifySpecificUsers\" option is true, then these users are notified of lifecycle state change. | [default to undefined]

