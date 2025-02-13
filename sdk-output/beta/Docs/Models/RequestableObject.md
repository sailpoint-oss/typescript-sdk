# RequestableObjectBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Id of the requestable object itself | [optional] [default to undefined]
**name** | **string** | Human-readable display name of the requestable object | [optional] [default to undefined]
**created** | **string** | The time when the requestable object was created | [optional] [default to undefined]
**modified** | **string** | The time when the requestable object was last modified | [optional] [default to undefined]
**description** | **string** | Description of the requestable object. | [optional] [default to undefined]
**type** | [**RequestableObjectTypeBeta**](RequestableObjectTypeBeta.md) |  | [optional] [default to undefined]
**requestStatus** | [**RequestableObjectRequestStatusBeta &amp; object**](RequestableObjectRequestStatusBeta &amp; object.md) |  | [optional] [default to undefined]
**identityRequestId** | **string** | If *requestStatus* is *PENDING*, indicates the id of the associated account activity. | [optional] [default to undefined]
**ownerRef** | [**IdentityReferenceWithNameAndEmailBeta**](IdentityReferenceWithNameAndEmailBeta.md) |  | [optional] [default to undefined]
**requestCommentsRequired** | **boolean** | Whether the requester must provide comments when requesting the object. | [optional] [default to undefined]

