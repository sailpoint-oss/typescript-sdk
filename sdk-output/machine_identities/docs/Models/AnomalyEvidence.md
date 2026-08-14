---
id: v1-anomaly-evidence
title: AnomalyEvidence
pagination_label: AnomalyEvidence
sidebar_label: AnomalyEvidence
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AnomalyEvidence', 'v1AnomalyEvidence']
slug: /tools/sdk/typescript/machine_identities/models/anomaly-evidence
tags: ['SDK', 'Software Development Kit', 'AnomalyEvidence', 'v1AnomalyEvidence']
---

# AnomalyEvidence

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **(optional)** `string` | Evidence source system. | [default to undefined]
**timestamp** | **(optional)** `AnomalyEvidenceTimestamp` |  | [default to undefined]
**agentAttributeType** | **(optional)** `string` | Attribute type captured for SENTINEL detections; null for SIEM detections. | [default to undefined]
**agentAttributeValue** | **(optional)** `string` | Attribute value captured for SENTINEL detections; null for SIEM detections. | [default to undefined]
**baseline** | **(optional)** `AnomalyBaseline` | Peer-group baseline for SIEM detections; null for SENTINEL detections. | [default to undefined]

