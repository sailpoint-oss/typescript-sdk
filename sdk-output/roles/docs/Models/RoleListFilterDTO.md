---
id: v1-role-list-filter-dto
title: RoleListFilterDTO
pagination_label: RoleListFilterDTO
sidebar_label: RoleListFilterDTO
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleListFilterDTO', 'v1RoleListFilterDTO']
slug: /tools/sdk/typescript/roles/models/role-list-filter-dto
tags: ['SDK', 'Software Development Kit', 'RoleListFilterDTO', 'v1RoleListFilterDTO']
---

# RoleListFilterDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **(optional)** `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq* | [default to undefined]
**ammKeyValues** | **(optional)** `Array<RoleListFilterDTOAmmKeyValuesInner>` |  | [default to undefined]

