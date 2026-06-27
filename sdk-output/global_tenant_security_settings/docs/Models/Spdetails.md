---
id: v1-spdetails
title: Spdetails
pagination_label: Spdetails
sidebar_label: Spdetails
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Spdetails', 'v1Spdetails']
slug: /tools/sdk/typescript/global_tenant_security_settings/models/spdetails
tags: ['SDK', 'Software Development Kit', 'Spdetails', 'v1Spdetails']
---

# Spdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **(optional)** `string` | Federation protocol role | [default to undefined]
**entityId** | **(optional)** `string` | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [default to undefined]
**alias** | **(optional)** `string` | Unique alias used to identify the selected local service provider based on used URL. Used with SP configurations. | [default to undefined]
**callbackUrl** | `string` | The allowed callback URL where users will be redirected to after authentication. Used with SP configurations. | [default to undefined]
**legacyAcsUrl** | **(optional)** `string` | The legacy ACS URL used for SAML authentication. Used with SP configurations. | [default to undefined]

