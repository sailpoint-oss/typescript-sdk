# LifecycleStateBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Lifecycle state ID. | [optional] [readonly] [default to undefined]
**name** | **string** | Lifecycle state name. | [optional] [readonly] [default to undefined]
**technicalName** | **string** | Lifecycle state technical name. This is for internal use. | [optional] [readonly] [default to undefined]
**description** | **string** | Lifecycle state description. | [optional] [default to undefined]
**created** | **string** | Lifecycle state created date. | [optional] [readonly] [default to undefined]
**modified** | **string** | Lifecycle state modified date. | [optional] [readonly] [default to undefined]
**enabled** | **boolean** | Indicates whether the lifecycle state is enabled or disabled. | [optional] [default to false]
**identityCount** | **number** | Number of identities that have the lifecycle state. | [optional] [readonly] [default to undefined]
**emailNotificationOption** | [**EmailNotificationOptionBeta**](EmailNotificationOptionBeta.md) |  | [optional] [default to undefined]
**accountActions** | [**Array&lt;AccountActionBeta&gt;**](AccountActionBeta.md) |  | [optional] [default to undefined]
**accessProfileIds** | **Array&lt;string&gt;** | List of access-profile IDs that are associated with the lifecycle state. | [optional] [default to undefined]

