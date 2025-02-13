# CreatePersonalAccessTokenRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the personal access token (PAT) to be created. Cannot be the same as another PAT owned by the user for whom this PAT is being created. | [default to undefined]
**scope** | **Array&lt;string&gt;** | Scopes of the personal access token. If no scope is specified, the token will be created with the default scope \&quot;sp:scopes:all\&quot;. This means the personal access token will have all the rights of the owner who created it. | [optional] [default to undefined]
**accessTokenValiditySeconds** | **number** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [optional] [default to undefined]

