---
id: v1-mcp-package
title: MCPPackage
pagination_label: MCPPackage
sidebar_label: MCPPackage
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MCPPackage', 'v1MCPPackage']
slug: /tools/sdk/typescript/business_applications/models/mcp-package
tags: ['SDK', 'Software Development Kit', 'MCPPackage', 'v1MCPPackage']
---

# MCPPackage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registryType** | **(optional)** `string` | Package registry that hosts the package. | [default to undefined]
**identifier** | **(optional)** `string` | Package identifier within the registry. | [default to undefined]
**command** | **(optional)** `string` | Command used to launch the package. | [default to undefined]
**args** | **(optional)** `Array<string>` | Arguments passed to the launch command, in the order they are applied. | [default to undefined]

