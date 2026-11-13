---
id: v1-ui-plugin-asset-bundle
title: UIPluginAssetBundle
pagination_label: UIPluginAssetBundle
sidebar_label: UIPluginAssetBundle
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'UIPluginAssetBundle', 'v1UIPluginAssetBundle']
slug: /tools/sdk/typescript/ui_plugins/models/ui-plugin-asset-bundle
tags: ['SDK', 'Software Development Kit', 'UIPluginAssetBundle', 'v1UIPluginAssetBundle']
---

# UIPluginAssetBundle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetBundleId** | `string` | Unique identifier of the asset bundle | [default to undefined]
**pluginInstanceId** | `string` | Plugin instance this bundle belongs to | [default to undefined]
**assets** | `Array<AssetFileEntry>` |  | [default to undefined]
**assetBasePath** | `string` | S3 key prefix where the bundle\'s files are stored | [default to undefined]
**cleanupAfter** | **(optional)** `string` | ISO 8601 timestamp after which S3 assets may be cleaned up; null/omitted if active | [default to undefined]
**created** | `string` | ISO 8601 creation timestamp | [default to undefined]

