---
id: v1-access-request-dynamic-approver-requested-items-inner-form
title: AccessRequestDynamicApproverRequestedItemsInnerForm
pagination_label: AccessRequestDynamicApproverRequestedItemsInnerForm
sidebar_label: AccessRequestDynamicApproverRequestedItemsInnerForm
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessRequestDynamicApproverRequestedItemsInnerForm', 'v1AccessRequestDynamicApproverRequestedItemsInnerForm']
slug: /tools/sdk/typescript/triggers/models/access-request-dynamic-approver-requested-items-inner-form
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApproverRequestedItemsInnerForm', 'v1AccessRequestDynamicApproverRequestedItemsInnerForm']
---

# AccessRequestDynamicApproverRequestedItemsInnerForm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formDefinitionId** | **(optional)** `string` | ID of the form definition that was completed for this item. | [default to undefined]
**formInstanceId** | **(optional)** `string` | ID of the completed form instance. | [default to undefined]
**formData** | **(optional)**  | Key-value pairs (form field technical name to value) from the completed form instance. | [default to undefined]
**formElements** | **(optional)** `Array<{ [key: string]: any; }>` | Optional form element definitions when present. Shape follows the form instance payload. | [default to undefined]
**formConditions** | **(optional)** `Array<{ [key: string]: any; }>` | Optional conditional display rules when present. Shape follows the form instance payload; do not depend on a fixed condition schema in this API. | [default to undefined]
**formInstanceInputs** | **(optional)**  | Optional inputs passed into the form instance when present. Copied from the form instance payload as-is. | [default to undefined]

