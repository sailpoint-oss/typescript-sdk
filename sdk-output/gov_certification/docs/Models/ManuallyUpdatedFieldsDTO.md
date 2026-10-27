---
id: v1-manually-updated-fields-dto
title: ManuallyUpdatedFieldsDTO
pagination_label: ManuallyUpdatedFieldsDTO
sidebar_label: ManuallyUpdatedFieldsDTO
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ManuallyUpdatedFieldsDTO', 'v1ManuallyUpdatedFieldsDTO']
slug: /tools/sdk/typescript/gov_certification/models/manually-updated-fields-dto
tags: ['SDK', 'Software Development Kit', 'ManuallyUpdatedFieldsDTO', 'v1ManuallyUpdatedFieldsDTO']
---

# ManuallyUpdatedFieldsDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **(optional)** `boolean` | True if the entitlements name was updated manually via entitlement import csv or patch endpoint. False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/docs/api/get-entitlement-v-1) > `name` property. | [default to false]
**description** | **(optional)** `boolean` | True if the entitlement description was updated manually via entitlement import csv or patch endpoint. False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/docs/api/get-entitlement-v-1) > `description` property. | [default to false]

