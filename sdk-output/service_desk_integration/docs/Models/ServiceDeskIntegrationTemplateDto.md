---
id: v1-service-desk-integration-template-dto
title: ServiceDeskIntegrationTemplateDto
pagination_label: ServiceDeskIntegrationTemplateDto
sidebar_label: ServiceDeskIntegrationTemplateDto
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ServiceDeskIntegrationTemplateDto', 'v1ServiceDeskIntegrationTemplateDto']
slug: /tools/sdk/typescript/service_desk_integration/models/service-desk-integration-template-dto
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationTemplateDto', 'v1ServiceDeskIntegrationTemplateDto']
---

# ServiceDeskIntegrationTemplateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**type** | `string` | The \'type\' property specifies the type of the Service Desk integration template. | [default to 'Web Service SDIM']
**attributes** |  | The \'attributes\' property value is a map of attributes available for integrations using this Service Desk integration template. | [default to undefined]
**provisioningConfig** | `ProvisioningConfig` |  | [default to undefined]

