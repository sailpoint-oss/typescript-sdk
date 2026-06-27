---
id: v1-correlatedgovernanceevent
title: Correlatedgovernanceevent
pagination_label: Correlatedgovernanceevent
sidebar_label: Correlatedgovernanceevent
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Correlatedgovernanceevent', 'v1Correlatedgovernanceevent']
slug: /tools/sdk/typescript/identity_history/models/correlatedgovernanceevent
tags: ['SDK', 'Software Development Kit', 'Correlatedgovernanceevent', 'v1Correlatedgovernanceevent']
---

# Correlatedgovernanceevent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The name of the governance event, such as the certification name or access request ID. | [default to undefined]
**dateTime** | **(optional)** `string` | The date that the certification or access request was completed. | [default to undefined]
**type** | **(optional)** `string` | The type of governance event. | [default to undefined]
**governanceId** | **(optional)** `string` | The ID of the instance that caused the event - either the certification ID or access request ID. | [default to undefined]
**owners** | **(optional)** `Array<Certifierresponse>` | The owners of the governance event (the certifiers or approvers) | [default to undefined]
**reviewers** | **(optional)** `Array<Certifierresponse>` | The owners of the governance event (the certifiers or approvers), this field should be preferred over owners | [default to undefined]
**decisionMaker** | **(optional)** `Certifierresponse` |  | [default to undefined]

