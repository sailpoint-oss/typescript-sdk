---
id: v1-account-v2-recommendation
title: AccountV2Recommendation
pagination_label: AccountV2Recommendation
sidebar_label: AccountV2Recommendation
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountV2Recommendation', 'v1AccountV2Recommendation']
slug: /tools/sdk/typescript/accounts/models/account-v2-recommendation
tags: ['SDK', 'Software Development Kit', 'AccountV2Recommendation', 'v1AccountV2Recommendation']
---

# AccountV2Recommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Recommended type of account. | [default to undefined]
**method** | **(optional)** `string` | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | [default to undefined]
**machineLikelihood** | **(optional)** `number` | Ranked likelihood that this account is a machine account. Present when machine-account recommendation enrichment is available for the tenant. | [default to undefined]
**explanation** | **(optional)** `Array<string>` | Reasons supporting the machine-account recommendation. Never null; an empty array when no explanation is available. | [default to undefined]

