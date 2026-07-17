---
id: v1-manager-correlation-mapping
title: ManagerCorrelationMapping
pagination_label: ManagerCorrelationMapping
sidebar_label: ManagerCorrelationMapping
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ManagerCorrelationMapping', 'v1ManagerCorrelationMapping']
slug: /tools/sdk/typescript/multi_host_integration/models/manager-correlation-mapping
tags: ['SDK', 'Software Development Kit', 'ManagerCorrelationMapping', 'v1ManagerCorrelationMapping']
---

# ManagerCorrelationMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountAttributeName** | **(optional)** `string` | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager\'s identity. | [default to undefined]
**identityAttributeName** | **(optional)** `string` | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [default to undefined]

