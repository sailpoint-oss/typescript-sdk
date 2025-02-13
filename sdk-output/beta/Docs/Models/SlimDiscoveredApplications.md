# SlimDiscoveredApplicationsBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the discovered application. | [optional] [default to undefined]
**name** | **string** | Name of the discovered application. | [optional] [default to undefined]
**discoverySource** | **string** | Source from which the application was discovered. | [optional] [default to undefined]
**discoveredVendor** | **string** | The vendor associated with the discovered application. | [optional] [default to undefined]
**description** | **string** | A brief description of the discovered application. | [optional] [default to undefined]
**recommendedConnectors** | **Array&lt;string&gt;** | List of recommended connectors for the application. | [optional] [default to undefined]
**discoveredAt** | **string** | The timestamp when the application was last received via an entitlement aggregation invocation  or a manual csv upload, in ISO 8601 format. | [optional] [default to undefined]
**createdAt** | **string** | The timestamp when the application was first discovered, in ISO 8601 format. | [optional] [default to undefined]
**status** | **string** | The status of an application within the discovery source.  By default this field is set to \&quot;ACTIVE\&quot; when the application is discovered.  If an application has been deleted from within the discovery source, the status will be set to \&quot;INACTIVE\&quot;. | [optional] [default to undefined]

