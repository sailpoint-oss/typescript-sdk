---
id: v1-mcp-server-counts
title: MCPServerCounts
pagination_label: MCPServerCounts
sidebar_label: MCPServerCounts
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MCPServerCounts', 'v1MCPServerCounts']
slug: /tools/sdk/typescript/business_applications/models/mcp-server-counts
tags: ['SDK', 'Software Development Kit', 'MCPServerCounts', 'v1MCPServerCounts']
---

# MCPServerCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registryEntries** | **(optional)** `number` | Total number of MCP servers in the tenant. | [default to undefined]
**remote** | **(optional)** `number` | Number of MCP servers that have at least one remote endpoint. | [default to undefined]
**connectedAgentCount** | **(optional)** `number` | Number of distinct AI agents connected to at least one MCP server. An agent connected to several MCP servers is counted once, so this can be less than the sum of each server\'s `connectedAgentCount`. | [default to undefined]

