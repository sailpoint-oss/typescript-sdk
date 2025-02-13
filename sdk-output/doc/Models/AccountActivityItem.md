# AccountActivityItemBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Item id | [optional] [default to undefined]
**name** | **string** | Human-readable display name of item | [optional] [default to undefined]
**requested** | **string** | Date and time item was requested | [optional] [default to undefined]
**approvalStatus** | [**AccountActivityApprovalStatusBeta**](AccountActivityApprovalStatusBeta.md) |  | [optional] [default to undefined]
**provisioningStatus** | [**ProvisioningStateBeta**](ProvisioningStateBeta.md) |  | [optional] [default to undefined]
**requesterComment** | [**CommentBeta**](CommentBeta.md) |  | [optional] [default to undefined]
**reviewerIdentitySummary** | [**IdentitySummaryBeta**](IdentitySummaryBeta.md) |  | [optional] [default to undefined]
**reviewerComment** | [**CommentBeta**](CommentBeta.md) |  | [optional] [default to undefined]
**operation** | [**AccountActivityItemOperationBeta**](AccountActivityItemOperationBeta.md) |  | [optional] [default to undefined]
**attribute** | **string** | Attribute to which account activity applies | [optional] [default to undefined]
**value** | **string** | Value of attribute | [optional] [default to undefined]
**nativeIdentity** | **string** | Native identity in the target system to which the account activity applies | [optional] [default to undefined]
**sourceId** | **string** | Id of Source to which account activity applies | [optional] [default to undefined]
**accountRequestInfo** | [**AccountRequestInfoBeta**](AccountRequestInfoBeta.md) |  | [optional] [default to undefined]
**clientMetadata** | **{ [key: string]: string; }** | Arbitrary key-value pairs, if any were included in the corresponding access request item | [optional] [default to undefined]
**removeDate** | **string** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] [default to undefined]

