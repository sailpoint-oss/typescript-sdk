---
id: v1-sp-details
title: SpDetails
pagination_label: SpDetails
sidebar_label: SpDetails
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SpDetails', 'v1SpDetails']
slug: /tools/sdk/typescript/global_tenant_security_settings/models/sp-details
tags: ['SDK', 'Software Development Kit', 'SpDetails', 'v1SpDetails']
---

# SpDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **(optional)** `string` | Federation protocol role | [default to undefined]
**entityId** | **(optional)** `string` | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [default to undefined]
**alias** | **(optional)** `string` | Unique alias used to identify the selected local service provider based on used URL. Used with SP configurations. | [default to undefined]
**callbackUrl** | `string` | The allowed callback URL where users will be redirected to after authentication. Used with SP configurations. | [default to undefined]
**legacyAcsUrl** | **(optional)** `string` | The legacy ACS URL used for SAML authentication. Used with SP configurations. | [default to undefined]

