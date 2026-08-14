---
id: v1-unsanctioned-application-anomaly-summary
title: UnsanctionedApplicationAnomalySummary
pagination_label: UnsanctionedApplicationAnomalySummary
sidebar_label: UnsanctionedApplicationAnomalySummary
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'UnsanctionedApplicationAnomalySummary', 'v1UnsanctionedApplicationAnomalySummary']
slug: /tools/sdk/typescript/machine_identities/models/unsanctioned-application-anomaly-summary
tags: ['SDK', 'Software Development Kit', 'UnsanctionedApplicationAnomalySummary', 'v1UnsanctionedApplicationAnomalySummary']
---

# UnsanctionedApplicationAnomalySummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anomalyType** | **(optional)** `string` | The anomaly type these counts describe. Always unsanctioned_app for this endpoint. | [default to undefined]
**agentCount** | **(optional)** `number` | Number of distinct agents with at least one unsanctioned-application anomaly. | [default to undefined]
**userCount** | **(optional)** `number` | Number of distinct owners (users) associated with unsanctioned-application anomalies. | [default to undefined]
**eventCount** | **(optional)** `number` | Total number of unsanctioned-application anomaly records. | [default to undefined]

