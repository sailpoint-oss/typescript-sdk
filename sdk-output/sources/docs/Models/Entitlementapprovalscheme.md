---
id: v1-entitlementapprovalscheme
title: Entitlementapprovalscheme
pagination_label: Entitlementapprovalscheme
sidebar_label: Entitlementapprovalscheme
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Entitlementapprovalscheme', 'v1Entitlementapprovalscheme']
slug: /tools/sdk/typescript/sources/models/entitlementapprovalscheme
tags: ['SDK', 'Software Development Kit', 'Entitlementapprovalscheme', 'v1Entitlementapprovalscheme']
---

# Entitlementapprovalscheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approverType** | **(optional)** `string` | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field, Workflows are exclusive to other types of approvals and License required.      | [default to undefined]
**approverId** | **(optional)** `string` | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP or WORKFLOW | [default to undefined]

