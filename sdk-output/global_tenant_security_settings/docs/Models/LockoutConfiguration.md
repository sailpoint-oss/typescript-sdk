---
id: v1-lockout-configuration
title: LockoutConfiguration
pagination_label: LockoutConfiguration
sidebar_label: LockoutConfiguration
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'LockoutConfiguration', 'v1LockoutConfiguration']
slug: /tools/sdk/typescript/global_tenant_security_settings/models/lockout-configuration
tags: ['SDK', 'Software Development Kit', 'LockoutConfiguration', 'v1LockoutConfiguration']
---

# LockoutConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximumAttempts** | **(optional)** `number` | The maximum attempts allowed before lockout occurs. | [default to undefined]
**lockoutDuration** | **(optional)** `number` | The total time in minutes a user will be locked out. | [default to undefined]
**lockoutWindow** | **(optional)** `number` | A rolling window where authentication attempts in a series count towards the maximum before lockout occurs. | [default to undefined]

