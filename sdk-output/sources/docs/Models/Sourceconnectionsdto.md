---
id: v1-sourceconnectionsdto
title: Sourceconnectionsdto
pagination_label: Sourceconnectionsdto
sidebar_label: Sourceconnectionsdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Sourceconnectionsdto', 'v1Sourceconnectionsdto']
slug: /tools/sdk/typescript/sources/models/sourceconnectionsdto
tags: ['SDK', 'Software Development Kit', 'Sourceconnectionsdto', 'v1Sourceconnectionsdto']
---

# Sourceconnectionsdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityProfiles** | **(optional)** `Array<Identityprofilesconnections>` | The IdentityProfile attached to this source | [default to undefined]
**credentialProfiles** | **(optional)** `Array<string>` | Name of the CredentialProfile attached to this source | [default to undefined]
**sourceAttributes** | **(optional)** `Array<string>` | The attributes attached to this source | [default to undefined]
**mappingProfiles** | **(optional)** `Array<string>` | The profiles attached to this source | [default to undefined]
**dependentCustomTransforms** | **(optional)** `Array<Transformread>` | A list of custom transforms associated with this source. A transform will be considered associated with a source if any attributes of the transform specify the source as the sourceName. | [default to undefined]
**dependentApps** | **(optional)** `Array<Dependantappconnections>` |  | [default to undefined]
**missingDependents** | **(optional)** `Array<Dependantconnectionsmissingdto>` |  | [default to undefined]

