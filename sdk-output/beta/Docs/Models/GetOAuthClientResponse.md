# GetOAuthClientResponseBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the OAuth client | [default to undefined]
**businessName** | **string** | The name of the business the API Client should belong to | [default to undefined]
**homepageUrl** | **string** | The homepage URL associated with the owner of the API Client | [default to undefined]
**name** | **string** | A human-readable name for the API Client | [default to undefined]
**description** | **string** | A description of the API Client | [default to undefined]
**accessTokenValiditySeconds** | **number** | The number of seconds an access token generated for this API Client is valid for | [default to undefined]
**refreshTokenValiditySeconds** | **number** | The number of seconds a refresh token generated for this API Client is valid for | [default to undefined]
**redirectUris** | **Array&lt;string&gt;** | A list of the approved redirect URIs used with the authorization_code flow | [default to undefined]
**grantTypes** | [**Array&lt;GrantTypeBeta&gt;**](GrantTypeBeta.md) | A list of OAuth 2.0 grant types this API Client can be used with | [default to undefined]
**accessType** | [**AccessTypeBeta**](AccessTypeBeta.md) |  | [default to undefined]
**type** | [**ClientTypeBeta**](ClientTypeBeta.md) |  | [default to undefined]
**internal** | **boolean** | An indicator of whether the API Client can be used for requests internal to IDN | [default to undefined]
**enabled** | **boolean** | An indicator of whether the API Client is enabled for use | [default to undefined]
**strongAuthSupported** | **boolean** | An indicator of whether the API Client supports strong authentication | [default to undefined]
**claimsSupported** | **boolean** | An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow | [default to undefined]
**created** | **string** | The date and time, down to the millisecond, when the API Client was created | [default to undefined]
**modified** | **string** | The date and time, down to the millisecond, when the API Client was last updated | [default to undefined]
**secret** | **string** |  | [optional] [default to undefined]
**metadata** | **string** |  | [optional] [default to undefined]
**lastUsed** | **string** | The date and time, down to the millisecond, when this API Client was last used to generate an access token. This timestamp does not get updated on every API Client usage, but only once a day. This property can be useful for identifying which API Clients are no longer actively used and can be removed. | [optional] [default to undefined]
**scope** | **Array&lt;string&gt;** | Scopes of the API Client. | [default to undefined]

