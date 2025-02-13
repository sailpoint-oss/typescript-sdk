# EntitlementBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The entitlement id | [optional] [default to undefined]
**name** | **string** | The entitlement name | [optional] [default to undefined]
**created** | **string** | Time when the entitlement was created | [optional] [default to undefined]
**modified** | **string** | Time when the entitlement was last modified | [optional] [default to undefined]
**attribute** | **string** | The entitlement attribute name | [optional] [default to undefined]
**value** | **string** | The value of the entitlement | [optional] [default to undefined]
**sourceSchemaObjectType** | **string** | The object type of the entitlement from the source schema | [optional] [default to undefined]
**privileged** | **boolean** | True if the entitlement is privileged | [optional] [default to false]
**cloudGoverned** | **boolean** | True if the entitlement is cloud governed | [optional] [default to false]
**description** | **string** | The description of the entitlement | [optional] [default to undefined]
**requestable** | **boolean** | True if the entitlement is requestable | [optional] [default to false]
**attributes** | **{ [key: string]: any; }** | A map of free-form key-value pairs from the source system | [optional] [default to undefined]
**source** | [**EntitlementSourceBeta**](EntitlementSourceBeta.md) |  | [optional] [default to undefined]
**owner** | [**EntitlementOwnerBeta**](EntitlementOwnerBeta.md) |  | [optional] [default to undefined]
**directPermissions** | [**Array&lt;PermissionDtoBeta&gt;**](PermissionDtoBeta.md) |  | [optional] [default to undefined]
**segments** | **Array&lt;string&gt;** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] [default to undefined]
**manuallyUpdatedFields** | [**EntitlementManuallyUpdatedFieldsBeta**](EntitlementManuallyUpdatedFieldsBeta.md) |  | [optional] [default to undefined]
**accessModelMetadata** | [**EntitlementAccessModelMetadataBeta**](EntitlementAccessModelMetadataBeta.md) |  | [optional] [default to undefined]

