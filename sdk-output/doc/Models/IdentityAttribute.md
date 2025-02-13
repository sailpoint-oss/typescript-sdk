# IdentityAttributeBeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Identity attribute\&#39;s technical name. | [default to undefined]
**displayName** | **string** | Identity attribute\&#39;s business-friendly name. | [optional] [default to undefined]
**standard** | **boolean** | Indicates whether the attribute is \&#39;standard\&#39; or \&#39;default\&#39;. | [optional] [default to false]
**type** | **string** | Identity attribute\&#39;s type. | [optional] [default to undefined]
**multi** | **boolean** | Indicates whether the identity attribute is multi-valued. | [optional] [default to false]
**searchable** | **boolean** | Indicates whether the identity attribute is searchable. | [optional] [default to false]
**system** | **boolean** | Indicates whether the identity attribute is \&#39;system\&#39;, meaning that it doesn\&#39;t have a source and isn\&#39;t configurable. | [optional] [default to false]
**sources** | [**Array&lt;Source1Beta&gt;**](Source1Beta.md) | Identity attribute\&#39;s list of sources - this specifies how the rule\&#39;s value is derived. | [optional] [default to undefined]

