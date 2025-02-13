# NonEmployeeSourceBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Non-Employee source id. | [optional] [default to undefined]
**sourceId** | **string** | Source Id associated with this non-employee source. | [optional] [default to undefined]
**name** | **string** | Source name associated with this non-employee source. | [optional] [default to undefined]
**description** | **string** | Source description associated with this non-employee source. | [optional] [default to undefined]
**approvers** | [**Array&lt;IdentityReferenceWithIdBeta&gt;**](IdentityReferenceWithIdBeta.md) | List of approvers | [optional] [default to undefined]
**accountManagers** | [**Array&lt;IdentityReferenceWithIdBeta&gt;**](IdentityReferenceWithIdBeta.md) | List of account managers | [optional] [default to undefined]
**modified** | **string** | When the request was last modified. | [optional] [default to undefined]
**created** | **string** | When the request was created. | [optional] [default to undefined]
**nonEmployeeCount** | **number** | The number of non-employee records on all sources that *requested-for* user manages. | [optional] [default to undefined]

