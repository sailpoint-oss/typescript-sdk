---
id: v1-source-entitlement-approval-scheme
title: SourceEntitlementApprovalScheme
pagination_label: SourceEntitlementApprovalScheme
sidebar_label: SourceEntitlementApprovalScheme
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SourceEntitlementApprovalScheme', 'v1SourceEntitlementApprovalScheme']
slug: /tools/sdk/typescript/sources/models/source-entitlement-approval-scheme
tags: ['SDK', 'Software Development Kit', 'SourceEntitlementApprovalScheme', 'v1SourceEntitlementApprovalScheme']
---

# SourceEntitlementApprovalScheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approverType** | **(optional)** `string` | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW** is not supported in source-level entitlement request configuration. Use the entitlement-level [Replace entitlement request config](https://developer.sailpoint.com/docs/api/put-entitlement-request-config-v-1) endpoint to configure a workflow approver. A source-level request that contains `WORKFLOW` is rejected with a 400. | [default to undefined]
**approverId** | **(optional)** `string` | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP | [default to undefined]

