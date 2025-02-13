# ExportPayloadBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Optional user defined description/name for export job. | [optional] [default to undefined]
**excludeTypes** | **Array&lt;string&gt;** | Object type names to be excluded from an sp-config export command. | [optional] [default to undefined]
**includeTypes** | **Array&lt;string&gt;** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] [default to undefined]
**objectOptions** | [**{ [key: string]: ObjectExportImportOptionsBeta; }**](ObjectExportImportOptionsBeta.md) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] [default to undefined]



## Enum: Array&lt;ExportPayloadBetaExcludeTypesBeta&gt;


* `AccessProfile` (value: `'ACCESS_PROFILE'`)

* `AccessRequestConfig` (value: `'ACCESS_REQUEST_CONFIG'`)

* `AttrSyncSourceConfig` (value: `'ATTR_SYNC_SOURCE_CONFIG'`)

* `AuthOrg` (value: `'AUTH_ORG'`)

* `CampaignFilter` (value: `'CAMPAIGN_FILTER'`)

* `FormDefinition` (value: `'FORM_DEFINITION'`)

* `GovernanceGroup` (value: `'GOVERNANCE_GROUP'`)

* `IdentityObjectConfig` (value: `'IDENTITY_OBJECT_CONFIG'`)

* `IdentityProfile` (value: `'IDENTITY_PROFILE'`)

* `LifecycleState` (value: `'LIFECYCLE_STATE'`)

* `NotificationTemplate` (value: `'NOTIFICATION_TEMPLATE'`)

* `PasswordPolicy` (value: `'PASSWORD_POLICY'`)

* `PasswordSyncGroup` (value: `'PASSWORD_SYNC_GROUP'`)

* `PublicIdentitiesConfig` (value: `'PUBLIC_IDENTITIES_CONFIG'`)

* `Role` (value: `'ROLE'`)

* `Rule` (value: `'RULE'`)

* `Segment` (value: `'SEGMENT'`)

* `ServiceDeskIntegration` (value: `'SERVICE_DESK_INTEGRATION'`)

* `SodPolicy` (value: `'SOD_POLICY'`)

* `Source` (value: `'SOURCE'`)

* `Tag` (value: `'TAG'`)

* `Transform` (value: `'TRANSFORM'`)

* `TriggerSubscription` (value: `'TRIGGER_SUBSCRIPTION'`)

* `Workflow` (value: `'WORKFLOW'`)





## Enum: Array&lt;ExportPayloadBetaIncludeTypesBeta&gt;


* `AccessProfile` (value: `'ACCESS_PROFILE'`)

* `AccessRequestConfig` (value: `'ACCESS_REQUEST_CONFIG'`)

* `AttrSyncSourceConfig` (value: `'ATTR_SYNC_SOURCE_CONFIG'`)

* `AuthOrg` (value: `'AUTH_ORG'`)

* `CampaignFilter` (value: `'CAMPAIGN_FILTER'`)

* `FormDefinition` (value: `'FORM_DEFINITION'`)

* `GovernanceGroup` (value: `'GOVERNANCE_GROUP'`)

* `IdentityObjectConfig` (value: `'IDENTITY_OBJECT_CONFIG'`)

* `IdentityProfile` (value: `'IDENTITY_PROFILE'`)

* `LifecycleState` (value: `'LIFECYCLE_STATE'`)

* `NotificationTemplate` (value: `'NOTIFICATION_TEMPLATE'`)

* `PasswordPolicy` (value: `'PASSWORD_POLICY'`)

* `PasswordSyncGroup` (value: `'PASSWORD_SYNC_GROUP'`)

* `PublicIdentitiesConfig` (value: `'PUBLIC_IDENTITIES_CONFIG'`)

* `Role` (value: `'ROLE'`)

* `Rule` (value: `'RULE'`)

* `Segment` (value: `'SEGMENT'`)

* `ServiceDeskIntegration` (value: `'SERVICE_DESK_INTEGRATION'`)

* `SodPolicy` (value: `'SOD_POLICY'`)

* `Source` (value: `'SOURCE'`)

* `Tag` (value: `'TAG'`)

* `Transform` (value: `'TRANSFORM'`)

* `TriggerSubscription` (value: `'TRIGGER_SUBSCRIPTION'`)

* `Workflow` (value: `'WORKFLOW'`)



