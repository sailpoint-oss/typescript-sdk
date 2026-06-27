---
id: v1-provisioningconfig
title: Provisioningconfig
pagination_label: Provisioningconfig
sidebar_label: Provisioningconfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Provisioningconfig', 'v1Provisioningconfig']
slug: /tools/sdk/typescript/service_desk_integration/models/provisioningconfig
tags: ['SDK', 'Software Development Kit', 'Provisioningconfig', 'v1Provisioningconfig']
---

# Provisioningconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**universalManager** | **(optional)** `boolean` | Specifies whether this configuration is used to manage provisioning requests for all sources from the org.  If true, no managedResourceRefs are allowed. | [readonly] [default to false]
**managedResourceRefs** | **(optional)** `Array<Servicedesksource>` | References to sources for the Service Desk integration template.  May only be specified if universalManager is false. | [default to undefined]
**planInitializerScript** | **(optional)** `ProvisioningconfigPlanInitializerScript` |  | [default to undefined]
**noProvisioningRequests** | **(optional)** `boolean` | Name of an attribute that when true disables the saving of ProvisioningRequest objects whenever plans are sent through this integration. | [default to false]
**provisioningRequestExpiration** | **(optional)** `number` | When saving pending requests is enabled, this defines the number of hours the request is allowed to live before it is considered expired and no longer affects plan compilation. | [default to undefined]

