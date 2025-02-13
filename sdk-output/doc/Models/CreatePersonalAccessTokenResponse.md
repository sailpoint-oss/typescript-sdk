# CreatePersonalAccessTokenResponseBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the personal access token (to be used as the username for Basic Auth). | [default to undefined]
**secret** | **string** | The secret of the personal access token (to be used as the password for Basic Auth). | [default to undefined]
**scope** | **Array&lt;string&gt;** | Scopes of the personal  access token. | [default to undefined]
**name** | **string** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | [default to undefined]
**owner** | [**PatOwnerBeta**](PatOwnerBeta.md) |  | [default to undefined]
**created** | **string** | The date and time, down to the millisecond, when this personal access token was created. | [default to undefined]
**accessTokenValiditySeconds** | **number** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [default to undefined]

