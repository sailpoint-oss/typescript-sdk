# OwnerReferenceBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Owner type. This field must be either left null or set to \&#39;IDENTITY\&#39; on input, otherwise a 400 Bad Request error will result. | [optional] [default to undefined]
**id** | **string** | Identity id | [optional] [default to undefined]
**name** | **string** | Human-readable display name of the owner. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner\&#39;s display name, otherwise a 400 Bad Request error will result. | [optional] [default to undefined]



## Enum: OwnerReferenceBetaTypeBeta


* `Identity` (value: `'IDENTITY'`)



