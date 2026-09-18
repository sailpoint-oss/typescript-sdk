---
id: v1-identitycollectordependenciesconflicterror
title: Identitycollectordependenciesconflicterror
pagination_label: Identitycollectordependenciesconflicterror
sidebar_label: Identitycollectordependenciesconflicterror
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Identitycollectordependenciesconflicterror', 'v1Identitycollectordependenciesconflicterror']
slug: /tools/sdk/typescript/data_access_security/models/identitycollectordependenciesconflicterror
tags: ['SDK', 'Software Development Kit', 'Identitycollectordependenciesconflicterror', 'v1Identitycollectordependenciesconflicterror']
---

# Identitycollectordependenciesconflicterror

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailCode** | **(optional)** `string` | Fine-grained error code providing more detail of the error. | [default to undefined]
**trackingId** | **(optional)** `string` | Unique tracking id for the error. | [default to undefined]
**messages** | **(optional)** `Array<IdentitycollectordependenciesconflicterrorMessagesInner>` | Generic localized reason for error. | [default to undefined]
**dependencies** | **(optional)** `Array<Identitycollectordependency>` | Dependent objects blocking deletion. At most three items are returned. | [default to undefined]
**extendedDependenciesCount** | **(optional)** `number` | Number of additional dependent objects not included in `dependencies`. | [default to undefined]

