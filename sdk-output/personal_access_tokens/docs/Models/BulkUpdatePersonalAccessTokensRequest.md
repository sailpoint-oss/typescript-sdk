---
id: v1-bulk-update-personal-access-tokens-request
title: BulkUpdatePersonalAccessTokensRequest
pagination_label: BulkUpdatePersonalAccessTokensRequest
sidebar_label: BulkUpdatePersonalAccessTokensRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'BulkUpdatePersonalAccessTokensRequest', 'v1BulkUpdatePersonalAccessTokensRequest']
slug: /tools/sdk/typescript/personal_access_tokens/models/bulk-update-personal-access-tokens-request
tags: ['SDK', 'Software Development Kit', 'BulkUpdatePersonalAccessTokensRequest', 'v1BulkUpdatePersonalAccessTokensRequest']
---

# BulkUpdatePersonalAccessTokensRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | `Array<string>` | The IDs of the personal access tokens to update. All IDs must reference personal access tokens that exist in the current tenant. Duplicate and blank values are not allowed. | [default to undefined]
**patch** | `Array<JsonPatchOperation>` | A single [JSON Patch](https://tools.ietf.org/html/rfc6902) document that is applied identically to every personal access token referenced in `ids`. Only the following paths are allowed for bulk updates: * `/expirationDate` - Set (`replace`) or clear (`remove`) the token\'s expiration. * `/userAwareTokenNeverExpires` - Explicit acknowledgment required when clearing `expirationDate`. Any other path (for example `/name` or `/scope`) results in a `400` response. | [default to undefined]

