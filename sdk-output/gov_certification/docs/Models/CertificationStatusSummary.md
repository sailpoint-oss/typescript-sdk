---
id: v1-certification-status-summary
title: CertificationStatusSummary
pagination_label: CertificationStatusSummary
sidebar_label: CertificationStatusSummary
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CertificationStatusSummary', 'v1CertificationStatusSummary']
slug: /tools/sdk/typescript/gov_certification/models/certification-status-summary
tags: ['SDK', 'Software Development Kit', 'CertificationStatusSummary', 'v1CertificationStatusSummary']
---

# CertificationStatusSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeCertifications** | **(optional)** `number` | The number of active certifications | [default to undefined]
**overdueCertifications** | **(optional)** `number` | The number of certifications passed the due date | [default to undefined]
**maximumDaysOverdue** | **(optional)** `number` | The maximum number of days past due the most overdue certification is | [default to undefined]
**minimumDaysLeftToComplete** | **(optional)** `number` | The closest number of days to completion | [default to undefined]
**completedDecisionsForActiveCerts** | **(optional)** `number` | The number of of decisions that have been made | [default to undefined]
**pendingDecisionsForActiveCerts** | **(optional)** `number` | The number of decisions that are pending | [default to undefined]

