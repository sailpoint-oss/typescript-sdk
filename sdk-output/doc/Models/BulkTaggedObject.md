# BulkTaggedObjectBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectRefs** | [**Array&lt;TaggedObjectDtoBeta&gt;**](TaggedObjectDtoBeta.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Label to be applied to object. | [optional] [default to undefined]
**operation** | **string** | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [optional] [default to OperationBeta_Append]



## Enum: BulkTaggedObjectBetaOperationBeta


* `Append` (value: `'APPEND'`)

* `Merge` (value: `'MERGE'`)



