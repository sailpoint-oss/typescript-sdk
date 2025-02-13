# CreateOAuthClientRequestBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessName** | **string** | The name of the business the API Client should belong to | [optional] [default to undefined]
**homepageUrl** | **string** | The homepage URL associated with the owner of the API Client | [optional] [default to undefined]
**name** | **string** | A human-readable name for the API Client | [default to undefined]
**description** | **string** | A description of the API Client | [default to undefined]
**accessTokenValiditySeconds** | **number** | The number of seconds an access token generated for this API Client is valid for | [default to undefined]
**refreshTokenValiditySeconds** | **number** | The number of seconds a refresh token generated for this API Client is valid for | [optional] [default to undefined]
**redirectUris** | **Array&lt;string&gt;** | A list of the approved redirect URIs. Provide one or more URIs when assigning the AUTHORIZATION_CODE grant type to a new OAuth Client. | [optional] [default to undefined]
**grantTypes** | [**Array&lt;GrantTypeBeta&gt;**](GrantTypeBeta.md) | A list of OAuth 2.0 grant types this API Client can be used with | [default to undefined]
**accessType** | [**AccessTypeBeta**](AccessTypeBeta.md) |  | [default to undefined]
**type** | [**ClientTypeBeta**](ClientTypeBeta.md) |  | [optional] [default to undefined]
**internal** | **boolean** | An indicator of whether the API Client can be used for requests internal within the product. | [optional] [default to undefined]
**enabled** | **boolean** | An indicator of whether the API Client is enabled for use | [default to undefined]
**strongAuthSupported** | **boolean** | An indicator of whether the API Client supports strong authentication | [optional] [default to undefined]
**claimsSupported** | **boolean** | An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow | [optional] [default to undefined]
**scope** | **Array&lt;string&gt;** | Scopes of the API Client. If no scope is specified, the client will be created with the default scope \&quot;sp:scopes:all\&quot;. This means the API Client will have all the rights of the owner who created it. | [optional] [default to undefined]

