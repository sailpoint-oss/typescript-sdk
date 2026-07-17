---
id: v1-domain-status-dto
title: DomainStatusDto
pagination_label: DomainStatusDto
sidebar_label: DomainStatusDto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'DomainStatusDto', 'v1DomainStatusDto']
slug: /tools/sdk/typescript/notifications/models/domain-status-dto
tags: ['SDK', 'Software Development Kit', 'DomainStatusDto', 'v1DomainStatusDto']
---

# DomainStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | New UUID associated with domain to be verified | [default to undefined]
**domain** | **(optional)** `string` | A domain address | [default to undefined]
**dkimEnabled** | **(optional)** `boolean` | DKIM is enabled for this domain | [default to false]
**dkimTokens** | **(optional)** `Array<string>` | DKIM tokens required for authentication | [default to undefined]
**dkimVerificationStatus** | **(optional)** `string` | Status of DKIM authentication | [default to undefined]
**region** | **(optional)** `string` | The AWS SES region the domain is associated with | [default to undefined]

