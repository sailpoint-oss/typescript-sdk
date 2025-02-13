# ResourceObjectBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | **string** | Identifier of the specific instance where this object resides. | [optional] [readonly] [default to undefined]
**identity** | **string** | Native identity of the object in the Source. | [optional] [readonly] [default to undefined]
**uuid** | **string** | Universal unique identifier of the object in the Source. | [optional] [readonly] [default to undefined]
**previousIdentity** | **string** | Native identity that the object has previously. | [optional] [readonly] [default to undefined]
**name** | **string** | Display name for this object. | [optional] [readonly] [default to undefined]
**objectType** | **string** | Type of object. | [optional] [readonly] [default to undefined]
**incomplete** | **boolean** | A flag indicating that this is an incomplete object. Used in special cases where the connector has to return account information in several phases and the objects might not have a complete set of all account attributes. The attributes in this object will replace the corresponding attributes in the Link, but no other Link attributes will be changed. | [optional] [readonly] [default to undefined]
**incremental** | **boolean** | A flag indicating that this is an incremental change object. This is similar to incomplete but it also means that the values of any multi-valued attributes in this object should be merged with the existing values in the Link rather than replacing the existing Link value. | [optional] [readonly] [default to undefined]
**_delete** | **boolean** | A flag indicating that this object has been deleted. This is set only when doing delta aggregation and the connector supports detection of native deletes. | [optional] [readonly] [default to undefined]
**remove** | **boolean** | A flag set indicating that the values in the attributes represent things to remove rather than things to add. Setting this implies incremental. The values which are always for multi-valued attributes are removed from the current values. | [optional] [readonly] [default to undefined]
**missing** | **Array&lt;string&gt;** | A list of attribute names that are not included in this object. This is only used with SMConnector and will only contain \&quot;groups\&quot;. | [optional] [readonly] [default to undefined]
**attributes** | **object** | Attributes of this ResourceObject. | [optional] [readonly] [default to undefined]
**finalUpdate** | **boolean** | In Aggregation, for sparse object the count for total accounts scanned identities updated is not incremented. | [optional] [readonly] [default to undefined]

