---
id: v1-reminderescalationtenantconfig
title: Reminderescalationtenantconfig
pagination_label: Reminderescalationtenantconfig
sidebar_label: Reminderescalationtenantconfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Reminderescalationtenantconfig', 'v1Reminderescalationtenantconfig']
slug: /tools/sdk/typescript/reminder_escalations/models/reminderescalationtenantconfig
tags: ['SDK', 'Software Development Kit', 'Reminderescalationtenantconfig', 'v1Reminderescalationtenantconfig']
---

# Reminderescalationtenantconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | `string` | Tenant id taken from the authenticated request. | [readonly] [default to undefined]
**domainObjectType** | `string` | Domain object type this default applies to. | [default to undefined]
**rules** | `Reminderescalationruleset` |  | [default to undefined]
**schemaVersion** | `number` | Schema version assigned by the service. Clients do not set this field. | [readonly] [default to undefined]
**revision** | `number` | Optimistic-lock counter. Echo this value on update. | [default to undefined]
**createdAt** | `string` | When this tenant default was created. | [readonly] [default to undefined]
**updatedAt** | `string` | When this tenant default was last updated. | [readonly] [default to undefined]

