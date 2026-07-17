---
id: v1-service-desk-integration-dto
title: ServiceDeskIntegrationDto
pagination_label: ServiceDeskIntegrationDto
sidebar_label: ServiceDeskIntegrationDto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ServiceDeskIntegrationDto', 'v1ServiceDeskIntegrationDto']
slug: /tools/sdk/typescript/sim_integrations/models/service-desk-integration-dto
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationDto', 'v1ServiceDeskIntegrationDto']
---

# ServiceDeskIntegrationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier for the Service Desk integration | [default to undefined]
**name** | `string` | Service Desk integration\'s name. The name must be unique. | [default to undefined]
**created** | **(optional)** `string` | The date and time the Service Desk integration was created | [default to undefined]
**modified** | **(optional)** `string` | The date and time the Service Desk integration was last modified | [default to undefined]
**description** | `string` | Service Desk integration\'s description. | [default to undefined]
**type** | `string` | Service Desk integration types:  - ServiceNowSDIM - ServiceNow  | [default to 'ServiceNowSDIM']
**ownerRef** | **(optional)** `OwnerDto` |  | [default to undefined]
**clusterRef** | **(optional)** `SourceClusterDto` |  | [default to undefined]
**cluster** | **(optional)** `string` | Cluster ID for the Service Desk integration (replaced by clusterRef, retained for backward compatibility). | [default to undefined]
**managedSources** | **(optional)** `Array<string>` | Source IDs for the Service Desk integration (replaced by provisioningConfig.managedSResourceRefs, but retained here for backward compatibility). | [default to undefined]
**provisioningConfig** | **(optional)** `ProvisioningConfig` |  | [default to undefined]
**attributes** |  | Service Desk integration\'s attributes. Validation constraints enforced by the implementation. | [default to undefined]
**beforeProvisioningRule** | **(optional)** `BeforeProvisioningRuleDto` |  | [default to undefined]

