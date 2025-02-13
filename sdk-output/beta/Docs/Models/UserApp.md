# UserAppBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The user app id | [optional] [default to undefined]
**created** | **string** | Time when the user app was created | [optional] [default to undefined]
**modified** | **string** | Time when the user app was last modified | [optional] [default to undefined]
**hasMultipleAccounts** | **boolean** | True if the owner has multiple accounts for the source | [optional] [default to false]
**useForPasswordManagement** | **boolean** | True if the source has password feature | [optional] [default to false]
**provisionRequestEnabled** | **boolean** | True if the source app related to the user app is provision request enabled | [optional] [default to false]
**appCenterEnabled** | **boolean** | True if the source app related to the user app is shown in the app center | [optional] [default to true]
**sourceApp** | [**UserAppSourceAppBeta**](UserAppSourceAppBeta.md) |  | [optional] [default to undefined]
**source** | [**UserAppSourceBeta**](UserAppSourceBeta.md) |  | [optional] [default to undefined]
**account** | [**UserAppAccountBeta**](UserAppAccountBeta.md) |  | [optional] [default to undefined]
**owner** | [**UserAppOwnerBeta**](UserAppOwnerBeta.md) |  | [optional] [default to undefined]

