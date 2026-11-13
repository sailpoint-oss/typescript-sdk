---
id: v1-rolelistfilterdtov2
title: Rolelistfilterdtov2
pagination_label: Rolelistfilterdtov2
sidebar_label: Rolelistfilterdtov2
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Rolelistfilterdtov2', 'v1Rolelistfilterdtov2']
slug: /tools/sdk/typescript/roles/models/rolelistfilterdtov2
tags: ['SDK', 'Software Development Kit', 'Rolelistfilterdtov2', 'v1Rolelistfilterdtov2']
---

# Rolelistfilterdtov2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **(optional)** `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **type**: *eq, in*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, sw, co*  **accessProfile.id**: *eq, in*  **accessProfile.name**: *eq, sw, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* | [default to '']
**ammKeyValues** | **(optional)** `Array<Rolelistfilterdtov2AmmKeyValuesInner>` |  | [default to undefined]

