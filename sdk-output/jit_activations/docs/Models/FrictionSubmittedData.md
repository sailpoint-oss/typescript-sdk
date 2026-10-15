---
id: v1-friction-submitted-data
title: FrictionSubmittedData
pagination_label: FrictionSubmittedData
sidebar_label: FrictionSubmittedData
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'FrictionSubmittedData', 'v1FrictionSubmittedData']
slug: /tools/sdk/typescript/jit_activations/models/friction-submitted-data
tags: ['SDK', 'Software Development Kit', 'FrictionSubmittedData', 'v1FrictionSubmittedData']
---

# FrictionSubmittedData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**justification** | **(optional)** `string` | Justification text. | [default to undefined]
**bypass** | **(optional)** `boolean` | Whether this step was bypassed. | [default to false]
**ticketId** | **(optional)** `string` | Ticketing system identifier. | [default to undefined]
**isValidTicket** | **(optional)** `boolean` | Whether the ticket is valid. Set by the server. | [readonly] [default to false]
**attempts** | **(optional)** `number` | Count of failed submissions for this step. The server sets this value and ignores it on PATCH. | [readonly] [default to undefined]
**reauthSuccessful** | **(optional)** `boolean` | Whether reauthentication succeeded. | [default to false]
**reauthDate** | **(optional)** `string` | Time of reauthentication. | [default to undefined]
**integrationDisabled** | **(optional)** `boolean` | Whether the ticketing integration is disabled. Set by the server. | [readonly] [default to false]

