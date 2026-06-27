---
id: v1-servicedeskintegrationdto
title: Servicedeskintegrationdto
pagination_label: Servicedeskintegrationdto
sidebar_label: Servicedeskintegrationdto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Servicedeskintegrationdto', 'v1Servicedeskintegrationdto']
slug: /tools/sdk/typescript/service_desk_integration/models/servicedeskintegrationdto
tags: ['SDK', 'Software Development Kit', 'Servicedeskintegrationdto', 'v1Servicedeskintegrationdto']
---

# Servicedeskintegrationdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier for the Service Desk integration | [default to undefined]
**name** | `string` | Service Desk integration\'s name. The name must be unique. | [default to undefined]
**created** | **(optional)** `string` | The date and time the Service Desk integration was created | [default to undefined]
**modified** | **(optional)** `string` | The date and time the Service Desk integration was last modified | [default to undefined]
**description** | `string` | Service Desk integration\'s description. | [default to undefined]
**type** | `string` | Service Desk integration types:  - ServiceNowSDIM - ServiceNow  | [default to 'ServiceNowSDIM']
**ownerRef** | **(optional)** `Ownerdto` |  | [default to undefined]
**clusterRef** | **(optional)** `Sourceclusterdto` |  | [default to undefined]
**cluster** | **(optional)** `string` | Cluster ID for the Service Desk integration (replaced by clusterRef, retained for backward compatibility). | [default to undefined]
**managedSources** | **(optional)** `Array<string>` | Source IDs for the Service Desk integration (replaced by provisioningConfig.managedSResourceRefs, but retained here for backward compatibility). | [default to undefined]
**provisioningConfig** | **(optional)** `Provisioningconfig` |  | [default to undefined]
**attributes** |  | Service Desk integration\'s attributes. Validation constraints enforced by the implementation. | [default to undefined]
**beforeProvisioningRule** | **(optional)** `Beforeprovisioningruledto` |  | [default to undefined]

