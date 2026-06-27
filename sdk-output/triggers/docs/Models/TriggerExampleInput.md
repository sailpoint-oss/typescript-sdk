---
id: v1-trigger-example-input
title: TriggerExampleInput
pagination_label: TriggerExampleInput
sidebar_label: TriggerExampleInput
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TriggerExampleInput', 'v1TriggerExampleInput']
slug: /tools/sdk/typescript/triggers/models/trigger-example-input
tags: ['SDK', 'Software Development Kit', 'TriggerExampleInput', 'v1TriggerExampleInput']
---

# TriggerExampleInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestId** | `string` | The unique ID of the access request. | [default to undefined]
**requestedFor** | `Array<Accessitemrequestedfordto>` | Identities access was requested for. | [default to undefined]
**requestedItems** | `Array<AccessrequestpreapprovalRequestedItemsInner>` | Details of the access items being requested. | [default to undefined]
**requestedBy** | `Accessitemrequesterdto` |  | [default to undefined]
**requestedItemsStatus** | `Array<AccessrequestpostapprovalRequestedItemsStatusInner>` | Details on the outcome of each access item. | [default to undefined]
**source** | `Accountsourcereference` |  | [default to undefined]
**status** | `string` | The overall status of the collection. | [default to undefined]
**started** | `string` | The date and time when the account collection started. | [default to undefined]
**completed** | `string` | The date and time when the account collection finished. | [default to undefined]
**errors** | `Array<string>` | A list of any accumulated error messages that occurred during provisioning. | [default to undefined]
**warnings** | `Array<string>` | A list of any accumulated warning messages that occurred during provisioning. | [default to undefined]
**stats** | `AccountscollectedforaggregationStats` |  | [default to undefined]
**identity** | `IdentitydeletedIdentity` |  | [default to undefined]
**account** | `Accountv2` |  | [default to undefined]
**changes** | `Array<IdentityattributeschangedChangesInner>` | A list of one or more identity attributes that changed on the identity. | [default to undefined]
**attributes** |  | The attributes of the account. The contents of attributes depends on the account schema for the source. | [default to undefined]
**entitlementCount** | **(optional)** `number` | The number of entitlements associated with this account. | [default to undefined]
**event** | `AccountupdatedEvent` |  | [default to undefined]
**accountChangeTypes** | `Array<string>` | The types of changes that occurred to the account. | [default to undefined]
**singleValueAttributeChanges** | `Array<MachineidentityupdatedSingleValueAttributeChangesInner>` | Details about the single-value attribute changes that occurred. | [default to undefined]
**multiValueAttributeChanges** | `Array<AccountupdatedMultiValueAttributeChangesInner>` | Details about the multi-value attribute changes that occurred to the account. | [default to undefined]
**entitlementChanges** | `Array<AccountupdatedEntitlementChangesInner>` | Details about the entitlement changes that occurred to the account. | [default to undefined]
**campaign** | `CampaigngeneratedCampaign` |  | [default to undefined]
**certification** | `CertificationsignedoffCertification` |  | [default to undefined]
**eventType** | `string` | Type of the event. | [default to undefined]
**machineIdentity** | `MachineidentitydeletedMachineIdentity` |  | [default to undefined]
**machineIdentityChangeTypes** | `Array<string>` | Types of changes that occurred to the machine identity. | [default to undefined]
**userEntitlementChanges** | `MachineidentityupdatedUserEntitlementChanges` |  | [default to undefined]
**ownerChanges** | `MachineidentityupdatedOwnerChanges` |  | [default to undefined]
**trackingNumber** | `string` | The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface. | [default to undefined]
**sources** | `string` | One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated. | [default to undefined]
**action** | **(optional)** `string` | Origin of where the provisioning request came from. | [default to undefined]
**recipient** | `ProvisioningcompletedRecipient` |  | [default to undefined]
**requester** | **(optional)** `ProvisioningcompletedRequester` |  | [default to undefined]
**accountRequests** | `Array<ProvisioningcompletedAccountRequestsInner>` | A list of provisioning instructions to be executed on a per-account basis. The order in which operations are executed may not always be predictable. | [default to undefined]
**fileName** | `string` | A name for the report file. | [default to undefined]
**ownerEmail** | `string` | The email address of the identity that owns the saved search. | [default to undefined]
**ownerName** | `string` | The name of the identity that owns the saved search. | [default to undefined]
**query** | `string` | The search query that was used to generate the report. | [default to undefined]
**searchName** | `string` | The name of the saved search. | [default to undefined]
**searchResults** | `SavedsearchcompleteSearchResults` |  | [default to undefined]
**signedS3Url** | `string` | The Amazon S3 URL to download the report from. | [default to undefined]
**uuid** | **(optional)** `string` | Source unique identifier for the identity. UUID is generated by the source system. | [default to undefined]
**id** | `string` | The unique ID of the source. | [default to undefined]
**nativeIdentifier** | `string` | Unique ID of the account on the source. | [default to undefined]
**sourceId** | `string` | The ID of the source. | [default to undefined]
**sourceName** | `string` | The name of the source. | [default to undefined]
**identityId** | `string` | The ID of the identity that is correlated with this account. | [default to undefined]
**identityName** | `string` | The name of the identity that is correlated with this account. | [default to undefined]
**name** | `string` | The user friendly name of the source. | [default to undefined]
**type** | `string` | The connection type of the source. | [default to undefined]
**created** | `string` | The date and time the status change occurred. | [default to undefined]
**connector** | `string` | The connector type used to connect to the source. | [default to undefined]
**actor** | `SourceupdatedActor` |  | [default to undefined]
**deleted** | `string` | The date and time the source was deleted. | [default to undefined]
**modified** | `string` | The date and time the source was modified. | [default to undefined]
**application** | `VaclusterstatuschangeeventApplication` |  | [default to undefined]
**healthCheckResult** | `VaclusterstatuschangeeventHealthCheckResult` |  | [default to undefined]
**previousHealthCheckResult** | `VaclusterstatuschangeeventPreviousHealthCheckResult` |  | [default to undefined]

