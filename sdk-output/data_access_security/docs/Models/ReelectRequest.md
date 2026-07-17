---
id: v1-reelect-request
title: ReelectRequest
pagination_label: ReelectRequest
sidebar_label: ReelectRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ReelectRequest', 'v1ReelectRequest']
slug: /tools/sdk/typescript/data_access_security/models/reelect-request
tags: ['SDK', 'Software Development Kit', 'ReelectRequest', 'v1ReelectRequest']
---

# ReelectRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ownerId** | **(optional)** `string` | The UUID of the identity proposed to be re-elected as the resource owner. | [default to undefined]
**campaignName** | **(optional)** `string` | The name of the campaign or election process for re-electing the owner. | [default to undefined]
**reviewers** | **(optional)** `Array<string>` | A list of UUIDs representing the identities of reviewers participating in the re-election process. | [default to undefined]

