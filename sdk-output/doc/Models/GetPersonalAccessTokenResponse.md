# GetPersonalAccessTokenResponseBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the personal access token (to be used as the username for Basic Auth). | [default to undefined]
**name** | **string** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | [default to undefined]
**scope** | **Array&lt;string&gt;** | Scopes of the personal  access token. | [default to undefined]
**owner** | [**PatOwnerBeta**](PatOwnerBeta.md) |  | [default to undefined]
**created** | **string** | The date and time, down to the millisecond, when this personal access token was created. | [default to undefined]
**lastUsed** | **string** | The date and time, down to the millisecond, when this personal access token was last used to generate an access token. This timestamp does not get updated on every PAT usage, but only once a day. This property can be useful for identifying which PATs are no longer actively used and can be removed. | [optional] [default to undefined]
**managed** | **boolean** | If true, this token is managed by the SailPoint platform, and is not visible in the user interface. For example, Workflows will create managed personal access tokens for users who create workflows. | [optional] [default to false]

