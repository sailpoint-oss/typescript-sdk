---
id: v1-machine-identity-aggregation-request
title: MachineIdentityAggregationRequest
pagination_label: MachineIdentityAggregationRequest
sidebar_label: MachineIdentityAggregationRequest
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineIdentityAggregationRequest', 'v1MachineIdentityAggregationRequest']
slug: /tools/sdk/typescript/machine_identities/models/machine-identity-aggregation-request
tags: ['SDK', 'Software Development Kit', 'MachineIdentityAggregationRequest', 'v1MachineIdentityAggregationRequest']
---

# MachineIdentityAggregationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasetIds** | `Array<string>` | List of dataset Ids to aggregate machine identities | [default to undefined]
**disableOptimization** | **(optional)** `boolean` | Flag to disable optimization for the aggregation. Defaults to false when not provided. When set to true, it disables aggregation optimizations and may increase processing time. | [default to false]

