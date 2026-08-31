---
id: v1-accessprofilemetadatabulkupdatebyfilterrequest
title: Accessprofilemetadatabulkupdatebyfilterrequest
pagination_label: Accessprofilemetadatabulkupdatebyfilterrequest
sidebar_label: Accessprofilemetadatabulkupdatebyfilterrequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accessprofilemetadatabulkupdatebyfilterrequest', 'v1Accessprofilemetadatabulkupdatebyfilterrequest']
slug: /tools/sdk/typescript/access_profiles/models/accessprofilemetadatabulkupdatebyfilterrequest
tags: ['SDK', 'Software Development Kit', 'Accessprofilemetadatabulkupdatebyfilterrequest', 'v1Accessprofilemetadatabulkupdatebyfilterrequest']
---

# Accessprofilemetadatabulkupdatebyfilterrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or* | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | `string` | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | [default to undefined]
**values** | `Array<AccessprofilemetadatabulkupdatebyidrequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

