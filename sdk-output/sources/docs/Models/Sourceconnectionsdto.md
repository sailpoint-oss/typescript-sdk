---
id: v1-sourceconnectionsdto-v1
title: SourceconnectionsdtoV1
pagination_label: SourceconnectionsdtoV1
sidebar_label: SourceconnectionsdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SourceconnectionsdtoV1', 'v1SourceconnectionsdtoV1']
slug: /tools/sdk/typescript/sources/models/sourceconnectionsdto-v1
tags: ['SDK', 'Software Development Kit', 'SourceconnectionsdtoV1', 'v1SourceconnectionsdtoV1']
---

# SourceconnectionsdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityProfiles** | **(optional)** **Array&lt;IdentityprofilesconnectionsV1&gt;** | The IdentityProfile attached to this source | [default to undefined]
**credentialProfiles** | **(optional)** **Array&lt;string&gt;** | Name of the CredentialProfile attached to this source | [default to undefined]
**sourceAttributes** | **(optional)** **Array&lt;string&gt;** | The attributes attached to this source | [default to undefined]
**mappingProfiles** | **(optional)** **Array&lt;string&gt;** | The profiles attached to this source | [default to undefined]
**dependentCustomTransforms** | **(optional)** **Array&lt;TransformreadV1&gt;** | A list of custom transforms associated with this source. A transform will be considered associated with a source if any attributes of the transform specify the source as the sourceName. | [default to undefined]
**dependentApps** | **(optional)** **Array&lt;DependantappconnectionsV1&gt;** |  | [default to undefined]
**missingDependents** | **(optional)** **Array&lt;DependantconnectionsmissingdtoV1&gt;** |  | [default to undefined]

