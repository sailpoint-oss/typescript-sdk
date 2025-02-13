# ManagedClientBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ManagedClient ID | [optional] [readonly] [default to undefined]
**alertKey** | **string** | ManagedClient alert key | [optional] [readonly] [default to undefined]
**apiGatewayBaseUrl** | **string** | ManagedClient gateway base url | [optional] [readonly] [default to undefined]
**ccId** | **number** | Previous CC ID to be used in data migration. (This field will be deleted after CC migration!) | [optional] [default to undefined]
**clientId** | **string** | The client ID used in API management | [default to undefined]
**clusterId** | **string** | Cluster ID that the ManagedClient is linked to | [default to undefined]
**cookbook** | **string** | VA cookbook | [optional] [readonly] [default to undefined]
**description** | **string** | ManagedClient description | [default to undefined]
**ipAddress** | **string** | The public IP address of the ManagedClient | [optional] [readonly] [default to undefined]
**lastSeen** | **string** | When the ManagedClient was last seen by the server | [optional] [readonly] [default to undefined]
**name** | **string** | ManagedClient name | [optional] [default to undefined]
**sinceLastSeen** | **string** | Milliseconds since the ManagedClient has polled the server | [optional] [readonly] [default to undefined]
**status** | [**ManagedClientStatusEnumBeta**](ManagedClientStatusEnumBeta.md) | Status of the ManagedClient | [optional] [readonly] [default to undefined]
**type** | **string** | Type of the ManagedClient (VA, CCG) | [default to undefined]
**vaDownloadUrl** | **string** | ManagedClient VA download URL | [optional] [readonly] [default to undefined]
**vaVersion** | **string** | Version that the ManagedClient\&#39;s VA is running | [optional] [readonly] [default to undefined]
**secret** | **string** | Client\&#39;s apiKey | [optional] [default to undefined]

