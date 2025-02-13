# CancelableAccountActivityBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the account activity itself | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**created** | **string** |  | [optional] [default to undefined]
**modified** | **string** |  | [optional] [default to undefined]
**completed** | **string** |  | [optional] [default to undefined]
**completionStatus** | [**CompletionStatusBeta**](CompletionStatusBeta.md) |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**requesterIdentitySummary** | [**IdentitySummaryBeta**](IdentitySummaryBeta.md) |  | [optional] [default to undefined]
**targetIdentitySummary** | [**IdentitySummaryBeta**](IdentitySummaryBeta.md) |  | [optional] [default to undefined]
**errors** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**warnings** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**items** | [**Array&lt;AccountActivityItemBeta&gt;**](AccountActivityItemBeta.md) |  | [optional] [default to undefined]
**executionStatus** | [**ExecutionStatusBeta**](ExecutionStatusBeta.md) |  | [optional] [default to undefined]
**clientMetadata** | **{ [key: string]: string; }** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] [default to undefined]
**cancelable** | **boolean** | Whether the account activity can be canceled before completion | [optional] [default to undefined]
**cancelComment** | [**CommentBeta**](CommentBeta.md) |  | [optional] [default to undefined]

