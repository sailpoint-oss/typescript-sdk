# NonEmployeeRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Non-Employee source id. | [optional] [default to undefined]
**sourceId** | **string** | Source Id associated with this non-employee source. | [optional] [default to undefined]
**name** | **string** | Source name associated with this non-employee source. | [optional] [default to undefined]
**description** | **string** | Source description associated with this non-employee source. | [optional] [default to undefined]
**accountName** | **string** | Requested identity account name. | [optional] [default to undefined]
**firstName** | **string** | Non-Employee\&#39;s first name. | [optional] [default to undefined]
**lastName** | **string** | Non-Employee\&#39;s last name. | [optional] [default to undefined]
**email** | **string** | Non-Employee\&#39;s email. | [optional] [default to undefined]
**phone** | **string** | Non-Employee\&#39;s phone. | [optional] [default to undefined]
**manager** | **string** | The account ID of a valid identity to serve as this non-employee\&#39;s manager. | [optional] [default to undefined]
**nonEmployeeSource** | [**NonEmployeeSourceLiteBeta**](NonEmployeeSourceLiteBeta.md) |  | [optional] [default to undefined]
**data** | **{ [key: string]: string; }** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] [default to undefined]
**approvalItems** | [**Array&lt;NonEmployeeApprovalItemBaseBeta&gt;**](NonEmployeeApprovalItemBaseBeta.md) | List of approval item for the request | [optional] [default to undefined]
**approvalStatus** | [**ApprovalStatusBeta**](ApprovalStatusBeta.md) |  | [optional] [default to undefined]
**comment** | **string** | Comment of requester | [optional] [default to undefined]
**completionDate** | **string** | When the request was completely approved. | [optional] [default to undefined]
**startDate** | **string** | Non-Employee employment start date. | [optional] [default to undefined]
**endDate** | **string** | Non-Employee employment end date. | [optional] [default to undefined]
**modified** | **string** | When the request was last modified. | [optional] [default to undefined]
**created** | **string** | When the request was created. | [optional] [default to undefined]

